import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const CheckAuth = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [UserData, setUserData] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if (response) {
        setUserData(response);
        setisAuthenticated(true);
      } else {
        setisAuthenticated(false);
      }
    });
  }, []);

  return { isAuthenticated, UserData };
};
export default CheckAuth;
