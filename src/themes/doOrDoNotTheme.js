import { responsiveFontSizes,  Typography, } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';


let doOrDoNotTheme = createTheme();

 
doOrDoNotTheme.typography.h6 = {
    fontFamily:'Pacifico, cursive',
    color:'#015249',
    [doOrDoNotTheme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [doOrDoNotTheme.breakpoints.down('md')]: {
      fontSize: '.6rem',
    },
  };
  doOrDoNotTheme.typography.body1 = {
    fontFamily: 'Merriweather',
    color:"white",
    [doOrDoNotTheme.breakpoints.up('md')]: {
      fontSize: '.7rem',
    },
    [doOrDoNotTheme.breakpoints.down('md')]: {
      fontSize: '.5rem',
    },
  };
  doOrDoNotTheme.typography.body2 = {
    fontFamily: 'Merriweather',
    color:"white",
    [doOrDoNotTheme.breakpoints.up('md')]: {
      fontSize: '1.4rem',
    },
    [doOrDoNotTheme.breakpoints.down('md')]: {
      fontSize: '.6rem',
    },
  };
  doOrDoNotTheme.typography.h5 = {
    fontFamily:'Pacifico, cursive',
    color:"#015249",
    textAlign:"center",
    [doOrDoNotTheme.breakpoints.up('md')]: {
      fontSize: '1.6rem',
    },
    [doOrDoNotTheme.breakpoints.down('md')]: {
      fontSize: '1.0rem',
    },
  };
  doOrDoNotTheme.typography.h2 = {
    fontFamily:'Pacifico, cursive',
    color:"#015249",
    
    [doOrDoNotTheme.breakpoints.up('md')]: {
      fontSize: '1.6rem',
    },
    [doOrDoNotTheme.breakpoints.down('md')]: {
      fontSize: '.8rem',
    },
  };
  doOrDoNotTheme.typography.h1 = {
    fontFamily: 'Merriweather',
    color:"white",
    [doOrDoNotTheme.breakpoints.up('md')]: {
      fontSize: '5.8rem',
    },
    [doOrDoNotTheme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },}
    doOrDoNotTheme.typography.h3 = {
      fontFamily: 'Merriweather',
      color:"white",
      [doOrDoNotTheme.breakpoints.up('md')]: {
        fontSize: '1.7rem',
      },
      [doOrDoNotTheme.breakpoints.down('md')]: {
        fontSize: '.5rem',
      },}
export default doOrDoNotTheme;
