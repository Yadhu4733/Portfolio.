import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-sky-950 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
            <div className='pb-8 pt-14'>
                <p className='text-4xl font-bold sm:underline border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-36'>
            
            Hllo! I'm a passionate and self-motivated MERN stack developer eager to kick-start my career in the tech industry. I love building web applications that solve real-world problems and provide meaningful experiences to users
            </p>

            <br />

            <p className='text-xl '>
            I am a self-learner, keeping myself updated on the latest technologies in the World Wide Web. It is my sole passion to develop user experiences that are extraordinary and out of the world. My job is to build your websites so that they are functional and user-friendly but at the same time attractive. Moreover, I add a personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.

            </p>
        </div>
    </div>
  )
}

export default About;