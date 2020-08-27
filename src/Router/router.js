import Router from 'vue-router'
import Vue from 'vue'

import Banks from '@/view/pages/Banks.vue';
import Dashboard from "@/view/pages/Dashboard";
import Requisites from "@/view/pages/Requisites";
import Bank from "@/view/pages/Bank";

Vue.use(Router);

export default new Router({
        routes: [
            {
                path: '/',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/requisites',
                name: 'Requisites',
                component: Requisites
            },
            {
                path: '/requisites/banks/:id',
                name: 'Bank',
                component: Bank
            },
            {
                path: '/requisites/banks/new',
                name: 'Bank',
                component: Bank
            },
            {
                path: '/requisites/banks',
                name: 'Banks',
                component: Banks
            }
        ]
    }
)