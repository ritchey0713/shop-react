//checkout item div
// img contain div 
//img 
// spans for name price quantity 
//arrow div
//remove button 

import styled from 'styled-components';

export const StyledItemDiv = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`
export const StyledImgWrapper = styled.div`
  width: 23%;
  padding-right: 15px;
`

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`

export const StyledSpan = styled.span`
  width: 23%;
`

export const StyledQuantitySpan = styled.span`
  padding-left: 20px;
  display: flex;
  width: 23%;
`

export const StyledArrow = styled.div`
  cursor: pointer;
`

export const StyledValue = styled.span`
  margin: 0 10px;
`

export const StyledButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`