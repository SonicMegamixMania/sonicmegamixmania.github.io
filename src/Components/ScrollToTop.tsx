import { useLayoutEffect, type ReactNode } from "react";
import { useLocation } from "react-router";

interface ScrollToTopProps {
  children: ReactNode;
}

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const location = useLocation();

  // useLayoutEffect is preferred over useEffect for less visual jank
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

export default ScrollToTop;