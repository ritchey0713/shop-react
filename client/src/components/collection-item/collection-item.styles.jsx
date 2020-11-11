// coll item div
//img div
//footer div
//span name
//span price

import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const StyledCollectionItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-top: 25px;
  &:hover {
    .image {
      opacity: 0.75;
    }
    button {
      opacity: 0.75;
      display: flex;
    }
  }
`;

export const StyledImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  position: absolute;
  top: 255px;
  display: none;
`;
export const StyledFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const StyledName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const StyledPrice = styled.span`
  width: 10%;
  text-align: right;
`;
