import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { darkTheme } from "./styles/themes/dark";

import { useState } from "react";
import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom'


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>


      <BrowserRouter> 
          <Router />
      </BrowserRouter>
     

    </ThemeProvider>
  );
}
