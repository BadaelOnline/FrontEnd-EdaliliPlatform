<template>
    <div class="contian">
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
                <label for="name" class="form__label">Search Stores</label>
            </div>
        </div>
        <!-- <div class="child3">
            <span class="slide" id="menu_btn">
                <a>
                    <i class="fa fa-bars" @click="opensidebar()"></i>
                </a>
            </span>
            <div class="side" id="side">
                <div class="screen">
                    <div class="cancel" @click="closesidebar()">
                        <i class="fa fa-window-close"></i>
                    </div>
                    <div
                        class="row"
                        v-for="section in Sections"
                        :key="section.id"
                    >
                        <input name="dot" type="checkbox" class="dot" />
                        <label class="dot">
                            <span>{{ section.name }}</span></label
                        >
                    </div>
                </div>
            </div>
        </div> -->
        <!-- <div class="img_boarder">
            <br />
            <img src="../../../public/img/store.png" style="width: 200px" />
        </div> -->

        <div v-if="filterSearch.length > 0" class="top_title">
            <h2
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >
                Famouse Stores
            </h2>
        </div>
        <div v-else-if="filterSearch.length == 0" class="top_title2">
            <h2
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >
                <i
                    class="fas fa-exclamation-triangle"
                    style="margin: 0 30px"
                ></i
                >No Result Founded
            </h2>
        </div>
        <div
            style="width: 80%; display: flex; justify-content: center"
            v-for="store in filterSearch.slice(0, 1)"
            :key="store.id"
            :store="store"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
        >
            <div class="menu">
                <div class="title">{{ store.title }}</div>
                <div
                    @click="VisitStore(store.id, store.title)"
                    class="button1"
                    title="visit this store"
                >
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <router-link :to="`/visitstore/${store.id}/${store.title}`"
                        ><span
                            style="
                                margin: 0 50px;
                                color: #fffb1f;
                                font-size: 20px;
                                letter-spacing: 2px;
                            "
                            >Visit</span
                        ></router-link
                    >
                </div>
                <img
                    class="imageFilter"
                    src="../../../public/img/market-logo.png"
                    height="150"
                />
            </div>
        </div>

        <div class="top_title">
            <h2
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >
                More Stores
            </h2>
        </div>
        <div class="store">
            <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                class="card"
                v-for="store in Stores"
                :key="store.id"
                :store="store"
            >
                <div class="profile-sidebar">
                    <img
                        src="../../../public/img/market-logo.png"
                        height="150"
                    />
                    <ul class="social">
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
                                ><i
                                    class="fa fa-phone fa-2x"
                                    aria-label="phone"
                                ></i
                            ></a>
                        </li>
                    </ul>
                </div>
                <div class="profile-main">
                    <h2 class="profile-name">{{ store.title }}</h2>
                    <div class="star-rating">
                        <input
                            type="radio"
                            name="stars"
                            id="star-a"
                            value="5"
                        />
                        <label for="star-a"></label>

                        <input
                            type="radio"
                            name="stars"
                            id="star-b"
                            value="4"
                        />
                        <label for="star-b"></label>

                        <input
                            type="radio"
                            name="stars"
                            id="star-c"
                            value="3"
                        />
                        <label for="star-c"></label>

                        <input
                            type="radio"
                            name="stars"
                            id="star-d"
                            value="2"
                        />
                        <label for="star-d"></label>

                        <input
                            type="radio"
                            name="stars"
                            id="star-e"
                            value="1"
                        />
                        <label for="star-e"></label>
                    </div>
                    <p class="profile-position">{{ $t('It500away') }}</p>
                    <!-- <ul
                            class="profile-body"
                            v-for="item in store.section"
                            :key="item.id"
                        >
                            <li class="categorystore">
                                {{ item.name }}
                            </li>
                        </ul> -->
                    <router-link :to="`/visitstore/${store.id}/${store.title}`">
                        <button type="button" class="btn">
                            <b>{{ $t('visit') }}</b>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import data from '../../jeson/data';
import { mapState } from 'vuex';
export default {
    name: 'stores',
    data() {
        return {
            viewProductsInStore: [],
            rating: 0,
            selectedCategory: [],
            search: '',
        };
    },
    methods: {
        btnbar: function () {
            document.getElementById('btn').classList.toggle('click');
            document.getElementById('menu').classList.toggle('show');
        },
        closesidebar() {
            document.getElementById('side').animate(
                [
                    // keyframes
                    { height: '600px' },
                    { height: '0px' },
                ],
                {
                    // timing options
                    duration: 1000,
                    easing: 'ease-out',
                }
            );

            setTimeout(function () {
                document.getElementById('menu_btn').style.display = 'block';
                document.getElementById('side').style.display = 'none';
            }, 1000);
        },
        opensidebar() {
            document.getElementById('side').style.display = 'block';
            document.getElementById('menu_btn').style.display = 'none';
        },
    },
    computed: {
        ...mapState(['categories', 'Stores', 'Sections']),
        filterSearch() {
            return this.Stores.filter((store) => {
                return store.title.match(this.search);
            });
        },
    },
    mounted() {
        this.$store.dispatch('loadStores');
        this.$store.dispatch('loadSections');
        // window.onscroll = function () {
        //     var menu_btn = document.getElementById('menu_btn');
        //     var side = document.getElementById('side');
        //     if (window.pageYOffset > 756) {
        //         menu_btn.classList.add('fixed');
        //         side.classList.add('fixed2');
        //     } else if (window.pageYOffset < 756) {
        //         menu_btn.classList.remove('fixed');
        //         side.classList.remove('fixed2');
        //     }
        // };
    },
};
</script>

<style scoped>
.contian {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    /* background: linear-gradient(0.25turn, #7a7d80, #bbd2c5); */
    background: #7a7d80
        url(data:image/png;base64,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)
        center / 5000px 100px;
}
/* sidebar */
.parent .child3 {
    width: 22%;
}
.slide {
    position: absolute;
    /* top: 67%; */
    right: 2%;
    cursor: pointer;
    font-size: 20px;
}
.fixed {
    position: absolute;
    /* top: 0; */
    width: 100%;
    right: -40%;
}
.fixed2 {
    position: absolute;
    /* top: 10px; */
    right: 34px;
}
.side {
    width: 227px;
    margin: auto;
    background-color: #e1e1e1;
    height: 0px;
    animation: mymove 2s forwards;
    display: none;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
}
.side .cancel {
    display: flex;
    font-size: 22px;
    color: #5b5b5b;
    cursor: pointer;
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    .side {
        width: 185px;
    }
}
@keyframes mymove {
    0% {
        height: 0px;
    }

    100% {
        height: 600px;
    }
}
/*  */
.img_boarder {
    position: absolute;
    right: 10%;
    /* top: 135%; */
}
.top_title {
    width: 100%;
    margin: 0 0 30px 0;
    display: flex;
    justify-content: center;
}
.top_title h2 {
    background-color: #536976;
    padding: 10px;
    border-top-left-radius: 207px;
    border-top-right-radius: 39px;
    border-bottom-right-radius: 176px;
    border-bottom-left-radius: 44px;
    color: #fff;
    box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px #0f0f0f,
        inset 0px 0px 4px rgba(17, 17, 17, 0.2),
        inset 7px 7px 15px rgba(55, 84, 170, 0),
        inset -7px -7px 20px rgba(255, 255, 255, 0),
        0px 0px 4px rgba(255, 255, 255, 0);
}
.top_title2 {
    width: 100%;
    margin: 0 0 30px 0;
    display: flex;
    justify-content: center;
    height: 100px;
}
.top_title2 h2 {
    padding: 10px;
    border-top-left-radius: 207px;
    border-top-right-radius: 39px;
    border-bottom-right-radius: 176px;
    border-bottom-left-radius: 44px;
    color: #000000ad;
    font-size: 3em;
}
.famouse_resturant {
    margin-bottom: 40px;
    border-radius: 0;
    box-shadow: 10px 10px 10px #adad85;
    width: 75%;
    height: 250px;
    border-top-left-radius: 207px;
    border-top-right-radius: 39px;
    border-bottom-right-radius: 176px;
    border-bottom-left-radius: 44px;
}
.store_content {
    display: flex;
    justify-content: center;
}
.store_content .title {
    color: #fff;
    font-size: 30px;
    background-color: #000000ad;
}
/*  */
.store .card {
    margin: auto auto 10px auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    width: 45%;
    height: 250px;
    display: flex;
    flex-direction: row;
    background: linear-gradient(0.25turn, #bbd2c5, #7a7d80);
    color: #fff;
    text-align: center;
    padding: 2em;
}
.store .card .profile-sidebar {
    margin: auto 0;
    /* text-align: center; */
}
.store .card .profile-sidebar img {
    border-radius: 50%;
    border: 4px solid white;
    top: 0;
}
.store .card .profile-main {
    margin: auto;
}
.store .card .profile-main .profile-name {
    font-size: 2rem;
    line-height: 1.1;
    letter-spacing: 1px;
}
.store .card .profile-main .profile-name:hover {
    letter-spacing: 5px;
}
.store .card .profile-main .star-rating::after {
    content: '';
    display: block;
    height: 1px;
    width: 2em;
    background: #0c505c;
    opacity: 0.8;
    margin: 0.5em auto 0.5em;
    opacity: 0.35;
}
.store .card .profile-main .profile-position {
    margin: 0;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 3px;
    color: #fff;
    margin-bottom: 2em;
}
.store .card .profile-main .profile-body {
    font-weight: 300;
    opacity: 0.8;
    display: flex;
    list-style: none;
}
.store .card button {
    border-radius: 4px;
    background-color: #536976;
    border: none;
    color: #fff;
    text-align: center;
    font-size: 12px;
    padding: 10px;
    width: 100px;
    transition: all 0.5s;
    cursor: pointer;
    box-shadow: -2px -2px 8px #536976;
    bottom: 0;
    transition: all 0.8s ease;
}
.store .card button:active {
    box-shadow: 0 5px #000;
    transform: translatez(4px);
}
.store .card .social {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 125px;
    margin: 10px auto;
}
.store .card .social a {
    color: #536976;
    opacity: 0.6;
    font-size: 1.125rem;
    cursor: pointer;
}
.store .card .social a:hover,
.store .card .social a:focus {
    opacity: 1;
}
.store {
    margin-bottom: 40px;
    border-radius: 0;
    /* box-shadow: 10px 10px 10px #4d4c4c; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
/* use reverse flexbox to take advantage of flex-direction: reverse */
.star-rating {
    display: block;
    align-items: center;
    width: 160px;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    position: relative;
}
/* hide the inputs */
.star-rating input {
    display: none;
}
/* set properties of all labels */
.star-rating > label {
    width: 30px;
    height: 30px;
    font-family: Arial;
    font-size: 30px;
    transition: 0.2s ease;
    color: orange;
}
/* give label a hover state */
.star-rating label:hover {
    color: orange;
    transition: 0.2s ease;
}
.star-rating label:active::before {
    transform: scale(1.1);
}

/* set shape of unselected label */
.star-rating label::before {
    content: '\2606';
    position: absolute;
    top: 0px;
    line-height: 26px;
}
/* set full star shape for checked label and those that come after it */
.star-rating input:checked ~ label:before {
    content: '\2605';
}

@-moz-document url-prefix() {
    .star-rating input:checked ~ label:before {
        font-size: 36px;
        line-height: 21px;
    }
}
</style>
<style lang="scss" scoped>
// TODO: More neumorphic UI components, not just buttons and checkboxes/radios.

$baseHue: 215;
$baseSat: 50%;
$baseLum: 90;
$baseColor: hsl($baseHue, $baseSat, $baseLum);
$bgColor: hsl($baseHue, $baseSat, $baseLum - 2);
.dot {
    background: linear-gradient(
        135deg,
        rgba(247, 251, 255, 0.7) 20%,
        rgba(0, 0, 0, 0.125) 100%
    );
    border: 2px solid $baseColor;
    // border-radius: 16px;
    // box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.1),
    //     -3px -3px 5px 1px rgba(247, 251, 255, 0.5);
    cursor: pointer;
    height: 25px;
    width: 25px;
    margin: 10px 0;
}
.row {
    align-items: flex-start;
    padding-left: 20px;
    display: flex;
    justify-content: space-around;
    width: 80%;
    flex-direction: column;
    gap: 20px;
    text-align: left;

    input {
        display: none;

        &:checked {
            + .dot {
                background: linear-gradient(
                    -45deg,
                    rgba(247, 251, 255, 0.4) 20%,
                    rgba(0, 0, 0, 0.2) 100%
                );
            }
        }
    }
}
.screen {
    align-items: left;
    background: linear-gradient(135deg, #e3e2e2, #777);
    box-shadow: inset 5px 5px 7px 5px rgba(0, 0, 0, 0.1),
        inset -5px -5px 7px 5px rgba(247, 251, 255, 0.6);
    flex-direction: column;
    height: 300px;
    justify-content: space-around;
    width: 100%;
    height: 100%;
}
.dot span {
    padding-left: 30px;
}
//
.board {
    margin-top: 20px;
    margin-bottom: 50px;
    font-size: 2.2rem;
    letter-spacing: 0.15em;
    line-height: 1.5;
    width: 90%;
    height: auto;
    padding: 20px;
    overflow: hidden;
    color: #fff;

    &:focus {
        outline: none;
    }

    // The table
    &:after {
        content: '';
        position: absolute;
        width: 100vw;
        height: 375%;
        left: 0;
        top: calc(50% + 100px);
        z-index: -1;
        box-shadow: 0 -2px 3px rgba(#000, 0.1), inset 0 2px 2px rgba(#000, 0.15),
            inset 0 10px 300px rgba(#000, 0.5);
        // Behold the wood texture
        // background: #d1a776
        //     url(data:image/png;base64,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)
        //     center / 5000px 100px;
    }

    // The plant
    // &:before {
    //     content: '';
    //     position: absolute;
    //     background: url('https://img.teleflora.com/images/o_0/l_flowers:TPL08-1A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/TPL08-1A/Teleflora&#039;sLushLeavesPothosPlant')
    //         center / contain no-repeat;
    //     width: 250px;
    //     height: 300px;
    //     left: 0;
    //     top: 125%;
    //     filter: drop-shadow(20px 10px 20px rgba(0, 0, 0, 0.3));
    // }
}
/* ______________________________________________________________________________ */
$primary: #536976;
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
/* ______________________________________________________________________________ */
.menu {
    position: relative;
    // background: #bfbfd7;
    background: linear-gradient(0.25turn, #bbd2c5, #7a7d80);
    margin: 30px 0;
    border-radius: 10px;
    width: 80%;
    height: 300px;
    cursor: pointer;
    color: #536976;
    box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15),
        -7px -7px 20px rgb(15, 15, 15), inset 0px 0px 4px rgba(17, 17, 17, 0.2),
        inset 7px 7px 15px rgba(55, 84, 170, 0),
        inset -7px -7px 20px rgba(255, 255, 255, 0),
        0px 0px 4px rgba(255, 255, 255, 0);

    &:hover {
        opacity: 0.9;

        .button1 {
            color: #536976;
            opacity: 1;
            pointer-events: auto;
            &:first-of-type {
                bottom: 40px;
                right: 10px;
                transition-delay: 0.1s;
            }
        }
    }
}

.button1 {
    width: 100%;
    padding: 10px;
    border-radius: 2%;
    font-size: 18px;
    cursor: pointer;
    color: #536976;
    background: #536976;
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0;
    pointer-events: none;
    box-shadow: inherit;
    transition: 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28), 0.2s ease opacity,
        0.2s cubic-bezier(0.08, 0.82, 0.17, 1) transform;
    &:hover {
        transform: scale(1.1);
    }
}
.menu .title {
    background-color: #536976;
    color: #fff;
    font-size: 30px;
}
.imageFilter {
    border-radius: 50%;
    border: 4px solid white;
    margin-top: 30px;
}
.fa-star {
    color: #fff;
}
.checked {
    color: #dcd741;
}
</style>
