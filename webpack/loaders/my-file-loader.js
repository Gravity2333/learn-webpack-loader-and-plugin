const loaderUtils = require('loader-utils')
const path = require('path')
module.exports = function(file){
    const {name,outputPath} = this.getOptions() 
    // 生成名称
    const fileName = loaderUtils.interpolateName(this,name || '[contenthash].[ext]',{
        content: file
    })
    
    // 输出文件
    const emitUrl = path.resolve(outputPath,fileName)
    this.emitFile(emitUrl,file)

    return `export default "${emitUrl}"`
}

module.exports.raw = true