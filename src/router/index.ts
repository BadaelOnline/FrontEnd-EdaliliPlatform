import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/productdetails',
        name: 'productDetails',
        component: () => import('../components/body/StoreControl/aboutStoreComp/productDetails.vue'),
    }, 
    {
        path: '/activities',
        name: 'activities',
        component: () => import('../views/section/activities.vue'),
    }, 
    {
        path: '/store/:id',
        component: () => import('../components/body/StoreControl/aboutstore.vue'),
        name: 'Store',
    },
    {
        path: '/storeaccount/:id',
        component: () => import('../components/body/StoreControl/storeaccount.vue'),
        name: 'storeaccount',
    },
    {
        path: '/storeditproduct/:id_store/:id_product',
        component: () => import('../components/body/StoreControl/component/editProduct.vue'),
        name: 'storeditproduct',
    },
    {
        path: '/visitstore/:id/:title',
        component: () => import('../components/body/Stores/visitStore.vue'),
        name: 'visitStore',
    },
    /* start cart shop */
    {
        path: '/cart',
        component: () => import('../components/global/cartShop/Cart.vue'),
        props: true,
    },
    {
        path: '/addressshipping',
        component: () => import('../components/global/cartShop/AdressShipping.vue'),
        props: true,
    },
    {
        path: '/shipping',
        component: () => import('../components/global/cartShop/Shipping.vue'),
        props: true,
    },
    {
        path: '/paying',
        component: () => import('../components/global/cartShop/paying.vue'),
        props: true,
    },
    {
        path: '/confirm',
        component: () => import('../components/global/cartShop/confirm.vue'),
        props: true,
    },
      /* end cart shop */
    /* ProductDetalis */
    {
        path: '/prodetails/:product_id',
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
        path: '/products/:categoty_id',
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
