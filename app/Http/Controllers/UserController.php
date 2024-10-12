<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // Fetch active users
    public function index()
    {
        return User::active()->get();
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
            'password' => 'required|string|min:8', // Ensure password is provided on create
        ]);

        // Hash the password before saving
        $validatedData['password'] = Hash::make($validatedData['password']);

        // Create the user and return response
        $user = User::create($validatedData);
        return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
    }

    // Show details of a single active user
    public function show($id) {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        return response()->json($user);
    }
    
    
    

    // Update user details
    public function update(Request $request, $id)
    {
        // Fetch the active user to update
        $user = User::active()->findOrFail($id);

        // Validate the request data
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $user->id,
            'phone' => 'sometimes|required|string|max:15',
            'dob' => 'sometimes|required|date',
            'branch' => 'sometimes|required|string|max:255',
            'permission' => 'sometimes|required|in:admin,editor,viewer',
            'password' => 'sometimes|nullable|string|min:8', // Password should be optional
        ]);

        // Hash the password if it's being updated
        if (!empty($validatedData['password'])) {
            $validatedData['password'] = Hash::make($validatedData['password']);
        }

        // Update the user data
        $user->update($validatedData);

        // Return the updated user details
        return response()->json(['message' => 'User updated successfully', 'user' => $user], 200);
    }

    // Soft delete a user (set status to inactive)
    public function destroy($id)
    {
        // Find the active user to soft delete
        $user = User::active()->findOrFail($id);

        // Set status to '1' (inactive/deleted)
        $user->status = '1';
        $user->save();

        // Return confirmation response
        return response()->json(['message' => 'User deleted successfully'], 200);
    }
}
