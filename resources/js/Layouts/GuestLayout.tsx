import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row px-2 items-center gap-6 bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
            <div className='max-h-screen-sm'>
            <Link href="/">
                <ApplicationLogo className="max-w-md custom-class-name" />
            </Link>

            </div>

            <div className="mt-6 w-full overflow-hidden bg-[#6E987C] px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-[#2e5a3d] rounded-md">
                {children}
            </div>
        </div>
    );
}
