// import React from 'react';
// import { FaFacebook, FaWhatsappSquare } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div className='w-full h-screen bg-gradient-to-b from-black to-gray-800'>
//         <div className='max-w-screen-lg p-4 mx-auto justify-center w-full h-full'>
//             <div className='text-4xl font-bold text-white inline border-b-4 border-gray-500 '>
//                 Contact
//             </div>

//             <div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Contact;

import React from 'react';

import { FaFacebook, FaWhatsappSquare,FaInstagram,FaEnvelope, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {

    const IcCn =[
        {
            iii:1,
            bby: (
                <>
                <FaFacebook size={30}/>
                
                    
                </>
            ),
        },
        {
            iii:2,
            bby: (
                <>
    
                <FaWhatsappSquare size={30}/>
                    
                
                </>
            ),
        },
        {
            iii:3,
            bby: (
                <>
                <FaInstagram size={30}/>
                
                </>
            ),
        },
        {
            iii:4,
            bby: (
                <>
                <FaEnvelope   size={30}/>
                
                </>
            ),
        },
        {
            iii:5,
            bby: (
                <>
                <FaYoutube   size={30}/>
                
                </>
            ),
        },
        {
            iii:6,
            bby: (
                <>
                <FaGithub   size={30}/>
                
                </>
            ),
        },
        {
            iii:7,
            bby: (
                <>
                <FaLinkedin   size={30}/>
                
                </>
            ),
        },
        
    ]

    

  return (
   <div name="skills" className='w-full h-72 bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg p-4 mx-auto justify-center w-full h-full'>

        <div className='text-4xl font-bold text-white inline border-b-4 border-gray-500 '>Contact</div>

                <div className='items-center justify-center flex gap-3 mt-20 animate-pulse'>
                    

                    {IcCn.map(({iii, bby,}) => (
                    <div key={iii} className={"items-center text-white  p-5 animate-pulse" }>
                        
                    {bby}
                    </div>
                        ))}

            

                
                     
                </div>


                
               
        </div>
        
   </div>
  )
}

export default Contact;