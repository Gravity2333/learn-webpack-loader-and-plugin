module.exports = class ShowCompileFilePlugin {
  apply(compiler) {
    // console.log(compiler)
    compiler.hooks.emit.tap("BEFORE_EMIT", (compilation) => {
      // 获取所有即将输出的资源
      const assets = Object.keys(compilation.assets);

      // 输出资源列表
      console.log("编译完成，以下是所有生成资源列表：");
      assets.forEach((asset) => {
        console.log(asset);
      });
    });
  }
};
