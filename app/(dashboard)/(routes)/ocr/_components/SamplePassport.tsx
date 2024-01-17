import Image from 'next/image'
import React from 'react'

const SamplePassport = () => {
  return (
    <>
      <div className='space-y-2'>
        <div className='text-lg  text-slate-600 hover:scale-105'>
          Sample IdCard
        </div>
        
        <Image
          src="/ocr/passport_sample.jpg"
          width={430}
          height={300}
          alt="Image of Sample ID Card"
          className='hover:scale-95'
        />
      </div>
    </>
  )
}

export default SamplePassport