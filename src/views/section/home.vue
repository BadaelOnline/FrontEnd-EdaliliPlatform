<template >
  <div class="cu5">
            <h5>choose server</h5>
            <select v-model="server" @change="handleserver($event)">
                <option value="edalily">edalily</option>
                <option value="admin">admin</option>
            </select>
        </div>
        <Cartmini />  
        <div class="home">
         <div class="parent">
             <div class="left">
                <div class="imag"><img v-lazy="'img/banner-left1.png'"></div> 
                <div class="Latest_Products">
                    <h2 style="">Latest Products</h2>
                    <span @click="transproduct()"><i id="fa1" class="fa fa-circle fa-spin" aria-hidden="true"></i></span>
                    <span @click="transproduct()"><i id="fa2" class="fa fa-circle" aria-hidden="true"></i></span>
                    <div id="list_prod" class="list-products">
                        <div class="list-left">
                        <div class="Products"  v-for=" Offer in Offers" :key="Offer" :store="Offer.store">
                        <div class="imag"><img v-lazy="'img/small-product.jpg'" ></div>
                        <div class="details">
                            <div class="stars"><span class="recipe-rating">★★★★<span>☆</span></span></div>
                            <div class="price">${{Offer.price}}</div>
                            <div>chair</div>
                        </div>
                    </div>
                        </div>
                        <div class="list-right">
                        <div class="Products"  v-for=" Offer in Offers" :key="Offer" :store="Offer.store">
                        <div class="imag"><img v-lazy="'img/small-product.jpg'" ></div>
                        <div class="details">
                            <div class="stars"><span class="recipe-rating">★★★★<span>☆</span></span></div>
                            <div class="price">${{Offer.price}}</div>
                            <div>chair</div>
                        </div>
                    </div>
                        </div>
                    </div>
                   

                </div>
                <div class="imag">
                    <img v-lazy="'img/banner-left1.png'">
                </div>
                  <div class="title">
                        <h4>آخر المشتركین</h4>
                    </div>
                                <swiper class="swiper_vertical" 
            :direction ="'vertical'"
            :slides-per-view="1"
            :space-between="50"
            :speed="1000"
            :autoHeight="true"
          
            :pagination="{ clickable: true }">
            <swiper-slide class="vertical_slider">   <div class="subcriber">
                          <div class="logo"><img src="../../../public/img/market-logo.png" ></div>
                          <div class="details">
                        <div class="place">السویداء</div>
                         <div class="name">سنتر برج الریم</div>  
                         </div>      
                                
                    </div> 
            </swiper-slide>
            <swiper-slide class="vertical_slider">   <div class="subcriber">
                          <div class="logo"><img src="../../../public/img/market-logo.png" ></div>
                          <div class="details">
                        <div class="place">السویداء</div>
                         <div class="name">سنتر برج الریم</div>  
                         </div>             
                    </div> 
            </swiper-slide>
            <swiper-slide class="vertical_slider">   <div class="subcriber">
                          <div class="logo"><img src="../../../public/img/market-logo.png" ></div>
                          <div class="details">
                        <div class="place">السویداء</div>
                         <div class="name">سنتر برج الریم</div>  
                         </div>             
                    </div> 
            </swiper-slide>
            </swiper>  
               
                       
             </div>
             <div class="right">
                 <div class="sm-offer"><img v-lazy="'img/cus.jpg'" ></div>
                 <div class="Daily">Daily deals</div> 
             <div class="contain_offers" v-if="Offers.length > 0">
             
            <!-- 1  -->
            <div class="contain" v-for="Offer in Offers.slice(0,2)" :key="Offer">
                <div class="offer-details">
                   <div><span class="offer_price">${{Offer.price}}</span> <span class="price">${{Offer.selling_price}}</span></div>
                    
                    <p class="information">
                        {{Offer.quantity}} items left.
                    </p>
                    <div class="count">       
					<timercount 
                    :deadline="Offer.ended_at"
                    />	
                    
                    </div>
                    
                </div>

                <div class="offer-image">
                    <img v-lazy="'img/product-offer.jpg'" alt="" />

                    <div class="info">
                    <ul>
                        <li><i class="fa fa-eye" aria-hidden="true"></i></li>
                        <li><i class="fa fa-refresh" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart" aria-hidden="true"></i></li>
                        <li><i class="fa fa-shopping-cart"></i></li>     
                    </ul>
                    </div>
                </div>
            </div>        
            
        </div>
        <div class="contain_unavaible" v-else>
                    <div class="unavaible_product">
                        <img v-lazy="'img/unavalible.jpg'">
                        <h2>Ops... Offers not available.</h2> 
                        </div>
                    </div>
        <div class="big_offer">
            <img v-lazy="'img/cus2.png'" >
        </div>
        <div class="title_products">
        <div class="Daily">Trending Offers</div>
         <!-- <div class="section_products">
             <div class="list_sec_prod">
                 <i class="fa fa-list" aria-hidden="true"></i>
                 <div class="list_sec" >
                     <ul>
                        <li v-for="(section,i) in Sections.slice(0,4)" :key="i"
                        :class="{act_li: i === activeItem}">{{section.name}}
                        </li>  
                     </ul>
                 </div>
             </div>
            <span v-for="(section,i) in Sections.slice(0,4)" :key="i" 
            :class="{ active_sec: i === activeItem}" @click="selectItem(i)">{{section.name}}
            </span>
           
         </div> -->
        </div>
        
             <div class="contain_products"  v-if="Offers.length > 0">
<!-- spiner reload wating -->

<!-- <svg id="spinner" class="spinner spin-hide" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg> -->
                 <div class="product-item" v-for="Offer in Offers.slice(0,4)" :key="Offer">
                     <img v-lazy="'img/product-offer.jpg'">
                     <div class="details">
                        <span class="offer_price">${{Offer.price}}</span> <span class="price">${{Offer.selling_price}}</span>
                     </div>
                     <div class="parcent_offer">
                        - {{ Math.floor((Offer.price * 100) / Offer.selling_price) }} %
                     </div>
                 </div>
                </div>
                  <div class="contain_unavaible" v-else>
                    <div class="unavaible_product">
                        <img v-lazy="'img/unavalible.jpg'">
                        <h2>Ops... Offers not available.</h2> 
                        </div>
                    </div>
            
            
            <div class="medium_offer">
             <div><img v-lazy="'img/banner-ud1.jpg'" alt=""></div>
            <div><img v-lazy="'img/banner-ud1.jpg'" alt=""></div>
            </div>    
             </div>
    
         </div>
            <div class="Daily-rsturant">Shop by Stores</div>
            <swiper class="swiper" v-if="Stories.length > 0"
            :breakpoints="swiperOptions.breakpoints"
            :speed="1000"
            navigation
            :pagination="{ clickable: true }">
            <swiper-slide v-for="Stor in Stories" :key="Stor">
            <div class=" store-item store">
                     <router-link :to="`/visitstore/${Stor.id}/${Stor.title}`" style="color: #6b6c6c;text-decoration: none;">
                    <img v-lazy="'img/market-logo.png'">
                    <div class="details">
                    <h4>{{Stor.title.slice(0,15)}}</h4>
                    </div>
                     </router-link>
                 </div>
            </swiper-slide>
            </swiper>   
         
                   <div class="contain_unavaible" v-else>
                    <div class="unavaible_product">
                        <img v-lazy="'img/unavalible.jpg'">
                        <h2>Ops... Stores not available.</h2> 
                        </div>
                    </div>
                          <div class="full_body"> 
                <div class="child-left">
                    <img v-for="brand in brands.slice(10,12)" 
                    :key="brand.id" 
                    v-lazy="brand.image">
                    </div>
                <div class="child-center">
                    <img v-for="brand in brands.slice(2,3)" 
                    :key="brand.id" 
                    v-lazy="brand.image">
                    </div>
                <div class="child-right"> 
                    <img v-for="brand in brands.slice(3,5)" 
                    :key="brand.id" 
                    v-lazy="brand.image">
                    </div>
            </div>
               <div class="Daily-rsturant">Shop by Brands</div>
            <swiper class="swiper" v-if="Brands.length > 0"
            :breakpoints="swiperOptions.breakpoints"
            :speed="1000"
            navigation
            :pagination="{ clickable: true }">
             <!-- @swiper="onSwiper"
            @slideChange="onSlideChange" -->
            <swiper-slide v-for="item in Brands" :key="item">
            <div class=" store-item brand">
                     <router-link :to="`/brand_product/${item.id}`" style="color: #6b6c6c;text-decoration: none;">
                    <img v-lazy="`${item.image}`" v-if="item.image" />
                    <img v-else v-lazy="'img/elc1.png'"  /> 
                    <div class="details">
                     <h4>{{item.name}}</h4>
                    </div>
                     </router-link>
                 </div>
            </swiper-slide>
            </swiper>   
             <div class="contain_unavaible" v-else>
                    <div class="unavaible_product">
                        <img v-lazy="'img/unavalible.jpg'">
                        <h2>Brands not available.</h2> 
                        </div>
                    </div>
           <!-- pagination -->
             <nav v-if="page_Brands !== null">
  <ul class="pagination" style="justify-content: center;margin-top: 30px;">
    <li class="page-item" :class="{ disabled : page_brand == 1}" @click="Previousbrand">
      <span class="page-link">Previous</span>
    </li>
    
    <li class="page-item" :class="{ active : page_brand == pag}"  v-show="pag == page_brand|| pag == ( parseInt(page_brand)+2) || pag == ( parseInt(page_brand)+1) || pag == ( parseInt(page_brand)-1)"
    v-for="pag in page_Brands" :key="pag">
        <span class="page-link" @click="getpagebrand(pag)"> {{pag}}</span>
    </li>

    <li class="page-item" @click="Nextbrand">
      <span class="page-link">Next</span>
    </li>
  </ul>
</nav>
             <div class="full_body"> 
                <div class="child-left">
                    <img v-for="brand in brands.slice(5,7)" 
                    :key="brand.id" 
                    v-lazy="brand.image">
                    </div>
                <div class="child-center">
                    <img v-for="brand in brands.slice(10,11)" 
                    :key="brand.id" 
                    v-lazy="brand.image">
                    </div>
                <div class="child-right"> 
                    <img v-for="brand in brands.slice(8,10)" 
                    :key="brand.id" 
                    v-lazy="brand.image">
                    </div>
            </div>
            <div class="Daily-rsturant">Top Restaurants</div> 
            <swiper class="swiper" v-if="restaurants.length > 0"
            :breakpoints="swiperOptions.breakpoints"
            :speed="1000"
            navigation
            :pagination="{ clickable: true }"
             > 
            
            <swiper-slide v-for="item in restaurants" :key="item">
            <div class=" store-item restaurant">
                <router-link :to="`/visit_restaurant/${item.id}/${item.title}`" style="color: #6b6c6c;text-decoration: none;">
                    <img v-lazy="`${item.image}`" v-if="item.image" />
                    <img v-else v-lazy="'img/elc1.png'"  /> 
                    <div class="details">
                     <h4>{{item.title}}</h4>
                     <h4>{{item.place}}</h4>
                    </div>
                     </router-link>
                 </div>
            </swiper-slide>
            </swiper> 
             <div class="contain_unavaible" v-else>
                    <div class="unavaible_product">
                        <img v-lazy="'img/unavalible.jpg'">
                        <h2>Brands not available.</h2> 
                        </div>
                    </div>
            <div class="baner-bee"> 
                <div class="bee">
                    <img v-lazy="'img/bee.png'">
                </div>
 
            </div>

            <div class="Daily-rsturant">Shop by Category</div> 
            
            <swiper class="swiper"  v-if="Categories.length > 0"
            :breakpoints="swiperOptions.breakpoints"
            :speed="1000"
            navigation
            :pagination="{ clickable: true }">
            <swiper-slide v-for="item in Categories"  :key="item">
             <div class="store-item category">
                 <router-link :to="`/category_product/${item.id}`" style="color: #6b6c6c;text-decoration: none;"> 
                    <img v-lazy="`${item.image}`" v-if="item.image" />
                    <img v-else v-lazy="'img/elc1.png'"  /> 
                    <div class="details">
                    <h4>{{item.name}}</h4>
                   
                    </div>
                     </router-link> 
            </div>
            </swiper-slide>
               
            </swiper>
                        <div class="contain_unavaible" v-else>
                    <div class="unavaible_product">
                        <img src="../../../public/img/unavalible.jpg">
                        <h2>Category not available.</h2> 
                        </div>
                    </div>
            
            <!-- pagination -->
            <nav>
  <ul class="pagination" style="justify-content: center;" v-if="page_Categories !== null">
    <li class="page-item" :class="{ disabled : page_Category == 1}" @click="Previouscategory">
      <span class="page-link">Previous</span>
    </li>
    
    <li class="page-item" :class="{ active : page_Category == pag}"  v-show="pag == page_Category|| pag == ( parseInt(page_Category)+2) || pag == ( parseInt(page_Category)+1) || pag == ( parseInt(page_Category)-1)"
    v-for="pag in page_Categories" :key="pag">
        <span class="page-link" @click="getpagecategory(pag)"> {{pag}}</span>
    </li>

    <li class="page-item" @click="Nextcategory">
      <span class="page-link">Next</span>
    </li>
  </ul>
</nav>
 

 
        </div> 
</template>
<script>
//  import $ from "jquery";
import data from '../../jeson/data';
import jeson from '@/jeson/MOCK_DATA.json';
import { mapState } from 'vuex';
import axios from 'axios';
import { defineAsyncComponent } from 'vue';
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
    name: 'home',
     props: 
      {
    deadline: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 1000,
    },
   
    
 },
    data() {
        const server = localStorage.getItem('server') || 'admin';
        const page_brand = window.localStorage.getItem('page_brand') || 1;
        const page_Category = window.localStorage.getItem('page_Category') || 1;
        return {
            page_brand: page_brand,
            page_Category: page_Category,
            server: server,
            Produc :jeson[0].Products,
            restaurants: data.restaurants,
            // activeItem: 0,
            showDetails: false,
            chooseDetails: false,
            Sections: [],
            Offers: [],
            Stores: [],
            swiperOptions: { 
                breakpoints: {
       
        300:{  // when window width from 300px to 576px
            slidesPerView: 2,
            spaceBetween:50
       },
       576:{  // when window width from 576px to 767px
            slidesPerView: 3,
            spaceBetween:50
       },
        767: { // when window width from 767px to 991px
            slidesPerView: 4,
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
    components: {
         Swiper,
    SwiperSlide,
        timercount: defineAsyncComponent(() =>
             import(`@/components/global/timercount.vue`)
         ),
        Cartmini: defineAsyncComponent(() =>
            import(`@/components/cart/Cartmini.vue`)
        )
        
    },  
    methods: {
        // brand page methods
        getpagebrand(i){
            localStorage.setItem("page_brand",i);
            this.$store.dispatch('loadBrands');
            window.location.reload();
        },
        Nextbrand(){
            localStorage.setItem("page_brand", parseInt(this.page_brand)+1);
             window.location.reload();
        },
       Previousbrand(){
           if(localStorage.getItem("page_brand") > 1){
            localStorage.setItem("page_brand",parseInt(this.page_brand)-1);
             window.location.reload();
           }

        },
                // category page methods
        getpagecategory(i){
            localStorage.setItem("page_Category",i);
           this.$store.dispatch('loadCategories');  
            window.location.reload();
        },
        Nextcategory(){
            localStorage.setItem("page_Category", parseInt(this.page_Category)+1);
             window.location.reload();
        },
       Previouscategory(){
           if(localStorage.getItem("page_Category") > 1){
            localStorage.setItem("page_Category",parseInt(this.page_Category)-1);
             window.location.reload();
           }

        },
        //  ___________
        handleserver(event) {
            localStorage.setItem('server', event.target.value);
            window.location.reload();
        },
            transproduct(){
                document.getElementById('list_prod').classList.toggle("trans-list");
                document.getElementById('fa1').classList.toggle("fa-spin");
                document.getElementById('fa2').classList.toggle("fa-spin");
            },
      async  fetch() {
            var self = this;
            let lang = window.localStorage.getItem('lang');
            // sections
            await axios
                .get(`/api/sections/getAll?lang=${lang}`)
                .then((res) => {
                    self.Sections = res.data.Section;
                    console.log('Section: ', res.data.Section);                         
                })
                .catch(function (error) {
                    console.warn('Error sections ', error.toJSON());
                });
                  // offers
              await  axios
                .get(`/api/offers`)
                .then((res) => {
                    this.Offers = res.data.Offer.data;
                    console.log('Offer: ',  res.data.Offer.data);
                    
                    
                })
                .catch(function (error) {
                    console.warn(' Error Offer ', error.toJSON());
                });
        },
        /* selectItem(i) {
            this.activeItem = i;
          
                 document.getElementById('spinner').classList.remove("spin-hide");
                 let lang = window.localStorage.getItem('lang');
                 axios
                 .get(`/api/sections/getAll?lang=${lang}`)
                 .then((res) => {
                     this.products = res.data.Section[this.activeItem].product;
                           console.log(this.activeItem);
                })
                 .catch(function (error) {
                     console.warn('------ Error ------: ', error);
                 });
                 setTimeout(() => {
                       document.getElementById('spinner').classList.add("spin-hide");
                 }, 2000);
           
           
         }, */
        gotoListView: function (i) {
            this.$router.push(`/ListView/${i}`);
        },

        gotoprodetails: function (i) {
            this.$router.push(`/${i}`);
        },
    }, 
    created() {
        this.fetch();
    },
  computed: {
        ...mapState([ 'brands','Product','Brands','page_Brands','Stories','Categories','page_Categories']),

            filterMobile() {
            // filter stores by search without checbox
     return this.Produc.filter(x => x.slug === 'mobiles');
            
          
        },
    },
    mounted() {
        this.$store.dispatch('loadProducts');
        this.$store.dispatch('loadBrands');
        // this.$store.dispatch('loadStores');      
        this.$store.dispatch('loadCategories');  

    },
};
</script>

<style scoped>
/* swiper */
.swiper{
 border: 1px solid #eee;
 padding: 40px 20px;
}
.swiper-slide{
    margin-right: 50px !important;
}
.swiper_vertical{
 border: 1px solid #eee;
 padding: 0;
}
.vertical_slider{
 margin-right: 0px !important;
}

.swiper_vertical .swiper-wrapper{
 height: 250px !important;
}

/* end swiper */
.page-item{
    cursor: pointer;
}
.disabled{
     cursor: auto;
}
.cu5{
    top: 20%;
    position: fixed;
    left:  5%;
    z-index: 80;
}
.contain_unavaible{
    display: flex;
    border-top: 1px solid #eee;
    padding: 30px 0;
    width: 100%;
}
.unavaible_product{
    background-color: #ecf0f1;
    height: auto;
    width: 100%;
}
.unavaible_product img{
   margin-bottom: 25px;
}
.unavaible_product h2{
   font-size: 3em;
    color: gray;
}
.fa-spin{
    color: var(--rhead); 
 
}
.fa-circle{
   margin: 0 10px;  
   cursor: pointer;
}
.parent{
    display: flex;
    justify-content: space-around;
}
/* ___________________ left __________________ */
.parent .left{
    width: 15%;
    display: flex;
    justify-content: start;
    flex-direction: column;
}

.parent .left .imag img{
    width: 100%;
}
.parent .left .imag img:hover{
    opacity: .8;
    cursor: pointer;
}
.parent .left .Latest_Products h2{
     padding: 20px 0;
     border-bottom: 2px solid var(--rhead);
     font-size: 25px;
}
.parent .left .Latest_Products .list-products{
    display: flex;
   transform: translateX(-210px);
    transition: ease 1s;
}
.trans-list{
    overflow: hidden;
    transform: translateX(7%) !important;
}
.parent .left .Latest_Products .Products{
    display: flex;
    padding: 10px 0;
    width: 215px;
}
.parent .left .Latest_Products .Products .imag{
   width: 75px;
}
.parent .left .Latest_Products .Products .details .stars{
    color: #ff9933;
}
.parent .left .Latest_Products .Products .details .price{
    color: var(--rhead);
}

 .title{
    color: #fff;
    background-color: #4cb0db;
    padding: 6px;
    margin-top: 20px;
}
.subcriber{
    width: 100%;
    cursor: pointer;
}
.subcriber .details{
    display: grid;
    justify-content: center;
    width: 100%;
    font-weight: bold;
    opacity: .8;
    margin: 10px 0;
    font-size: 20px;
}
.subcriber .logo{
    width: 80%;
    margin: 0 auto;
}
.subcriber .logo img{
    width: 100%;
    border-radius: 50%;
}
/* ___________________ right __________________ */
.parent .right{
    width: 81%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.parent .right .sm-offer{
    width: 99%;
padding-bottom: 10px;
}
.parent .right .sm-offer img{
    width: 100%;
}
.parent .right .Daily{
    color: #fff;
    background: #232f3e;
    padding: 10px 15px;
    border-radius: 4px 4px 0 0;
    font-weight: bold;
}
.parent .right .big_offer{
    width: 99%;
    padding-bottom: 30px;
}
.parent .right .big_offer img{
    width: 100%;
}
.parent .right .big_offer img:hover{
    opacity: .8;
    cursor: pointer;
}
.parent .right .title_products{
    display: flex;
    width: 99%;
    justify-content: space-between;
}
/* .parent .right .section_products span{
    margin: 0 20px;
    position: relative;
    transition: all .5s;
    cursor: pointer;
}
.parent .right .section_products .list_sec_prod,.list_sec{
    display: none;
}
.parent .right .section_products span:hover{
     color: var(--rhead);margin: 0 20px;
    position: relative;
    transition: all .5s;
}
.parent .right .section_products span:hover::after{
    content: "";
    position: absolute;
    width: 50%;
    background-color: var(--rhead);
    bottom: -10px;
    height: 2px;
    left: 24%;  
} */
.active_sec{
    color: var(--rhead);
}
.active_sec::after{
    content: "";
    position: absolute;
    width: 50%;
    background-color: var(--rhead);
    bottom: -10px;
    height: 2px;
    left: 24%;  
}
.parent .right .contain_offers{
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #eee;
    padding:30px 0;
    width: 99% !important;
  } 
.parent .right .contain_offers .contain{
	/* box-shadow: 0 15px 30px 1px grey;
	background: rgba(255, 255, 255, 0.90); */
	text-align: center;
	overflow: hidden;
    height: 217px;
    padding: 0;	
     width:50% !important;
}

 .parent .right .offer-details {
	position: relative;
	text-align: left;
	overflow: hidden;
	padding: 10px 5px;
	height: 100%;
	float: right;
	width: 60%;
    display: grid;
    align-content: space-between;
    font-size: 13px;
}
.parent .right .offer-details .offer_price{
    color: var(--rhead);
    font-size: 20px;
    font-weight: 700;
}
.parent .right .offer-details .price{
    color: #999999;
    text-decoration-line: line-through;
    margin-left: 10px;
}
.parent .right .offer-details .count{
    display: flex;
}


.contain .offer-details > p {
    font-family: 'EB Garamond', serif;
    text-align: center;
    font-size: 18px;
    color: #7d7d7d;
    text-align: left;
}

.offer-image {
    transition: all 0.3s ease-out;
    display: inline-block;
    position: relative;
    overflow: hidden;
    height: 100%;
    float: left;
    width: 40%;
    display: inline-block;
}

.contain img {
    width: 100%;
    height: 100%;
}

.info {
    background: rgba(0, 0, 0, 0);
    font-family: 'Bree Serif', serif;
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
    position: absolute;
    text-align: right;
    font-size: 80%;
    cursor: pointer;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}
.offer-image:hover .info {
    transform: translateX(-75%);
}
.fa-refresh::before{
    content: '\f021';   
}
.info ul li {
    transition: 0.3s ease;
    color: #fff;
    list-style: none;
    margin-bottom: 10px;
}
.info ul li i{
    background-color: #3b424a;
    padding: 10px;
    border-radius: 7px;
}

.info ul li:hover {
    transform: translateX(2px) scale(1.3);
}

.offer-image:hover img {
    transition: all 0.3s ease-out;
}
.offer-image:hover img {
    transform: scale(1.2, 1.2);
}
.parent .right .contain_products{
    display: flex;
    border-top: 1px solid #eee;
    padding: 0;
    flex-flow: wrap;
    position: relative;
    width: 100%;
}
.parent .right .contain_products .product-item{
    height: 275px;
    margin-right: 2%;
    background-color: #f7f7f7;
    margin-bottom: 2%;
    position: relative;
    max-width: 22%;
    cursor: pointer;
}


.parent .right .contain_products .product-item img{
   width: 100%;
}
.parent .right .contain_products .product-item .offer_price{
    color: var(--rhead);
    font-size: 20px;
    font-weight: 700;
}
.parent .right .contain_products .product-item .price{
    color: #999999;
    text-decoration-line: line-through;
    margin-left: 10px;
}
.parent .right .contain_products .product-item  .parcent_offer{
    position: absolute;
    background-color: var(--rhead);
    color: #fff;
    border-radius: 50%;
    padding: 10px 3px;
    font-size: 13px;
    font-weight: bold;
    top: 5%;
    right: 6%;

}
.parent .right .medium_offer{
    display: flex;
    width: 99%;
    justify-content: space-between;
    padding-bottom: 20px;
}
.parent .right .medium_offer div{
    width: 48%;
}
.parent .right .medium_offer div img{
    width: 100%;
}
.parent .right .medium_offer div img:hover{
    opacity: .8;
    cursor: pointer;
}
/* Medium devices (tablets, 768px and up) */
@media  (max-width: 991.98px) {
.parent{
    padding-top: 30px;
}
.parent .left{
        display: none;
    }
.parent .right{
    width: 90%;
    }
.contain_offers {
     width: 100%;
}
.contain_offers .contain{
 width: 100%;
}
.parent .right .contain_offers .contain{
    height:37vw;
     width:100% !important;
}
.contain_offers .contain:nth-child(1){
    display: none;
}
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
.parent .right .contain_offers .contain{
    height: 180px;
    
}
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
.parent .right .contain_products .product-item{
    max-width: 48%;
} 
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

.parent .right .contain_products .product-item{
    max-width: 31%;
}
}
.home .Daily-rsturant{
    color: #fff;
    background: #232f3e;
    padding: 10px 0;
    border-radius: 4px 4px 0 0;
    font-weight: bold;
    width: 130px;
    margin-top: 20px;
    margin-left: 12px;
}
.store-item {
    height: 200px;
    width: 100%;   
    position: relative;
}
.store-item .details{
    padding: 10px 0;
}
.store-item .details h4{
    text-shadow: 3px 7px 4px #bbb;
}
.store-item img{
    width: 150px;
    height: 150px;
    box-shadow: 2px 3px 23px #8e8b8b;
    transition: all .2s;

}
.store-item:hover img{
    box-shadow: 2px 3px 23px #686565;
}
.store img{
    border-top-left-radius: 27%;
    border-top-right-radius: 10%;
    border-bottom-right-radius: 25%;
    border-bottom-left-radius: 10%;
}
.brand img{
    border-radius:2%;
}
.restaurant img{
      border-radius:50%;
}
.category img{
    border-radius: 60px/20px;
}
/* products */
.heading {
    text-align: center;
    font-size: 2rem;
    padding: 0 0.5rem;
    color: #333;
}
.heading span {
    color: #315a6e;
}
.full_body {
    display: flex;
    justify-content: space-around;
    height: 23vw;
    margin: 20px 0;
}
.full_body .child-left{
    width: 23%;
    display: grid;
    height: 100%;
    align-content: space-between;
}
.full_body .child-center{
    width: 48%;
    height: 100%;
}
.full_body .child-right{
    width: 23%;
    display: grid;
    height: 100%;
    align-content: space-between;
}
.full_body .child-center img{
    width: 100%;height: 100%;
}
.full_body .child-center img:hover,.full_body .child-left img:hover,.full_body .child-right img:hover{
    opacity: .8;
    cursor: pointer;
    
}
.full_body .child-left img,.full_body .child-right img{
    width: 100%;
}
/* Small devices (landscape phones, 576px and up) */
@media  (max-width: 767.98px) {
.full_body {
    justify-content: center;
    height: 35vw;  
}
.full_body .child-left,.full_body .child-right{
    display: none;
}
.full_body .child-center{
    width: 95%;
    height: 100%;
}
}

.baner-bee{
    display: flex;
    justify-content: center;
    margin: 2% 0;
}
.baner-bee .bee{
    display: grid;
    align-content: center;
    width: 90%;
}
.baner-bee .bee img{
    width: 100%;
}
.baner-bee .bee:hover{
    opacity: .8;
    cursor: pointer;
}
</style>
<style lang="scss" scoped>
// $offset: 187;
// $duration: 1.4s;

// .spinner {
//   animation: rotator $duration linear infinite;
//   position: absolute;
//   z-index: 50;
//     top: 230px;
//     left: 450px;
// }
// .spin-hide{
//     display: none;
// }
// @keyframes rotator {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(270deg); }
// }

// .path {
//   stroke-dasharray: $offset;
//   stroke-dashoffset: 0;
//   transform-origin: center;
//   animation:
//     dash $duration ease-in-out infinite, 
//     colors ($duration*4) ease-in-out infinite;
// }

// @keyframes colors {
//   0% { stroke: #4285F4; }
//   25% { stroke: #DE3E35; }
//   50% { stroke: #F7C223; }
//   75% { stroke: #1B9A59; }
//   100% { stroke: #4285F4; }
// }

// @keyframes dash {
//  0% { stroke-dashoffset: $offset; }
//  50% {
//    stroke-dashoffset: $offset/4;
//    transform:rotate(135deg);
//  }
//  100% {
//    stroke-dashoffset: $offset;
//    transform:rotate(450deg);
//  }
// }
</style>

