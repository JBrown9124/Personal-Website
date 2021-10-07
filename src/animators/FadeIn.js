import { animated, useSpring } from "react-spring";
import React, { useEffect, useState } from "react";

function FadeIn({
    isVisible=false,
    delay=0,
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1.0,
  timing = 150,
  children,
}) {
  const [flip, set] = useState(false);
  const props = useSpring({
    
      opacity: isVisible? 1:0,
      
      transform: isVisible?`translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`: `translate(0px, 0px)
         rotate(0deg)
         
         scale(1)`,
      
    
    
    //   opacity: 0,
      
    // },
    
    display: "inline-block",
    backfaceVisibility: "hidden",
   
    delay: {delay},
    config: { mass: 1, tension: 280, friction: 60 },
    //   onRest: () => set(!flip),

    
  });
  useEffect(() => {
    if (isVisible) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isVisible, timing]);

  return <animated.span style={props}>{children}</animated.span>;
}

export default FadeIn;
