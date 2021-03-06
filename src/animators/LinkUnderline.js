import { animated, useSpring } from "react-spring";
import React from "react";

const LinkUnderline = ({
  children,
  weight = 1,
  x = 0,
  background = "rgba(115,199,204,1)",
  width = "65%",
  top = "75%",
  y = 0,
  rotation = 0,
  left=16,

  scale = 1,
  
}) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    transform: isBooped
      ? `translate(${x}px, ${y}px)
             rotate(${rotation}deg)
             scale(${scale})`
      : `translate(0px, 0px)
             rotate(0deg)
             scale(1)`,
    position: "absolute",
    top: top,
    left: left,
    width: isBooped ? width : "0%",
    height: `${weight}px`,
    background: background,

    config: {
      mass: 1,
      tension: 170,
      friction: 26,
    },
  });
  const style2 = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isBooped
      ? `translate(${x}px, ${y}px)
             rotate(${rotation}deg)
             scale(${scale})`
      : `translate(0px, 0px)
             rotate(0deg)
             scale(1)`,

    config: {
      mass: 1,
      tension: 280,
      friction: 60,
    },
  });


  const trigger = () => {
    setIsBooped(true);
  };
  const triggerLeave = () => {
    setIsBooped(false);
  };

  return (
    <div
      onMouseEnter={trigger}
      onMouseLeave={triggerLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      <animated.div style={style} />
      <animated.div
        onMouseEnter={trigger}
        onMouseLeave={triggerLeave}
        style={style2}
      >
        {children}
      </animated.div>
    </div>
  );
};

export default LinkUnderline;
