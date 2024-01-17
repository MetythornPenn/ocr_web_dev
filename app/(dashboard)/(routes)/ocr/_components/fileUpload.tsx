import { useState } from 'react';
import { 
  ImagePlus,
 } from 'lucide-react';


const FileUpload = () => {


  return (
    <>

     <div className='w-[500px] h-[300px] rounded-2xl shadow-lg border border-dashed border-black ring-black bg-slate-200 hover:bg-slate-300'>
      <div className='flex h-full space-y-6 items-center justify-center'>
        <div className='m-auto'>
          <div className='flex justify-center'>
            <ImagePlus color='gray'/>
          </div>
     
          <div className='text-gray-500 font-mono font-semibold'>
            Upload Image in format [.jpg, .png, .jpeg]
          </div>
        </div>
      </div>
     </div>

    </>
  );
};

export default FileUpload;
