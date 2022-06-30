import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeStep: 0,
    products:{},
    styles:{},
    improvements:"",
    modification:"",
    furnatureToKeep:"",
    pictures:[],
    plan:"string",
    request:false
};
const stepSlice = createSlice({
    name: "steps",
    initialState,
    reducers: {
        next(state) {
            if (state.activeStep <4) {
                state.activeStep += 1;
            }
        },
        prev(state) {
            if (state.activeStep > 0) {
                state.activeStep -= 1;
            }
        },
        addProduct(state,{payload}){
          state.products=payload;
           state.activeStep+=1;
        },
        addStageThree(state,{payload}){
           state.improvements=payload.improvements
           state.modification=payload.modification
           state.furnatureToKeep=payload.furnatureToKeep
           state.activeStep+=1;
        },
        addStageFour(state,{payload}){
            state.pictures=payload.pictures,
            state.plan=payload.plan,
            state.request=payload.request,
            state.activeStep+=1;
         },
        deleteProduct(state,{payload}){
            const data=state.products.filter(item=>item.id!=payload.id);
            state.products=data;
        },
        addStyle(state,{payload}){
          state.styles=payload;
          state.activeStep+=1;
        },
    },

});
export const { next,prev,addProduct,addStyle,addStageThree,addStageFour,deleteProduct} = stepSlice.actions;
export default stepSlice.reducer;
