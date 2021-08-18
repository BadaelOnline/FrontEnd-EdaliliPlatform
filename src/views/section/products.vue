<template>
    <div class="products">
        
        <Cartmini />
        <!--  show img  -->

        <div class="show-img">
            <div class="row">
                <div
                    class="col-md-6 img"
                    v-for="brand in brands.slice(0, 2)"
                    :key="brand.id"
                >
                    <img
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        :src="brand.image"
                    />
                </div>
            </div>
        </div>
        <!-- show  products -->
        <!-- second Carousel -->


    <swiper
    :slides-per-view="(Product.length / 2) + 1"
    :space-between="50"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="swipre_products">   
            
            <product  v-for="items in Product.slice(0,1)"
            :key="items.id"
            :id="items.id"
            :image="items.image"
            :short_des="items.short_des"
            :name="items.name">
            </product>
            
                                
    </swiper-slide>
    <swiper-slide class="swipre_products"  v-for="n in Product.length"   :key="n">   
            
            <product  v-for="items in Product.slice(0 + n,1 + n)"
            :key="items.id"
            :id="items.id"
            :image="items.image"
            :short_des="items.short_des"
            :name="items.name">
            </product>                         
    </swiper-slide>   
  </swiper>

<!-- Item slider end-->
        <!-- show market-->
        <div class="mar">
            <div
                class="show-market"
                v-for="bran in brands.slice(2, 7)"
                :key="bran.id"
            >
                <img
                    data-aos="flip-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    :src="bran.image"
                />
            </div>
        </div>
 
        <!-- show der -->
        <div class="show-der row">
            <div
                class="col-md-6 col-xs-12 img text-center"
                v-for="brand in brands.slice(7, 9)"
                :key="brand.id"
                :image="brand.image"
            >
                <img
                    data-aos="flip-down"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    :src="brand.image"
                />
            </div>
        </div>
        <!-- --------------------------------------------- -->
        <div class="content_cubic" v-if="Product.length > 0">
     
            <div class="row">
                <div class="col-lg-3 col-sm-4 col-xs-10">
                    <div class="last">اخر المشتركین</div>
 
    <input type="radio" id="radio-front" name="select-face"/>    
    <input type="radio" checked id="radio-left" name="select-face"/>
    <input type="radio" id="radio-right" name="select-face"/>
    <input type="radio" id="radio-top" name="select-face"/>
    <input type="radio" id="radio-bottom" name="select-face"/>
    <input type="radio" id="radio-back" name="select-face"/>

<div class="separator"></div>


<div class="space3d">
        
    
    <div class="_3dbox">
      <div class="_3dface _3dface--front">
         <Subscriber
         v-for="Store in Stores.slice(0, 1)"
         :key="Store.pr"
          :title="Store.title"
           />
      </div>
      <div class="_3dface _3dface--top">         
          <Subscriber 
       
        v-for="Store in Stores.slice(1, 2)"
        :key="Store.pr"
        :title="Store.title"
           /></div>
      <div class="_3dface _3dface--bottom">         
        <Subscriber
        
         v-for="Store in Stores.slice(2, 3)"
         :key="Store.pr"
          :title="Store.title"
           /></div>
      <div class="_3dface _3dface--left">         
          <Subscriber
           
         v-for="Store in Stores.slice(3, 4)"
         :key="Store.pr"
          :title="Store.title"
           /></div>
      <div class="_3dface _3dface--right">         
          <Subscriber
           
         v-for="Store in Stores.slice(4, 5)"
         :key="Store.pr"
          :title="Store.title"
           /></div>
      <div class="_3dface _3dface--back">         
          <Subscriber
           
         v-for="Store in Stores.slice(5, 6)"
         :key="Store.pr"
          :title="Store.title"
           /></div>
    </div>
    
</div>

<div class="separator"></div>
                </div>
                <div class="col-lg-9 col-sm-8 col-xs-10">
              
    <swiper
    :slides-per-view="(Product.length / 2) + 1"
    :space-between="50"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="swipre_products">   
            
            <product  v-for="items in Product.slice(0,1)"
            :key="items.id"
            :id="items.id"
            :image="items.image"
            :short_des="items.short_des"
            :name="items.name">
            </product>
            
                                
    </swiper-slide>
    <swiper-slide class="swipre_products"  v-for="n in Product.length"   :key="n">   
            
            <product  v-for="items in Product.slice(0 + n,1 + n)"
            :key="items.id"
            :id="items.id"
            :image="items.image"
            :short_des="items.short_des"
            :name="items.name">
            </product>                         
    </swiper-slide>   
  </swiper>
                </div>
            </div>
        </div>
           
      

    <div class="unavaible_product" v-else>
        <img src="../../../public/img/unavalible.jpg">
       <h2>Ops... Products not available.</h2> 
      </div>
    </div>

</template>
<style lang="scss" scoped>
.swiper-slide {
    width: 180px !important;
}
$cubeWidth: 200px;
$cubeHeight: 200px;
$cubeDepth: $cubeHeight;

.separator {
  margin-top: 40px;
}
 .content_cubic input{
     margin: 0 5px;
 } 
/* 3D Cube */
.space3d {
  perspective: 1000px;
  width: $cubeWidth;
  height: $cubeHeight;
  text-align: center;
  display: inline-block;
}

._3dbox {
  display: inline-block;
  transition: all 0.85s cubic-bezier(0.175,0.885,0.320,1.275);

  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
//   transform: rotateX(-15deg) rotateY(15deg);
}

._3dface {
  overflow: hidden;
  position: absolute;
  border: 1px solid #888;
  background: #FFF;
  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.1),
 0 0 50px rgba(0, 0, 0, 0.3);
  color: #333;
  opacity: 0.9;
}
._3dface:hover {
  opacity: 1;
}

._3dface--front {
  width: $cubeWidth;
  height: $cubeHeight;
  transform: translate3d(0, 0, $cubeDepth / 2);
}
  
._3dface--top {
  width: $cubeWidth;
  height: $cubeDepth;
  transform: rotateX(90deg) translate3d(0, 0, $cubeHeight / 2);
}

._3dface--bottom {
  width: $cubeWidth;
  height: $cubeDepth;
  transform: rotateX(-90deg) translate3d(0, 0, $cubeHeight / 2);
}

._3dface--left {
  width: $cubeDepth;
  height: $cubeHeight;
  left: 50%;
  margin-left: -$cubeDepth / 2;
  transform: rotateY(-90deg) translate3d(0, 0, $cubeWidth / 2);
}


._3dface--right {
  width: $cubeDepth;
  height: $cubeHeight;
  left: 50%;
  margin-left: -$cubeDepth / 2;
  transform: rotateY(90deg) translate3d(0, 0, $cubeWidth / 2);
}


._3dface--back {
  width: $cubeWidth;
  height: $cubeHeight;
  transform: rotateY(180deg) translate3d(0, 0, $cubeDepth / 2);
}

#radio-left:checked ~ .space3d ._3dbox {
  transform: rotateY(90deg); 
  
}
  
#radio-right:checked ~ .space3d ._3dbox {
  transform: rotateY(-90deg); 
  
}
  
#radio-bottom:checked ~ .space3d ._3dbox {
  transform: rotateX(90deg); 
 
}

#radio-top:checked ~ .space3d ._3dbox {
  transform: rotateX(-90deg); 

}
  
#radio-back:checked ~ .space3d ._3dbox {
  transform: rotateY(180deg); 
  
}

  // Apply backgrounds
  ._3dface--front {
  background: url('../../../public/img/market-logo2.jpg');
  background-size: 100%;
}
  
  ._3dface--left {
  background: url('../../../public/img/market-logo.png');
  background-size: auto 100%;
}
  
   ._3dface--right {
  background: url('../../../public/img/market-logo3.jpg');
  background-size: auto 100%;
}
  
   ._3dface--top {
  background: url('../../../public/img/market-logo2.jpg');
  background-size: auto 100%;
}
  
   ._3dface--bottom {
  background: url('../../../public/img/market-logo.png');
  background-size: auto 100%;
}
  
  ._3dface--back {
  background: url('../../../public/img/market-logo3.jpg');
  background-size: auto 100%;
}
</style>
<style scoped>
.contain_Product{
    display: flex;
    margin-bottom: 30px;
    overflow-x: scroll;
    padding: 0px 10px;
    scrollbar-width: thin;
    scrollbar-color: #ddd #eee ;
    }
.show-img {
    width: 100%;
    height: 370px;
    border-radius: 7px;
}
.show-prod {
    padding: 0 10px;
}
.show-img .row .img {
    text-align: center;
    transition: all 0.5s;
}

.show-img .row .img:hover {
    transform: scale3d(1.05, 1.05, 1);
}
.show-img .row .img img {
    margin: 40px 0 40px 0;
    width: 90%;
    height: 60%;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-img {
        height: auto;
    }
    .show-img .img:last-child {
        display: none;
    }
    .show-img .img img {
        width: 80%;
    }
    .show-prod {
        height: auto;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .show-img {
        height: 280px;
    }
    .show-img .img:last-child {
        display: none;
    }
    .show-img .img img {
        width: 360px;
        
    }
    .show-img .row .img img {
    margin: 40px 0 40px 0;
    width: 80%;
    height: 50%;
}
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-img {
        height: 280px;
    }
    .show-img .img img {
        width: 360px;
    }
    .row .content-pro {
        height: 416px;
        margin-top: -10px;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .show-img .img img {
        margin: 40px 0px 40px -10px;
        width: 450px;
    }
}
/* End style for product */
/* --------------------------------------------- */
.show-der .img img {
    height: 250px;
    width: 600px;
    margin-top: 40px;
    margin-bottom: 100px;
    transition: all 0.5s;
}
.show-der .img img:hover {
    transform: scale3d(1.05, 1.05, 1);
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-der .img img {
        width: 80%;
        height: 150px;
    }
    .show-der .img:last-child {
        display: none;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .show-der .img img {
        width: 500px;
    }
    .show-der .img:last-child {
        display: none;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-der .img img {
        width: 500px;
    }
    .show-der .img:last-child {
        display: none;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .show-der .img img {
        width: 450px;
    }
}
/*  show market  */
/* show market */
.mar {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    background-color: #eee;
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 2%;
}
.show-market {
    background-color: #fff;
    width: 100%;
    height: 250px;
    width: calc(96% / 5);
}
.show-market img {
    height: 230px;
    transition: all 0.5s;
    width: 100%;
    height: 100%;
}
.show-market img:hover {
    transform: scale3d(1.05, 1.05, 1);
    cursor: pointer;
}
@media (max-width: 576.98px) {
    .mar {
      
        margin-bottom: 4vh;
    }
}
@media (max-width: 500.98px) {
    .mar {
       
        margin-bottom: 4vh;
    }
}
@media (max-width: 435.98px) {
    .mar {
      
        margin-bottom: 4vh;
    }
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-market {
        height: 130px;
        width: calc(96% / 3);
        margin-top: 0;
    }
    .mar .show-market:nth-child(2),
    .mar .show-market:nth-child(3) {
        display: none;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .show-market {
        height: 180px;
        width: calc(96% / 5);
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-der .img img {
        height: 200px;
        width: 550px;
        margin-top: 40px;
        margin-bottom: 100px;
        text-align: center;
    }
    .show-market {
        height: 200px;
        width: calc(96% / 5);
    }
    /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {
        .show-der .img img {
            width: 80%;
        }
        .show-der .img:last-child {
            display: none;
        }
    }
    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) and (max-width: 767.98px) {
        .show-der .img img {
            width: 500px;
        }
        .show-der .img:last-child {
            display: none;
        }
    }
    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) and (max-width: 991.98px) {
        .show-der .img img {
            width: 600px;
        }
        .show-der .img:last-child {
            display: none;
        }
    }
    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) and (max-width: 1199.98px) {
        .show-der .img img {
            width: 450px;
        }
    }
}
.unavaible_product{
    background-color: #ecf0f1;
    height: auto;
}
.unavaible_product img{
   margin-bottom: 25px;
}
.unavaible_product h2{
   font-size: 3em;
    color: gray;
}
/* ________________________________ End Products _______________________________*/

</style>

<script>
 // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/swiper.scss';
import { mapState } from 'vuex';
import { defineAsyncComponent } from 'vue';
export default {
    data() {
        return {
            urll: '/img/',
        };
    },
    name: 'products',
    components: {
      Swiper,
      SwiperSlide,
        product: defineAsyncComponent(() =>
            import(`@/components/global/product.vue`)
        ),
        
        Subscriber: defineAsyncComponent(() =>
            import(`@/components/global/Subscriber.vue`)
        ),
        Cartmini: defineAsyncComponent(() =>
            import(`@/components/cart/Cartmini.vue`)
        ),
    },
    props: {
        type: String,
    },
    methods: {
      onSlideChange() {
        console.log('slide change');
      },
    },
    computed: {
        ...mapState([
            'Product',
            'brands',
            'Brands',
            'categories',
            'Stores',
            'lastStores',
        ]),
    },
    mounted() {
        this.$store.dispatch('loadProducts');
        this.$store.dispatch('loadStores');
        this.$store.dispatch('loadBrands');

    },
};
</script>
