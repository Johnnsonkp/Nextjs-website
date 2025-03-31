import Image from 'next/image'
import React from 'react'

function ClientBadge({imgIcon}) {
  return (
    <div className="flex items-center text-center ml-[-0.625rem]">
        <span className="p-1 rounded-full bg-white-500 text-white shadow-lg shadow-[#008001]-200 border border-#008001">
            <Image src={imgIcon} className='h-6 w-7 object-fit' alt={imgIcon}/>
        </span>
    </div>
  )
}

export default ClientBadge
