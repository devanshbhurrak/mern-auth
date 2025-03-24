import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import { ToastContainer } from 'react-toastify'
import { AppContext } from './context/AppContext'

const App = () => {
    const { checkAuth, isLogedIn } = useContext(AppContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const verifyAuth = async () => {
            await checkAuth()
            setLoading(false)
        }
        verifyAuth()
    }, [])

    if(loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>
    }

    return (
        <div>
            <ToastContainer/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/email-verify' element={<EmailVerify/>} />
                <Route path='/reset-password' element={<ResetPassword/>} />
            </Routes>
        </div>
    )
}

export default App