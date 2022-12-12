import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleFieldValid = (e) => {
        let isFeildValid;
        const regexForEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        const regexForPass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(e.target.name === 'email'){
            isFeildValid = regexForEmail.test(e.target.value);
            console.log(isFeildValid)
        }
        if(e.target.name === 'password') {
            isFeildValid = regexForPass.test(e.target.value);
            console.log(isFeildValid)
        }
        if(isFeildValid){
            if(e.target.name === 'email'){
                setEmail(e.target.value);
            }
            if(e.target.name === 'password'){
                setPassword(e.target.value);
            }
        }
    };

    const signUp =(e) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });
        e.preventDefault();
    }

    return (
        <div className='sign-in-container'>
            <form action="" onSubmit={signUp}>
                <h1>Create Account</h1>
                <input 
                    type='email' 
                    name='email'
                    placeholder='Enter your Email' 
                    required 
                        onBlur={handleFieldValid} />
                <input 
                    type='password' 
                    name='password'
                    placeholder='Enter your Password' 
                    required 
                        onBlur={handleFieldValid} />
                <input type='submit' value='Sign UP'/>
            </form>
        </div>
    );
};

export default SignUp;