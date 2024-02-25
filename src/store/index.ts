import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ListSlice from "./ListSlice";

export const store = configureStore({
    reducer: {
        list: ListSlice
    }
})

export const useAppDispatch:() => typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector