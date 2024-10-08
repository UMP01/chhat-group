<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable; // Include Notifiable for notifications

    protected $fillable = [
        'name', 'email', 'phone', 'dob', 'branch', 'permission', 'password'
    ];

    protected $hidden = [
        'password', 'remember_token', // Hide sensitive fields when serialized
    ];

    protected $casts = [
        'dob' => 'date',
        'status' => 'boolean', // Cast 'status' to a boolean
    ];

    // Scope for active users
    public function scopeActive($query)
    {
        return $query->where('status', '0'); // 0 represents active
    }
}
