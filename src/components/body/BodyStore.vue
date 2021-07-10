<template>
    <!--  all colume body  -->
    <div
        class="card-group col-sm-12 wrapper"
        id="wrapper"
        style="display: flex"
    >
        <div class="card col-lg-8 col-md-8 col-sm-12 col-xs-12 stors">
            <!--          store 1-->
            <div
                class="store mb-4"
                v-for="store in filterSearch"
                :key="store.id"
                :store="store"
            >
                <div class="card-title col">
                    <div class="col DIV1">
                        <div class="col">
                            <img
                                class="img-open"
                                src="../../../public/img/open.png"
                                height="40"
                            />
                        </div>
                        <div class="col text-muted">{{ $t('It500away') }}</div>
                        <div class="col">
                            <div class="row mt-3 divtitle">
                                <div class="title">
                                    {{ store.title }}
                                </div>
                                <div class="stars text-right">
                                    <span
                                        @click="rating = item"
                                        v-for="item in parseInt(rating)"
                                        :key="item"
                                        class="fa fa-star"
                                        aria-hidden="true"
                                    ></span>
                                    <span
                                        @click="rating = item + rating"
                                        v-for="item in 5 - rating"
                                        :key="item"
                                        class="far fa-star"
                                        aria-hidden="true"
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <img
                                class="rounded-circle"
                                src="../../../public/img/market-logo.png"
                                height="70"
                            />
                        </div>
                    </div>
                </div>
                <div class="card-footer" id="card-footer">
                    <div class="scrollmenu">
                        <ul
                            class="flex-row d-inline-flex"
                            v-for="item in store.section"
                            :key="item.id"
                        >
                            <li class="categorystore mr-2 ml-2">
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <div class="row img-button">
                            <div class="col dileversmall">
                                <span class="span"
                                    ><img
                                        class="Group"
                                        src="../../../public/img/Group.png"
                                        height="20"
                                /></span>
                                <span class="span"
                                    ><img
                                        class="MaskGroup"
                                        src="../../../public/img/MaskGroup.png"
                                        height="20"
                                /></span>
                            </div>
                            <div class="col btnsmall">
                                <router-link
                                    :to="`/visitStore/${store.id}/${store.title}`"
                                >
                                    <button type="button" class="btn">
                                        <b>{{ $t('visit') }}</b>
                                    </button>
                                </router-link>
                            </div>
                            <div class="col team-social">
                                <div class="row">
                                    <location-store></location-store>
                                    <phone-store></phone-store>
                                    <whatsapp-store></whatsapp-store>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--              check box     -->
        <span class="slide" id="btn">
            <a>
                <i class="fa fa-bars" @click="btnbar()"></i>
            </a>
        </span>

        <div
            class="card col-lg-3 mr-4 col-md-3 col-sm-4 col-xs-4 mb-4 categores"
            id="menu"
        >
            <div class="backdrop"></div>
            <div class="card text-right checked-all open" id="all">
                <span class="text-center span-text text">{{
                    $t('Viewoffers')
                }}</span>
                <input
                    class="search mt-2 mb-2"
                    type="text"
                    name="search"
                    v-model="search"
                    placeholder="Search Store Name"
                />
                <span class="text-center bgcolor">{{
                    $t('Bydepartment')
                }}</span>
                <div class="checklist">
                    <label class="textcheck" for="check4">{{
                        $t('All')
                    }}</label>
                    <input
                        class="categories fa fa-check-square-o"
                        type="checkbox"
                        id="check4"
                    />
                    <ul>
                        <li
                            class="textcheck"
                            v-for="category in Sections.slice(0, 12)"
                            :key="category"
                        >
                            {{ category.name }}
                            <input
                                class="categories"
                                type="checkbox"
                                v-bind:value="category"
                                id="category"
                                v-model="selectedCategory"
                            />
                        </li>
                    </ul>
                </div>
                <span class="text-center bgcolor">{{
                    $t('DependingStoreCompany')
                }}</span>
                <div class="checklist">
                    <div class="">
                        <label class="textcheck" for="check1">{{
                            $t('ShopicoSupermarket')
                        }}</label
                        >&nbsp;
                        <input class="categories" type="checkbox" id="check1" />
                    </div>
                    <div class="">
                        <label class="textcheck" for="check2">{{
                            $t('PrincessCenter')
                        }}</label
                        >&nbsp;
                        <input class="categories" type="checkbox" id="check2" />
                    </div>
                    <div class="">
                        <label class="textcheck" for="check3">{{
                            $t('ElectronicsCompany')
                        }}</label
                        >&nbsp;
                        <input class="categories" type="checkbox" id="check3" />
                    </div>
                </div>
                <span class="text-center bgcolor">{{
                    $t('AccordingEvaluation')
                }}</span>
                <div class="checklist star">
                    <div class="row star-right">
                        <span
                            @click="rating = item"
                            v-for="item in parseInt(rating)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rating = item + rating"
                            v-for="item in 5 - rating"
                            :key="item"
                            class="far fa-star"
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div class="row star-right2">
                        <span
                            @click="rating = item"
                            v-for="item in parseInt(rating)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rating = item + rating"
                            v-for="item in 4 - rating"
                            :key="item"
                            class="far fa-star"
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div class="row star-right3">
                        <span
                            @click="rating = item"
                            v-for="item in parseInt(rating)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rating = item + rating"
                            v-for="item in 3 - rating"
                            :key="item"
                            class="far fa-star"
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div class="row star-right4">
                        <span
                            @click="rating = item"
                            v-for="item in parseInt(rating)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rating = item + rate"
                            v-for="item in 2 - rating"
                            :key="item"
                            class="far fa-star"
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div class="row star-right5">
                        <span
                            @click="rating = item"
                            v-for="item in parseInt(rating)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rating = item + rating"
                            v-for="item in 1 - rating"
                            :key="item"
                            class="far fa-star"
                            aria-hidden="true"
                        ></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';
import { defineAsyncComponent } from 'vue';
export default {
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
    props: ['id', 'title', 'section', 'Product', 'brand'],

    data() {
        return {
            Sections: [],
            viewProductsInStore: [],
            rating: 0,
            selectedCategory: [],
            search: '',
        };
    },
    computed: {
        ...mapState(['categories', 'Stores']),
        filterSearch() {
            return this.Stores.filter((store) => {
                return store.title.match(this.search);
            });
        },
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
        this.$store.dispatch('loadStores');
    },
    methods: {
        btnbar: function () {
            document.getElementById('btn').classList.toggle('click');
            document.getElementById('menu').classList.toggle('show');
        },
        gotoview: function (i, t, w) {
            this.$router.push(`visitStore/${i}/${t}/${w}`);
        },
        fetch() {
            var self = this;
            let lang = window.localStorage.getItem('lang');
            axios
                .get(`/api/sections/getAll?lang=${lang}`)
                .then((res) => {
                    self.Sections = res.data.Section;
                    console.warn('Data SUCCESS: ', res.data.Section);
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 200px) and (max-width: 467px) {
    .btn {
        font-weight: bold;
        font-size: 1rem;
        height: 30px;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 50px;
    }
    .checked-all {
        font-size: 10px;
        color: #000000;
        overflow-y: auto;
        white-space: nowrap;
    }
    .categories {
        height: 8px;
        font-size: 8px;
        color: #000000;
        list-style: none;
        margin-bottom: 10px;
        transition: all 0.8s;
    }
    .textcheck {
        list-style: none;
        margin-bottom: 10px;
        font-size: 8px;
        color: #000000;
        transition: all 0.8s;
    }
    .checked-all .listcategories .categories {
        color: #000000;
        margin-right: 10px;
    }
    .span-text {
        font-size: 10px;
    }
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 8px;
        margin-top: 5px;
    }
    .categores {
        margin-right: 0;
        color: #000000;
        position: absolute;
        width: 200px;
        right: -400px;
        height: 50%;
        transition: right 0.4s ease;
    }
    .categores.show {
        right: 0;
    }
    .slide {
        position: absolute;
        top: 0;
        right: 10px;
        height: 30px;
        width: 30px;
        cursor: pointer;
        transition: right 0.4s ease;
    }
    .slide.click {
        right: 220px;
    }
    .slide .fa-bars {
        color: #000000;
    }
    .slide.click .fa-bars:before {
        content: '\f00d';
    }
    .card {
        margin-top: 10px;
        margin-right: 0;
        margin-left: 0;
    }
    .DIV1 {
        display: flex;
        flex-direction: column-reverse;
    }
    .team-social {
        position: absolute;
        bottom: 10px;
        left: 30%;
    }
    .dileversmall {
        position: absolute;
        bottom: 10px;
        right: 30%;
    }
    .span {
        color: #fefefe;
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        margin: 0 5px;
        transition: all 0.3s linear;
    }
    .divtitle {
        display: block;
    }
    .img-open {
        height: 20px;
        margin-top: 10px;
        transition: all 0.8s;
    }
    .rounded-circle {
        margin-top: 10px;
        height: 80px;
    }
    .text-muted {
        margin-top: 10px;
        font-size: 10px;
        font-weight: bold;
    }
    .title {
        font-size: 10px;
        font-weight: bold;
        text-align: center;
    }
    .stars {
        font-weight: bold;
        font-size: 10px;
        color: #ffd200;
        list-style: none;
        text-align: center;
        align-items: center;
        margin-right: 40%;
    }
    .categorystore {
        margin-top: 5px;
        list-style: none;
        font-size: 12px;
        color: #751aff;
        margin-right: 50px;
    }
    .Group {
        height: 15px;
    }
    .MaskGroup {
        height: 15px;
    }
    .stors {
        width: 100%;
    }
}
@media (min-width: 468px) and (max-width: 598.99px) {
    .btn {
        font-size: 1rem;
        height: 30px;
        width: 60%;
        margin-bottom: 10px;
    }
    .checked-all {
        font-size: 12px;
        color: #000000;
        overflow-y: auto;
        white-space: nowrap;
    }
    .categories {
        height: 10px;
        font-size: 12px;
        color: #000000;
        list-style: none;
        margin-bottom: 10px;
        transition: all 0.8s;
    }
    .textcheck {
        list-style: none;
        margin-bottom: 10px;
        font-size: 8px;
        font-weight: bold;
        color: #000000;
        transition: all 0.8s;
    }
    .checked-all .listcategories .categories {
        color: #000000;
        margin-right: 10px;
    }
    .span-text {
        font-size: 12px;
    }
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 10px;
        margin-top: 5px;
    }
    /*...................*/
    .categores {
        margin-right: 0;
        color: #000000;
        position: absolute;
        width: 200px;
        right: -400px;
        height: 50%;
        transition: right 0.4s ease;
    }
    .categores.show {
        right: 10px;
    }
    .slide {
        position: absolute;
        top: 0;
        right: 10px;
        height: 45px;
        width: 45px;
        cursor: pointer;
        transition: right 0.4s ease;
    }
    .slide.click {
        right: 260px;
    }
    .slide .fa-bars {
        color: #000000;
    }
    .slide.click .fa-bars:before {
        content: '\f00d';
    }
    .card {
        margin-top: 10px;
        margin-right: 0;
        margin-left: 0;
    }
    .card-footer {
        text-align: center;
    }
    .img-open {
        height: 20px;
        margin-top: 10px;
        transition: all 0.8s;
    }
    .rounded-circle {
        margin-top: 10px;
        height: 40px;
    }
    .text-muted {
        margin-top: 20px;
        font-size: 10px;
    }
    .title {
        font-size: 10px;
    }
    .stars {
        font-size: 8px;
        color: #ffd200;
        list-style: none;
    }
    .categorystore {
        margin-top: 5px;
        list-style: none;
        font-size: 12px;
        color: #751aff;
        text-align: center;
    }
    .img-button {
        margin-top: 5px;
    }
    .Group {
        margin-left: 10px;
        height: 15px;
    }
    .MaskGroup {
        height: 15px;
    }
    .stors {
        width: 100%;
    }
    .DIV1 {
        display: flex;
    }
    .team-social {
        position: absolute;
        bottom: -20px;
        right: 0;
        width: 100%;
    }
    .drop {
        display: none;
    }
}
@media (min-width: 599px) and (max-width: 767px) {
    .btn {
        font-size: 1rem;
        height: 30px;
        width: 60%;
        margin-bottom: 10px;
    }
    .checked-all {
        font-size: 12px;
        color: #000000;
        overflow-y: auto;
        white-space: nowrap;
    }
    .categories {
        height: 10px;
        font-size: 12px;
        color: #000000;
        list-style: none;
        margin-bottom: 10px;
        transition: all 0.8s;
    }
    .textcheck {
        list-style: none;
        margin-bottom: 10px;
        font-size: 8px;
        font-weight: bold;
        color: #000000;
        transition: all 0.8s;
    }
    .checked-all .listcategories .categories {
        color: #000000;
        margin-right: 10px;
    }
    .span-text {
        font-size: 12px;
    }
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 10px;
        margin-top: 5px;
    }
    .categores {
        margin-right: 0;
        color: #000000;
        position: absolute;
        width: 200px;
        right: -400px;
        height: 50%;
        transition: right 0.4s ease;
    }
    .categores.show {
        right: 0;
    }
    .slide {
        position: absolute;
        top: 0;
        right: 10px;
        height: 45px;
        width: 45px;
        cursor: pointer;
        transition: right 0.4s ease;
    }
    .slide.click {
        right: 260px;
    }
    .slide .fa-bars {
        color: #000000;
    }
    .slide.click .fa-bars:before {
        content: '\f00d';
    }
    .card {
        margin-top: 10px;
        margin-right: 0;
        margin-left: 0;
    }
    .card-footer {
        text-align: center;
    }
    .img-open {
        height: 20px;
        margin-top: 10px;
        transition: all 0.8s;
    }
    .rounded-circle {
        margin-top: 10px;
        height: 40px;
    }
    .text-muted {
        margin-top: 20px;
        font-size: 10px;
    }
    .title {
        font-size: 10px;
    }
    .stars {
        font-size: 8px;
        color: #ffd200;
        list-style: none;
    }
    .categorystore {
        margin-top: 5px;
        list-style: none;
        font-size: 12px;
        color: #751aff;
        text-align: center;
    }
    .img-button {
        margin-top: 5px;
    }
    .Group {
        margin-left: 10px;
        height: 15px;
    }
    .MaskGroup {
        height: 15px;
    }
    .stors {
        width: 100%;
    }
    .DIV1 {
        display: flex;
    }
    .drop {
        display: none;
    }
}
@media (min-width: 768px) and (max-width: 991.98px) {
    .card {
        margin-top: 10px;
        margin-right: 0;
        margin-left: 0;
    }
    .img-open {
        height: 30px;
        margin-top: 10px;
        transition: all 0.8s;
    }
    .rounded-circle {
        height: 40px;
    }
    .btn {
        font-size: 1rem;
        height: 30px;
        width: 60%;
        margin-bottom: 10px;
    }
    .text-muted {
        margin-top: 20px;
        font-size: 10px;
    }
    .title {
        font-size: 10px;
    }
    .stars {
        color: #ffd200;
        list-style: none;
        font-size: 10px;
    }
    .categorystore {
        list-style: none;
        font-size: 12px;
        color: #751aff;
    }
    .img-button {
        margin-top: 10px;
    }
    .categories {
        height: 10px;
        color: #000000;
        list-style: none;
        margin-bottom: 10px;
        transition: all 0.8s;
    }
    .textcheck {
        font-weight: bold;
        list-style: none;
        margin-bottom: 10px;
        font-size: 8px;
        color: #000000;
        transition: all 0.8s;
    }
    .checked-all {
        font-size: 9px;
    }

    .span-text {
        font-size: 15px;
    }
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 10px;
        margin-top: 5px;
    }
    .slide {
        display: none;
    }
    .card-title {
        margin-top: 20px;
    }
    .card-group {
        justify-content: center;
    }
    .DIV1 {
        display: flex;
    }
    .drop {
        display: none;
    }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    .card {
        margin-top: 10px;
        margin-right: 0;
        margin-left: 0;
    }
    .img-open {
        height: 30px;
        margin-top: 10px;
        transition: all 0.8s;
    }
    .btn {
        font-size: 1rem;
        height: 40px;
        width: 60%;
        margin-bottom: 10px;
    }
    .rounded-circle {
        height: 50px;
    }
    .text-muted {
        margin-top: 20px;
        font-size: 10px;
    }
    .card-title {
        font-size: 10px;
    }
    .stars,
    .star {
        color: #ffd200;
        list-style: none;
    }
    .categorystore {
        list-style: none;
        font-size: 14px;
        color: #751aff;
    }
    .img-button {
        margin-top: 20px;
    }
    .Group {
        margin-left: 10px;
    }
    .textcheck {
        list-style: none;
        margin-bottom: 10px;
        font-size: 10px;
        color: #0c0808;
        transition: all 0.8s;
    }
    .categories {
        height: 10px;
        font-size: 10px;
        color: #000000;
        list-style: none;
        margin-bottom: 10px;
        transition: all 0.8s;
    }
    .span-text {
        font-size: 12px;
    }
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 12px;
        margin-top: 5px;
    }
    .slide {
        display: none;
    }
    .card-title {
        margin-top: 20px;
    }
    .card-group {
        justify-content: center;
    }
    .DIV1 {
        display: flex;
    }
}
@media (min-width: 1200px) {
    .menu {
        display: none;
    }
    .img-open {
        margin-left: 20px;
        transition: all 0.8s;
    }
    .btn {
        font-size: 1rem;
        height: 40px;
        width: 50%;
        margin-bottom: 10px;
        background-color: #66ff66;
    }
    .textcheck {
        list-style: none;
        margin-bottom: 10px;
        font-size: 12px;
        color: #000000;
        transition: all 0.8s;
    }
    .text-muted {
        margin-top: 20px;
    }
    .categorystore {
        list-style: none;
        font-size: 10px;
        color: #751aff;
        margin-top: 10px;
    }
    .img-button {
        margin-top: 30px;
    }
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 15px;
    }
    .categories {
        height: 12px;
        font-size: 12px;
        color: #000000;
        list-style: none;
        margin-bottom: 10px;
        transition: all 0.8s;
    }
    .card {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 0;
        margin-left: 0;
    }
    .star {
        display: grid;
        justify-content: center;
    }
    .star div {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
    .slide {
        display: none;
    }
    .card-title {
        margin-top: 20px;
    }
    .card-group {
        justify-content: center;
    }
    .DIV1 {
        display: flex;
    }
    .divtitle {
        display: inline;
    }
    .stars {
        margin-right: 60px;
    }
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
    overflow-x: hidden;
}
.store {
    background-color: #ffffff;
    margin-bottom: 10px;
    border-radius: 0;
    box-shadow: 10px 10px 10px #adad85;
}
.store:hover {
    border: 1px solid #ffffff;
    border-radius: 7px;
    box-shadow: 3px 3px 3px 3px #7a7a52;
}
.categores {
    border-radius: 0;
    box-shadow: 10px 10px 10px #adad85;
}
.categores:hover {
    border: 1px solid #ffffff;
    border-radius: 7px;
    box-shadow: 3px 3px 3px 3px #7a7a52;
}
.stars,
.star {
    color: #ffd200;
    list-style: none;
}
.fa-star:hover {
    color: #ffd200;
    box-shadow: 0 0 40px #eebe22;
}
.stors {
    transition: all 0.35s ease-in-out;
    background-color: transparent;
    border: none;
}
.card-group {
    background-color: #edefef;
}
.checklist {
    font-size: 15px;
    margin-top: 20px;
    background-color: #f5f5f0;
    border: 1px solid #f5f5f0;
    margin-bottom: 10px;
    border-radius: 7px;
    box-shadow: 1px 1px 1px 1px #f5f5f0;
}
.checked-all {
    border-radius: 7px;
    border: 1px solid #f5f5f0;
}
.card-footer {
    margin-top: 10px;
    text-align: center;
}
.textcheck:hover {
    color: #5a5957;
    /* transform: translate(0, -5px); */
}
.categorystore {
    font-size: 10px;
}
.categorystore:hover {
    transform: scale(1.3);
}
.img-open:hover {
    transform: scale(1.3);
    cursor: pointer;
}
.title:hover {
    font-weight: bold;
}
.text-muted:hover {
    font-weight: bold;
}
.btn {
    background-color: #00cc44;
    color: #ffffff;
    border-radius: 40px;
    box-shadow: -2px -2px 8px rgb(224, 223, 214),
        -2px -2px 12px rgba(221, 220, 212, 0.5),
        inset 2px 2px 4px rgba(207, 206, 200, 0.1),
        2px 2px 8px rgba(168, 168, 163, 0.15);
}
.btn:hover {
    box-shadow: inset -2px -2px 8px rgb(150, 148, 137),
        inset -2px -2px 12px rgba(104, 103, 99, 0.5),
        inset 2px 2px 4px rgba(109, 108, 104, 0.1),
        inset 2px 2px 8px rgba(216, 215, 211, 0.15);
}
.btn:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
.rounded-circle {
    cursor: pointer;
    transition: all 0.8s ease-in-out;
}
.rounded-circle:hover {
    transform: scale(1.2);
}
div.scrollmenu {
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
}
.scrollmenu ul {
    display: inline-block;
    text-align: center;
    text-decoration: none;
}
.scrollmenu::-webkit-scrollbar-button:single-button {
    background-color: #bbbbbb;
    display: block;
    border-style: solid;
    height: 13px;
    width: 16px;
}
.scrollmenu::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
}
.scrollmenu::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
}
.scrollmenu::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(199, 167, 24, 0.856);
}
.search {
    margin:auto;
    width: 130px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}
.search:focus {
    width: 100%;
}
.star {
    display: grid;
    justify-content: center;
}
.star div {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}
</style>
