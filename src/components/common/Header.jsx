"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Ping from "./Ping";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="header">
      <header className="mx-4 flex justify-between items-center p-1">
        <div className="flex items-center gap-1 rounded-xl">
          <p className="font-bold text-xl md:text-2xl">
            Idea<span className="text-yellow-500"> Pad</span>
          </p>
        </div>
        {session && session.user ? (
          <div className="flex justify-center items-center gap-2">
            <div class="relative flex">
              <Image
                src={session.user.image}
                alt="profile"
                className="w-6 h-6 rounded-full"
                width={100}
                height={100}
              />
              <Ping />
            </div>
            <Button
              variant="destructive"
              onClick={() => signOut("google")}
              className="w-28"
            >
              SignOut
            </Button>
          </div>
        ) : (
          <div></div>
        )}
      </header>
    </div>
  );
}

export default Header;
