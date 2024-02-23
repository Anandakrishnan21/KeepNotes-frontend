"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MdOutlineModeEdit } from "react-icons/md";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import axios from "axios";

export function UpdateNotes({ noteTitle }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/keepNotes/${noteTitle}`)
      .then((res) => {
        const { title, description } = res.data;
        setTitle(title);
        setDescription(description);
      })
      .catch((error) => console.error("Error:", error));
  }, [noteTitle]);

  const handleSubmit = () => {
    const truncatedDescription = truncateDescription(description, 50);

    axios
      .put(`http://localhost:8000/api/keepNotes/${noteTitle}?desc=${truncatedDescription}`, {
        title: title,
        description: truncatedDescription,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => console.error("Error:", error));
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.split(" ").slice(0, maxLength).join(" ");
    }
    return description;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <MdOutlineModeEdit className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="w-10/12 md:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Notes</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            placeholder="Title"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            className="inputFields"
            readOnly
          />
          <Textarea
            placeholder="Description.."
            className="inputFields h-48 resize-none"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSubmit}>
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
