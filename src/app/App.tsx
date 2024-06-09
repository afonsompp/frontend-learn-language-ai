import React from 'react';
import {AppRouter} from "./routes";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {CssBaseline} from "@mui/material";

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
     <div>
       <ThemeProvider theme={darkTheme}>
         <CssBaseline />
           <AppRouter/>

       </ThemeProvider>
     </div>
  );
}

export default App;
