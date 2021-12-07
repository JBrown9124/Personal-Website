import { animated, useSpring } from "react-spring";
import React from "react";

const CardBoop = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1.01,
  timing = 150,
  children,
}) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    // boxShadow: isBooped?"#26418f  0px 0px 0px 2px inset, #26418f  10px -10px 0px -3px, #77C9D4 10px -10px":
    // "#26418f  0px 0px 0px 0px inset, #26418f 0px 0px 0px 0px, #77C9D4 0px 0px",
    boxShadow: isBooped
      ? "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      : "rgba(0, 0, 0, 0.0) 0px 0px 0px",
    // boxShadow:isBooped?"rgba(0, 0, 0, 0.25) 0px 25px 50px -12px":"rgba(0, 0, 0, 0.0) 0px 0px 0px 0px",
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         
         scale(1)`,
    borderRadius: "15px",
    
    config: { mass: .5, tension: 399, friction: 26 },
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

export default CardBoop;
