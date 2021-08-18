<template>
    <div class="card">
        <div class="row">
            <div class="col-xs-12 cart"
             :class="{' col-sm-9': $store.state.cartItems.length !== 0, 'col-sm-12': $store.state.cartItems.length == 0 }">
                <div class="title">
                    <div class="row">
                        <div class="col-sm-12">
                            <h2 style="margin-bottom: 5px">
                                <b style="font-size: 24px;opacity: 0.7;">{{ $t('ShoppingCart') }}</b>
                            </h2>
                        </div>
                    </div>
                </div>
                <!--  -->

                <div
                    v-for="(items, index) in cartItems"
                    :key="index"
                    class="row border-top border-bottom"
                    style="padding: 10px 0"
                >
                    <div
                        class="store"
                        v-if="
                            index == 0 ||
                            items.title != cartItems[index - 1].title
                                ? items.title
                                : ''
                        "
                    >
                    
                    <div>
                        <img src="../../../public/img/market-logo3.jpg" />
                    </div>
                    <div class="store_title">
                    <h2>{{ $t('The Seller') }} :</h2>
                    </div>
                    <div class="store_title">
                        <span >
                            {{ items.title }}
                        </span>
                    </div>
                    
                    </div>
                    <div class="cart-items">
                        <div class="col-sm-2 col-xs-12">
                            <img class="img" v-if="items.image" :src="items.image" />
                            <img v-else src="../../../public/img/products1.jpg" />
                        </div>
                        <div class="col-sm-2 col-xs-3">
                            {{ items.name }}
                        </div>
                        <div class="col-sm-2 col-xs-3">
                            {{ items.short_des }}
                        </div>
                        <div class="col-sm-3 quantity-add">
                            <button class="btnn" @click="removeItem(items)">
                                <i class="fa fa-angle-down"></i>
                            </button>
                            <a class="quantity">
                                <span class="cart-quantity">{{
                                    items.quantity
                                }}</span></a
                            >
                            <button class="btnn" @click="addItem(items)">
                                <i class="fa fa-angle-up"></i>
                            </button>
                        </div>
                        <div class="col-sm-2 col-xs-3">
                            <span>{{ $t('price') }}: </span>
                            <span
                                class="price"
                              
                                >{{ items.store_product}}</span
                            >
                            <span
                                @click="removeFromCart(items)"
                                class="close fa fa-trash" style="font-size: 1.7rem;"
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3 col-xs-12 summary" v-if="totalPrice !== 0">
                <!-- <div class="row">
                    <div :totalPrice="totalPrice" class="col text-right">
                        <span class="price"> {{ totalPrice }}</span>
                        ل.س
                    </div>
                    <div class="col" style="padding-left: 0">
                        :{{ $t('price') }}
                    </div>
                </div> -->
                <!-- <form class="fo">
                    <p>{{ $t('ShippingCosts') }} 500 ل.س</p>
                </form> -->
                <div
                    class="row"
                    style="
                        border-top: 1px solid rgba(0, 0, 0, 0.1);
                        padding: 2vh 0;
                        margin-bottom: 40px;
                    "
                >
                     <div class="col">{{ $t('totalPrice') }}</div>
                    <div class="col text-right">
                        <span class="price"> {{ totalPrice  }}</span>
                        ل.س
                    </div>
               
                </div>
                <a class="cta" style="border: none">
                    <span>{{ $t('Check Out') }}</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </a>
            </div>
            <EmptyCart v-else />
        </div>
    </div>
</template>
<style lang="sass" scoped>
$color: #111
$primary: #FFAB9D

html, body
  height: 100%

body
  display: grid
  font-family: Avenir, sans-serif
  color: $color

a
  text-decoration: none
  color: inherit


.cta
  position: relative
  margin: auto
  padding: 19px 22px
  transition: all .2s ease
  &:before
    content: ""
    position: absolute
    top: 0
    left: 0
    display: block
    border-radius: 28px
    background: var(--r)
    width: 56px
    height: 56px
    transition: all .3s ease
  span
    position: relative
    font-size: 16px
    line-height: 18px
    font-weight: 900
    letter-spacing: .25em
    text-transform: uppercase
    vertical-align: middle
  svg
    position: relative
    top: 0
    margin-left: 10px
    fill: none
    stroke-linecap: round
    stroke-linejoin: round
    stroke: $color
    stroke-width: 2
    transform: translateX(-5px)
    transition: all .3s ease
  &:hover
    &:before
      width: 100%
      background: var(--bl)
    svg
      transform: translateX(0)
  &:active
    transform: scale(.96)
</style>
<style scoped>
.col-sm-2, .col-xs-12,.col-xs-3{
    padding: 0;
    font-size: 16px;
}
@media (max-width: 767px) {
    .cart {
        padding: 4vh;
        border-bottom-left-radius: unset;
        border-top-right-radius: 1rem;
    }
    .card {
        margin: 3vh auto;
    }
    .summary {
        border-top-right-radius: unset;
        border-bottom-left-radius: 1rem;
    }
}
.close:hover {
    color: var(--r);
    font-size: 20px;
}
.title {
    margin-bottom: 5vh;
}
.card {
    margin: 0;
    width: 100%;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
    border: transparent;
}
.cart-items div {
    margin: auto;
}
.cart-items {
    display: inline-flex;
    width: 100%;
}
.cart {
    background-color: #fff;
    padding: 4vh 5vh;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
}
.summary {
    background-color: #00000017;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 4vh;
    color: rgb(65, 65, 65);
}
.summary .col-2 {
    padding: 0;
}
.summary .col-10 {
    padding: 0;
}
.row {
    margin: 0;
}
.title b {
   font-size: 16;
}
.main {
    margin: 0;
    padding: 2vh 0;
    width: 100%;
}

a {
    padding: 0 1vh;
    border: 1px solid;
}
.close {
    margin-left: auto;
   font-size: 16;
    cursor: pointer;
}
img {
    width: 100%;
    transition: 1s;
}
h5 {
    margin-top: 4vh;
}
hr {
    margin-top: 1.25rem;
}
form {
    padding: 2vh 0;
}
select {
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1.5vh 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}
input {
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}
input:focus::-webkit-input-placeholder {
    color: transparent;
}
.img:hover {
    transform: scale(1.3);
    z-index: 2;
}
.store {
    font-size: 2vw;
    text-align: center;
    width: 90%;
    border: 2px solid #eee;
    height: auto;
    padding: 2vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}
.store .store_title {
    display: grid;
    align-content: center;
}
.btn {
    background-color: var(--bl);
    color: white;
    width: 100%;
   font-size: 16;
    margin-top: 4vh;
    padding: 1vh;
    border-radius: 2px;
    height: 50px;
    margin-top: 5vh;
}
.btnn {
    color: #fff;
    background-color: transparent;
    background-color: var(--bl);
    transition: all 0.3s ease-in-out;
    border: none;
    border-radius: 9px;
    padding: 0 8px;
}
.quantity {
   font-size: 16;
    border-color: #fff;
}
.cart-quantity {
    font-size: 16px;
}
.price {
    font-weight: bold;
    color: var(--bl);
}
.btn:focus {
    box-shadow: none;
    outline: none;
    box-shadow: none;
    color: white;
    -webkit-box-shadow: none;
    -webkit-user-select: none;
    transition: none;
}
a {
    color: black;
}
a:hover {
    color: black;
    text-decoration: none;
}
#code {
    background-image: linear-gradient(
            to left,
            rgba(255, 255, 255, 0.253),
            rgba(255, 255, 255, 0.185)
        ),
        url('https://img.icons8.com/small/16/000000/long-arrow-right.png');
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: center;
}
@media (max-width: 575.98px) {
    .title {
        margin: 0.5vh;
    }
    .cart {
        padding: 0;
        font-size: 2vw;
    }
    .cart-items {
        display: inline-block;
        width: 100%;
    }
    .cart-items div {
        margin-bottom: 1vh;
    }
    .cart-items .img-fluid {
        max-width: -1px;
    }
    .fo {
        margin-top: 1vh;
    }
    .btn {
        margin-top: 1vh;
    }
}
</style>

<script>
import EmptyCart from '@/components/cart/EmptyCart.vue';
import { mapState } from 'vuex';

export default {
    name: 'Cart',
    props: ['id', 'name', 'image', 'short_des', 'long_des', 'store_product'],
    components: {
        EmptyCart,
    },
    methods: {
        addItem(items) {
            this.$store.dispatch('addToCart', items);
        },
        removeItem(items) {
            this.$store.dispatch('removeItem', items);
        },
        removeFromCart(item) {
            this.$store.commit('removeFromCart', item);
        },
    },
    computed: {
        ...mapState(['Stores', 'cartItems']),

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
        /*    totalTitle () {
        let totalTitle = [];
        let len = this.$store.state.cartItems.length;
            for (var i = 0; i < len; i++) {
             totalTitle.push( this.$store.state.cartItems[i].title);
            }
           var uniqe = [...new Set(totalTitle)];
            
            return uniqe;
        },*/
    },
    mounted() {
        this.$store.dispatch('loadStores');
    },
};
</script>
