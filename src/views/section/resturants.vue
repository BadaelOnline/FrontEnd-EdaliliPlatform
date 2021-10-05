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
                <label for="name" class="form__label">{{
                    $t('searchRes')
                }}</label>
            </div>
        </div>
        <div class="img_boarder">
            <br />
            <img src="../../../public/img/spoon.png" style="width: 200px" />
        </div>

        <div v-if="filterSearch.length > 0" class="top_title">
            <h2>{{ $t('famouseResturant') }}</h2>
        </div>
        <div v-else-if="filterSearch.length == 0" class="top_title2">
            <h2>
                <i
                    class="fas fa-exclamation-triangle"
                    style="margin: 0 30px"
                ></i
                >No Result Founded
            </h2>
        </div>
        <div
            class="filter"
            v-for="restaurant in filterSearch.slice(0, 1)"
            :key="restaurant.id"
        >
            <div
                class="menu"
                :style="[
                    restaurant.image !== ''
                        ? {
                              background:
                                  'url(' +
                                  restaurant.image +
                                  ') center no-repeat',
                              backgroundSize: 'cover',
                          }
                        : {
                              background: `url(${backgroundUrl}) center no-repeat`,
                              backgroundSize: 'cover',
                          },
                ]"
            >
                <div class="title">{{ restaurant.title }}</div>

                <div
                    @click="VisitStore(item.id)"
                    class="button1"
                    title="visit this store"
                >
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <router-link :to="`/visitrestaurant/${restaurant.id}/${restaurant.title}`">
                        <span
                            style="
                                margin: 0 50px;
                                color: #fffb1f;
                                font-size: 20px;
                                letter-spacing: 2px;
                            "
                            >Visit
                        </span></router-link
                    >
                </div>
            </div>
        </div>

        <div class="top_title">
            <h2>More Resturant</h2>
        </div>
        <main v-if="Restaurants.length > 0" class="main">
            <div
                v-for="restaurant in Restaurants"
                :key="restaurant"
                class="resturant"
                id="menu"
                :style="[
                    restaurant.image !== ''
                        ? {
                              background:
                                  'url(' +
                                  restaurant.image +
                                  ') center no-repeat',
                              backgroundSize: 'cover',
                          }
                        : {
                              background: `url(${backgroundUrl}) center no-repeat`,
                              backgroundSize: 'cover',
                          },
                ]"
            >
                <div class="resturant_contain">
                    <div class="title">{{ restaurant.title }}</div>
                    <div>
                        <p style="color: #fff">
                            {{ restaurant.short_description }}
                        </p>
                    </div>
                    <div>
                        <router-link :to="`/visitrestaurant/${restaurant.id}/${restaurant.title}`">
                            <button class="button">
                                <span>Visit </span>
                            </button></router-link
                        >
                    </div>
                </div>
            </div>
        </main>
        <div class="unavaible_product" v-else>
            <img src="../../../public/img/unavalible.jpg" />
            <h2>Ops... Restuarant not available.</h2>
        </div>
    </div>
</template>

<script>
import data from '../../jeson/data';
import { mapState } from 'vuex';
import backgroundUrl from '../../../public/img/img4.jpg';
export default {
    name: 'resturants',
    props: ['id', 'title', 'image', 'short_des', 'long_des', 'Meals', 'Menu'],
    data() {
        return {
            backgroundUrl,
            restaurants: data.restaurants,
            Menus: data.Menu,
            Meal: data.Meals,
            search: '',
            rating: 0,
        };
    },
    methods: {
        btnbar: function () {
            document.getElementById('btn').classList.toggle('click');
            document.getElementById('menu').classList.toggle('show');
        },
    },
    computed: {
        filterSearch() {
            return this.Restaurants.filter((Restaurant) => {
                var regex = new RegExp(this.search, 'i');
                return Restaurant.title.match(regex);
            });
        },
        ...mapState(['Restaurants']),
    },
    mounted() {
        this.$store.dispatch('loadRestaurants');
    },
};
</script>

<style scoped>
.contian {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #d1a776
        url(data:image/png;base64,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)
        center / 5000px 100px;
}
.img_boarder {
    position: absolute;
    right: 10%;
    top: 37%;
}
.top_title {
    width: 100%;
    margin: 0 0 30px 0;
    display: flex;
    justify-content: center;
}
.top_title h2 {
    background-color: #000000ad;
    padding: 10px;
    border-top-left-radius: 207px;
    border-top-right-radius: 39px;
    border-bottom-right-radius: 176px;
    border-bottom-left-radius: 44px;
    color: #cec421;
    text-shadow: 3px 5px 10px #b3a21c;
    box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px #0f0f0f,
        inset 0px 0px 4px rgba(17, 17, 17, 0.2),
        inset 7px 7px 15px rgba(55, 84, 170, 0),
        inset -7px -7px 20px rgba(255, 255, 255, 0),
        0px 0px 4px rgba(255, 255, 255, 0);
}
.filter {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
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
.famouse_content {
    display: flex;
    justify-content: center;
}
.famouse_content .title {
    color: #fff;
    font-size: 30px;
    background-color: #000000ad;
}
.main {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin: auto;
    justify-content: center;
    align-items: center;
}
.resturant {
    margin-bottom: 40px;
    border-radius: 0;
    box-shadow: 10px 10px 10px #4d4c4c;
    width: 45%;
    height: 250px;
}
.resturant_contain {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #000000ad;
    overflow: hidden;
    height: 50px;
}
.resturant .title {
    color: #cec421;
    font-size: 30px;
    text-shadow: 3px 5px 10px #b3a21c;
}
.resturant_contain:hover {
    animation: animate 0.5s forwards;
}
@keyframes animate {
    0% {
        height: 50px;
    }
    100% {
        height: 250px;
    }
}
.button {
    border-radius: 4px;
    background-color: #be981c;
    border: none;
    color: #fff;
    text-align: center;
    font-size: 15px;
    padding: 10px;
    width: 100px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
}
.unavaible_product {
    background-color: #ecf0f1;
    height: auto;
    width: 100%;
}
.unavaible_product img {
    margin-bottom: 25px;
}
.unavaible_product h2 {
    font-size: 3em;
    color: gray;
}
</style>
<style lang="scss" scoped>
.board {
    margin: 0 auto 175px auto;
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
    // The plant
    &:before {
        content: '';
        position: absolute;
        background: url('https://img.teleflora.com/images/o_0/l_flowers:TPL08-1A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/TPL08-1A/Teleflora&#039;sLushLeavesPothosPlant')
            center / contain no-repeat;
        width: 250px;
        height: 300px;
        left: 0;
        top: 30%;
        filter: drop-shadow(20px 10px 20px rgba(0, 0, 0, 0.3));
    }
}
/* ______________________________________________________________________________ */
$primary: #cec421;
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
    background: #bfbfd7;
    margin: 50px 0;
    border-radius: 10px;
    width: 80%;
    height: 300px;
    cursor: pointer;
    box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15),
        -7px -7px 20px rgb(15, 15, 15), inset 0px 0px 4px rgba(17, 17, 17, 0.2),
        inset 7px 7px 15px rgba(55, 84, 170, 0),
        inset -7px -7px 20px rgba(255, 255, 255, 0),
        0px 0px 4px rgba(255, 255, 255, 0);

    &:hover {
        opacity: 0.9;

        .button1 {
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
    background: #000000ad;
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
    background-color: #000000ad;
    color: #cec421;
    font-size: 30px;
}
.fa-star {
    color: #fff;
}
.checked {
    color: #dcd741;
}
</style>
