import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const [scrollPos, setScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const curScrollPos = window.pageYOffset;
      const visible = curScrollPos > 0 ? curScrollPos < scrollPos : true;

      setScrollPos(curScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]); // Remove scrollPos from dependencies

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => setVisible(true), 1000); // Show navbar after 1 second
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  return { visible };
}
