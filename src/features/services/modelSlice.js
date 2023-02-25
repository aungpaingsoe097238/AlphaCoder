import { createSlice } from "@reduxjs/toolkit";

export const modelSlice = createSlice({
  name: "model",
  initialState: {
    open: false,
    screen: "",
    image: "",
  },
  reducers: {
    addState: (state, actions) => {
      state.open = !state.open;
        state.image = actions.payload.image;
      if (state.open === true) {
        state.screen = actions.payload.screen;
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
});

export const { addState } = modelSlice.actions;
export default modelSlice.reducer;
