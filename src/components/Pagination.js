"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import React from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

function pageCount(page) {
    let i = 0;
    const Array = [];
    while (i < page) {
        i++;
        Array.push(i);
    }
    return Array
}
function next(page) {
    return ++page
}
export default function Pagination({ total_pages, genre }) {
    const searchParams = useSearchParams();
    const page = searchParams.get("page");
    const pages = pageCount(total_pages);
    return (

        <nav aria-label="Page navigation example" >
            <div className="flex items-center justify-center">
                {page >= 1 &&
                    <Link href={`/?genre=${genre}&page=${page - 1}`} className="px-3 py-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <BsFillArrowLeftCircleFill />
                    </Link>
                }
                <div className="flex max-w-sm  overflow-hidden  pag">
                    {pages.map((item) => (
                        <Link key={item} href={`/?genre=${genre}&page=${item}`} className={`px-3 py-2 leading-tight text-gray-500  border border-gray-300 dark:border-gray-900 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  ${page &&
                            page == item ?
                            "bg-gray-300 dark:bg-black"
                            : 'bg-white dark:bg-gray-800'} `} >
                            {item}
                        </Link>
                    ))}
                </div>
                {page <= pages.length &&
                    <Link href={`/?genre=${genre}&page=${next(page)}`} className="px-3 py-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <BsFillArrowRightCircleFill />
                    </Link>
                }
            </div>
        </nav>

    )
}
