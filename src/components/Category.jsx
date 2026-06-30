import { categoryData } from '@/lib/data';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async () => {
   const categoryData1 = await categoryData();

   return (
      <div className="btn mb-5 space-x-3 ">
         {categoryData1.map((category) => (
            <Link
               key={category.id}
               href={`/main/all-photos?category=${category.name.toLowerCase()}`}
            >
               <Button size="sm" variant="outline">
                  {category.name}
               </Button>
            </Link>
         ))}
      </div>
   );
};

export default Category;
