const initialState = {
    notes: [],
  };
  
  const rootNote = (state = initialState, action) => {
    if (action.type === "ADD_NOTE") {
      const newNotes = [
        ...state.notes,
        {
          title: action.title,
          description: action.description,
        },
      ];
      return {
        notes: newNotes,
      };
    } else if (action.type === "DELETE_NOTE") {
      const newNotes = state.notes.filter((note, index) => {
        return index != action.id;
      });
  ;
      return {
        notes: newNotes,
      };
    } else if (action.type === "EDIT_NOTE") {
      const newNotes = state.notes.map((note, index) => {
        if (index === action.id) {
          return {
            title: action.title,
            description: action.description,
          };
        }
        return note;
      });
   
      return {
        notes: newNotes,
      };
    } else {
      return state;
    }
  };
  
  export default rootNote;