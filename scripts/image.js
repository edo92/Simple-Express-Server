const { Modifier } = require("argv-json-mapper");
const modifier = new Modifier("imageDetail.json");

const run = async () => {
  await modifier.modify((argv) => ({
    ImageURI: argv[0],
  }));
};

run();
