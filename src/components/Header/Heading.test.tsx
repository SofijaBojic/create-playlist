import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from "styled-components";
import 'jest-styled-components';
import Header from './Header';
import Theme from "../../styles/globalVariables";


describe('Render Header component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Header />
      </ThemeProvider>
    ) as any;
    const header_title: HTMLElement = getByTestId("header_title");
    expect(header_title).toBeTruthy();
  });
});
