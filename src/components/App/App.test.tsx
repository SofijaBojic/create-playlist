import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from "styled-components";
import 'jest-styled-components';
import App from './App';
import Theme from "../../styles/globalVariables";


describe('Render app component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    ) as any;
    expect(container.firstChild).toBeTruthy();
  });
});
