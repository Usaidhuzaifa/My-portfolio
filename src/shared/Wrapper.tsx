import { FC } from "react";

const Wrapper:FC<{children:React.ReactNode}> =({children})=>{
    return(
        <section className=' px-2 h-fit shadow-md md:mx-16 lg:mx-20'>
        <div className="  md:max-w-screen-2xl md:px-5 mx-auto lg:px-20">
            {children}
        </div>
        </section>

    )
}
export default Wrapper