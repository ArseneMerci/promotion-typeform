import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeStep: 0,
    products:[],
    styles:{}
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
          let checkIfExists=state.products.filter(item=>item.id==payload.id);
          if(!checkIfExists.length)
          {
            let newData=state.products.concat(payload);
            let reversed=newData.slice().reverse();
            state.products=reversed;
          }
        },
        deleteProduct(state,{payload}){
            const data=state.products.filter(item=>item.id!=payload.id);
            state.products=data;
        },
            addStyle(state,{payload}){
                  state.designs=payload;
    
        },
    },

});
export const { next,prev,addProduct,addStyle,deleteProduct} = stepSlice.actions;
export default stepSlice.reducer;
