import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider() 
    const githubProvider = new GithubAuthProvider()

    const signUpUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    } 
    const loginUser = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    const forgatPassword = (email)=>{
        return sendPasswordResetEmail(auth, email)
    } 
    const signOutUser = () =>{
       return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
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
        googleLogin,
        githubLogin,
        forgatPassword,
        signOutUser,

    }
  return <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
