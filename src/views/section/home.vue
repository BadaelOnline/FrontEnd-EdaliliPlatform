<template>
        <Cartmini />  
        <div class="home">
         <div class="parent">
             <div class="left">
                <div class="imag"><img src="../../../public/img/banner-left1.png"></div> 
                <div class="Latest_Products">
                    <h2 style="">Latest Products</h2>
                    <span @click="transproduct()"><i id="fa1" class="fa fa-circle fa-spin" aria-hidden="true"></i></span>
                    <span @click="transproduct()"><i id="fa2" class="fa fa-circle" aria-hidden="true"></i></span>
                    <div id="list_prod" class="list-products">
                        <div class="list-left">
                        <div class="Products"  v-for=" Offer in Offers" :key="Offer" :store="Offer.store">
                        <div class="imag"><img src="../../../public/img/small-product.jpg" ></div>
                        <div class="details">
                            <div class="stars"><span class="recipe-rating">★★★★<span>☆</span></span></div>
                            <div class="price">${{Offer.price}}</div>
                            <div>chair</div>
                        </div>
                    </div>
                        </div>
                        <div class="list-right">
                        <div class="Products"  v-for=" Offer in Offers" :key="Offer" :store="Offer.store">
                        <div class="imag"><img src="../../../public/img/small-product.jpg" ></div>
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
                    <img src="../../../public/img/banner-left1.png">
                    </div>  
                                
             </div>
             <div class="right">
                 <div class="sm-offer"><img src="../../../public/img/cus.jpg" ></div>
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
                    <img src="../../../public/img/product-offer.jpg" alt="" />

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
                        <img src="../../../public/img/unavalible.jpg">
                        <h2>Ops... Offers not available.</h2> 
                        </div>
                    </div>
        <div class="big_offer">
            <img src="../../../public/img/cus2.png" >
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
          <div class="row">
             <div class="contain_products"  v-if="Offers.length > 0">
<!-- spiner reload wating -->

<!-- <svg id="spinner" class="spinner spin-hide" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg> -->
                 <div class="product-item col-md-3 col-xs-6" v-for="Offer in Offers.slice(0,4)" :key="Offer">
                     <img src="../../../public/img/product-offer.jpg">
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
                        <img src="../../../public/img/unavalible.jpg">
                        <h2>Ops... Offers not available.</h2> 
                        </div>
                    </div>
             </div>
            
            <div class="medium_offer">
             <div><img src="../../../public/img/banner-ud1.jpg" alt=""></div>
            <div><img src="../../../public/img/banner-ud1.jpg" alt=""></div>
            </div>    
              <!-- <div class="Daily">Top Stores</div>   
             <div class="row">
             <div class="contain_products" v-if="Stores.length > 0">
                 <div class="product-item store-item col-md-3 col-xs-6" v-for="Stor in Stores.slice(0,4)" :key="Stor">
                     <router-link :to="`/visitstore/${Stor.id}/${Stor.title}`" style="color: #6b6c6c;text-decoration: none;">
                    <img src="../../../public/img/market-logo.png">
                    <div class="details">
                    <h2>{{Stor.title.slice(0,15)}}</h2>
                    <button>Visite</button>
                    </div>
                     </router-link>
                 </div>
                </div>
                   <div class="contain_unavaible" v-else>
                    <div class="unavaible_product">
                        <img src="../../../public/img/unavalible.jpg">
                        <h2>Ops... Stores not available.</h2> 
                        </div>
                    </div>
             </div>  -->
             </div>
        

         </div>
             <div class="Daily-rsturant">Mobile</div> 
             <div class="contain-mobile">
                 <div v-for="mob in filterMobile" :key="mob" style="cursor: pointer;">  
                    <div>
                        <img :src="`${mob.image}`" v-if="mob.image" />
                        <img v-else src="../../../public/img/elc1.png"  />   
                    </div>    
                    <h3>
                        {{mob.name}}
                    </h3>
                    <h4>
                        {{mob.short_des}}
                    </h4>
                 </div>
             </div>
             <div class="full_body"> 
                <div class="child-left">
                    <img v-for="brand in brands.slice(5,7)" 
                    :key="brand.id" 
                    :src="brand.image">
                    </div>
                <div class="child-center">
                    <img v-for="brand in brands.slice(10,11)" 
                    :key="brand.id" 
                    :src="brand.image">
                    </div>
                <div class="child-right"> 
                    <img v-for="brand in brands.slice(8,10)" 
                    :key="brand.id" 
                    :src="brand.image">
                    </div>
            </div>
             <div class="Daily-rsturant">Top Restaurants</div> 
            <div class="contain-returant" v-if="restaurants.length > 0">
                <div class="restu-item" 
                v-for="restaurant in restaurants.slice(0,4)"
                :key="restaurant">
                <router-link :to="`/visit_restaurant/${restaurant.id}/${restaurant.title}`" style="color: #6b6c6c;text-decoration: none;">
                    <div><img :src="restaurant.image"></div>
                    <div class="title"> {{restaurant.title}} </div>
                    <div class="title"> {{restaurant.place}} </div>
                </router-link>
                </div>
            </div>  
            <div class="baner-bee"> 
                <div class="bee">
                    <img src="../../../public/img/bee.png">
                </div>
 
            </div>
        </div> 
</template>
<script>
import data from '../../jeson/data';
import jeson from '@/jeson/MOCK_DATA.json';
import { mapState } from 'vuex';
import axios from 'axios';
import { defineAsyncComponent } from 'vue';
export default {
    name: 'home',
     props: {
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
        return {
              Produc :jeson[0].Products,
            restaurants: data.restaurants,
            // activeItem: 0,
            showDetails: false,
            chooseDetails: false,
            Sections: [],
            Offers: [],
            Stores: [],
        };
    },
    components: {
         timercount: defineAsyncComponent(() =>
             import(`@/components/global/timercount.vue`)
         ),
        Cartmini: defineAsyncComponent(() =>
            import(`@/components/cart/Cartmini.vue`)
        )
        
    },  
    methods: {
            transproduct(){
                document.getElementById('list_prod').classList.toggle("trans-list");
                document.getElementById('fa1').classList.toggle("fa-spin");
                document.getElementById('fa2').classList.toggle("fa-spin");
            },
        fetch() {
            var self = this;
            let lang = window.localStorage.getItem('lang');
            // sections
            axios
                .get(`/api/sections/getAll?lang=${lang}`)
                .then((res) => {
                    self.Sections = res.data.Section;
                    console.warn('Section: ', res.data.Section);                         
                })
                .catch(function (error) {
                    console.warn('Error sections ', error.toJSON());
                });
                  // offers
                axios
                .get(`/api/offers`)
                .then((res) => {
                    this.Offers = res.data.Offer.data;
                    console.log('Offer: ',  res.data.Offer.data);
                    
                    
                })
                .catch(function (error) {
                    console.warn(' Error Offer ', error.toJSON());
                });
                // stores
                 axios
                .get(`/api/stores/getAll?lang=${lang}`)
                .then((res) => {
                    console.log('Stores :', res.data.Stores);
                      this.Stores = res.data.Stores;
                })
                 .catch(function (error) {
                    console.log(' Error Stores ',error.toJSON());
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
        ...mapState([ 'brands','Product']),

            filterMobile() {
            // filter stores by search without checbox
     return this.Produc.filter(x => x.slug === 'mobiles');
            
          
        },
    },
    mounted() {
        this.$store.dispatch('loadProducts');
        // this.$store.dispatch('loadStores');    ,'Stores'  
        
    },
};
</script>

<style scoped>
.contain_unavaible{
    display: flex;
    border-top: 1px solid #eee;
    padding: 30px 0;
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
    transition: all .5s;
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
    padding: 30px 0;
    flex-flow: wrap;
    position: relative;
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
.parent .right .contain_products .store-item{
    background: linear-gradient(to bottom, #fff,#e4e5e8);
}
.parent .right .contain_products .store-item .details h2{
    font-size: 18px;
}
.parent .right .contain_products .store-item button{
   border: navajowhite;
    color: #fff;
    background-color: var(--rhead);
    padding: 3px 20px;
    font-weight: bold;
    border-radius: 3px;
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
/* .parent .right .section_products span{
    display: none;
}
.parent .right .section_products .list_sec_prod{
    display: block;
    color: #fff;
    background-color: #232f3e;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
}
.list_sec{
      display: none;
    position: absolute;
    -webkit-box-shadow: 0 0 2px #ccc;
    z-index: 5;
    text-align: left;
    left: -100px;
    bottom: -155px;
    padding: 20px 70px 0 10px;
    background-color: #fff;
}
.list_sec ul{
    padding: 0;
    background-color: #fff;

}
.list_sec ul li {
    color: rgb(136, 134, 134);
    list-style: none;
    margin-bottom: 10px;
}
.list_sec ul li:hover {
     color: #ff3c20 !important;
}
.act_li{
    color: #ff3c20 !important;
}
.parent .right .section_products .list_sec_prod:hover .list_sec{
    display: block;
}*/
.parent .right .contain_products .product-item{
    max-width: 48%;
} 
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

.parent .right .contain_products .product-item{
    max-width: 31%;
}
/* .parent .right .section_products span{
    display: none;
}
.parent .right .section_products .list_sec_prod{
    display: block;
    color: #fff;
    background-color: #232f3e;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
}
.parent .right .section_products{
    position: relative;
}
.list_sec{
   display: none;
    position: absolute;
    -webkit-box-shadow: 0 0 2px #ccc;
    z-index: 5;
    text-align: left;
    left: -100px;
    bottom: -155px;
    padding: 20px 70px 0 10px;
    background-color: #fff;
}
.list_sec ul{
    padding: 0;
    background-color: #fff;

}

.list_sec ul li {
    color: rgb(136, 134, 134);
    list-style: none;
    margin-bottom: 10px;
}
.list_sec ul li:hover {
     color: #ff3c20 !important;
}
.act_li{
    color: #ff3c20 !important;
}
.parent .right .section_products .list_sec_prod:hover .list_sec{
    display: block;
} */
}
/* products */
.contain-mobile{
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    scrollbar-width: thin;
}
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
    margin-bottom: 20px;
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
.home .Daily-rsturant{
    color: #fff;
    background: #232f3e;
    padding: 10px 0;
    border-radius: 0 4px 0 0;
    font-weight: bold;
    width: 130px;
}
.home .contain-returant{
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #eee;
    padding: 30px 0;
    flex-flow: wrap;
    background-color: #1c2c34;
    margin-bottom: 20px;
}
.home .contain-returant .restu-item{
    width: 23%;
    cursor: pointer;
}
.home .contain-returant .restu-item div img{
    width: 60%;
    height: 170px;
    border-radius: 50%;
}
.home .contain-returant .restu-item .title{
    color: var(--rhead);
    display: flex;
    justify-content: center;
    padding: 5px 0;
    font-size: 20px;
    font-weight: bold;
}
/* Small devices (landscape phones, 576px and up) */
@media  (max-width: 767.98px) {
.home .contain-returant .restu-item{
    width: 48%;
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