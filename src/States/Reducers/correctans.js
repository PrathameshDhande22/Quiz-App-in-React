import { createSlice } from "@reduxjs/toolkit";

const CorrectAnsSlice = createSlice({
  name: "correctans",
  initialState: 0,
  reducers: {
    incQu: (state) => {
      return (state += 1);
    },
    setQu: (state) => {
      return (state = 0);
    },
  },
});

export default CorrectAnsSlice.reducer;
export const { incQu, setQu } = CorrectAnsSlice.actions;
