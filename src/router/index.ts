import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/activities',
        name: 'activities',
        component: () => import('../views/section/activities.vue'),
    }, 
    {
        path: '/store',
        component: () => import('../components/body/StoreControl/aboutstore.vue'),
        name: 'Store',
    },
    {
        path: '/storeaccount',
        component: () => import('../components/body/StoreControl/storeaccount.vue'),
        name: 'storeaccount',
    },
    {
        path: '/visitstore/:id/:title',
        component: () => import('../components/body/Stores/visitStore.vue'),
        name: 'visitStore',
    },
    /* cart shop */
    {
        path: '/Cart',
        component: () => import('../components/cart/Cart.vue'),
        props: true,
    },
    /* ProductDetalis */
    {
        path: '/products/:id',
        component: () => import('../components/global/prodetails.vue'),
    },
    {
        // path: '/ProductDetailsStore/:title/:id_store/:id',
        path: '/ProductDetailsStore/:title/:id_store/:id',
        component: () =>
            import('../components/body/pages/ProductDetailsStore.vue'),
    },
    /* services or section */
    {
        path: '/',
        name: 'home',
        component: () => import('../views/section/home.vue'),
    },
    {
        path: '/festival',
        name: 'festival',
        component: () => import('../views/section/festival.vue'),
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('../views/section/products.vue'),
    },
    {
        path: '/company',
        name: 'company',
        component: () => import('../views/section/company.vue'),
    },
    {
        path: '/professional',
        name: 'professional',
        component: () => import('../views/section/professional.vue'),
    },
    {
        path: '/medic',
        name: 'medic',
        component: () => import('../views/section/medic.vue'),
    },
    //doctor
    {
        path: '/doctors',
        name: 'doctors',
        component: () => import('../views/section/doctors.vue'),
    },
    {
        path: '/visit_doctor/:id/:first_name',
        name: 'visitDoctor',
        component: () => import('../components/body/doctors/visitDoctor.vue'),
    },
    //restaurant
    {
        path: '/resturants',
        name: 'resturants',
        component: () => import('../views/section/resturants.vue'),
    },
    {
        path: '/visitrestaurant/:id/:title',
        name: 'visitRestaurant',
        component: () =>
            import('../components/body/restaurant/visitRestaurant.vue'),
    },
    {
        path: '/instrc',
        name: 'instrc',
        component: () => import('../views/section/instrc.vue'),
    },
    {
        path: '/stores',
        name: 'stores',
        component: () => import('../views/section/stores.vue'),
    },

    /* Categories */
    {
        path: '/brand_product/:id_brand',
        name: 'brand_product',
        component: () => import('../views/categories/brand_product.vue'),
    },
    {
        path: '/category_product/:id_category',
        name: 'category_product',
        component: () => import('../views/categories/category_product.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
