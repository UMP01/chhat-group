<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CareerController;
use Illuminate\Support\Facades\Route;

// Public Routes (accessible by everyone)
Route::get('blogs', [BlogController::class, 'index']); // Fetch all published blog posts
Route::get('blogs/{id}', [BlogController::class, 'show']); // Fetch a single blog post by ID
Route::get('careers', [CareerController::class, 'index']);
Route::get('careers/{id}', [CareerController::class, 'show']);
Route::post('contacts', [ContactController::class, 'store']);


// Authentication Routes (Login)
Route::post('login', [AuthController::class, 'login']); // Login route (public)

// Routes protected by authentication (for admin users)
Route::middleware(['auth:sanctum'])->group(function () {
    // User-related routes
    Route::get('users', [UserController::class, 'index']);
    Route::get('users/{id}', [UserController::class, 'show']);
    Route::post('users', [UserController::class, 'store']);
    Route::put('users/{id}', [UserController::class, 'update']);
    Route::delete('users/{id}', [UserController::class, 'destroy']);

    // Contact-related routes
    Route::get('contacts', [ContactController::class, 'index']);
    Route::get('contacts/{id}', [ContactController::class, 'show']);
    Route::delete('contacts/{id}', [ContactController::class, 'destroy']);

    // Career-related routes
    Route::post('careers', [CareerController::class, 'store']);
    Route::put('careers/{id}', [CareerController::class, 'update']);
    Route::delete('careers/{id}', [CareerController::class, 'destroy']);

    // Blog-related routes (admin access)
    Route::post('blogs', [BlogController::class, 'store']); // Create a new blog post
    Route::put('blogs/{id}', [BlogController::class, 'update']); // Update a blog post
    Route::delete('blogs/{id}', [BlogController::class, 'destroy']); // Delete a blog post
});

