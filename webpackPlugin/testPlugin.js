class TestPlugin {
  constructor(options) {}
  apply(compiler) {
    // console.log(compiler);
    compiler.hooks.emit.tapAsync(TestPlugin.name, (compilation, next) => {
      const result = compilation.getAssets();
      console.log(123, result);
      next();
    });
    // compiler.plugin("compilation", function (compilation) {});
  }
}
module.exports = TestPlugin;
