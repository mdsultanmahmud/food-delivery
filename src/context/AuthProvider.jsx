import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
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

    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
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
    const authInfo = { user, loading, createPasswordBasedUser, userUpdated, LoginUser, userLogout,loginWithGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;