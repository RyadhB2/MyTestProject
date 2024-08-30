import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from '../services/apiSlice';


import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        }).concat(apiSlice.middleware)
    }
});

setupListeners(store.dispatch);
export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector