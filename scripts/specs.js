const fs = require("fs");
const path = require("path");

const specPath = path.resolve("specs");
const files = fs.readdirSync(specPath);

// Clone spec (template) files to base dir
files.forEach((file) => {
  const baseDir = path.resolve(file);
  const spec = path.join(specPath, file);
  fs.copyFileSync(spec, baseDir);
});
