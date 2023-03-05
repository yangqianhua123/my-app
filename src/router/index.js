import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.创建路由组件
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Login from '../views/Login.vue'
import Personal from '../views/Personal.vue'

Vue.use(VueRouter)

// 2.将路由与组件进行映射
const routes = [
    // 主路由
    {
        path: '/',
        component: Main,
        name: 'Main',
        redirect: '/home', //重定向
        children: [
            // 子路由
            // { path: 'home', name: 'home', component: Home }, //首页
            // { path: 'user', name: 'user', component: User }, //用户管理
            // { path: 'mall', name: 'mall', component: Mall }, //商品管理
            // { path: 'page1', name: 'page1', component: PageOne }, //页面1
            // { path: 'page2', name: 'page2', component: PageTwo }, //页面2
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/personal',
        name: 'Personal',
        component: Personal
    },
]

// 3. 创建 router 实例
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 对外暴露
export default router