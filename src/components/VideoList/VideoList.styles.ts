import styled from "styled-components";

export const VideoListStyle: any = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
  }

  @media (min-width: ${props => props.theme.breakpoints.lgMin}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
  }
`;

export const VideoItemStyle: any = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const VideoItemImgStyle: any = styled.img`
  width: 100%;
  border: ${(props: any) =>
      props.isActive && `1px solid ${props.theme.background.color.secondary}`}
    @media (hover: hover) {
    :hover {
      border: 1px solid ${props => props.theme.background.color.secondary};
    }
  }
`;

export const VideoItemTitleStyle: any = styled.div`
  width: 100%;
  padding: 5px 0;
  text-align: center;
`;
