import React, { createContext, useState } from 'react'; 
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"; 
import app from '../firebase/firebase.config';
  export const AuthContext = createContext(null)
  const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const createUser =(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
       return signOut(auth)
    }
    const authInfo ={user,createUser,logIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;