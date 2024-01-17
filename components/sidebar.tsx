"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { 
  Binary, 
  FileImage, 
  LayoutDashboard, 
  MessageSquare, 
  Music, 
  Settings, 
  VideoIcon, 
  Biohazard, 
  TextSelect,
  Home,
  FileType,
  MessageCircle,
  SlidersHorizontal,
  Box,

} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Home',
    icon: Home,
    href: '/dashboard',
    color: "text-yellow-900"
  },
  {
    label: 'Khmer OCR',
    icon: FileType,
    href: '/ocr',
    color: "text-sky-500",
  },
  {
    label: 'Niyeay',
    icon: MessageCircle,
    href: '/conversation',
    color: "text-violet-500",
  },
  {
    label: 'Sorse Code',
    icon: Binary,
    color: "text-green-700",
    href: '/code',
  },
  // {
  //   label: 'Langchain',
  //   icon: Biohazard,
  //   color: "text-pink-500",
  //   href: '/langchain',
  // },

  {
    label: 'Roub Pheab',
    icon: FileImage,
    color: "text-pink-700",
    href: '/image',
  },
  // {
  //   label: 'Music Generation',
  //   icon: Music,
  //   color: "text-emerald-500",
  //   href: '/music',
  // },
  // {
  //   label: 'Video Generation',
  //   icon: VideoIcon,
  //   color: "text-orange-700",
  //   href: '/video',
  // },
  {
    label: 'Settings',
    icon: SlidersHorizontal,
    color: "text-slate-800",
    href: '/settings',

  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-200 text-black">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          {/* <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div> */}
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            Acleda AI Hub
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-black hover:bg-slate-300 rounded-lg transition",
                pathname === route.href ? "text-black bg-slate-300" : "text-gray-600",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};
