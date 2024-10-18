<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; // Import this trait

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens; // Include HasApiTokens

    protected $fillable = [
        'name', 'email', 'phone', 'dob', 'branch', 'permission', 'password', 'image',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'dob' => 'date',
        'status' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('status', '0');
    }
}
