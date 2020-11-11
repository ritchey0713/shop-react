import styled from 'styled-components';
//check out page div 
//check out header div
//div header block 
//div total 
//test warning div


export const StyledCheckout = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
`

export const StyledHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`

export const StyledHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`

export const StyledTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`

export const StyledTestWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-bottom: 20px;
  font-size: 26px;
  color: red;
`