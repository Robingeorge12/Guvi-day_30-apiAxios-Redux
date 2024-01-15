import { configureStore } from '@reduxjs/toolkit'
import reducerData from "../Redux/product"
// import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
      
      users:reducerData,

    },
   
  })  