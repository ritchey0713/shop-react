// cartdrop down div 
//cart items div
//message span

import styled from 'styled-components';

export const StyledCartDropDown = styled.div`  
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  button {
    margin-top: auto;
  }
  `

export const StyledCartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const StyledMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`