<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\Book;

class BookController extends Controller
{
    public function index(): Response{
        $books = Book::all();
        return Inertia::render('books/index', ['books' => $books]);
    }
    public function show(): Response{

        return Inertia::render('books/index');
    }
    public function create(): Response {
        return Inertia::render('books/create');
    }
    public function store(Request $request): RedirectResponse {
        $request->validate([
            'judul_buku' => 'string|required',
            'pengarang' => 'string|required',
            'penerbit' => 'string|required',
            'deskripsi' => 'string|required',
        ]);

        Book::create($request->all());

        return redirect('books')->with('success','Anda telah menambahkan buku');
    }
    public function update(): RedirectResponse {
        return redirect()->route('books.index')->with('success', 'Anda telah mengubah buku');
    }
    public function destroy(Book $book): RedirectResponse {
        $book->deleteOrFail();
        return redirect()->route('books.index')->with('success', 'Anda telah menghapus buku');
    }
}
