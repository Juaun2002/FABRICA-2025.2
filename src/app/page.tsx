"use client";

import React from "react";
import Header from "@/components/Header";
import  Footer  from "@/components/Footer";
import Gerador from "@/components/Gerador";



export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-gray-400 font-sans" >
      <Header />
      <Gerador />
      <Footer />
    </div>
  )
}
