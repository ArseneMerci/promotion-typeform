import stepsSlice from "./slices/steps.slice";
import { configureStore } from '@reduxjs/toolkit'
const Store = configureStore({
   reducer: {
      steps: stepsSlice
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
   }),
})
export default Store;