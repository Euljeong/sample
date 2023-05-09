class MyWepbackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("My Plugin", (stats) => {
      console.log("MyWebpackPlugin: done");
    });
  }
}

module.exports = MyWebpackPlugin;
