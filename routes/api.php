
<<<<<<< HEAD
use App\Http\Controllers\ChhatGroupBlogController;
=======
<?php
use App\Http\Controllers\ContactController;
use App\Http\Controllers\UserController;
>>>>>>> 01a799b (add contact api and front-end)
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// User routes
Route::get('users', [UserController::class, 'index']);
Route::post('users', [UserController::class, 'store']);
Route::get('users/{id}', [UserController::class, 'show']);
Route::put('users/{id}', [UserController::class, 'update']);
Route::delete('users/{id}', [UserController::class, 'destroy']);

<<<<<<< HEAD
Route::get('chhatgroupblog', [ChhatGroupBlogController::class, 'index']);
Route::post('chhatgroupblog', [ChhatGroupBlogController::class, 'store']);

=======
// Contact routes
Route::get('contacts', [ContactController::class, 'index']);
Route::post('contacts', [ContactController::class, 'store']);
Route::get('contacts/{id}', [ContactController::class, 'show']);
Route::delete('contacts/{id}', [ContactController::class, 'destroy']);

//Chhat Group Blog routes
Route::get('groupblogs', [GroupBlogController::class, 'index']);
Route::post('groupblogs', [GroupBlogController::class, 'store']);
Route::get('groupblogs/{id}', [GroupBlogController::class, 'show']);
Route::put('groupblogs/{id}', [GroupBlogController::class, 'update']);
Route::delete('groupblogs/{id}', [GroupBlogController::class, 'destroy']);



// Authenticated user route (optional if needed)
>>>>>>> 01a799b (add contact api and front-end)
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
