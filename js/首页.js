var diplay_nav = document.querySelector(".display_btn")
var left_nav =  document.querySelector(".left_nav")
var left_nav_ul = document.querySelectorAll(".left_nav>ul")
var left_nav_title = document.querySelectorAll(".left_nav>ul>div:first-child")
var smallsjx = document.querySelectorAll(".left_nav div i:last-of-type")
var middle_title_img = document.querySelectorAll(".left_nav div img")
var middle_title_log = document.querySelectorAll(".left_nav div i:first-of-type")


//隐藏按钮事件
diplay_nav.onclick = function () {
    left_nav.classList.toggle("display_left_nav");
}

//显示导航栏隐藏信息事件

//循环添加点击事件
var lastclick = left_nav_ul[0];//创建变量保存第一个元素
for(let i=0;i<left_nav_ul.length;i++){
    left_nav_title[i].onclick = function () {
        //原版改图片
        // for(var j = 0;j < middle_title_img.length;j++){
        //
        //     //将图片颜色改变回来
        //     if(middle_title_img[j].getAttribute("src").includes("1")){
        //         var nowimg = middle_title_img[j].getAttribute("src").replace("1","")
        //         middle_title_img[j].setAttribute("src",`${nowimg}`)
        //     }

        //改字体图标
        for(var j = 0;j < middle_title_log.length;j++){

            //将字体颜色改变回来
            if(middle_title_log[j].style.color==="green"){
                middle_title_log[j].style.color = "rgb(104,114,124)";
            }
            //删除展示的样式
            //添加展示的样式，当点击的元素不是上次点击的样式则执行操作

            if(left_nav_ul[j].classList.contains("display_left_information")){
                left_nav_ul[j].classList.remove("display_left_information")
                lastclick = left_nav_ul[j];
                if (lastclick === left_nav_ul[i]){
                    left_nav_ul[j].classList.add("display_left_information")
                }
                break;
            }


        }
        //改变点击的图片的颜色
        // var scrpath = middle_title_img[i].getAttribute("src").split(".png")[0].toString();
        // middle_title_img[i].setAttribute("src",`${scrpath}1.png`)
        middle_title_log[i].style.color = "green";


        left_nav_ul[i].classList.toggle("display_left_information")

    }
}

//设置insertAfter函数
function insertAfter(addElement,targetEmement){
    var parentElement = targetEmement.parentNode;
    if(parentElement.lastChild === targetEmement){
        parentElement.appendChild(addElement);
    }else{
        parentElement.insertBefore(addElement,targetEmement.nextSibling);
    }
}

//点击显示其他页面
var nav_station_title = left_nav_ul[2].querySelectorAll("li");
var middle_iframe = document.querySelector("#middle_iframe")
//首页
document.querySelector(".main_window").onclick = function () {
    middle_iframe.setAttribute("src","首页/index.html")
}
//全国地图
nav_station_title[0].onclick = function () {
    middle_iframe.setAttribute("src","../图形/地图.html")
}
//四川省散点图
nav_station_title[1].onclick = function () {
    middle_iframe.setAttribute("src","../图形/四川省散点图.html")
}
//四川基站柱状图
nav_station_title[2].onclick = function () {
    middle_iframe.setAttribute("src","../图形/四川省柱状图.html")
}
//江苏省散点图
nav_station_title[3].onclick = function () {
    middle_iframe.setAttribute("src","../图形/江苏省散点图.html")
}
//江苏省折线图
nav_station_title[4].onclick = function () {
    middle_iframe.setAttribute("src","../图形/江苏省折线图.html")
}
