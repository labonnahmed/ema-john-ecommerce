import React, {useContext, useEffect} from 'react';
import {auth} from '../../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { userContext } from '../../App';



const AuthDEtails = () => {
    const [authUser, setAuthUser] =useContext(userContext);

    useEffect(()=> {
        const listen= onAuthStateChanged(auth, (user) => {
            if (user) {
              setAuthUser(user);
            } else {
              setAuthUser(null);
            }
        })
        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                setAuthUser(null)
            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <div>
            {
               authUser ? 
                <>
                    <p>{`signed In as ${authUser.email}`}</p>
                    <button onClick={userSignOut}>Sign Out</button>
                </> : 
                <p></p>
            }
        </div>
    );
};

export default AuthDEtails;