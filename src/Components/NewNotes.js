import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNOTE } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import { NoteAdded } from "./Message";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


const NewNotes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isNoteAdded, setIsNoteAdded] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const AddNotes = (e) => {
    e.preventDefault();
    dispatch(AddNOTE(title, description));
    setTitle("");
    setDescription("");

    setIsNoteAdded(true);
    setTimeout(() => {
      setIsNoteAdded(false);
    }, 500);

    setTimeout(() => {
      navigate("/add");
    }, 500);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="Notes">
              {isNoteAdded && <NoteAdded />}
              <Button className="mt-5 mb-2" variant="outlined" onClick={() => navigate("/add")} >
               Check The Notes &nbsp;&nbsp;<ArrowCircleRightIcon/>
              </Button>
              <div className="form">
                <h1>
                  Add A Note
                </h1>
                <form onSubmit={AddNotes} >
                  <div >
                    <input
                    className="note-title"
                      placeholder="Enter Title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required />
                  </div>
                  <div>
                    <textarea
                    className="note-description"
                      placeholder="Enter Description"
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required />
                  </div>
                  <Button variant="outlined" type="submit" className="mt-3" >
                    Add Note &nbsp;&nbsp;<AddIcon />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewNotes;