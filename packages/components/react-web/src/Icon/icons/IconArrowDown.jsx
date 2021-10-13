// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import React from "react";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import iconStyles from "../Icon.styles";

function IconArrowDown(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={props.fill}
      className="gds-icon"
      css={iconStyles}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 28a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v22a1 1 0 0 1-1 1z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.293 17.293a1 1 0 0 1 1.414 0L16 25.586l8.293-8.293a1 1 0 0 1 1.414 1.414l-9 9a1 1 0 0 1-1.414 0l-9-9a1 1 0 0 1 0-1.414z"
      />
    </svg>
  );
}
export default IconArrowDown;

IconArrowDown.propTypes = {
  /**
   * A CSS fill color.
   */
  fill: PropTypes.string,
  /**
   * Any valid CSS width value.
   */
  width: PropTypes.string,
  /**
   * Any valid CSS height value.
   */
  height: PropTypes.string,
};

IconArrowDown.defaultProps = {
  fill: "currentColor",
  width: "100%",
  height: "100%",
};
