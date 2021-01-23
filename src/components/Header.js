import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showCunt }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        text={showCunt ? "Close" : "Add"}
        color={showCunt ? "red" : "green"}
      />
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
