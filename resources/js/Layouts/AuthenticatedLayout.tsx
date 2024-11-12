import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Sidebar, SidebarBody, SidebarLink } from '@/Components/ui/sidebar';
import { Head, Link, usePage } from '@inertiajs/react';
import { IconBrandTabler, IconUserBolt, IconSettings, IconArrowLeft, IconBrandStorybook } from '@tabler/icons-react';
import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
        const links = [
            {
              label: "Dashboard",
              href: route('dashboard'),
              icon: (
                <>
                <IconBrandTabler className="hidden dark:block dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                <img src='/images/dashboard.png' className='dark:hidden w-6' alt="Dashboard Icon"/>
                </>
              ),
            },
            {
              label: "Lemari Buku",
              href: route('books.index'),
              icon: (
                <>
                <IconUserBolt className="hidden dark:block dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                <img src="/images/lemari.png" className='dark:hidden w-6'/>
                </>
              ),
            },
            {
              label: "Tambah Buku",
              href: route('books.create'),
              icon: (
                <>
                <IconBrandStorybook className="dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                </>
              ),
            },
            {
              label: "Pengaturan",
              href: route('dashboard'),
              icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              ),
            },
          ];
          const [open, setOpen] = useState(false);
          const [currentTime, setCurrentTime] = useState(new Date());

          useEffect(() => {
            const interval = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);
            return () => clearInterval(interval);
          },[]);

          const formattedDate = currentTime.toLocaleDateString("id-ID",{
            weekday: "long",
            day: 'numeric',
            month: "long",
            year: 'numeric',
        });
          const formattedTime = currentTime.toLocaleDateString("id-ID",{
            weekday: "long",
            day: 'numeric',
            month: "long",
            year: 'numeric',
        });

    return (
        <div className="md:flex min-h-screen bg-gray-100 dark:bg-neutral-900 text-black dark:text-white">
        	{/* Sidebar */}
        	<Sidebar open={open} setOpen={setOpen}>
            	<SidebarBody className="justify-between gap-10">
                	<div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    	<Logo />
                    	<div className="mt-8 flex flex-col gap-2">
                        	{links.map((link, idx) => (
                            	<SidebarLink key={idx} link={link} />
                        	))}
                    	</div>
                	</div>
                	<div>
                <SidebarLink
                    link={{
                        label: user.name,
                        href: "#",
                        icon: (
                            <img
                                src="https://assets.aceternity.com/manu.png"
                                className="h-7 w-7 flex-shrink-0 rounded-full"
                                width={50}
                                height={50}
                                alt="Avatar"
                            />
                        ),
                        	}}
                />
                	</div>
            	</SidebarBody>
        	</Sidebar>

        	{/* Konten Utama */}
        	<div className="flex-1 flex flex-col">
            	<Head title="Dashboard" />

            	{header && (
                	<header className="bg-white shadow dark:bg-neutral-800">
                    	<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-gray-800 dark:text-white">
                        	{header}
                    	</div>
                	</header>
            	)}
                <nav className='bg-white p-4 lg:flex lg:flex-row items-center justify-between'>
                    <div className="">
                        <input type="text" name="query" id="searchQuery" className='rounded-lg border border-gray-300 focus:ring-opacity-50 focus:ring-2 ring-green-400'
                        placeholder='Cari buku...'/>
                    </div>
                    <div className="flex gap-4 items-center">
                        <h3 className="font-bold text-md text-black">
                            {formattedDate}
                        </h3>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button type="button" className='flex items-center focus:outline-2 rounded-full outline-blue-500'>
                            <img src="https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1580489944761-15a19d654956%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=128&q=75" alt="" className='w-10 h-10 rounded-full'/>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>
                                    <span className="block text-sm text-gray-700 dark:text-gray-100">
                                        {user.name}
                                    </span>
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </nav>
            	<main className="flex-1 p-4">
                	{children}
            	</main>
        	</div>
    	</div>
	);
}

// Komponen Logo untuk sidebar
function Logo() {
	return (
    	<Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black dark:text-white py-1 relative z-20">
        	<img className="w-10 me-1" src="/images/book.png"/>
        	<span className="font-medium mt-2">Perpustakaan SMK PESAT</span>
    	</Link>
	);
}
