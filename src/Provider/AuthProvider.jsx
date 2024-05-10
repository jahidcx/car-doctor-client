import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.init";
import axios from "axios";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login 
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout 
    const createLogout = () => {
        setLoading(true);
        return signOut(auth)

    }

    // spy
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }; 
            setUser(currentUser);

            // get token
            if (currentUser) {

                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }

            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        createLogout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;