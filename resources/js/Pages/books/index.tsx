import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Link } from '@inertiajs/react';
import { div } from 'framer-motion/client'
import React from 'react'

const Booksindex = () => {

    const BooksContent = () => (
    	<div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    	<div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        	<div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        	<div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            	<div className="w-full md:w-1/2">

            	</div>
            	<div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                	<Link href={route('books.create')} type="button" className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                    	Tambah Buku
                	</Link>

            	</div>
        	</div>
        	<div className="overflow-x-auto">
            	<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                	<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    	<tr>
                        	<th scope="col" className="px-4 py-3">Product name</th>
                        	<th scope="col" className="px-4 py-3">Category</th>
                        	<th scope="col" className="px-4 py-3">Brand</th>
                        	<th scope="col" className="px-4 py-3">Description</th>
                        	<th scope="col" className="px-4 py-3">Price</th>

                    	</tr>
                	</thead>
                	<tbody>
                    	<tr className="border-b dark:border-gray-700">
                        	<th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 20&#34;</th>
                        	<td className="px-4 py-3">PC</td>
                        	<td className="px-4 py-3">Apple</td>
                        	<td className="px-4 py-3">200</td>
                        	<td className="px-4 py-3">$1499</td>
                    	</tr>
                	</tbody>
            	</table>
        	</div>

    	</div>
	</div>
    	</div>
	);

  return (
    <Authenticated>
        <BooksContent/>
    </Authenticated>
  )
}

export default Booksindex
