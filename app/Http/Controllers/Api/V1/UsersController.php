<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;

class UsersController extends Controller
{
    public function index()
    {
        return UserResource::collection(User::all());
    }
}
