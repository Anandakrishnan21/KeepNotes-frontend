import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Notes from "@/components/form/Notes";
import { redirect } from "next/navigation";

async function Homepage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  return (
    <>
      <Notes />
    </>
  );
}

export default Homepage;
