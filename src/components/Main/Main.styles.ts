import styled from 'styled-components';

export const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  &.fixed {
    position: fixed;
  }
`;

export const MainContentStyle = styled.div`
  flex: 1;
`;