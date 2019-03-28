<template>
  <div class="aspectratio">
    <div class="aspectratio-content"></div>
    <template v-for="(item,index) in list">
      <img :src="item.src" width="750px;" />
      <div style="width: 750px;text-align: center;color: blue; font-size: 50px">{{item.name}}</div>
      <div class="main1">1、{{item.nr}}</div>
      <div class="main1">2、{{item.nr}}</div>
    </template>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list:undefined
      }
    },
    created(){
      this.$http.get('/api/dsq/list').then(function(result){
        this.list = result.body.data;
        console.log(result);
      })
    }
  }
</script>
<style>
  .main1{
    color: red;
  }
</style>
