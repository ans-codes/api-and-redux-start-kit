import { TOKEN, USER } from "./types";

const initialState = {
  token: null,
  user: {
    name:'Please Login!'
  },
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default profile;
