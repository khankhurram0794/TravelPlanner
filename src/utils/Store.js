import { configureStore } from "@reduxjs/toolkit";
import getDataSlice from "./Slices/getDataSlice";

const store = configureStore({
    reducer:{
        getData:getDataSlice
    }
})

export default store