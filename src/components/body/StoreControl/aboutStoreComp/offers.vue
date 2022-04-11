<template>
        <div class="content-body">
             <div id="cover" class="cover" @click="closeside()"></div>
           <div class="sidebar"  >
               <div id="sidebar">
                   <h4>العروضات </h4>
               <h5>كل العروض</h5>
               <ul>
                   <li>العرض 1</li>
                   <li>العرض 2</li>
                   <li>العرض 3</li>
                   <li>العرض 4</li>
                   <li>العرض 5</li>
               </ul>
               </div>
               
           </div>
            <div class="icon" id="iconSide" @click="openside()">
                <i  class="fa fa-angle-left"></i>
            </div>
           <div class="contain" @click="showSide = false">
               <div class="offers-contain">
               <div class="offer-item" v-for="item in 4" :key="item">
                  <div class="imag"> <img src="@/../public/img/pic1.png" alt=""></div>
                  <p>هاتف ريدمي نوت 10s ثنائي الشريحة بذاكرة رام 6 جيجابايت وذاكرة داخلية 128 جيجابايت ويدعم تقنية 4G LTE أزرق محيطي - إصدار عالمي</p>
                    <div class="discount">خصم 100%</div>
                    <div class="price"> 
                        <span class="n-price">1,000,000 ل.س</span>
                        <span class="o-price">1,000,000 ل.س</span>
                    </div>
                    <div class="rate">
                          <Icon icon="carbon:star-filled" />
                          <Icon icon="carbon:star-filled" />
                          <Icon icon="carbon:star-filled" />
                          <Icon icon="carbon:star-filled" />
                          <Icon icon="carbon:star-filled" />
                          <span>(20)</span>
                    </div>
               </div>
           </div>
           <div class="full-baner">
               <img src="" alt="">
           </div>
           <div class="offers-contain">
               <div class="offer-item" v-for="item in 4" :key="item">
                  <div class="imag"> <img src="@/../public/img/pic1.png" alt=""></div>
                  <p>هاتف ريدمي نوت 10s ثنائي الشريحة بذاكرة رام 6 جيجابايت وذاكرة داخلية 128 جيجابايت ويدعم تقنية 4G LTE أزرق محيطي - إصدار عالمي</p>
                    <div class="discount">خصم 100%</div>
                    <div class="price"> 
                        <span class="n-price">1,000,000 ل.س</span>
                        <span class="o-price">1,000,000 ل.س</span>
                    </div>
                    <div class="rate">
                          <Icon icon="carbon:star-filled" />
                          <Icon icon="carbon:star-filled" />
                          <Icon icon="carbon:star-filled" />
                          <Icon icon="carbon:star-filled" />
                          <Icon icon="carbon:star-filled" />
                          <span>(20)</span>
                    </div>
               </div>
           </div>
           <div class="half-baner">
                <div><img src="" alt=""></div>
                <div><img src="" alt=""></div>
            </div>
           <div class="full-baner">
               <img src="" alt="">
           </div>
           <div class="offers-contain">
               <div class="offer-item" v-for="item in 4" :key="item">
                  <div class="imag"> <img src="@/../public/img/pic1.png" alt=""></div>
                  <p>هاتف ريدمي نوت 10s ثنائي الشريحة بذاكرة رام 6 جيجابايت وذاكرة داخلية 128 جيجابايت ويدعم تقنية 4G LTE أزرق محيطي - إصدار عالمي</p>
                    <div class="discount">خصم 100%</div>
                    <div class="price"> 
                        <span class="n-price">1,000,000 ل.س</span>
                        <span class="o-price">1,000,000 ل.س</span>
                    </div>
                    <div class="rate">
                          <Icon icon="carbon:star-filled" />
                          <Icon icon="carbon:star-filled" />
                          <Icon icon="carbon:star-filled" />
                          <Icon icon="carbon:star-filled" />
                          <Icon icon="carbon:star-filled" />
                          <span>(20)</span>
                    </div>
               </div>
           </div>
           </div>
        </div>
</template>

<script>

import { Icon } from '@iconify/vue';
import $ from 'jquery';
export default {
    name: 'offers',
    data() {
        return {
            showSide: false
        };
    },
    components: {
     Icon,  
    },
    methods:{
         openside(){
        $("#iconSide").css("display","none");
        $("#sidebar").css("right","0");
        $("#cover").css("display","block");
        },
        closeside(){
        $("#iconSide").css("display","flex");
        $("#sidebar").css("right","-250px");
        $("#cover").css("display","none");
        },
        },     
};
</script>

<style lang="scss" scoped>
$ButtonColor: #247ba0;
$HoverColor: #1D7094;
.content-body{
    .cover{
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 49;
    top:  0;
    display: none;
    }
    font-family: 'Tajawal';
    font-style: normal;
    background-color: #e8e8e8;
    display: grid;
    grid-template-columns: 250px 1fr;
    position: relative;
    /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
    }
    .sidebar{
        color: #000000;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        div{
        width: 250px;
        height: auto;
        min-height: 488px;
        background-color: #fff;
        padding: 20px;
        border: 2px solid #ddd;
        text-align: start;
        transition: .4s linear;
        /* Extra small devices (portrait phones, less than 576px) */
        @media (max-width: 575.98px) {
        position: absolute;
        z-index: 50;
        right: -250px;
        }
            h4{
                font-size: 18px;
            }
            h5{
                font-size: 16px;
                margin-inline-start: 10px;
            }
            ul{
            padding: 0;
            margin-inline-start: 10px;
                list-style: none;
                li{
                    font-weight: 500;
                    color: #808080;
                    transition: .3s;
                    cursor: pointer;
                    &:hover{
                        color: $ButtonColor;
                    }
                }
            }
        }

        
    }
    .icon{
    background: #1C2C34;
    color: #fff;
    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 991.98px)  {
         display: none !important;
    }
    @media  (max-width: 991.98px) {
    width: 40px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-inline-end: 5px;
    position: fixed;
    z-index: 100;
    top: 35%;
    right: -15px;
    padding: 20px 8px;
    border-radius: 10px;
    font-size: 23px;
    cursor: pointer;
    }    
        
    }
    .contain { 
        padding: 0 5px;
    .offers-contain{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
        .offer-item{
            display: flex;
            flex-direction: column;
            padding: 10px;
            background-color: #FFFFFF;
            width: 260px;
            height: 481px;
            margin: 14px 5px;
            border-radius: 10px;
            .imag{
                width: 250px;
                height: 250px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            p{
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                text-align: start;
                margin-bottom: 5px;
            }
            .discount{
                color: $ButtonColor;
                font-weight: 700;
                font-size: 18px;
                line-height: 27px;
                text-align: start;
                margin-bottom: 15px;
            }
            .price{
                display: flex;
                justify-content: space-between;
                margin-bottom: 15px;
                .n-price{
                font-weight: 700;
                font-size: 18px;
                line-height: 27px;
                text-align: start;
                color: #000000;
                }
                .o-price{
                font-weight: 700;
                font-size: 14px;
                line-height: 27px;
                text-align: start;
                color: #808080;
                text-decoration: line-through;
                text-decoration-color: red;
                }
            }
            .rate{
                display: flex;
                text-align: start;
                svg{
                    color: #FFB800;
                    font-size: 23px;
                }
                span{
                    margin-inline-start: 5px;
                }
            }
        }
    }
    .full-baner{
        width: 100%;
        height: 350px;
        background: #FAFF00;
        /* Extra small devices (portrait phones, less than 576px) */
        @media (max-width: 575.98px) {
            height: 200px;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
    .half-baner{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        div{
            width: 49%;
            height: 350px;
            background: #FAFF00;
            /* Extra small devices (portrait phones, less than 576px) */
        @media (max-width: 575.98px) {
            height: 200px;
        }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    }
}
</style>
