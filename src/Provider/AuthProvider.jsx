import React, { createContext, useEffect, useState } from 'react'; 
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"; 
import app from '../firebase/firebase.config';
  export const AuthContext = createContext(null)
  const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const createUser =(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
       return signOut(auth)
    } 
    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)

        })
        return ()=>{
            return unsubscrib()
        }

    },[])
    const authInfo ={user,createUser,logIn,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;