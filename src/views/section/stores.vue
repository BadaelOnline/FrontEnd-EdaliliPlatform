<template>
    <div class="contain">
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
                <label for="name" class="form__label">Search Store</label>
            </div>
        </div>
        <div class="content">
            <div class="banar">
                <img src="../../../public/img/kitchen.jpg" />
                <img src="../../../public/img/kitchen.jpg" />
                <img src="../../../public/img/kitchen.jpg" />
                <img src="../../../public/img/kitchen.jpg" />
                <img src="../../../public/img/kitchen.jpg" />
            </div>
            <div class="store">
                <div
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
                        <router-link
                            :to="`/visitstore/${store.id}/${store.title}`"
                        >
                            <button type="button" class="btn">
                                <b>{{ $t('visit') }}</b>
                            </button>
                        </router-link>
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
                        <ul
                            class="profile-body"
                            v-for="item in store.section"
                            :key="item.id"
                        >
                            <li class="categorystore">
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="sidebar">
                <div class="head">Section</div>
                <ul>
                    <li v-for="section in Sections" :key="section.id">
                        <a
                            ><label>{{ section.name }}</label
                            ><input type="checkbox"
                        /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
// import { defineAsyncComponent } from 'vue';
export default {
    name: 'stores',
    components: {
        // BodyStore: defineAsyncComponent(() =>
        //     import(`@/components/body/BodyStore.vue`)
        // ),
        // Cartmini: defineAsyncComponent(() =>
        //     import(`@/components/cart/Cartmini.vue`)
        // ),
    },
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
    },
    mounted() {
        this.$store.dispatch('loadStores');
    },
    methods: {
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
        gotoview: function () {
            this.$router.push(`visitStore`);
        },
    },
    created() {
        this.fetch();
    },
};
</script>

<style scoped>
.contain {
    background: linear-gradient(0.25turn, #536976, #bbd2c5);
}
.content {
    display: flex;
    flex: 1;
    gap: 10px;
    padding: 0 20px;
}
/* sidebar */
.sidebar {
    width: 25%;
    height: auto;
    order: 3;
    padding: 0;
    margin: 0;
    right: 0;
    background: linear-gradient(135deg, #e3e2e2, #777);
}
.sidebar .head {
    color: #536976;
    font-size: 20px;
    font-weight: 600;
    padding: 30px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 3px;
}
.sidebar ul {
    list-style: none;
    text-align: right;
}
.sidebar ul li {
    display: block;
}
.sidebar ul li a {
    padding: 10px auto;
    text-decoration: none;
    display: block;
    font-size: 18px;
    letter-spacing: 1px;
    position: relative;
    transition: 0.3s;
    overflow: hidden;
    text-transform: capitalize;
}
.sidebar ul li a input {
    width: 70px;
    font-size: 18px;
    text-align: center;
    padding-right: 0;
    cursor: pointer;
}
.sidebar ul li a:hover,
a:active {
    color: #536976;
}
@media (max-width: 750px) {
}
/* store */
.store {
    flex: 1;
    order: 2;
}
.store .card {
    margin: auto auto 10px auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(0.25turn, #bbd2c5, #536976);
    color: #000;
    text-align: center;
    padding: 2em;
}
.store .card .profile-sidebar {
    /* margin: auto; */
}
.store .card .profile-sidebar img {
    border-radius: 50%;
    border: 4px solid white;
    top: 0;
}
.store .card .profile-main .profile-name {
    font-size: 2rem;
    line-height: 1.1;
    letter-spacing: 1px;
}
.store .card .profile-main .profile-name:hover {
    letter-spacing: 5px;
}
.store .card .profile-main .profile-name::after {
    content: '';
    display: block;
    height: 1px;
    width: 2em;
    background: #0c505c;
    opacity: 0.8;
    margin: 0.7em auto 0.5em;
    opacity: 0.35;
}
.store .card .profile-main .profile-position {
    margin: 0;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 3px;
    color: #0c505c;
    margin-bottom: 2em;
}
.store .card .profile-main .profile-body {
    font-weight: 300;
    opacity: 0.8;
    margin-bottom: 0;
    list-style: none;
    display: inline-flex;
    margin: auto;
}
.store .card .profile-sidebar button {
    border-radius: 4px;
    background-color: #0c505c;
    border: none;
    color: #fff;
    text-align: center;
    font-size: 12px;
    padding: 10px;
    width: 100px;
    transition: all 0.5s;
    cursor: pointer;
    margin-top: 40%;
    box-shadow: -2px -2px 8px #000;
    bottom: 0;
}
.store .card .profile-sidebar button:active {
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
    color: #0c505c;
    opacity: 0.6;
    font-size: 1.125rem;
    cursor: pointer;
}
.store .card .social a:hover,
.store .card .social a:focus {
    opacity: 1;
}
/* use reverse flexbox to take advantage of flex-direction: reverse */
.star-rating {
    display: flex;
    align-items: center;
    width: 160px;
    flex-direction: row-reverse;
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
@media (min-width: 600px) {
    .store .card {
        flex-direction: row;
    }
}
.banar {
    order: 1;
    width: 20%;
}
.banar img {
    margin: auto auto 30px auto;
}
@media (max-width: 1000px) {
    .banar {
        display: none;
    }
    .sidebar {
        width: 30%;
    }
}
</style>

<style lang="scss" scoped>
.board {
    margin-top: 20px;
    margin-bottom: 20px;
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
