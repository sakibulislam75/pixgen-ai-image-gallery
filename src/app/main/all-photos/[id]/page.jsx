import { topGenerationData } from '@/lib/data';
import Image from 'next/image';
import { Button, Chip } from '@heroui/react';
import { FiCalendar, FiCopy, FiCpu, FiDownload, FiHeart, FiImage } from 'react-icons/fi';

const PhotoDetailsPage = async ({ params }) => {
   const { id } = await params;

   const allData = await topGenerationData();
   const data = allData.find((item) => item.id === Number(id));

   if (!data) {
      return (
         <div className="flex min-h-[70vh] items-center justify-center">
            <div className="text-center">
               <h2 className="text-3xl font-bold">Photo Not Found</h2>
               <p className="mt-2 text-default-500">The requested photo does not exist.</p>
            </div>
         </div>
      );
   }

   return (
      <section className="w-10/12 mx-auto  px-4 py-12">
         <div className="grid gap-10 lg:grid-cols-2">
            {/* Image */}
            <div className="overflow-hidden rounded-3xl border border-default-200 bg-default-100 shadow-lg">
               <Image
                  src={data.imageUrl}
                  alt={data.title}
                  width={900}
                  height={900}
                  priority
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
               />
            </div>

            {/* Content */}
            <div className="space-y-8">
               <div>
                  <Chip color="primary" variant="flat">
                     {data.category}
                  </Chip>

                  <h1 className="mt-4 text-4xl font-bold">{data.title}</h1>

                  <p className="mt-4 leading-7 text-default-500">
                     High-quality AI generated artwork created with{' '}
                     <span className="font-semibold">{data.model}</span>. Designed for creative
                     inspiration, digital art collections and modern visual projects.
                  </p>
               </div>

               {/* Divider */}
               <div className="h-px w-full bg-default-200" />

               {/* Stats */}
               <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-default-200 p-5">
                     <FiHeart className="mb-3 text-2xl text-pink-500" />
                     <p className="text-sm text-default-500">Likes</p>
                     <h3 className="text-xl font-bold">{data.likes}</h3>
                  </div>

                  <div className="rounded-2xl border border-default-200 p-5">
                     <FiDownload className="mb-3 text-2xl text-primary" />
                     <p className="text-sm text-default-500">Downloads</p>
                     <h3 className="text-xl font-bold">{data.downloads}</h3>
                  </div>

                  <div className="rounded-2xl border border-default-200 p-5">
                     <FiCpu className="mb-3 text-2xl text-success" />
                     <p className="text-sm text-default-500">Model</p>
                     <h3 className="text-xl font-bold">{data.model}</h3>
                  </div>

                  <div className="rounded-2xl border border-default-200 p-5">
                     <FiImage className="mb-3 text-2xl text-warning" />
                     <p className="text-sm text-default-500">Resolution</p>
                     <h3 className="text-xl font-bold">{data.resolution}</h3>
                  </div>
               </div>

               {/* Prompt */}
               <div className="rounded-3xl border border-default-200 bg-default-50 p-6">
                  <div className="mb-4 flex items-center justify-between">
                     <h2 className="text-xl font-semibold">AI Prompt</h2>

                     <Button isIconOnly size="sm" variant="light">
                        <FiCopy />
                     </Button>
                  </div>

                  <p className="leading-8 text-default-600">{data.prompt}</p>
               </div>

               {/* Tags */}
               <div>
                  <h3 className="mb-4 text-lg font-semibold">Tags</h3>

                  <div className="flex flex-wrap gap-3">
                     {data.tags.map((tag) => (
                        <Chip key={tag} variant="bordered" radius="full">
                           #{tag}
                        </Chip>
                     ))}
                  </div>
               </div>

               {/* Date */}
               <div className="flex items-center gap-2 text-default-500">
                  <FiCalendar />
                  <span>
                     {new Date(data.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                     })}
                  </span>
               </div>

               {/* Actions */}
               <div className="flex flex-wrap gap-4 pt-4">
                  <Button color="primary" size="lg" startContent={<FiDownload />}>
                     Download
                  </Button>

                  <Button variant="bordered" size="lg" startContent={<FiHeart />}>
                     Add to Favorites
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PhotoDetailsPage;
