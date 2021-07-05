<template>
    <div style="background-color: #e9ecf2"
   >
        <div class="show_prod">
            <div class="row">
                <div
                    class="col-xs-12"
                    style="direction: rtl"
                 
                >
                    <div class="content-pro text-center">
                        <img
                         
                            :src="ProductID.image"
                            style="
                                width: 250px;
                                height: 250px;
                                border-radius: 10px;
                            "
                        />
                        <div>
                            {{ ProductID.name }}
                        </div>
                        <div>
                            {{ ProductID.long_des }}
                        </div>
                        <div class="avilble">
                            <div style="display: inline-block">
                                متوفر في
                             {{ stores.length}}  متاجر
                            </div>
                            <span class="fa fa-check-circle"></span>
                        </div>
                        <div >
                      
                            <span>
                                 {{ minPrice }} ل.س 
                                <span style="color: #ca0a0a">حتى</span>
                            </span>
                          <span> {{ maxPrice }} ل.س</span> 
                            <div
                                class="price"
                                style="display: inline-block"
                            ></div>
                        </div>
                        <div class="heart-conten">
                            <div
                                @click="heartlike()"
                                id="heart"
                                class="heart"
                            ></div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <button
                                    @click="gotoListView(ProductID.id)"
                                    class="but1"
                                >
                                    <span>
                                        {{ $t('Choose') }}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.row {
    justify-content: center;
    margin: 0;
}
.show_prod .col-4 {
    max-width: 21%;
}
.show_prod h2 {
    display: inline-block;
    margin: 0 20px 0 100px;
}
.col-4 img {
    height: 100px;
    width: 101px;
    margin: 10px;
}
/* product style */
.content-pro {
    font-size: 18px;
    margin-top: 10vh;
}
.content-pro div {
    margin-top: 3vh;
    margin-bottom: 3vh;
}
.content-pro .stars {
    margin-top: 20px;
}
.content-pro .avilble {
    color: #19e653;
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
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show_prod .col-12 img {
        width: 220px;
    }
    .show_prod .col-4 {
        padding: 0;
        max-width: 24%;
    }
    .show_prod .col-4 img {
        height: 55px;
        width: 55px;
    }
    .show_prod h2 {
        display: inline-block;
        margin: 22px;
        font-size: 20px;
        font-weight: bold;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show_prod h2 {
        font-size: 18px;
        margin: 10px;
    }
    .show_prod .col-12 img {
        width: 300px;
    }
    .show_prod .col-4 {
        padding: 0;
        max-width: 30%;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .show_prod h2 {
        font-size: 20px;
        margin: 22px;
    }
    .show_prod .col-4 {
        padding: 0;
        max-width: 30%;
    }
}
.carousel-control-next,
.carousel-control-prev {
    height: 50px;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
    border: 1px solid #fff;
    border-radius: 50%;
    width: 37px;
    height: 60px;
    background-color: #9b8282;
    top: 100px;
    position: absolute;
}
</style>
<style lang="scss" scoped>
.heart-conten {
    background-color: #f0f0f0;
    border-radius: 20%;
    width: 50px;
    height: 50px;
    margin: 10px auto;
}
.content-pro .heart-conten:hover {
    background-color: #d3b85f;
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
import axios from "axios";
export default {
    name: 'ProductDetails',
     data() {
        return {

             ProductID: {},
             stores: []
        };
    },
    components: {},
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
            this.$router.push(`/ListView/${i}`);
        }

    }
};
</script>
