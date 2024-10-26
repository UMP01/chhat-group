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
        'dateline', 
        'jobtype', 
        'salary', 
        'requirement', 
        'responsible', 
        'benefit'
    ];

    protected $casts = [
        'dateline' => 'date', // Treat dateline as a date
    ];
}
