import React from 'react'
import { ChevronsRight } from 'lucide-react';


const Instruction: React.FC = () => {
  // array of object that contain info abt instructions
  const instruction: { [key: string]: string}[] = [
    {"Choose a Well-Lit Area:":  "Natural light is preferable."},
    {"Position the Image:":  "Place it on a flat, contrasting surface."},
    {"Keep Device Steady:":  "Hold the device steady for a clear image."},
    {"Focus on Text:":  "Ensure the text is in focus."},
    {"Capture the Image:":  "Take a clear, well-lit photo of the entire card."},
  ];

  return (
    <div>
      <p className='text-lg mb-6 hover:scale-105'>
        Instruction
      </p>

      {instruction.map((obj, index) => (
        <div key={index}>
          {/* <div className='space-y-1'> */}
            <div className='flex'>
              {/* <div className='space-y-1'> */}
                <div><ChevronsRight color='gray'/></div>
                <p className='ml-2 mb-4 text-sm'>{Object.keys(obj)[0]}</p>
                <p className='text-sm text-muted-foreground ml-2'>{Object.values(obj)[0]}</p>
              {/* </div> */}
            </div>
          {/* </div> */}
        </div>
      ) )}

    </div>
  )
}

export default Instruction