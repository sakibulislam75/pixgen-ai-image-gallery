'use client';
import Image from 'next/image';
import Navlink from './Navlink';
import Link from 'next/link';

const Navbar = () => {
   return (
      <div className="border-b px-4 w-10/12 mx-auto ">
         <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
               <Image
                  src="/logo.png"
                  alt="logo"
                  width={30}
                  height={30}
                  priority
                  className="h-auto w-auto"
               />
               <h3 className="text-lg font-black">pixgen.</h3>
            </div>

            {/* Navigation */}
            <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 text-sm">
               <li>
                  <Navlink href="/">Home</Navlink>
               </li>
               <li>
                  <Navlink href="/main/all-photos">All Photos</Navlink>
               </li>
               <li>
                  <Navlink href="/main/pricing">Pricing</Navlink>
               </li>
               <li>
                  <Navlink href="/profile">Profile</Navlink>
               </li>
            </ul>

            {/* Auth */}
            <div>
               <ul className="flex items-center gap-4 text-sm">
                  <li>
                     <Navlink href="/auth/signup">SignUp</Navlink>
                  </li>
                  <li>
                     <Navlink href="/auth/signin">SignIn</Navlink>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
