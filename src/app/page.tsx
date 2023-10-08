import Wrapper from '@/shared/Wrapper'
import Footer from '@/view/Footer'
import Header from '@/view/Header'
import Hero from '@/view/Hero'
import Photos from '@/view/Photos'
import Update from '@/view/Update'
import Image from 'next/image'

export default function Home() {
  return (
      
      <div> 
      {/* Hero */}
      <Hero/>
      
      {/* update */}
      <Update/>
      </div>
    
  )
}
