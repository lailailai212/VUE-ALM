/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '.././components/Login'
import SiteAdmin from '.././components/siteAdmin'
import index from '.././components/index'


Vue.use(Router)

export const routers = [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/siteAdmin',
      name: 'siteAdmin',
      component: SiteAdmin
    },
    {
      path: '/index',
      name: 'index',
      component: index ,
    }
];
const router = new Router({
    routes: routers,
    mode: 'history'
});

export default router;
