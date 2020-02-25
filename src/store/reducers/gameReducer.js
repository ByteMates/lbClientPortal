import UPDATE_GAME from "../Actions/GameActions";

const gameReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_GAME:
      return { name: payload };

    default:
      return state;
  }
};

export default gameReducer;
