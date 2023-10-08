
import React from 'react'
import {Mail,BriefcaseIcon} from 'lucide-react'
import { getblogs } from '@/lib/sanity.query';
import { BlogType } from '@/types/sanityTypes';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import Image from 'next/image';
import meezban from '@/assets/meezban.jpg'
 


const Update = async () => {




  const blog:BlogType[]= await getblogs()
  const blogData= blog.slice(0,3)
  // console.log(blogData)
console.log(blog)


  return (
    
      // -------------------main div -----------------------
    <section className='flex flex-col mt-20 lg:flex-row '>

    {/*------------- left content---------------- */}

    <div className='flex-1 max-w-3xl mt-5 space-y-16  text-sm'>
      {
        blogData.map((items)=>(
            
    <div key={items._id}>
              
              <Link href={`/blogs/${items.slug}`}>
               
              <div className=' hover:bg-slate-100/90 rounded-xl space-y-3  w-full border-transparent border-8'>
                    <div className='text-sm text-slate-400 border-l pl-3'>{`${items.publishedAt}`}</div>
                    <h3 className='font-semibold'>{items.title}</h3>
                    <div className='text-zinc-800 '><PortableText value={items.content}/></div> 
                    <div className='text-lime-500 text-xs font-medium' >{`Read Blogs  >`}</div>
              </div>
            
              </Link>

              </div>
            ))}
    </div>

    {/* -----------------Right content-------------- */}

    <div className='flex flex-col justify-center items-center mt-10 px-2  flex-1 max-w-xl w-full lg:ml-10 '>
        
        {/*--------- Small Container-------------*/}

        <div className="p-8 border rounded-xl shadow-md w-full  space-y-3 ">
                <h2 className="flex gap-x-2 items-center text-xl font-bold">
                    <Mail/>
                    Stay up to date
                </h2>
                <p className='text-sm '>
                Get notified when I publish something new, and unsubscribe at any time.
                </p>
            <div className='flex gap-x-4'>
            <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-xl px-3 py-2"
            />
            {/* -----------------button--------------------- */}
            <button className="bg-slate-950 text-white font-bold px-4 py-2 rounded-xl hover:bg-slate-700">
              Join
            </button>
            </div>
        </div>

        
        {/*----------------- Large Container---------------------------- */}
          <div className="mt-4 p-8 w-full border rounded-xl shadow-md">
                          <h1 className="flex items-center max-h-fit gap-x-4 text-xl font-bold">
                          <BriefcaseIcon/>
                          My Work
                          </h1>
                          <div className='pt-5 flex justify-between '>
                           <div className='flex items-center'> 
                          <Image src={meezban} alt='meezban'  className='shadow-md h-10 w-10 rounded-full '></Image>
                          <div className='pl-3 '>
                            <p className='font-semibold'>Meezban.pk</p>
                            <p className='text-slate-500 text-sm'>Co-Founder</p>
                          </div>
                          </div>
                          <p className='flex items-end text-sm text-slate-500'>2023</p>
                          </div>

                          {/* Add your work content here */}
          </div>


    </div>

    </section>
    
  )
}

export default Update
