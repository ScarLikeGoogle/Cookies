//虚拟数据
let headers = ['序号','名称','价格','操作'];
let cart = ['序号','名称','价格','数量'];
let datas = [{key:1,name:"冰箱",price:"3200",operate:"+"},{key:2,name:"冰箱",price:"3200",operate:"+"},
    {key:3,name:"冰箱",price:"3200",operate:"+"},{key:4,name:"冰箱",price:"3200",operate:"+"},
    {key:5,name:"冰箱",price:"3200",operate:"+"},{key:6,name:"冰箱",price:"3200",operate:"+"}];

//创建虚拟数据的表单
createTable($('#c'),headers,datas);

//添加到购物车
//找到所有的添加购物车的链接
let links = $("a",$("#products"));
//增加一个将类数组对象转成数组的方法
HTMLCollection.prototype.toArray=function(){
    return [].slice.call(this);
};


//遍历，为每个”添加购物车“的超级链接添加点击事件
links.toArray().forEach(value => {
    value.onclick = function () {
        //获取当前链接所在行的所有单元格
        let _cells =this.parentNode.parentNode.cells;
        //获取到即将添加到购物车的商品信息
        let _id = _cells[0].innerHTML;
        let _name = _cells[1].innerHTML;
        let _price = _cells[2].innerHTML;
        //将商品信息包装到一个对象中
        let product = {
            id:_id,
            name:_name,
            price:_price,
            amout:1
        };

        //将当前选购的商品对象保存到cookie中去
        let _products = cookie("_products");
        if(_products == null){//cookies中不存在_products的cookie
            _products = [];
        }else{//存在，解析为数组结构
            _products = JSON.parse(_products);
        }
        //将当前选购的商品追加到数组中保存
        _products.push(product);
        //将_products数组保存到cookie中
        cookie("_products",JSON.stringify(_products),{expires:7});

    }
});

//查看购物车详情
function CheckChart() {
    //从cookie中读取购物车已有的商品信息
    let _products = cookie("_products");
    //判断购物车是否有商品
    if(_products == null || (JSON.parse(_products)).length == 0){
        return;
    }

    //如果有商品，显示在页面中
    $('#cartList').innerHTML = "";
    createTable($('#cartList'),cart,JSON.parse(_products))
}