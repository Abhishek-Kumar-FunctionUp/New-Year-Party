import { createStore } from "redux";
import { registrationReducer } from "./registrationReducer";

export const store = createStore(registrationReducer);
