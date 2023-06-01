<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/admin', function () {
    return Inertia::render('Admin/Index');
})->name('admin');

Route::get('/todoapp', function () {
    return Inertia::render('TodoApp/Root');
})->name('todoapp');

Route::get('/todoapp/contact', function () {
    return Inertia::render('TodoApp/pages/Contact');
})->name('todoapp');

Route::get('/todoapp/about', function () {
    return Inertia::render('TodoApp/pages/About');
})->name('todoapp');

Route::get('/todoapp/rj-usequery', function () {
    return Inertia::render('TodoApp/pages/RjUseQuery');
})->name('todoapp');

Route::get('/todoapp/blog', function () {
    return Inertia::render('TodoApp/pages/Blog');
})->name('blog');

Route::get('/todoapp/blog/{id}', function ($id) {
    return Inertia::render('TodoApp/pages/BlogPost',
    [
        'id' => $id
    ]);
})->name('blogpost');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
