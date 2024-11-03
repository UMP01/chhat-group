<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    use HasFactory; // Enables the use of factories

    protected $fillable = [
        'title', 
        'location', 
        'deadline', 
        'jobtype', 
        'salary', 
        'requirement', 
        'responsible', 
        'benefit'
    ];

    protected $casts = [
        'deadline' => 'date', // Treat dateline as a date
    ];
}
