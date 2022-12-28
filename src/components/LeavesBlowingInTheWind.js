import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import leaves from "../img/leavestransparent.png";

const LeavesBlowingInTheWind = () => {
  const leavesRef = useRef(null);

  const { x, y, rotate } = useSpring({
    from: { x: 0, y: 0, rotate: 0 },
    to: { x: 100, y: 100, rotate: 360 },
    config: { mass: 10, tension: 500, friction: 80 },
    reset: true,
    reverse: true,
    immediate: (key) => key === "rotate",
  });

  useEffect(() => {
    leavesRef.current.addEventListener("mouseenter", () => {
      leavesRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
    });
  }, [x, y, rotate]);

  return (
    <animated.div className="leaves" ref={leavesRef}>
      {<img src={leaves} alt="" />}
    </animated.div>
  );
};

export default LeavesBlowingInTheWind;
