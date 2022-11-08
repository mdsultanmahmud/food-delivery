import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth'
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
    const authInfo = {user, createPasswordBasedUser, userUpdated}
    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;