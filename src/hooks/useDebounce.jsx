import { useEffect, useState } from "react";

const useDebounce = (searchVal, delay) => {
  const [search, setSearch] = useState(searchVal);

  useEffect(() => {
    let id = setTimeout(() => {
      setSearch(searchVal);
    }, delay);
    return () => clearTimeout(id);
  }, [searchVal, delay]);

  return search;
};

export default useDebounce;
