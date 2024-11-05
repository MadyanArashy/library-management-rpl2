<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index() {
        return Inertia::render('books/index');
    }
    public function create() {
        return Inertia::render('books/create');
    }
}
