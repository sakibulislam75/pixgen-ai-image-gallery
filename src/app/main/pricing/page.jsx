import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

export const metadata = {
   title: 'pixen-ai-image-gallery || Pricing',
};

const PricingPage = () => {
   return (
      <div className="h-[88vh] flex items-center justify-center px-2 py-8">
         <div className="card bg-base-100 shadow-xl border border-base-300 max-w-2xl w-full">
            <div className="card-body text-center p-10">
               <div className="text-6xl mb-4">💳</div>

               <h1 className="text-4xl font-bold">Pricing Plans Coming Soon</h1>

               <p className="mt-4 text-lg text-base-content/70 leading-8">
                  We're preparing flexible and affordable pricing plans designed to meet the needs
                  of creators, professionals, and businesses.
               </p>

               <p className="mt-2 text-base text-base-content/60">
                  Stay tuned! We'll be launching our subscription plans with premium features,
                  exclusive benefits and more very soon.
               </p>

               <div className="card-actions justify-center mt-8">
                  <Link href="/">
                     <Button color="primary" size="lg" radius="md">
                        ← Back to Home
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PricingPage;
