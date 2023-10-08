import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className=' border-t-2 mt-14'>
      {/* ---------------left content ---------------------*/}
    <div className='space-y-5 lg:flex justify-between pb-10 mt-10'>
      <div>
      <ul className='flex justify-center items-center space-x-5 font-semibold text-sm text-slate-800 '>
            <li><Link href={'/about'} >About </Link></li>
            <li><Link href={"/blogs"}>Blogs</Link></li>
            <li><Link href={"/project"}>Project</Link></li>
            <li><Link href={"/uses"}>Uses</Link></li>
      </ul>
      </div>

       {/*-------------------- right content------------------*/}
      <div className='flex justify-center items-center text-sm text-slate-400'>
        © 2023 Usaid Huzaifa. All rights reserved.
      </div>
    </div>
    </section>
  )
}

export default Footer
