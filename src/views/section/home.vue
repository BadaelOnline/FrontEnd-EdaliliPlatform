<template>
    <div>
        <div class="home">
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
                Our <span>Section</span>
            </h2>
            <div
                data-aos="fade-up-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                class="team-area"
            >
                <div
                    class="single-team"
                    v-for="section in Sections"
                    :key="section.id"
                >
                    <img src="../../../public/img/buty.jpg" />
                    <div class="team-text">
                        <h2>{{ section.name }}</h2>
                        <a>See More</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Brands -->
        <div class="brands">
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
                Our <span>Brands</span>
            </h2>
            <div class="slider">
                <div class="slide-track">
                    <div class="slide" v-for="brand in Brands" :key="brand.id">
                        <img
                            src="../../../public/img/IMG_1.png"
                            :alt="brand.name"
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- products -->
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
            <div
                class="container"
                data-aos="fade-up-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
            >
                <div
                    class="product-grid"
                    v-for="product in Product"
                    :key="product.id"
                >
                    <div class="product-image">
                        <img src="../../../public/img/buty.jpg" />
                        <ul class="social">
                            <li>
                                <i class="fa fa-eye"></i>
                            </li>
                            <li><i class="fa fa-heart"></i></li>
                        </ul>
                    </div>
                    <div class="product-content">
                        <h3 class="title">{{ product.name }}</h3>
                        <p>{{ product.short_des }}</p>
                        <div class="avilble">
                            <div style="display: inline-block">
                                متوفر في {{ product.avalibleStore }} متاجر
                            </div>
                            <span class="fa fa-check-circle"></span>
                        </div>
                        <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                        </ul>
                        <button>
                            {{ $t('Choose') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->

        <!--  -->
        <!--  -->
    </div>
    <div
        id="deno"
        class="carousel  w-100"
        data-ride="carousel"
        style="margin-top: 20%; margin-bottom: 20%"
    >
        <div class="col-sm-12" style="padding: 0">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="show-prod">
                        <div class="row">
                            <BodyProduct
                                v-for="items in Product.slice(0, 4)"
                                :key="items.id"
                                :id="items.id"
                                :image="items.image"
                                :short_des="items.short_des"
                                :name="items.name"
                            >
                            </BodyProduct>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="show-prod">
                        <div class="row">
                            <BodyProduct
                                v-for="items in Product.slice(4, 8)"
                                :key="items.id"
                                :id="items.id"
                                :image="items.image"
                                :short_des="items.short_des"
                                :name="items.name"
                            >
                            </BodyProduct>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="show-prod">
                        <div class="row">
                            <BodyProduct
                                v-for="items in Product.slice(0, 4)"
                                :key="items.id"
                                :id="items.id"
                                :image="items.image"
                                :short_des="items.short_des"
                                :name="items.name"
                            >
                            </BodyProduct>
                        </div>
                    </div>
                </div>
            </div>

            <a class="carousel-control-prev" href="#deno" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#deno" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
     
    </div>
 
</template>
<script>
import { mapState } from 'vuex';
import { defineAsyncComponent } from 'vue';
export default {
    name: 'home',
    props: ['image'],
    data() {
        return {};
    },
    components: {
        BodyProduct: defineAsyncComponent(() =>
            import(`@/components/global/BodyProduct.vue`)
        ),
        // Cartmini: defineAsyncComponent(() =>
        //     import(`@/components/cart/Cartmini.vue`)
        // ),
    },
    methods: {
        gotoListView: function (i) {
            this.$router.push(`/ListView/${i}`);
        },
        gotoprodetails: function (i) {
            this.$router.push(`/${i}`);
        },
    },
    computed: {
        ...mapState(['Categories', 'Brands', 'Sections', 'Product']),
    },
    mounted() {
        this.$store.dispatch('loadSections');
        this.$store.dispatch('loadBrands');
        this.$store.dispatch('loadCategories');
        this.$store.dispatch('loadProducts');
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
/* slider */
.heading {
    text-align: center;
    font-size: 2rem;
    padding: 0 0.5rem;
    color: #333;
}
.heading span {
    color: #ff80b3;
}
/* section */
.home {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    width: 100%;
}
.team-area {
    display: flex;
    flex-flow: wrap;
    margin: 24px;
    width: 100%;
    align-items: center;
    justify-content: center;
    /* justify-content: space-arosund; */
}
.single-team {
    width: 260px;
    height: 300px;
    margin: 24px;
    margin-top: 24px;
    align-items: center;
    justify-content: center;
    position: relative;
    display: flex;
    align-items: flex-end;
    transition: 0.6s ease-out;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
}
.single-team:hover {
    transform: translateY(15px);
}
.single-team:hover::before {
    opacity: 1;
}
.single-team:hover .team-text {
    opacity: 1;
    transform: translateY(0);
}
.single-team::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #000, transparent);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
}
.single-team img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
}
.single-team .team-text {
    position: relative;
    z-index: 3;
    color: #fff;
    opacity: 0;
    transform: translateY(60px);
    transition: 0.5s;
}
.team-text h2 {
    margin: 0;
    letter-spacing: 3px;
}
.team-text a {
    text-decoration: none;
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;
}
/* Brands */
.brands {
    margin: 24px;
    padding: 24px;
    min-height: 100%;
    display: grid;
    place-items: center;
}
.slider {
    height: 250px;
    margin: auto;
    position: relative;
    width: 90%;
    display: grid;
    place-items: center;
    overflow: hidden;
}
.slide-track {
    display: flex;
    width: (250px * 18);
    animation: scroll 40s linear infinite;
}
.slide-track:hover {
    animation-play-state: paused;
}
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-250px * 9));
    }
}
.slide {
    height: 200px;
    width: 250px;
    display: flex;
    align-items: center;
    padding: 15px;
    perspective: 100px;
}
.slide img {
    width: 100%;
    transition: transform 1s;
}
.slide img:hover {
    transform: translateZ(20px);
}
.slide::before,
.slider::after {
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
    );
    content: '';
    height: 100%;
    position: absolute;
    width: 15%;
    z-index: 2;
}
.slider::before {
    left: 0;
    top: 0;
}
.slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}
/* products */
.products {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #fafafa;
}
.container {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 24px;
    transition: 0.6s ease-out;
}
.product-grid {
    width: 260px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 10px 10px #adabab;
    transition: 0.5 all;
    margin: 24px;
    margin-top: 24px;
    position: relative;
    display: flex;
    align-items: flex-end;
}
.product-grid:hover {
    cursor: pointer;
    box-shadow: 14px 11px 0 #e66465;
}
.product-grid .product-image {
    position: relative;
    overflow: hidden;
    transition: 0.5 all;
}
.product-grid .product-image img {
    width: 100%;
    height: 100%;
    transition: all 0.5s;
}
.product-grid .product-image .social {
    padding: 0;
    margin: 0;
    list-style-type: none;
    position: absolute;
    bottom: 10px;
    right: 0;
}
.product-grid .product-image .social li {
    margin: 0 01 10px;
    cursor: pointer;
    transform: translateX(100px);
    transition: all 0.5s;
}
.product-grid:hover .product-image .social li {
    transform: translateX(0);
}
.product-grid .product-image .social li i {
    color: #666;
    background-color: #fff;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    width: 40px;
    display: block;
    transition: all 0.5s;
}
.product-grid .product-image .social li i:hover {
    color: #fff;
    background-color: #e66465;
}
.product-grid .product-content {
    padding: 20px 10px;
}
.product-grid .product-content .title {
    font-size: 15px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 7px;
    letter-spacing: 1px;
    transition: all 0.5s;
}
.product-grid .product-content p {
    font-size: 10px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 7px;
    letter-spacing: 1px;
    transition: all 0.5s;
}
.product-grid .product-content .title:hover {
    color: #03aae8;
}
.product-grid .price {
    color: #03aae8;
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 6px;
}
.product-grid .product-content button {
    width: 100px;
    height: 50px;
    font-size: 1.5vw;
    border: none;
    color: #5daaa6;
    margin: auto;
    border-radius: 10px;
}
.product-grid .product-content button:hover {
    background-color: #d3b85f;
}
.product-grid .rating {
    margin: 0;
    padding: 0;
    list-style: none;
}
.product-grid .rating li {
    color: #ffd200;
    font-size: 14px;
    display: inline-block;
}
.avilble {
    color: #19e653;
}
</style>
<style lang="scss" scoped>
.heart-conten {
    background-color: #f0f0f0;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 10px auto;
}
.product-grid .product-content .heart-conten:hover {
    background-color: #d3b85f;
}
.heart {
    width: 80px;
    height: 100px;
    background: url('../../../public/img/heart.png') no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
    margin: -22px 0px 0 -25px;

    &.is-active {
        transition-duration: 1s;
        background-position: -2800px 0;
    }
}
@media (max-width: 576.98px) {
    .heart-conten {
        margin: 10px 0;
    }
}
</style>
