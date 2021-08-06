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
                    <productBody
                        v-for="prod in Product.slice(0, 4)"
                        :key="prod.id"
                        :id="prod.id"
                        :name="prod.name"
                        :short_des="prod.short_des"
                        :long_des="prod.long_des"
                        :store="prod.store"
                    ></productBody>
                </div>
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
        };
    },
    components: {
        productBody: defineAsyncComponent(() =>
            import(`@/components/global/productBody.vue`)
        ),
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
        ...mapState(['Categories', 'Brands', 'brands', 'Sections', 'Product']),
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
/* products */
.products .container {
    align-items: center;
    justify-content: center;
    margin: auto;
}
/* Brand */
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
        /* margin-top: 47vh; */
        margin-bottom: 4vh;
    }
}
@media (max-width: 500.98px) {
    .mar {
        /* margin-top: 35vh; */
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
