
<?php
use App\Http\Controllers\ContactController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CareerController;

// Public routes
Route::post('login', [AuthController::class, 'login']);

// Protected routes - accessible only to authenticated users
Route::middleware(['auth:sanctum'])->group(function () {
    // User routes
    Route::get('users', [UserController::class, 'index']);
    Route::get('users/{id}', [UserController::class, 'show']);
    Route::post('users', [UserController::class, 'store']);
    Route::put('users/{id}', [UserController::class, 'update']);
    Route::delete('users/{id}', [UserController::class, 'destroy']);

    // Contact routes
    Route::get('contacts', [ContactController::class, 'index']);
    Route::post('contacts', [ContactController::class, 'store']);
    Route::get('contacts/{id}', [ContactController::class, 'show']);
    Route::delete('contacts/{id}', [ContactController::class, 'destroy']);

    // Authenticated user route
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Blog routes
    Route::get('blogs', [BlogController::class, 'index']);
    Route::get('blogs/{id}', [BlogController::class, 'show']);
    Route::post('blogs', [BlogController::class, 'store']);
    Route::put('blogs/{id}', [BlogController::class, 'update']);
    Route::delete('blogs/{id}', [BlogController::class, 'destroy']);

    // Career routes
    Route::get('careers', [CareerController::class, 'index']);
    Route::post('careers', [CareerController::class, 'store']);
    Route::get('careers/{id}', [CareerController::class, 'show']);
    Route::put('careers/{id}', [CareerController::class, 'update']);
    Route::delete('careers/{id}', [CareerController::class, 'destroy']);
});
