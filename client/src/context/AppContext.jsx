import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AppContext = createContext()

export function AppContextProvider({ children }) {
    const [isLogedIn, setIsLogedIn] = useState(false)
    const [userData, setUserData] = useState(null)
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const checkAuth = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/auth/is-auth', {
                withCredentials: true
            })
            if(data.success) {
                setIsLogedIn(true)
                await getUserData()
            }
        } catch (error) {
            setIsLogedIn(false)
            setUserData(null)
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    const getUserData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/data', {
                withCredentials: true
            })
            if(data.success) {
                setUserData(data.userData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AppContext.Provider value={{
            backendUrl,
            isLogedIn,
            setIsLogedIn,
            userData,
            setUserData,
            getUserData,
            checkAuth
        }}>
            {children}
        </AppContext.Provider>
    )
}