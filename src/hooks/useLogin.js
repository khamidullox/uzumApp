import {
  createUserWithEmailAndPassword,
  signInAnonymously,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfing";
import { useDispatch } from "react-redux";
import { loginUser } from "../slices/userSlice";
import toast from "react-hot-toast";
import { useState } from "react";

let useLogin = () => {
  let dispatch = useDispatch();
  let [isPending, setIsPending] = useState(false);
  let login = ({ login, password }) => {
    setIsPending(true);
    signInWithEmailAndPassword(
      auth,
      login.endsWith(".tu") ? login : `${login}@uzum.adm`,
      password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(`Добро пожаловать в ${user.displayName}`);
        dispatch(loginUser(user));
        setIsPending(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, {
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            background: "#555",
            color: "white",
          },
        });
        setIsPending(false);
      });
  };
  let registor = async ({ newLogin, password, displayName }) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        newLogin.endsWith(".tu") ? newLogin : `${newLogin}@uzum.adm`,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName,
      });
      let user = userCredential.user;
      toast.success(`Добро пожаловать в ${user.displayName}`);

      dispatch(loginUser(user));
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage, {
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          background: "#555",
          color: "white",
        },
      });
      setIsPending(false);
    }
  };

  return { login, registor, isPending };
};
export default useLogin;
