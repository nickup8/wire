<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // register a new user method
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'password' => Hash::make($data['password']),
            'rules_id' => $data['rules_id'],
        ]);
        // $token = $user->createToken('auth_token')->plainTextToken;

        // $cookie = cookie('token', $token, 60 * 24);
        return response()->json([
            'user' => new UserResource($user),
        ]);
    }

    // login a user method

    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        $user = User::where('name', $data['name'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response()->json([
                'message' => 'Пароль неверный',
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        $cookie = cookie('token', $token, 60 * 24);

        return response()->json([
            'user' => new UserResource($user),
            'token' => $token,

        ])->withCookie($cookie);
    }

    // logout a user method

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        $cookie = cookie()->forget('token');

        return response()->json([
            'message' => 'Logged out successfully!',
        ])->withCookie($cookie);
    }

    // get the authenticated user method

    public function user(Request $request)
    {
        return new UserResource($request->user());
    }
}
