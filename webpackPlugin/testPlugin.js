class TestPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    // console.log(compiler);
    compiler.hooks.emit.tapAsync(TestPlugin.name, (compilation, next) => {
      const result = compilation.getAssets();
      console.log(123, this.options, result);
      next();
    });
    // compiler.plugin("compilation", function (compilation) {});
  }
}
module.exports = TestPlugin;
``