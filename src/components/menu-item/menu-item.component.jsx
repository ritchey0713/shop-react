import React from "react"
import { withRouter } from 'react-router-dom'
import { StyledContent, StyledImg, StyledMenuItem, StyledSubtitle, StyledTitle } from "./menu-item.styles"
import "./menu-item.styles.scss"

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <StyledMenuItem className={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <StyledImg imageUrl={imageUrl} className="background-image"/>
    <StyledContent>
      <StyledTitle>{ title.toUpperCase() }</StyledTitle>
      <StyledSubtitle> SHOP NOW </StyledSubtitle>
    </StyledContent>
  </StyledMenuItem>
)

//gives access to history
export default withRouter(MenuItem)