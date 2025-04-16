const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  // for development
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "netgoluyadav337",
        mongodb_password: "0hPQB8iRopUAmDP4",
        mongodb_clustername: "cluster0",
      },
    };
  }
  // for production
  return {
    env: {
      mongodb_username: "netgoluyadav337",
      mongodb_password: "0hPQB8iRopUAmDP4",
      mongodb_clustername: "cluster0",
    },
  };
};
