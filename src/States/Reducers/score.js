import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: 0,
  reducers: {
    incScore: (state) => {
      return (state += 10);
    },
    setScore: (state) => {
      return (state = 0);
    },
  },
});

export default scoreSlice.reducer;
export const { incScore, setScore } = scoreSlice.actions;
