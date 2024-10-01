import { REGISTER } from "./registrationActions";

const initialState = {
  registrants: [],
};

export const registrationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        registrants: [...state.registrants, action.payload],
      };
    default:
      return state;
  }
};
