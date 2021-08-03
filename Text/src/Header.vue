<template>
    <div id="header">
        <div class="nav">
            <ul class="uls">
                <router-link to="/navh" class="luyou1">
                    <li v-for="(item,index) in listData" :key="index">
                        <a href="##">{{item.title}}</a>
                        <span class="gang">{{item.shugang}}</span>
                        <span class="yincang">
                            <div class="sanjiao1"></div>
                            <img src="./assets/img/xm_1100000000.png"/>
                            小米商城APP
                        </span>
                    </li>
                </router-link>
            </ul>
            <div class="nav_2">
                <a href="##" class="to2_a">
                    <span class="gwc">
                        <img src="./assets/img/xm_1100000358.png" class="img1" />
                    </span>
                    <span class="gwcz">购物车</span>
                    <span class="ling">（0）</span>
                </a>
                <div class="kuang">购物车中还没有商品，赶紧选购吧！</div>
            </div>
            <ul class="nav_3">
                <li v-for="(item,index) in listData1" :key="index">
                    <a href="##">{{item.title1}}</a>
                    <span class="shugang1">{{item.shugang1}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {realconsole1} from "./assets/js/home.js"
    export default{
        data(){
            return{
                listData:[],
                listData1:[
                    {
                        "id":1,
                        "title1":"登录",
                        "shugang1":"|"
                    },
                    {
                        "id":2,
                        "title1":"注册",
                        "shugang1":"|"
                    },
                    {
                        "id":3,
                        "title1":"消息通知"
                    }
                ]
            }
        },
        mounted(){
            this.getData()           
        },
        methods:{             
            getData(){
                var _this = this
                this.$http.get("src/data/header.data").then(function(res){
                    // res返回的是请求成功之后的所有数据信息
                    // console.log(res)
                    // console.log(res.data)
                    _this.listData=res.data
                    console.log(_this.listData)
                }).catch(function(error){
                    console.log(error)
                })
            },
            methods1(){
                realconsole1()
            }
        }
    }
</script>
<style>
 @import url(./assets/css/header.css);
</style>