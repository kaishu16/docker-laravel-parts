<?php

namespace Package\Item\Http\Controllers;

use Illuminate\Routing\Controller;

class ItemController extends Controller
{
    public function index()
    {
        // パッケージ内のviewを指定
        return view('item::item');
    }
}