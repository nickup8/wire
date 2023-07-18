<?php

use App\Http\Controllers\Api\V1\SupplierController;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\RulesController;
use App\Http\Controllers\Api\V1\UsersController;
use App\Http\Resources\SupplierResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::prefix('v1')->group(function () {
    Route::apiResource('/rules', RulesController::class);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('v1')->group(function () {
        Route::apiResource('/suppliers', SupplierController::class);
        Route::apiResource('/users', UsersController::class);
    });
    Route::post('/logout', [AuthController::class, 'logout']);
});
