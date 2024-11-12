import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

interface Book {
    id: number;
    judul_buku: string;
    pengarang: string;
    penerbit: string;
    deskripsi: string;
}

interface Props {
    books: Book[];
}

const IndexBooks: React.FC<Props> = ({ books }) => {
    const { flash } = usePage().props as any;

    const handleDelete = (id: number) => {
        if (confirm("Yakin ingin menghapus buku ini?")) {
            Inertia.delete(route("books.destroy", id));
        }
    };

    return (
        <Authenticated>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-1/2"></div>
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <Link
                                    href={route("books.create")}
                                    type="button"
                                    className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                >
                                    Tambah Buku
                                </Link>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">
                                            No
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            Judul Buku
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            Pengarang
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            Penerbit
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            Deskripsi
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books.map((book, index) => (
                                        <tr
                                            key={book.id}
                                            className="border-b dark:border-gray-700"
                                        >
                                            <td className="px-4 py-3">
                                                {index + 1}
                                            </td>
                                            <th
                                                scope="row"
                                                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {book.judul_buku}
                                            </th>
                                            <td className="px-4 py-3">
                                                {book.pengarang}
                                            </td>
                                            <td className="px-4 py-3">
                                                {book.penerbit}
                                            </td>
                                            <td className="px-4 py-3 max-w-screen-sm">
                                                {book.deskripsi}
                                            </td>
                                            <td className="px-4 py-3 space-x-2">
                                                <Link
                                                    href={route('books.edit', book.id)}
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(book.id)}
                                                    className="text-red-600 hover:underline"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default IndexBooks;
