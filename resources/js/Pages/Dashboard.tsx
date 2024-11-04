import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandStorybook,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import {
    LibraryBig,
    BookCheck,
    BookDashed,
    BookUp2,
 } from 'lucide-react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from '@/Components/ui/sidebar';
import { p } from 'framer-motion/client';

// Define the type for the User object
interface User {
    name: string;
    // Add any other properties you expect from the user object
}

// Props interface for DashboardContent
interface DashboardContentProps {
    user: User;
}


// Komponen utama Dashboard dengan layout dan sidebar
export default function Dashboard() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const user = usePage().props.auth.user;

  return (
    <AuthenticatedLayout>
    <Head title="Dashboard" />
    {/* <div className='flex flex-row gap-4'>
        <div>
            <p className="font-semibold text-red-700">Ayo pukul aku, pukul aku</p>
            <p>Terpukul {count} kali</p>
            <button onClick={()=> setCount(count + 1)} className='bg-red-400 font-bold'>Pukul</button>
            {count >= 10 && <p className='text-red-600'>Ampun bang</p>}
        </div>
        <div>
            <p className="font-semibold text-blue-700">Ayo ketik aku, ketik aku</p>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/> <br/>
            {text}
            {text.length >= 20 && <p className='text-blue-600'>Panjang amat bang ;)</p>}
        </div>
    </div> */}
    <DashboardContent user={user}/>
    </AuthenticatedLayout>
  );
}






// Konten dashboard
const DashboardContent: React.FC<DashboardContentProps> = ({ user }) => (
  <div className="lg:flex-col mx-autoinline-block justify-left px-8 py-6">
        <div className="px-12 py-8 lg:flex lg:lg:flex-1 gap-7 items-center rounded-xl bg-gray-50 dark:bg-gray-950 shadow-lg shadow-gray-300 dark:shadow-gray-900">
            <img src="images/library.png" alt="Logo" className='w-full max-w-sm'/>
            <div className="flex flex-col max-w-screen-lg">
                <h1 className='text-3xl font-bold'>Selamat pagi, {user.name}</h1>
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
                        <LibraryBig className='w-20 h-20 text-white'/>
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
                    <BookUp2 className='w-20 h-20 text-white'/>
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
                    <BookCheck className='w-20 h-20 text-white'/>
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
                    <BookDashed className='w-20 h-20 text-white'/>
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
