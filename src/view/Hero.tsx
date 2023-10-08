/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from "next/image"
import { Linkedin,GithubIcon , Twitter,InstagramIcon  } from 'lucide-react'
import { getProfile } from "@/lib/sanity.query";
import type { ProfileType } from "@/types/sanityTypes";
import { urlForImage } from '../../sanity/lib/image';
import Link from 'next/link';


const socialLinks=[
  {
    icon:Linkedin,
    href:" https://www.linkedin.com/",
    
  },{
    icon: GithubIcon ,
    href:'https://www.github.com/'
  },
  {
    icon: Twitter,
    href:'https://twiiter.com/',
  },
  {
    icon: InstagramIcon,
    href:'https://instagram.com',
  }
  
]



const Hero = async () => {
  const profile:ProfileType[] = await getProfile();
  // console.log(profile);
  function urlFor(image: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <div className='mt-20 '>

        <div className='max-w-2xl w-full '>
        {
          profile &&
           profile.map((data)=>(
            <div key={data._id}>
              <Image
                  className="rounded-full h-16 w-16"
                  src={urlForImage(data.profileImage.image).url()}
                  width={50}
                  height={50}
                  quality={100}
                  alt={data.profileImage.alt}/>
        <h1 className="scroll-m-20 text-4xl mt-10 font-bold tracking-tight lg:text-5xl">
        Software designer,Co-founder, and Adventurer.        
        </h1>
        <p className='py-8 text-sm font-normal text-slate-500'>{data.shortBio} </p>

        </div>

          ))
        }
       
     
          <div className='flex space-x-5 text-slate-500 border-l pl-3  '>
            {
              socialLinks.map((socialLinks)=>(
               <Link href={socialLinks.href}
               key={socialLinks.href}>
                <socialLinks.icon className='hover:text-teal-400 duration-300' />
               </Link>
              ))
            }
          </div>
        </div>
        
    </div>
  )
}

export default Hero
