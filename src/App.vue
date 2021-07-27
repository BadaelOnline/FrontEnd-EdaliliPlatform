<template>
    <!-- <AppHeader /> -->
    <!-- <header/> -->
    <Header />
    <div id="app"></div>
    <router-view />
    <AppFooter v-if="this.$route.path !== '/signin'" />
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import AppHeader from '@/components/header/AppHeader.vue'; // @ is an alias to /src authentication
import Header from '@/components/header/Header.vue';
import AppFooter from '@/components/Footer/AppFooter.vue';
@Options({
    components: {
        // AppHeader,
        AppFooter,
        Header,
    },
})
export default class App extends Vue {}
</script>
<style lang="scss">
#app {
    font-family: Zen Tokyo Zoo;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
