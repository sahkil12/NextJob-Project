import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const signUpUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    } 
    const loginUser = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log(currentUser);
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const userData = {
        signUpUser, 
        loginUser,
        user, 
        setUser,
    }
  return <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
