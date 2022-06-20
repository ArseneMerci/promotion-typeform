import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeStep: 0,
};
const stepSlice = createSlice({
    name: "steps",
    initialState,
    reducers: {
        next(state) {
            if(state.activeStep<=3)
            {
                state.activeStep+=1;
            }
        },
    },
});
export const { next } = stepSlice.actions;
export default stepSlice.reducer;
