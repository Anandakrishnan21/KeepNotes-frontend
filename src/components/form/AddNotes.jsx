"use client";
import React, { useRef, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

export function AddNotes() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (session?.user?.email) {
      setEmail(session.user.email);
    }
  }, [session]);

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/api/keepNotes", {
        title: title,
        description: description,
        email: email,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="font-semibold">
          ADD
        </Button>
      </DialogTrigger>
      <DialogContent className="w-10/12 md:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Notes</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            ref={inputRef}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="inputFields"
            required
          />
          <Textarea
            placeholder="Description.."
            className="inputFields h-48 resize-none"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}