import stepsSlice from "./slices/steps.slice";
import { configureStore } from '@reduxjs/toolkit'
const Store = configureStore({
   reducer: {
      steps: stepsSlice
   },
})
export default Store;