import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Autolines`;
  }, [title]);
};

export default useTitle;
