<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontPageController extends Controller
{
    public function About(){
        return inertia('website/About/About');
    }
}
