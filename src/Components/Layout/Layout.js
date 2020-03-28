import React from "react";
import withThemeContext from "../../hoc/withThemeContext";
import PropTypes from "prop-types";

import styles from "./layout.module.css";

const Layout = ({ children, theme: { theme, config } }) => (
  <div
    className={styles.Layout}
    style={{
      background: config[theme].bodybg,
      color: config[theme].fontColor
    }}
  >
    {children}
  </div>
);

Layout.propTypes = {
  theme: PropTypes.shape({
    theme: PropTypes.string.isRequired,
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

export default withThemeContext(Layout);
