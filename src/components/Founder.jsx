import React from 'react'
import ImageComp from './Image'
import { Link } from 'react-router-dom'
import { GrWifiMedium } from "react-icons/gr";







const Founder = ({ imagepath, name, post,social,description }) => {
  return (
    <>

      <div className="flex flex-col gap-2.5  pb-16 md:pb-0">
        <ImageComp image={imagepath} width={394} height={394} className="transition-all duration-300" />
        

        <div className="group relative tag-wrap max-w-[374px] " >
          <div className='flex items-center justify-center gap-x-3 absolute -top-10 w-full z-20 opacity-0 transition-opacity ease-linear group-hover:opacity-100'>
            {social?.map((item,i) => <Link to={item.link} target='_blank' key={i+1} className='inline-block p-3 rounded-full  bg-app-purple transition-colors ease-linear text-white hover:bg-white hover:text-app-purple'>
{item?.icon}
            </Link>)}
           


          </div>
          <div className='rounded-lg h-24 w-full flex items-start gap-4 justify-center p-4 flex-col slant-right  transition-all duration-500 group-hover:bg-app-purple group-hover:text-white bg-[#f2f2f2]  '>
            <p className="font-bold text-2xl text-dark">
              {name}
            </p>

            <p className="text-sm md:text-lg text-dark">
              {post}
            </p>
          </div>

          <div className="rounded-full border-2 border-app-purple group-hover:border-4  group-hover:border-white w-[60px] h-[60px] absolute top-1/2 right-0 transform -translate-y-1/2 bg-app-purple">
            <div className="flex items-center justify-center w-full h-full">
              <ImageComp image={"/images/tag.svg"} width={20} height={20} />
              {/* <GrWifiMedium className='w-5 h-5 text-white' /> */}

            </div>
          </div>

        </div>


      </div>

    </>
  )
}

export default Founder
