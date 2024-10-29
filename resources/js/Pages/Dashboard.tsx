import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandStorybook,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from '@/Components/ui/sidebar';


// Komponen utama Dashboard dengan layout dan sidebar
export default function Dashboard() {
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <nav>

      </nav>
      <DashboardContent/>
    </AuthenticatedLayout>
  );
}






// Konten dashboard
const DashboardContent = () => (
  <div className="lg:flex-col mx-autoinline-block justify-left px-8 py-6">
        <div className="px-12 py-8 lg:flex lg:lg:flex-1 gap-7 items-center rounded-xl bg-gray-50 dark:bg-gray-950 shadow-lg shadow-gray-300 dark:shadow-gray-900">
            <img src="images/library.png" alt="Logo" className='w-full max-w-sm'/>
            <div className="flex flex-col max-w-screen-lg">
                <h1 className='text-3xl font-bold'>Selamat pagi, Admin!</h1>
                <h3 className='text-gray-800 dark:text-gray-200 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nam dolor praesentium dicta velit ipsum culpa cumque molestias illum odio, voluptas provident error quod debitis rem aut, ducimus vitae veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <div className="flex gap-16 mt-3">
                    <Link href={route('profile.destroy')} className='px-4 py-2 bg-gray-200 dark:text-black rounded-md lg:rounded-full text-nowrap'>Baca Buku</Link>
                    <Link href={route('profile.destroy')} className='px-4 py-2 bg-[#A78E51] text-white rounded-md lg:rounded-full text-nowrap'>Pinjam Buku</Link>
                </div>
            </div>
        </div>
        <div className='mt-8'>
            <h2 className='text-2xl font-extrabold'>Info Dashboard Buku</h2>
            <div className="flex flex-col lg:flex-row justify-between">
                <p>Dashboard informasi buku total buku dipinjam, buku dikembalikan, buku rusak.</p>
                <button className='bg-gray-300 rounded-lg px-3 py-2 inline-block max-w-xs mx-auto lg:mx-0'>
                    Kelola
                </button>
            </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Card */}
            <div className="card flex-col justify-between items-center inline-block bg-[#6E987C] px-6 py-3 text-white w-56 h-56 rounded-xl">
                <div className="flex flex-row items-center justify-between mb-16 w-full">
                    <span>
                        <IconBrandStorybook className='w-20 h-20 text-white'/>
                    </span>
                    <span className="text-6xl">
                        73
                    </span>
                </div>
                <p className="text-center">Buku Dipinjam</p>
            </div>
            {/* Card */}
            <div className="card flex-col justify-between items-center inline-block bg-[#22615D] px-6 py-3 text-white w-56 h-56 rounded-xl">
                <div className="flex flex-row items-center justify-between mb-16 w-full">
                    <span>
                    <svg className="w-20 h-20 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"/>
                    </svg>

                    </span>
                    <span className="text-6xl">
                        24
                    </span>
                </div>
                <p className="text-center">Sedang Dipinjam</p>
            </div>
            {/* Card */}
            <div className="card flex-col justify-between items-center inline-block bg-[#FBC78F] px-6 py-3 text-white w-56 h-56 rounded-xl">
                <div className="flex flex-row items-center justify-between mb-16 w-full">
                    <span>
                    <svg className="w-20 h-20 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd"/>
                    </svg>

                    </span>
                    <span className="text-6xl">
                        58
                    </span>
                </div>
                <p className="text-center">Buku Dikembalikan</p>
            </div>
            {/* Card */}
            <div className="card flex-col justify-between items-center inline-block bg-[#AC455E] px-6 py-3 text-white w-56 h-56 rounded-xl">
                <div className="flex flex-row items-center justify-between mb-16 w-full">
                    <span>
                    <svg className="w-20 h-20 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z"/>
                    </svg>
                    </span>
                    <span className="text-6xl">
                        16
                    </span>
                </div>
                <p className="text-center">Buku Rusak</p>
            </div>
        </div>
  </div>
);
