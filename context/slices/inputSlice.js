import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "Input",
  initialState: {
    inputError: [],
  },
  reducers: {
    addInputError: (state, action) => {
      state.inputError.push(action.payload);
    },
    deleteInputError: (state, action) => {
      const idToRemove = action.payload;
      state.inputError = state.inputError.filter(
        (error) => error.id !== idToRemove
      );
    },
    resetInputErrors: (state) => {
      state.inputError = [];
    },
  },
});

export const { addInputError, deleteInputError, resetInputErrors } =
  inputSlice.actions;

export default inputSlice.reducer;
