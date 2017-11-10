
    // 这是maying1加的js TODO..
    //  获取cookie里面存放的用户ID
    // 判断pageCount和opcount的关系
    //  获取指定name的cookie
    function getCookie(name)
      {
          var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); //正则匹配
          if(arr=document.cookie.match(reg)){
            return unescape(arr[2]);
          }
          else{
           return null;
          }
      }
      // 设置无过期时间的cookie
       function setCookie(name,value) {
         document.cookie = name + '=' + escape(value);
     }
      //  获取当前的用户信息 给他加一个专属的id
       var userId =getCookie('XIN_UID_CK')
       console.log('userId',userId)
      //  不支持ES6 心累
      var pageCount = userId + 'page_count';
      var opCount = userId + 'op_count';
      console.log('pageCount,opCount',pageCount,opCount);
      // 用户可能操作的鼠标事件
      var eventType = ['click','dbclick','mouseover','mouseout','mousedown','mouseup','contextmenu','mouseenter','mouseleave','mousewheel'];
      if (getCookie(pageCount) && getCookie(opCount))
         {
           if(getCookie(pageCount) > 3 && getCookie(opCount) <10){
             console.log('请留意，这个用户可能是个机器猫，用户ID是',userId);
           }else{
             console.log('这个用户不可能是机器人,太能点了 用户ID是',userId);
           }
         }
     // 检查当前用户是否存在cookie记录详情页的点击次数 pageCount
     // 现在要做的是一进页面获取当前用户的pageCount，如果没有就创建 如果有就执行++的操作 完美

      if (getCookie(pageCount))
         {
          setCookie(pageCount,Number(getCookie(pageCount)) +1);
         }
    else
         {
            setCookie(pageCount,1);
         }

    // 判断 cookie的 opCount

    for(var i =0;i< eventType.length;i++){
    window.addEventListener(eventType[i], function(){
      console.log('进去之前opCount',getCookie(opCount));
      if(getCookie(opCount) =='NaN'){
        console.log('NaNNaNNaNNaNNaNNaN');
        setCookie(opCount,0)
      }else {
            console.log('345678');
            var count = Number(getCookie(opCount));
            console.log('count++',count++);
            setCookie(opCount,count++);
      }
      });
  }

      // 这是maying1加的js----------------