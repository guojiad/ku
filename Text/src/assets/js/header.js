window.onload = function(){
    // 头部
    var oImg1 = document.getElementsByClassName("img1")[0];
    var oNav_2 = document.getElementsByClassName("nav_2")[0];
    var oTo2_a = document.getElementsByClassName("to2_a")[0];
    oNav_2.onmouseover = function(){
        oImg1.src="./src/assets/img/xm_1100000359.png";
        oTo2_a.style.color="#ff6700";
        oTo2_a.style.background="#fff";
    }
    oNav_2.onmouseout = function(){
        oImg1.src="./src/assets/img/xm_1100000358.png";
        oTo2_a.style.color="#B0B0B0";
        oTo2_a.style.background="#424242";
    }

    // 主页
    //给所有的按钮添加点击事件
    var oDh2_li = document.getElementsByClassName("dh2_li");
    var oDh2_box1 = document.getElementsByClassName("dh2_box1");
    for(var i=0;i<oDh2_li.length;i++){
        oDh2_li[i].index = i;
        oDh2_li[i].onmouseover = function(){
            //当点击按钮时给按钮加上active类名
            // this.className = "btn active";
            //除了当前选择的按钮以外清除其他的所有按钮的ative类
            //先清除全部的active类，再找到当前的添加上active类即可
            //清楚全部按钮的active类
            for(var j=0;j<oDh2_li.length;j++){
                oDh2_li[j].className = "dh2_li";
                //先隐藏全部的盒子
                oDh2_box1[j].style.display="none";
            }
            //再找到当前添加上active类
            this.className = "dh2_li active";
            //显示当前按钮索引下标对应的盒子
            oDh2_box1[this.index].style.display="block";
        }
        oDh2_li[i].onmouseout = function(){
            oDh2_box1[this.index].style.display="none";
            this.className = "dh2_li";
        } 
    }
    for(var i=0;i<oDh2_li.length;i++){
        oDh2_box1[i].index = i;
        oDh2_box1[i].onmouseover = function(){
            oDh2_box1[this.index].style.display="block";
        }
        oDh2_box1[i].onmouseout = function(){
            oDh2_box1[this.index].style.display="none";
        } 
    }
    // 搜索
    var oFdj = document.getElementsByClassName("fdj")[0];
    var oSubmit = document.getElementsByClassName("submit")[0];
    var oSearch1 = document.getElementsByClassName("search1")[0];
    var oHezi = document.getElementsByClassName("hezi")[0];
    var oHezi_li = document.getElementsByClassName("hezi_li");
    oFdj.onmouseover = function(){
        oSubmit.style.backgroundColor = "#ff6700";
    }
    oFdj.onmouseout = function(){
        oSubmit.style.backgroundColor = "#fff";
    }
    oSubmit.onmouseover = function(){
        oSubmit.style.backgroundColor = "#ff6700";
    }
    oSubmit.onmouseout = function(){
        oSubmit.style.backgroundColor = "#fff";
    }
    oSearch1.onmousedown = function (){
        if(oHezi.style.display == "block"){
            oHezi.style.display = "none";
            oSearch1.style.border = "";
            oSubmit.style.border = "";
        }else{
            oHezi.style.display = "block";
            oSearch1.style.border= "1px solid #ff6700";
            oSubmit.style.border = "1px solid #ff6700";
            for(var i=0;i<oHezi_li.length;i++){
                oHezi_li[i].index = i;
                oHezi_li[i].onmouseover = function (){
                    this.style.background = "#f5f5f5";
                }
                oHezi_li[i].onmouseout = function (){
                    this.style.background = "#fff"
                }
            }
        }
    }
    // 选项卡隐藏部分
    var oXxk_li = document.getElementsByClassName("xxk_li");
    var oXxk_yc_box = document.getElementsByClassName("xxk_yc_box");
    for(var i=0;i<oXxk_li.length;i++){
        oXxk_li[i].index = i;
        oXxk_li[i].onmouseover = function(){
            for(var j=0;j<oXxk_li.length;j++){
                oXxk_yc_box[j].style.display="none";
            }
            oXxk_yc_box[this.index].style.display="block";
        }
        oXxk_li[i].onmouseout = function(){
            oXxk_yc_box[this.index].style.display="none";
        } 
    }
    for(var i=0;i<oDh2_li.length;i++){
        oXxk_yc_box[i].index = i;
        oXxk_yc_box[i].onmouseover = function(){
            oXxk_yc_box[this.index].style.display="block";
        }
        oXxk_yc_box[i].onmouseout = function(){
            oXxk_yc_box[this.index].style.display="none";
        } 
    }

    // 第一个
    var oGga = document.getElementsByClassName("gga");
    var oCent2_div2 = document.getElementsByClassName("cent2_div2");
    for(var i=0;i<oGga.length;i++){
        oGga[i].index = i;
        oGga[i].onmouseover = function(){
            for(var j=0;j<oGga.length;j++){
                oGga[j].className = "gga";
                oCent2_div2[j].style.display="none";
            }
            //再找到当前添加上active类
            this.className = "gga gga1";
            //显示当前按钮索引下标对应的盒子
            oCent2_div2[this.index].style.display="block";
        } 
    }
}