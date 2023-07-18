<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Roles;
use App\Models\Supplier;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Supplier::factory(20)->create();
        // DB::table('rules')->insert([
        //     [
        //         'name' => 'Логистика',
        //         'value' => 'logistic'
        //     ],
        //     [
        //         'name' => 'Кладовщик',
        //         'value' => 'opWH'
        //     ],
        //     [
        //         'name' => 'Оператор Фидинга',
        //         'value' => 'opFeeding'
        //     ],
        //     [
        //         'name' => 'Оператор Komax',
        //         'value' => 'opKomax'
        //     ]
        // ]);
    }
}
