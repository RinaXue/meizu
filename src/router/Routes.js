import Vfoot from '@/components/VFoot';
import VHead from "@/components/VHead";
import Vnavigation from "@/components/Vnavigation";


  export default [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components:  {
        default: () => import(/* webpackChunkName: "group-home" */ '@/pages/Home'),
        foot: Vfoot,
        head: VHead,
        navigation: Vnavigation,
      }
    },
    {
      path: '/details',
      name: 'details',
      components:  {
        default: () => import(/* webpackChunkName: "group-details" */ '@/pages/Details'),
        head: VHead,
        navigation: Vnavigation,
        foot: Vfoot,
      }
    },
    {
      path: '/list/:id',
      name: 'list',
      components: {
        default: () => import(/* webpackChunkName: "group-list" */ '@/pages/List'),
        head: VHead,
        navigation: Vnavigation,
      },
      props: { default: true }
    },
    {
      path: '/Cart',
      name: 'cart',
      components: {
        default: () => import(/* webpackChunkName: "group-cart" */ '@/pages/Cart'),
        head: VHead,
        navigation: Vnavigation,
      },
    },
    {
      path: '/inquire',
      name: 'inquire',
      components: {
        default: () => import(/* webpackChunkName: "group-inquire" */ '@/pages/inquire'),
        // head: VHead,
        // navigation: Vnavigation,
      },
    },
    {
      path: '/personal',
      name: 'personal',
      components: {
        default: () => import(/* webpackChunkName: "group-personal" */ '@/pages/Personal'),
        head: VHead,
        foot: Vfoot,
        navigation: Vnavigation,
      },
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import(/* webpackChunkName: "group-register" */ '@/pages/Register'),
      }
    },
    {
      path: '/vtop',
      name: 'vtop',
      components: {
        default: () => import(/* webpackChunkName: "group-vtop" */ '@/pages/Vtop')
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import(/* webpackChunkName: "group-login" */ '@/pages/Login'),
      }
    }
  ]