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

    // Debugging: Log incoming request data
    \Log::info('Received request for update:', $request->all());

    // Validate incoming data
    $request->validate([
        'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
        'title' => 'required|string',
        'content' => 'required|string',
        'category' => 'required|string',
    ]);

    $data = []; // Initialize the data array

    // Update fields if provided
    if ($request->hasFile('image')) {
        // Optionally delete the old image
        Storage::disk('public')->delete($blog->image);
        $data['image'] = $request->file('image')->store('images', 'public');
    } else {
        // If no new image is provided, keep the existing one
        $data['image'] = $blog->image;
    }

    // Always include title, content, and category if they are required
    $data['title'] = $request->input('title', $blog->title);
    $data['content'] = $request->input('content', $blog->content);
    $data['category'] = $request->input('category', $blog->category);

    // Update the blog with the new data
    $blog->update($data);

    return response()->json($blog);
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
