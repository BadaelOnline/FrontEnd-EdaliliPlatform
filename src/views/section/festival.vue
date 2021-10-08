<template>
    <div class="parent">
        <div class="child1">
            <div class="colum_baner">
                <img src="../../../public/img/fistival_baner.png" />
            </div>
            <div class="colum_baner">
                <img src="../../../public/img/fistival_baner.png" />
            </div>
        </div>
        <div class="child2">
            <div
                v-for="store in Stories.slice(0, 4)"
                :key="store.pr"
                :store="store"
                style="margin-bottom: 50px"
            >
                <div class="ch2">
                    <div class="date">
                        <div>15/8/2021</div>
                        08:30 AM
                        <div></div>
                    </div>
                    <div class="title">
                        الریم سنتر- سوبر ماركت
                        <img
                            class="rounded-circle"
                            src="../../../public/img/market-logo.png"
                            height="70"
                        />
                    </div>
                </div>
                <div class="card" style="margin-top: 40px">
                    <div class="discription">
                        الشامبو الأفضل لمعالجة القشرة یحتوي على كربونات الزنك ,
                        یساعد على محاربة القشور عن طریق ترطیب فروة الرأس حسم 10
                        % على جمیع أنواع الشامبو
                    </div>
                    <span class="name">Head & Shoulders</span>
                    <hr class="hr" />
                    <div class="conten_price">
                        <div>
                            <span
                                style="
                                    text-decoration-line: line-through;
                                    opacity: 0.5;
                                "
                                >5500</span
                            >
                            <span>4900 ل.س</span>
                        </div>

                        <div>
                            <div class="tofer">توفير</div>
                        </div>
                    </div>
                    <div class="img_content">
                        <img src="../../../public/img/fistival_img.png" />
                    </div>
                    <div class="Remaining_time">
                        <h4>الزمن المتبقي للعرض</h4>
                        <div class="time_progress">
                            <span class="progress"></span>
                            <span class="time">7ساعات و 5 دقائق</span>
                        </div>
                    </div>
                    <div class="action">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <div class="textFollow" @click="toggl">
                            <span class="share"></span>
                            <i
                                class="fas fa-share fa-2x"
                                style="color: #d7cfcf"
                            ></i>
                            <span class="follow" id="follow">مشاركة العرض</span>
                        </div>
                        <div class="textFollow" @click="toggle">
                            <span
                                class="heart"
                                :class="{ 'heart-active': toggled }"
                            ></span>
                            <span class="follow">الأعجاب بالعرض</span>
                        </div>
                    </div>
                    <div class="action">
                        <h5>70.000</h5>
                        <h5>30</h5>
                        <h5>120.000</h5>
                    </div>
                    <div class="contact">
                        <div></div>
                        <div class="get_offer">أطلب العرض</div>
                        <div class="icon_contact">
                            <whatsapp-store></whatsapp-store>
                            <phone-store></phone-store>
                            <location-store></location-store>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="child3">
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
                    <div class="row">
                        <input
                            id="dot"
                            name="dot"
                            type="checkbox"
                            class="dot"
                        />
                        <label for="dot" class="dot"> <span>All</span></label>

                        <input
                            id="dot2"
                            name="dot"
                            type="checkbox"
                            class="dot"
                        />
                        <label for="dot2" class="dot"
                            ><span>Grocery</span></label
                        >

                        <input
                            id="dot3"
                            name="dot"
                            type="checkbox"
                            class="dot"
                        />
                        <label for="dot3" class="dot"
                            ><span>Mobile</span></label
                        >

                        <input
                            id="dot4"
                            name="dot"
                            type="checkbox"
                            class="dot"
                        />
                        <label for="dot4" class="dot"
                            ><span>Furniture</span></label
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import $ from 'jquery';
import { mapState } from 'vuex';
import axios from 'axios';
import { defineAsyncComponent } from 'vue';
export default {
    props: ['id', 'title', 'section', 'Product', 'brand'],
    components: {
        WhatsappStore: defineAsyncComponent(() =>
            import(`@/components/body/whatsapp-store.vue`)
        ),
        PhoneStore: defineAsyncComponent(() =>
            import(`@/components/body/phone-store`)
        ),
        LocationStore: defineAsyncComponent(() =>
            import(`@/components/body/location-store`)
        ),
    },
    data() {
        return {
            Sections: [],
            viewProductsInStore: [],
            rating: 0,
            selectedCategory: [],
            toggled: false,
        };
    },
    computed: {
        ...mapState(['Sections', 'Stores','Stories']),
        // Stores: function() {
        //     if (this.selectedCategory.length == 0)
        //         return this.$store.state.stores;
        //     var Stores = [];
        //     var filters = this.selectedCategory;
        //
        //     this.$store.state.stores.forEach(function(store) {
        //         function storeContainsFilter(filter) {
        //             return store.categories.indexOf(filter) != -1;
        //         }
        //         if (filters.every(storeContainsFilter)) {
        //             Stores.push(store);
        //         }
        //     });
        //     return Stores;
        // },
    },
    mounted() {
        // this.$store.dispatch('loadStores');
        this.$store.dispatch('loadSections');

        window.onscroll = function () {
            var menu_btn = document.getElementById('menu_btn');
            var side = document.getElementById('side');
            if (window.pageYOffset > 300) {
                menu_btn.classList.add('fixed');
                side.classList.add('fixed2');
            } else if (window.pageYOffset < 300) {
                menu_btn.classList.remove('fixed');
                side.classList.remove('fixed2');
            }
        };
    },
    methods: {
        toggl: function (event) {
            event.currentTarget.classList.toggle('heart-active');
        },
        toggle: function (event) {
            event.currentTarget.classList.toggle('heart-active');
            this.toggled = !this.toggled;
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
        btnbar: function () {
            document.getElementById('btn').classList.toggle('click');
            document.getElementById('menu').classList.toggle('show');
        },
        gotoview: function (i, t, w) {
            this.$router.push(`visitStore/${i}/${t}/${w}`);
        },
        fetch() {
            // let lang = window.localStorage.getItem('lang');
                axios
                .get(`/api/offers`)
                .then((res) => {
                    this.Offers = res.data.Offer.data;
                    console.log('Offer: ',  res.data.Offer.data);
                })
                .catch(function (error) {
                    console.warn('------ Error ------: ', error);
                });
        },
    },
    created() {
        this.fetch();
        
    },
};
</script>

<style scoped>
.parent {
    display: flex;
}
.parent .child1,
.parent .child3 {
    width: 22%;
}
.parent .child2 {
    width: 55%;
    display: grid;
    grid-template-columns: 1fr;
    margin: auto;
}
.parent .child2 .ch2 {
    display: inline-flex;
    justify-content: space-between;
    width: 95%;
}
.parent .child2 .title {
    font-weight: bold;
    opacity: 0.8;
    position: relative;
}
.parent .child2 .ch2 .title::after {
    content: 'السويداء-طريق القنوات';
    position: absolute;
    opacity: 0.4;
    top: 46px;
    right: 70px;
}
.parent .child2 .ch2 .title::before {
    content: 'الجمال والعناية بالبشرة';
    position: absolute;
    opacity: 0.4;
    top: 68px;
    right: 70px;
}

.parent .child2 .date {
    opacity: 0.5;
    padding-top: 25px;
    font-size: 19px;
}
.parent .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
}
.parent .card .discription {
    margin: 5px;
    color: gray;
}
.parent .card .name {
    color: gold;
    text-shadow: 3px 5px 10px #b3a21c;
    font-size: 19px;
}

.parent .card .hr {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
}
.parent .card .conten_price {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    font-weight: bold;
}
.parent .card .conten_price .tofer {
    background-color: #f6ef19;
    padding: 0 20px;
    color: red;
    position: relative;
}
.parent .card .conten_price .tofer::after {
    content: url(../../../public/img/icon_tofer.png);
    position: absolute;
    top: -5px;
    right: 54px;
}
.parent .card .conten_price .tofer::before {
    content: 'ل.س 550';
    position: absolute;
    right: 100px;
    color: black;
    font-size: 18px;
    opacity: 0.8;
    width: 75px;
}
.parent .card .img_content {
    margin: 40px 0 10px 0;
    width: 96%;
    margin-left: auto;
    margin-right: auto;
}
.parent .card .img_content img {
    width: 100%;
}
.parent .card .conten_price div span {
    margin: 0 5px;
}
.parent .card .Remaining_time {
    width: 95%;
    margin: 0 auto 50px auto;
}
.parent .card .Remaining_time .time_progress {
    width: 100%;
    height: 20px;
    background-color: #f6f1f1;
    position: relative;
}
.parent .card .Remaining_time .time_progress .progress {
    position: absolute;
    left: 2px;
    top: 2px;
    width: 70%;
    height: 80%;
    background-color: #19e653;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
.parent .card .Remaining_time .time_progress .time {
    font-size: 12px;
    opacity: 0.5s;
    opacity: 0.5;
    position: absolute;
    right: 15px;
}
.parent .child1 .colum_baner {
    display: flex;
    flex-direction: column;
}
.parent .action {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
}
.parent .icon_contact {
    display: flex;
    margin: 15px;
    justify-content: space-around;
    width: 25%;
}

.parent .action .stars span {
    margin: 0 5px;
    font-size: 30px;
}
.parent .action h5 {
    opacity: 0.8;
    text-shadow: 3px 5px 10px #909090;
    font-size: 1.5em;
}
.parent .contact {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-flow: row-reverse;
    direction: rtl;
}
.parent .contact .get_offer {
    background-color: #f6ef19;
    padding: 7px 30px;
    color: red;
    border-radius: 5px;
    font-weight: bold;
    box-shadow: 0 5px 2px -2px #dadada;
    position: relative;
    margin: 15px;
}
.parent .contact .get_offer::before {
    content: url(../../../public/img/getoffer.png);
    position: absolute;
    top: -4px;
    right: 116px;
}
.textFollow {
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid #eae2e1;
    max-width: 30%;
    position: relative;
    padding: 10px 10px 10px 50px;
}
.textFollow i {
    position: absolute;
    left: 5px;
}

.textFollow .heart {
    width: 100px;
    height: 100px;
    background: url('../../../public/img/heart.png') no-repeat;
    background-position: left;
    background-size: 2900%;
    position: absolute;
    top: 26px;
    left: 2px;
    transform: translate(-30%, -55%);
}
.follow {
    font-size: 14px;
    color: grey;
}
.heart.heart-active {
    background-position: right;
    animation: animate 0.8s steps(28) 1;
}
@keyframes animate {
    0% {
        background-position: left;
    }
    100% {
        background-position: right;
    }
}
.textFollow.heart-active {
    border-color: #f9b9c4;
    background: #fbd0d8;
}
.follow.heart-active {
    color: black;
}
.share {
    display: none;
}
.checked {
    color: #f6ef19;
}
/* small devices (portrait phones, less than 767px) */
@media (max-width: 767.98px) {
    .parent .child2 {
        width: 90%;
    }
    .parent .child1 {
        display: none;
    }
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 576.98px) {
}
/* ____________________________________________________  */
.slide {
    position: static;
    top: 67%;
    right: 2%;
    cursor: pointer;
    font-size: 20px;
}
.fixed {
    position: fixed;
    top: 0;
    width: 100%;
    right: -40%;
}
.fixed2 {
    position: fixed;
    top: 10px;
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
    color: #fff;
    cursor: pointer;
}

@keyframes mymove {
    0% {
        height: 0px;
    }

    100% {
        height: 600px;
    }
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 576.98px) {
    .parent .child1,
    .parent .child3 {
        width: 0%;
    }
    .parent .child2 {
        width: 90%;
    }
}
/* small devices (portrait phones, less than 767px) */
@media (max-width: 767.98px) {
    .parent .child1,
    .parent .child3 {
        width: 0%;
    }
    .parent .child2 {
        width: 90%;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .parent .child1 {
        width: 25%;
    }
    .parent .child3 {
        width: 0%;
    }
    .parent .child2 {
        width: 70%;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .side {
        width: 185px;
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
    border-radius: 16px;
    box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.1),
        -3px -3px 5px 1px rgba(247, 251, 255, 0.5);
    cursor: pointer;
    height: 25px;
    width: 25px;
    margin: 10px 0;
}

.row {
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: 80%;
    flex-direction: column;

    input {
        display: none;

        &:checked {
            + .dot {
                background: #ff3c20;
                box-shadow: 1px 0px 8px 5px #ff3c20;
            }
        }
    }
}

.screen {
    align-items: center;
    background: #1c2c34;
    box-shadow: inset 5px 5px 7px 5px rgba(0, 0, 0, 0.1),
        inset -5px -5px 7px 5px rgba(247, 251, 255, 0.6);
    flex-direction: column;
    height: 300px;
    justify-content: space-around;
    width: 100%;
    height: 100%;
}
.dot span {
    color: #fff;
    padding-left: 30px;
}
</style>

