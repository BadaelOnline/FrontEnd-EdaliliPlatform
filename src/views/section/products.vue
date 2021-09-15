<template>
    <div class="products">
        
        <Cartmini />
        <!--  show img  -->

        <div class="show-img">
                <div
                    class="img"
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
        <!-- show  products -->
        <!-- second Carousel -->
        <div class="contain_Product">
              <product  v-for="items in Product"
            :key="items.id"
            :id="items.id"
            :image="items.image"
            :short_des="items.short_des"
            :name="items.name">
            </product>   
        </div>


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
  
        <!-- --------------------------------------------- -->
  
          <div class="contain_Product" v-if="Product.length > 0">
              <product  v-for="items in Product"
            :key="items.id"
            :id="items.id"
            :image="items.image"
            :short_des="items.short_des"
            :name="items.name">
            </product>   
        </div>


    <div class="unavaible_product" v-else>
        <img src="../../../public/img/unavalible.jpg">
       <h2>Ops... Products not available.</h2> 
      </div>
    </div>
      <div class="full-brand">
                <div
                    class="img"
                    v-for="brand in brands.slice(7, 8)"
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
</template>

<style scoped>
.row{
    width: 100%;
}
.contain_Product{
    display: flex;
    margin-bottom: 30px;
    overflow-x: scroll;
    scrollbar-width: thin;
    scrollbar-color: #ddd #eee ;
    }
.show-img {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.show-img .img{
    margin: 20px 0;
    transition: all .5s;
    cursor: pointer;
    width: 40%;
}
.show-img .img img{
    width: 100%;
    height:100%;
}
.show-img .img:hover{
    transform: scale3d(1.05, 1.05, 1);
}
/* show market */
.mar {
    display: flex;
    width: 100%;
    margin: 2% 0;
    justify-content: space-around;
}
.show-market {
    background-color: #fff;
    width: calc(90% / 5);
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
        width: calc(90% / 3);
        margin-top: 0;
    }
    .mar .show-market:nth-child(2),
    .mar .show-market:nth-child(3) {
        display: none;
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
.full-brand{
    display: flex;
    justify-content: space-around;
    height: 10%;
    margin-bottom: 30px;
}
.full-brand .img {
    width: 70%;
    height: 100%;
    cursor: pointer;
}
.full-brand .img img {
    width: 100%;
    height: 100%;
}
/* ________________________________ End Products _______________________________*/

</style>

<script>
import jeson from '@/jeson/MOCK_DATA.json';

//   import { Swiper, SwiperSlide } from 'swiper/vue';
//   import "swiper/swiper-bundle.css";

import { mapState } from 'vuex';
import { defineAsyncComponent } from 'vue';
export default {
    data() {
        return {
            urll: '/img/',
          Product :jeson[0].Products
        };
    },
    name: 'products',
    components: {
    //   Swiper,
    //   SwiperSlide,
        product: defineAsyncComponent(() =>
            import(`@/components/global/product.vue`)
        ),
        
        // Subscriber: defineAsyncComponent(() =>
        //     import(`@/components/global/Subscriber.vue`)
        // ),
        Cartmini: defineAsyncComponent(() =>
            import(`@/components/cart/Cartmini.vue`)
        ),
    },
    props: {
        type: String,
    },
    methods: {
    //      onSwiper(swiper) {
    //   this.swiper = swiper;
    // },
    //   onSlideChange() {
    //     console.log('slide change');
    //   },
    },
    computed: {  // 'Stores','Brands',
        ...mapState([
            'Product',
            'brands',
            
            'categories',
           
            'lastStores',
        ]),
    },
    mounted() {
        this.$store.dispatch('loadProducts');
        // this.$store.dispatch('loadStores');
        // this.$store.dispatch('loadBrands');

    },
};
</script>
