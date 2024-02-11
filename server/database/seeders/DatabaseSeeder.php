<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

//import ang user
use App\Models\Users;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Users::factory(50)->create();
    }
}
