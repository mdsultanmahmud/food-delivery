import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})

    const createPasswordBasedUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userUpdated = (userProfile) =>{
        return updateProfile(auth.currentUser, userProfile)
    }

    const LoginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () =>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            if(user){
                setUser(currentUser)
            }else{
                setUser({})
            }
        })

        return () => unsubscribe()
    } ,[])
    const authInfo = {user, createPasswordBasedUser, userUpdated, LoginUser, userLogout}
    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;