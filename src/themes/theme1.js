import { responsiveFontSizes,  Typography, } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';


let theme = createTheme();

 
  theme.typography.h6 = {
    fontFamily:'Pacifico, cursive',
    color:'#015249',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '.6rem',
    },
  };
  theme.typography.body1 = {
    fontFamily: 'Merriweather',
    color:"white",
    [theme.breakpoints.up('md')]: {
      fontSize: '.7rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '.5rem',
    },
  };
  theme.typography.body2 = {
    fontFamily: 'Merriweather',
    color:"white",
    [theme.breakpoints.up('md')]: {
      fontSize: '1.0rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '.6rem',
    },
  };
  theme.typography.h5 = {
    fontFamily:'Pacifico, cursive',
    color:"#015249",
    textAlign:"center",
    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.0rem',
    },
  };
  theme.typography.h2 = {
    fontFamily:'Pacifico, cursive',
    color:"#015249",
    
    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '.9rem',
    },
  };
  theme.typography.h1 = {
    fontFamily: 'Merriweather',
    color:"white",
    [theme.breakpoints.up('md')]: {
      fontSize: '5.8rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },}
    theme.typography.h3 = {
      fontFamily: 'Merriweather',
      color:"white",
      [theme.breakpoints.up('md')]: {
        fontSize: '1.7rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '.6rem',
      },}
      theme.typography.h4 = {
        fontFamily: 'Merriweather, serif',
        color:"white",
        [theme.breakpoints.up('md')]: {
          fontSize: '2.3rem',
        },
        [theme.breakpoints.down('md')]: {
          fontSize: '1.5rem',
        },}
export default theme;
