import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import frist from '@/components/frist'
import register from '@/components/register'
import shopping from '@/components/shopping'
import User from '@/components/User'
import vueResource from 'vue-resource'
import login from '@/components/login'
Vue.use(vueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/11',
    	component: frist
    },
    {
    	path:'/22',
    	component: register
    },
    {
    	path:'/33',
    	component:shopping
    },
    {
    	path:'/44',
    	component:User
    },
    {
    	path:'/55',
    	component:login
    }
  ]
})
