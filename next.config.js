// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// module.exports = (phase) => {
//   // for development
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       env: {
//         mongodb_username: "",
//         mongodb_password: "",
//         mongodb_clustername: "",
//       },
//     };
//   }
//   // for production
//   return {
//     env: {
//       mongodb_username: "",
//       mongodb_password: "",
//       mongodb_clustername: "",
//     },
//   };
// };

module.exports = (phase) => {
  return {
    env: {
      mongodb_username: process.env.MONGODB_USERNAME,
      mongodb_password: process.env.MONGODB_PASSWORD,
      mongodb_clustername: process.env.MONGODB_CLUSTERNAME,
    },
  };
};
