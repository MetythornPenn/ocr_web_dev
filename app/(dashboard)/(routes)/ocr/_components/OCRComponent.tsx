// OCRComponent.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OCRComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  
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
        const response = await axios.post('http://0.0.0.0:5500/khm_ocr', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'accept': 'application/json',
          },
        });
        
        setResult(response.data);
      } catch (error) {
        console.error('Error fetching API:', error);
      }
    }
  };
  
  useEffect(() => {
    if (file) {
      handleSubmit();
    }
  }, [file]);

  return (
    <div>
      <label htmlFor="imageInput" style={{ cursor: 'pointer' }}>
        {imagePreview ? 'Change Image' : 'Upload Image'}
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </label>

      {imagePreview && (
        <div>
          <h2>Selected Image Preview</h2>
          <img src={imagePreview} alt="Selected" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        </div>
      )}

      {result && (
        <div>
          <h1>ID Number: {result.id_number}</h1>
          <p>KHM Name: {result.khm_name}</p>
          <p>Latin Name: {result.latin_name}</p>
          <p>Gender: {result.gender}</p>
          <p>DOB: {result.dob}</p>
          <p>Address: {result.address}</p>
          <p>Expired Date: {result.expired_date}</p>
        </div>
      )}
    </div>
  );
};

export default OCRComponent;
