import { useContext, createContext, useEffect, useState } from 'react';
import {
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const [pre, setPre] = useState();

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ logOut, user, pre, setPre }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};