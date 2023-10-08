import Image, { StaticImageData } from "next/image"
import MyPhoto1 from "@/assets/gallery1.jpg"
import MyPhoto2 from "@/assets/gallery2.jpg"
import MyPhoto3 from "@/assets/gallery3.jpg"

interface IGallery {
    img: StaticImageData | string
}
const MyGallery :IGallery[] =[
        {
            img:MyPhoto1
        },
        {
            img:MyPhoto2
        },
        {
            img:MyPhoto3
        }
]

const Photos = () => {
    console.log(MyGallery)
  return (
    <div className="flex gap-x-5 max-w-md max-h-80 pt-10">
        {
            MyGallery.map((items,index)=>(
                <>
                <Image key={index} src={items.img} alt="MyPhoto" className="rounded-3xl h-40 lg:56 "/>
                </>
            ))
        }
    </div>
  )
}

export default Photos
