import { useState } from "react";
import AuthDEtails from "./AuthDEtails";
import OptionalAuth from "./OptionalAuth";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Authentication() {
  const [newLogInForm, setNewLogInForm] = useState(false)
  return (
    <div style={{textAlign: 'center'}}>
      {
        <>
          <input 
            type="checkbox" 
            name="displayUserForm"
            onClick={() => setNewLogInForm(!newLogInForm)}
            />
              <label 
                htmlFor="displayUserForm">
                  {newLogInForm ? 'Already have an Account' : 'Create New Account'}
              </label>
        </>
      }
      {
        newLogInForm ? <SignUp /> : <SignIn />
      }
      <br />
      <OptionalAuth/>
      <AuthDEtails />
    </div>
  );
};

export default Authentication;