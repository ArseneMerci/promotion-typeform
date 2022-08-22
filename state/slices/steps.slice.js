import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { clearAll } from "../../utils/persist";
import validaData from "../../utils/validateData";

export const saveOrderAsync = createAsyncThunk(
    "create-order",
    async ({ data, success }, { rejectWithValue }) => {
        return axios
            .post("https://promotion-typeform-api.herokuapp.com/api/order/new", data)
            .then((resp) => {
                clearAll();
                success();
            })
            .catch((error) => {
                console.log(error);
                rejectWithValue(error);
            });
    }
);
const initialState = {
    activeStep: 0,
    products: {},
    styles: {},
    improvements: "",
    modification: "",
    furnatureToKeep: "",
    pictures: [],
    plan: "",
    request: false,
    cart: [],
    loading: false,
    error: "",
};
const stepSlice = createSlice({
    name: "steps",
    initialState,
    reducers: {
        next(state) {
            if (state.activeStep < 6) {
                const currentStep = state.activeStep;
                const {result, error} = validaData(currentStep);
                if(result) state.activeStep += 1
                else state.error = error
            }
        },
        prev(state) {
            if (state.activeStep > 0) {
                state.activeStep -= 1;
            }
        },
        clearError(state){
            state.error = ''
        },
        addSpace(state, { payload }) {
            state.products = payload;
        },
        addStageThree(state, { payload }) {
            state.improvements = payload.improvements;
            state.modification = payload.modification;
            state.furnatureToKeep = payload.furnatureToKeep;
        },
        addStageFour(state, { payload }) {
            (state.pictures = payload.pictures),
                (state.plan = payload.plan),
                (state.request = payload.request)
                
        },
        deleteProduct(state, { payload }) {
            const data = state.products.filter((item) => item.id != payload.id);
            state.products = data;
        },
        addStyle(state, { payload }) {
            state.styles = payload;
            // state.activeStep += 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(saveOrderAsync.pending, (state) => {
            state.loading = true;
            console.log(state);
        }).addCase(saveOrderAsync.fulfilled, (state) => {
            state.loading = false;
            console.log(state);
        }).addCase(saveOrderAsync.rejected, (state) => {
            state.loading = false;
            console.log(state);
        })
    }
});
export const {
    next,
    prev,
    addSpace,
    addStyle,
    addStageThree,
    addStageFour,
    deleteProduct,
    clearError,
} = stepSlice.actions;
export default stepSlice.reducer;
