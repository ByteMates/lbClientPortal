import { UPDATE_NAME } from "../Actions/PersonActions";

const personReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: payload });

    default:
      return state;
  }
};

export default personReducer;
