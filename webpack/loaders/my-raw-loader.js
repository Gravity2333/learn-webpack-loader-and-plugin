module.exports = function(content,map,meta){
	//这里的content就变成二进制buffer数据了，可以用于处理图片等等媒体文件
    return `export default ${JSON.stringify(content)}`   //不需要做太多操作的时候，就可以直接返回content，不需要使用callback
}
module.exports.raw = true;   //开启
