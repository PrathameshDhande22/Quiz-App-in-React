import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "uname",
  initialState: "User 1",
  reducers: {
    setName: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default nameSlice.reducer;
export const { setName } = nameSlice.actions;
