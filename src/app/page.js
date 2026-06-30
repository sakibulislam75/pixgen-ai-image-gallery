import Banner from '@/components/Banner';
import TopGeneration from '@/components/TopGeneration';
import Image from 'next/image';

export default function Home() {
   return (
      <div className="w-10/12 mx-auto">
         <Banner />
         <TopGeneration />
      </div>
   );
}
