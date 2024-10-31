const { contentType } = require("mime-types");
const path = require("path");
const fallbackLoader = require('./my-file-loader')

module.exports = function (content) {
  const { mimeType, limit } = this.getOptions();
  // 处理限制
  if (limit && limit < content.length) {
    return fallbackLoader.call(this,content)
  }
  // 处理类型
  const type = mimeType || contentType(path.extname(this.resourcePath));
  // base64编码
  const base64Code = content.toString("base64");
  return `
        export default "data:${type};base64,${base64Code}"
    `;
};

module.exports.raw = true;
