function load(value){
    var xmlHttp;
    //判断当前浏览器是否支持AJAX
    if (window.XMLHttpRequest){
        //使用IE7+、Firefox、Chrome、Opera、Safari浏览器执行代码
        //创建XMLHttpRequest对象
        xmlHttp=new XMLHttpRequest;     //xmlHttp=(7);   
    } 
    //绑定XMLHttpRequest对象的状态改变事件
    xmlHttp.onreadystatechange=function(){    //xmlHttp.(8)=function(){
    	//当服务器已正确返回数据，且为正常响应时，将服务器返回的天气信息填入表格中。
        if (xmlHttp.readyState==4 && xmlHttp.status==200){    // if (xmlHttp.(9)==4 && xmlHttp.(10)==200){
            /* 天气信息实时更新 */
            //将json字符串转换为对象
            var json = JSON.parse(xmlHttp.responseText);    //var json = JSON.(11)(xmlHttp.responseText);
			document.getElementsByTagName("td")[4].innerHTML = json.name;    //document.getElementsByTagName("td")[4].(12) = json.name;
			document.getElementsByTagName("td")[5].innerHTML= json.min;
			document.getElementsByTagName("td")[6].innerHTML= json.max;
			document.getElementsByTagName("td")[7].innerHTML= json.weather;
        }
    }
    //创建http请求
    xmlHttp.open("GET", "./listWeather.php?city="+ value, true); //xmlHttp.(13)("GET", "./listWeather.php?city="+ value, true);
    //发送http请求
    xmlHttp.send();    //xmlHttp.(14)();
}