// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildFlagComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import PropTypes from "prop-types";
import flagStyles from "../Flag.styles";

function FlagGermany(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 86 64"
      className="gds-flag"
      css={flagStyles}
      {...props}
    >
      <path d="M85.333 0H0v21.094h85.333V0Z" fill="#2D2D2E" />
      <path d="M85.333 21.094H0V64h85.333V21.094Z" fill="#F1B920" />
      <path d="M85.333 21.094H0v21.812h85.333V21.094Z" fill="#E43B3A" />
    </svg>
  );
}
export default FlagGermany;

FlagGermany.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

FlagGermany.defaultProps = {};