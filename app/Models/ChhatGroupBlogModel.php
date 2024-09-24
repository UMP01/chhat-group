<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChhatGroupBlogModel extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 'content', 'author', 'dateposted', 'tags', 'media'
    ];
}
