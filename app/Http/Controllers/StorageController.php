<?php

namespace App\Http\Controllers;

use App\Models\Zone;
use Illuminate\Http\Request;

class StorageController extends Controller
{
    public function index()
    {
        $zones = Zone::all();
        return inertia('Storage/StorageIndex', [
            'zones' => $zones
        ]);
    }
}
