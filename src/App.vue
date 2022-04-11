<template>
     <!-- <AppHeader />  -->
    <Header /> 
    <notifications group="foo" 
    position="top center" 
    class="notifications" />
    <div id="spiner" class="spiner">
    <img class="img1" src="../public/img/Icons/ED.svg" alt="">
    <img class="img2" src="../public/img/Icons/Needle.svg" alt="">
  </div>
    <router-view />
    <AppFooter v-if="this.$route.path !== '/signin'" />
    
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap');
</style> 
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
  mounted() {
var body =  document.getElementById("body");
    if( localStorage.getItem('lang') == 'ar'){
body.style.setProperty("--main-dirction","rtl")
}
else{
body.style.setProperty("--main-dirction","ltr");
}
  },

}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap');
</style> 
<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
:root {
    --bl: #247BA0;
    --r: #ED1C24;
    --rhead:#ED1C24;
}
#app {
    font-family: 'Tajawal', sans-serif;
    text-align: center;
    // color: #11559d;
    font-size: 16px;
}
body {
  font-family: 'Tajawal', sans-serif;
  margin: 0;
  direction: var(--main-dirction);
  background-color: #00000005;
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
.spiner{
  position: fixed;
  left: 50%;
  top: 45%;
  transform: translateX(-50%);
  width: 151px;
  display: flex;
  z-index: 1000;
  display: none;
  .img1{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .img2{
    position: relative;
    left: 60%;
    animation: mymove 2s infinite linear;
  }
}
@keyframes mymove {
  from {transform: rotateZ(0deg);}
  to   {transform: rotateZ(360deg);}
}
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
/* Small */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
/* Medium */
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
/* Large */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
.vue-notification {
  font-size: 22px !important;
}
</style>
