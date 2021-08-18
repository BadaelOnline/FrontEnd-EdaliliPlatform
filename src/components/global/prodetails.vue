<template>
    <Cartmini />
    <div class="parent">
            <div class="contain_slider">
                    <ul id="body">

    <input type="radio" name="radio-btn" id="img-1" checked />
    <li id="img-container">
        <div id="img-inner">
          <img v-if="image" :src="ProductID.image" /><img v-else src="../../../public/img/products1.jpg" />
        </div>
        <label for="img-6" class="sb-bignav" title="Previous">&#x2039;</label>
        <label for="img-2" class="sb-bignav" title="Next">&#x203a;</label>
    </li>
    
    <input type="radio" name="radio-btn" id="img-2" />
    <li id="img-container">
        <div id="img-inner">
           <img v-if="image" :src="ProductID.image" /><img v-else src="../../../public/img/products1.jpg" />
        </div>
        <label for="img-1" class="sb-bignav" title="Previous">&#x2039;</label>
        <label for="img-3" class="sb-bignav" title="Next">&#x203a;</label>
    </li>
    
    <input type="radio" name="radio-btn" id="img-3" />
    <li id="img-container">
        <div id="img-inner">
       <img v-if="image" :src="ProductID.image" /><img v-else src="../../../public/img/products1.jpg" />
        </div>
        <label for="img-2" class="sb-bignav" title="Previous">&#x2039;</label>
        <label for="img-4" class="sb-bignav" title="Next">&#x203a;</label>
    </li>
    
    <input type="radio" name="radio-btn" id="img-4" />
    <li id="img-container">
        <div id="img-inner">
        <img v-if="image" :src="ProductID.image" /><img v-else src="../../../public/img/products1.jpg" />
        </div>
        <label for="img-3" class="sb-bignav" title="Previous">&#x2039;</label>
        <label for="img-5" class="sb-bignav" title="Next">&#x203a;</label>
    </li>
    
    <input type="radio" name="radio-btn" id="img-5" />
    <li id="img-container">
        <div id="img-inner">
         <img v-if="image" :src="ProductID.image" /><img v-else src="../../../public/img/products1.jpg" />
        </div>
        <label for="img-4" class="sb-bignav" title="Previous">&#x2039;</label>
        <label for="img-6" class="sb-bignav" title="Next">&#x203a;</label>
    </li>
    
    <input type="radio" name="radio-btn" id="img-6" />
    <li id="img-container">
        <div id="img-inner">
           <img v-if="image" :src="ProductID.image" /><img v-else src="../../../public/img/products1.jpg" />
        </div>
        <label for="img-5" class="sb-bignav" title="Previous">&#x2039;</label>
        <label for="img-1" class="sb-bignav" title="Next">&#x203a;</label>
    </li>
</ul>
                        <div class="dis">
                          <h3 style="font-weight: bold;">{{$t('Name')}} </h3>   {{ ProductID.name }}
                        </div>
                        <div  class="dis">
                          <h3 style="font-weight: bold;">{{$t('discription')}} </h3>   {{ ProductID.long_des }}
                        </div>
                        <div class="heart-conten">
                            <div
                                @click="heartlike()"
                                id="heart"
                                class="heart"
                            ></div>
                        </div> 
</div>
                <div class="destails_products">
                    <div class="content-pro ">  
                        <div class="avilble">
                                                   <div>
                            <span>  {{ minPrice }} {{$t('Sp')}}</span>
                              <span style="color: #ca0a0a; padding:0 10px">{{$t("Even")}}</span>
                              <span>
                                {{ maxPrice }} {{$t('Sp')}}
                              
                            </span>
                            
                        </div>
                            <div style="display: inline-block">
                                {{$t('Available in')}}  
                             {{ stores.length}} 
                             {{$t('stores')}} 
                               <span class="fa fa-check-circle" style="padding: 0 5px;color: green;"></span>
                            </div>
                          

                        </div>
 
                        <div class="sorting">
                            <div class="sorting_title">
                            <h2> {{$t('sorting stores')}} </h2>
                            </div>
            <div class="sort">
                <input
                    id="radio1"
                    name="radios"
                    value="price"
                    type="radio"
                    v-model="sortType"
                    v-on:change="sortItem()"
                />
               
                <label for="radio1">{{$t('cheapest to expensive')}}</label>
            </div>
            <div class="sort">
                <input
                    id="radio2"
                    name="radios"
                    value="prices"
                    type="radio"
                    v-model="sortType"
                    v-on:change="sortItem()"
                />
                <label for="radio2">{{$t('expensive to cheapest')}}</label>
            </div>
            <div class="sort">
                <input
                    type="radio"
                    id="radio3"
                    name="radios"
                    value="space"
                    v-model="sortType"
                    v-on:change="sortItem()"
                />
                <label for="radio3">{{$t('closest to farthest')}}</label>
            </div>
            <div class="sort">
                <input
                    type="radio"
                    id="radio4"
                    name="radios"
                    value="spaces"
                    v-model="sortType"
                    v-on:change="sortItem()"
                />
                <label for="radio4">{{$t('farthest to closest')}}</label>
            </div>
            </div>                
  <div id="flex-container" class="testimonials">
    <div id="left-zone">
      <ul class="list">
          <li style="margin: 0 auto;opacity:.9;"><i class="far fa-hand-point-down"></i>
{{$t("select store from here")}} <i class="far fa-hand-point-down"></i>
</li>
        <li class="item" v-for="item in stores" :key="item.pr">
          <input type="radio" :id="item.title" name="basic_carousel" checked="checked" />
          <label @click="GetIdStore(item.id,item.title)" class="label_testimonial-1" :for="item.title">{{item.title.slice(0,10)}}</label>
          <div class="content-test content_testimonial-1">
            <span class="picto"><img src="../../../public/img/market-logo3.jpg"></span>
            <h1>{{item.title}}</h1>
           <router-link 
                            :to="`/visitstore/${item.id}/${item.title}`"
                        > <button class="btn_visite">{{ $t('visit') }}</button></router-link>
                    
          </div>
        </li>
        
     
      </ul>
    </div>
    <div id="right-zone"></div>
  </div>
                     <hr /> 

                        <div style="opacity: .8">
                          <span style="font-weight: bold;">{{$t('price')}} :   </span>
                          <span v-if="Product_price.price">ل.س   {{ Product_price.price }} </span>
                          <span style="color: #d93c3c;" v-else>{{$t('Choose a store to view the product price')}}</span>
                          
                        </div>

                                    <div class="stars" >
                    <div>
                        <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    </div>
                   
                </div>
                    
                     <hr />
                     <div class="contain_goverment">
                         
                               <span style="padding: 0 10px;">أشحن الى </span>
                               <div>للحصول عليه غداََ! اطلب قبل الساعة 11 مساءً إختر التوصيل في اليوم التالي على صفحة الشراء.	</div>
                        </div>
                               <div class="addtocart">
                                <button
                                    @click="addToCart(Product_price.price)"
                                    class="but1"
                                >
                                    <span>
                                      {{$t('Add to Cart')}} 
                                    </span>
                                </button>
                                  <div ref="valdate_cart" class="valdate_cart animate__animated animate__shakeY">
                                    <span>
                                      {{$t('you can not add to cart without select store')}}     
                                    </span>
                               
                            </div>
                            </div>
                          
                            <div style="">
                        <div style="opacity: .8;margin: 10px 0;">
                          <span style="font-weight: bold;">{{$t('Product Status')}} :</span>   جديدة
                        </div>
                        <div style="opacity: .8;margin: 10px 0;">
                          <span style="font-weight: bold;">{{$t('The Seller')}} :</span> 
                          <span v-if="store_title"> {{ store_title }}</span> 
                           <span v-else> {{$t('unselect store')}}</span> 
                        </div>
                       </div>
       
                     
                    </div>
                </div>
      

    </div>
</template>

<style scoped>

.parent{
    display: flex;
    padding: 20px 0;
    justify-content: space-around;
}
/* Medium devices (tablets, 768px and up) */
@media (max-width: 991.98px) {
 .parent{
   flex-direction: column;
}

.parent .destails_products .content-pro {
    text-align: center;
}
}
.content-cart{
    position: relative;
}

.contain_goverment {
    padding: 20px 20px 40px 20px;
    border: 1px solid #eee;
}

.parent .destails_products{
    border: 1px solid #eee;
    padding: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;
    height: 600px;
}
.addtocart{
    position: relative;
}
.parent .destails_products .valdate_cart{
    background-color: #eee;
    padding: 10px;
    color: var(--r);
    position: absolute;
    top: 0;
    display: none;
}
.sorting{
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
}
.sorting .sorting_title{
   width: 100%;
   display: flex;
    justify-content: end;
}
.sorting .sorting_title h2{
  text-decoration-line: underline;
  text-decoration-color: #008b8b;
  color: #008b8b;
  font-weight: bold;
}

.dis h3{
 opacity: .8;
}
.sort {
  width: 23%;
text-align: center;
height: 60px;
}
.sort input[type='radio'] {
    display: none;
}

.sort label {
    display: inline-block;
    background-color: #e9ecf2;
    padding: 4px 11px;
    font-family: Arial;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 10px 0;
}
.sort label:hover {
    background-color: #008b8b;
    transition: all 0.5s;
}

.sort input[type='radio']:checked + label {
    background-color: #008b8b;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    color: #fff;
}


/* product style */
.content-pro {
    font-size: 18px;
    text-align: right;
}
.content-pro div {
    margin-top: 2vh;
    margin-bottom: 2vh;
}
.content-pro .avilble {
    display: flex;
    justify-content: space-around;
}
.content-pro .checked {
    color: #dcd741;
}
.but1 {
    border-radius: 4px;
    background-color: #008b8b;
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    padding: 20px;
    width: 190px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
}
.but1 span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}
.but1 span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
    font-size: 30px;
}
.but1:hover span {
    padding-right: 25px;
}
.but1:hover span:after {
    opacity: 1;
    right: 0;
}
.checked {
    color: #dcd741;
}
/* slider */
@import url(https://fonts.googleapis.com/css?family=Varela+Round);


ul, li { display: block; }

#body {
    width: 405px;
    height: 405px;
    display: block;
    padding: 0;
    margin: 0 auto;
}

#body * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}

#body input { display: none; }
#img-container{
      position: absolute;
}
#img-inner {
    top: 0;
    opacity: 0;
   width: 405px;
    height: 405px;
    display: block;
  
    
    transform: scale(0);
    -moz-transform: scale(0);
    -webkit-transform: scale(0);
    
    transition: all .7s ease-in-out;
    -moz-transition: all .7s ease-in-out;
    -webkit-transition: all .7s ease-in-out;
}
#body img {
    width: 100%;
    height: 100%;
}


#img-inner:nth-of-type(1) {
    /* And... CSS3 image preloading :D */
    background-image:
        url("http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"),
        url("http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg"),
        url("http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg"),
        url("http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg"),
        url("http://farm9.staticflickr.com/8195/8098750703_797e102da2_z.jpg");
}

#img-inner:hover ~ label.sb-bignav { opacity: 0.5; }

label.sb-bignav:hover { opacity: 1; }


.sb-bignav {
    width: 200px;
height: 407px;
    display: none;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 9;
    cursor: pointer;
    
    transition: opacity .2s;
    -moz-transition: opacity .2s;
    -webkit-transition: opacity .2s;
	
    color: white;
    font-size: 156pt;
    text-align: center;
    line-height: 380px;
    font-family: "Varela Round", sans-serif;
    background-color: rgba(255, 255, 255, .3);
    text-shadow: 0px 0px 15px rgb(119, 119, 119);
}

label[title="Next"] { right: 0; }

input:checked + li > #img-inner {
    opacity: 1;
        
    transform: scale(1);
    -moz-transform: scale(1);
    -webkit-transform: scale(1);
    
    transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -webkit-transition: opacity 1s ease-in-out;
}

input:checked + li > label { display: block; }

/* store style */
.d-block, h2{
  color: #33475c;
  font-weight: 700;
  font-size: 2.5rem;
  display: block;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
}

/* ============= Begin Testimonial Flexbox ============ */

#flex-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  min-height: 400px;
  height: auto;
  max-width: 1000px;
  margin: auto;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
}

#left-zone {
  height: 50%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}

#left-zone .list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  list-style: none;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  margin: auto;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.item input {
  display: none;
}

label {
  display: block;
  opacity: 0.5;
  height: 50px;
  text-align: center;
  line-height: 50px;
  position: relative;
}

label:hover {
  opacity: 0.75;
  cursor: pointer;
}
.content_testimonial-1 .picto img{
    width: 100%;
}

.content-test {
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0;
  -webkit-transform: translateY(100%);
  -ms-transform: translateY(100%);
  transform: translateY(100%);
  height: 50%;
  width: 100%;
  -webkit-transition: 0.5s ease-out;
  -o-transition: 0.5s ease-out;
  transition: 0.5s ease-out;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  pointer-events: none;
}
#right-zone {
  width: 100%;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  height: 50%;
}

input:checked ~ .content-test {
  -webkit-transform: translateY(0%);
  -ms-transform: translateY(0%);
  transform: translateY(0%);
  -webkit-transition: -webkit-transform 1s;
  transition: -webkit-transform 1s;
  -o-transition: transform 1s;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s;
  opacity: 1;
}

@media (min-width: 480px) {
  #flex-container {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    min-height: auto;
    height: auto;
    /* position: absolute; */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  #left-zone .list {
    border-right: 2px solid #cccccc;
  }

  .content-test {
    width: 65%;
    height: 100%;
    pointer-events: auto;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  #left-zone {
    width: 35%;
  }

  #right-zone {
    height: 100%;
    width: 65%;
  }
}
/* If the screen size is 480px or less */
@media (max-width: 480px) {
  .content_testimonial-1 .picto {
    padding-top: 100px;
  }
  .item > label {
    font-size: 1.3rem;
  }
}

.content_testimonial-1 .picto {
  height: 100px;
  width: 100px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.content_testimonial-1 h1 {
  color: #008b8b;
  text-align: center;
  font-size: 20px;
font-weight: bold;
}

input:checked ~ label {
  opacity: 1;
  -webkit-animation: all 1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation: all 1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

input:checked ~ label.label_testimonial-1 {
  color: #fff;
  border-right: solid 4px #008b8b;
  background-color: #008b8b;
}

label:first-letter {
  text-transform: uppercase;
}
.content-test .btn_visite{
    padding: 10px 20px;
    color: #fff;
    border: none;
    border-radius: 7px;
    background-color: #008b8b;
}
/* ============== End Testimonial Flexbox ============= */

</style>
<style lang="scss" scoped>
.heart-conten {
    background-color: #f0f0f0;
    border-radius: 20%;
    width: 58px;
    height: 50px;
    margin: 35px auto;
}
.heart-conten:hover {
    background-color: #e2264d;
}
.heart {
    width: 80px;
    height: 100px;
    background: url('../../../public/img/heart.png') no-repeat;
    background-position: 5px -23px;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
    margin: -22px 0px 0 -25px;

    &.is-active {
        transition-duration: 1s;
        background-position: -2795px -23px;
    }
}
</style>
<script>
  import $ from 'jquery';
import { defineAsyncComponent } from 'vue';
import axios from 'axios';
import jeson from '@/jeson/MOCK_DATA.json';
export default {
    name: 'ProductDetails',
     data() {
        return {
             sortType: '1',
            slideIndex : 0,
            ProductID: {},
            stores: [],
            StorebyId:{},
            Product_price: {},
            store_id: null,
            store_title: null,
             governorates: jeson[0].governorates,
        };
    },
    components: {  
         Cartmini: defineAsyncComponent(() =>
            import(`@/components/cart/Cartmini.vue`)
        ),
        },
    props: ['id', 'name', 'image', 'short_des', 'long_des'],
   async  created(){
   await axios
                .get(`/api/products/getById/${this.$route.params.id}`)
                .then((res) => {
                    console.warn('ProductID :', res.data.product);
                     this.ProductID = res.data.product;
                    this.stores = res.data.product.store;
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });                
    }
   ,
    computed: {
        maxPrice() {
            let maxPrice = 0;

            let len = this.stores.length;
            var priceArray = [];
            for (var i = 0; i < len; i++) {
                priceArray.push(
                    this.stores[i].pivot.price
                );
            }
            maxPrice = Math.max(...priceArray);
            console.log(maxPrice);
            return maxPrice;
        },
        minPrice() {
            let minPrice = 0;
            let len = this.stores.length;
            var priceArray = [];
            for (var i = 0; i < len; i++) {
                priceArray.push(
                    this.stores[i].pivot.price
                );
            }
            minPrice = Math.min(...priceArray);
            console.log(minPrice);

            return minPrice;
        },
    },
    methods: {
        
        heartlike: function () {
            document.getElementById('heart').classList.toggle('is-active');
        },
        gotoListView: function (i) {
            this.$router.push(`/Stores_have_Product/${i}`);
        },
     async   GetIdStore(i,t){
            this.store_id = i;
            this.store_title = t;
          await  axios
                .get(`/api/stores/getById/${this.store_id}`)
                .then((res) => {
                    console.log('StorebyId :', res.data.Store);
                      this.StorebyId = res.data.Store;
                        this.Product_price = res.data.Store.product[this.$route.params.id].pivot;

                    
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
                sortItem() {
            if (this.sortType == 'space') {
                this.ProductID.store = this.ProductID.store.sort(
                    (prev, curr) => prev.space - curr.space
                );
            } else if (this.sortType == 'spaces') {
                this.ProductID.store = this.ProductID.store.sort(
                    (prev, curr) => curr.space - prev.space
                );
            } else if (this.sortType == 'price') {
                this.ProductID.store = this.ProductID.store.sort(
                    (prev, curr) => prev.pivot.price - curr.pivot.price
                );
            } else if (this.sortType == 'prices') {
                this.ProductID.store = this.ProductID.store.sort(
                    (prev, curr) => curr.pivot.price - prev.pivot.price
                );
            }
        },        
        showcart: function () {
            var cart = document.getElementById('cartshop');
            var backcover = document.getElementById('backcover');
            backcover.classList.toggle('vs');
            cart.classList.toggle('cart_vs');
        },
        addToCart(s) {
            if(this.store_id == null){
             this.$refs.valdate_cart.style.display = "block";
             this.$refs.valdate_cart.style.top = "10%";
       setTimeout(() => {
            $('.valdate_cart').css("display", "none");
       }, 5000);
            
              
            }
            else{
            this.$store.dispatch(
                'addToCart',
                {
                    id: this.$route.params.id,
                    id_store:  this.store_id,
                    title: this.store_title,
                    name: this.ProductID.name,
                    image: this.ProductID.image,
                    short_des: this.ProductID.short_des,
                    long_des: this.ProductID.long_des,
                    store_product: s,
                },
                this.id
            );
            document.getElementById('cart').animate(
                [
                    // keyframes
                    { transform: 'rotate(-20deg)' },
                    { transform: 'rotate(20deg)' },
                    { transform: 'scale(3,3)' },
                    { transform: 'scale(1,1)' },
                ],
                {
                    // timing options
                    duration: 1000,
                }
            );
            this.showcart();
            }
        },
  
  

    },
 
   
};
</script>
