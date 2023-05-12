import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteNOTE, EditNOTE } from "../Redux/Action";

import Button from '@mui/material/Button';
import { NoteDeleted, NoteEdited } from "./Message";
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';



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
    <div >
      {isNoteDeleted && <NoteDeleted />}
      {isNoteEdited && <NoteEdited />}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="btn" >
              <Button variant="contained"
                onClick={() => navigate("/")}>
                Add Notes<AddIcon />
              </Button>

              <Button variant="contained" onClick={() => navigate("/add")} >
                Total Notes &nbsp;
                <span>
                  {allNotes.length}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="show-form">
              {allNotes.map((NOTE, index) => (
                <div key={index}>
                  {editIndex === index ? (
                    <div >
                      <div >
                        <input value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)} />
                      </div>
                      <div >
                        <textarea value={editDescription}
                          onChange={(e) => setEditDescription(e.target.value)} />
                      </div>
                      <div >
                        <Button
                          onClick={handleSave}>
                          Save
                        </Button>
                        <Button
                          onClick={() => setEditIndex(null)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-2 mb-2 bg-light p-4">
                      <h4 >
                       Title: {NOTE.title}
                      </h4>
                      <hr/>
                      <p >
                      Description: {NOTE.description}
                      </p>
                      <hr/>
                    </div>
                  )}

                  <div >
                    <Button onClick={() => handleEdit(index)} className="">
                      <UpdateIcon />
                    </Button>
                    <Button onClick={() => handleDelete(index)} variant="outlined" >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>



    </div>
  );
};

export default ShowNotes;