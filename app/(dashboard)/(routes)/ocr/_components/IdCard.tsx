import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImagePlus } from 'lucide-react';

import FileUpload from './fileUpload';
import Instruction from './Instruction';
import SampleIdCard from './SampleIdCard';

const IdCard: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (file) {
      setLoading(true); // Set loading to true when making the API request
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://172.17.2.69:5000/khm_ocr', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'accept': 'application/json',
          },
        });

        setResult(response.data);
      } catch (error) {
        console.log('Error fetching API', error);
      } finally {
        setLoading(false); // Set loading to false when the API request is completed (success or failure)
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

        <div className='grid grid-cols-2 '>
          <div className='w-[500px] h-[300px] rounded-2xl shadow-lg border border-dashed border-black ring-black bg-slate-200 hover:bg-slate-300 hover:delay-75 hover:scale-95'>
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
                    <img src={imagePreview} alt="Selected" />
                  </div>
                )}
              </label>
            ) : (
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
                    <img src={imagePreview} alt="Selected" />
                  </div>
                )}
              </label>
            )}
          </div>

          <div className='w-[500px] h-[300px] rounded-2xl shadow-lg border border-dashed border-black ring-black bg-slate-200 p-8 hover:scale-95 hover:delay-150'>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div className='space-y-2'>
                <h1>ID Card No: {result?.id_num || 'XXXXXXXX'}</h1>
                <p>Khmer Name: {result?.khm_name || 'XXX XXXXXX'}</p>
                <p>Latin Name: {result?.latin_name || 'XXX XXXXXX'}</p>
                <p>Gender: {result?.sex || 'XXX'}</p>
                <p>DOB: {result?.dob || 'XX / XX / XXXX'}</p>
                <p>Address: {result?.address || 'XXXX XXXX XXXX XXXX'}</p>
                <p>Expired Date: {result?.expire || 'XX / XX / XX'}</p>
              </div>
            )}
          </div>
        </div>

        <div className='grid grid-cols-2'>
          <SampleIdCard/>
          <Instruction/>
        </div>
      </div>
    </>
  );
}

export default IdCard;
