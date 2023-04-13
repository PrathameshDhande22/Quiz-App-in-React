import { createSlice } from "@reduxjs/toolkit";

const StartBtnSlice = createSlice({
  name: "start",
  initialState: false,
  reducers: {
    setOpen: (state) => {
      if (state) {
        return (state = false);
      }
      return (state = true);
    },
  },
});

export default StartBtnSlice.reducer;
export const { setOpen } = StartBtnSlice.actions;
