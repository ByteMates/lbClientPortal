import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import personReducer from "./reducers/personReducer";

import gameReducer from "./reducers/gameReducer";

import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const allReducers = combineReducers({
  person: personReducer,
  game: gameReducer,
  users: userReducer
});

const initialReducer = {
  person: { name: "Jani" },
  game: { name: "pakrampakrai" },
  users: []
};

let middleWare = [thunk];

const store = createStore(
  allReducers,
  initialReducer,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
