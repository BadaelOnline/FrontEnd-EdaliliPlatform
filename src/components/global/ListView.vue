<template>
 <Cartmini />
    <div class="ProductDetalis" style="background-color: #e9ecf2">
        <div class="row">
            <div class="col-12"><h2>أختيار الترتيب</h2></div>
            <div class="sort col-3">
                <input
                    id="radio1"
                    name="radios"
                    value="price"
                    type="radio"
                    v-model="sortType"
                    v-on:change="sortItem()"
                />
                <label for="radio1">من الأرخص الى الأغلى</label>
            </div>
            <div class="sort col-3">
                <input
                    id="radio2"
                    name="radios"
                    value="prices"
                    type="radio"
                    v-model="sortType"
                    v-on:change="sortItem()"
                />
                <label for="radio2">من الأغلى الى الأرخص</label>
            </div>
            <div class="sort col-3">
                <input
                    type="radio"
                    id="radio3"
                    name="radios"
                    value="space"
                    v-model="sortType"
                    v-on:change="sortItem()"
                />
                <label for="radio3">من الأقرب الى الأبعد</label>
            </div>
            <div class="sort col-3">
                <input
                    type="radio"
                    id="radio4"
                    name="radios"
                    value="spaces"
                    v-model="sortType"
                    v-on:change="sortItem()"
                />
                <label for="radio4">من الأبعد الى الأقرب</label>
            </div>
            <div class="col-8" style="margin: 10px 0">
                <img class="product-img" src="../../../public/img/w.jpg" />
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="col-12">
                        <h5 class="prod-name">{{ ProductID.name }}</h5>
                    </div>
                    <div class="col-12">
                        <h5 class="prod-dis">{{ ProductID.short_des }}</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="show-prod">
            <div
                class="store animate__animated animate__fadeInUpBig"
             v-for=" item in stores"
             :key="item.pr"
            >
                <div>
                    <img
                        class="rounded-circle store-logo"
                        src="../../../public/img/market-logo.png"
                    />
                </div>
                <div>
                    <h2>
                        {{ item.title }}
                    </h2>
                    <span>{{ 500 }}متر</span>
                </div>
                <div>
                    <h2>{{item.pivot.price }} ل.س</h2>
                </div>

                <div style="display: flex;justify-content: center;">
                 
<div class="menu" onclick="this.classList.toggle('open')">
  <div @click="addToCart(item.id,item.title,item.pivot)" class="button" title="add to cart"></div>
  <div @click="VisitStore(item.id,item.title)" class="button" title="visit this store"></div>
  
</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

.show-prod .store {
    width: 100%;
    direction: rtl;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
    background-color: var(--blue);
    border-radius: 10px;
    transition: all 0.5s;
}

.sort input[type='radio']:checked + label {
    background-color: var(--blue);
    border-radius: 10px;
    width: 100%;
    height: 100%;
    color: #fff;
}

h2 {
    font-size: 2vw;
    margin-top: 25px;
}
span {
    font-size: 1.8vw;
}
.store-logo {
    width: 100px;
    height: 100px;
}
.row {
    justify-content: center;
    margin: 0;
}
.sort {
    border: 1px solid azure;
    border-radius: 10px;
    padding: 0;
}

.store {
    margin: 20px 0;
}
.store .row .col-7,
.col-2,
.col-1 {
    margin: auto;
}
.product-img {
    width: 200px;
    height: 180px;
    border-radius: 5%;
}
.fa-check-circle {
    color: #48d748;
    margin: 10px 10px;
}
.prod-name,
.prod-dis {
    margin: 20px 0;
    font-size: 1.5em;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    h2 {
        font-size: 4vw;
        margin-top: 3vh;
    }
    span {
        font-size: 4vw;
    }
    .fa-check-circle {
        margin: 10px 22px;
    }
    .store-logo {
        width: 50px;
        height: 50px;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-prod h2 {
        font-size: 18px;
        margin: 10px;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .show-prod h2 {
        font-size: 20px;
        margin: 22px;
    }
}
</style>
<style lang="scss" scoped>
.menu {
    position: relative;
    width: 60px;
    height: 60px;
  padding: 30px;
  background: #bfbfd7;
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px rgba(255, 255, 255, 1), inset 0px 0px 4px rgba(255, 255, 255, 0.2), inset 7px 7px 15px rgba(55, 84, 170, 0), inset -7px -7px 20px rgba(255, 255, 255, 0), 0px 0px 4px rgba(255, 255, 255, 0);
  &::before, &::after {
    content: "";
    background: #faf9ff;
    border-radius: 5px;
    width: 30px;
    height: 5px;
    position: absolute;
    left: 16px;
    top: 27px;
    transition: 0.2s ease;
    z-index: 1;
  }
  &::before {
    transform: rotate(0deg);
  }
  &::after {
    transform: rotate(-90deg);
  }
  &.open {
    opacity: .9;
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
    .button {
      opacity: 1;
      pointer-events: auto;
      &:first-of-type {
        bottom: 40px;
        right: 70px;
        background: url("../../../public/img/shoca.png") no-repeat 50%/50% #f3f3fd;
      }

      &:last-of-type {
        bottom: 40px;
        right: -70px;
        background: url("../../../public/img/visit.png") no-repeat 50% 45%/50% 45% #e8e8f3;
        transition-delay: .1s;
      }
    }
  }
}

.button {
  padding: 30px;
  border-radius: 50%;
  cursor: pointer;
  background: #e8e8f3;
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0;
  pointer-events: none;
  box-shadow: inherit;
  transition: 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28), 0.2s ease opacity, 0.2s cubic-bezier(.08,.82,.17,1) transform;
  &:hover {
    transform: scale(1.1);
  }
}
</style> 
<script>
import { defineAsyncComponent } from 'vue';
import axios from 'axios';
export default {
    data() {
        return {
            sortType: '1',
             ProductID: {},
             stores: {},
           
        };
    },
    components: {        
        Cartmini: defineAsyncComponent(() =>
            import(`@/components/cart/Cartmini.vue`)
        ),},

    props: ['id', 'name', 'short_des', 'long_des', 'price'],
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
    },
    methods: {
    VisitStore: function (i,t) {
            this.$router.push(`/visitStore/${i}/${t}`);
        },
                addToCart(i,t,s) {
            this.$store.dispatch('addToCart', {
                id: this.$route.params.id,
                id_store: i,
                title: t,
                name: this.ProductID.name,
                image: this.ProductID.image,
                short_des: this.ProductID.short_des,
                long_des: this.ProductID.long_des,
                store_product: s
               
             }, this.id);
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
    },
};
</script>
