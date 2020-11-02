import styled, { css } from 'styled-components';

// group div 
// from input
//label input

const mainColor = "black"
const subColor = "grey"

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`

export const StyledGroup = styled.div`
  position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`

export const StyledFormInput = styled.input`
  background: none;
  background-color: white;
  color: ${mainColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabel}
  }
`

export const StyledLabel = styled.div`
 color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabel}
  }
`