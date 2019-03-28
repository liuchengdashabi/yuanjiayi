<template>
  <div class="aspectratio">
    <div class="aspectratio-content">
      <template v-for="(item,index) in list">
        <img :src="item.src" style="width: 750px;">
        <div style="width:750px;display: flex" >
          <div>
            <img :src="item.src" style="width: 400px;">
          </div>
          <div >
            <h1 style="width: 300px;">{{item.name}}</h1>
            <p style="width: 300px;">{{item.nr}}</p>
          </div>
     </div>
        <div style="width:750px;display: flex" >
          <div>
            <img :src="item.src" style="width: 400px;">
          </div>
          <div >
            <h1 style="width: 300px;">{{item.name}}</h1>
            <p style="width: 300px;">{{item.nr}}</p>
          </div>
        </div>
        <div style="width:750px;display: flex" >
          <div>
            <img :src="item.src" style="width: 400px;">
          </div>
          <div >
            <h1 style="width: 300px;">{{item.name}}</h1>
            <p style="width: 300px;">{{item.nr}}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
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
<style scoped="scoped">
</style>
