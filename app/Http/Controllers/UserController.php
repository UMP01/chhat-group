<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function index()
    {
        return User::where('status', '0')->get();
    }

    public function store(Request $request)
    {
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

        $validatedData['password'] = Hash::make($validatedData['password']);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images/users', 'public');
            $validatedData['image'] = $imagePath;
        } else {
            $validatedData['image'] = 'images/users/default_logo.png';
        }

        $user = User::create($validatedData);
        return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
    }

    public function show($id) {
        $user = User::where('status', '0')->find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        return response()->json($user);
    }

    public function update(Request $request, $id)
    {
        $user = User::where('status', '0')->findOrFail($id);

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

        if (!empty($validatedData['password'])) {
            $validatedData['password'] = Hash::make($validatedData['password']);
        }

        if ($request->hasFile('image')) {
            if ($user->image && $user->image !== 'images/users/default_logo.png') {
                Storage::disk('public')->delete($user->image);
            }
            $imagePath = $request->file('image')->store('images/users', 'public');
            $validatedData['image'] = $imagePath;
        }

        $user->update($validatedData);

        return response()->json(['message' => 'User updated successfully', 'user' => $user], 200);
    }

    public function destroy($id)
    {
        $user = User::where('status', '0')->findOrFail($id);

        $user->status = '1';
        $user->save();

        return response()->json(['message' => 'User deleted successfully'], 200);
    }
}
