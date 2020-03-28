import React from "react";
import PropTypes from "prop-types";

import withThemeContext from "../../hoc/withThemeContext";

import styles from "./toggler.module.css";

const Toggler = ({ theme: { theme, toggleTheme } }) => (
  <div className={styles.themeSelector}>
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={({ target }) => toggleTheme(target.value)}
      />
      <span className={styles.slider}></span>
    </label>
  </div>
);

Toggler.propTypes = {
  theme: PropTypes.shape({
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired
  })
};

export default withThemeContext(Toggler);
