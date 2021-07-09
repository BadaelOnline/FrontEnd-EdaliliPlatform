<template>
    <div class="container">
        <div class="row">
            <!-- col 1 -->
            <span class="slide1" id="btn">
                <a>
                    <i class="fa fa-bars" @click="btnbar()"></i>
                </a>
            </span>
            <div class="col-lg-6 col-md-8 col-sm-12 col-xs-12 stors">
                <div
                    v-for="restaurant in filterSearch"
                    :key="restaurant.id"
                    class="card mb-3"
                    style="max-width: 540px"
                >
                    <div class="row g-0">
                        <div class="col-md-4 m-auto">
                            <img
                                class="imgprofile"
                                :src="restaurant.image"
                                alt="image"
                                height="70"
                            />
                            <div class="mt-3 socialmedia">
                                <img
                                    class="location mr-2 i"
                                    src="../../../public/img/location.png"
                                    height="15"
                                />
                                <img
                                    class="phone mr-2 i"
                                    src="../../../public/img/phone.png"
                                    height="15"
                                />
                                <i class="whatsapp fab fa-whatsapp i"></i>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">
                                    {{ restaurant.title }}
                                </h5>
                                <p class="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p class="card-text">
                                    <router-link
                                        :to="{
                                            name: 'visitRestaurant',
                                            params: {
                                                id: restaurant.id,
                                                title: restaurant.title,
                                                image: restaurant.image,
                                                short_des: restaurant.short_des,
                                                long_des: restaurant.long_des,
                                                Meals: restaurant.Meals,
                                                Menu: restaurant.Menu,
                                            },
                                        }"
                                        ><button class="button">
                                            <span>Visit </span>
                                        </button></router-link
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- col 2 -->
            <div class="col-sm-2 bannerimage">
                <img
                    src="../../../public/img/img5.jpg"
                    height="45%"
                    width="100%"
                />
                <img
                    src="../../../public/img/img6.jpg"
                    height="45%"
                    width="100%"
                />
            </div>
            <!-- col 3 -->
            <div class="col-lg-4 col-md-4 col-sm-5 col-xs-5 sidenav" id="menu">
                <div class="backdrop"></div>
                <div class="sidebar open" id="all">
                    <div>
                        <input
                            class="search mt-2 mb-2"
                            type="text"
                            name="search"
                            v-model="search"
                            placeholder="Search Restaurant Name"
                        />
                    </div>
                    <div>
                        <div>Menu</div>
                        <div>
                            <div class="form-check">
                                <ul>
                                    <li v-for="items in Menus" :key="items.id">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckChecked"
                                            style="
                                                border: 2px dotted #00f;
                                                display: block;
                                            "
                                        />
                                        <label
                                            class="mr-5"
                                            for="flexCheckChecked"
                                            >{{ items.title }}</label
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Meals</div>
                        <div class="form-check">
                            <ul>
                                <li v-for="items in Meal" :key="items.id">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        style="
                                            border: 2px dotted #00f;
                                            display: block;
                                        "
                                    />
                                    <label for="flexCheckChecked">{{
                                        items.title
                                    }}</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../../jeson/data';
export default {
    name: 'resturants',
    props: ['id', 'title', 'image', 'short_des', 'long_des', 'Meals', 'Menu'],
    data() {
        return {
            restaurants: data.restaurants,
            Menus: data.Menu,
            Meal: data.Meals,
            search: '',
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
            return this.restaurants.filter((restaurant) => {
                return restaurant.title.match(this.search);
            });
        },
    },
};
</script>

<style scoped>
/* The side navigation menu */
.sidebar {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #f1f1f1;
    height: 100%;
    overflow: auto;
}

/* Sidebar links */
.sidebar div {
    display: block;
    color: black;
    padding: 10px;
}
.form-check ul li {
    text-decoration: none;
    list-style: none;
}
input[type='checkbox'] {
    right: 40px;
}
.sidebar ul li:hover {
    color: #555;
}
.button {
    border-radius: 4px;
    background-color: #be981c;
    border: none;
    color: #141414;
    text-align: center;
    font-size: 15px;
    /* padding: 20px; */
    width: 100px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
}

.button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.button span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}

.button:hover span {
    padding-right: 25px;
}
.button:hover span:after {
    opacity: 1;
    right: 0;
}
@media (min-width: 1200px) {
    .slide {
        display: none;
    }
    .backdrop {
        display: none;
    }
    .slide1 {
        display: none;
    }
}
@media (min-width: 769px) and (max-width: 1199px) {
    .bannerimage {
        display: none;
    }
    input[type='checkbox'] {
        right: 20px;
    }
    label {
        left: 0px;
    }
    .slide1 {
        display: none;
    }
}
@media (min-width: 500px) and (max-width: 768px) {
    .bannerimage {
        display: none;
    }
    input[type='checkbox'] {
        right: 20px;
    }
    label {
        left: 0px;
    }
    .slide1 {
        position: absolute;
        right: 10px;
        height: 45px;
        width: 45px;
        cursor: pointer;
        transition: right 0.4s ease;
    }
    .sidenav.show {
        right: 10px;
    }
    .sidenav {
        position: absolute;
        width: 50%;
        right: -400px;
        height: 80%;
        margin-top: 20px;
        transition: right 0.4s ease;
    }
    .slide1 .fa-bars {
        color: #000000;
    }
    .slide1.click .fa-bars:before {
        content: '\f00d';
    }
    .sidebar {
        overflow-y: auto;
        white-space: nowrap;
    }
}
@media (min-width: 200px) and (max-width: 499px) {
    .bannerimage {
        display: none;
    }
    input[type='checkbox'] {
        right: 20px;
    }
    label {
        left: 0px;
    }
    .slide1 {
        position: absolute;
        /* left: 30px; */
        /* top: 800px; */
        right: 20px;
        height: 45px;
        width: 45px;
        cursor: pointer;
        transition: right 0.4s ease;
    }
    .sidenav.show {
        right: 10px;
    }
    .sidenav {
        position: absolute;
        width: 80%;
        right: -400px;
        height: 80%;
        margin-top: 20px;
        transition: right 0.4s ease;
    }
    .slide1 .fa-bars {
        color: #000000;
    }
    .slide1.click .fa-bars:before {
        content: '\f00d';
    }
    .sidebar {
        overflow-y: auto;
        white-space: nowrap;
    }
    .stors {
        margin-top: 20px;
    }
}
.search {
    width: 130px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}
.search:focus {
    width: 100%;
}
.imgprofile {
    transition: all 0.4s ease-in-out;
}
.imgprofile:hover {
    transform: scale(1.5);
    cursor: pointer;
}
.socialmedia .i {
    transition: all 0.4s ease-in-out;
}
.socialmedia .i:hover {
    cursor: pointer;
    transform: scale(1.5);
}
</style>
