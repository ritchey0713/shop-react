//div collection-preview
// h1 title
// div preview
//

import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const StyledTitle = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const StyledPreview = styled.div`
  display: flex;
  justify-content: space-between;
`;
