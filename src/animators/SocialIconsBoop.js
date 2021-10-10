import { animated, useSpring } from 'react-spring';
import React, { useEffect, useState } from "react";






const SocialIconsBoop = ({  x = 0,
  beforeColor= '#e2f1f8',
  afterColor="rgba(87,188,144,1)",
    y = 0,
    rotation = 0,
    scale = 1, 
   children }) => {
    const [isBooped, setIsBooped] = React.useState(false);
    const style = useSpring({
        display: 'inline-block',
        backfaceVisibility: 'hidden',
        transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
         
         color: isBooped?afterColor: beforeColor ,
          config: {
            mass: 1, tension: 280, friction: 60
            
          },
          
      });
    
    const trigger = () => {
      setIsBooped(true);
    };
    const triggerLeave = () =>{
        setIsBooped(false)
    }
    return (
      <animated.span onMouseEnter={trigger} onMouseLeave={triggerLeave} style={style}>
        {children}
      </animated.span>
    );
  };

export default SocialIconsBoop