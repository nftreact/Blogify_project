import { createSlice } from "@reduxjs/toolkit";

export const database = createSlice({
  name: "data",
  initialState: {
    tab: 4,
    value: {
      text: "",
      user: {},
      blog: {},
    },
  },
  reducers: {
    getText: (state, action) => {
      state.value = action.payload;
    },

    setUser: (state, action) => {
      state.value.user = action.payload;
    },
    submitBlog: (state, action) => {
      state.value.blog = action.payload;
    },
    updateTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { getText, setUser, submitBlog , updateTab } = database.actions;

export default database.reducer;
