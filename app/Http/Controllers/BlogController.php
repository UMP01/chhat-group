<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    public function index()
    {
        return Blog::all();
    }

    public function show($id)
    {
        $blog = Blog::find($id);
        if (!$blog) {
            return response()->json(['message' => 'Blog not found!'], 404);
        }
        return response()->json($blog);
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'title' => 'required|string',
            'content' => 'required|string',
            'category' => 'required|string',
        ]);

        $input = $request->all();

        // Handle image storage similar to Product
        if ($image = $request->file('image')) {
            $destinationPath = 'images/';
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['image'] = "$profileImage";
        }

        $blog = Blog::create($input);

        return response()->json($blog, 201);
    }

    public function update(Request $request, $id)
{
    $post = Blog::findOrFail($id);

    // Validate the incoming request
    $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'required|string',
        'category' => 'required|string',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

    // Update post data
    $post->title = $request->input('title');
    $post->content = $request->input('content');
    $post->category = $request->input('category');

    // Handle image upload if a new image is provided
    if ($request->hasFile('image')) {
        // Delete old image if exists
        if ($post->image && \Storage::exists("images/{$post->image}")) {
            \Storage::delete("images/{$post->image}");
        }

        // Store new image and update post image path
        $path = $request->file('image')->store('images', 'public');
        $post->image = basename($path);
    }

    // Save the updated post
    $post->save();

    return response()->json($post, 200);
}

    public function destroy($id)
    {
        $blog = Blog::find($id);
        if (!$blog) {
            return response()->json(['message' => 'Blog not found'], 404);
        }

        // Delete image from the filesystem
        if ($blog->image) {
            $imagePath = 'images/' . $blog->image;
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }

        $blog->delete();
        return response()->json(['message' => 'Blog deleted successfully'], 204);
    }
}
