<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Blog::all();

        // Ensure the full image URL is included
        $posts->each(function ($post) {
            $post->image_url = $post->image ? Storage::url($post->image) : null;
        });

        return response()->json($posts);
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

        // Handle image storage
        if ($image = $request->file('image')) {
            // Generate filename
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            
            // Store image using the public disk
            $path = $image->storeAs('images', $profileImage, 'public');
            
            // Save relative path to the database
            $input['image'] = 'images/' . $profileImage;
        }

        // Create blog post
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
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Image is optional
        ]);

        // Update post data
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->category = $request->input('category');

        // Handle image upload if a new image is provided
        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($post->image && \Storage::exists("public/{$post->image}")) {
                \Storage::delete("public/{$post->image}");
            }
        
            // Get the uploaded image
            $image = $request->file('image');
            
            // Generate filename
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            
            // Store image using the public disk
            $path = $image->storeAs('images', $profileImage, 'public');
            
            // Save new image path to the database
            $post->image = 'images/' . $profileImage;
            $post->save();
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

        // Delete the image from storage if it exists
        if ($blog->image) {
            $imagePath = $blog->image; // The image path is already relative to 'storage/app/public'
            
            // Delete image using the Storage facade (make sure it exists on the 'public' disk)
            if (Storage::exists("public/{$imagePath}")) {
                Storage::delete("public/{$imagePath}");
            }
        }

        // Delete the blog post itself
        $blog->delete();

        return response()->json(['message' => 'Blog deleted successfully'], 204);
    }

}
