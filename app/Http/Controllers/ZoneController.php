<?php

namespace App\Http\Controllers;

use App\Http\Requests\ZoneRequest;
use App\Models\Zone;
use Illuminate\Http\Request;

class ZoneController extends Controller
{
    public function index()
    {
        $zones = Zone::paginate(10);
        return inertia('Zone/Zone', [
            'zones' => $zones
        ]);
    }

    public function store(ZoneRequest $request)
    {
        $data = $request->validated();

        Zone::create([
            'name' => 'Зона ' . $data['name'],
        ]);

        return redirect()->back();
    }

    public function destroy(Zone $zone)
    {
        $zone->delete();
        return redirect()->back();
    }


}
