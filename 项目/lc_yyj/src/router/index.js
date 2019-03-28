import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import sy from '@/components/sy'
import dsq from '@/components/dsq'
import jxtj from '@/components/jxtj'
import zqq from '@/components/zqq'
import UserMessage from '@/components/UserMessage'
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';
Vue.use(iView, { locale });
Vue.use(Router)
Vue.use(VueRouter)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/sy',
      component:sy
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/register',
      component:register
    },
    {
     path:'/UserMessage',
      component:UserMessage
    }
    ,{
    path:'/dsq',
      component:dsq
    } ,{
      path:'/zqq',
      component:zqq
    },{
      path:'/jxtj',
      component:jxtj
    }
  ]
})
