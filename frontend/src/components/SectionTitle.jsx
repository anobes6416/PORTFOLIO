import React from 'react'

function SectionTitle({
    title,
}) {
  return (
    <div className='flex gap-10 items-center py-20 sm:m-10'>
        <h1 className="text-3xl text-secondary font-semibold">{title}</h1>
        <div className="w-60 bg-tertiary h-[1px]">
        </div>
    </div>
  )
}

export default SectionTitle