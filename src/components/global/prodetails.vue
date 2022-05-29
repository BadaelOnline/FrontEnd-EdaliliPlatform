<template>
        <div class="content-body">
             <div id="cover_dep4" class="backcover4" @click="close_dep()"></div>
            <div class="Departments_small4" id="Dep4" 
                         :style="[lang == 'ar' ? ' right: -400px;':' left: -400px;']">
                            <div class="title" >
                                <h4>متوفر في 10 متاجر:</h4>
                                <div class="d-flex align-items-center justify-content-between flex-sm-row flex-column">
                                    <span>ترتيب النتائج حسب:</span>
                                    <select name="" id="">
                                        <option value=""> السعر: من الأقل إلى الأعلى </option>
                                    </select>
                                </div>
                            </div>
                            <div class="category">
                                <div class="item" 
                                v-for="(item,inde) in 10" :key="inde">
                                <div class="info">
                                    <div class="imag"></div>
                                    <div class="name">
                                        <span>Direct</span> 
                                        <span class="space">يبعد 1.65 كم</span> 
                                        </div>
                                </div>
                                <div class="price">س.ل 1,000,000</div>
                                <div class="delv">يتوفر توصيل</div>
                                </div>   
                            </div>
                        </div> 
             <!-- <div id="cover" class="cover" @click="closeside()"></div> -->
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
           <div class="contain" >
             <div class="product-details">
                 <div class="title">موبايلات، أجهزة لوحية و اكسسوارات - موبايلات - شاومي</div>
                <div class="sli">
                   <div class="selec">
                       <img src="@/../public/img/pic1.png" alt="" :class="[ind == index? 'active':'']"
                       v-for="(item,index) in 5" :key="index" @click="ind = index">
                   </div>
                   <div class="view">
                       <div class="conta"
                       :style="{ transform: 'translateY(-'+ 555*(ind)+'px)'}">
                     <div v-for="(item,index) in 5" :key="index">
                           <img src="@/../public/img/xiomi.png" alt="" >
                     </div>
                       </div>
                   </div>
                </div>
                 <div class="sli sli-sm">
                   <div class="selec">
                       <img src="@/../public/img/pic1.png" alt="" :class="[ind == index? 'active':'']"
                       v-for="(item,index) in 5" :key="index" @click="ind = index">
                   </div>
                   <div class="view">
                       <div class="conta"
                       :style="{ transform: 'translateY(-'+ 300*(ind)+'px)'}">
                     <div v-for="(item,index) in 5" :key="index">
                           <img src="@/../public/img/xiomi.png" alt="" >
                     </div>
                       </div>
                   </div>
                </div>
                <div class="details">
                    <h4 v-if="storeChosen">من متجر Direct </h4>
                    <h1>شاومي ريدمي نوت 11 ثنائي الشريحة امولد دوت ديسبلاي غرافيت رمادي 6 جيجا رام 128 جيجا الجيل الرابع ال تي اي مع ريدمي باد 3 لايت اسود</h1>
                    <div class="rate">
                        <span class="brand-name">Xiaomi |</span>
                       
                        <Icon icon="carbon:star-filled" class="checked" />
                        <Icon icon="carbon:star-filled" class="checked" />
                        <Icon icon="carbon:star-filled" class="checked" />
                        <Icon icon="carbon:star-filled" class="checked" />
                        <Icon icon="carbon:star-filled" class="un-checked" />
                        
                        <span class="checked">4.0</span>

                        <span class="brand-name">(20 تقييم)</span>
                        <span class="link">قراءة التقييمات </span>
                    </div>
                    <div class="rang-price">
                        <span>1,000,000 </span>
                        -
                        <span>1,100,000</span>
                        ل.س
                    </div>
                    <div class="quantity"  v-if="storeChosen">
                        <span>الكمية:</span>
                        <span class="quantity-val">متبقي 2 فقط في المخزون</span>
                    </div>
                    <div class="checkout" v-if="!storeChosen">
                        <div class="d-flex align-items-center m-2">
                       <i class="fas fa-check-circle m-1" style="color:#00ca00"></i>
                        <span  style="font-weight: bold;">متوفر في 10 متاجر</span>
                        </div>
                        <button class="subscribe" @click="toggle_vs()">
                            قارن الأسعار
                            <i class="fas fa-chevron-circle-left"></i>
                        </button>
                        <button class="liked" @click="toggle"><span :class="{ 'heart-active': toggled }"
                                class="heart"
                            ></span></button>
                    </div>
                    <div class="checkout" v-else>
                        <select>
                            <option selected value="1">1</option>
                            <option  value="2">2</option>
                            <option  value="3">3</option>
                        </select>
                      <button class="subscribe" @click="toggle_vs()">
                            قارن الأسعار
                            <i class="fas fa-chevron-circle-left"></i>
                        </button>
                        <button class="add">إضافة إلى عربة التسوق</button>
                        <button class="liked" @click="toggle"><span :class="{ 'heart-active': toggled }"
                                class="heart"
                            ></span></button>
                    </div>
                    <div class="colors">
                        <span>الكمية:</span>
                        <span class="colors-val">{{color_val}}</span>
                    </div>
                    <div class="img-colors">
                        <div :class="[color_val2 == 'غرافيت رمادي'?'active':'']" 
                        @mouseover="hovColor('غرافيت رمادي')" @click="setColor('غرافيت رمادي')"
                        @mouseleave="color_val = color_val2"> 
                            <img src="@/../public/img/xiomi.png" alt="">
                        </div>
                        <div :class="[color_val2 == 'ستار أزرق'?'active':'']" 
                        @mouseover="hovColor('ستار أزرق')" @click="setColor('ستار أزرق')"
                        @mouseleave="color_val = color_val2"> 
                            <img src="@/../public/img/xiomi.png" alt="">
                        </div>
                        <div :class="[color_val2 == 'ستار أحمر'?'active':'']" 
                        @mouseover="hovColor('ستار أحمر')" @click="setColor('ستار أحمر')"
                        @mouseleave="color_val = color_val2"> 
                            <img src="@/../public/img/xiomi.png" alt="">
                        </div>
                        <div class="disable"> 
                            <img src="@/../public/img/xiomi.png" alt="">
                        </div>
                    </div>
                    <div class="colors">
                        <span>الذاكرة الداخلية:</span>
                        <span class="colors-val">{{storage_val}}</span>
                    </div>
                    <div class="img-colors">
                        <div :class="[storage_val2 == '32 GB'?'active':'']" 
                        @mouseover="hovstorage('32 GB')" @click="setstorage('32 GB')"
                        @mouseleave="storage_val = storage_val2"> 
                           <span>32 GB</span>
                        </div>
                        <div :class="[storage_val2 == '64 GB'?'active':'']" 
                        @mouseover="hovstorage('64 GB')" @click="setstorage('64 GB')"
                        @mouseleave="storage_val = storage_val2"> 
                            <span>64 GB</span>
                        </div>
                        <div :class="[storage_val2 == '128 GB'?'active':'']" 
                        @mouseover="hovstorage('128 GB')" @click="setstorage('128 GB')"
                        @mouseleave="storage_val = storage_val2"> 
                            <span>128 GB</span>
                        </div>
                        <div class="disable"> 
                             <span>256 GB</span>
                        </div>
                    </div>
                    <div class="notes-owner">
                        <h5>ملاحظات التاجر:</h5>
                        <ul>
                            <li>- ملاحظة 1</li>
                            <li>- ملاحظة 2</li>
                            <li>- ملاحظة 3</li>
                            <li>- ملاحظة 4</li>
                        </ul>
                    </div>
                </div>
             </div>
             <div class="data-details">
                 <div class="head">
                     <div class="item" @click="disc_item = 0"
                     :class="[disc_item == 0 ? 'active':'']">وصف المنتج</div>
                     <div class="item" @click="disc_item = 1"
                     :class="[disc_item == 1 ? 'active':'']">التفاصيل التقنية</div>
                     <div class="item" @click="disc_item = 2"
                     :class="[disc_item == 2 ? 'active':'']">المراجعات و التقييمات</div>
                 </div>
             </div>
            <div class="dis-item1" v-if="disc_item == 0">
                     <div class="disc-item">
                         <h4>الميزات الأساسية:</h4>
                        <p>يتميز هاتف Y12s ببطارية سعة 5000 مللي أمبير/ الساعة تدعم تقنية الذكاء الاصطناعي لتوفير الطاقة. يتميز بشاشة عرض هيلو فول فيو مقاس 6.51 بوصة بصمة إصبع جانبية بتصميم يدمج ماسح بصمة الأصبع مع زر الطاقة. كاميرا مزدوجة بتقنية الذكاء الاصطناعي مع كاميرا خلفية بدقة 13 ميجابكسل وكاميرا بوكيه بدقة 2 ميجابكسل. يركز برنامج Multi-Turbo 3.0 الحصري لدينا على تحسين المشاهد الأساسية لتقليل الانقطاع والتأخر في الألعاب.</p>
                     </div>
                     <div class="disc-item">
                         <h4>نظرة عامة :</h4>
                        <p>الميزات الأساسية نظرة عامة تقنية البلوتوث: 5.0، A2DP، LE، مزود بمكبر صوت: نعم </p>
                     </div>
            </div>
            <div class="dis-item2"  v-if="disc_item == 1">
                    <div class="disc-item">
                        <div class="item backColor">
                            <h5>Operating System Version</h5>
                            <h5>Android 10, Funtouch 11</h5>
                        </div>
                        <div class="item">
                            <h5>Processor</h5>
                            <h5>Mediatek MT6765 Helio P35 </h5>
                        </div>
                        <div class="item backColor">
                            <h5>Display Resolution</h5>
                            <h5>720 x 1600 pixels</h5>
                        </div>
                        <div class="item">
                            <h5>Bluetooth</h5>
                            <h5>5.0, A2DP, LE</h5>
                        </div>
                        <div class="item backColor">
                            <h5>Loudspeaker</h5>
                            <h5>Yes</h5>
                        </div>
                     </div>
                     <div class="disc-item">
                        <div class="item backColor">
                            <h5>Operating System Version</h5>
                            <h5>Android 10, Funtouch 11</h5>
                        </div>
                        <div class="item">
                            <h5>Processor</h5>
                            <h5>Mediatek MT6765 Helio P35 </h5>
                        </div>
                        <div class="item backColor">
                            <h5>Display Resolution</h5>
                            <h5>720 x 1600 pixels</h5>
                        </div>
                        <div class="item">
                            <h5>Bluetooth</h5>
                            <h5>5.0, A2DP, LE</h5>
                        </div>
                        <div class="item backColor">
                            <h5>Loudspeaker</h5>
                            <h5>Yes</h5>
                        </div>
                     </div>
            </div>
            <div class="dis-item3" v-if="disc_item == 2">>
                      <div class="rating-user">
                          <h5>مراجعات المستخدمين للمتجر</h5>
                          <div class="rating">
                                <Icon icon="carbon:star-filled" />
                                <Icon icon="carbon:star-filled" />
                                <Icon icon="carbon:star-filled" />
                                <Icon icon="carbon:star-filled" />
                                <Icon icon="carbon:star-filled" />
                                <span> 5 من 5</span>
                          </div>
                          <div class="rate">
                            <div>
                                  <span>5 نجوم</span>
                                  <span class="star-rate">
                                   
                                    <span>
                                    <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   </span>
                                    <span>(20)</span>
                                  </span>
                            </div>
                            <div>
                                  <span>4 نجوم</span>
                                  <span class="star-rate">
                                       <span>
                                           <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                       </span>
                                   

                                    <span>(0)</span>
                                  </span>
                            </div>
                            <div>
                                  <span>3 نجوم</span>
                                  <span class="star-rate">
                                       <span>
                                            <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                       </span>
                                  

                                    <span>(0)</span>
                                  </span>
                            </div>
                            <div>
                                  <span>نجمتان</span>
                                  <span class="star-rate">
                                       <span>
                                           <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                       </span>
                                   
                                    <span>(0)</span>
                                  </span>
                            </div>
                            <div>
                                  <span>نجمة واحدة</span>
                                  <span class="star-rate">
                                   <span>
                                    <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                   </span>
                                    <span>(0)</span>
                                  </span>
                            </div>
                          </div>
                          <div class="share">
                              <h5>شارك تجربتك مع الآخرين</h5>
                              <button>قم بتقييم المتجر</button>
                          </div>
                      </div>
                      <div class="reviews">
                          <div class="item-review" v-for="item in 5" :key="item">
                              <div class="data-user">
                                    <div class="imag"></div>
                                    <div class="user-name">
                                        <div>username</div>
                                        <div>
                                            <Icon icon="carbon:star-filled" />
                                            <Icon icon="carbon:star-filled" />
                                            <Icon icon="carbon:star-filled" />
                                            <Icon icon="carbon:star-filled" />
                                            <Icon icon="carbon:star-filled" />
                                        </div>
                                        <div class="date">13/3/2021</div>
                                    </div>
                                    <div class="proccess-pay">
                                        <button></button>
                                        <span>عملية بيع مؤكدة</span>
                                    </div>
                              </div>
                              <div class="comments">
                                  مراجعة المستخدم و تعليقاته على المنتج
                              </div>
                          </div>
                      </div>
                  </div>
            <swiper class="swiper"
            :breakpoints="swiperOptions.breakpoints"
            :speed="1000"
            navigation
            :pagination="{ clickable: true }">
            <swiper-slide v-for="item in 20"  :key="item">
             <div class="offer-item">
                  <div class="imag"> <img src="@/../public/img/pic1.png" alt=""></div>
                  <p>هاتف ريدمي نوت 10s ثنائي الشريحة بذاكرة رام 6 جيجابايت وذاكرة داخلية 128 جيجابايت ويدعم تقنية 4G LTE أزرق محيطي - إصدار عالمي</p>
                    <div class="price"> 
                        <span class="n-price">1,000,000 ل.س</span>
                        <span class="o-price">1,000,000 ل.س</span>
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
            </swiper-slide>
               
            </swiper>
              
           </div>
        </div>
</template>

<script>

import { Icon } from '@iconify/vue';
// import $ from 'jquery';
// swiper
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);
export default {
    name: 'products',
    data() {
        const lang = localStorage.getItem('lang') || 'ar';
        return {
          lang: lang,
          storeChosen: false,
          disc_item:0,
          ind: 0,
          toggled: false,
          color_val:'غرافيت رمادي',
          color_val2:'غرافيت رمادي',
          storage_val:'32 GB',
          storage_val2:'32 GB',
           swiperOptions: { 
                breakpoints: {
       
        300:{  // when window width from 300px to 576px
            slidesPerView: 1,
            spaceBetween:20
       },
       576:{  // when window width from 576px to 767px
            slidesPerView: 2,
            spaceBetween:20
       },
        767: { // when window width from 767px to 991px
            slidesPerView: 3,
            spaceBetween:20
        },
      
        991: { // when window width from 991px to 1200px
            slidesPerView:4,
            spaceBetween:20
        },
         1200: { // when window width from 1200px to higher
            slidesPerView: 5,
            spaceBetween:20    
        },
        }
        }
        };
    },
    components: {
    Icon,  
    Swiper,
    SwiperSlide,
    },
    methods:{
         toggle_vs(){
          if(this.lang == 'ar'){
            document.getElementById('Dep4').classList.toggle("Dep_vs_ar");
            document.getElementById('cover_dep4').classList.add("vs2");
             }
             else{
            document.getElementById('Dep4').classList.toggle("Dep_vs_en");
            document.getElementById('cover_dep4').classList.add("vs2");
             }
      },
       close_dep(){
           if(this.lang == 'ar'){
                document.getElementById('cover_dep4').classList.remove("vs2");
                document.getElementById('Dep4').classList.remove("Dep_vs_ar");
             
             }
             else{
            document.getElementById('cover_dep4').classList.remove("vs2");
            document.getElementById('Dep4').classList.remove("Dep_vs_en");
            
             }
         
      },
        toggle: function (event) {
            event.currentTarget.classList.toggle('heart-active');
            this.toggled = !this.toggled;
        },
        hovColor(val){
            this.color_val = val;
        },
        setColor(val){
        this.color_val2 = val;
        },
        hovstorage(val){
            this.storage_val = val;
        },
        setstorage(val){
        this.storage_val2 = val;
        },
        },     
};
</script>

<style lang="scss" scoped>
$ButtonColor: #247ba0;
$HoverColor: #1D7094;
$redColor :#DE222A;
   .swiper-button-next{
    &::after{
        color: #808080 !important;
    }
    }
svg.checked{
        color: #ffce31;
        font-size: 20px;
    }  
    svg.un-checked{
        color: #d2d2d2;
        font-size: 20px;
    }
.Departments_small4{
     position: fixed;
    background-color: #fff;
    z-index: 98;
    top: 0;
    width: 400px;
    height: 100%;
    transition: .5s;
    color: #000;
}

.Departments_small4 .title{
    text-align: start;
    padding: 10px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
    
}
.Departments_small4 .title h4{
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
}
.Departments_small4 .category{
    background: #F2F2F2;
    padding-top: 10px;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none;
}
.Departments_small4 .category .item{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
    font-size: 18px;
    cursor: pointer;
    transition: .3s;
}
.Departments_small4 .category .item .info{
    display: flex;
}
.Departments_small4 .category .item .price{
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #247BA0;
}
.Departments_small4 .category .item .delv{
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #808080;
}
.Departments_small4 .category .item .info .name{
    display: flex;
    flex-direction: column;
    margin-inline-start: 10px;
    text-align: start;
}
.Departments_small4 .category .item .info .space{
    color: #808080;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
}
.Departments_small4 .category .item .info .imag{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ddd;
}
.Departments_small4 .category .item .info .imag img{
    width: 100%;
    height: 100%;
}
.Departments_small4 .category .item:hover{
    background-color: #e6e6e6;
}
@media (max-width:568px) {
.Departments_small4{
    width: 90%;
}
.Departments_small4 .category .item{
    flex-wrap: wrap;
    border-bottom: 1px solid #ddd;
}
.Departments_small4 .category .item .info{
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
}
}
.Dep_vs_ar{
 right: 0 !important;
}
.Dep_vs_en{
 left: 0 !important;
}
.backcover4{
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 85;
    top:  0;
    display: none;
}
.vs2 {
    display: block;
}
.content-body{
    font-family: 'Tajawal', sans-serif;
    display: flex;
    flex-direction: column;
    width: 100%;
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
    position: relative;
    .navbar{
        grid-area: nav;
        padding: 5px 20px;
        height: 41px;
        /* Extra small devices (portrait phones, less than 576px) */
        @media (max-width: 767.98px) {
            height: auto;
        }
        background: #F2F2F2;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
        h4{
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 0;
        /* Extra small devices (portrait phones, less than 576px) */
        @media (max-width: 767.98px) {
            display: none;
        }
        }
        .category{
        display: flex;
        flex: 1;
        justify-content: space-around;
        /* Extra small devices (portrait phones, less than 576px) */
        @media (max-width: 767.98px) {
           flex-direction: column;
           align-items: flex-start;
        }
        div{
            font-weight: 500;
            font-size: 14px;
            position: relative;
            transition: .5s;
            cursor: pointer;
           /* Extra small devices (portrait phones, less than 576px) */
        @media (max-width: 767.98px) {
          margin: 5px 0;
        }
          
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
        padding: 0 20px;
        background-color: #fff;
        width: 100%;
        .product-details{
            display: flex;
            flex-wrap: wrap;
            .title{
                width: 100%;
                padding: 20px;
                text-align: start;
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
            }
            
            .sli{
            display: flex;
            width: 50%;
            padding: 20px;
            /* Small devices (landscape phones, 576px and up) */
            @media (max-width: 767.98px) {
                width: 100%;
                padding: 10px;
            }
                /* Extra small devices (portrait phones, less than 576px) */
            @media (max-width: 575.98px) {
                display: none;
            }
            .selec{
                display: flex;
                flex-direction: column;
                width: 30%;
                img{
                    width: 100px;
                    margin: 0 0 10px;
                    padding:5px ;
                    border: 2px solid #ddd;
                    cursor: pointer;
                    border-radius: 3px;
                    &.active{
                    border: 2px solid $ButtonColor;
                    }
                }
            }
            .view{
                height: 555px;
                overflow: hidden;
               .conta{
                display: flex;
                flex-direction: column;
                transform: translateY(0px);
                transition: .5s;
                div{
                     height: 555px;
                    img{
                        height: 100%;
                        width: 100%;
                }
                }
               }
                
            }
            }
            .sli-sm{
                display: none;
                /* Extra small devices (portrait phones, less than 576px) */
            @media (max-width: 575.98px) {
                display: flex;
            }
             .selec{
                width: 20%;
                img{
                    width: 50px;
                }
            }
            .view{
                height: 300px;
               .conta{
                div{
                     height: 300px;
                }
               }
            }
            }
            .details{
                width: 50%;
                padding: 20px;
                /* Small devices (landscape phones, 576px and up) */
            @media (max-width: 767.98px) {
                width: 100%;
                padding: 10px;
            }
                h4{
                text-align: start;
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                color: #808080;
                }
                h1{
                text-align: start;
                font-weight: 700;
                font-size: 24px;
                line-height: 36px;
                color: #000000;
                }
                .rate{
                    display: flex;
                    flex-wrap: wrap;
                    padding-bottom: 20px;
                    .brand-name{
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    color: #808080;
                    margin-inline-end: 10px;
                    }
                    span.checked{
                        margin:0 5px;
                        color: #ffce31;
                        font-weight: 700;
                        font-size: 18px;
                    }
                    .link{
                    font-weight: 500;
                    font-size: 16px;   
                    text-decoration: underline;
                    transition: .3s;
                    cursor: pointer;
                    &:hover{
                        color: $ButtonColor;
                    } 
                    }
                }
            }
            .rang-price{
                display: flex;
                margin-bottom: 20px;
                font-weight: 700;
                font-size: 24px;
                color: $ButtonColor;
                span{
                    margin: 0 5px;
                }
            }
            .quantity{
            display: flex; 
            font-size: 16px;
            font-weight: 500;
            padding-bottom: 5px;
            .quantity-val{
                font-weight: 700;
                margin-inline-start: 10px;
                color: $redColor;
            }
            }
            .checkout{
                display: flex;
                flex-wrap: wrap;
                padding-bottom: 20px;
                select{
                background: #FFFFFF;
                border: 1px solid #808080;
                box-sizing: border-box;
                border-radius: 5px;
                width: 50px;
                height: 40px;
                text-align: center;
                margin-bottom: 10px;
                margin-inline-end: 10px;
                /* Extra small devices (portrait phones, less than 576px) */
                @media (max-width: 575.98px) {
                     margin-inline-end: 5px;
                }
                }
                .subscribe{
                width: auto;
                padding: 0 15px;
                height: 40px;
                background: linear-gradient(180deg, #FF4B52 0%, #ED1C24 100%, #ED1C24 100%);
                border-radius: 5px;
                border: none;
                color: #fff;
                transition: .5s;
                margin-bottom: 10px;
                margin-inline-end: 10px;
                /* Extra small devices (portrait phones, less than 576px) */
                @media (max-width: 575.98px) {
                     margin-inline-end: 5px;
                }
                &:hover{
                    background: linear-gradient(180deg, #ED1C24 0%, #ED1C24 100%, #ED1C24 100%);
                }
                }
                .add{
                width: 203px;
                height: 40px;
                background: linear-gradient(180deg, #00A3E8 0%, #247BA0 100%);
                border-radius: 5px;
                border: none;
                color: #fff;
                transition: .5s;
                margin-inline-end: 10px;
                /* Extra small devices (portrait phones, less than 576px) */
                @media (max-width: 575.98px) {
                     width: 180px;
                     margin-inline-end: 5px;
                }
                &:hover{
                    background: linear-gradient(180deg, #247BA0 0%, #247BA0 100%);
                }
                }
               .liked{
                position: relative;
                background-color: transparent;
                border: 1px solid #b0b0b0;
                border-radius: 5px;
                width: 45px;
                height: 42px;
                .heart {
                    width: 100px;
                    height: 100px;
                    background: url('../../../public/img/heart.png') no-repeat;
                    background-position: left;
                    background-size: 2900%;
                    position: absolute;
                    top: 26px;
                    left: 2px;
                    transform: translate(-30%, -55%);
                    &.heart.heart-active {
                        background-position: right;
                        animation: animate 0.8s steps(28) 1;
                    }
                    @keyframes animate {
                        0% {
                            background-position: left;
                        }
                        100% {
                            background-position: right;
                        }
                    }
                }
                }
            }
            .colors{
            display: flex;
            padding-bottom: 5px;
            font-size: 16px;
            font-weight: 500;
            padding-bottom: 5px;
            .colors-val{
                font-weight: 700;
                margin-inline-start: 10px;
            }

            }
            .img-colors{
                display: flex;
                margin-bottom: 20px;
                div{
                border: 1px solid #ddd;
                border-radius: 5px;
                padding: 10px;
                margin-inline-end:5px;
                cursor: pointer;
                transition: .3s;
                &:hover{
                 border: 1px solid #000;   
                }
                &.active{
                    border: 2px solid $ButtonColor;
                    &:hover{
                    border: 2px solid $ButtonColor; 
                    }
                    
                }
                &.disable{
                   opacity: .7;
                   cursor: no-drop;
                   &:hover{
                    border: 1px solid #ddd; 
                    }
                }
                img{
                    width: 45px;
                    height: 50px;
                }
                }
            }
            .notes-owner{
                display: flex;
                flex-direction: column;
                align-items: start;
                h5{
                font-weight: 500;
                font-size: 16px;
                }
                ul{
                    padding: 0;
                    list-style: none;
                    li{
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 24px;
                    }
                }
            }
        }
        .data-details{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            border-bottom: 3px solid #C0C0C0;
            padding: 10px 20px;
            .head{
            width: 100%;
            display: flex;
            justify-content: start;
            /* Extra small devices (portrait phones, less than 576px) */
                @media (max-width: 575.98px) {
                    justify-content: space-between;
                }
            .item{
                color: #808080;
                transition: .3s;
                width: 180px;
                /* Extra small devices (portrait phones, less than 576px) */
                @media (max-width: 575.98px) {
                    width: auto;
                    font-size: 14px;
                }
                cursor: pointer;
                font-weight: 500;
               &:hover{
                   color: #000;
               }
                &.active{
                     position: relative;
                    color: $ButtonColor;
                     &::after{
                    content: '';
                    position: absolute;
                    background-color: $ButtonColor;
                    height: 3px;
                    width: 100%;
                    transition: .3s;
                    bottom: -13px;
                    left: 0;
                }
                }
            }

            }
        }
        .dis-item1{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
            border-bottom: 3px solid #C0C0C0;
            .disc-item{
                width: 50%;
                /* Medium devices (tablets, 768px and up) */
                @media  (max-width: 991.98px) {
                width: 100%;
                }
                h4{
                text-align: start;
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                }
                p{
                text-align: start;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                }
            }
        }
        .dis-item2{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 20px;
            border-bottom: 3px solid #C0C0C0;
            .disc-item{
                width: 49%;
                /* Small devices (landscape phones, 576px and up) */
                @media (max-width: 767.98px) {
                width: 100%;   
                }
                .item{
                    padding: 5px;
                    display: flex;
                    h5{
                    text-align: start;
                    width: 50%;
                    margin: 0;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    color: #000000;  
                    }
                }
                .backColor{
                    background: #D3E5EC;
                }
            }
        }
        .dis-item3{
    svg{
        color: #ffce31;
    }  
    svg.un-checked{
        color: #d2d2d2;
    }
    padding: 20px;
    background-color: #fff;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    border-bottom: 3px solid #C0C0C0;
    .rating-user{
        // width: 30%;
        margin-inline-end: 50px;
        h5{
            text-align: start;
            font-weight: bold;
        }
    .rating{
            text-align: start;
            svg{
                font-size: 20px;
                margin-inline-end: 3px;
            }
            span{
                font-weight: bold;
            }
        }
        .rate{
            text-align: start;
            padding-bottom: 20px;
            border-bottom: 1px solid #808080;
            div{
                margin: 5px 0;
                display: flex;
                justify-content: space-between;
                svg{
                font-size: 20px;
                margin-inline-end: 3px; 
                }
                span{
                    font-weight: 500;
                }
                .star-rate{
                   width: 150px;
                }
            }
        }
        .share{
            h5{
            margin-top: 20px;
            font-weight: bold; 
            }
            button{
            padding: 5px 20px;
            width: 259px;
            height: 34px;
            background: linear-gradient(180deg, #FFFFFF 22.92%, #E8E8E8 100%);
            border: 1px solid #808080;
            border-radius: 3px;
            margin: 10px 0px;
            transition: .3s;
            cursor: pointer;
            &:hover{
                box-shadow: 0px 0px 5px #a6a5a5;
            }
            }
        }
    }
    .reviews{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px 0px;
    width: 53%;
    height: auto;
    /* Medium devices (tablets, 768px and up) */
    @media  (max-width: 991.98px) {
        flex: 1;
    }
    .item-review{
        padding: 20px 0;
        border-bottom: 2px solid #8080807a;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: self-start;
        &:last-child{
            border: none;
        }
    .data-user{
        display: flex;
        justify-content: space-between;
        .imag{
            width:50px;
            height: 50px;
            border-radius: 50%;
            background-color: #ddd;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .user-name{
            text-align: start;
            margin: 0 10px;
            .date{
                color: #808080;
                margin-block-start: -5px;
            }
        }
        .proccess-pay{
            display: flex;
            align-items: self-start;
            button{
                width: 11px;
                height: 11px;
                background-color: $ButtonColor;
                border-radius: 50%;
                border: none;
                margin: 5px;
            }
            span{
                font-weight: 500;
                color: $ButtonColor;
                font-size: 14px;
                line-height: 21px;
            }
        }
    }
    .comments{
        margin-top: 20px;
    }
    }
    }
    }
    .swiper{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
   
        .offer-item{
            display: flex;
            flex-direction: column;
            padding: 10px;
            background-color: #FFFFFF;
            width: 100%;
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
