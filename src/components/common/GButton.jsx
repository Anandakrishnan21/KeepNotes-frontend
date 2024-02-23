"use client"
import React from 'react'
import { IoLogoGoogle } from "react-icons/io";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

function GButton() {
  return (
    <Button variant="loginBtn" className="w-28 flex gap-1" onClick={() => signIn("google")}>
    <IoLogoGoogle className="h-4 w-4" />
    Sign In
  </Button>
  )
}

export default GButton
