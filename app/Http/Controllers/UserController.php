<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    // Fetch active users
    public function index()
    {
        return User::where('status', '0')->get();
    }

    // Store a new user
    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'required|string|max:15',
            'dob' => 'required|date',
            'branch' => 'required|string|max:255',
            'permission' => 'required|in:admin,editor,viewer',
            'password' => 'required|string|min:8',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Hash the password before saving
        $validatedData['password'] = Hash::make($validatedData['password']);

        // Handle the image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images/users', 'public');
            $validatedData['image'] = $imagePath;
        } else {
            // Set a default image if no image is uploaded
            $validatedData['image'] = 'images/users/default_logo.png';
        }

        // Create the user and return response
        $user = User::create($validatedData);
        return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
    }

    // Show details of a single active user
    public function show($id) {
        $user = User::where('status', '0')->find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        return response()->json($user);
    }

    // Update user details
    public function update(Request $request, $id)
    {
        // Fetch the active user to update
        $user = User::where('status', '0')->findOrFail($id);

        // Validate the request data
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $user->id,
            'phone' => 'sometimes|required|string|max:15',
            'dob' => 'sometimes|required|date',
            'branch' => 'sometimes|required|string|max:255',
            'permission' => 'sometimes|required|in:admin,editor,viewer',
            'password' => 'sometimes|nullable|string|min:8',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Hash the password if it's being updated
        if (!empty($validatedData['password'])) {
            $validatedData['password'] = Hash::make($validatedData['password']);
        }

        // Handle the image upload if a new image is provided
        if ($request->hasFile('image')) {
            // Delete the old image if it exists
            if ($user->image && $user->image !== 'images/users/default_logo.png') {
                Storage::disk('public')->delete($user->image);
            }
            // Store the new image
            $imagePath = $request->file('image')->store('images/users', 'public');
            $validatedData['image'] = $imagePath;
        }

        // Update the user's details
        $user->update($validatedData);

        return response()->json(['message' => 'User updated successfully', 'user' => $user], 200);
    }

    // Soft delete a user
    public function destroy($id)
    {
        $user = User::where('status', '0')->findOrFail($id);

        // Mark the user as deleted
        $user->status = '1';
        $user->save();

        // Return confirmation response
        return response()->json(['message' => 'User deleted successfully'], 200);
    }
}
