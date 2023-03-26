<?php

use Illuminate\Support\Facades\Route;
use Package\Item\Http\Controllers\ItemController;

Route::get('item', [ItemController::class, 'index']);