import { getProjects } from '@/lib/sanity.query'
import { ProjectType } from '@/types/sanityTypes'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import React from 'react'
import { urlForImage } from '../../../sanity/lib/image'

const project = async () => {

  const project:ProjectType[]= await getProjects()
  console.log(project)
  return (
    <section className='mt-28'>
      {/*----------------- top content-------------------- */}
      <div className='max-w-2xl space-y-10'>
      <h1 className='max-w-2xl text-3xl  lg:text-5xl font-bold'>Through my creative endeavors, I&apos;ve aimed to leave a lasting impression on the world. </h1>
      <p className='text-sm text-slate-700'>Over the years, I&apos;ve dedicated myself to countless small projects, but these are the ones that hold a special place in my heart. 
        A significant number of them are open-source, so if you find something that sparks your interest, feel free to delve into the codebase and share your ideas for improvements.</p>
        </div>
    <div className='mt-20 pb-10'>
      {/*------------------------ bottom content-------------------- */}
      {
        project.map((items)=>(
          
          <div key={items._id} className='mb-10 space-y-4'>
          <div className='flex space-x-2 items-center border-l-2 pl-3'>
              <Image  src={urlForImage(items.coverImage).url()} width={30} height={30} alt='logo' />
              <h2 className='text-lg font-bold  '>{items.name}</h2>
          </div>
          <h3 className='text-sm text-teal-700 font-semibold pl-2'>{items.tagline}</h3>
          <div className='text-sm text-slate-700 max-w-xl w-full hover:bg-slate-100 rounded-xl border-8 border-transparent'><PortableText value={items.description} /></div>
          </div>
        
        ))
      }
    </div>
    </section>
  )
}

export default project
project