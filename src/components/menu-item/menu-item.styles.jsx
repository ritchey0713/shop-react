import styled from 'styled-components';
//menu item div 
//background image div
//content div
//h1 title
//subtitle span 
//

export const StyledMenuItem = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.3);
      transition: transform 6s cubic-bezier(0.3, 0.55, 0.55, 1.25);
    }

  }
  &.large {
    height: 385px;
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`

export const StyledImg = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`

export const StyledContent = styled.div`
  opacity: 0.9;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`

export const StyledTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`

export const StyledSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`

