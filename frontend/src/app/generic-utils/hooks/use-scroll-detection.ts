import { useState, useEffect } from "react";

const useScrollDirection = (): boolean => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > scrollPosition) {
        setScrollDirection(false);
      } else {
        setScrollDirection(true);
      }
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return scrollDirection;
};

export default useScrollDirection;
