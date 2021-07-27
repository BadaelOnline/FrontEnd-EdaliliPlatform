<template>
    <div class="col-lg-3 col-md-6 col-sm-6">
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
                            class="fa fa-random"
                            @click="chooseDetails = true"
                        ></i>
                    </li>
                </ul>
            </div>
            <div class="product-content">
                <h3 class="title">{{ name }}</h3>
                <p>
                    {{ short_des }}
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
        <!-- popupview -->
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
                <!-- <button style="border: none"> -->
                <i
                    class="fa fa-times close-btn"
                    @click="showDetails = false"
                ></i>
                <!-- </button> -->
                <div class="product-img">
                    <img src="../../../public/img/pro1.png" alt="" />
                </div>
                <div class="info">
                    <h2>{{ name }}</h2>
                    <p>
                        {{ long_des }}
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
                <button>
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
                            <label for="radio1">من الأرخص الى الأغلى</label>
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
                            <label for="radio2">من الأغلى الى الأرخص</label>
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
                            <label for="radio3">من الأقرب الى الأبعد</label>
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
                            <label for="radio4">من الأبعد الى الأقرب</label>
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
                                    <h5 class="card-title">{{ name }}</h5>
                                    <p class="card-text">
                                        {{ short_des }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- table -->
                    <div class="tbl-header">
                        <table cellpadding="0" cellspacing="0" border="0">
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
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                                <tr v-for="item in store" :key="item.id">
                                    <td>
                                        <img
                                            src="../../../public/img/pro1.png"
                                            alt=""
                                        />
                                    </td>
                                    <td>{{ item.title }}</td>
                                    <td>{{ item.pivot.price }} ل.س</td>
                                    <td>
                                        <img
                                            class="icon-delivery"
                                            src="../../../public/img/icon-delivery.png"
                                            height="40"
                                        />
                                        <span class="fa fa-check-circle"></span>
                                    </td>
                                    <td>
                                        <router-link
                                            :to="`/visitStore/${item.id}/${item.title}`"
                                        >
                                            <button class="visit">
                                                {{ $t('visit') }}
                                            </button>
                                        </router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
export default {
    name: 'productBody',
    props: ['id', 'name', 'image', 'short_des', 'long_des', 'store'],
    data() {
        return {
            showDetails: false,
            chooseDetails: false,
            details: {
                id: this.id,
                name: this.name,
                short_des: this.short_des,
                long_des: this.long_des,
                price: this.price,
            },
            sortType: '1',
            ProductID: {},
        };
    },
    // async created() {
    //     await axios
    //         .get(`/api/products/getById/${this.id}`)
    //         .then((res) => {
    //             console.warn('ProductID :', res.data.product);
    //             this.ProductID = res.data.product;
    //         })
    //         .catch(function (error) {
    //             console.log('Error: ', error);
    //         });
    // },
    methods: {
        // sortItem() {
        //     if (this.sortType == 'space') {
        //         this.ProductID.store = this.store.sort(
        //             (prev, curr) => prev.space - curr.space
        //         );
        //     } else if (this.sortType == 'spaces') {
        //         this.ProductID.store = this.ProductID.store.sort(
        //             (prev, curr) => curr.space - prev.space
        //         );
        //     } else if (this.sortType == 'price') {
        //         this.ProductID.store = this.ProductID.store.sort(
        //             (prev, curr) => prev.pivot.price - curr.pivot.price
        //         );
        //     } else if (this.sortType == 'prices') {
        //         this.ProductID.store = this.ProductID.store.sort(
        //             (prev, curr) => curr.pivot.price - prev.pivot.price
        //         );
        //     }
        // },
    },
};
</script>

<style scoped>
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
    margin: 10px 0;
    justify-content: center;
    align-items: center;
}
.products .container .popup-view1 .popup-card .viewProduct h5 {
    font-size: 20px;
    color: #4a6f81;
    font-weight: 600;
}
.products .container .popup-view1 .popup-card .viewProduct p {
    font-size: 15px;
    color: #4a6f81;
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
.products .container .popup-view1 .visit {
    color: #4a6f81;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
    border: solid #fff;
}
.products .container .popup-view1 .visit:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
.products .container .popup-view1 button {
    border: none;
    transition: all 0.5s;
    cursor: pointer;
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
.products .container .popup-view .popup-card button {
    border: none;
}
.products .container .popup-view .popup-card .product-img {
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 90%;
    transform: translateY(25px);
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
    letter-spacing: 2px;
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
    }
    .products .container .popup-view .popup-card .info {
        width: 100%;
        height: auto;
        min-height: 250px;
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
</style>
