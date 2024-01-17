"use client"

import React, { useState } from "react";
import FileUpload from '@/components/ocr/fileUpload';
import FilePreview from '@/components/ocr/filePreview';
import { FileContext, ThresholdContext } from '@/app/context';
import { Heading } from "@/components/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import IdCard from "./_components/IdCard";
import {
    FileType
} from "lucide-react";
import OCRComponent from "./_components/OCRComponent";
import Passport from "./_components/Passport";


function Home() {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    // const [th1, setTh1] = useState<number | null>(210);
    // const [th2, setTh2] = useState<number | null>(230);

    return (
        <>
            <Heading
            title="Khmer Optical Character Recognition"
            description="AI that can help extract text khmer documents. AI algorithm provide by [Mr. Danh Hong : founder of Khmer Unicode]"
            icon= {FileType}
            iconColor="text-blue-700"
            bgColor="bg-blue-100"
            />

            <div className="container mx-auto h-screen font-mono">
                <Tabs defaultValue="khmer_id" className="">
                    <TabsList className="flex items-center bg-slate-300 text-black">
                        <TabsTrigger value="khmer_id">Khmer ID Card</TabsTrigger>
                        <TabsTrigger value="passport">Passport</TabsTrigger>
                        <TabsTrigger value="staff_id">Staff ID Card</TabsTrigger>
                        <TabsTrigger value="monk_id">Monk ID</TabsTrigger>
                        <TabsTrigger value="family_book">Family Book</TabsTrigger>
                        <TabsTrigger value="resident_book">Resident Book</TabsTrigger>
                        <TabsTrigger value="birth_certificate">Birth Certificate</TabsTrigger>
                        <TabsTrigger value="payment_card">Payment Card</TabsTrigger>

                    </TabsList>

                    <TabsContent value="khmer_id">
                        <IdCard/>
                    </TabsContent>

                    <TabsContent value="passport">
                       {/* <OCRComponent/> */}
                       <Passport/>
                    </TabsContent>

                    <TabsContent value="staff_id">
                        <div className="text-2xl h-full mt-40 flex text-slate-600 rounded-lg shadow-2xl ">
                            <div className="m-auto">
                                Comming Soon!!! 
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="monk_id">
                        <div className="text-2xl h-full mt-40 flex text-slate-600 rounded-lg shadow-2xl ">
                            <div className="m-auto">
                                Comming Soon!!! 
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="family_book">
                        <div className="text-2xl h-full mt-40 flex text-slate-600 rounded-lg shadow-2xl ">
                            <div className="m-auto">
                                Comming Soon!!! 
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="resident_book">
                        <div className="text-2xl h-full mt-40 flex text-slate-600 rounded-lg shadow-2xl ">
                            <div className="m-auto">
                                Comming Soon!!! 
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="birth_certificate">
                        <div className="text-2xl h-full mt-40 flex text-slate-600 rounded-lg shadow-2xl ">
                            <div className="m-auto">
                                Comming Soon!!! 
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="payment_card">
                        <div className="text-2xl h-full mt-40 flex text-slate-600 rounded-lg shadow-2xl ">
                            <div className="m-auto">
                                Comming Soon!!! 
                            </div>
                        </div>
                    </TabsContent>


                </Tabs>

            </div >
        </>
    );
}


export default Home;