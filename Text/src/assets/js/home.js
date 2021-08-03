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
    // 手机模块
    var oMore = document.getElementsByClassName("more")[0];
    oGg = oMore.children[0];
    oGg.onmouseover = function(){
        oGg.style.color = "#ff6700";
    }
    oGg.onmouseout = function(){
        oGg.style.color = "";
    }
    
    // 家电模块
    var oMore1 = document.getElementsByClassName("more")[1];
    oGg1 = oMore1.children;
    oGg11 = oMore1.children[0];
    oRight_boxs = document.getElementsByClassName("right_boxs")[1];
    oRigbox = oRight_boxs.children;
    oGg11.classList.add("active1")
    for(var i=0;i<oGg1.length;i++){
        oGg1[i].index = i;
        oGg1[i].onmouseover = function(){
            for(var j=0;j<oGg1.length;j++){
                oGg1[j].className = "gg";
                oRigbox[j].style.display="none";
            }
            this.className = "gg active1";
            oRigbox[this.index].style.display="block";
        } 
    }
    
   // 智能模块
   var oMore2 = document.getElementsByClassName("more")[2];
   oGg2 = oMore2.children;
   oGg22 = oMore2.children[0];
   oRight_boxs2 = document.getElementsByClassName("right_boxs")[2];
   oRigbox2 = oRight_boxs2.children;
   oGg22.classList.add("active1")
   for(var i=0;i<oGg2.length;i++){
       oGg2[i].index = i;
       oGg2[i].onmouseover = function(){
           for(var j=0;j<oGg2.length;j++){
               oGg2[j].className = "gg";
               oRigbox2[j].style.display="none";
           }
           this.className = "gg active1";
           oRigbox2[this.index].style.display="block";
       } 
   }

    // 搭配模块
    var oMore3 = document.getElementsByClassName("more")[3];
    oGg3 = oMore3.children;
    oGg33 = oMore3.children[0];
    oRight_boxs3 = document.getElementsByClassName("right_boxs")[3];
    oRigbox3 = oRight_boxs3.children;
    oGg33.classList.add("active1")
    for(var i=0;i<oGg3.length;i++){
        oGg3[i].index = i;
        oGg3[i].onmouseover = function(){
            for(var j=0;j<oGg3.length;j++){
                oGg3[j].className = "gg";
                oRigbox3[j].style.display="none";
            }
            this.className = "gg active1";
            oRigbox3[this.index].style.display="block";
        } 
    }

    // 配件
    var oMore4 = document.getElementsByClassName("more")[4];
    oGg4 = oMore4.children;
    oGg44 = oMore4.children[0];
    oRight_boxs4 = document.getElementsByClassName("right_boxs")[4];
    oRigbox4 = oRight_boxs4.children;
    oGg44.classList.add("active1")
    for(var i=0;i<oGg4.length;i++){
        oGg4[i].index = i;
        oGg4[i].onmouseover = function(){
            for(var j=0;j<oGg4.length;j++){
                oGg4[j].className = "gg";
                oRigbox4[j].style.display="none";
            }
            this.className = "gg active1";
            oRigbox4[this.index].style.display="block";
        } 
    }
    // 周边
    var oMore5 = document.getElementsByClassName("more")[5];
    oGg5 = oMore5.children;
    oGg55 = oMore5.children[0];
    oRight_boxs5 = document.getElementsByClassName("right_boxs")[5];
    oRigbox5 = oRight_boxs5.children;
    oGg55.classList.add("active1")
    for(var i=0;i<oGg5.length;i++){
        oGg5[i].index = i;
        oGg5[i].onmouseover = function(){
            for(var j=0;j<oGg5.length;j++){
                oGg5[j].className = "gg";
                oRigbox5[j].style.display="none";
            }
            this.className = "gg active1";
            oRigbox5[this.index].style.display="block";
        } 
    }

      // 视频
      var oSp_a = document.getElementsByClassName("sp_a");
      var oSp_kuang1 = document.getElementsByClassName("sp_kuang1");
      var oClose = document.getElementsByClassName("close");
      var oFuji = document.getElementsByClassName("fuji")[0];
      var oVideo_1 = document.getElementsByClassName("video_1");
      for(var i=0;i<oSp_a.length;i++){
          oSp_a[i].index = i;
          oSp_a[i].onclick = function(){
              for(var j=0;j<oSp_a.length;j++){
                  oSp_kuang1[j].style.display="none";
              }
              oSp_kuang1[this.index].style.display="block";
          } 
          oClose[i].onclick = function(){
              for(var k=0;k<oClose.length;k++){
                  oSp_kuang1[k].style.display="none";
              }
          } 
      }

      // 微博 微信
    var oVb = document.getElementsByClassName("vb")[0];
    var oVx = document.getElementsByClassName("vx")[0];
    var oVx_box = document.getElementsByClassName("vx_box")[0];
    oVb.onmouseover = function(){
        oVb.src="./src/assets/img/wb.png";
    }
    oVb.onmouseout = function(){
        oVb.src="./src/assets/img/xm_1100000482.png";
    }
    oVx.onmouseover = function(){
        oVx.src="./src/assets/img/wx.png";
        oVx_box.style.display="block";
    }
    oVx.onmouseout = function(){
        oVx.src="./src/assets/img/xm_1100000483.png";
        oVx_box.style.display="none";
    }

    // 侧边导航
    var oItem = document.getElementsByClassName("item");
    var oItem1 = document.getElementsByClassName("item1")[0];
    var oItem2 = document.getElementsByClassName("item2")[0];
    var oItem3 = document.getElementsByClassName("item3")[0];
    var oItem4 = document.getElementsByClassName("item4")[0];
    var oItem5 = document.getElementsByClassName("item5")[0];
    var oItem6 = document.getElementsByClassName("item6")[0];
    var oFirst = document.getElementsByClassName("first");
    var oNav_yc = document.getElementsByClassName("nav_yc")[0];
    oItem[0].onmouseover = function(){
        oNav_yc.style.display="block";
        oFirst[0].src="./src/assets/img/xm_1100000350.png";
    }
    oItem[0].onmouseout = function(){
        oNav_yc.style.display="none";
        oFirst[0].src="./src/assets/img/xm_1100000349.png";
    }
    oItem[1].onmouseover = function(){
        oFirst[1].src="./src/assets/img/xm_1100000353.png";
    }
    oItem[1].onmouseout = function(){
        oFirst[1].src="./src/assets/img/xm_1100000352.png";
    }
    oItem[2].onmouseover = function(){
        oFirst[2].src="./src/assets/img/xm_1100000355.png";
    }
    oItem[2].onmouseout = function(){
        oFirst[2].src="./src/assets/img/xm_1100000354.png";
    }
    oItem[3].onmouseover = function(){
        oFirst[3].src="./src/assets/img/xm_1100000357.png";
    }
    oItem[3].onmouseout = function(){
        oFirst[3].src="./src/assets/img/xm_1100000356.png";
    }
    oItem[4].onmouseover = function(){
        oFirst[4].src="./src/assets/img/xm_1100000359.png";
    }
    oItem[4].onmouseout = function(){
        oFirst[4].src="./src/assets/img/xm_1100000358.png";
    }
    oItem[5].onmouseover = function(){
        oFirst[5].src="./src/assets/img/top2.png";
    }
    oItem[5].onmouseout = function(){
        oFirst[5].src="./src/assets/img/top1.png";
    }
    for(var i=0;i<oItem.length;i++){
        oItem[i].index = i;
        window.onscroll = function (){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop>=500){
                oItem[5].style.display = "block";
            }else{
                oItem[5].style.display = "none";
            }
            oItem[5].onclick = function(){
                document.documentElement.scrollTop = document.body.scrollTop = 0
            }
        }
    }

}