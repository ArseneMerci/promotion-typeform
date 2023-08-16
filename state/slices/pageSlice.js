import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    type: ''
}
const pageSlice = createSlice({
  name: 'steps',
  initialState: initialState,
  reducers: {
    next: (state) => {
      state.value += 1;
    },
    prev: (state) => {
      state.value -= 1;
    },
    setConcept: (state) => {
      state.type = 'concept';
    },
    setManagement: (state) => {
      state.type = 'management';
    },
  },
});

export const { next, prev, setConcept, setManagement } = pageSlice.actions;
export default pageSlice.reducer;
