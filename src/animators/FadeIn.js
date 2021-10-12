import { animated, useSpring } from "react-spring";
import React, { useEffect, useState } from "react";

function FadeIn({
  isVisible = false,
  delay = 0,
  x = 0,
  y = 0,
  fromY=0,
  fromX=0,
  rotation = 0,
  scale = 1.0,
  fromScale=1,
  children,
}) {
  const [flip, set] = useState(false);
  const props = useSpring({
    
    from: {
      transform: `translate(${fromX}px, ${fromY}px)
      rotate(0deg)
      
      scale(${fromScale})`,
      opacity: 0,
    },

    to: {
      transform: `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`,
      opacity: 1,
    },
   cancel:isVisible===false,
    delay: delay,

    //   opacity: 0,

    // },

    config: 		{ mass: 1, tension: 170, friction: 26 },
    //   onRest: () => set(!flip),
  });

  return <animated.div style={props}>{children}</animated.div>;
}

export default FadeIn;
