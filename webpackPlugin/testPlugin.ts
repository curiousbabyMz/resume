import { Compiler } from "webpack";

class TestPlugin {
  options: any;
  constructor(options: any) {
    this.options = options;
  }
  apply(compiler: Compiler) {
    // console.log(compiler);
    compiler.hooks.emit.tapAsync(TestPlugin.name, (compilation, next) => {
      const result = compilation.getAssets();
      // console.log(123, this.options, result);
      next();
    });
    // compiler.plugin("compilation", function (compilation) {});
  }
}
// module.exports = TestPlugin;
export default TestPlugin;
