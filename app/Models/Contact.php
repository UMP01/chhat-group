<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    // Add the following line
    protected $fillable = ['fullname', 'email', 'subject', 'message'];
}
