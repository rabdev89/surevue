
const publicPath = process.env.NODE_ENV === "production" ? "/" : "/";

module.exports = {
  outputDir: "docs",
  publicPath: publicPath,
  lintOnSave: false
};
