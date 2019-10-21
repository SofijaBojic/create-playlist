import styled from "styled-components";

export const Heading1: any = styled.h1`
  font-size: ${props => props.theme.typography.size.heading.large.sm};
  line-height: 32px;
  font-weight: 700;
  color: ${props => props.theme.typography.color.primary};
  text-align: "left";

  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    font-size: ${props => props.theme.typography.size.heading.large.md};
    line-height: 40px;
  }
`;

export const Heading3: any = styled.h3`
  font-size: ${props => props.theme.typography.size.heading.medium.sm};
  line-height: initial;
  font-weight: 700;
  color: ${(props: ITextProps) => props.theme.typography.color.primary};
  text-align: "left";

  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    line-height: 24px;
  }
`;

export const BodyText: any = styled.div`
  font-size: ${props => props.theme.typography.size.body.sm};
  line-height: 22px;
  font-weight: 400;
  color: ${props => props.theme.typography.color.primary};
  text-align: "left";

  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    font-size: ${props => props.theme.typography.size.body.md};
    line-height: 24px;
  }
`;
