
import { Button } from "@/components/ui/button";
import {getSingleblog } from "@/lib/sanity.query"
import { BlogType } from "@/types/sanityTypes";
import { PortableText } from "@portabletext/react";
import {ArrowLeft} from 'lucide-react'
import Link from "next/link";


export default async function Page({ params }: { params: { slug: string } }) {
  
  const  blog:BlogType= await getSingleblog(params.slug)
  // console.log(blog)
  return(
  <section className="mt-28 relative" >
    
    <Button className="border rounded-full w-12 h-12 shadow-md">

      <Link href={'/blogs'} >
      <ArrowLeft className=" text-slate-500 hover:text-slate-700"/>
      </Link>

    </Button>

    <div className="max-w-3xl m-auto space-y-10">

        <div className="text-slate-400 border-l pl-3 ">{blog.publishedAt}</div>
        <h1 className="text-5xl font-bold "> {blog.title} </h1>
        <div className="text-slate-700"><PortableText value={blog.content}/></div> 
    
    </div>
  </section>
  ) 
} 