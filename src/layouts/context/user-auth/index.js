import { createContext, useContext, useEffect, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../authentication/firebase";
import PropTypes from "prop-types";

const userAuthContext = createContext();
export default function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  
  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {}, auth);
    recaptchaVerifier.render();
  }
  return (
    <userAuthContext.Provider
      value={{
        setUpRecaptha,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
UserAuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
