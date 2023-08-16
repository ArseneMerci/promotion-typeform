import stepsSlice from "./slices/steps.slice";
import pageSlice from "./slices/pageSlice";
import { configureStore } from '@reduxjs/toolkit'
const Store = configureStore({
   reducer: {
      steps: stepsSlice,
      pages: pageSlice
   },
})
export default Store;
