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
      const id = action.payload;
      const indexToRemove = state.inputError.findIndex(
        (error) => error.id === id
      );
      if (indexToRemove !== -1) {
        const newInputErrors = [
          ...state.inputError.slice(0, indexToRemove),
          ...state.inputError.slice(indexToRemove + 1),
        ];
        state.inputError = newInputErrors;
      }
    },
    resetInputErrors: (state) => {
      state.inputError = [];
    },
  },
});

export const { addInputError, deleteInputError, resetInputErrors } =
  inputSlice.actions;

export default inputSlice.reducer;
