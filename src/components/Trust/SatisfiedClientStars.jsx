import ClientBadge from './ClientBadge'
import React from 'react'
import StartRating from './StartRating'
import bookGrocerImg from '../../../public/images/bookGrocer-transparent.png'
import ekohImg from '../../../public/images/ekoh-transparent.png'
import michuImg from '../../../public/images/michu-transparent.png'

function SatisfiedClientStars() {
  return (
    <div className='mb-2'>
        <div className='flex'>
            <ClientBadge imgIcon={michuImg}/>
            <ClientBadge imgIcon={ekohImg}/>
            <ClientBadge imgIcon={bookGrocerImg}/>
            <div className='mx-2'>
                <StartRating />
                <p className='text-xs font-light'>Over 20+ Satisfied clients</p>
            </div>
        </div>
    </div>
  )
}

export default SatisfiedClientStars
