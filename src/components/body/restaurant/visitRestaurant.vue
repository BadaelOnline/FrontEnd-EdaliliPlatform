<template>
    <div class="parent">
        <div class="body">
            <div class="outer-border">
                <div class="mid-border">
                    <div class="inner-border">
                        <img
                            class="corner-decoration corner-left-top"
                            src="../../../../public/img/corner-decoration.jpg"
                        />
                        <img
                            class="corner-decoration corner-right-top"
                            src="../../../../public/img/corner-decoration.jpg"
                        />
                        <img
                            class="corner-decoration corner-right-bottom"
                            src="../../../../public/img/corner-decoration.jpg"
                        />
                        <img
                            class="corner-decoration corner-left-bottom"
                            src="../../../../public/img/corner-decoration.jpg"
                        />
                        <img
                            class="vertical-decoration top"
                            src="../../../../public/img/horizontally-centered-vertical-decoration.png"
                        />
                        <img
                            class="vertical-decoration bottom"
                            src="../../../../public/img/horizontally-centered-vertical-decoration.png"
                        />

                        <!-- Page Content -->
                        <div class="container" style="background: none">
                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <h1
                                        class="text-uppercase white-text countach"
                                    >
                                        {{ RestaurantID.title }}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cover_resturant">
            <img src="../../../../public/img/cover_resturant.jpg" />

            <div class="example">Open</div>
            <div class="check_menu">Check Menu</div>
        </div>

        <carousel style="margin: 50px 0">
            <slide v-for="slide in 10" :key="slide">
                <div class="card 1">
                    <div class="card_image">
                        <img src="../../../../public/img/cheese_burger.jpg" />
                    </div>
                    <div class="card_title title-white">
                        <p>Foods</p>
                    </div>
                </div>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>

        <div class="contain_products">
            <!-- 1 -->
            <div class="container">
                <div class="product-details">
                    <h1>Chicken</h1>
                    <span class="hint-star star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </span>

                    <p class="information">
                        The most delicious and special foods in the restaurant..
                    </p>

                    <div class="control">
                        <button class="btn">
                            <span class="price">$50</span>
                            <span class="shopping-cart"
                                ><i
                                    class="fa fa-shopping-cart"
                                    aria-hidden="true"
                                ></i
                            ></span>
                            <span class="buy">Get Order</span>
                        </button>
                    </div>
                </div>

                <div class="product-image">
                    <img src="../../../../public/img/chicken.jpg" alt="" />

                    <div class="info">
                        <h2>Description</h2>
                        <ul>
                            <li><strong>Price : </strong> $50</li>
                            <li><strong>Weight : </strong>1000 gram</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 2 -->
            <div class="container">
                <div class="product-details">
                    <h1>Cheese Burger</h1>
                    <span class="hint-star star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </span>

                    <p class="information">
                        The most delicious and special foods in the restaurant..
                    </p>

                    <div class="control">
                        <button class="btn">
                            <span class="price">$25</span>
                            <span class="shopping-cart"
                                ><i
                                    class="fa fa-shopping-cart"
                                    aria-hidden="true"
                                ></i
                            ></span>
                            <span class="buy">Get Order</span>
                        </button>
                    </div>
                </div>

                <div class="product-image">
                    <img
                        src="../../../../public/img/cheese_burger.jpg"
                        alt=""
                    />

                    <div class="info">
                        <h2>Description</h2>
                        <ul>
                            <li><strong>Price : </strong> $25</li>
                            <li><strong>weight : </strong>200 gram</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    computed: {
        ...mapState(['RestaurantID']),
    },
    mounted() {
        this.$store.dispatch('loadRestaurant', this.$route.params.id);
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=MonteCarlo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa&display=swap');

/* 00000000000000000000 */
.body {
    height: 300px;
    background-color: #3c3d3f;
}
.countach {
    font-family: 'MonteCarlo', cursive, 'Aref Ruqaa', serif;
    font-weight: 400;
    font-style: normal;
    font-size: 4.5vw;
    letter-spacing: 4px;
    padding-top: 0.5em;
    color: #fff;
}

.inner-border {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.outer-border {
    border: 2px solid #de9b72;
    height: 99%;
    width: 98%;
    padding: 6px;
    margin: 0 auto;
}

.mid-border {
    border: 6px solid #de9b72;
    height: 100%;
    width: 100%;
    padding: 6px;
    margin: auto;
}

.inner-border {
    position: relative;
    border: 2px solid #de9b72;
    height: 100%;
    width: 100%;
    margin: auto;
}

/* Decorations */
.corner-decoration {
    position: absolute;
    width: 3em;
    margin: -3px;
}

@media (min-width: 768px) {
    .corner-decoration {
        width: 3.5em;
        margin: -4px;
    }
}

@media (min-width: 992px) {
    .corner-decoration {
        width: 4em;
        margin: -5px;
    }
}

@media (min-width: 1200px) {
    .corner-decoration {
        width: 5em;
        margin: -6px;
    }
}

.corner-decoration.corner-left-top {
    left: 0;
    top: 0;
}

.corner-decoration.corner-right-top {
    top: 0;
    right: 0;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}

.corner-decoration.corner-right-bottom {
    right: 0;
    bottom: 0;
    -webkit-transform: scale(-1);
    transform: scale(-1);
}

.corner-decoration.corner-left-bottom {
    left: 0;
    bottom: 0;
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
}

.vertical-decoration {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 11em;
}

@media (min-width: 768px) {
    .vertical-decoration {
        width: 16em;
    }
}

@media (min-width: 992px) {
    .vertical-decoration {
        width: 20em;
    }
}

@media (min-width: 1200px) {
    .vertical-decoration {
        width: 27em;
    }
}

.vertical-decoration.top {
    top: 0;
}

.vertical-decoration.bottom {
    bottom: 0;
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
}
/* 1111111111111111111 */
.parent {
    background-color: #e8e8e8;
}
.cover_resturant {
    position: relative;
    display: flex;
    justify-content: center;
    height: 55vw;
}
.cover_resturant .check_menu {
    position: absolute;
    color: #fff;
    bottom: 5%;
    font-size: 4vw;
    border: 2px solid;
    padding: 10px;
    font-family: 'MonteCarlo', cursive, 'Aref Ruqaa', serif;
}

.cover_resturant img {
    width: 100%;
    height: 100%;
}
.carousel .carousel__pagination {
    display: none;
}
.card {
    margin: 30px auto;
    width: 300px;
    height: 300px;
    border-radius: 40px;
    box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
        -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    transition: 0.4s;
}

.card .card_image {
    width: inherit;
    height: inherit;
    border-radius: 40px;
}

.card .card_image img {
    width: inherit;
    height: inherit;
    border-radius: 40px;
    object-fit: cover;
}

.card .card_title {
    text-align: center;
    border-radius: 0px 0px 40px 40px;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 30px;
    margin-top: -80px;
    height: 40px;
}

.card:hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
        -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.title-white {
    color: white;
}

.title-black {
    color: black;
}

@media all and (max-width: 500px) {
    .card-list {
        /* On small screens, we are no longer using row direction but column */
        flex-direction: column;
    }
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .carousel__slide {
        width: 100% !important;
    }
}
/* Small devices (landscape phones, 576px and up)   */
@media (min-width: 576px) and (max-width: 767.98px) {
    .carousel__slide {
        width: 50% !important;
    }
}
/*  Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) and (max-width: 991.98px) {
    .carousel__slide {
        width: 33.3333% !important;
    }
}
/*  Large devices (desktops, 992px and up)  */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .carousel__slide {
        width: 25% !important;
    }
}
/* Extra large devices (large desktops, 1200px and up)  */
@media (min-width: 1200px) {
    .carousel__slide {
        width: 25% !important;
    }
}
/* 22222222222222222222222222222222 */
@keyframes sway {
    0% {
        transform: rotate(0);
        animation-timing-function: ease-in-out;
    }
    10% {
        transform: rotate(-12deg);
        animation-timing-function: ease-in-out;
    }
    30% {
        transform: rotate(8deg);
        animation-timing-function: ease-in-out;
    }
    45% {
        transform: rotate(-4deg);
        animation-timing-function: ease-in-out;
    }
    60% {
        transform: rotate(2deg);
        animation-timing-function: ease-in-out;
    }
    70% {
        transform: rotate(-0.1deg);
        animation-timing-function: ease-in-out;
    }
    75% {
        transform: rotate(0.05deg);
        animation-timing-function: ease-in-out;
    }
    80% {
        transform: rotate(0);
        animation-timing-function: ease-in-out;
    }
    100% {
        transform: rotate(0);
    }
}

.example {
    font-weight: bold;
    position: absolute;
    border-radius: 3px;
    font-family: 'MonteCarlo', cursive, 'Aref Ruqaa', serif;
    line-height: 1;
    font-size: 4vw;
    padding: 6vh 3vw;
    margin: 64px 0;
    color: #575454;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff,
        0 0 82px #fff, 0 0 92px #fff, 0 0 102px #fff, 0 0 151px #fff;
    letter-spacing: 0.1em;
    display: inline-block;
    justify-content: center;
    background-repeat: no-repeat;
    animation: sway 5s linear infinite;
    transform-origin: 50% -32px;

    background: #d1a776
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==)
        center / 5000px 100px;
}
.example::before {
    display: flex;
    justify-content: center;
    content: '';
    height: 2px;
    width: 51%;
    position: absolute;
    top: -16px;
    left: 0;
    z-index: -1;
    transform: rotate(-15deg);
    background: linear-gradient(
        to right,
        transparent 0%,
        transparent 13%,
        #aaa954 15%,
        #827f7f 17%,
        #e8e5e5 100%
    );
}

.example::after {
    content: '';
    height: 2px;
    width: 51%;
    position: absolute;
    top: -16px;
    right: 0;
    z-index: -1;
    transform: rotate(15deg);
    background: linear-gradient(
        to left,
        transparent 0%,
        transparent 13%,
        #aaa954 15%,
        #827f7f 17%,
        #e8e5e5 100%
    );
}
/* 333333333333333333333333333333333333333 */
.contain_products {
    display: flex;
    justify-content: space-around;
    padding-bottom: 50px;
}
.contain_products .container {
    box-shadow: 0 15px 30px 1px grey;
    background: rgba(255, 255, 255, 0.9);
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
    height: 260px;
    width: 48%;
    padding: 0;
}

.product-details {
    position: relative;
    text-align: left;
    overflow: hidden;
    padding: 30px;
    height: 100%;
    float: left;
    width: 55%;
}

.container .product-details h1 {
    font-family: 'Bebas Neue', cursive;
    display: inline-block;
    position: relative;
    font-size: 30px;
    color: #344055;
    margin: 0;
}

.hint-star {
    display: inline-block;
    margin-left: 0.5em;
    color: gold;
    width: 100%;
}

.hint-star {
    display: inline-block;
    margin-left: 0.5em;
    color: gold;
    width: 100%;
}

.container .product-details > p {
    font-family: 'EB Garamond', serif;
    text-align: center;
    font-size: 18px;
    color: #7d7d7d;
}
.control {
    position: absolute;
    bottom: 5%;
    left: 22.8%;
}
.btn {
    transform: translateY(0px);
    transition: 0.3s linear;
    background: #809fff;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    outline: none;
    border: none;
    color: #eee;
    padding: 0;
    margin: 0;
}

.btn:hover {
    transform: translateY(-6px);
    background: var(--bl);
}

.btn span {
    font-family: 'Farsan', cursive;
    transition: transform 0.3s;
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.2em;
    margin: 0;
}
.btn .price,
.shopping-cart {
    background: var(--r);
    border: 0;
    margin: 0;
}

.btn .price {
    transform: translateX(-10%);
    padding-right: 15px;
}

.btn .shopping-cart {
    transform: translateX(-100%);
    position: absolute;
    background: var(--r);
    z-index: 1;
    left: 0;
    top: 0;
}

.btn .buy {
    z-index: 3;
    font-weight: bolder;
}

.btn:hover .price {
    transform: translateX(-110%);
}

.btn:hover .shopping-cart {
    transform: translateX(0%);
}

.product-image {
    transition: all 0.3s ease-out;
    display: inline-block;
    position: relative;
    overflow: hidden;
    height: 100%;
    float: right;
    width: 45%;
    display: inline-block;
}

.container img {
    width: 100%;
    height: 100%;
}

.info {
    background: rgba(27, 26, 26, 0.9);
    font-family: 'Bree Serif', serif;
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
    position: absolute;
    line-height: 1.8;
    text-align: left;
    font-size: 105%;
    cursor: no-drop;
    color: #fff;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}

.info h2 {
    text-align: center;
}
.product-image:hover .info {
    transform: translateX(0);
}

.info ul li {
    transition: 0.3s ease;
}
.info ul li:hover {
    transform: translateX(50px) scale(1.3);
}

.product-image:hover img {
    transition: all 0.3s ease-out;
}
.product-image:hover img {
    transform: scale(1.2, 1.2);
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .contain_products {
        flex-direction: column;
    }
    .contain_products .container {
        margin-bottom: 50px;
        width: 90%;
    }
    .control[data-v-5c88657a] {
        position: absolute;
        bottom: 5%;
        left: 13.8%;
    }
}
/* Small devices (landscape phones, 576px and up)   */
@media (min-width: 576px) and (max-width: 767.98px) {
    .contain_products {
        flex-direction: column;
    }
    .contain_products .container {
        margin-bottom: 50px;
        width: 90%;
    }
}
/*  Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) and (max-width: 991.98px) {
    .contain_products {
        flex-direction: column;
    }
    .contain_products .container {
        margin-bottom: 50px;
        width: 75%;
    }
}
</style>
