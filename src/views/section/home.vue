
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
            <div class="mar">
                <div
                    class="show-market"
                    v-for="bran in brands.slice(2, 7)"
                    :key="bran.id"
                >
                    <img
                        data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        :src="bran.image"
                    />
                </div>
            </div>
            <!-- <div class="slider1">
                <div class="slide-track">
                    <div class="slide1" v-for="brand in Brands" :key="brand.id">
                        <img
                            src="../../../public/img/IMG_1.png"
                            :alt="brand.name"
                        />
                    </div>
                </div>
            </div> -->
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
                    <div
                        class="col-lg-3 col-md-6 col-sm-6"
                        v-for="prod in Product.slice(0, 4)"
                        :key="prod.id"
                        :id="prod.id"
                        :name="prod.name"
                        :short_des="prod.short_des"
                    >
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="" class="image">
                                    <img
                                        class="pic-1"
                                        src="../../../public/img/pro1.png"
                                        alt=""
                                    />
                                    <img
                                        class="pic-2"
                                        src="../../../public/img/pro1-1.png"
                                        alt=""
                                    />
                                    <!--  -->
                                </a>
                                <ul class="social">
                                    <li>
                                        <i
                                            class="fa fa-search popup-btn"
                                            @click="showDetails = true"
                                            v-bind="`${id}`"
                                        ></i>
                                    </li>
                                    <li>
                                        <i
                                            class="fa fa-heart heart"
                                            @click="heartlike()"
                                            ref="heart"
                                        ></i>
                                    </li>
                                    <li><i class="fa fa-shopping-cart"></i></li>
                                    <li>
                                        <i
                                            class="fa fa-link"
                                            @click="chooseDetails = true"
                                        ></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title">{{ prod.name }}</h3>
                                <p>
                                    {{ prod.short_des }}
                                </p>
                                <ul class="rating">
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                    <li class="fa fa-star"></li>
                                </ul>
                                <!-- <div class="avilble">
                    <div>متوفر في {{ avalibleStore }} متاجر</div>
                    <span class="fa fa-check-circle"></span>
                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="popup-view"
                    v-if="showDetails"
                    data-aos="flip-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                >
                    <div class="popup-card">
                        <button style="border: none">
                            <i
                                class="fa fa-times close-btn"
                                @click="showDetails = false"
                            ></i>
                        </button>
                        <div class="product-img">
                            <img src="../../../public/img/pro1.png" alt="" />
                        </div>
                        <div class="info">
                            <h2>{{ id }}</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nihil, ipsam voluptate? Autem
                                necessitatibus enim reprehenderit excepturi
                                voluptates praesentium nisi quidem dolore ipsa
                                et. Ab tempore quam placeat minus voluptatem
                                inventore.
                            </p>
                            <span class="price">120.00 s.p</span>
                            <a class="add-cart-btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <!-- choose -->
                <div
                    class="popup-view1"
                    v-if="chooseDetails"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                >
                    <div class="popup-card">
                        <button style="border: none">
                            <i
                                class="fa fa-times close-btn"
                                @click="chooseDetails = false"
                            ></i>
                        </button>
                        <section>
                            <!--for demo wrap-->
                            <h1>Compare Product</h1>
                            <div class="choose">
                                <div class="sort col-3">
                                    <label for="radio1"
                                        >من الأرخص الى الأغلى</label
                                    >
                                    <input
                                        id="radio1"
                                        name="radios"
                                        value="price"
                                        type="radio"
                                        v-model="sortType"
                                        v-on:change="sortItem()"
                                    />
                                </div>
                                <div class="sort col-3">
                                    <label for="radio2"
                                        >من الأغلى الى الأرخص</label
                                    >
                                    <input
                                        id="radio2"
                                        name="radios"
                                        value="prices"
                                        type="radio"
                                        v-model="sortType"
                                        v-on:change="sortItem()"
                                    />
                                </div>
                                <div class="sort col-3">
                                    <label for="radio3"
                                        >من الأقرب الى الأبعد</label
                                    >
                                    <input
                                        type="radio"
                                        id="radio3"
                                        name="radios"
                                        value="space"
                                        v-model="sortType"
                                        v-on:change="sortItem()"
                                    />
                                </div>
                                <div class="sort col-3">
                                    <label for="radio4"
                                        >من الأبعد الى الأقرب</label
                                    >
                                    <input
                                        type="radio"
                                        id="radio4"
                                        name="radios"
                                        value="spaces"
                                        v-model="sortType"
                                        v-on:change="sortItem()"
                                    />
                                </div>
                            </div>
                            <div class="card viewProduct">
                                <div class="row no-gutters">
                                    <div class="col-md-4 image">
                                        <img
                                            src="../../../public/img/pro1.png"
                                            class="card-img"
                                            alt="..."
                                        />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Card title
                                            </h5>
                                            <p class="card-text">
                                                This is a wider card with
                                                supporting text below as a
                                                natural lead-in to additional
                                                content. This content is a
                                                little bit longer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- table -->
                            <div class="tbl-header">
                                <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                >
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Store Name</th>
                                            <th>Price</th>
                                            <th>Delivery</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div class="tbl-content">
                                <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                >
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img
                                                    src="../../../public/img/pro1.png"
                                                    alt=""
                                                />
                                            </td>
                                            <td>AUSTRALIAN COMPANY</td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    src="../../../public/img/pro1.png"
                                                    alt=""
                                                />
                                            </td>
                                            <td>AUSTRALIAN COMPANY</td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    src="../../../public/img/pro1.png"
                                                    alt=""
                                                />
                                            </td>
                                            <td>AUSTRALIAN COMPANY</td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    src="../../../public/img/pro1.png"
                                                    alt=""
                                                />
                                            </td>
                                            <td>AUSTRALIAN COMPANY</td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
                <!--  -->
            </div>
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
        return {
            showDetails: false,
            chooseDetails: false,
            details: {
                prodId: this.id,
                //     name: this.name,
                //     short_des: this.short_des,
                //     long_des: this.long_des,
            },
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
        gotoListView: function (i) {
            this.$router.push(`/ListView/${i}`);
        },
        gotoprodetails: function (i) {
            this.$router.push(`/${i}`);
        },
    },
    computed: {
        ...mapState([
            'Categories',
            'Brands',
            'brands',
            'Sections',
            'Product',
            'ProductID',
        ]),
    },
    mounted() {
        this.$store.dispatch('loadSections');
        this.$store.dispatch('loadBrands');
        this.$store.dispatch('loadCategories');
        this.$store.dispatch('loadProducts');
        this.$store.dispatch('loadProduct');
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
    padding: 5px 10px;
    display: block;
    min-height: 150px;
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
/* choose */
.products .container .popup-view1 {
    z-index: 2;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 20px;
    background-color: #4a6f81;
    justify-content: center;
    align-items: center;
}
.products .container .popup-view1 .popup-card {
    position: relative;
}
/* compare */
.products .container .popup-view1 .choose {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
}
.products .container .popup-view1 .choose label {
    font-size: 15px;
    color: #fff;
}
.products .container .popup-view1 .popup-card .close-btn {
    font-size: 20px;
    cursor: pointer;
    color: #4a6f81;
    z-index: 3;
    font-size: 20px;
    padding: 10px;
}
.products .container .popup-view1 .popup-card .viewProduct {
    margin: auto;
    margin-bottom: 15px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    max-width: 450px;
}
.products .container .popup-view1 .popup-card .viewProduct .image img {
    border-radius: 50%;
    width: 50%;
    justify-content: center;
    align-items: center;
}
.products .container .popup-view1 .popup-card .viewProduct h5 {
    font-size: 20px;
    font-weight: 600;
}
.products .container .popup-view1 .popup-card .viewProduct p {
    font-size: 15px;
}
.products .container .popup-view1 h1 {
    font-size: 30px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin-bottom: 15px;
}
.products .container .popup-view1 table {
    width: 100%;
    table-layout: fixed;
}
.products .container .popup-view1 .tbl-header {
    background-color: #fff;
}
.products .container .popup-view1 .tbl-content {
    height: 200px;
    overflow-x: auto;
    margin-top: 0px;
    border: 1px solid rgba(255, 255, 255, 0.3);
}
.products .container .popup-view1 .tbl-content table tbody tr td img {
    border-radius: 50%;
    width: 20%;
    justify-content: center;
    align-items: center;
}
.products .container .popup-view1 th {
    padding: 15px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: #4a6f81;
    text-transform: uppercase;
}
.products .container .popup-view1 td {
    padding: 10px;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-size: 12px;
    color: #fff;
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
.products .container .popup-view1 section {
    margin: 20px;
}
/* for custom scrollbar for webkit browser*/
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #4a6f81;
}
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px #fff;
}
/* show */
.products .container .popup-view {
    z-index: 2;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.products .container .popup-view .popup-card {
    position: relative;
    display: flex;
    width: 800px;
    height: 500px;
    margin: 20px;
}
.products .container .popup-view .popup-card .product-img {
    z-index: 2;
    /* background: #4a6f81; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 90%;
    transform: translateY(25px);
    /* border-bottom-left-radius: 10px; */
}
.products .container .popup-view .popup-card .product-img img {
    z-index: 2;
    position: relative;
    width: 450px;
    left: -45px;
}
.products .container .popup-view .popup-card .info {
    z-index: 2;
    background: #4a6f81;
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 100%;
    box-sizing: border-box;
    padding: 40px;
    border-radius: 10px;
}
.products .container .popup-view .popup-card .close-btn {
    color: #555;
    z-index: 3;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 20px;
    margin: 10px;
    cursor: pointer;
}
.products .container .popup-view .popup-card .info h2 {
    font-size: 40px;
    line-height: 20px;
    margin: 10px;
}
.products .container .popup-view .popup-card .info p {
    font-size: 15px;
    margin: 10px;
}
.products .container .popup-view .popup-card .info .price {
    font-size: 45px;
    font-weight: 300;
    margin: 10px;
}
.products .container .popup-view .popup-card .info .add-cart-btn {
    color: #4a6f81;
    background: #fff;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    margin: 10px auto;
    cursor: pointer;
    padding: 10px 50px;
}
@media (max-width: 900px) {
    .products .container .popup-view .popup-card {
        flex-direction: column;
        width: 550px;
        height: auto;
    }
    .products .container .popup-view .popup-card .product-img {
        z-index: 3;
        width: 100%;
        height: 400px;
        transform: translateY(0);
        border-bottom-left-radius: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .products .container .popup-view .popup-card .product-img img {
        left: initial;
        max-width: 100%;
        max-height: 80%;
        bottom: -50px;
        /* height: 100%; */
        /* height: 50%; */
        /* width: 80%; */
    }
    .products .container .popup-view .popup-card .info {
        width: 100%;
        height: auto;
        min-height: 250px;
        /* padding: 20px; */
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .products .container .popup-view .popup-card .info h2 {
        margin: 20px 5px 5px 5px;
        font-size: 25px;
    }
    .products .container .popup-view .popup-card .info p {
        margin: 5px;
        font-size: 13px;
    }
    .products .container .popup-view .popup-card .info .price {
        margin: 5px;
        font-size: 30px;
    }
    .products .container .popup-view .popup-card .info .add-cart-btn {
        margin: 5px auto;
        padding: 5px 40px;
        font-size: 14px;
    }
    .products .container .popup-view .popup-card .close-btn {
        z-index: 6;
        margin-top: 100px;
        margin-right: 60px;
    }
}
/* show market */
.mar {
    display: flex;
    justify-content: space-around;
    margin-top: 24px;
}
.show-market {
    box-shadow: 0 4px 8px 0 #fefefe;
    width: 100%;
    height: 250px;
    width: calc(96% / 5);
}
.show-market img {
    height: 230px;
    transition: all 0.5s;
    width: 100%;
    height: 100%;
}
.show-market img:hover {
    transform: scale3d(1.05, 1.05, 1);
    cursor: pointer;
}
@media (max-width: 576.98px) {
    .mar {
        margin-top: 47vh;
        margin-bottom: 4vh;
    }
}
@media (max-width: 500.98px) {
    .mar {
        margin-top: 35vh;
        margin-bottom: 4vh;
    }
}
@media (max-width: 435.98px) {
    .mar {
        margin-top: 5vh;
        margin-bottom: 4vh;
    }
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-market {
        height: 130px;
        width: calc(96% / 3);
        margin-top: 0;
    }
    .mar .show-market:nth-child(2),
    .mar .show-market:nth-child(3) {
        display: none;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .show-market {
        height: 180px;
        width: calc(96% / 5);
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-der .img img {
        height: 200px;
        width: 550px;
        margin-top: 40px;
        margin-bottom: 100px;
        text-align: center;
    }
    .show-market {
        height: 200px;
        width: calc(96% / 5);
    }
}
</style>

 