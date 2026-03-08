import React from "react";

const ResponsiveHeader = () => {
  return (
    <div className="flex items-center max-sm:gap-x-2 max-sm:flex-col max-sm:absolute right-0 border border-2 border-green-500 ">
      <div className="max-sm:block hidden">
        <button onClick={handleOpenNavbar} className="cursor-pointer">
          X
        </button>
      </div>
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
  );
};

export default ResponsiveHeader;
