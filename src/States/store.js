import { configureStore } from "@reduxjs/toolkit";
import startReducer from "./Reducers/startbtn";
import nameReducer from "./Reducers/name";
import scoreReducer from "./Reducers/score";
import nextquesReducer from "./Reducers/nextques";
import correctansReducer from "./Reducers/correctans";

export default configureStore({
  reducer: {
    canStart: startReducer,
    Name: nameReducer,
    currScore: scoreReducer,
    qCount: nextquesReducer,
    cansCount: correctansReducer,
  },
});
