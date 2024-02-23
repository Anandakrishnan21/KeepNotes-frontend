"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import ModifyBtn from "../common/ModifyBtn";

function Notes() {
  const { data: session } = useSession();
  const [noteList, setNoteList] = useState([]);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (session) {
      axios.get("http://localhost:8000/api/keepNotes").then((res) => {
        setNoteList(res.data);
      });
    }
  }, [session]);

  const handleDelete = () => {
    axios.get("http://localhost:8000/api/keepNotes").then((res) => {
      setNoteList(res.data);
    });
  };

  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
        {noteList.map((note, index) => {
          if (session.user.email == note.email) {
            return (
              <div
                key={index}
                className="stickNotes w-full md:w-1/3 lg:w-1/5 h-72 flex flex-col gap-2 relative bg-[#ffa] hover:shadow-xl transition-shadow duration-200 overflow-hidden m-[30px]-auto dark:text-black shadow-lg p-4"
                style={{
                  borderRadius: "0 0 0 30px/45px",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <p className="text-center capitalize font-bold rounded-lg p-1">
                  {note.title}
                </p>
                <div className="h-5/6 capitalize text-sm p-2 text-justify">
                  <p>{note.description}</p>
                </div>
                {hover && (
                  <ModifyBtn noteTitle={note.title} onDelete={handleDelete} />
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Notes;
