import React, { useState, useEffect } from "react";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

export const Private = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkLogin = async () => {

      const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {

          const UserData = {
            uid: user.uid,
            email: user.email,
          };

          localStorage.setItem("@dataUser", JSON.stringify(UserData));

          setLoading(false);
          setSigned(true);

        } else {
          
          setLoading(false);
          setSigned(false);
        }
      });
    };

    checkLogin();
  }, []);

  if (!loading) {
    return signed ? children : <Navigate to="/" />
  }

  
};
