//动态创建Table表单
// parentNode:父节点
// headers:表头(数组)
// datas:内容（数组对象）

function createTable(parentNode,headers,datas) {
    //创建表格
    let table = document.createElement('table');
    table.id = "products";
    //将表单加到父容器中去
    parentNode.appendChild(table);
    if(parentNode.id == 'c'){
        let searchCart = document.createElement('a');
        searchCart.innerHTML = "查看购物车";
        searchCart.href = "javascript:void(0);";
        searchCart.onclick = function () {
            CheckChart();
        };
        parentNode.appendChild(searchCart);
    }

    //设置table样式
    table.cellPadding = 0;
    table.cellSpacing = 0;
    table.border = "1px";
    //创建表头
    let thead = document.createElement('thead');
    //将标题追加到table中
    table.appendChild(thead);
    //创建tr
    let tr = document.createElement('tr');
    //将tr追加到thead中
    thead.appendChild(tr);
    //设置tr样式
    tr.style.height = "50px";
    tr.style.backgroundColor = "#fff";
    //遍历headers中的数据
    headers.forEach(v => {
        let th = document.createElement('th');
        th.innerHTML = v;
        tr.appendChild(th);
    });

    if(datas){
        let tbody = document.createElement('tbody');
        table.appendChild(tbody);

        //遍历datas中的数据
        for(let key in datas){
            let tr = document.createElement('tr');
            tbody.appendChild(tr);
            tr.style.height = "50px";
            tr.style.backgroundColor = "#fff";
            for(let key1 in datas[key]){
                let td = document.createElement('td');
                td.style.width = "100px";
                td.style.textAlign = "center";
                if(key1 == 'operate'){
                    td.innerHTML = '<a href="javascript:void(0);">'+datas[key][key1]+'</a>';
                }else{
                    td.innerHTML = datas[key][key1];
                }
                tr.appendChild(td);
            }

        }
    }
}