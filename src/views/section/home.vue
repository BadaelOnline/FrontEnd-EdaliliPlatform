<template>
    <div>
        <Cartmini />
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
                        <a class="more">See More</a>
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
            <div class="slider1">
                <div class="slide-track">
                    <div class="slide1" v-for="brand in Brands" :key="brand.id">
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
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="" class="image">
                                    <img
                                        class="pic-1"
                                        src="../../../public/img/pro2.png"
                                        alt=""
                                    />
                                    <img
                                        class="pic-2"
                                        src="../../../public/img/pro2-2.png"
                                        alt=""
                                    />
                                </a>
                                <ul class="social">
                                    <li><i class="fa fa-search"></i></li>
                                    <li><i class="fa fa-heart"></i></li>
                                    <li><i class="fa fa-shopping-cart"></i></li>
                                    <li><i class="fa fa-link"></i></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title">شامبو</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Magni dicta, aperiam
                                </p>
                                <ul class="rating">
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="" class="image">
                                    <img
                                        class="pic-1"
                                        src="../../../public/img/pro2.png"
                                        alt=""
                                    />
                                    <img
                                        class="pic-2"
                                        src="../../../public/img/pro2-2.png"
                                        alt=""
                                    />
                                </a>
                                <ul class="social">
                                    <li><i class="fa fa-search"></i></li>
                                    <li><i class="fa fa-heart"></i></li>
                                    <li><i class="fa fa-shopping-cart"></i></li>
                                    <li><i class="fa fa-link"></i></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title">شامبو</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Magni dicta, aperiam
                                </p>
                                <ul class="rating">
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="" class="image">
                                    <img
                                        class="pic-1"
                                        src="../../../public/img/pro2.png"
                                        alt=""
                                    />
                                    <img
                                        class="pic-2"
                                        src="../../../public/img/pro2-2.png"
                                        alt=""
                                    />
                                </a>
                                <ul class="social">
                                    <li><i class="fa fa-search"></i></li>
                                    <li><i class="fa fa-heart"></i></li>
                                    <li><i class="fa fa-shopping-cart"></i></li>
                                    <li><i class="fa fa-link"></i></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title">شامبو</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Magni dicta, aperiam
                                </p>
                                <ul class="rating">
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="" class="image">
                                    <img
                                        class="pic-1"
                                        src="../../../public/img/pro2.png"
                                        alt=""
                                    />
                                    <img
                                        class="pic-2"
                                        src="../../../public/img/pro2-2.png"
                                        alt=""
                                    />
                                </a>
                                <ul class="social">
                                    <li><i class="fa fa-search"></i></li>
                                    <li><i class="fa fa-heart"></i></li>
                                    <li><i class="fa fa-shopping-cart"></i></li>
                                    <li><i class="fa fa-link"></i></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title">شامبو</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Magni dicta, aperiam
                                </p>
                                <ul class="rating">
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="" class="image">
                                    <img
                                        class="pic-1"
                                        src="../../../public/img/pro2.png"
                                        alt=""
                                    />
                                    <img
                                        class="pic-2"
                                        src="../../../public/img/pro2-2.png"
                                        alt=""
                                    />
                                </a>
                                <ul class="social">
                                    <li><i class="fa fa-search"></i></li>
                                    <li><i class="fa fa-heart"></i></li>
                                    <li><i class="fa fa-shopping-cart"></i></li>
                                    <li><i class="fa fa-link"></i></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title">شامبو</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Magni dicta, aperiam
                                </p>
                                <ul class="rating">
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="" class="image">
                                    <img
                                        class="pic-1"
                                        src="../../../public/img/pro2.png"
                                        alt=""
                                    />
                                    <img
                                        class="pic-2"
                                        src="../../../public/img/pro2-2.png"
                                        alt=""
                                    />
                                </a>
                                <ul class="social">
                                    <li><i class="fa fa-search"></i></li>
                                    <li><i class="fa fa-heart"></i></li>
                                    <li><i class="fa fa-shopping-cart"></i></li>
                                    <li><i class="fa fa-link"></i></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title">شامبو</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Magni dicta, aperiam
                                </p>
                                <ul class="rating">
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                </div>
            </div>
            <!-- <div class="show-prod">
                <div class="row">
                    <BodyProduct
                        v-for="items in Product"
                        :key="items.id"
                        :id="items.id"
                        :image="items.image"
                        :short_des="items.short_des"
                        :name="items.name"
                    >
                    </BodyProduct>
                </div>
            </div> -->
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
        // BodyProduct: defineAsyncComponent(() =>
        //     import(`@/components/global/BodyProduct.vue`)
        // ),
        Cartmini: defineAsyncComponent(() =>
            import(`@/components/cart/Cartmini.vue`)
        ),
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
    color: #315a6e;
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
.team-text .more {
    text-decoration: none;
    letter-spacing: 1px;
    cursor: pointer;
    font-size: 15px;
    margin-top: 8px;
}
.more:hover {
    text-decoration: underline;
}
/* Brands */
.brands {
    margin: 24px;
    padding: 24px;
    min-height: 100%;
    display: grid;
    place-items: center;
}
.slider1 {
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
.slide1 {
    height: 200px;
    width: 250px;
    display: flex;
    align-items: center;
    padding: 15px;
    perspective: 100px;
}
.slide1 img {
    width: 100%;
    transition: transform 1s;
}
.slide1 img:hover {
    transform: translateZ(20px);
}
.slide1::before,
.slider1::after {
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
.slider1::before {
    left: 0;
    top: 0;
}
.slider1::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}
/* product */
.row {
    display: flex;
    flex-flow: wrap;
    margin: 24px;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.show-prod {
    margin: 24px;
    align-items: center;
    justify-content: center;
    position: relative;
    display: flex;
    align-items: flex-end;
    transition: 0.6s ease-out;
}
@media (max-width: 575.98px) {
    .show-prod {
        height: auto;
    }
}

/*  */
/* products */
.products .container {
    align-items: center;
    justify-content: center;
    margin: auto;
}
.products .container .product-grid {
    margin: 24px;
    margin-top: 24px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 #fff;
    transition: 0.6s ease-out;
}
.products .container .product-grid:hover {
    box-shadow: 14px 11px 0 #4a6f81;
}
.products .container .product-grid .product-image {
    position: relative;
    overflow: hidden;
    transition: 0.5s all;
}
.products .container .product-grid .product-image .image {
    display: block;
}
.products .container .product-grid .product-image img {
    width: 100%;
    height: 50%;
}
.products .container .product-grid .product-image .pic-2 {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    transition: 0.5s all;
}
.products .container .product-grid .product-image .pic-1 {
    opacity: 1;
    transition: 0.5s all;
}
.products .container .product-grid:hover .product-image .pic-1 {
    opacity: 0;
}
.products .container .product-grid:hover .product-image .pic-2 {
    opacity: 1;
}
.products .container .product-grid .product-image .social {
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    bottom: 10px;
    right: 0;
}
.products .container .product-grid .product-image .social li {
    margin: 0 0 5px;
    transform: translateX(100px);
    transition: 0.5s all;
}
.products .container .product-grid:hover .product-image .social li {
    transform: translateX(0);
}
.products .container .product-grid .product-image .social li i {
    color: #666;
    background-color: #fff;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    width: 40px;
    display: block;
    transition: 0.5s all;
}
.products .container .product-grid .product-image .social li i:hover {
    color: #fff;
    background-color: #4a6f81;
}
.products .container .product-grid .product-content {
    padding: 20px 10px;
    display: block;
}
.products .container .product-grid .product-content .title {
    font-size: 15px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin: 0 0 7px;
}
.products .container .product-grid .product-content .title:hover {
    color: #315a6e;
}
.products .container .product-grid .product-content p {
    font-size: 15px;
    margin: 0 0 7px;
}
.products .container .product-grid .product-content .rating li {
    color: #ffd200;
    font-size: 14px;
    display: inline-block;
}
</style>
