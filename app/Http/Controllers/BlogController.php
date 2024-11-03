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
        $blog = Blog::find($id);
        if (!$blog) {
            return response()->json(['message' => 'Blog not found'], 404);
        }

        $request->validate([
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
            'title' => 'required|string',
            'content' => 'required|string',
            'category' => 'required|string',
        ]);

        $input = $request->all();

        if ($request->hasFile('image')) {
            $imagePath = 'images/' . $blog->image; // Full path to the current image

            // Delete the old image if it exists
            if ($blog->image && file_exists($imagePath)) {
                unlink($imagePath);
            }

            // Store the new image
            $destinationPath = 'images/';
            $profileImage = date('YmdHis') . "." . $request->file('image')->getClientOriginalExtension();
            $request->file('image')->move($destinationPath, $profileImage);
            $input['image'] = "$profileImage";
        } else {
            unset($input['image']);
        }

        $blog->update($input);

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
