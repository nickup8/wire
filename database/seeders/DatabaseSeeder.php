<?php

namespace Database\Seeders;

use App\Enum\RolesEnum;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Hash;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // User::factory(10)->create();

        Role::create([
            'name' => RolesEnum::LOGISTIC->value,
        ]);

        Role::create([
            'name' => RolesEnum::TECHNICAL->value,
        ]);

        Role::create([
            'name' => RolesEnum::FEEDING->value,
        ]);

        Role::create([
            'name' => RolesEnum::MACHINE->value,
        ]);

        Role::create([
            'name' => RolesEnum::USERMANAGER->value,
        ]);

        User::create([
            'first_name' => 'Николай',
            'last_name' => 'Сироткин',
            'login' => '4500',
            'password' => Hash::make('password'),


        ])->assignRole(['logistic', 'technical', 'feeding', 'machine', 'user_manager']);
    }
}
