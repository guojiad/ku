<template>
    <div class="navh">
        导航部分
        <br/>
        <a href="##" @click="prev()" class="brink">返回上一页</a>
        <!-- 返回首页，不管在何处，都直接返回到首页 -->
        <!-- <router-link to="/">返回首页</router-link> -->
    </div>
</template>
<script>
export default {
    data() {
        return{
            isShow:false,
        }
    },
    methods:{
        prev(){
            this.$router.go(-1)
        }
    }   
}
</script>
<style>
.nav{font-size: 18px;color: #333;}
.brink{width: 20px;height: 20px;background: orangered;color: #fff;font-size: 14px;}
</style>