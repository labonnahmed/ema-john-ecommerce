import {auth} from '../../firebase';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider  } from "firebase/auth"

const OptionalAuth = () => {
    const handleOptionalAuth = (provider) => {
        signInWithPopup(auth, provider)
        .then((res) => {
            console.log(res)  
        })
        .catch((err) => {
            console.log(err);
            alert(err);
        })
    };
    return (
        <>
            <h4>You may Continue with</h4>
            <button onClick={() => handleOptionalAuth(new GoogleAuthProvider())}>Google</button>
            <button onClick={() => handleOptionalAuth(new FacebookAuthProvider())}>Facebook</button>
        </>
    );
};

export default OptionalAuth;