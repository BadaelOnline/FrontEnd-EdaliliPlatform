<template>
    <div class="header">
        <div class="content_loader hidden" id="content_loader">
            <div id="loader" class="loader"></div>
        </div>

        <div class="upper-bar">
            <div class="row">
                <div @click="goto" class="col-md-2 col-sm-12 col-xs-12 imag">
                    <img src="../../../public/img/logo-4.png" />
                </div>

                <div class="parent_select">
                    <div class="child_1">
                        <div class="customer-select">
                            <select
                                v-model="lang"
                                @change="handleChange($event)"
                            >
                                <option value="en">English</option>
                                <option value="ar">العربية</option>
                            </select>
                        </div>
                        <div class="ap_lang">
                            <span class="lang">{{ $t('lang') }}</span>
                        </div>
                    </div>
                    <div class="child_2">
                        <div class="ap_scoop">
                            <i class="fa fa-map-marker"></i>
                            <span class="lang2"> {{ $t('SearchScope') }} </span>
                        </div>
                        <div class="child_3">
                            <div class="customer-select cu2">
                                <select v-model="sortType" c>
                                    <option value="1" disabled>المحافظة</option>
                                    <option
                                        v-for="gover in governorates"
                                        :key="gover.id"
                                    >
                                        {{ gover.name }}
                                    </option>
                                </select>
                            </div>

                            <div class="customer-select cu2">
                                <select v-model="sortType">
                                    <option value="1" disabled>
                                        المدینة/القریة
                                    </option>
                                    <option
                                        v-for="city in cities"
                                        :key="city.id"
                                    >
                                        {{ city.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="customer-select cu2">
                                <select v-model="sortType">
                                    <option value="1" disabled>الحي</option>
                                    <option
                                        v-for="street in streets"
                                        :key="street.id"
                                    >
                                        {{ street.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Upper Bar -->
        <!-- Start landing -->
        <div class="jumbotron">
            <div class="bars" @click="showfut()">
                <i class="fa fa-bars"></i>
            </div>
            <div
                class="exit-fut animate__animated animate__heartBeat"
                id="exit-fut"
                @click="hidefut()"
            >
                X
            </div>
            <div class="container">
                <div class="row">
                    <div class="search col-lg-12">
                        <i class="fa fa-search shopping"></i
                        ><input
                            class="input"
                            type="search"
                            :placeholder="$t('Search')"
                        />
                    </div>
                    <div class="col-lg-12">
                        <div
                            class="featuers animate__animated animate__heartBeat"
                            id="fut"
                        >
                            <div class="child_1">
                                <router-link to="/addStore" class="link">{{
                                    $t('AddPlatform', { locale: lang })
                                }}</router-link>
                            </div>
                            <div class="cole">|</div>
                            <div class="child_2" @click="gotocart()">
                                <i class="fa fa-shopping-cart shopping"></i>
                                <span class="cart-count">{{
                                    cartItemCount
                                }}</span>
                                <div>
                                    {{ $t('Shoppingcart') }}
                                </div>
                            </div>
                            <div class="cole">|</div>
                            <div class="child_3 map">
                                <i class="fa fa-map-marker shopping"></i
                                >{{ $t('Selectlocation') }}
                            </div>
                            <div class="cole">|</div>
                            <div class="child_4">
                                <i class="fa fa-user-circle shopping"> </i>
                                <template v-if="authenticated" class="user">
                                    <a
                                        @click.prevent="signOut"
                                        href="#"
                                        class="link"
                                        >SignOut</a
                                    >
                                </template>
                                <template v-else class="user">
                                    <router-link class="link" to="/signin">{{
                                        $t('signin')
                                    }}</router-link>
                                </template>
                            </div>
                            <div class="cole">|</div>
                            <div class="child_5">
                                <i class="fa fa-user-circle shopping"> </i>
                                <div>
                                    {{ $t('AddProfile') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End landing -->

        <!-- Start navbar-->
        <div id="nav" class="naver">
            <div class="conten">
                <div>
                    <router-link to="/instrc" exact>
                        <button type="button" class="btn btn-light">
                            <a>{{ $t('Factories') }}</a>
                        </button></router-link
                    >
                </div>
                <div>
                    <router-link to="/company">
                        <button type="button" class="btn btn-light">
                            <a>{{ $t('Companies') }}</a>
                        </button></router-link
                    >
                </div>
                <div>
                    <router-link to="/professional">
                        <button type="button" class="btn btn-light">
                            <a>{{ $t('ProfessionalsTechnicians') }}</a>
                        </button></router-link
                    >
                </div>
                <div>
                    <router-link to="/medic">
                        <button type="button" class="btn btn-light medic">
                            <a>{{ $t('PharmaciesMedicines') }}</a>
                        </button></router-link
                    >
                </div>
                <div>
                    <router-link to="/doctors">
                        <button type="button" class="btn btn-light">
                            <a>{{ $t('Doctors') }}</a>
                        </button></router-link
                    >
                </div>
                <div>
                    <router-link to="/resturants">
                        <button type="button" class="btn btn-light">
                            <a>{{ $t('RestaurantsCafes') }}</a>
                        </button></router-link
                    >
                </div>
                <div class="img" lang="en">
                    <router-link to="/festival">
                        <button type="button" class="btn btn-light sell">
                            <a>{{ $t('FestivalPerformances') }}</a>
                        </button></router-link
                    >
                </div>
                <div>
                    <router-link to="/stores">
                        <button type="button" class="btn btn-light">
                            <a>{{ $t('Stores') }}</a>
                        </button></router-link
                    >
                </div>
                <div>
                    <router-link to="/products">
                        <button type="button" class="btn btn-light products">
                            <a>{{ $t('Products') }}</a>
                        </button></router-link
                    >
                </div>
                <div>
                    <router-link to="/">
                        <button type="button" class="btn btn-light">
                            <a>{{ $t('Allsections') }}</a>
                        </button></router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* ____________________________________ loading  _______________________________ */
.btn {
    box-shadow: 0 9px #999;
}
.btn:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
.content_loader {
    position: absolute;
    width: 100%;
    height: 1000%;
    background-color: #645d5d;
    z-index: 1000;
    opacity: 0.5;
}
.hidden {
    display: none;
}
.loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    position: absolute;
    right: 600px;
    top: 500px;
}
/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* ____________________________________ loading _______________________________ */
.upper-bar .imag img {
    cursor: pointer;
}
.upper-bar .parent_select {
    margin-top: 2vh;
}
.upper-bar {
    background-color: #9b9a9a;
    color: #fff;
    padding: 20px;
    width: 100%;
}
.upper-bar .lang,
.upper-bar .lang2 {
    font-size: 17px;
    font-weight: bold;
    margin: 0 5px;
}
.upper-bar .parent_select {
    width: 80%;
    display: inline-flex;
    justify-content: space-around;
}
.upper-bar .parent_select .child_1 {
    display: inline-flex;
    width: 15%;
    justify-content: space-between;
    height: 50px;
}
.upper-bar .parent_select .child_1 .ap_lang {
    margin-top: 5px;
}

.upper-bar .parent_select .child_2 {
    display: inline-flex;
    direction: rtl;
    width: 55%;
    justify-content: space-around;
    height: 50px;
}
.upper-bar .parent_select .child_2 .ap_scoop {
    margin-top: 5px;
}
.upper-bar .parent_select .child_3 {
    width: 60%;
    display: inline-flex;
    justify-content: space-between;
}
.upper-bar .customer-select {
    display: inline-flex;
    border: none;
    background-color: #878080;
    width: 110px;
    border-radius: 15px;
    position: relative;
    height: 34px;
}
.upper-bar .customer-select select {
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    background-color: transparent;
    color: #fff;
    margin-left: auto;
    margin-right: auto;
    z-index: 2;
    font-size: 16px;
    position: relative;
    line-height: 2.15;
}
.upper-bar .customer-select:after {
    position: absolute;
    content: '>';
    top: 2px;
    left: 9px;
    background-color: transparent;
    color: #fff;
    transform: rotate(90deg);
    /*font-size: 17px;*/
    z-index: 1;
    font-size: 20px;
}
.upper-bar .cu2:after {
    position: absolute;
    content: '<';
    top: 2px;
    left: 9px;
    background-color: transparent;
    color: #fff;
    transform: rotate(90deg);
    /*font-size: 17px;*/
    z-index: 1;
    font-size: 20px;
}

.upper-bar .fa-map-marker {
    margin-left: 1vh;
    font-size: 16px;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .upper-bar .imag img {
        margin-top: -15px;
        margin-bottom: 10px;
    }
    .upper-bar .parent_select {
        width: 100%;
        display: grid;
    }
    .upper-bar .parent_select .child_1,
    .upper-bar .parent_select .child_2 {
        width: 100%;
        display: block;
        margin: 10px 0;
    }
    .upper-bar .parent_select .child_3 {
        width: 100%;
        display: block;
    }
    .upper-bar .parent_select .child_3 .cu2 {
        display: block;
        margin: 5px 0;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .upper-bar .imag img {
        margin-top: -15px;
        margin-bottom: 10px;
    }
    .upper-bar .imag img {
        margin-top: -15px;
        margin-bottom: 10px;
    }
    .upper-bar .parent_select {
        width: 100%;
        display: grid;
    }
    .upper-bar .parent_select .child_1,
    .upper-bar .parent_select .child_2 {
        width: 100%;
        display: block;
        margin: 10px 0;
    }
    .upper-bar .parent_select .child_3 {
        width: 100%;
        display: block;
    }
    .upper-bar .parent_select .child_3 .cu2 {
        display: block;
        margin: 5px 0;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .upper-bar .parent_select .child_1 {
        width: 20%;
    }
    .upper-bar .customer-select select {
        font-size: 14px;
    }
    .upper-bar .customer-select::after {
        left: 5px;
    }
    .upper-bar .parent_select .child_2 {
        width: 65%;
    }
    .upper-bar .parent_select .child_3 {
        width: 75%;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .upper-bar .parent_select .child_1 {
        width: 20%;
    }
    .upper-bar .parent_select .child_2 {
        width: 75%;
    }
}
/* End Upper Bar */
/* Start landing */
.jumbotron {
    text-align: center;
    position: relative;
    height: 560px;
    margin-bottom: 10px;
    width: 100%;
    background-image: url('../../../public/img/Screenshot_2020-10-17 E-DALELY Design.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.jumbotron .input {
    border: none;
    width: 400px;
    padding: 4px 10px 5px 10px;
    height: 34px;
}
.jumbotron .search:after {
    position: absolute;
    content: '>';
    top: 0;
    background-color: #87948b;
    width: 34px;
    height: 34px;
    color: #fff;
    transform: rotate(90deg);
    font-size: 17px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding-top: 5px;
}
.jumbotron .search i {
    background-color: #87948b;
    padding: 10px 10px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    width: 35px;
    height: 34px;
    color: aliceblue;
    cursor: pointer;
}
.jumbotron .featuers {
    width: 90%;
    display: inline-flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 410px;
    background-color: #bfc0c2;
    padding: 10px 20px;
    color: #635f5f;
}
.jumbotron .featuers .cole {
    font-size: 30px;
    margin-top: -15px;
}

.jumbotron .featuers span {
    font-weight: bold;
}
.jumbotron .featuers .cart-count {
    font-size: 13px;
    color: #ba8b00;
    margin-left: 23px;
    background: #ffffff;
    height: 19px;
    border-radius: 50%;
    width: 17px;
    position: absolute;
    margin-top: -16px;
}
.jumbotron .featuers div {
    display: inline-flex;
    cursor: pointer;
    position: relative;
}
.jumbotron .featuers div:hover {
    color: aliceblue;
}
.jumbotron .featuers i {
    color: #635f5f;
    font-size: 20px;
}
.jumbotron .featuers .shopping {
    margin: 0 4px;
}
.bars,
.exit-fut {
    display: none;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .jumbotron {
        height: 300px;
        width: 96%;
    }
    .jumbotron .featuers {
        width: 250px;
        position: absolute;
        font-size: 11px;
        border-radius: 20px;
        overflow: hidden;
        display: none;
    }
    .jumbotron .show {
        margin-top: 60px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .exit-fut {
        width: 25px;
        height: 25px;
        position: absolute;
        background-color: #5daaa6;
        border-radius: 50%;
        cursor: pointer;
        color: #fff;
        top: 44%;
        left: 6%;
        padding: 1px;
        font-weight: bold;
    }
    .bars {
        display: block;
        text-align: right;
        cursor: pointer;
    }
    .jumbotron .search {
        width: 100%;
    }
    .jumbotron .search input {
        width: 50%;
        padding: 4px 10px;
        height: 35px;
    }
    .jumbotron .search i {
        height: 35px;
        width: 34px;
        padding: 10px 10px;
    }
    .jumbotron .search:after {
        width: 34px;
        height: 34px;
        top: 0;
    }
    .jumbotron .featuers .cole {
        display: none;
    }
    .jumbotron .featuers .child_1,
    .jumbotron .featuers .child_2,
    .jumbotron .featuers .child_3,
    .jumbotron .featuers .child_4,
    .jumbotron .featuers .child_5 {
        display: block;
        margin: 5px 0;
    }
    .jumbotron .featuers .child_1 div,
    .jumbotron .featuers .child_2 div,
    .jumbotron .featuers .child_3 div,
    .jumbotron .featuers .child_4 div,
    .jumbotron .featuers .child_5 div {
        display: inline-flex;
    }
    .jumbotron .featuers i {
        font-size: 17px;
    }
    .jumbotron .featuers .shopping:after,
    .jumbotron .featuers .map:after,
    .jumbotron .featuers .user:after {
        display: none;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .jumbotron {
        height: 430px;
    }
    .jumbotron .featuers .cole {
        display: none;
    }
    .jumbotron .featuers div {
        margin: 10px 0;
    }
    .jumbotron .featuers {
        width: 60%;
        margin-top: 70px;
        font-size: 12px;
        border-radius: 20px;
        display: grid;
        justify-content: center;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .jumbotron .featuers {
        width: 100%;
        margin-top: 399px;
        font-size: 12px;
    }
    .jumbotron .featuers .shopping:after,
    .jumbotron .featuers .map:after,
    .jumbotron .featuers .user:after {
        top: -8px;
    }
}
/* End landing */
/* Start Naver*/
.naver {
    background-color: #a7a6a6;
    padding: 5px 0 5px 0;
    margin: 10px 0 10px 0;
}
.naver .conten {
    display: inline-flex;
    width: 100%;
    justify-content: space-around;
}
.naver .conten div {
    margin: 0 5px;
    display: inline-block;
}
.naver .btn-light {
    min-width: 70px;
    height: 29px;
    border-radius: 15px;
    color: #635f5f;
    padding: 0 5px;
}
.btn:hover {
    transform: scale3d(1.1, 1.1, 1.1);
}
.naver .products {
    border-radius: 50px;
    height: 28px;
    font-size: 15px;
    padding: 1px;
    background-color: #cc0808;
    color: #fff;
    width: 100px;
    border-color: #cc0808;
}
.naver .img {
    position: relative;
}
.naver .img::before {
    content: url(../../../public/img/icon-button.png);
    position: absolute;
    top: -1px;
    /*right: 450x;*/
}
.naver .sell {
    background-color: #f6ef19;
    border-color: #f6ef19;
    margin-left: 30px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 29px;
}
/* Extra small devices (portrait phones, less than 576px)   */
@media (max-width: 575.98px) {
    .naver .conten {
        display: inline;
    }
    .naver .btn-light {
        width: 80px;
        height: 29px;
        margin-bottom: 10px;
        font-size: 12px;
    }
    .naver .sell {
        height: 29px;
    }
    .naver .img::before {
        top: 38px;
    }
    .naver .products {
        width: 60px;
    }
    .naver .img::before {
        content: url(../../../public/img/icon-button.png);
        position: absolute;
        top: -1px;
        /*right: 450x;*/
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .naver .conten {
        display: inline;
    }
    .naver .btn-light {
        width: 80px;
        height: 29px;
        margin-bottom: 10px;
        font-size: 12px;
    }
    .naver .sell {
        height: 29px;
    }
    .naver .img::before {
        top: 38px;
    }
    .naver .products {
        width: 60px;
    }
    .naver .img::before {
        content: url(../../../public/img/icon-button.png);
        position: absolute;
        top: -1px;
        /*right: 450x;*/
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .naver .conten {
        display: inline;
    }
    .naver .btn-light {
        width: 80px;
        height: 29px;
        margin-bottom: 10px;
        font-size: 12px;
    }
    .naver .sell {
        height: 29px;
    }
    .naver .img::before {
        top: 38px;
    }
    .naver .products {
        width: 60px;
    }
    .naver .img::before {
        content: url(../../../public/img/icon-button.png);
        position: absolute;
        top: -1px;
        /*right: 450x;*/
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .naver .btn-light {
        min-width: 35px;
        height: 25px;
        margin-bottom: 10px;
        font-size: 12px;
    }
    .naver .sell {
        height: 29px;
    }
    .naver .img::before {
        top: -1px;
    }
}
.link {
    color: #635f5f;
    text-decoration: none;
}
.link:hover {
    text-decoration: none;
    color: aliceblue;
}
/* End Naver*/
/* End header */
</style>
<!--<script src="../../js/proj.js"></script>-->

<script>
import { mapGetters, mapActions } from 'vuex';
import jeson from '@/jeson/MOCK_DATA.json';
export default {
    name: 'AppHeader',
    props: ['title', 'description', 'id', 'price'],
    data() {
        const lang = localStorage.getItem('lang') || 'en';
        const token = localStorage.getItem('token');
        return {
            lang: lang,
            token: token,
            details: {
                id: this.id,
                title: this.title,
                description: this.description,
                price: this.price,
            },
            sortType: '1',
            cities: jeson[0].cities,
            governorates: jeson[0].governorates,
            streets: jeson[0].streets,
            // cities:[],
            // governorates:[],
            // streets:[]
        };
    },
    computed: {
        cartItemCount() {
            return this.$store.state.cartItemCount;
        },
        ...mapGetters({
            authenticated: 'authenticated',
            user: 'user',
        }),
    },
    methods: {
        gotocart() {
            this.$router.push(`/Cart`);
        },
        goto: function () {
            this.$router.push(`/`);
        },
        showfut() {
            document.getElementById('fut').classList.toggle('show');
            document.getElementById('exit-fut').style.display = 'block';
        },
        hidefut() {
            document.getElementById('exit-fut').style.display = 'none';
            document.getElementById('fut').classList.remove('show');
        },
        handleChange(event) {
            localStorage.setItem('lang', event.target.value);
            window.location.reload();
        },
        ...mapActions({
            signOutActions: 'signOut',
        }),
        // auth logout
        signOut() {
            this.signOutActions().then(() => {
                document
                    .getElementById('content_loader')
                    .classList.remove('hidden');

                setTimeout(function () {
                    document
                        .getElementById('content_loader')
                        .classList.add('hidden');
                }, 3000);
                this.$router.replace({
                    name: 'home',
                });
            });
        },
    },
};
</script>
