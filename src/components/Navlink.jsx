'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children }) => {
   const pathname = usePathname();
   const isActive = pathname == href;
   return (
      <Link
         href={href}
         className={`px-2 py-2 rounded-md text-sm font-medium ${isActive ? 'text-purple-700' : 'text-gray-700 hover:text-gray-900'}`}
      >
         {children}
      </Link>
   );
};

export default Navlink;
