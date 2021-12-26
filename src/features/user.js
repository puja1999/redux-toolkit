import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: "", email: "" };
export const userSlice = createSlice({
  // contains all the information about the reducer
  name: "user", // like name of state
  initialState: { value: initialStateValue },
  reducers: {
    // different functions to alter the value of the application
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      // state.value = {name: "", age: "", email: "" };
      state.value = initialStateValue;
    },
  },
});

// exporting actions
export const { login, logout } = userSlice.actions;

// exporting reducer
export default userSlice.reducer;
