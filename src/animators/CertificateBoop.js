import { animated, useSpring } from "react-spring";
import React, { useEffect, useState } from "react";

const CertificateBoop = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1.1,
  timing = 150,
  children,
}) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    cursor: "pointer",
    boxShadow: isBooped
      ? "0 4px 8px 0 rgba(0, 0, 0, 0.0), 0 0px 0px 0 rgba(0, 0, 0, 0.0u)"
      : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         
         scale(1)`,
    border: "1px solid",
    borderColor: "grey",

    config: { mass: 1, tension: 170, friction: 26 },
  });
  React.useEffect(() => {
    if (isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  const triggerLeave = () => {
    setIsBooped(false);
  };
  return (
    <animated.span
      onMouseEnter={trigger}
      onMouseLeave={triggerLeave}
      style={style}
    >
      {children}
    </animated.span>
  );
};

export default CertificateBoop;
