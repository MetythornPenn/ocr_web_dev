"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import TypewriterComponent from "typewriter-effect";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { tools } from "@/constants";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        {/* <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2> */}
        <h2 className="text-4xl font-bold text-center space-y-5 ">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-slate-600">
            <TypewriterComponent
              options={{
                strings:[
                  "Explore the power of AI"
                ],
                autoStart:true,
                loop: true,
              }}
              />
          </div>
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}
