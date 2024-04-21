import React from 'react';
import Cars from '../assets/projects/cars.jpg';
import Ecommerce from '../assets/projects/Ecommerce-Website.webp';
import Netflix from '../assets/projects/netflix.webp';
import Watch from '../assets/projects/watch.jpg';
import Facebooks from '../assets/projects/facebook.jpg';
import Portfolio from '../assets/projects/portfolio.png';


const Projects = () => {

    const proj = [
        {
            id:1,
            bdy: (
                <>
                  <div className='w-80 h-52'>
                   <img src={Cars} className='size-full object-cover'/>
                   <div className='text-center text-gray-200 m-6'>
                   CAR COLLECTION
                   </div>
                   </div>
                   
                </>
            )
        },
        {
            id:2,
            bdy: (
                <>
                   <div className='w-80 h-52'>
                   <img src={Ecommerce} className='size-full object-cover'/>
                   <div className='text-center m-6'>E-Commerce Website</div>
                   </div>
                   
                </>
            )
        },
        {
            id:3,
            bdy: (
                <>
                   <div className='w-80 h-52'>
                   <img src={Netflix} className='size-full object-cover'/>
                   <div className='text-center m-6'>NETFLIX</div>
                   </div>
                   
                </>
            )
        },
    ]

    const projs = [
        {
            ids:4,
            bdy: (
                <>
                  <div className='w-80 h-52'>
                   <img src={Watch} className='size-full object-cover'/>
                   <div className='text-center text-gray-200 m-6'>
                   CAR COLLECTION
                   </div>
                   </div>
                   
                </>
            )
        },
        {
            ids:5,
            bdy: (
                <>
                   <div className='w-80 h-52'>
                   <img src={Facebooks} className='size-full object-cover'/>
                   <div className='text-center m-6'>Facebook</div>
                   </div>
                   
                </>
            )
        },
        {
            ids:6,
            bdy: (
                <>
                   <div className='w-80 h-52'>
                   <img src={Portfolio} className='size-full object-cover'/>
                   <div className='text-center m-6'>Portfolio</div>
                   </div>
                   
                </>
            )
        },
    ]

  return (
    <div className='grid w-full  sm: h-auto sm: pl-14 bg-gradient-to-b from-gray-800 to-black'>
        <div className='max-w-screen-lg p-4 mx-auto justify-center w-full h-full'>
            <div className='sm: text-center text-4xl font-bold text-white inline border-b-4 border-gray-500 '>
                 <p>Projects</p>
                 {/* <p>Check out some of my work right here</p> */}
            </div>

            

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center lg:flex gap-3 pt-16'>
                    

                    {proj.map(({id, bdy,}) => (
                    <div key={id} className={" items-center text-white  p-5 hover:-translate-y-5 transition-all" }>
                        
                    {bdy}
                    </div>
                        ))}

        

                
                     
                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center lg:flex gap-3 pt-16'>
                    

                    {projs.map(({ids, bdy,}) => (
                    <div key={ids} className={"items-center text-white  p-5 hover:-translate-y-5 transition-all" }>
                        
                    {bdy}
                    </div>
                        ))}

        

                
                     
                </div>

            
        </div>
    </div> 
  )
}

export default Projects;

