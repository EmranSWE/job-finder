import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authSlice from '../feature/auth/authSlice'
import apiSlice from '../feature/api/apiSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    auth:authSlice
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
})