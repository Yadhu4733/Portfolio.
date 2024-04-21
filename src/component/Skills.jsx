import React from 'react';
import {FaHtml5,FaReact,FaCss3,FaBootstrap,} from 'react-icons/fa';
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNairaSign, FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";

const Skills = () => {

    const IcCn =[
        {
            iii:1,
            bby: (
                <>
                <FaReact size={80}/>
                <div className='pl-2'>
                     React JS
                </div>
                    
                </>
            ),
        },
        {
            iii:2,
            bby: (
                <>
    
                <FaHtml5 size={80}/>
                    
                <div className='pl-3'>
                     HTML 5
                </div>
                </>
            ),
        },
        {
            iii:3,
            bby: (
                <>
                <FaCss3 size={80}/>
                   
                    <div className='pl-3'>
                     CSS
                </div>
                </>
            ),
        },
        {
            iii:4,
            bby: (
                <>
                <FaBootstrap   size={80}/>
                <div className='pl-3'>
                     Bootstrap
                </div>
                </>
            ),
        },
        
    ]

    const IcCnn = [
        {
            iij:5,
            bbyy: (
                <>
             <BiLogoMongodb size={80}/>
             <div className='pl-3'>
                     Mongo DB
                </div>
                </>
            ),
        },
        {
            iij:6,
            bbyy: (
                <>
                <IoLogoJavascript size={80}/>
                <div className='pl-3'>
                     Java Script
                </div>
                </>
            ),
        },
        {
            iij:7,
            bbyy: (
                <>
                 <FaNode size={80}/>
                 <div className='pl-3'>
                     Node JS
                </div>
                </>
            ),
        },
        {
            iij:8,
            bbyy: (
                <>
                
                <SiExpress size={80}/>
                <div className='pl-3'>
                    Express JS
                </div>
                </>
            ),
        },
    ]

  return (
   <div name="skills" className='w-full sm: h-auto bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg p-4 mx-auto justify-center w-full h-full'>

        <h2 className='text-4xl font-bold text-white sm:underline border-gray-500 w-full sm:text-start text-center'>Skills</h2>

                <div className='grid grid-cols-2 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center mt-52 animate-pulse sm: m-auto'>
                    

                    {IcCn.map(({iii, bby,}) => (
                    <div key={iii} className={"items-center text-white  p-5 hover:-translate-y-5 transition-all" }>
                        
                    {bby}
                    </div>
                        ))}

            

                
                     
                </div>


                <div className='grid grid-cols-2 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:  gap-4 items-center justify-center'>
                    

                    {IcCnn.map(({iij, bbyy,}) => (
                    <div key={iij} className={"items-center p-5 hover:translate-y-5 mt-5 transition-all text-white" }>

                    {bbyy}
                    </div>
                        ))}

            

                
                     
                </div>
               
        </div>
        
   </div>
  )
}

export default Skills;