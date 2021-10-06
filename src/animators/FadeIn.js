import { animated, useSpring } from "react-spring";
import React, { useEffect, useState } from "react";

function FadeIn({
    isVisible=false,
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1.0,
  timing = 150,
  children,
}) {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: {
      opacity: 1,
      
      transform: `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`,
      
    },
    from: {
      transform: `translate(0px, 0px)
           rotate(0deg)
           
           scale(1)`,
      opacity: 0,
      
    },
    reset: true,
    display: "inline-block",
    backfaceVisibility: "hidden",
    reverse: !isVisible,
    
    config: { mass: 1, tension: 280, friction: 60 },
    //   onRest: () => set(!flip),
  });

  return <animated.div style={props}>{children}</animated.div>;
}

export default FadeIn;
