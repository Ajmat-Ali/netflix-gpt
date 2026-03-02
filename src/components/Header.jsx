import { useSelector } from "react-redux";
import { removeUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authData = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-full flex justify-between">
      <img
        className="w-50 px-8 py-2 bg-gradient-to-b from-black"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Header-logo-netflix"
      />
      {authData && (
        <div className="flex p-4 text-white gap-x-10 items-center">
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
