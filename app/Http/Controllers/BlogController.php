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
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'title' => 'required|string',
            'content' => 'required|string',
            'category' => 'required|string',
        ]);

        // Store the image
        $imagePath = $request->file('image')->store('images', 'public');

        $blog = Blog::create([
            'image' => $imagePath,
            'title' => $request->title,
            'content' => $request->content,
            'category' => $request->category,
        ]);

        return response()->json($blog, 201);
    }

    public function update(Request $request, $id)
{
    $blog = Blog::find($id);
    if (!$blog) {
        return response()->json(['message' => 'Blog not found'], 404);
    }


    // Validate incoming data
    $request->validate([
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        'title' => 'required|string',
        'content' => 'required|string',
        'category' => 'required|string',
    ]);

    $data = [
        'title' => $request->title,
        'content' => $request->content,
        'category' => $request->category,
    ];
    

    // Check if there's a new image to update
    if ($request->hasFile('image')) {
        $imagePath = $blog->image; // Get the current image path

        // Delete the old image if it exists
        if (Storage::disk('public')->exists($imagePath)) {
            Storage::disk('public')->delete($imagePath);
        }

        // Store the new image and update the image path
        $newImagePath = $request->file('image')->store('images', 'public');
        $data['image'] = $newImagePath;
    }

    // Update the blog entry
    $blog->update($data);

    return response()->json([
        'message' => 'Blog updated successfully!',
        'blog' => $blog,
    ], 200);
}


    public function destroy($id)
    {
        $blog = Blog::find($id);
        if (!$blog) {
            return response()->json(['message' => 'Blog not found'], 404);
        }

        // Image delete
        if ($blog->image) {
            Storage::disk('public')->delete($blog->image);
        }

        $blog->delete();
        return response()->json(['message' => 'Blog deleted successfully'], 204);
    }
}
