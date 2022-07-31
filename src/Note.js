import React from "react";
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { RiDeleteBinFill } from "react-icons/ri";
import { Button } from "@mui/material";

const Note = (props) => {
  const deleteNote =() =>{
    props.deleteItem(props.id);

  }




  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br></br>
        
        <p>dsa{props.content}</p>
        <button className="btn" onClick={deleteNote}  >
          <RiDeleteBinFill className="deleteNote" />
        </button>
      </div>
    </>
  );
};

export default Note;
