// import * as React from 'react';
// import PropTypes from 'prop-types';
// import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
// import { styled } from '@mui/system';

// const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
//   const { children, ...other } = props;

//   return (
//     <svg width="150" height="50" {...other} ref={ref}>
//       <polygon points="0,50 0,0 150,0 150,50" className="bg" />
//       <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
//       <foreignObject x="0" y="0" width="150" height="50">
//         <div className="content">{children}</div>
//       </foreignObject>
//     </svg>
//   );
// });

// ButtonRoot.propTypes = {
//   children: PropTypes.node,
// };

// const CustomButtonRoot = styled(ButtonRoot)(
//   ({ theme }) => `
//   overflow: visible;
//   cursor: pointer;
//   borderRadius:50px!important;
  
//   --main-color: ${
//     theme.palette.mode === 'light' ? '#015249' : '#015249'
//   };
//   --hover-color: ${
//     theme.palette.mode === 'light'
//       ? 'rgba(25,118,210,0.04)'
//       : 'rgba(144,202,249,0.08)'
//   };
//   --active-color: ${
//     theme.palette.mode === 'light'
//       ? 'white'
//       : 'white'
//   };
 
//   & polygon {
//     fill: transparent;
//     transition: all 800ms ease;
//     pointer-events: none;
//   }
  
//   & .bg {
//     stroke: var(--main-color);
//     stroke-width: 0.5;
//     filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
//     fill: transparent;
//   }

//   & .borderEffect {
//     stroke: var(--main-color);
//     stroke-width: 2;
//     stroke-dasharray: 150 600;
//     stroke-dashoffset: 150;
//     fill: transparent;
//   }

//   &:hover,
//   &.${buttonUnstyledClasses.focusVisible} {
//     .borderEffect {
//       stroke-dashoffset: -600;
//     }

//     .bg {
//       fill: var(--hover-color);
//     }
//   }

//   &:focus,
//   &.${buttonUnstyledClasses.focusVisible} {
//     outline: none;
//   }

//   &.${buttonUnstyledClasses.active} { 
//     & .bg {
//       fill: var(--active-color);
//       transition: fill 300ms ease-out;
//     }
//   }

//   & foreignObject {
//     pointer-events: none;

//     & .content {
//       font-family:Merriweather;
//       font-size: 14px;
//       font-weight: 200;
//       height: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       color: var(--main-color);
//       text-transform: uppercase;
//     }

//     & svg {
//       margin: 0 5px;
//     }
//   }`,
// );

// const SvgButton = React.forwardRef(function SvgButton(props, ref) {
//   return <ButtonUnstyled size="small"  {...props} component={CustomButtonRoot} ref={ref} />;
// });

// export default function WorkButton() {
//   return <SvgButton size="small" onClick={()=>window.open('mailto:brownjs193@gmail.com?subject=Subject&body=Body%20goes%20here')}>Start</SvgButton>;
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  fill: "transparent",

  backgroundColor: 'transparent',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  
  backgroundColor: "transparent",
  '&:hover': {
    backgroundColor: 'rgba(150,230,253,0.07)',
  },
  fontFamily:"Oswald, sans-serif",
  color:"#77C9D4",
  fill: "transparent",
  textTransform: 'none',
 border:"solid #77C9D4 1px",
  

    
   
    [theme.breakpoints.up('md')]: {
      fontSize: '1.1rem',
      height:"50px",
  width:"130px",
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '.6rem',
      height:"30px",
  width:"70px",
    },
}));

export default function WorkButton() {
  return (
  
      <ColorButton onClick={()=>window.open('mailto:brownjs193@gmail.com?subject=Subject&body=Body%20goes%20here')}variant="contained">Start</ColorButton>
      
  );
}