import { createStore } from "redux";
import rootNote from "./reducer";

const store = createStore(rootNote);

export default store;