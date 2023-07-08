import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: false,
  constrols: false,
  playing: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setControls: (state, action) => {
      state.current = action.payload;
    },
    setPlaying: (state, action) => {
      state.current = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setControls, setPlaying, setCurrent } = playerSlice.actions;

export default playerSlice.reducer;
