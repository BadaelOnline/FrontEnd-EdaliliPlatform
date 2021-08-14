<template>
    <div class="visit">
        <!-- banar -->
        <div
            id="carouselExampleInterval"
            class="carousel slide carouselSlide"
            data-ride="carousel"
            style="justify-content: center"
        >
            <div class="carousel-inner text-center">
                <div class="carousel-item active" data-interval="2000">
                    <img style="height: 38vw;"
                        src="../../../../public/img/banner-2.jpg"
                        class="d-block w-100"
                        alt="..."
                    />
                </div>
                <div class="carousel-item">
                    <img style="height: 38vw;"
                        src="../../../../public/img/banner-1.jpg"
                        class="d-block w-100"
                        alt="..."
                    />
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#carouselExampleInterval"
                role="button"
                data-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carouselExampleInterval"
                role="button"
                data-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <!-- profile store -->
        <div class="card">
            <div class="profile-sidebar">
                <img
                    src="../../../../public/img/market-logo.png"
                    height="150"
                />
                <ul class="socia">
                    <li>
                        <a
                            ><i
                                class="fa fa-map-marker fa-2x"
                                aria-label="map"
                            ></i
                        ></a>
                    </li>
                    <li>
                        <a
                            ><i
                                class="fab fa-whatsapp fa-2x"
                                aria-label="whatsapp"
                            ></i
                        ></a>
                    </li>
                    <li>
                        <a
                            ><i class="fa fa-phone fa-2x" aria-label="phone"></i
                        ></a>
                    </li>
                </ul>
                <div>{{ $t('SweidaQanawatRoad') }}</div>
            </div>
            <div class="profile-main">
                <div class="profile-name">{{ storeID.title }}</div>
                <div class="profile-body">
                    <div class="phone">
                        <div>
                            095454655454
                            <i class="fa fa-phone" aria-label="phone"></i>
                        </div>
                        <div>
                            016452354
                            <i class="fa fa-phone" aria-label="phone"></i>
                        </div>
                    </div>
                    <div class="week">
                        <div>أوقات الدوام</div>
                        <div>{{ $t('SaturdayFriday') }}</div>
                        <div>{{ storeID.workingHours }}</div>
                    </div>
                    <div class="delivery">
                        <div>الخدمات</div>
                        <div>خدمة توصيل</div>
                        <div>E-Dalely point</div>
                    </div>
                </div>
                <div class="profile-footer">
                    <div class="board">
                        <div class="form__group field">
                            <input
                                type="input"
                                class="form__field"
                                name="search"
                                id="name"
                                v-model="search"
                                required
                            />
                            <label for="name" class="form__label"
                                >Search</label
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- navbar store -->
        <div class="navbar">
            <div class="btn">
                <button type="button" class="btn btn-light medic">
                    سياسة المتجر
                </button>
            </div>
            <div class="btn">
                <button type="button" class="btn btn-light">فرص عمل</button>
            </div>
            <div class="btn">
                <button type="button" class="btn btn-light">عربة التسوق</button>
            </div>
            <div class="btn">
                <button type="button" class="btn btn-light">
                    عروضات المتجر
                </button>
            </div>
            <div class="btn">
                <button type="button" class="btn btn-light">
                    <i class="fa fa-angle-down mr-2" aria-hidden="true"></i>
                    جميع الأقسام
                </button>
                <div class="mega-box">
                    <div class="content">
                        <div
                            class="row"
                            v-for="item in storeID.section"
                            :key="item.id"
                        >
                            <ul class="mega-links">
                                <li>{{ item.name }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
           <header>Our Products</header>
 <!-- Products -->
                          <div class="contain_products">
         
            <div class="container"                        
                        v-for="prod in storeID.product.slice(0, 4)"
                        :key="prod.id"
                        :id="prod.id"
                        :long_des="prod.long_des"
                        :store="prod.store">
                <div class="product-details">
                    <h1>bliss</h1>


                    <p class="information">
                        {{prod.short_des}}
                    </p>
                    <span class="hint-star star">
                        <i class="fa fa-star checked" aria-hidden="true"></i>
                        <i class="fa fa-star checked" aria-hidden="true"></i>
                        <i class="fa fa-star checked" aria-hidden="true"></i>
                        <i class="fa fa-star checked" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                      
                    </span>
                    <div class="control">
                        <button class="btn">
                            <span class="price">$50</span>
                            <span class="shopping-cart"
                                ><i
                                    class="fa fa-shopping-cart"
                                    aria-hidden="true"
                                ></i
                            ></span>
                            <span class="buy">Buy Now</span>
                        </button>
                    </div>
                </div>

                <div class="product-image">
                    <img src="../../../../public/img/pro1-1.png" alt="" />

                    <div class="info">
                        <h2>Description</h2>
                        <ul>
                            <li><strong>Price : </strong> $50</li>
                            <li><strong>Weight : </strong>750 gram</li>
                        </ul>
                    </div>
                </div>
            </div>
         
        </div>       
     
    </div>
</template>

<script>
//   import { defineAsyncComponent } from 'vue';
import axios from 'axios';
export default {
    name: 'visitStore',
    data() {
        return {
            storeID: {},
        };
    },
    props: ['id'],
    components: {
      
    
        // Cartmini: defineAsyncComponent(() =>
        //     import(`@/components/cart/Cartmini.vue`)
        // ),
    },
    async created() {
        await axios
            .get(`/api/stores/getById/${this.$route.params.id}`)
            .then((res) => {
                console.warn('storeID :', res.data.Store);
                this.storeID = res.data.Store;
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    },
};
</script>

<style scoped>
.fa-star {
    color: #cac9c9;
    font-size: 2rem;
}

.checked {
    color: #dcd741;
}
/* ///start slide/// */
.carouselSlide {
    margin: 10px auto;
}
.carousel-inner {
    width: 100%;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
    border: 1px solid #c7c7c7;
    border-radius: 50%;
    background-color: #caabab;
    width: 30px;
    height: 40px;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
    /* border: 1px solid #c7c7c7;
    border-radius: 50%;
    width: 54px;
    height: 95px;
    background-color: #caabab;
    top: 250px;
    position: absolute; */
}
.carousel-inner {
    background-color: #ffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
}
.socail-menu img {
    transition: 0.6s;
    cursor: pointer;
    border-radius: 250px;
    width: 25px;
    height: 30px;
}
/* end slide */
/* start profile store */
.card {
    margin: 20px auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    width: 95%;
    display: flex;
    flex: 1;
    flex-direction: row;
    background: linear-gradient(to right,#e85c63, var(--bl));
    color: #fff;
    text-align: center;
    padding: 2em;
}
.profile-sidebar {
    flex: 1;
    order: 1;
    flex-direction: column;
    margin: auto;
}
.profile-sidebar img {
    border-radius: 50%;
    border: 4px solid white;
}
.socia {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 125px;
    margin: 10px auto;
}
.socia a {
    color: #0c505c;
    opacity: 0.6;
    font-size: 1.125rem;
    cursor: pointer;
}
.socia a:hover,
.socia a:focus {
    opacity: 1;
}
.profile-main {
    flex: 1;
    order: 2;
    flex-direction: column;
    margin: auto;
}
.profile-main .profile-name {
    font-size: 2rem;
    line-height: 1.1;
    letter-spacing: 1px;
    text-align: right;
}
.profile-main .profile-name:hover {
    letter-spacing: 5px;
}
.profile-body {
    margin: 20px auto;
    display: flex;
    flex: 1;
    flex-direction: row;
}
.profile-body .phone {
    flex: 1;
    order: 3;
    flex-direction: column;
    text-align: right;
}
.profile-body .phone div {
    line-height: 2.5;
}
.profile-body .week {
    flex: 1;
    order: 2;
    flex-direction: column;
}
.profile-body .week div {
    line-height: 2.5;
}
.profile-body .delivery {
    flex: 1;
    order: 1;
    flex-direction: column;
}
.profile-body .delivery div {
    line-height: 2.5;
}
.profile-footer {
    margin: 10px auto;
}
/* end profile store*/
/* start navbar */
.navbar {
    margin: 20px 20px;
    /* margin-bottom: 30%; */
}
.navbar button {
    border: none;
   background: linear-gradient(to right,#e85c63, var(--bl));
    color: #fff;
    cursor: pointer;
    font-size: 15px;
}
.navbar .btn:hover .mega-box {
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    z-index: 1000;
}
.mega-box {
    position: absolute;
    background: #536976;
    width: 100%;
    left: 0;
    margin: 10px auto;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}
.mega-box .content {
  background: linear-gradient(to right,#e85c63, var(--bl));
    padding: 25px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    width: 100%;
}
.mega-box .content .row {
    width: calc(25% - 30px);
    line-height: 45px;
}
.mega-box .content .row .mega-links {
    list-style: none;
}
.mega-box .content .row {
    border-left: 1px solid rgba(255, 255, 255, 0.09);
}
.mega-box .content .row .mega-links li {
    padding: 0 20px;
    color: #ded9d9;
    font-size: 17px;
    display: block;
    cursor: pointer;
    transition: 0.5s ease-out;
}
.mega-box .content .row .mega-links li:hover {
    background: #bbd2c5;
}
/* end navbar store */

 header {
    border: solid #fff;
    background: linear-gradient(to right,#e85c63, var(--bl));
    text-align: center;
    padding: 10px;
    font-size: 20px;
    letter-spacing: 5px;
    margin-bottom: 30px;
    color: #fff;
    font-weight: bold;
}
.contain_products{
    display: flex;
    justify-content: space-around;
    padding-bottom: 50px;
    flex-flow: wrap;
  } 
.contain_products .container{
	box-shadow: 0 15px 30px 1px grey;
	background: rgba(255, 255, 255, 0.90);
	text-align: center;
	border-radius: 5px;
	overflow: hidden;
    height: auto;
    width: 48%;
    padding: 0;
    margin-bottom: 30px;

	
}


.product-details {
	position: relative;
	text-align: left;
	overflow: hidden;
	padding: 30px;
	height: 100%;
	float: left;
	width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container .product-details h1{
	font-family: 'Bebas Neue', cursive;
	display: inline-block;
	position: relative;
	font-size: 30px;
	margin: 0;
	background: -webkit-linear-gradient(var(--r), var(--bl));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
.product-details .btn {
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

.product-details .btn:hover {
    transform: translateY(-6px);
    background: var(--bl);
}

.product-details .btn span {
    font-family: 'Farsan', cursive;
    transition: transform 0.3s;
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.2em;
    margin: 0;
}
.product-details .btn .price,
.product-details .shopping-cart {
    background: var(--r);
    border: 0;
    margin: 0;
}

.product-details .btn .price {
    transform: translateX(-10%);
    padding-right: 15px;
}

.product-details .btn .shopping-cart {
    transform: translateX(-100%);
    position: absolute;
    background: var(--r);
    z-index: 1;
    left: 0;
    top: 0;
}

.product-details .btn .buy {
    z-index: 3;
    font-weight: bolder;
}

.product-details .btn:hover .price {
    transform: translateX(-110%);
}

.product-details .btn:hover .shopping-cart {
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

<style lang="scss" scoped>
.board {
    // margin-top: 20px;
    // margin-bottom: 20px;
    font-size: 2.2rem;
    letter-spacing: 0.15em;
    line-height: 1.5;
    width: 100%;
    height: auto;
    padding: 20px;
    overflow: hidden;
    color: #fff;

    &:focus {
        outline: none;
    }
}
/* ______________________________________________________________________________ */
$primary: #2c3e50;
$secondary: #000000ad;
$white: #fff;
$gray: #ffffff;
.form__group {
    position: relative;
    padding: 15px 0 0;
    margin: auto;
    margin-top: 10px;
    width: 50%;
}

.form__field {
    font-family: inherit;
    width: 80%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1.3rem;
    color: $white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ .form__label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }
}

.form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1.7rem;
    color: $gray;
}

.form__field:focus {
    ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1.5rem;
        color: $primary;
        font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary, $secondary);
    border-image-slice: 1;
}
/* reset input */
.form__field {
    &:required,
    &:invalid {
        box-shadow: none;
    }
}
</style>
