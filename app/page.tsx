import Image from "next/image";
import Link from "next/link";
import noImage from "@/public/no-image.png";

import { listCategories } from "@/lib/swell/products";

const Page = async () => {
  const { results: categories } = await listCategories();
  const mainCategories = categories.filter((c: any) => c.parentId === null).slice(0, 3);

  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight">
              Shop By Category
            </h2>
            <Link href='/products' className='hidden text-sm font-semibold text-sky-600 hover:text-sky-400 sm:block'>
              Browse all Categories
              <span aria-hidden='true'> &rarr;</span>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            {mainCategories.map((category: any, index: any) => (
              <>
                {index === 0 ? (
                  <div className='group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2' key={index}>
                    <Image alt={category.name}
                      width={category.images?.[0].file?.width || 600}
                      height={category.images?.[0].file?.height || 400}
                      src={category.images?.[0].file?.url || noImage}
                      className='object-cover object-center group-hover:opacity-75' />
                    <div aria-hidden='true' className='bg-gradient-to-b from-transparent to-black opacity-50' />
                    <div>
                      <h3 className='font-semibold text-white'>
                        <Link href={`/products/category/${category.slug}`}>
                          <span className='absolute inset-0' />
                          {category.name}
                        </Link>
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div key={index} className='group aspect-h-1 aspect-w-2 overflow-hideden rounded-lg sm:aspect-none sm:relative sm:h-full'>
                    <Image alt={category.name}
                      width={category.images?.[0].file?.width || 600}
                      height={category.images?.[0].file?.height || 400}
                      src={category.images?.[0].file?.url || noImage}
                      className='object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full' />
                    <div aria-hidden='true' className='bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0' />
                    <div className='flex items-end p-6 sm:absoute sm:inset-0'>
                      <div>
                        <h3 className='font-semibold text-white'>
                          <Link href={`/products/category/${category.slug}`}>
                            <span className='absolute inset-0' />
                            {category.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
          <div className='mt-6 sm:hidden'>
            <Link href='/products' className='block text-sm font-semibold text-sky-600 hover:text-sky-500'>
              Browse all Categories
              <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
