import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = ` ${title} shopDisney |`;
  }, [title]);
};

export default useTitle;
