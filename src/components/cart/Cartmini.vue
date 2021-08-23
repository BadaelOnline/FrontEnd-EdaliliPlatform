<template>
  <div id="backcover" class="backcover" @click="backcover()"></div>
    <div>
        <div
            
            @click="totalPrice !== 0 ? showcart() : hidecart()"
            id="cart"
        >
           
        </div>
         
        <div id="cartshop"  class="cart-shop">
            <div class="contain_details" v-for="items in cartItems.slice(cartItems.length -1,cartItems.length)"
                        :key="items.id">
                <div class="name_img">
                    <div class="img">
                        <img  v-if="items.image" :src="items.image" />
                        <img  v-else src="../../../public/img/products1.jpg" />
                    </div>
                    <div class="name">
                        {{ items.name }}
                    </div>
                </div>
                    <div class="discrption">
                        {{ items.short_des }}
                    </div>
                    <div>
                         <span>{{ $t('price') }}:<span class="price">{{items.store_product}}</span></span>
                    </div>
                    
                    <div class="contain_price">
                        <span title="delete" @click="removeFromCart(items)" class="close fa fa-trash"></span>
                     
                        <span>{{ $t('totalPrice') }}<span class="price">{{totalPrice}}</span></span>
                      
                    </div>

            </div> 
                   
                    <div>
                        <button class="button"  @click="backcover()">
                            <span>{{ $t('Continue shopping') }}</span>
                        </button>
                        <router-link to="/Cart">
                            <button class="button but1">
                                <span>{{ $t('Check Out') }}</span>
                            </button>
                        </router-link>
                    </div>
             
            </div>
     
    </div>
</template>
<style scoped>
.name_img .img img{
    width: 200px;
    height: 260px;
}
.contain_details div{
    margin-bottom: 20px;
}
.button {
    border-radius: 4px;
    background-color: var(--bl);
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
.contain_price{
    display: flex;
    justify-content: space-around;
}
.button span {
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

.button:hover span {
    padding-right: 25px;
}

.button:hover span:after {
    opacity: 1;
    right: 0;
}
.close {
    cursor: pointer;
    font-size: 16px;
}
.close:hover {
    color: red;
    font-size: 20px;
}

.cart-shop {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    height: 100%;
    width: 360px;
    z-index: 101;
    left: -360px;
    transition: all 0.5s;
}
.backcover{
    background-color: rgba(0, 0, 0, 0.178);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top:  0;
    display: none;
    
}
.cart_vs{
 left: 0;
}
.vs {
    display: block;
}
.btnn {
    color: #fff;
    background-color: transparent;
    background-color: var(--bl);
    transition: all 0.3s ease-in-out;
    border: none;
    border-radius: 9px;
}

.quantity {
    font-size: 2vh;
    border-color: #fff;
    margin: 0 15px;
}
.price {
    font-weight: bold;
    color: var(--bl);
    font-size: 16px;
}
</style>

<script>
import { mapState } from 'vuex';

export default {
    components: {},
    props: ['id', 'name', 'image', 'short_des', 'long_des', 'store_product'],

    data() {
        return {};
    },
    methods: {
        backcover(){
        var cart = document.getElementById('cartshop');
        var backcover = document.getElementById('backcover');
        backcover.classList.remove('vs');
        cart.classList.remove('cart_vs');
        },
        showcart: function () {
            var cart = document.getElementById('cartshop');
            var backcover = document.getElementById('backcover');
            backcover.classList.toggle('vs');
            cart.classList.toggle('cart_vs');
        },
        hidecart: function () {
            var cart = document.getElementById('cartshop');     
            cart.classList.remove('vs');
        },
        // addItem(items) {
        //     this.$store.dispatch('addToCart', items);
        // },
        // removeItem(items) {
        //     this.$store.dispatch('removeItem', items);
        // },
        removeFromCart(item) {
            this.$store.commit('removeFromCart', item);
        },
    },
    computed: {
        cartItems() {
            return this.$store.state.cartItems;
        },
        // cartItemCount() {
        //     return this.$store.state.cartItemCount;
        // },
        totalPrice() {
            let price = 0;
            let len = this.$store.state.cartItems.length;
            for (var i = 0; i < len; i++) {
                price +=
                    this.$store.state.cartItems[i].quantity *
                    this.$store.state.cartItems[i].store_product;
                    console.log(typeof( this.$store.state.cartItems[i].store_product))
            }
            console.log(len);
            return price;
        },
        ...mapState(['store']),
    },
    //  mounted () {
   
    //  },
};
</script>
