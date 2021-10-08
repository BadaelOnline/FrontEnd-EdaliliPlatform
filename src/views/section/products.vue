<template>
    <div class="products">
        
       
        <!--  show img  -->

<div class="left">
 <Cartmini />
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
        <!-- Item slider end-->
        <div class="x-filter">
            <div class="lef"><h3>Filter</h3></div>
            <div class="rigt"><span>Choose By</span> 
            <div class="child_filter animate__animated animate__fadeIn">
                <div class="Latest">Latest
                    <div class="lat animate__animated animate__fadeIn">
                        <div class="filter-item">New</div>
                        <div class="filter-item">Old</div>
                    </div>
                </div>
                <div class="Category">Category
                    <div class="cat animate__animated animate__fadeIn">
                        <div class="filter-item">Mobile</div>
                        <div class="filter-item">Fashion</div>
                        <div class="filter-item">Elctronic</div>
                        <div class="filter-item">Furniture</div>
                        <div class="filter-item">Bedroom</div>
                    </div>
                </div>
                <div class="Rating">Rating
                    <div class="rat animate__animated animate__fadeIn">
                        <span class="filter-item">5 <span class="fa fa-star checke"></span></span>
                        <span class="filter-item">4 <span class="fa fa-star checke"></span></span>
                        <span class="filter-item">3 <span class="fa fa-star checke"></span></span>
                        <span class="filter-item">2 <span class="fa fa-star checke"></span></span>
                        <span class="filter-item">1 <span class="fa fa-star checke"></span></span>
                    </div>
                </div>
            </div>
            </div>

        </div>
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
     <div class="right">
     <div>
         <h2>Filter</h2>
     </div>
             <div class="filter">
                <hr style="width: 90%" />
            <h4>Latest</h4>
              <div>
                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                      <span style="margin: 0 10px">New</span>
                    </div>
                </label>

                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                         <span style="margin: 0 10px">Old</span>
                    </div>
                </label>
              </div>
            <hr style="width: 90%" />
            <h4>Category</h4>
              <div>
                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                      <span style="margin: 0 10px">Mobile</span>
                    </div>
                </label>

                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                         <span style="margin: 0 10px">Fashion</span>
                    </div>
                </label>

                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                     <span style="margin: 0 10px">Elctronic</span>
                    </div>
                </label>

                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                      <span style="margin: 0 10px">Furniture</span>
                    </div>
                </label>
                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                         <span style="margin: 0 10px">Bedroom</span>
                    </div>
                </label>
            </div>
            <hr style="width: 90%" />
            <h4>Rating</h4>
            <div>
                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                    </div>
                </label>

                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </label>

                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </label>

                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </label>
                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </label>
            </div>
               <hr style="width: 90%" />
        </div>
 </div>
 </div>

</template>

<style scoped>
.products{
    display: flex;
    justify-content: space-between;
}
.right{
    width: 20%;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
}
.left{
    width: 79%;
}
.x-filter{
    display: none;
    gap: 50%;
}
.x-filter .lef{
    padding-left: 20px;
    opacity: .8;
}
.x-filter .rigt{
 position: relative;
}
.x-filter .rigt span{
  opacity: .8;
  font-weight: bold;
}
.x-filter .rigt::after{
    font-family: 'Font Awesome 5 Free';
    content: '\f0d7';
    display: inline-block;
    vertical-align: middle;
    font-weight: 900;
    z-index: 2;
    font-size: 16px;
    position: absolute;
    right: -10px;
    top: 0px;
    color: #1c2c34;
    width: 10%;
    height: 0;
}
.x-filter .rigt:hover .child_filter{
 display: grid; 
}
.x-filter .rigt .child_filter{
    display: none; 
    position: absolute;
    background-color: #1c2c34;
    color: #fff;
    z-index: 85;
    right: 0;
   width: 150px;
    top: 45%;
}
.x-filter .rigt .child_filter .Latest,.x-filter .rigt .child_filter .Category,.x-filter .rigt .child_filter .Rating{
position: relative;
cursor: pointer;
}

.x-filter .rigt .child_filter .Latest:hover,.x-filter .rigt .child_filter .Category:hover,.x-filter .rigt .child_filter .Rating:hover{
    color: var(--rhead);
}
.x-filter .rigt .child_filter .Latest::after,.x-filter .rigt .child_filter .Category::after,.x-filter .rigt .child_filter .Rating::after{
     font-family: 'Font Awesome 5 Free';
    content: '\f0da';
    display: inline-block;
    vertical-align: middle;
    font-weight: 900;
    z-index: 2;
    font-size: 16px;
    position: absolute;
    right: 30px;
    top: 0px;
    color: #fff;
    width: 0;
    height: 0;  
}
.x-filter .rigt .child_filter .Latest:hover::after,.x-filter .rigt .child_filter .Category:hover::after,.x-filter .rigt .child_filter .Rating:hover::after{
    content: '\f0d7';
}
.x-filter .rigt .child_filter .lat,.x-filter .rigt .child_filter .cat,.x-filter .rigt .child_filter .rat{
    display: none;
}
.x-filter .rigt .child_filter .lat:hover,.x-filter .rigt .child_filter .cat,.x-filter .rigt .child_filter .rat{

}
.x-filter .rigt .child_filter .Latest:hover .lat,.x-filter .rigt .child_filter .Category:hover .cat,.x-filter .rigt .child_filter .Rating:hover .rat{
    display: grid;
    background-color: #1c2c34;
    color: #fff;
    z-index: 85;
    padding:10px 30px;
    left: 85px;
    top: 0;
}
.x-filter .filter-item{
    line-height: 1.7;
    cursor: pointer;
    transition: all .5s;
    display: flex;
    justify-content: space-around
}
.x-filter .filter-item:hover{
    color: var(--rhead);
    padding-left: 10px;
}
.contain_Product{
    display: flex;
    margin-bottom: 30px;
    flex-flow: wrap;
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

/* ________________________________ End left _______________________________*/
.filter {
    width: 100%;
}
.filter .fa-star {
    color: #cac9c9;
    font-size: 4vw;
}

.filter ul {
    list-style: none;
    text-align: right;
}
.filter ul li {
    display: block;
    opacity: 0.8;
}
.filter ul li a {
    padding: 10px auto;
    text-decoration: none;
    display: block;
    font-size: 18px;
    letter-spacing: 1px;
    position: relative;
    transition: 0.3s;
    overflow: hidden;
    text-transform: capitalize;
}
.filter ul li a input {
    width: 70px;
    font-size: 18px;
    text-align: center;
    padding-right: 0;
    cursor: pointer;
}
.filter ul li a:hover,
a:active {
    color: #bf4848;
}
.filter .fa-star {
    font-size: 1vw;
}
.rad-label {
    display: flex;
    justify-content: space-around;
    border-radius: 100px;
    padding: 14px 16px;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.3s;
}

.rad-label:hover,
.rad-label:focus-within {
    background: hsla(0, 0%, 80%, 0.14);
}
.rad-label:hover .checke {
    color: #40afd7;
}
.rad-label:focus-within .checke {
    color: #40afd7;
}
.rad-input {
    position: absolute;
    opacity: 0;
}
.rad-design {
    width: 22px;
    height: 22px;
    border-radius: 100px;

    background: linear-gradient(
        to right bottom,
        hsl(154, 97%, 62%),
        hsl(225, 97%, 62%)
    );
    position: relative;
}

.rad-design::before {
    content: '';

    display: inline-block;
    width: inherit;
    height: inherit;
    border-radius: inherit;

    background: hsl(0, 0%, 90%);
    transform: scale(1.1);
    transition: 0.3s;
}

.rad-input:checked + .rad-design::before {
    transform: scale(0);
}
/* Small devices (landscape phones, 576px and up) */
@media  (max-width: 767.98px) {
.right{
    display: none;
}
.left{
    width:100%;
}
.x-filter{
    display: flex;
    
}
}

/* End Rigth */

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
