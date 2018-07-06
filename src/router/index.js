import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      name: 'News',
      component: App.components.News
    },
    {
      path:'/n',
      name: 'NList',
      component: App.components.News
    },
    {
      // 当 /user/:id/profile 匹配成功，
      // UserProfile 会被渲染在 User 的 <router-view> 中
      path: '/n/d',
      name:'NewsInfo',
      component: App.components.NewsInfo
    },
    {
      path:'/c',
      name:'CList',
      component: App.components.CList
    },
    {
      path: '/t',
      name: 'TList',
      component: App.components.TList
    },
    {
      path:'/f',
      name:'FIndex',
      component:App.components.FIndex
    },
    {
      path:'/a',
      name:'AIndex',
      component:App.components.AIndex
    }
  ]
})
