<?php

use App\Http\Controllers\FrontPageController;
use App\Http\Controllers\OthersController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get("/",function(){
return inertia('website/Main');
});
// Route::get("/about",function(){
//     return inertia('website/About/About');
// });
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/about',[FrontPageController::class,'about'])->name('about');
Route::get('/news',[FrontPageController::class,'News'])->name('news');
Route::get('/blogs',[FrontPageController::class,'Blogs'])->name('blogs');
Route::get('/gallery',[FrontPageController::class,'Gallery'])->name('gallery');
Route::get('adminss',[OthersController::class,'sidebar'])->name('sidebar');
require __DIR__.'/auth.php';
