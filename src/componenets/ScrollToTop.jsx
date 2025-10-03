import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname]); // Re-run the effect when the pathname changes

  return null; // This component doesn't render anything
}
