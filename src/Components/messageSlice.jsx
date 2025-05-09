import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: { text: "Hello, world!" }, 
  reducers: {
    updateMessage: (state, action) => {
      state.text = action.payload; 
    },
  },
});

export const { updateMessage } = messageSlice.actions;
export default messageSlice.reducer;