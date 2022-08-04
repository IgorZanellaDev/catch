import React, { FunctionComponent } from "react";
import { GlobalStyle } from "ui/theme/global.style";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "ui/theme/theme";
import UI from "ui";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UI />
    </ThemeProvider>
  );
};

export default App;
