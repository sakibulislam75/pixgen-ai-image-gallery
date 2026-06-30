import Link from 'next/link';
import { Button } from '@heroui/react';

export const metadata = {
   title: 'Dragon News || Not Found',
};

export default function NotFound() {
   return (
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-100 via-white to-fuchsia-100 px-4">
         <div className="w-full max-w-2xl rounded-3xl border border-white/50 bg-white/80 p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur">
            <h1 className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-9xl font-extrabold text-transparent">
               404
            </h1>

            <h2 className="mt-4 text-4xl font-bold text-gray-800">Oops! Page Not Found</h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-500">
               The page you're looking for doesn't exist, has been moved, or is temporarily
               unavailable.
            </p>

            <Link href="/" className="mt-10 inline-block">
               <Button color="primary" size="lg" radius="md">
                  ← Back to Home
               </Button>
            </Link>
         </div>
      </section>
   );
}
