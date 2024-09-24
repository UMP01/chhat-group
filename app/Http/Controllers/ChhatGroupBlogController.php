<?php

namespace App\Http\Controllers;

use App\Models\ChhatGroupBlogModel;
use Illuminate\Http\Request;

class ChhatGroupBlogController extends Controller
{
    function index(){
        return "Test";
    }


   function store(Request $request){
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
            'author' => 'required',
            'dateposted' => 'required',
            'tage' => 'required',
           // 'media' => ' ',

        ]);
        $chhatgroupblog= ChhatGroupBlogModel::created([
            'title'=>$validated['title'],
            'content'=>$validated['content'],
            'author'=>$validated['author'],
            'dateposted'=>$validated['dateposted'],
            'tage'=>$validated['tage'],
        ]);
        return response()->json($chhatgroupblog, 201);
        var_dump($chhatgroupblog);
   }
   
}
