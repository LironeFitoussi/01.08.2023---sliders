import React, { createContext, useState} from "react";
export const UserDataContext = createContext({});

export default function userDataProvider ({children}) {
    return (
        <userDataContext value={{}}>
            {children}
        </userDataContext>
    )
}