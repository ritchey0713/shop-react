import styled from "styled-components";

// collection page div
//h2 title
//items div

export const StyledCollection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const StyledItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  & > div {
    margin-bottom: 30px;
  }
`;
