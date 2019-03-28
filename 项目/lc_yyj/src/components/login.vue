<template lang="html">

  <div class="aspectratio">
    <div class="aspectratio-content">
<div class="main1">登录</div>
<div class="main2"><img src="../assets/bg16.gif" width="100%"></div>
    <div  class="box">
    <div style="width: 30%;">
      <div  class="main3">
              <input type="text" v-model="username" placeholder="用户名">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                    <input type="text" v-model="password" placeholder="密码">
                                     <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </input>
      </div>
     </div>
</div>
    <div  class="box">
        <button type="primary" v-on:click=userLogin() required="不能为空" class="dl">登录</button>
        <button type="ghost" style="margin-left: 10px" v-on:click=userRegister()>注册</button>
        <button type="text" style="margin-left: 10px" v-on:click=findBackPassword()>忘记密码</button>
//      <router-link to="register">go</router-link>
    </div>
</div>
  </div>
</template>
<script>
import UserMessage from '../components/UserMessage'
  export default {
    data(){
      return{
        username:'',
        password:'',
      }
    },
    methods:{
      userLogin:function (event) {
      this.$http.post('/api/users/login',{username: this.username,password:this.password}).then((data) => {
        if(data.body.status==1){
          alert(data.body.message)
        }else{
          let save_token={
            token:data.body.data.token,
            username: this.username,
          }
         console.log(data.body.data.user[0])
          localStorage.setItem('token',data.body.data.token);
          localStorage.setItem('username',data.body.data.user[0].username);
          localStorage.setItem('_id',data.body.data.user[0]._id);
         localStorage.setItem('username',this.username);
          this.$router.push({path:'UserMessage'})
        }
      })
    },
//      注册跳转页面
      userRegister:function (event) {
        this.$router.push({path:'register'})
      },
//      找回密码
      findBackPassword:function (event) {
        this.$router.push({path:'findPassword'})
      }
  }

  }
</script>
<style>
  .box{
    justify-content: center;
    align-items: center;
    text-align: center;
  }
.main3{
width:750px;
margin:0 auto;
  text-align: center;

}
.main3 input{
margin: 0 auto;
width:750px;
}
.main3 input:nth-of-type(1){
    background:url("../assets/bg17.gif") 10px center no-repeat;
    background-size:auto 50px;
     text-indent: 70px;
    height:100px;
}

.main3 input:nth-of-type(2){
    background:url("../assets/bg18.gif") 10px center no-repeat;
    background-size:auto 50px;
     text-indent: 70px;
    height:100px;
}
.main1{
  width:750px;
  margin:0 auto;
  font-size: 50px;
  background-color:#ffcc01;
  text-align: center;
  color:#4d4d4d;
  text-align: center;

  padding:40px 10px;
}
.main2{
width:7.5rem;
margin:0 auto;
}
.main2 img{
width:50px;
margin:10px 10px;
}
.dl{
width:700px;
      border-radius:50px;
       font-size:40px;
       color:#4d4d4d;
    background-color:yellow;
    margin-top:10px;
    margin-left:25px;
    height:80px;
}
</style>
