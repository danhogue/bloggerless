import React from "react"
import SideNavBar from "../../components/SideNavBar"
import "./CoreLayout.scss"
import "../../styles/core.scss"

export const CoreLayout = ({ children }) => (
  <div id="core-layout">
    <SideNavBar />
      <div className="page-wrapper">
        {children}
      </div>
  </div>
);

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
};

export default CoreLayout
