import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteNOTE, EditNOTE } from "../Redux/Action";

import Button from '@mui/material/Button';
import { NoteDeleted, NoteEdited } from "./Message";
import AddIcon from '@mui/icons-material/Add';




const ShowNotes = () => {
  const allNotes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [isNoteDeleted, setIsNoteDeleted] = useState(false);
  const [isNoteEdited, setisNoteEdited] = useState(false);

  const handleDelete = (index) => {
    dispatch(DeleteNOTE(index));
    setIsNoteDeleted(true);
    setTimeout(() => {
      setIsNoteDeleted(false);
    }, 1000);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTitle(allNotes[index].title);
    setEditDescription(allNotes[index].description);
  };

  const handleSave = () => {
    dispatch(EditNOTE(editIndex, editTitle, editDescription));
    setEditIndex(null);
    setEditTitle("");
    setEditDescription("");
    setisNoteEdited(true);
    setTimeout(() => {
      setisNoteEdited(false);
    }, 1000);
  };

  return (
    <>
      {isNoteDeleted && <NoteDeleted />}
      {isNoteEdited && <NoteEdited />}
      <div className="container">
        <div className="row">
          <div className="show-form col-12 mt-1">
            <div >
              <div className="buttons " >
                <Button variant="contained"
                  onClick={() => navigate("/")}>
                  Add Notes &nbsp;&nbsp;<AddIcon />
                </Button>

                <Button variant="contained" onClick={() => navigate("/add")} >
                  Total Notes &nbsp;
                  <span>
                    {allNotes.length}
                  </span>
                </Button>
              </div>
              {allNotes.map((NOTE, index) => (
                <div className="Data" key={index}>
                  {editIndex === index ? (
                    <div >
                      <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                      <br />
                      <textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                      <br />
                      <Button variant="outlined" onClick={handleSave}>&nbsp;&nbsp;Save&nbsp;&nbsp;</Button>
                      <Button variant="outlined" onClick={() => setEditIndex(null)}>Cancel</Button>
                    </div>
                  ) : (
                    <div className="Show-Notes">
                      <h4 >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{NOTE.title}</h4>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {NOTE.description} </div>
                    </div>
                    )}

                  <div className="changing-btn" >
                    <Button onClick={() => handleEdit(index)} variant="outlined">Update</Button>
                    <Button onClick={() => handleDelete(index)} variant="outlined" >Delete</Button>
                  </div>
                  
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default ShowNotes;