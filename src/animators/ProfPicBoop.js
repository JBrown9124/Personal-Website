import { animated, useSpring } from 'react-spring';
import React, { useEffect, useState } from "react";






const ProfPicBoop = ({  x = 0,
    y = 0,
    rotation = 0,
    scale = 1, 
     children }) => {
    const [isBooped, setIsBooped] = React.useState(false);
    const style = useSpring({
        display: 'inline-block',
        backfaceVisibility: 'hidden',
        filter: isBooped? 'sepia(0%) hue-rotate(0deg) saturate(100%)':'sepia(80%) hue-rotate(200deg) saturate(125%)',
        boxShadow: isBooped? '0 4px 8px 0 rgba(0, 0, 0, 0.0), 0 0px 0px 0 rgba(0, 0, 0, 0.0u)':'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        transform: isBooped
        
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         
         scale(1)`,
         
         
         
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

export default ProfPicBoop