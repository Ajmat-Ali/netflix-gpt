import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitForm = () => {
    let validateMessage = null;

    if (isSignin) {
      // ------------------------------------------------ Sign In Functionality ----------
      validateMessage = checkValidate(
        null,
        email.current.value,
        password.current.value,
      );
      setErrorMessage(validateMessage);
      if (validateMessage) return;

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("SignIn", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "--" + errorMessage);
        });
    } else {
      // ------------------------------------------------ Sign Up Functionality ----------
      validateMessage = checkValidate(
        name.current.value,
        email.current.value,
        password.current.value,
      );
      setErrorMessage(validateMessage);
      if (validateMessage) return;

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "---" + errorMessage);
        });
    }
  };

  const handleToggleSignin = () => {
    setIsSignin(!isSignin);
  };
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_large.jpg"
        alt="Background Image"
        className="w-12/12 absolute"
      />{" "}
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className=" absolute mt-34 mx-auto left-0 right-0 bg-black text-white w-3/12 p-12 m-2 flex flex-col gap-y-5 bg-black/95"
      >
        <h1 className="text-xl">{isSignin ? "Sign In" : "Sign Up"}</h1>
        {!isSignin && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" p-2 rounded-sm bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className=" p-2 rounded-sm bg-gray-700"
        />
        <input
          ref={password}
          type="text"
          placeholder="password"
          className="p-2 rounded-sm bg-gray-700"
        />
        <span className="text-red-600 text-sm text-center font-bold">
          {errorMessage && errorMessage}
        </span>
        <button
          onClick={handleSubmitForm}
          className=" rounded-lg bg-red-600 px-4 py-2 cursor-pointer"
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer" onClick={handleToggleSignin}>
          {isSignin
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
