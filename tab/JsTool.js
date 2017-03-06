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
//                    程序结束时只有当传进来函数的时候才会去执行
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

window.onload=function(){
   var odiv1 = document.getElementById('odiv');
    var  b = getStyle(odiv1,'height')
    alert(b);
}