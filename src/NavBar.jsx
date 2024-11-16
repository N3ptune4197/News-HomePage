import React from "react";
import Logo from './assets/logo.svg'
import { useState, useEffect } from 'react';


export default function NavBar () {

    const [isdark, setIsdark] = useState(
        JSON.parse(localStorage.getItem('isdark'))
    );

    useEffect(() => {
        localStorage.setItem('isdark', JSON.stringify(isdark));
      }, [isdark]);

    
    return(

        <nav className="border-gray-200 mb-3 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-8" alt="Flowbite Logo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto font-inter font-medium text-md" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-400 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 d">
                        <li>
                        <a href="#" className="block py-2 px-3 rounded md:border-0 md:p-0 text-darkgrayishblue hover:text-white dark:hover:bg-gray-600 md:hover:text-softred md:dark:hover:bg-transparent" aria-current="page">Home</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 rounded md:border-0 md:p-0 text-darkgrayishblue hover:text-white dark:hover:bg-gray-600 md:hover:text-softred md:dark:hover:bg-transparent">New</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 rounded md:border-0 md:p-0 text-darkgrayishblue hover:text-white dark:hover:bg-gray-600 md:hover:text-softred md:dark:hover:bg-transparent">Popular</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 rounded md:border-0 md:p-0 text-darkgrayishblue hover:text-white dark:hover:bg-gray-600 md:hover:text-softred md:dark:hover:bg-transparent">Trending</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 rounded md:border-0 md:p-0 text-darkgrayishblue hover:text-white dark:hover:bg-gray-600 md:hover:text-softred md:dark:hover:bg-transparent">Categories</a>
                        </li>
                        
                        <li>
                            <a href="#" className="block py-2 px-3 rounded md:border-0 md:p-0 md:hover:text-softred">
                                <label className="flex cursor-pointer gap-2">
                                    
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                    <input type="checkbox" value="bumblebee" checked={isdark} onChange={() => setIsdark(!isdark)} className="toggle theme-controller" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="5" />
                                        <path
                                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                    </svg>
                                </label>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}






