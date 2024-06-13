import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
        <div className="flex gap-5 text-9xl font-semibold">
            <h1 className="text-secondary s">S</h1>
            <h1 className="text-white i">I</h1>
            <h1 className="text-tertiary n">N</h1>
        </div>
    </div>
  )
}

export default Loader