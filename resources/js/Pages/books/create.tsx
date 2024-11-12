import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Input } from '@headlessui/react';
import React, { useState } from 'react';

const create = () => {

        const [judul_buku, setJudulBuku] = useState('');
        const [pengarang, setPengarang] = useState('');
        const [penerbit, setPenerbit] = useState('');
        const [deskripsi, setDeskripsi] = useState('');

        // Handle form submission
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault(); // Prevent form from reloading the page
            Inertia.post('/books', {
                judul_buku,
                pengarang,
                penerbit,
                deskripsi
            });
        };

        // Input change handlers
        const handleJudulBukuChange = (e: React.ChangeEvent<HTMLInputElement>) => setJudulBuku(e.target.value);
        const handlePengarangChange = (e: React.ChangeEvent<HTMLInputElement>) => setPengarang(e.target.value);
        const handlePenerbitChange = (e: React.ChangeEvent<HTMLInputElement>) => setPenerbit(e.target.value);
        const handleDeskripsiChange = (e: React.ChangeEvent<HTMLInputElement>) => setDeskripsi(e.target.value);

  return (
    <Authenticated>
        <div className="flex flex-col max-w-screen-lg mx-auto">
            <h1 className='text-center font-bold text-3xl'>Add New Book</h1>
            <form className="flex flex-col mx-auto gap-5 w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col text-gray-600">
                    <label htmlFor="judul_buku">Judul Buku</label>
                    <Input
                        className="rounded-full focus:outline-2 outline-blue-500"
                        type="text"
                        value={judul_buku}
                        name="judul_buku"
                        onChange={handleJudulBukuChange}
                        required
                    />
                </div>
                <div className="flex flex-row justify-between max-w-full gap-4">
                    <div className="flex flex-col text-gray-600 w-1/2">
                        <label htmlFor="pengarang">Pengarang</label>
                        <Input
                            className="rounded-full focus:outline-2 outline-blue-500"
                            type="text"
                            value={pengarang}
                            name="pengarang"
                            onChange={handlePengarangChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col text-gray-600 w-1/2">
                        <label htmlFor="penerbit">Penerbit</label>
                        <Input
                            className="rounded-full focus:outline-2 outline-blue-500"
                            type="text"
                            value={penerbit}
                            name="penerbit"
                            onChange={handlePenerbitChange}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col text-gray-600">
                    <label htmlFor="deskripsi">Deskripsi</label>
                    <Input
                        className="rounded-full focus:outline-2 outline-blue-500"
                        type="text"
                        value={deskripsi}
                        name="deskripsi"
                        onChange={handleDeskripsiChange}
                        required
                    />
                </div>
                <button type="submit" className="bg-cyan-600 px-3.5 py-2.5 rounded-full inline text-white">Add Book</button>
            </form>
        </div>
    </Authenticated>
  )
}

export default create
