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

let useLogin = () => {
  let dispatch = useDispatch();
  let login = ({ login, password }) => {
    signInWithEmailAndPassword(
      auth,
      login.endsWith(".tu") ? login : `${login}@uzum.adm`,
      password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(loginUser(user));
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
    }
  };

  return { login, registor };
};
export default useLogin;
