import { createSlice } from "@reduxjs/toolkit";

const nextques = createSlice({
  name: "nextQuestionCount",
  initialState: 1,
  reducers: {
    setCount: (state) => {
      return (state += 1);
    },
    setZero: (state) => {
      return (state = 1);
    },
  },
});

export default nextques.reducer;
export const { setCount, setZero } = nextques.actions;
