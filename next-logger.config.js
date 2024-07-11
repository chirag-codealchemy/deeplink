const pino = require("pino");

const logger = (defaultConfig) => {
  console.log("THIS IS PINO");
  // const transport = pino.transport({
  //   target: "pino/file",
  //   options: { destination: "/public/logs", append: true, mkdir: true },
  // });
  return pino({
    ...defaultConfig,
    // ...transport,
    // messageKey: "message",
    // mixin: () => ({ name: "custom-pino-instance" }),
    // transport: {
    //   target: "pino/file",
    //   options: { destination: "/public/logs", append: true, mkdir: true },
    // },
  });
};
module.exports = { logger };
