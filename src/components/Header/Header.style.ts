import styled from "styled-components";

export const HeaderWrapperStyle: any = styled.div`
  width: 100%;
  text-align: center;
  display: block;
  }

  @media (min-width: ${(props: any) => props.theme.breakpoints.mdMin}) {
    position: ${(props: any) =>
      props.isTransparent ? "absolute" : "relative"};
    background-color:  transparent;
  }

  @media (min-width: ${(props: any) => props.theme.breakpoints.xlMin}) {
    display: flex;
    justify-content: center;
  }
`;

export const HeaderContentStyle: any = styled.div`
  display: block;
  text-align: center;
  padding: 20px;
`;
