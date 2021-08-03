<template>
    <div id="footer">
        <!-- 中心内容模块3 -->
        <div class="center_box3">
            <div class="end1">
                <div class="end1_center">
                    <div class="end1_div1">
                        <ul class="end1_ul1">
                            <li class="end1_li1" v-for="(i,index) in c1" :key="index">
                                <a href="##">{{i.as}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="end1_div2">
                        <dl class="end1_dl" v-for="(i1,index1) in c2" :key="index1">
                            <dt>{{i1.dts}}</dt>
                            <div class="sbla" v-for="(i2,index2) in i1.list" :key="index2">
                                <!-- <dt>{{i1.dts}}</dt> -->
                                <dd class="marg_top">
                                    <a href="##">{{i2.oas}}</a>
                                </dd>
                            </div>
                        </dl>
                        <div class="dd_box1" v-for="(i3,index3) in c3">
                            <p class="dd_p1">{{i3.p1}}</p>
                            <p class="dd_p2">{{i3.p2}}</p>
                            <a class="dd_a1" href="##">{{i3.a1s}}</a>
                            <div class="dd_box11">
                                {{i3.box}}
                                <a href="##">
                                    <img :src="i3.src1" class="vb" />
                                </a>
                                <a href="##">
                                    <img :src="i3.src2" class="vx"/>
                                </a>
                                <div class="vx_box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 最后一段文字 -->
            <div class="end2">
                <div class="end2_center">
                    <div class="end2_box1"></div>
                    <div class="end2_box2">
                        <p class="end2_p1">
                            <span v-for="(xx1,ixx1) in end1" :key="ixx1">
                                <a href="##">{{xx1.aas}}</a>
                                <span class="end2_gang">{{xx1.gang}}</span>
                            </span>
                        </p>
                        <p class="end2_p2">
                            <span v-for="(xx2,ixx2) in end2" :key="ixx2">
                                <a href="##">{{xx2.aas}}</a>
                                <span class="end2_gang">{{xx2.gang}}</span>
                            </span>
                        </p>
                        <p class="end2_p3">
                            <span v-for="(xx31,ixx31) in end31" :key="ixx31">
                                {{xx31.aite}}
                                <a href="##">{{xx31.a}}</a>
                                {{xx31.span}}
                            </span>
                            <a href="##" v-for="(xx32,ixx32) in end32" >{{xx32.oas2}}</a>
                            <br />
                            <a href="##" v-for="(xx33,ixx33) in end33" >{{xx33.oas3}}</a>
                            <br />
                            <span v-for="(xx34,ixx34) in end34" >
                                <a href="##">{{xx34.oas4}}</a>
                                &nbsp; {{xx34.kg}} &nbsp;
                            </span>
                            <br />
                            <span v-for="(xx35,ixx35) in end35">
                                {{xx35.kg1}}&nbsp;
                                <a href="##">{{xx35.oas5}}</a>
                               &nbsp;{{xx35.kg2}}
                            </span>
                        </p>
                    </div>
                    <div class="end2_box3">
                       <span v-for="(xx4,ixx4) in end4" :key="ixx4">
                            <a href="##">
                                <img :src="xx4.srcs" />
                            </a>
                       </span>
                    </div>
                </div>
                <div class="hou"></div>
            </div>
        </div>
        <!-- 侧边导航 -->
        <div class="right_box">
            <div class="item" v-for="(dh1,dh) in daohang1" :key="dh">
                <img :src="dh1.imgs" class="first" />
                <p>{{dh1.ops}}</p>
            </div>
            <div class="nav_yc" v-for="(dh2,dh0) in daohang2">
                <div class="nav_sj"></div>
                <img :src="dh2.img" />
                <span>{{dh2.span}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import {realconsole1} from "./assets/js/home.js"
export default{
    data(){
        return{
            c1:[
                {"id":1,"as":"预约维修服务"},
                {"id":2,"as":"7天无理由退货"},
                {"id":3,"as":"15天免费换货"},
                {"id":4,"as":"满69包邮"},
                {"id":5,"as":"520余家售后网点"}
            ],
            c2:[
                {"id":1,"dts":"帮助中心",list:[
                    {"id":1,"oas":"账户管理"},
                    {"id":2,"oas":"购物指南"},
                    {"id":3,"oas":"订单操作"}
                    ]
                },
                {"id":2,"dts":"服务支持",list:[
                    {"id":1,"oas":"售后政策"},
                    {"id":2,"oas":"自助服务"},
                    {"id":3,"oas":"相关下载"}
                    ]
                },
                {"id":3,"dts":"线下门店",list:[
                    {"id":1,"oas":"小米之家"},
                    {"id":2,"oas":"服务网点"},
                    {"id":3,"oas":"授权体验店"}
                    ]
                },
                {"id":4,"dts":"关于小米",list:[
                    {"id":1,"oas":"了解小米"},
                    {"id":2,"oas":"加入小米"},
                    {"id":3,"oas":"投资者关系"},
                    {"id":4,"oas":"企业社会责任"},
                    {"id":5,"oas":"廉洁举报"}
                    ]
                },
                {"id":5,"dts":"关注我们",list:[
                    {"id":1,"oas":"新浪微博"},
                    {"id":2,"oas":"官方微信"},
                    {"id":3,"oas":"联系我们"},
                    {"id":4,"oas":"公益基金会"}
                    ]
                },
                {"id":6,"dts":"特色服务",list:[
                    {"id":1,"oas":"F 码通道"},
                    {"id":2,"oas":"礼物码"},
                    {"id":3,"oas":"防伪查询"}
                    ]
                },
            ],
            c3:[
                {"id":1,"p1":"400-100-5678","p2":"8:00-18:00（仅收市话费）","a1s":"人工客服","box":"关注小米：","src1":"./src/assets/img/xm_1100000482.png","src2":"./src/assets/img/xm_1100000483.png"}
            ],
            end1:[
                {"id":1,"aas":"小米商城","gang":"|"},
                {"id":2,"aas":"MIUI","gang":"|"},
                {"id":3,"aas":"米家","gang":"|"},
                {"id":4,"aas":"米聊","gang":"|"},
                {"id":5,"aas":"多看","gang":"|"},
                {"id":6,"aas":"游戏","gang":"|"},
                {"id":7,"aas":"政企服务","gang":"|"},
                {"id":8,"aas":"小米天猫店","gang":"|"},
                {"id":9,"aas":"小米集团隐私政策","gang":"|"},
                {"id":10,"aas":"小米公司儿童信息保护规则","gang":"|"},
                {"id":11,"aas":"小米商城隐私政策","gang":"|"},
                {"id":12,"aas":"小米商城用户协议","gang":"|"},
                {"id":13,"aas":"问题反馈","gang":"|"},
                {"id":14,"aas":"Select Location","gang":""},
            ],
            end2:[
                {"id":1,"aas":"北京互联网法院法律服务工作站","gang":"|"},
                {"id":2,"aas":"中国消费者协会","gang":"|"},
                {"id":3,"aas":"北京市消费者协会","gang":""}
            ],
            end31:[
                {"id":1,"aite":"©","a":"mi.com","span":"京ICP证110507号"}
            ],
            end32:[
                {"id":1,"oas2":"京ICP备10046444号"},
                {"id":2,"oas2":"京公网安备11010802020134号"},
                {"id":3,"oas2":"京网文[2020]0276-042号"},
            ],
            end33:[
                {"id":1,"oas3":"（京）网械平台备字（2018）第00005号"},
                {"id":2,"oas3":"互联网药品信息服务资格证 (京)-非经营性-2014-0090"},
                {"id":3,"oas3":"营业执照"},
                {"id":4,"oas3":"医疗器械质量公告"}
            ],
            end34:[
                {"id":1,"oas4":"增值电信业务许可证","kg":"网络食品经营备案 京食药网食备202010048 "},
                {"id":2,"oas4":"食品经营许可证","kg":""}
            ],
            end35:[
                {"id":1,"kg1":"违法和不良信息举报电话：171-5104-4404","oas5":"知识产权侵权投诉","kg2":"本网站所列数据，除特殊说明，所有数据均出自我司实验室测试"}
            ],
            end4:[
                {"id":1,"srcs":"./src/assets/img/xm_1100000343.png"},
                {"id":2,"srcs":"./src/assets/img/xm_1100000344.png"},
                {"id":3,"srcs":"./src/assets/img/xm_1100000345.png"},
                {"id":4,"srcs":"./src/assets/img/xm_1100000346.png"},
                {"id":5,"srcs":"./src/assets/img/xm_1100000347.png"},
            ],
            daohang1:[
                {"id":1,"imgs":"./src/assets/img/xm_1100000349.png","ops":"手机APP"},
                {"id":2,"imgs":"./src/assets/img/xm_1100000352.png","ops":"个人中心"},
                {"id":3,"imgs":"./src/assets/img/xm_1100000354.png","ops":"售后服务"},
                {"id":4,"imgs":"./src/assets/img/xm_1100000356.png","ops":"人工客服"},
                {"id":5,"imgs":"./src/assets/img/xm_1100000358.png","ops":"购物车"},
                {"id":6,"imgs":"./src/assets/img/top1.png","ops":"回顶部"}
            ],
            daohang2:[
                {"id":1,"img":"./src/assets/img/xm_1100000342.png","span":"扫码领取新人百元礼包"}
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
 @import url(./assets/css/footer.css);
</style>
