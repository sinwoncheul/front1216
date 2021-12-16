//vue3버전 => CDM> npm i vue-router@next --save
import { createWebHistory, createRouter } from "vue-router";
//import { createWebHashHistory, createRouter } from "vue-router";

import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Admin from '@/components/Admin.vue';
import Login from '@/components/Login.vue';
import Join from '@/components/Join.vue';
import MyPage from '@/components/MyPage.vue';
import Center from '@/components/Center.vue';
import Logout from '@/components/Logout.vue';
import InsertProduct  from '@/components/InsertProduct.vue';
import CompanySelect from '@/components/CompanySelect.vue';
import ContentCompany from '@/components/ContentCompany.vue';
import Cart from '@/components/Cart.vue';
import WishList from '@/components/WishList.vue';
import Products from '@/components/Products.vue';
import Test from '@/components/Test.vue';

const routes = [
    { path:'/test', name:"Test", component:Test },
    { path:"/",  redirect : '/home' },
    { path:'/home', name:"Home", component:Home },
    { path:'/about', name:"About", component:About },
    { path:'/insertproduct', name:"InsertProduct", component:InsertProduct },
    { path:'/admin', name:"Admin", component:Admin },
    { path:'/login', name:"Login", component:Login },
    { path:'/join', name:"Join", component:Join },
    { path:'/mypage', name:"MyPage", component:MyPage },
    { path:'/center', name:"Center", component:Center },
    { path:'/logout', name:"Logout", component:Logout },
    { path:'/companyselect', name:"CompanySelect", component:CompanySelect },
    { path:'/contentcompany', name:"ContentCompany", component:ContentCompany },
    { path:'/cart', name:"Cart", component:Cart },
    { path:'/wishlist', name:"WishList", component:WishList },
    { path:'/products', name:"Products", component:Products },
];

const router = createRouter({
    history: createWebHistory(), //createWebHashHistory(), //,
    routes,
});
  
export default router;
