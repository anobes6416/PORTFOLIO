import React from 'react'

function SectionTitle({
    title,
}) {
  return (
    <div className='flex gap-10 items-center py-10'>
        <h1 className="text-3xl text-white font-semibold">{title}</h1>
        <div className="w-60 bg-tertiary h-[1px]">
             {/* <img src="https://miro.medium.com/max/1600/0*C-cPP9D2MIyeexAT.gif" width="350" height="250" align="right" alt="Coder"> */}
        </div>
    </div>
  )
}

export default SectionTitle