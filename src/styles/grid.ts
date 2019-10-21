import styled from 'styled-components';

export interface GridProps {
  columns?: number;
  columnSize?: string;
  rows?: number;
  rowSize?: string;
  gridLgColumnGap?: string;
  gridMdColumnGap?: string;
  gridSmColumnGap?: string;
  gridLgRowGap?: string;
  gridMdRowGap?: string;
  gridSmRowGap?: string;
}

export const Grid = styled.div`
  position: relative;
  display: grid;
  min-height: 100%;
  max-width: 1760px;
  margin: auto 16px;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: ${(props: GridProps) => (props.gridSmColumnGap ? props.gridSmColumnGap : '16px')};
  grid-row-gap: ${(props: GridProps) => (props.gridSmRowGap ? props.gridSmRowGap : '0')};
  grid-template-rows: repeat(
    ${(props: GridProps) => (props.rows ? props.rows : '1')},
    ${(props: GridProps) => (props.rowSize ? props.rowSize : '1fr')}
  );

  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    margin: auto 24px;
    grid-template-columns: repeat(
      ${(props: GridProps) => (props.columns ? props.columns : '12')},
      ${(props: GridProps) => (props.columnSize ? props.columnSize : '1fr')}
    );
    grid-column-gap: ${(props: GridProps) => (props.gridMdColumnGap ? props.gridMdColumnGap : '16px')};
    grid-row-gap: ${(props: GridProps) => (props.gridMdRowGap ? props.gridMdRowGap : '0')};
  }

  @media (min-width: ${props => props.theme.breakpoints.lgMin}) {
    grid-column-gap: ${(props: GridProps) => (props.gridLgColumnGap ? props.gridLgColumnGap : '24px')};
    grid-template-columns: repeat(
      ${(props: GridProps) => (props.columns ? props.columns : '12')},
      ${(props: GridProps) => (props.columnSize ? props.columnSize : '1fr')}
    );
    grid-row-gap: ${(props: GridProps) => (props.gridLgRowGap ? props.gridLgRowGap : '0')};
    grid-template-rows: repeat(
      ${(props: GridProps) => (props.rows ? props.rows : '1')},
      ${(props: GridProps) => (props.rowSize ? props.rowSize : '1fr')}
    );
  }

  @media (min-width: 1461px) {
    margin: auto 80px;
  }

  @media (min-width: ${props => props.theme.breakpoints.xlMin}) {
    margin: auto;
  }
`;

export interface GridElementProps {
  lgColumn: string;
  mdColumn?: string;
  smColumn?: string;
  rowSize?: string;
}

export const GridElement = styled.div`
  width: 100%;
  grid-row: ${(props: GridElementProps) => props.rowSize};
  grid-column: ${(props: GridElementProps) => props.smColumn};

  ${Grid} {
    margin: 0;
  }

  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    grid-column: ${(props: GridElementProps) => props.mdColumn};
  }

  @media (min-width: ${props => props.theme.breakpoints.lgMin}) {
    grid-column: ${(props: GridElementProps) => props.lgColumn};
  }
`;
