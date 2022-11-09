import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const createPasswordBasedUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userUpdated = (userProfile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userProfile)
    }

    const LoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (user) {
                setUser(currentUser)
                setLoading(false)
            } else {
                setUser({})
                setLoading(false)
            }
        })

        return () => unsubscribe()
    }, [])
    const authInfo = { user, loading, createPasswordBasedUser, userUpdated, LoginUser, userLogout }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;