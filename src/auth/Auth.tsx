import { auth } from "@/firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
// const auth = getAuth();
const provider = new GoogleAuthProvider();
export const LogInWithGoogle = async () => {
  await signInWithPopup(auth, provider).then((response) => {
    const user = response.user;
    console.log(user);
  });
};

export const authCheck = () => {
  onAuthStateChanged(auth, (response) => {
    console.log(response);
  });
};
export default LogInWithGoogle;
