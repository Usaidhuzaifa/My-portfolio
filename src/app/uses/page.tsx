import React from 'react'
   
interface IUses{
  heading:string,
  description:{
    title:string,
    description: string;
  }[]
}[]

const uses:IUses[]=[
  
    {
      heading:"workstation",
      description:[{
        title:"Dell Latitude E6430 Core i5 3rd Generation 4GB Ram 250/320 GB Hardisk",
        description:"i have been using Dell latitude E6430 since 2012, i have done some slight ugrade in last year, it is working good for development it has good battery backup , reliable since i m using it for 10 yrs its serve me well "
      }]
    },
    {
      heading:"Development Tool",
      description:[{
        title:"sublime text 4",
        description:"I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made.I had began my web designing journey from sublime text 4. it is handy and easy to use.  "
      },
      {
        title:"Visual Studio Code",
        description:"VS Code will have deep remote development. You can connect to a container running a different OS and use any VS Code plugins, linting, debugging for that environment. "
      }]
    },
    {
      heading:"design",
      description:[{
        title:"Figma",
        description:"Work together in real time and empower designers to create in new ways. Keep workflows efficient with tools that give every team visibility throughout the process."
    }]
   
    }
]


const page = () => {

  return (
    <section className='mb-20'>
      <div className='lg:max-w-3xl space-y-5 mt-28'>
      <h1 className='text-3xl lg:text-5xl font-bold '>Software I use, gadgets I love, and other things I recommend.</h1>
      
      <p className='text-sm'>I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.</p>
      </div>
        <div className='mt-10 pl-2 lg:border-l lg:pl-5'>
          {
            uses.map((items,index)=>(
              <main className='space-y-5  pb-10 text-sm ' key={index}>
                <h2 className='font-medium px-2 w-fit shadow-md bg-slate-300'>{items.heading}</h2>
                  {
                    items.description.map((description,index)=>(
                      
                      <div className='space-y-5 max-w-lg items-start'  key={index}>
                       
                        <div >
                        <h3 className='font-medium border-b w-fit mb-4 px-2 shadow-md'>{description.title}</h3>
                        <p>{description.description}</p>
                        </div>   
                      
                      </div>
                    ))
                  }

              </main>
            ))
          }
          </div>  
    </section>
  )
}

export default page
