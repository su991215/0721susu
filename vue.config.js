const path = require("path");
module.exports = {
  // lintOnSave: false, // 关闭所有eslint检查
  configureWebpack: {
    resolve: {
      alias: {
        "@views": path.resolve(_dirname, "src/views"),
        "@assets": path.resolve(_dirname, "src/assets"),
        "@comps": path.resolve(_dirname, "src/comps"),
        "@store": path.resolve(_dirname, "src/store"),
        "@utils": path.resolve(_dirname, "src/utils"),
        "@api": path.resolve(_dirname, "src/api"),
      },
    },
  },
};
