import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

    const createPasswordBasedUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userUpdated = (userProfile) =>{
        return updateProfile(auth.currentUser, userProfile)
    }

    const LoginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {user, createPasswordBasedUser, userUpdated, LoginUser}
    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;