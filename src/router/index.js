import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      component: App.components.NIndex
    },
    {
      path:'/n',
      name: 'NIndex',
      component: App.components.NIndex
    },
    {
      // 当 /user/:id/profile 匹配成功，
      // UserProfile 会被渲染在 User 的 <router-view> 中
      path: '/n/d',
      name:'NewsInfo',
      component: App.components.NewsInfo,
    },
    {
      path:'/c',
      name:'CIndex',
      component: App.components.CIndex
    },
    {
      path: '/t',
      name: 'TIndex',
      component: App.components.TIndex
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
