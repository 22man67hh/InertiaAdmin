<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontPageController extends Controller
{
    public function About() {
        return Inertia::render('website/About/About', [
            'title' => 'About Us',

        ]);
    }

    public function News(){
        return Inertia::render('website/News/News',[
            'title'=>"News"
        ]);
    }
    public function Blogs(){
        return Inertia::render('website/Blog/Main',[
            'title'=>"Blogs"
        ]);
    }

}
