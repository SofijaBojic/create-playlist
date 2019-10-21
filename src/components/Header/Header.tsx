import React from "react";
import { HeaderContentStyle, HeaderWrapperStyle } from "./Header.style";
import { Heading1 } from "../../components/Text/Text.style";

export const Header = () => (
  <HeaderWrapperStyle data-testid="header">
    <HeaderContentStyle>
      <Heading1 align="center" data-testid="header_title">
        CREATE AND PLAY YOUR PLAYLIST - JWPlayer
      </Heading1>
    </HeaderContentStyle>
  </HeaderWrapperStyle>
);

export default Header;
