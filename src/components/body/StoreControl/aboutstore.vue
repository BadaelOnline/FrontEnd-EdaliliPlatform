<template>
    <div class="parent">
        <div id="over" class="backcover" @click="ShowProductSection()"></div>
        <div class="top">
            <div class="name">
                <div class="imag"><img src="" alt=""></div>
                <!-- <h2>اهلا بك Admin</h2> -->
                <h2>Admin</h2>
            </div>
            <div class="setting">
               <i class="fas fa-search"></i>
               <i class="far fa-bell"></i>
                <i class="far fa-comment"></i>
                <button class="hid-lg packge">ترقية الباقة</button>
                 <router-link class="hid-lg" to="/storeControl"> <button class="setting-form">فتح لوحة التحكم</button></router-link>
                <i class="fas fa-sign-out-alt" style="transform: rotatey(180deg);"></i>
            </div>
            <div class="sh-sm">
                <button class=" packge">ترقية الباقة</button>
                 <router-link to="/storeControl"> <button class="setting-form">فتح لوحة التحكم</button></router-link>
                </div>
        </div>
        <div
            id="carouselExampleInterval"
            class="carousel slide carouselSlide"
            data-ride="carousel"
            style="justify-content: center"
        >
        <div class="upload">
            <i class="fa fa-camera" aria-hidden="true"></i>
        </div>
            <div class="carousel-inner text-center">
                <div class="carousel-item active" data-interval="2000">
                    <img style="height: 38vw;min-height: 250px;"
                        src=""
                        class="d-block w-100"
                        alt=""
                    />
                </div>
                <div class="carousel-item">
                    <img style="height: 38vw;min-height: 250px;"
                        src=""
                        class="d-block w-100"
                        alt=""
                    />
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#carouselExampleInterval"
                role="button"
                data-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carouselExampleInterval"
                role="button"
                data-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="bottom">
            <div class="product-category" v-if="ShowProduct">
                <div class="section">
                    <h5>الأقسام</h5>
                    <ul>
                        <li class="active"><span>قسم 1</span></li>
                        <li><span>قسم 2</span></li>
                        <li><span>قسم 3</span></li>
                    </ul>
                </div>
                <div class="section">
                    <h5>الفئات</h5>
                    <ul>
                        <li class="active"><span>فئة 1</span></li>
                        <li><span>فئة 2</span></li>
                        <li><span>فئة 3</span></li>
                        <li><span>فئة 4</span></li>
                        <li><span>فئة 5</span></li>
                    </ul>
                </div>
                <div class="section-ca">
                    <h5>الفئات فرعية</h5>
                    <ul>
                        <li><span>فئة فرعية 1</span></li>
                        <li><span>فئة فرعية 2</span></li>
                        <li><span>فئة فرعية 3</span></li>
                        <li><span>فئة فرعية 4</span></li>
                        <li><span>فئة فرعية 5</span></li>
                        <li><span>فئة فرعية 6</span></li>
                        <li><span>فئة فرعية 7</span></li>
                    </ul>
                </div>
            </div>
            <div class="store-name">
                 <div class="imag"><img src="" alt=""></div>
                 <div class="detal">
                     <span class="name">اسم المتجر</span>
                     <div style="color:#808080;font-size: 14px;"> 
                         <span>سمة المتجر</span>
                         <span class="range">0.0 <i class="fa fa-star"></i></span>
                         <span>(0)</span>
                     </div>
                 </div>
                 </div>
            <div class="category">
                <ul class="categor">
                    <li @click="addactive('products');ShowProductSection()" :class="[sections == 'products' ? 'active' : '']">المنتجات <Icon icon="dashicons:arrow-down" /></li>
                    <li @click="addactive('offers')" :class="[sections == 'offers' ? 'active' : '']">العروضات</li>offers
                    <li @click="addactive('events')" :class="[sections == 'events' ? 'active' : '']">الفعاليات</li>
                    <li @click="addactive('chances')" :class="[sections == 'chances' ? 'active' : '']">فرص العمل</li>
                    <li @click="addactive('about')" :class="[sections == 'about' ? 'active' : '']" >حول المتجر</li>
                </ul>
            </div>
            
            <div class="setting">
                <button class="but1" >
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    متابعة
                </button >
                <div class="sett" v-if="sett">
                    <div><Icon icon="bx:error" /> <span>الإبلاغ عن مشكلة</span></div>
                    <div><Icon icon="carbon:copy-link" /> <span>نسخ رابط المتجر</span></div>
                </div>
                <button class="but2" @click="sett=!sett"><span><Icon icon="charm:menu-meatball" /></span></button>
            </div>
            <swiper class="swiper categ categor" 
            :breakpoints="swiperOptions.breakpoints"
            :speed="1000">
                <swiper-slide ><li @click="addactive('products');ShowProductSection()" :class="[sections == 'products' ? 'active' : '']">المنتجات</li></swiper-slide>
                <swiper-slide ><li @click="addactive('offers')" :class="[sections == 'offers' ? 'active' : '']">العروضات</li></swiper-slide>
                <swiper-slide ><li @click="addactive('events')" :class="[sections == 'events' ? 'active' : '']">الفعاليات</li></swiper-slide>
                <swiper-slide ><li @click="addactive('chances')" :class="[sections == 'chances' ? 'active' : '']">فرص العمل</li></swiper-slide>
                <swiper-slide ><li @click="addactive('about')" :class="[sections == 'about' ? 'active' : '']">حول المتجر</li></swiper-slide>
            </swiper>
        </div>
         <component :is="sections" />
    </div>
</template>

<script>


import { Icon } from '@iconify/vue';
import $ from 'jquery';
import { defineAsyncComponent } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";

export default {
    name: 'aboutstore',
    data() {
        return {
            sections:'about',
            storeID: {},
            Products: [],
            ShowDetails: false,
            ShowProduct: false,
            sett: false,
            details:{
                id: null,
                name: "",
                long_des: "",
                price:null
            },
            swiperOptions: { 
                breakpoints: {
       
        300:{  // when window width from 300px to 576px
            slidesPerView: 3,
            spaceBetween:50
       },
       576:{  // when window width from 576px to 767px
            slidesPerView: 3,
            spaceBetween:50
       },
        767: { // when window width from 767px to 991px
            slidesPerView: 3,
            spaceBetween:50
        },
      
        991: { // when window width from 991px to 1200px
            slidesPerView: 5,
            spaceBetween:50
        },
         1200: { // when window width from 1200px to higher
            slidesPerView: 7,
            spaceBetween:50     
        },
        }
        }
        };
    },
    props: [''],
    components: {
    Swiper,
    SwiperSlide,    
    Icon,
    about: defineAsyncComponent(() => import("../StoreControl/aboutStoreComp/about.vue")),
    chances: defineAsyncComponent(() => import("../StoreControl/aboutStoreComp/chances.vue")),
    events: defineAsyncComponent(() => import("../StoreControl/aboutStoreComp/events.vue")),
    },

    methods:{
    addactive(i){
       this.sections = i;
     
        },
        ShowProductSection(){
            this.ShowProduct = !this.ShowProduct;
            $('#over').css("display","block");
            if(this.ShowProduct == true){
            $('#over').on('click', function() {
            $('#over').css("display","none");
            this.ShowProduct = false;
            });
            }
        },
        },
      
   
};
</script>

<style scoped>
.backcover{
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 85;
    top:  0;
    display: none;
}
.upload{
   position: absolute;
    width: 40px;
    height: 40px;
    background-color: #fbfbfb;
    left: 25px;
    z-index: 99;
    bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    transition: .3s;
}
.upload i {
    font-size: 19px;
    color: #777;
}
.upload:hover  {
   box-shadow: 0px 0px 8px #515050;;
}
.carousel-inner {
    width: 100%;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
    width: 40px;
    height: 50px;
}
.carousel-inner {
    background-color: #FAFF00;;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19); */
}
</style>
<style lang="scss" scoped>
$ButtonColor: #247ba0;
.parent{
    
    .top{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
    position: relative;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    .name{
    display: flex;
    align-items: center;
    
    .imag{
    width: 40px;
    height: 40px;
    background-color: #ccc;
    border-radius: 50%;
    
    }
    h2{
        font-size: 20px;
        margin-inline-start: 10px;
        margin-bottom: 0;
        font-weight: 700;
    /* Small devices (landscape phones, 576px and up) */
    @media  (max-width: 767.98px) {
    font-size: 18px;   
    }
    }
    }
    .sh-sm {
        display: none;
        width: 267px;
        left: 30px;
        padding: 5px;
        border-radius: 5px;
        transition: .3s;
        width: 100%;
        justify-content: end;
        .packge{
        border-width: 4px;
        border-style: solid;
        background: linear-gradient(#fff,#fff) padding-box, linear-gradient(to right, #6161ff, #fd5252) border-box;
        border: 2px solid transparent;
        padding: 5px 10px;
        border-radius: 50px;
        color: #DE222A;
        transition: .3s;
        margin: 0 5px;
        &:hover{
           color: #fff;
           background: linear-gradient(#6161ff, #fd5252) padding-box, linear-gradient(to right, #6161ff, #fd5252) border-box;
        }
    }
    .setting-form{
        padding: 10px 15px;
        color: #fff;
        background-color: #247BA0;
        border: none;
        border-radius: 5px;
        transition: .3s;
        margin: 0 5px;
        &:hover{
        background-color:  #2EA9DD;
        }
    }
    }
        /* Small devices (landscape phones, 576px and up) */
    @media  (max-width: 767.98px) {
    .sh-sm {
       display: flex;
    }
    }
    .setting{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    position: relative;
    
    /* Small devices (landscape phones, 576px and up) */
    @media  (max-width: 767.98px) {
    .hid-lg{
        display: none;
    }   
   
    }
    i{
        color: #808080;
        font-size: 25px;
        padding: 10px;
        transition: .3s;
        &:hover{
        background-color: #eee;
        border-radius: 5px;
        cursor: pointer;
        }
    
    /* Small devices (landscape phones, 576px and up) */
    @media  (max-width: 767.98px) {
    font-size: 20px;   
    }    
    }
    .sh-ic{
        display: none;
    /* Small devices (landscape phones, 576px and up) */
    @media  (max-width: 767.98px) {
    display: block;
    color: #808080;
    font-size: 30px;
    transition: .3s;
    &:hover{
        background-color: #eee;
        border-radius: 5px;
        cursor: pointer;
        }
    } 
    }
    .packge{
        border-width: 4px;
        border-style: solid;
        background: linear-gradient(#fff,#fff) padding-box, linear-gradient(to right, #6161ff, #fd5252) border-box;
        border: 2px solid transparent;
        padding: 5px 10px;
        border-radius: 50px;
        color: #DE222A;
        transition: .3s;
        margin: 0 5px;
        &:hover{
           color: #fff;
           background: linear-gradient(#6161ff, #fd5252) padding-box, linear-gradient(to right, #6161ff, #fd5252) border-box;
        }
    }
    .setting-form{
        padding: 10px 15px;
        color: #fff;
        background-color: #247BA0;
        border: none;
        border-radius: 5px;
        transition: .3s;
        margin: 0 5px;
        &:hover{
        background-color:  #2EA9DD;
        }
    }
    }
    }
}
.bottom{
    .product-category{
    position: absolute;
    background-color: #fff;
    z-index: 134;
    display: flex;
    width: 70%;
    min-width: 345px;
    left: 50%;
    transform: translateX(-50%);
    top: 100%;
    padding: 20px;
    box-shadow: 2px 3px 10px #918c8c;
    border-radius: 5px; 
    .section{
        border-left: 1px solid #ddd;
        padding: 0 10px;
        text-align: start;
        ul{
        list-style: none;
        padding: 0;
        margin: 0;
        li{
            line-height: 30px;
            cursor: pointer;
            color: #757575;
            transition: .3s;
            &:hover{
                color: $ButtonColor;
                font-weight: bold;
            span{
             transition: .3s;
             border-bottom: 2px solid $ButtonColor;
            }
            }
        &.active{
            color: $ButtonColor; 
            font-weight: bold;  
            span{
             border-bottom: 2px solid $ButtonColor;
            }
        }
        }
    }
    }
    .section-ca{
    padding: 0 5px;
    text-align: start;  
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        li{
            line-height: 30px;
            color: #757575;
        }
    }  
    }
    div{
    width: calc(100% /3);
    h5{
        font-size: 17px;
    }
    }  
    }
    display: flex;
    justify-content: space-between;
    padding: 10px;
    flex-wrap: wrap;
    position: relative;
    .store-name{
        display: flex;
    align-items: center;
    .imag{
    width: 55px;
    height: 55px;
    background-color: #ccc;
    border-radius: 50%;
    margin-inline-end: 10px;
    }
    .detal{
    text-align: start;
    .range{
    background-color: #FFB800;
    color: #fff;
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 12px;
    margin: 0 5px;
    }
    }
    }
    .categ{ 
    display: none;
    width: 100%;
    .swiper-wrapper{
        align-items: center;
        .swiper-slide{
        display: flex;
        flex-direction: column;
        align-items: center;
        place-content: center;
        padding: 5px 0;
        }
    }
    /* Medium devices (tablets, 768px and up) */
    @media  (max-width: 991.98px) {
        display: flex;
    }
    li{
        color: #000;
        font-weight: 500;
        position: relative;
        cursor: pointer;
        &::after{
        content: "";
        position: absolute;
        width: 0;
        // width: 150%;
        height: 6px;
        background-color: #247BA0;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
        transition: .3s;
        }     
        &:hover{
            &::after{
            width: 150%;
            }
        }
        }
         .active{
        &::after{
        width: 150%;
        }
        }
    }
    .category{
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-around;
    /* Medium devices (tablets, 768px and up) */
    @media  (max-width: 991.98px) {
        display: none;
    }
    
        ul{
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: space-around;
        width: 80%;
        li{
        color: #000;
        font-weight: 500;
        position: relative;
        cursor: pointer;
        &::after{
        content: "";
        position: absolute;
        width: 0;
        // width: 150%;
        height: 6px;
        background-color: #247BA0;
        bottom: -27px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
        transition: .3s;
        }     
        &:hover{
            &::after{
            width: 150%;
            }
        }
        }
         .active{
        &::after{
        width: 150%;
        }
        }
        }
    }
    .setting{
    display: flex;
    align-items: center; 
    position: relative;
    .but1{
        background-color: #247BA0;
        border: none;
        border-radius: 5px;
        padding: 8px 20px;
        color: #fff;
    }   
    .sett{
            color: #000;
            position: absolute;
            z-index: 5;
            top: 106%;
            right: -50px;
            padding: 10px;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px #808080;
            border-radius: 10px;
            width: 200px;
            height: 75px;
            display: grid;
            text-align: start;
            div{
            transition: .3s;
            cursor: pointer;
            padding: 0 5px;
            &:hover{
                background: #f0eded;
                border-radius: 5px;
                
            }
            }
            &::after{
                content: '';
                border-style: solid;
                border-width: 10px;
                border-color: transparent transparent #FFFFFF transparent;
                position: absolute;
                top: -20px;
                left: 10px;
            }
        }
    .but2{
        padding: 2px 8px 6px;
        color: #247BA0;
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #247BA0;
        margin-inline-start: 10px;

        span{
        svg{
        font-size: 20px; 
        margin-top: 5px;  
        }
        }
    }  
    }
}
</style>
