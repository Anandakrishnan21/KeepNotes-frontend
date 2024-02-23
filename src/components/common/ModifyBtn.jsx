import axios from "axios";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { UpdateNotes } from "../form/UpdateNotes";

function ModifyBtn({noteTitle, onDelete}) {
  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/keepNotes/${noteTitle}`)
    .then((res)=> {
      onDelete();
    })
    .catch((err) => {
      console.error(err);
    });
  }
  return (
    <div className="flex justify-end gap-2">
      <UpdateNotes noteTitle={noteTitle} />
      <MdDeleteOutline className="cursor-pointer" onClick={handleDelete} />
    </div>
  );
}

export default ModifyBtn;
