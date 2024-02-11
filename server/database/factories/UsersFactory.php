<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UsersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=> $this->faker->name(),
            'email'=> $this->faker->unique()->safeEmail(),
            'role'=> $this->faker->randomElement(['admin','staff']),
            'phone'=> $this->faker->numberBetween(1000000000, 9999999999),
        ];
    }
}
