import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calc",
  initialState: {
    bill: "",
    people: "",
    active: "",
    customTip: "",
  },
  reducers: {
    setValue(state, action) {
      state.bill = action.payload;
    },
    setPeople(state, action) {
      state.people = action.payload;
    },
    setActive(state, action) {
      state.active = action.payload;
    },
    setCustomTip(state, action) {
      state.customTip = action.payload;
    },
  },
});

export const { setValue, setPeople, setActive, setCustomTip } =
  calcSlice.actions;

export default calcSlice.reducer;
