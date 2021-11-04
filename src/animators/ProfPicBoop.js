import { animated, useSpring } from "react-spring";
import React from "react";

const ProfPicBoop = ({ x = 0, y = 0, rotation = 0, scale = 1.00, children }) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    filter: isBooped
    ? "sepia(0%) hue-rotate(0deg) saturate(100%)"
    : "sepia(80%) hue-rotate(200deg) saturate(135%)",
      // boxShadow: isBooped?"rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px":
      // "rgba(0, 0, 0, 0.00) 0px 0px 0px, rgba(0, 0, 0, 0.00) 0px 0px 0px, rgba(0, 0, 0, 0.00) 0px 0px 0px, rgba(0, 0, 0, 0.00) 0px 0px 0px, rgba(0, 0, 0, 0.00) 0px 0px 0px, rgba(0, 0, 0, 0.00) 0px 0px 0px",
  //  boxShadow:isBooped?"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset":
  //  "rgba(0, 0, 0, 0.0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.0) 0px 0px 0px 0px inset"
  //  ,
   boxShadow:isBooped?"rgba(0, 0, 0, 0.25) 0px 25px 50px -12px":"rgba(0, 0, 0, 0.0) 0px 0px 0px 0px",
      transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         
         scale(1)`,

    config: { mass: 1, tension: 170, friction: 26 },
  });

  const trigger = () => {
    setIsBooped(true);
  };
  const triggerLeave = () => {
    setIsBooped(false);
  };
  return (
    <animated.div
      onMouseEnter={trigger}
      onMouseLeave={triggerLeave}
      style={style}
    >
      {children}
    </animated.div>
  );
};

export default ProfPicBoop;
