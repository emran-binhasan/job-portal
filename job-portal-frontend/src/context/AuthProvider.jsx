import { useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../configs/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { data } from "react-router-dom";

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const[loading,setLoading] = useState(false);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateNewUser = (userData) => {
        return updateProfile(auth.currentUser, userData)
    }

    const authInfo = {
        user,setUser,loading,setLoading,createUser,loginUser,updateNewUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;