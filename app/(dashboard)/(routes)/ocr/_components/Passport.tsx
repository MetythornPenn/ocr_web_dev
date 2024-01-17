import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  ImagePlus
} from 'lucide-react';

import FileUpload from './fileUpload'
import Instruction from './Instruction'
import SampleIdCard from './SampleIdCard'
import SamplePassport from './SamplePassport';

const Passport: React.FC = () => {
  const [file, setFile] = useState<File | null>(null); // handle file input change
  const [result, setResult] = useState<any | null>(null); // handle result getting from api
  const [imagePreview, setImagePreview] = useState<string | null>(null); // handle preview image

  // func to get image input from user
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      
      // Display image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://0.0.0.0:5500/passport', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'accept': 'application/json',
          },
        });
        
        setResult(response.data);
      } catch (error) {
        console.log('Error fetching API', error);
      }
    }
  };

  useEffect(() => {
    if (file) {
      handleSubmit();
    }
  }, [file]);

  return (
    <>
      <div className='space-y-4 mt-8'>

        <div className='grid grid-cols-2'>
          {/* <FileUpload/> */}
          <div className='w-[500px] h-[300px] rounded-2xl shadow-lg border border-dashed border-black ring-black bg-slate-200 hover:bg-slate-300'>
            {file ? (

                <label htmlFor="imageInput" style={{ cursor: 'pointer' }}>
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    />

                    {imagePreview && (
                      <div>
                        {/* <h2>Selected Image Preview</h2> */}
                        <img src={imagePreview} alt="Selected" />
                      </div>
                    )}
                </label>

            ): (

                <label htmlFor="imageInput" style={{ cursor: 'pointer' }}>
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
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    />

                    {imagePreview && (
                      <div>
                        {/* <h2>Selected Image Preview</h2> */}
                        <img 
                          src={imagePreview} 
                          alt="Selected"
                        />
                      </div>
                    )}
                </label>

            )}
          </div>

          {/* <TextPreview/> */}

          <div className='w-[500px] h-[300px] rounded-2xl shadow-lg border border-dashed border-black ring-black bg-slate-200 p-8'>
          {result ? (
              <div className='space-y-2'>
                <h1>Passport No: {result.passport_number}</h1>
                <p>First Name: {result.first_name}</p>
                <p>Last Name: {result.last_name}</p>
                <p>Gender: {result.gender}</p>
                <p>DOB: {result.dob}</p>
                <p>Nationality: {result.nationality}</p>
                <p>Expiry Date: {result.expiry_date}</p>
              </div>
            ) : (
              <div className='space-y-2'>
                <h1>Passport No: XXXXXXXX</h1>
                <p>First Name: XXXXXX</p>
                <p>Last Name: XXXXXX</p>
                <p>Gender: XXX</p>
                <p>DOB: XX / XX / XXXX</p>
                <p>Nationality: XXXXXXXX</p>
                <p>Expiry Date: XX / XX / XXXX</p>
              </div>
            )}
          </div>
        </div>

        <div className='grid grid-cols-2'>
          {/* <SampleIdCard/> */}
          <SamplePassport/>
          <Instruction/>
        </div>
      </div>
    </>
  )
}

export default Passport;