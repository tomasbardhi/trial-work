import React, { useState, createContext } from 'react'

export const AppContext = createContext()

export const AppContextProvider = props => {

    const [authenticated, setAuthenticated] = useState(false)
    const [bearerToken, setBearerToken] = useState("")

    return (
        <AppContext.Provider value={{ authenticated, setAuthenticated, bearerToken, setBearerToken }}>
            {props.children}
        </AppContext.Provider>
    )
}