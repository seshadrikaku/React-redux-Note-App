import React from "react";

export const NoteAdded = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center p-2 bg-primary">
            {
              alert = " Added Successfully"
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export const NoteDeleted = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center bg-danger text-light p-2">
          {
            alert = " Deleted Successfully"
          }
        </div>
      </div>
    </div>
  );
};

export const NoteEdited = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center bg-dark text-light p-2">
          {
            alert = " Updated Successfully"
          }
        </div>
      </div>
    </div>
  )
};