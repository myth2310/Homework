import { createSlice } from "@reduxjs/toolkit";

export const sliceResult = createSlice({
  name: "searchResult",
  initialState: {
    result: [],
  },
  reducers: {
    insertResult : (state, action) => {
      state.result = action.payload;
    },
  }
});

export const { insertResult } = sliceResultSlice.actions;

export default sliceResultSlice.reducer;
