import React from "react";
import {
  RefObject,
  useState,
  useEffect,
  FC,
  useRef,
  PropsWithChildren,
} from "react";

function useElementOnScreen(
  ref: RefObject<Element>,
  rootMargin = "0px",
) {
  const [isInterSecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isInterSecting;
};

const AnimateIn: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 2 rem",
        transition: "400ms ease-in-out"
      }}>
      {children}
    </div>
  );
};

export default AnimateIn