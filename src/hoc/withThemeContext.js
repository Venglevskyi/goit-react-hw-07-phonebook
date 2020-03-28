import React from "react";
import PropTypes from "prop-types";
import ThemeContext from "../context/ThemeContext";

const withThemeContext = WrappedComponent => {
  return function withThemeContext(props) {
    return (
      <ThemeContext.Consumer>
        {ctx => <WrappedComponent {...props} theme={ctx} />}
      </ThemeContext.Consumer>
    );
  };
};

withThemeContext.propTypes = {
  value: PropTypes.shape({
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
    config: PropTypes.exact({
      light: PropTypes.exact({
        bodybg: PropTypes.string.isRequired,
        fontColor: PropTypes.string.isRequired
      }),
      dark: PropTypes.exact({
        bodybg: PropTypes.string.isRequired,
        fontColor: PropTypes.string.isRequired
      })
    })
  })
};

export default withThemeContext;
