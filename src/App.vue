<template>
     <!-- <AppHeader />  -->
    <Header /> 
    <router-view />
    <AppFooter v-if="this.$route.path !== '/signin'" />
</template>
<script>
import { defineAsyncComponent } from 'vue';
// import $  from "jquery";
export default {
   name: 'app',
    components: {
               Header: defineAsyncComponent(() =>
            import(`@/components/header/Header.vue`)
        ),
         AppFooter: defineAsyncComponent(() =>
            import(`@/components/Footer/AppFooter.vue`)
        ),
},

}


</script>
<style lang="scss">
:root {
    --bl: #247ba0;
    --r: #fb3640;
}
#app {
    font-family: Zen Tokyo Zoo;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    // color: #11559d;
    font-size: 16px;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}
/* Extra large devices (large desktops, 1200px and up)  */
@media (min-width: 1200px) {
}
</style>
