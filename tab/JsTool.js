/**
 * Created by maying on 2017/3/3.
 */

// 获取非行间样式
function getStyle(obj,name){
    if(obj.currentStyle){
        return  obj[name].currentStyle
    }else
    {
       return  getComputedStyle(obj,false)[name]
    }
}




// ------------------------------------
// 获取非行间样式
function getStyle(obj,name){
    if(obj.currentStyle){
        return  obj[name].currentStyle
    }else
    {
        return  getComputedStyle(obj,false)[name]
    }
}

function startMove(obj,attr,itarget){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var curr = 0;
        if(attr == 'opacity'){
            curr =Math.round(parseFloat(getStyle(obj,attr))*100);
        }else{
            curr = parseInt(getStyle(obj,attr));
        }
        var speed  = (itarget - curr)/6;
        speed = speed >0?Math.ceil(speed):Math.floor(speed);
        if(curr == itarget){
            clearInterval(obj.timer)
        }else {
            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity:'+(curr + speed)+')';
                obj.style.opacity = (curr + speed)/100;
            }else{
                obj.style[attr]=curr + speed + 'px';

            }
        }
    },30)
}

// ------------------------------------

// ####################################################################################
// 链式运动框架

// 获取非行间样式
function getStyle(obj,name){
    if(obj.currentStyle){
        return  obj[name].currentStyle
    }else
    {
        return  getComputedStyle(obj,false)[name]
    }
}


function startMove(obj,attr,itarget,fnEnd){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var curr = 0;
        if(attr == 'opacity'){
            curr =Math.round(parseFloat(getStyle(obj,attr))*100);
        }else{
            curr = parseInt(getStyle(obj,attr));
        }
        var speed  = (itarget - curr)/6;
        speed = speed >0?Math.ceil(speed):Math.floor(speed);
        if(curr == itarget){
            clearInterval(obj.timer)
//           程序结束时只有当传进来函数的时候才会去执行
            if(fnEnd)fnEnd();
        }else {
            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity:'+(curr + speed)+')';
                obj.style.opacity = (curr + speed)/100;
            }else{
                obj.style[attr]=curr + speed + 'px';
            }
        }
    },30)
}
// ####################################################################################

// 完美运动框架

//解决问题：每次只能改变一个值 以json的形式传进去
// 获取非行间样式
function getStyle(obj,name){
    if(obj.currentStyle){
        return  obj[name].currentStyle
    }else
    {
        return  getComputedStyle(obj,false)[name]
    }
}
//startMove(odiv1,{width:400,height:400},fnEnd)
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function startMove(obj,json,fnEnd){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var bStop = true; //假设所有的值都到了
        for (var attr in json){
            var curr = 0;
            if(attr == 'opacity'){
                curr =Math.round(parseFloat(getStyle(obj,attr))*100);
            }else{
                curr = parseInt(getStyle(obj,attr));
            }
            var speed  = (json[attr] - curr)/6;
            speed = speed >0?Math.ceil(speed):Math.floor(speed);


//                如果有一个值没有到达目标点
            if(curr!=json[attr]){
                bStop =false;
            }
            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity:'+(curr + speed)+')';
                obj.style.opacity = (curr + speed)/100;
            }else{
                obj.style[attr]=curr + speed + 'px';

            }

        }

        if(bStop){
            clearInterval(obj.timer)
            if(fnEnd)fnEnd();
        }
    },30)
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// 获取scrollTop和scrollLeft
function getPos() {
    var scrollTop  = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft  = document.documentElement.scrollLeft || document.body.scrollLeft;
    return {
        scrollTop:scrollTop,
        scrollLeft:scrollLeft
    }
}

// 绑定事件
function myAddEvent(obj,ev,fn) {
    if(obj.attachEvent){
        obj.attachEvent('on'+ ev ,fn)
    }else{
        obj.addEventListener(ev,fn,false)

    }
}
// 深克隆
function deepClone(parent,child) {
//        如果不传入第二个参数就创建一个新的对象
    child = child || {}
//        遍历parent上所有的属性宾并且过滤原型上的属性//然后将自身属性复制到child对象上
    for(var i in parent){
        if(parent.hasOwnProperty(i)){
//                检测当前项是否为对象
            if(typeof parent[i] == 'object'){
//                    如果当前项为对象还要检测是否为数组
                child[i] = (Object.prototype.toString.call(parent[i]) === "[object Array]") ? [] : {};
                deepClone(parent[i], child[i]);
            }else{
                child[i] = parent[i]
            }
        }
    }
    return child;
}



<!--  深嵌套数组返回扁平化数组 [1,[2,[3,4],5],6] =>[1,2,3,4,5,6]-->
function toSimpleArray(data,result) {
    result = result || [];
    for(var i =0;i<data.length;i++){
        if(typeof  data[i] === 'number'){
            result.push(data[i])
        }else {
            toSimpleArray(data[i],result)
        }
    }
}



// 判断一个对象是不是一个数组
function isArray(obj) {
    // 先判断是不是一个对象
    if(typeof  obj === 'object'){
        // 在判断是不是是不是一个数组
        return obj.prototype.toString().call(obj) === '[object Array]'
    }
    return false;
}



// 数组去重
function  toUnique(arr){
    if(arr && Array.isArray(arr)){
        var map = {}
        for(var i = 0 ;i<arr.length;i++){
            if(arr[i] in map){
                arr.splice(i,1);// 去掉这一项
                //会直接对数组进行修改 slice（）不是
                // slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
                // split() 方法用于把一个字符串分割成字符串数组。
            }else {
                map[arr[i]] = true
            }
        }
    }
    return arr;
}
// 图片预加载
function preLoadImg(url) {

    var img = new Image();
    img.src = url;

}

//    判断是否支持includes方法 如果支持用新方法，不支持的话还用老办法
function contain(arr,target){
    if(Array.prototype.includes){
        return arr.includes(target)
    }else{
        return  arr.some(target)
    }
}
console.log(contain([1,2,3,4],5))
