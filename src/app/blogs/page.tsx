import React from 'react'
import {Mail,BriefcaseIcon} from 'lucide-react'
import { getblogs } from '@/lib/sanity.query';
import { BlogType } from '@/types/sanityTypes';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

const page = async  () => {
  const blog:BlogType[]= await getblogs()
  const blogData= blog.slice(0,3)
  // console.log(blogData)
// console.log(blog)
  return (
    <main className='mt-32'>

        <div className='max-w-2xl w-full space-y-7'>
          <h1 className='text-3xl lg:text-5xl font-bold'> Writing on software design, company building, and the Chemical industry.</h1>
          <p className='text-sm lg:text-base'>All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.</p>
        </div>

     <div className='text-sm w-full  lg:flex flex-col lg:border-l lg:max-w-3xl mt-20 mb-36 space-y-16 '>
      {
        blogData.map((items)=>(
            
            <section key={items._id}>
              <Link href={`/blogs/${items.slug}`}>
              <div className='lg:flex ml-5'>
               <div className='border-l pl-2 lg:text-sm text-slate-400  max-w-sm w-72 lg:mt-2'>{`${items.publishedAt}`}</div>

                  <div className=' lg:space-y-4 hover:bg-slate-100/90 rounded-xl w-full border-transparent border-8'>
                  <h2 className='font-medium'>{items.title}</h2>
                  <p className='text-zinc-800'><PortableText value={items.content}/></p> 
                  <div className='text-lime-500 text-xs font-medium' >{`Read Blogs  >`}</div>
              </div>
              </div>
              </Link> 
              </section>           
            ))}
    </div>
    </main>
  )
}

export default page

