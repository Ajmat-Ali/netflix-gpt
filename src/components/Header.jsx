import { useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constant";
import { toggleSearch } from "../redux/gptSlice";
import { selectLang } from "../utils/language";
import { toggleLanguage } from "../redux/languageSlice";

const Header = () => {
  const authData = useSelector((store) => store.auth);
  const toggleSearchValue = useSelector((store) => store.gpt.toggleSearchValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("Something went wrong while signout");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL, phoneNumber } = user;
        dispatch(addUser({ displayName, email, uid, photoURL, phoneNumber }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const handleToggleGptSearch = () => {
    dispatch(toggleSearch());
  };

  const handleChangeLanguage = (e) => {
    dispatch(toggleLanguage(e.target.value));
  };

  return (
    <div className=" bg-gradient-to-b from-black w-full flex justify-between">
      <img
        className="w-50 px-8 py-2 bg-gradient-to-b from-black"
        src={NETFLIX_LOGO}
        alt="Header-logo-netflix"
      />
      {authData && (
        <div className="flex p-4 text-white gap-x-10 items-center">
          <div>
            {toggleSearchValue && (
              <select
                onChange={handleChangeLanguage}
                className="bg-black/50 py-2 px-4 rounded-lg cursor-pointer border"
              >
                {selectLang.map((lang) => (
                  <option key={lang.text} value={lang.value}>
                    {lang.text}
                  </option>
                ))}
              </select>
            )}
          </div>
          <button
            onClick={handleToggleGptSearch}
            className="text-white bg-purple-500 py-2 px-4 rounded-lg cursor-pointer"
          >
            {!toggleSearchValue ? "GPT Search" : "Home Page"}
          </button>

          <img
            src={authData?.photoURL}
            alt={authData?.displayName}
            className="w-8 h-8"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-400 px-3 py-1 rounded-lg cursor-pointer"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
