import Image from 'next/image'
import React from 'react'

const SampleIdCard = () => {
  return (
    <>
      <div className='space-y-2'>
        <div className='text-lg  text-slate-600 hover:scale-105'>
          Sample Id Card
        </div>
        
        <Image
          src="/ocr/id_card_sample.png"
          width={400}
          height={300}
          alt="Image of Sample ID Card"
          className='hover:scale-95'
        />
      </div>
    </>
  )
}

export default SampleIdCard