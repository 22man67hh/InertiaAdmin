<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OthersController extends Controller
{
    public function sidebar(){
        return inertia('Sidebar');
    }
}
