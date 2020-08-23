import Router from 'vue-router'
import Vue from 'vue'

import Banks from '@/view/pages/Banks.vue';
import Dashboard from "@/view/pages/Dashboard";

Vue.use(Router);

export default new Router({
        routes: [
            {
                path: '/',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/banks',
                name: 'Banks',
                component: Banks
            }
        ]
    }
)