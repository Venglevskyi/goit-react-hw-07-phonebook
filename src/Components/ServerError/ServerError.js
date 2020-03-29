import React from "react";

import serverError from "../../images/server-error.jpg";

const styles = {
  container: { textAlign: "center" },
  image: { paddingTop: 100 }
};

const ServerError = () => (
  <div style={styles.container}>
    <img src={serverError} alt="img" width="500" style={styles.image} />
  </div>
);

export default ServerError;
