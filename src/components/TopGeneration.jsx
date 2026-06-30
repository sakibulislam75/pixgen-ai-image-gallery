import { topGenerationData } from '@/lib/data';
import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration = async () => {
   const allData = await topGenerationData();
   console.log('allData', allData);
   return (
      <div>
         <h1 className="mt-8 mb-5 font-bold text-3xl ">Top Generation</h1>
         <div className="grid grid-cols-1 md:grid-cols-4  gap-6  ">
            {allData.slice(0, 8).map((data) => (
               <PhotoCard key={data.id} data={data} />
            ))}
         </div>
      </div>
   );
};

export default TopGeneration;
