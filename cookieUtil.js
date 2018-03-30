// 封装cookie的存入，读取以及删除
// key:cookie名
// value:cookie值
// options:可选配置参数
// options = {
//     expires : 7||new Date(),//失效时间
//     path:"/",//路径
//     domain:"",//域名
//     secure:true,//安全连接
// }
function cookie(key,value,options) {
    //读取
    //如果value为空，获取当前域下所有的cookie，保存到coolies数组中
    if(typeof value == "undefined"){
        //获取当前域下所有的cookie
        let cookies = document.cookie.split('; ');
        //遍历coolies数组中的每个元素
            // cookies.forEach((k,value)=>{
            for (let i = 0, len = cookies.length; i < len; i++) {
                // value包括key:value键值对
                let cookie = cookies[i].split('=');
                if(decodeURIComponent(cookie[0]) == key){
                    return decodeURIComponent(cookie[1])
                }
            };
        // }
        return null;
    }

    options = options || {};
    // cookie包括key:value
    let cookie = encodeURIComponent(key)+'='+encodeURIComponent(value);
    //失效时间
    if(typeof options.expires != "undefined"){
        if(options.expires.constructor == Number){
            let days = options.expires,t = options.expires = new Date();
            t.setDate(t.getDate() + days)
        }
        cookie += ";expires="+options.expires.toUTCString();
    }

    //路径
    if(typeof options.path != "undefined"){
        cookie += ";path="+options.path;
    }

    //域名
    if(typeof options.domain != "undefined"){
        cookie += ";domain="+options.document;
    }

    //安全连接
    if(options.secure){
        cookie += ";secure="+options.secure;
    }

    //保存
    document.cookie = cookie;
}

//删除指定coolie
function removeCookie(key,options) {
    options = options || {};
    options.expires = -1;//将失效时间设置为一天前
    cookie(key,"",options)
}