import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import GButton from "@/components/common/GButton";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Header from "@/components/common/Header";

export default async function Landing() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/notes");
  return (
    <>
      <Header />
      <div className="mainDiv">
        <div className="w-10/12 md:w-2/3 flex flex-col justify-center items-center gap-2">
          <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl">
            Maintain your messy notes
          </h1>
          <div className="w-10/12">
            <p className="text-neutral-500 text-sm">
              Keep your most valuable notes safe and secure and make your life
              worry free.
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="w-28">Get started</Button>
            <GButton />
          </div>
        </div>
        <div className="w-10/12 md:w-1/3 h-1/2 md:h-full  flex justify-center items-center">
          <img src="/img/img1.png" alt="img1" className="object-cover" />
        </div>
      </div>
    </>
  );
}
