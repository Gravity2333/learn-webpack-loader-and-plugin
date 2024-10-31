
module.exports = function(content){
  content = content.replace(/\s*/g, "");
  const {log} = this.getOptions()
  const _log = log?'console.log("matchTemplate")':''
  return `export default (props)=>{
          ${matchProps.toString()}
          ${_log}
          return matchProps(\`${content}\`,props)
      }`;
};

function matchProps(template,props){
  return template.replace(/{{(.*?)}}/g,(node,key)=>{
    return props[key]
  })
}