//原生js解决document.getElementsByClassName兼容问题


function $(param,obj) {
    obj = obj || document;
    if(param.charAt(0) === '#'){
        return obj.getElementById(param.slice(1));
    }
    if(param.charAt(0) === '.'){
        return getByClass(param.slice(1),obj);
    }
    return obj.getElementsByTagName(param)
}
function getByClass(className,obj) {
    obj = obj || document;
    if(obj.getElementsByClassName){
        return obj.getElementsByClassName(className);
    }

    //不支持getElementsByClassName方法使用，如IE9及以下版本
    //保存等于className的数组
    let result = [];
    let tags = obj.getElementsByTagName('*');
    tags.forEach(value => {
        let classNames = value.className.split('');
        classNames.forEach(value2 => {
            if(className === value2){
                result.push(value);
            }
        })
    })
    return result;
}