import PhotoCard from '@/components/PhotoCard';
import { topGenerationData } from '@/lib/data';

import React from 'react';

const AllPhotos = async () => {
   const allData = await topGenerationData();
   console.log('allData', allData);
   return (
      <div className="w-10/12 mx-auto">
         <h1 className="mt-8 mb-5 font-bold text-3xl ">All-Photos</h1>
         <div className="grid grid-cols-1 md:grid-cols-4  gap-6  ">
            {allData.map((data) => (
               <PhotoCard key={data.id} data={data} />
            ))}
         </div>
      </div>
   );
};

export default AllPhotos;
