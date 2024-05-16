import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8'>
        <h1 className="text-white font-semibold">Hi , I am</h1>
        <h1 className="text-6xl sm:text-3xl text-secondary font-semibold">
          Sebona Ifa
        </h1>
        <h1 className="text-5xl sm:text-3xl text-white font-semibold">
          I am FullStack Website Developer
        </h1>
        <p className="text-white w-2/3">
        Hello! My name is Sebona Ifa, and I am thrilled to present my portfolio
        as a software engineering student and experienced full-stack developer. 
        I have spent the past four years honing my skills and expanding my knowledge
        in various programming languages, frameworks, and technologies.
        </p>
        <button className="border-2 border-tertiary px-10 py-3 text-tertiary rounded">Get Started</button>
    </div>
  )
}

export default Intro