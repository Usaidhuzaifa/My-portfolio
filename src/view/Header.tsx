
import Image from 'next/image'
import Link from 'next/link'
import Logo from "/public/Logo.jpg"
import React from 'react'


const Header = () => {
 
  return (
    
    <section className='pt-6'>
      
    <div className='rounded-full border  shadow-md max-w-sm w-80 m-auto relative '>
    
    <ul className='flex justify-center items-center gap-x-7 py-2  text-sm font-medium '>
    
    
    <div className='absolute -left-6 mt-4 '>
    
    <Link href={'/'} > 
    <Image src={Logo} alt='logo'
      className="rounded-full mb-4 max-h-60 h-12 w-12 border border-double outline-offset-4 ring-2 ring-slate-400  " 
      width={50} 
      height={50} >
    </Image>
    </Link>
    </div>
     <li><Link href={'/about'} >About </Link></li>
     <li><Link href={"/blogs"}>Blogs</Link></li>
     <li><Link href={"/project"}>Project</Link></li>
     <li><Link href={"/uses"}>Uses</Link></li>
    </ul>
    </div>
    </section>
    

  )
}

export default Header
