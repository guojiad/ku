<template>
    <div id="home">
        <div class="top2">
            <div class="top2_c">
                <div class="logo_box">
                    <a href="##" class="logo"></a>
                </div>
                <ul class="daohang2_uls">
                    <li class="dh2_li" v-for="(item,index0) in arrList" :key="index0">{{item.name}}</li>  
                </ul>
                <div class="dh2div">
                    <div class="dh2_box1" v-for="(i,index) in arrList" :key="index">
                        <ul class="ul_1">
                            <a href="##" v-for="(n,index1) in i.imgarr" :key="index1">
                                <li class="lis">
                                    <div class="xian">
                                        <img :src="n.srcs" />
                                    </div>
                                    <div class="title">{{n.title}}</div>
                                    <p class="price">{{n.price}}</p>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
                <!-- 搜索 -->
                <div class="search">
                    <input type="text" class="search1" placeholder="耳机" />
                    <input type="submit" class="submit" value=" " />
                    <img src="./assets/img/ss1.png" class="fdj" />
                    <div class = "hezi">
                        <ul class="hezi_ul">
                            <li class="hezi_li" v-for="(item,index3) in list1" :key="index3">
                                <a href="##">{{item.as}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="lunbo_div">
            <div class="lunbo">
                <div class="block">
                    <span class="demonstration"></span>
                    <el-carousel trigger="click" height="460px">
                    <el-carousel-item v-for="(item,index7) in list2" :key="index7">
                        <img :src="item.imgs" />
                    </el-carousel-item>
                    </el-carousel>
                </div>
                <!-- 选项卡 -->
                <div class="xxk_box">
                    <ul class="xxk_ul">
                        <li class="xxk_li" v-for="(item,index2) in list3" :key="index2">
                            <a href="##">
                                {{item.wenzi}}
                                <span>{{item.jiantou}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- 选项卡隐藏部分 -->
                <div class="bigbox">
                    <div class="xxk_yc_box" v-for="(i1,indexi) in xxk" :key="indexi"> 
                        <ul class="yc_uls" v-for="(n1,indexc) in i1.box" :key="indexc">
                            <li class="yc_lis" v-for="(item,indexb) in n1.uls" :key="indexb">
                                <a href="##">
                                    <img :src="item.srcs" />
                                    <span class="text">{{item.text}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 四个图片 -->
            <div class="four">
                <div class="liu">
                    <ul class="liu_ul">
                        <li class="liu_li" v-for="(i,indexk) in four" :key="indexk">
                            <a>
                                <img :src="i.srcs" />
                                {{i.txt}}
                            </a>
                        </li>
                    </ul>
                </div>
                <ul class="three">
                    <li v-for="(i,indexp) in three" :key="indexp">
                        <a href="##"><img :src="i.srcs" /></a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 中心内容模块2 -->
        <div class="center_box2">
            <div class="clear_float"></div>
            <div class="center2">
                <!-- 六个盒子的div -->
                <div class="big_div">
                    <div class="bigdivs" v-for="(i,po1) in big" :key="po1">
                        <!-- 横条图片 -->
                        <div class="hengtiao">
                            <a class="ht_img" href="##">
                                <img :src="i.pic" />
                            </a>
                        </div>
                        <!-- 标题文字 -->
                        <div class="biaotis">
                            <h2 class="bt_left">{{i.name}}</h2>
                            <ul class="more">
                                <li class="gg" v-for="(j,po2) in i.uls" :key="po2">{{j.lis}}</li>
                            </ul>
                        </div>
                        <!-- 八张图片盒子 -->
                        <div class="bbox1">
                            <div class="left_tu">
                                <ul class="left_uls">
                                    <li class="left_lis" v-for="(n,po3) in i.lefts" :key="po3">
                                        <a href="##">
                                            <img :src="n.pic" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="right_boxs">
                                <div class="rigbox" v-for="(o,po4) in i.rights" :key="po4">
                                    <ul class="riguls">
                                        <li class="riglis" v-for="(k,po5) in o.rig" :key="po5">
                                            <a href="##">
                                                <div>
                                                    <img :src="k.pic" />
                                                </div>
                                                <p class="nichen">{{k.nis}}</p>
                                                <p class="jieshao">{{k.jies}}</p>
                                                <p class="jiage">
                                                    <span class="maney">{{k.mans}}</span>
                                                    <del>
                                                        <span class="maney1">{{k.mans1}}</span>
                                                    </del>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="riglis0" v-for="(m,po6) in o.rig0" :key="po6.aa">
                                            <div class="xbox1">
                                                <a href="##" class="xbox1_a">
                                                    <div class="xbox1_div1">
                                                        <img :src="m.src1" />
                                                    </div>
                                                    <h3>{{m.h3}}</h3>
                                                    <span class="yuanq">{{m.yuan}}</span>
                                                </a>
                                            </div>
                                            <div class="xbox2">
                                                <a href="##" class="xbox2_a">
                                                    <div class="jiant">
                                                        <img :src="m.src2" />
                                                    </div>
                                                    <div class="morep">
                                                        {{m.more0}}<br />
                                                        <span>{{m.span}}</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 最后一个图片 -->
                <div class="juneng">
                    <a href="##" v-for="(aa,ll1) in ju" :key="ll1">
                        <img :src="aa.src" />
                    </a>
                </div>
                <div class="xinzeng">
                    <h2 class="xz_h">视频</h2>
                    <a href="##" class="xz_a">
                        查看全部>>
                    </a>
                </div>
                <!-- 视频 -->
                <div class="sp_box">
                    <ul class="sp_uls">
                        <li class="sp_li" v-for="(sp1,dec) in sp" :key="dec">
                            <a href="##" class="sp_a bof1" title="点击播放视频">
                                <div class="ship">
                                    <img :src="sp1.srcs" />
                                    <span class="bofang">
                                        <span></span>
                                    </span>
                                </div>
                                <h3 class="timu">{{sp1.timus}}</h3>
                                <p class="desc">{{sp1.desc}}</p>
                            </a>
                        </li>
                    </ul>
                    <div class="fuji">
                        <div class="sp_kuang1" v-for="(bf,dec1) in pofang" :key="dec1">
                            <div class="header_bt">
                                <span>{{bf.spans}}</span>
                            </div>
                            <a href="##" class="close">{{bf.closes}}</a>
                            <div class="luxiang1">
                                <video class="video_1" :src="bf.videos" autoplay controls muted></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {realconsole1} from "./assets/js/home.js"
export default{
    data(){
        return{
            arrList:[
                {"id":1,"name":"小米手机",imgarr:[
                    {"id":1,"srcs":"./src/assets/img/xm_1100002915.png","title":"小米手机","price":"9999元起"},
                    {"id":2,"srcs":"./src/assets/img/xm_1100002916.png","title":"小米11 Ultra","price":"5499元起"},
                    {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","title":"小米11 Pro","price":"4499元起"},
                    {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","title":"小米11 青春版","price":"2099元起"},
                    {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","title":"小米10S","price":"2999元起"},
                    {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","title":"小米11","price":"3799元起"}
                    ]
                },
                {"id":2,"name":"Redmi 红米",imgarr:[
                    {"id":1,"srcs":"./src/assets/img/xm_1100002921.png","title":"小米手机","price":"9999元起"},
                    {"id":2,"srcs":"./src/assets/img/xm_1100002922.png","title":"小米11 Ultra","price":"5499元起"},
                    {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","title":"小米11 Pro","price":"4499元起"},
                    {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","title":"小米11 青春版","price":"2099元起"},
                    {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","title":"小米10S","price":"2999元起"},
                    {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","title":"小米11","price":"3799元起"}
                    ]
                },
                {"id":3,"name":"电视",imgarr:[
                    {"id":1,"srcs":"./src/assets/img/xm_1100002928.png","title":"小米手机","price":"9999元起"},
                    {"id":2,"srcs":"./src/assets/img/xm_1100002929.png","title":"小米11 Ultra","price":"5499元起"},
                    {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","title":"小米11 Pro","price":"4499元起"},
                    {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","title":"小米11 青春版","price":"2099元起"},
                    {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","title":"小米10S","price":"2999元起"},
                    {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","title":"小米11","price":"3799元起"}
                    ]
                },
                {"id":4,"name":"笔记本",imgarr:[
                    {"id":1,"srcs":"./src/assets/img/xm_1100002934.png","title":"小米手机","price":"9999元起"},
                    {"id":2,"srcs":"./src/assets/img/xm_1100002935.jpg","title":"小米11 Ultra","price":"5499元起"},
                    {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","title":"小米11 Pro","price":"4499元起"},
                    {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","title":"小米11 青春版","price":"2099元起"},
                    {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","title":"小米10S","price":"2999元起"},
                    {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","title":"小米11","price":"3799元起"}
                    ]
                },
                {"id":5,"name":"家电",imgarr:[
                    {"id":1,"srcs":"./src/assets/img/xm_1100003186.jpg","title":"小米手机","price":"9999元起"},
                    {"id":2,"srcs":"./src/assets/img/xm_1100002916.png","title":"小米11 Ultra","price":"5499元起"},
                    {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","title":"小米11 Pro","price":"4499元起"},
                    {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","title":"小米11 青春版","price":"2099元起"},
                    {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","title":"小米10S","price":"2999元起"},
                    {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","title":"小米11","price":"3799元起"}
                    ]
                },
                {"id":6,"name":"路由器",imgarr:[
                    {"id":1,"srcs":"./src/assets/img/xm_1100003192.png","title":"小米手机","price":"9999元起"},
                    {"id":2,"srcs":"./src/assets/img/xm_1100002916.png","title":"小米11 Ultra","price":"5499元起"},
                    {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","title":"小米11 Pro","price":"4499元起"},
                    {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","title":"小米11 青春版","price":"2099元起"},
                    {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","title":"小米10S","price":"2999元起"},
                    {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","title":"小米11","price":"3799元起"}
                    ]
                },
                {"id":7,"name":"智能硬件",imgarr:[
                    {"id":1,"srcs":"./src/assets/img/xm_1100003198.png","title":"小米手机","price":"9999元起"},
                    {"id":2,"srcs":"./src/assets/img/xm_1100002916.png","title":"小米11 Ultra","price":"5499元起"},
                    {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","title":"小米11 Pro","price":"4499元起"},
                    {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","title":"小米11 青春版","price":"2099元起"},
                    {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","title":"小米10S","price":"2999元起"},
                    {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","title":"小米11","price":"3799元起"}
                    ]
                },
                {"id":8,"name":"服务"
                },
                {"id":9,"name":"社区"
                },
            ],
            list1:[
                {"id":1,"as":"全部商品"},
                {"id":2,"as":"空调"},
                {"id":3,"as":"小米11"},
                {"id":4,"as":"小米手机"},
                {"id":5,"as":"红米"},
                {"id":6,"as":"小米10"},
                {"id":7,"as":"黑鲨4"}
            ],
            list2:[
                {"id":1,"imgs":"./src/assets/img/xm_1100000222.jpg"},
                {"id":2,"imgs":"./src/assets/img/xm_1100000218.webp"},
                {"id":3,"imgs":"./src/assets/img/xm_1100000219.webp"},
                {"id":4,"imgs":"./src/assets/img/xm_1100000220.webp"},
                {"id":5,"imgs":"./src/assets/img/xm_1100000221.webp"}
            ],
            list3:[
                {"id":1,"wenzi":"手机 电话卡","jiantou":">"},
                {"id":2,"wenzi":"电视 盒子","jiantou":">"},
                {"id":3,"wenzi":"笔记本 显示器","jiantou":">"},
                {"id":4,"wenzi":"家电 插线板","jiantou":">"},
                {"id":5,"wenzi":"出行 穿戴","jiantou":">"},
                {"id":6,"wenzi":"智能 路由器","jiantou":">"},
                {"id":7,"wenzi":"电源 配件","jiantou":">"},
                {"id":8,"wenzi":"健康 儿童","jiantou":">"},
                {"id":9,"wenzi":"耳机 音箱","jiantou":">"},
                {"id":10,"wenzi":"生活 箱包","jiantou":">"}
            ],
            xxk:[
                {box:[
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002915.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002916.png","text":"小米11 Ultra"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","text":"小米11 Pro"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","text":"小米11 青春"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","text":"小米10S"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","text":"小米11"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002921.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002922.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002923.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002924.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002925.jpg","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002926.jpg","text":"小米MIX FOLD"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002927.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002928.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002929.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002930.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002931.png","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002932.png","text":"小米MIX FOLD"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002933.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002934.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002935.jpg","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002936.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002937.png","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002938.png","text":"小米MIX FOLD"}
                    ]},
                    ],
                },
                // 2
                {box:[
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002921.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002922.png","text":"小米11 Ultra"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002924.png","text":"小米11 Pro"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002925.jpg","text":"小米11 青春"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","text":"小米10S"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","text":"小米11"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002927.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002928.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002923.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002924.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002925.jpg","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002926.jpg","text":"小米MIX FOLD"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002927.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002928.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002929.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002930.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002931.png","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002932.png","text":"小米MIX FOLD"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002933.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002934.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002935.jpg","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002936.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002937.png","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002938.png","text":"小米MIX FOLD"}
                    ]},
                    ],
                },
                // 3
                {box:[
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002963.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002964.png","text":"小米11 Ultra"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","text":"小米11 Pro"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","text":"小米11 青春"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","text":"小米10S"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","text":"小米11"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002971.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002922.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002923.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002924.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002924.png","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002926.jpg","text":"小米MIX FOLD"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002927.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002928.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002929.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002930.png","text":"小米MIX FOLD"}
                    ]}
                    ],
                },
                // 4
                {box:[
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002915.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002916.png","text":"小米11 Ultra"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","text":"小米11 Pro"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","text":"小米11 青春"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","text":"小米10S"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","text":"小米11"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002921.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002922.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002923.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002924.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002925.jpg","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002926.jpg","text":"小米MIX FOLD"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002927.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002928.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002929.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002930.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002931.png","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002932.png","text":"小米MIX FOLD"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002933.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002934.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002935.jpg","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002936.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002937.png","text":"小米MIX FOLD"}
                    ]},
                    ],
                },
                // 5
                {box:[
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002998.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100003000.png","text":"小米11 Ultra"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","text":"小米11 Pro"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","text":"小米11 青春"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","text":"小米10S"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","text":"小米11"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100003019.jpg","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002922.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002923.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002924.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002925.jpg","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002926.jpg","text":"小米MIX FOLD"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100003025.jpg","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002928.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002929.png","text":"小米MIX FOLD"}
                    ]}
                    ],
                },
                // 6
                {box:[
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100003013.jpg","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100003014.png","text":"小米11 Ultra"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","text":"小米11 Pro"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","text":"小米11 青春"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","text":"小米10S"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","text":"小米11"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100003019.jpg","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100003020.jpg","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002923.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002924.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002925.jpg","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002926.jpg","text":"小米MIX FOLD"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002927.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002928.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002929.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002930.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002931.png","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002932.png","text":"小米MIX FOLD"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002933.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002934.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002935.jpg","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002936.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002937.png","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002938.png","text":"小米MIX FOLD"}
                    ]},
                    ],
                },
                // 7
                {box:[
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100003028.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002916.png","text":"小米11 Ultra"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","text":"小米11 Pro"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","text":"小米11 青春"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","text":"小米10S"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","text":"小米11"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100003046.jpg","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002922.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002923.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002924.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002925.jpg","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002926.jpg","text":"小米MIX FOLD"}
                    ]}
                    ],
                },
                // 8
                {box:[
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002915.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002916.png","text":"小米11 Ultra"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","text":"小米11 Pro"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","text":"小米11 青春"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","text":"小米10S"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","text":"小米11"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002921.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002922.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002923.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002924.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002925.jpg","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002926.jpg","text":"小米MIX FOLD"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002927.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002928.png","text":"小米MIX FOLD"}
                    ]}
                    ],
                },
                // 9
                {box:[
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002915.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002916.png","text":"小米11 Ultra"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","text":"小米11 Pro"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","text":"小米11 青春"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","text":"小米10S"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","text":"小米11"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002921.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002922.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002923.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002924.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002925.jpg","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002926.jpg","text":"小米MIX FOLD"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002927.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002928.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002929.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002930.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002931.png","text":"小米MIX FOLD"}
                    ]}
                    ],
                },
                // 10
                {box:[
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002915.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002916.png","text":"小米11 Ultra"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002917.png","text":"小米11 Pro"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002918.png","text":"小米11 青春"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002919.png","text":"小米10S"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002920.png","text":"小米11"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002921.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002922.png","text":"小米MIX FOLD"},
                        {"id":3,"srcs":"./src/assets/img/xm_1100002923.png","text":"小米MIX FOLD"},
                        {"id":4,"srcs":"./src/assets/img/xm_1100002924.png","text":"小米MIX FOLD"},
                        {"id":5,"srcs":"./src/assets/img/xm_1100002925.jpg","text":"小米MIX FOLD"},
                        {"id":6,"srcs":"./src/assets/img/xm_1100002926.jpg","text":"小米MIX FOLD"}
                    ]},
                    {uls:[
                        {"id":1,"srcs":"./src/assets/img/xm_1100002927.png","text":"小米MIX FOLD"},
                        {"id":2,"srcs":"./src/assets/img/xm_1100002928.png","text":"小米MIX FOLD"},
                    ]}
                    ],
                }
            ],
            four:[
                {"id":1,"srcs":"./src/assets/img/xm_1100000223.png","txt":"小米秒杀"},
                {"id":2,"srcs":"./src/assets/img/xm_1100000224.png","txt":"企业团购"},
                {"id":3,"srcs":"./src/assets/img/xm_1100000225.png","txt":"F码通道"},
                {"id":4,"srcs":"./src/assets/img/xm_1100000226.png","txt":"米粉卡"},
                {"id":5,"srcs":"./src/assets/img/xm_1100000227.png","txt":"以旧换新"},
                {"id":6,"srcs":"./src/assets/img/xm_1100000228.png","txt":"话费充值"}
            ],
            three:[
                {"id":1,"srcs":"./src/assets/img/xm_1100000229.jpg"},
                {"id":2,"srcs":"./src/assets/img/xm_1100000230.jpg"},
                {"id":3,"srcs":"./src/assets/img/xm_1100000231.png"}
            ],
            big:[
                {"id":1,"pic":"./src/assets/img/xm_1100003027.webp","name":"手机",uls:[{"id":1,"lis":"查看更多>>"}
                    ],lefts:[
                    {"id":1,"pic":"./src/assets/img/xm_1100003030.webp"}
                    ],rights:[
                        {"id":1,rig:[
                            {"id":1,"pic":"./src/assets/img/xm_1100003031.webp","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"./src/assets/img/xm_1100003032.webp","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"./src/assets/img/xm_1100003033.webp","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"./src/assets/img/xm_1100003034.webp","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"./src/assets/img/xm_1100003050.webp","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"./src/assets/img/xm_1100003048.webp","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"./src/assets/img/xm_1100003051.webp","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""},
                            {"id":8,"pic":"./src/assets/img/xm_1100003052.webp","nis":"黑鲨4 Pro","jies":"黑鲨4 Pro","mans":"3999元起","mans1":""}
                        ],rig0:[
                            {"id":1,"src1":"./src/assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"./src/assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                        }
                    ]
                },
                {"id":2,"pic":"./src/assets/img/xm_1100003053.webp","name":"家电",uls:[{"id":1,"lis":"热门"},{"id":2,"lis":"电视影音"}
                    ],lefts:[
                    {"id":1,"pic":"./src/assets/img/xm_1100003063.webp"},{"id":2,"pic":"./src/assets/img/xm_1100003064.webp"}
                    ],rights:[
                        {"id":1,rig:[
                            {"id":1,"pic":"./src/assets/img/xm_1100002948.png","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"./src/assets/img/xm_1100002949.png","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"./src/assets/img/xm_1100002958.png","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"./src/assets/img/xm_1100002976.jpg","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"./src/assets/img/xm_1100002980.jpg","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"./src/assets/img/xm_100000019321.jpg","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"./src/assets/img/xm_1100002983.jpg","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],rig0:[
                            {"id":1,"src1":"./src/assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"./src/assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                        },
                        {"id":2,rig:[
                            {"id":1,"pic":"./src/assets/img/xm_1100003032.webp","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"./src/assets/img/xm_1100003032.webp","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"./src/assets/img/xm_1100003033.webp","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"./src/assets/img/xm_1100003034.webp","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"./src/assets/img/xm_1100003050.webp","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"./src/assets/img/xm_1100003048.webp","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"./src/assets/img/xm_1100003051.webp","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],rig0:[
                            {"id":1,"src1":"./src/assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"./src/assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                        }
                    ]
                },
                {"id":3,"pic":"./src/assets/img/xm_1100003053.webp","name":"智能",uls:[{"id":1,"lis":"热门"},{"id":2,"lis":"安防"},{"id":3,"lis":"出行"}
                    ],lefts:[
                    {"id":1,"pic":"./src/assets/img/xm_1100003086.webp"},{"id":2,"pic":"./src/assets/img/xm_1100003087.webp"}
                    ],rights:[
                        {"id":1,rig:[
                            {"id":1,"pic":"./src/assets/img/xm_1100002948.png","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"./src/assets/img/xm_1100002949.png","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"./src/assets/img/xm_1100002958.png","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"./src/assets/img/xm_1100002976.jpg","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"./src/assets/img/xm_1100002980.jpg","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"./src/assets/img/xm_100000019321.jpg","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"./src/assets/img/xm_1100002983.jpg","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],rig0:[
                            {"id":1,"src1":"./src/assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"./src/assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                        },
                        {"id":2,rig:[
                            {"id":1,"pic":"./src/assets/img/xm_1100003032.webp","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"./src/assets/img/xm_1100003032.webp","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"./src/assets/img/xm_1100003033.webp","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"./src/assets/img/xm_1100003034.webp","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"./src/assets/img/xm_1100003050.webp","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"./src/assets/img/xm_1100003048.webp","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"./src/assets/img/xm_1100003051.webp","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],rig0:[
                            {"id":1,"src1":"./src/assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"./src/assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                        },
                        {"id":3,rig:[
                            {"id":1,"pic":"./src/assets/img/xm_1100002948.png","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"./src/assets/img/xm_1100002949.png","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"./src/assets/img/xm_1100002958.png","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"./src/assets/img/xm_1100002976.jpg","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"./src/assets/img/xm_1100002980.jpg","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"./src/assets/img/xm_100000019321.jpg","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"./src/assets/img/xm_1100002983.jpg","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],rig0:[
                            {"id":1,"src1":"./src/assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"./src/assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                        }
                    ]
                },
                {"id":4,"pic":"./src/assets/img/xm_1100003053.webp","name":"搭配",uls:[{"id":1,"lis":"热门"},{"id":2,"lis":"耳机音箱"}
                    ],lefts:[
                    {"id":1,"pic":"./src/assets/img/xm_1100003107.webp"},{"id":2,"pic":"./src/assets/img/xm_1100003108.webp"}
                    ],rights:[
                        {"id":1,rig:[
                            {"id":1,"pic":"./src/assets/img/xm_1100002948.png","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"./src/assets/img/xm_1100002949.png","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"./src/assets/img/xm_1100002958.png","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"./src/assets/img/xm_1100002976.jpg","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"./src/assets/img/xm_1100002980.jpg","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"./src/assets/img/xm_100000019321.jpg","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"./src/assets/img/xm_1100002983.jpg","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],rig0:[
                            {"id":1,"src1":"./src/assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"./src/assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                        },
                        {"id":2,rig:[
                            {"id":1,"pic":"./src/assets/img/xm_1100003032.webp","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"./src/assets/img/xm_1100003032.webp","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"./src/assets/img/xm_1100003033.webp","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"./src/assets/img/xm_1100003034.webp","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"./src/assets/img/xm_1100003050.webp","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"./src/assets/img/xm_1100003048.webp","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"./src/assets/img/xm_1100003051.webp","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],rig0:[
                            {"id":1,"src1":"./src/assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"./src/assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                        }
                    ]
                },
                {"id":5,"pic":"./src/assets/img/xm_1100003053.webp","name":"配件",uls:[{"id":1,"lis":"热门"},{"id":2,"lis":"充电器"}
                    ],lefts:[
                    {"id":1,"pic":"./src/assets/img/xm_1100003135.webp"},{"id":2,"pic":"./src/assets/img/xm_1100003136.webp"}
                    ],rights:[
                        {"id":1,rig:[
                            {"id":1,"pic":"./src/assets/img/xm_1100002948.png","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"./src/assets/img/xm_1100002949.png","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"./src/assets/img/xm_1100002958.png","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"./src/assets/img/xm_1100002976.jpg","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"./src/assets/img/xm_1100002980.jpg","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"./src/assets/img/xm_100000019321.jpg","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"./src/assets/img/xm_1100002983.jpg","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],rig0:[
                            {"id":1,"src1":"./src/assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"./src/assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                        },
                        {"id":2,rig:[
                            {"id":1,"pic":"./src/assets/img/xm_1100003032.webp","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"./src/assets/img/xm_1100003032.webp","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"./src/assets/img/xm_1100003033.webp","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"./src/assets/img/xm_1100003034.webp","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"./src/assets/img/xm_1100003050.webp","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"./src/assets/img/xm_1100003048.webp","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"./src/assets/img/xm_1100003051.webp","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],rig0:[
                            {"id":1,"src1":"./src/assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"./src/assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                        }
                    ]
                },
                {"id":6,"pic":"./src/assets/img/xm_1100003053.webp","name":"周边",uls:[{"id":1,"lis":"热门"},{"id":2,"lis":"出行"}
                    ],lefts:[
                    {"id":1,"pic":"./src/assets/img/xm_1100003150.webp"},{"id":2,"pic":"./src/assets/img/xm_1100003151.webp"}
                    ],rights:[
                        {"id":1,rig:[
                            {"id":1,"pic":"./src/assets/img/xm_1100002948.png","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"./src/assets/img/xm_1100002949.png","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"./src/assets/img/xm_1100002958.png","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"./src/assets/img/xm_1100002976.jpg","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"./src/assets/img/xm_1100002980.jpg","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"./src/assets/img/xm_100000019321.jpg","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"./src/assets/img/xm_1100002983.jpg","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],rig0:[
                            {"id":1,"src1":"./src/assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"./src/assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                        },
                        {"id":2,rig:[
                            {"id":1,"pic":"./src/assets/img/xm_1100003032.webp","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"./src/assets/img/xm_1100003032.webp","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"./src/assets/img/xm_1100003033.webp","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"./src/assets/img/xm_1100003034.webp","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"./src/assets/img/xm_1100003050.webp","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"./src/assets/img/xm_1100003048.webp","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"./src/assets/img/xm_1100003051.webp","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],rig0:[
                            {"id":1,"src1":"./src/assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"./src/assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                        }
                    ]
                }
            ],
            ju:[
                {"id":1,"src":"./src/assets/img/xm_1100003168.webp","bti":"视频","bta":"查看全部>>"}
            ],
            sp:[
                {"id":1,"srcs":"./src/assets/img/xm_100000022284.jpg","timus":"2021年春季新品发布会第一场","desc":""},
                {"id":2,"srcs":"./src/assets/img/xm_100000022283.jpg","timus":"Redmi 10X系列发布会","desc":"Redmi 10X系列发布会"},
                {"id":3,"srcs":"./src/assets/img/xm_100000022282.jpg","timus":"小米10 青春版 发布会","desc":""},
                {"id":4,"srcs":"./src/assets/img/xm_100000022281.jpg","timus":"小米10 8K手机拍大片","desc":""}
            ],
            pofang:[
                {"id":1,"spans":"2021年春季新品发布会第一场","closes":"×","videos":"./src/assets/video/video4.mp4"},
                {"id":2,"spans":"2021年春季新品发布会第一场","closes":"×","videos":"./src/assets/video/video4.mp4"},
                {"id":3,"spans":"2021年春季新品发布会第一场","closes":"×","videos":"./src/assets/video/video4.mp4"},
                {"id":4,"spans":"2021年春季新品发布会第一场","closes":"×","videos":"./src/assets/video/video4.mp4"}
            ]
        }
    },
    mounted(){

    },
    methods:{
        methods1(){
            realconsole1()
        }
    }
}
</script>
<style>
 @import url(./assets/css/home.css);
</style>
