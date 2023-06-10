import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Home=()=>import('views/home/Home')
const Category=()=>import('views/category/Category')
const User=()=>import('views/user/User')

const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/user',
    component:User
   },
]
const router= new VueRouter({
  routes,
  mode:'history'
})
export default router