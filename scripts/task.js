const { Modifier } = require("argv-json-mapper");
const modifier = new Modifier("taskdef.json");

const run = async () => {
  await modifier.modify((argv) => ({
    family: argv[2],
    executionRoleArn: argv[1],
    taskDefinitionArn: argv[0],
  }));
};

run();
