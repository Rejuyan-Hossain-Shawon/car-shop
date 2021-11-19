import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/Firebase.init";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// firebase initialize
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // firebase observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {

                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe
    }, [])

    // sign in with google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                setUser(result.user);
                setAuthError("");
                const destination = location?.state?.from || "/";
                history.replace(destination);
                alert("login in google successfully")

            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // logout
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    //  register new user 
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in

                setAuthError('');
                alert('register success')

                history.replace("/");
            })
            .catch((error) => {


                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));

    }

    // login user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('');
                const destination = location?.state?.from || "/";
                history.replace(destination);
                // ...
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        authError,
        isLoading,
        signInWithGoogle,
        logout,
        registerUser,
        loginUser

    }


}

export default useFirebase;