<template>
        <div class="content-body">
             <div id="cover" class="cover" @click="closeside()"></div>
             <div class="navbar">
                <h4>موبايلات، أجهزة لوحية و اكسسوارات</h4>
                <div class="category">
                    <div class="active">موبايلات </div>
                    <div>أجهزة لوحية </div>
                    <div>ملحقات و اكسسوارات </div>
                    <div>باور بانك </div>
                    <div>الساعات و الأجهزة الذكية </div>
                </div>
             </div>
           <div class="sidebar"  >
               <div id="sidebar">
                <h4>القسم </h4>
                <select>
                    <option value="">موبايلات </option>
                    <option value="">أجهزة لوحية </option>
                    <option value="">ملحقات و اكسسوارات </option>
                    <option value="">باور بانك </option>
                    <option value="">الساعات و الأجهزة الذكية </option>
                </select>
                <h4>الفئات </h4>
                <ul>
                    <li class="active">موبايلات</li>
                    <li>أجهزة لوحية </li>
                    <li>ملحقات و اكسسوارات </li>
                    <li>باور بانك </li>
                    <li>الساعات و الأجهزة الذكية </li>
                </ul>
                <hr>
                <h4>الماركة</h4>
                <ul class="filter">
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                </ul>
                <h4>حجم الشاشة</h4>
                <ul class="filter">
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                </ul>
                <h4>الذاكرة العشوائية</h4>
                <ul class="filter">
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                </ul>
                <h4>الذاكرة الداخلية</h4>
                <ul class="filter">
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                </ul>
                <h4>سعة البطارية</h4>
                <ul class="filter">
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                </ul>
                <h4>المعالج</h4>
                <ul class="filter">
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                </ul>
                <h4>دقة الكاميرا</h4>
                <ul class="filter">
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                </ul>
                 <h4>التقييم</h4>
                  <ul class="rate">
                    <li> <Icon icon="carbon:star-filled" class="checked" /></li>
                    <li><Icon icon="carbon:star-filled" class="un-checked" /></li>
                    <li><Icon icon="carbon:star-filled" class="un-checked" /></li>
                    <li><Icon icon="carbon:star-filled" class="un-checked" /></li>
                    <li><Icon icon="carbon:star-filled" class="un-checked" /></li>
                    <li> <span>وأكثر</span></li>
                </ul>
                <h4>اللون</h4>
                  <ul class="color">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h4>الحالة</h4>
                <ul class="filter">
                    <li><input type="checkbox"> <label>All</label></li>
                    <li><input type="checkbox"> <label>All</label></li>
                </ul>
                <hr>
               </div>
               
           </div>
            <div class="icon" id="iconSide" @click="openside()">
                <i  class="fa fa-angle-left"></i>
            </div>
           <div class="contain" @click="showSide = false">
               <div class="top">
                   <div>1-16 نتيجة من أكثر من 500 النتائج </div>
                   <div>
                       <label for="">ترتيب حسب</label>
                       <select>
                            <option value="">أحدث الإضافات</option>
                            <option value="">الأكثر رواجاً</option>
                            <option value="">السعر من الأعلى إلى الأقل</option>
                            <option value="">السعر من الأقل إلى الأعلى</option>
                        </select>
                   </div>
               </div>
               <div class="offers-contain">
              
               <div class="offer-item" v-for="item in 4" :key="item">
                     <router-link :to="`/productdetails`" style="color: #000000;text-decoration: none;">
                  <div class="imag"> <img src="@/../public/img/pic1.png" alt=""></div>
                  <p>هاتف ريدمي نوت 10s ثنائي الشريحة بذاكرة رام 6 جيجابايت وذاكرة داخلية 128 جيجابايت ويدعم تقنية 4G LTE أزرق محيطي - إصدار عالمي</p>
                 
                    <div class="price"> 
                     <span class="n-price">1,000,000</span>-
                        <span class="n-price">1,000,000</span> <span>ل.س</span>
                    </div>
                    <div class="rate">
                          <Icon icon="carbon:star-filled" class="checked" />
                          <Icon icon="carbon:star-filled" class="checked" />
                          <Icon icon="carbon:star-filled" class="checked" />
                          <Icon icon="carbon:star-filled" class="checked" />
                          <Icon icon="carbon:star-filled" class="checked" />
                          <span>(20)</span>
                    </div>
                     </router-link>
               </div>
               
           </div>
           <div class="offers-contain">
               <div class="offer-item" v-for="item in 4" :key="item">
                  <div class="imag"> <img src="@/../public/img/pic1.png" alt=""></div>
                  <p>هاتف ريدمي نوت 10s ثنائي الشريحة بذاكرة رام 6 جيجابايت وذاكرة داخلية 128 جيجابايت ويدعم تقنية 4G LTE أزرق محيطي - إصدار عالمي</p>
                 
                    <div class="price"> 
                     <span class="n-price">1,000,000</span>-
                        <span class="n-price">1,000,000</span> <span>ل.س</span>
                    </div>
                    <div class="rate">
                          <Icon icon="carbon:star-filled" class="checked" />
                          <Icon icon="carbon:star-filled" class="checked" />
                          <Icon icon="carbon:star-filled" class="checked" />
                          <Icon icon="carbon:star-filled" class="checked" />
                          <Icon icon="carbon:star-filled" class="checked" />
                          <span>(20)</span>
                    </div>
               </div>
           </div>
         
           <div class="offers-contain">
               <div class="offer-item" v-for="item in 4" :key="item">
                  <div class="imag"> <img src="@/../public/img/pic1.png" alt=""></div>
                  <p>هاتف ريدمي نوت 10s ثنائي الشريحة بذاكرة رام 6 جيجابايت وذاكرة داخلية 128 جيجابايت ويدعم تقنية 4G LTE أزرق محيطي - إصدار عالمي</p>
                   
                    <div class="price"> 
                     <span class="n-price">1,000,000</span>-
                        <span class="n-price">1,000,000</span> <span>ل.س</span>
                    </div>
                    <div class="rate">
                          <Icon icon="carbon:star-filled" class="checked" />
                          <Icon icon="carbon:star-filled" class="checked" />
                          <Icon icon="carbon:star-filled" class="checked" />
                          <Icon icon="carbon:star-filled" class="checked" />
                          <Icon icon="carbon:star-filled" class="checked" />
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
    name: 'products',
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
    svg.checked{
        color: #ffce31;
        font-size: 20px;
    }  
    svg.un-checked{
        color: #d2d2d2;
        font-size: 20px;
    }
.content-body{
    font-family: 'Tajawal', sans-serif;
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
    grid-template-areas: "nav nav" "sidebar product";
    position: relative;
    /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
    }
    .navbar{
        grid-area: nav;
        padding: 5px 20px;
        height: 41px;
        background: #F2F2F2;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
        h4{
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 0;
        }
        .category{
        display: flex;
        flex: 1;
        justify-content: space-around;
        div{
            font-weight: 500;
            font-size: 14px;
            position: relative;
            transition: .5s;
            cursor: pointer;
            &::after{
                position: absolute;
                content: '';
                width: 0;
                height: 3px;
                background-color: #000;
                bottom: -5px;
                left: 50%;
                transform: translateX(-50%);
                 transition: .5s;
             
            }
                &:hover{
                 &::after{width: calc(100% + 50px);}
            }
            
            &.active{
            &::after{
                position: absolute;
                content: '';
                width: calc(100% + 50px);
                height: 3px;
                background-color: #000;
                bottom: -5px;
                left: 50%;
                transform: translateX(-50%);
            }
            }

        }
        }
    }
    .sidebar{
        grid-area: sidebar;
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
                font-weight: 700;
            }
            h5{
                font-size: 18px;
                font-weight: 700;
                margin-inline-start: 10px;
            }
            select{
                margin-bottom: 15px;
                height: 34px;
                padding: 5px;
                width: 209px;
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
                    &.active{
                        color: #000000;
                        font-weight: 700;
                        font-size: 16px;
                    }
                }
            }
            .filter{
                li{
                 label{
                    color: #000000; 
                    margin-inline-start: 10px; 
                    margin-bottom: 0;
                 }
                }
            }
              .rate{
                display: flex; 
                li{
                 span{
                    color: #000000; 
                    margin-inline-start: 10px; 
                 }
                } 
                }
                .color{
                display: flex; 
                flex-wrap: wrap;
                li{
                    width: 25px;
                    height: 25px;
                    background: #702800;
                    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
                    border-radius: 3px;
                    margin: 0 5px 5px 5px;
                }
                }
            hr{
                background-color: #3f3f3f79;
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
        background-color: #fff;
        .top{
            padding: 20px;
            display: flex;
            justify-content: space-between;
            label{
            margin-inline-end: 10px;
            font-weight: 500;
            font-size: 16px;
            }
            select{
                height: 31px;
                padding: 5px;
                width: 180px;
            }
        }
    .offers-contain{
    grid-area: product;
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
            cursor: pointer;
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
                
                margin-bottom: 15px;
                .n-price{
                font-weight: 700;
                font-size: 18px;
                line-height: 27px;
                text-align: start;
                color: #000000;
                margin: 0 5px;
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
                    font-size: 23px;
                }
                span{
                    margin-inline-start: 5px;
                }
            }
        }
    }
    }
}
</style>
