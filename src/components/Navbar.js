import React from 'react'
import { RiMenu4Fill } from 'react-icons/ri';
import { BiUser, BiShoppingBag } from 'react-icons/bi';

function Navbar() {
    return (
        <nav className="navbar bg-transparent">
           <div className="relative flex items-center justify-between h-16">
                    
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="font-black text-2xl navbar-name"><RiMenu4Fill/></h1>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="block sm:ml-6">
                            <div className="flex space-x-4 navbar-links">
                                <a href="#home" className="text-white navbar-icons px-2 py-2 rounded-full text-2xl font-medium" aria-current="page"><BiUser/></a>
                                <a href="#shop" className="text-white navbar-icons px-2 py-2 rounded-full text-2xl font-medium active"><BiShoppingBag/></a>
                            </div>
                        </div>
                    </div>
                </div>
        </nav>
    )
}

export default Navbar
