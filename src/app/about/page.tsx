import { getProfile } from "@/lib/sanity.query";
import { ProfileType } from "@/types/sanityTypes";
import { PortableText } from "@portabletext/react";
import Image, { StaticImageData } from "next/image"
import { urlForImage } from '../../../sanity/lib/image';
import {Mail,Github,InstagramIcon,LinkedinIcon,TwitterIcon, GithubIcon, Linkedin, Twitter, LucideIcon} from "lucide-react"
import Link from "next/link";


export default async function Page() {

const profile:ProfileType[] = await getProfile();
  function urlFor(image: string) {
    throw new Error("Function not implemented.");
  }

  return (
    
    <main>
      {/*-------------------------- main ----------------------------*/}
    <div className="py-28">
    {profile &&
      profile.map((data) => (
      
        <div key={data._id}>
          {/*-------------------- image on navbar------------------------- */}
          {/* <div className="absolute top-5 "> 
          
          <Link href={"./"}>
          
          <Image
                  className="hidden rounded-full mb-4 max-h-60 h-12 w-12 border border-double outline-offset-4 ring-2 ring-slate-400  "
                  src={urlForImage(data.profileImage.image).url()} 
                  width={50}
                  height={50}
                  alt={data.profileImage.image}/>
          </Link>
          
          </div> */}
          {/*---------------------------start of left content---------------------- */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
            <div className="order-2 lg:order-none">
              <h1 className=" text-4xl lg:text-5xl lg:leading-tight basis-1/2 font-bold mb-8">
                I&apos;m {data.fullName}. I live in {data.location}, where I
                design the future.
              </h1>

              <div className="flex flex-col gap-y-3 text-zinc-600 leading-relaxed text-base">
                <PortableText value={data.fullBio} />
              </div>
              {/* --------------------- social media links for mobile dispalay ----------------------------------- */}
              <div className=" flex gap-x-4 border-b text-neutral-600 lg:hidden ">
               
               <div className="space-y-4 my-10 ">
                 <Github/>
                 <InstagramIcon/>
                 <LinkedinIcon/>
                 <TwitterIcon/> 
               </div>
               <ul className=" gap-y-5 text-base font-semibold my-10 ">
               
               {Object.entries(data.socialLinks)
                 .sort()
                 .map(([key, value], id) => (
                   <li key={id}>
                     <Link
                       href={value}
                       rel="noreferer noopener"
                       className="flex items-center text-sm gap-x-3 mb-5 hover:text-teal-400 duration-300"
                     > 
                       {"Follow on " + key[0].toUpperCase() + key.toLowerCase().slice(1)}
                     </Link>
                   </li>   
                 ))}
            </ul>
             </div>
            </div>
            
            
           
            {/*----------------  end of left content----------------- */}



            {/*-------------------- start of right contnet ---------------- */}

            <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
              <div>
                <Image
                  className="rounded-3xl mb-4 max-h-98  bg-top"
                  src={urlForImage(data.profileImage.image).url()}
                  width={370}
                  height={410}
                  quality={100}
                  alt={data.profileImage.alt}
                />
               {/*-------------------- socilalinks for large dispalay------------------------------ */}
              <div className="hidden  lg:flex gap-x-4 border-b text-neutral-600 ">
               
                <div className="space-y-4 my-10 ">
                  <Github/>
                  <InstagramIcon/>
                  <LinkedinIcon/>
                  <TwitterIcon/> 
                </div>
                <ul className=" gap-y-5 text-base font-semibold my-10 ">
                
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <li key={id}>
                      <Link
                        href={value}
                        rel="noreferer noopener"
                        className="flex items-center text-sm gap-x-3 mb-5 hover:text-teal-400 duration-300"
                      > 
                        {"Follow on " + key[0].toUpperCase() + key.toLowerCase().slice(1)}
                      </Link>
                    </li>   
                  ))}
             </ul>
              </div>
                
              </div>

              <ul>
                <li>
                  <Link
                    href={`mailto:${data.email}`}
                    className="hidden lg:flex items-center text-sm font-medium gap-x-2 hover:text-purple-400 duration-300">
                    <Mail/>
                    {data.email}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* ---------------------End right content ------------------------*/}


           {/* -----mail mobile display------- */}
            <div> <ul>
                <li>
                  <Link
                    href={`mailto:${data.email}`}
                    className="flex items-center mt-5 text-sm font-medium gap-x-2 hover:text-teal-400 duration-300 lg:hidden"
                  >
                    <Mail/>
                
                    {data.email}
                  </Link>
                </li>
              </ul></div>
          
          {/* -----mail mobile display------- */}


          {/*---------------------- start of expertise content------------------------ */}
          <div className="mt-24 max-w-xl">
            <h2 className="font-semibold text-4xl mb-4">Expertise</h2>
            <p className="text-zinc-600 max-w-lg">
              I&apos;ve spent few years working on my skills. In no particular
              order, here are a few of them.
            </p>

            <ul className="flex flex-wrap  items-center gap-3 mt-8">
              {data.skills.map((skill, id) => (
                <li
                  key={id}
                  className="bg-white border shadow-md  border-transparent hover:border-zinc-300 rounded-xl px-2 py-1">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          {/*----------------------------- end of expertise content ----------------------------------*/}
        </div>
      ))}
      </div>
      {/*---------------------------- main div End ------------------------------*/}
  </main>
  );
}


