<template>
<!-- banner-left1.png -->
        <Cartmini />  
        <div class="home">
         <div class="parent">
             <div class="left">
                <div class="imag"><img src="../../../public/img/banner-left1.png"></div> 
                <div class="Latest_Products">
                    <h2 style="">Latest Products</h2>
                    <div class="Products"  v-for=" product in products" :key="product">
                        <div class="imag"><img src="../../../public/img/small-product.jpg" ></div>
                        <div class="details">
                            <div class="stars"><span class="recipe-rating">★★★★<span>☆</span></span></div>
                            <div class="price">$70.00</div>
                            <div>{{product.name.slice(0,20)}}</div>
                            
                        </div>
                    </div>
                </div>
                                
             </div>
             <div class="right">
                 <div class="Daily">Daily deals</div>
             <div class="contain_offers">
             
            <!-- 1 -->
            <div class="contain">
                <div class="offer-details">
                   <div> <h1>Suitcase</h1></div>
                   <div><span class="offer_price">$70.00</span> <span class="price">$85.00</span></div>

                    <p class="information">
                        The most delicious and special foods in the restaurant..
                    </p>
                    <div class="count">
                    <div class="count-left">
					<h2>Hurry up!</h2>
					<p>Offers end in:</p>		
                    </div>
                     <div class="count-right">
					<span class="counter c-1">167</span>
                    <span class="counter c-2">14</span>
                    <span class="counter c-3">52</span>
                    <span class="counter c-4">30</span>		
                    </div>
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
                <!-- 2 -->
              <div class="contain">
                <div class="offer-details">
                   <div> <h1>Chair</h1></div>
                   <div><span class="offer_price">$70.00</span> <span class="price">$85.00</span></div>

                    <p class="information">
                        The most delicious and special foods in the restaurant..
                    </p>
                    <div class="count">
                    <div class="count-left">
					<h2>Hurry up!</h2>
					<p>Offers end in:</p>		
                    </div>
                     <div class="count-right">
					<span class="counter c-1">167</span>
                    <span class="counter c-2">14</span>
                    <span class="counter c-3">52</span>
                    <span class="counter c-4">30</span>		
                    </div>
                    </div>
                    
                </div>

                <div class="offer-image">
                    <img src="../../../public/img/small-product.jpg"/>

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
        <div class="big_offer">
            <img src="../../../public/img/cus2.png" >
        </div>
        <div class="title_products">
        <div class="Daily">Trending Products</div>
         <div class="section_products">
             <div class="list_sec_prod">
                 <i class="fa fa-list" aria-hidden="true"></i>
                 <div class="list_sec" >
                     <ul>
                        <li v-for="(section,i) in Sections.slice(0,4)" :key="i"
                        :class="{act_li: i === activeItem}" @click="selectItem(i)">{{section.name}}
                        </li>  
                     </ul>
                 </div>
             </div>
            <span v-for="(section,i) in Sections.slice(0,4)" :key="i" 
            :class="{ active_sec: i === activeItem}" @click="selectItem(i)">{{section.name}}
            </span>
           
         </div>
        </div>
          <div class="row">
             <div class="contain_products">

<svg id="spinner" class="spinner spin-hide" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg>


                 <div class="product-item col-md-3 col-xs-6" v-for=" product in products" :key="product">
                     <img src="../../../public/img/product-offer.jpg">
                     <div class="details">
                        <span class="offer_price">$70.00</span> <span class="price">$85.00</span>
                         <div>{{product.name.slice(0,product.name.length- 20)}}</div>
                     </div>
                 </div>
                </div>
             </div>
            
            <div class="medium_offer">
             <div><img src="../../../public/img/banner-ud1.jpg" alt=""></div>
            <div><img src="../../../public/img/banner-ud1.jpg" alt=""></div>
            </div>

             </div>
         </div>
        </div>
        <!-- products 
        <div class="products">
            <h2
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                class="heading"
            >
                Our <span>Products</span>
            </h2>
            <div class="container">
                <div class="row">
                    <productBody
                        v-for="prod in Product.slice(0, 4)"
                        :key="prod.id"
                        :id="prod.id"
                        :name="prod.name"
                        :short_des="prod.short_des"
                        :long_des="prod.long_des"
                        :store="prod.store"
                    ></productBody>
                </div>
            </div>
        </div>-->
   
</template>
<script>
// import { mapState } from 'vuex';
import axios from 'axios';
import { defineAsyncComponent } from 'vue';
export default {
    name: 'home',
    props: ['image'],
    data() {
        return {
            activeItem: 0,
            showDetails: false,
            chooseDetails: false,
            Sections: [],
            products: []
        };
    },
    components: {
        // productBody: defineAsyncComponent(() =>
        //     import(`@/components/global/productBody.vue`)
        // ),
        Cartmini: defineAsyncComponent(() =>
            import(`@/components/cart/Cartmini.vue`)
        ),
    },  
    methods: {
        
        fetch() {
            var self = this;
            let lang = window.localStorage.getItem('lang');
            axios
                .get(`/api/sections/getAll?lang=${lang}`)
                .then((res) => {
                    self.Sections = res.data.Section;
                    console.warn('Section: ', res.data.Section);
                       if( this.activeItem == 0){
                    this.products = res.data.Section[this.activeItem].product;              
            }
                })
                .catch(function (error) {
                    console.warn('------ Error ------: ', error);
                });
        },
        selectItem(i) {
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
           
           
        },
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
        // ...mapState([ 'Sections']),    // 'Categories', 'Brands', 'brands', 'Product'
    },
    mounted() {
          this.fetch();
        //  this.$store.dispatch('loadSections');
        // this.$store.dispatch('loadBrands');
        // this.$store.dispatch('loadCategories');
        // this.$store.dispatch('loadProducts');
    },
};
</script>

<style scoped>
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
.parent .left .Latest_Products h2{
     padding: 20px 0;
     border-bottom: 2px solid #ff3c20;
}
.parent .left .Latest_Products .Products{
    display: flex;
    padding: 10px 0;
}
.parent .left .Latest_Products .Products .imag{
   width: 75px;
}
.parent .left .Latest_Products .Products .details .stars{
    color: #ff9933;
}
.parent .left .Latest_Products .Products .details .price{
    color: #ff3c20;
}
/* ___________________ right __________________ */
.parent .right{
    width: 81%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
.parent .right .title_products{
    display: flex;
    width: 99%;
    justify-content: space-between;
}
.parent .right .section_products span{
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
}
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
  } 
.parent .right .contain_offers .contain{
	/* box-shadow: 0 15px 30px 1px grey;
	background: rgba(255, 255, 255, 0.90); */
	text-align: center;
	overflow: hidden;
    height: 217px;
    padding: 0;	
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
    color: #ff3c20;
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
.parent .right .offer-details .count-left{
    float: left;
    width: 29%;
}
.parent .right .offer-details .count-right{
    float: right;
    width: 71%;
    display: flex;
    justify-content: space-around;
}
.parent .right .offer-details .count-right .counter{
    position: relative;
    background-color:#ebebeb;
    border-radius: 50%;
    padding: 0px 10px;
    height: 40px;
    display: grid;
    align-content: center;
    font-weight: bold;
}
.parent .right .offer-details .count-right .counter::after{
    font-size: 10px;
    opacity: .7;
    font-size: 10px;
    opacity: .7;
    position: absolute;
    bottom: -20px;
}
.parent .right .offer-details .count-right .c-1::after{
    content: "DAYS";
    left: 8px;
}
.parent .right .offer-details .count-right .c-2::after{
    content: "HOURS";
    left: 0;
}
.parent .right .offer-details .count-right .c-3::after{
    content: "MINS";
    left: 6px;
}
.parent .right .offer-details .count-right .c-4::after{
    content: "SECS";
    left: 6px;
}
.parent .right .offer-details .count-left h2{
    font-weight: bold;
}
.parent .right .contain .offer-details h1{
	display: inline-block;
	position: relative;
	font-size: 20px;
	color: #344055;
	margin: 0;
	font-weight: bold;
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
}
.parent .right .contain_products .product-item img{
   width: 100%;
}
.parent .right .contain_products .product-item .offer_price{
    color: #ff3c20;
    font-size: 20px;
    font-weight: 700;
}
.parent .right .contain_products .product-item .price{
    color: #999999;
    text-decoration-line: line-through;
    margin-left: 10px;
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
 .parent .right .contain_offers .contain{
    height: 180px;
}
.parent .right .section_products span{
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
}
.parent .right .contain_products .product-item{
    max-width: 48%;
}
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
.parent .right .contain_products .product-item{
    max-width: 31%;
}
.parent .right .section_products span{
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
}
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
</style>
<style lang="scss" scoped>
$offset: 187;
$duration: 1.4s;

.spinner {
  animation: rotator $duration linear infinite;
  position: absolute;
  z-index: 50;
    top: 230px;
    left: 450px;
}
.spin-hide{
    display: none;
}
@keyframes rotator {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation:
    dash $duration ease-in-out infinite, 
    colors ($duration*4) ease-in-out infinite;
}

@keyframes colors {
  0% { stroke: #4285F4; }
  25% { stroke: #DE3E35; }
  50% { stroke: #F7C223; }
  75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
}

@keyframes dash {
 0% { stroke-dashoffset: $offset; }
 50% {
   stroke-dashoffset: $offset/4;
   transform:rotate(135deg);
 }
 100% {
   stroke-dashoffset: $offset;
   transform:rotate(450deg);
 }
}
</style>