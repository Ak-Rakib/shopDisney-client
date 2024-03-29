import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `shopDisney | ${title}`;
  }, [title]);
};

export default useTitle;
