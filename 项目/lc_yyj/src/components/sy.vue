<template>
  <div class="aspectratio">
  <div class="aspectratio-content">
<div class="main">
<div class="main1">
<div class="main2"><img src="../assets/bg19.gif" width="100%"></div>
<div class="main3"><img src="../assets/bg20.gif" width="100%"></div>
</div>
    <Carousel autoplay v-model="value2" loop>
      <div v-for="i in srca">
        <CarouselItem>
            <div class="demo-carousel"><img :src="i.src"></div>
        </CarouselItem>
      </div>
    </Carousel>
  <div class="main5">
  <div class="main4">
    <router-link to="dsq" style="padding-top: 10px;  text-align: center;"><img src="../assets/bg21.gif" width="100%"/>单身期</router-link>
    <router-link to="zqq" style="padding-left: 50px;padding-top: 10px;  text-align: center;"><img src="../assets/bg22.gif" width="100%"/>追求期</router-link>
    <router-link to="zqq" style="padding-left: 50px;padding-top: 10px;  text-align: center;"><img src="../assets/bg23.gif" width="100%"/>热恋期</router-link>
    <router-link to="zqq" style="padding-left: 50px;padding-top: 10px;  text-align: center;"><img src="../assets/bg24.gif" width="100%"/>失恋期</router-link>
    <router-link to="zqq" style="padding-left: 50px; padding-top: 10px;  text-align: center;"><img src="../assets/bg25.gif" width="100%"/>婚后期</router-link>
  </div>
  </div>
  <div style="width: 750px;display: flex">
    <div style="width: 500px;margin-top: 20px;">精选推荐</div>
    <div style="  width: 50px;color:#999999;margin-top: 20px;margin-left: 100px;"><img src="../assets/bg26.gif" width="100%"/></div>
    <div style="width: 100px;color:#999999;margin-top: 20px;">换一批</div>
  </div>
  <div v-for="i in srca">
<div style="width: 750px;display: flex">
      <div style="width: 500px;"></div>
  </div>
  </div>
  <div style="width: 750px;margin: 0 auto;display: flex">
    <div class="main10"><router-link to="jxtj"><img src="../assets/bg27.gif" width="100px;"/>问他三个问题</router-link></div>
    <div class="main10"><router-link to="jxtj"><img src="../assets/bg28.gif" width="100px;"/>那些让女生羞涩的赞赏</router-link></div>
  </div><div style="width: 750px;margin: 0 auto;display: flex">
    <div class="main10"><router-link to="jxtj"><img src="../assets/bg29.gif" width="100px;"/>问他三个问题</router-link></div>
    <div class="main10"><router-link to="jxtj"><img src="../assets/bg30.gif" width="100px;"/>那些让女生羞涩的赞赏</router-link></div>
  </div>
    </div>
  </div>
  </div>
</template>
<script>
    import Divider from "iview/src/components/divider/divider";
    export default {
      components: {Divider},
      data () {
            return {
                value2: 0,
                srca:[]
            }
        },
      created() {
        this.$http.post('/api/lubo/lubos').then((data) => {
          this.srca = data.body.data;
          // console.log(require("../assets/bg4.gif"));
        }
      )
      }
    }
</script>
<style>
*{
margin:0 0;
}
.main1{
display:flex;
width:750px;
margin:0 auto;
    background-color:#ffc400 ;
}
.main2{
width:200px;
padding:30px 10px;
}
.main3{
width:50px;
margin-left:450px;
padding:35px 0px;
}
.main3 img{
width:100px;
}
.demo-carousel img{
width:750px;
}
  .main5{
    width: 750px;
    margin: 0 auto;
  }
  .main4 {
    display: flex;
    width: 750px;
    vertical-align: center;
  }
  .main10{
    width: 500px;
    text-align: center;
  }
  .main10 img {
    width: 340px;
    margin-left: 15px;
  }
</style>
