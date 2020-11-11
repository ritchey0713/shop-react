import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";
import { StyledDirectory } from "./directory.styles";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <StyledDirectory>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </StyledDirectory>
  );
};

// this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
//   <MenuItem key={ id } title={ title } imageUrl={ imageUrl } size={ size } linkUrl={linkUrl} />
// ))

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
