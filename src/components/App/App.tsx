import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/globalStyle";
import Main from "../Main";
import store from "../../store";
import Theme from "../../styles/globalVariables";

const App: React.FC = (): ReactElement<any> => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyle />
          <Main />
        </>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
