<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
})->name('home');
Route::post('/login',[LoginController::class,'store'])->name('login');
Route::post('/register',[LoginController::class,'register'])->name('register');


Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');
Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');
