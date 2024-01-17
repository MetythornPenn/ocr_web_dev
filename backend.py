from fastapi import Depends, FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os, shutil


app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

uploaded_path = "static/uploads/"
result_path = "results"

# New folder to save ocr images
if os.path.isdir("result"):
    pass
else:
    os.mkdir("result")
  
@app.get("/")
def home():
  return {"Server is Running on port 5500"}
    

@app.post("/khm_idcard")
async def getResult(file: UploadFile = File(...)):
    if os.path.isdir(uploaded_path):
        pass
    else:
        os.mkdir(uploaded_path)

    filename = f"{uploaded_path}/page1.png"

    with open(filename, "wb") as f:
        shutil.copyfileobj(file.file, f)

    return {
        "id_number":"11223344" ,
        "khm_name": "អាន់ សុខនាង",
        "latin_name": "An Sokeng",
        "gender": "Male",
        "dob": "01/01/2000",
        "address": "Chbar Ompov, Phnom Penh",
        "expired_date": "01/01/2000",
    }

@app.post("/passport")
async def getResult(file: UploadFile = File(...)):
    if os.path.isdir(uploaded_path):
        pass
    else:
        os.mkdir(uploaded_path)

    filename = f"{uploaded_path}/page2.png"

    with open(filename, "wb") as f:
        shutil.copyfileobj(file.file, f)

    return {
        "passport_number":"11223344" ,
        "first_name": "JANE",
        "last_name": "CITIZEN",
        "gender": "Female",
        "dob": "04/05/1991",
        "nationality": "AUSTRALIA",
        "expiry_date": "01/08/2032",
    }
    
    
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5500)