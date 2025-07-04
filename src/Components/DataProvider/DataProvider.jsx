/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useReducer, createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext();



export const  DataContextProvider = ({children,reducer,initialState})=>{
    return (
        <DataContext.Provider value={useReducer(reducer,initialState)}>
        {children}
        </DataContext.Provider>
    )
}