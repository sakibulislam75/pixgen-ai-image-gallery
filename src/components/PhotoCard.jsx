import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';

const PhotoCard = ({ data }) => {
   return (
      <Card className="border rounded-xl ">
         <div className="relative w-full aspect-square">
            <Image
               src={data.imageUrl}
               fill={true}
               alt={data.title}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               className="object-cover rounded-xl"
            />
            <Chip size="sm" className=" absolute top-1 right-1">
               {data.category}
            </Chip>
         </div>
         <div>
            <h1>{data.title}</h1>
         </div>
         <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
               <p>
                  <IoMdHeart />
               </p>
               <h2>{data.likes}</h2>
            </div>
            <Separator orientation="vertical" />
            <div className="flex gap-2 items-center">
               <p>
                  <FaDownload />
               </p>
               <h2>{data.downloads}</h2>
            </div>
         </div>
         <Link href={`/main/all-photos/${data.id}`}>
            <Button variant="outline" className="btn w-full mt-1">
               view
            </Button>
         </Link>
      </Card>
   );
};

export default PhotoCard;
