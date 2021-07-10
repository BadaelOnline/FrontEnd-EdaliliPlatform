<template>
    <div class="container">
        <div class="row">
            <!-- col 1 -->
            <span class="slide1" id="btn"
                ><a><i class="fa fa-bars" @click="btnbar()"></i></a
            ></span>
            <div class="col-lg-6 col-md-8 col-sm-12 col-xs-12 stors">
                <div
                    v-for="doctor in filterSearch"
                    :key="doctor.id"
                    class="card mb-3 doctor"
                    style="max-width: 540px"
                >
                    <!-- <div class="card mb-3" style="max-width: 540px"> -->
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img
                                v-if="image"
                                :src="doctor.image"
                                alt="image"
                                height="100"
                                class="mt-3"
                            />
                            <img
                                v-else
                                src="../../../public/img/doctor.png"
                                alt="image"
                                height="100"
                                class="mt-3"
                            />
                            <div class="mt-2">
                                <img
                                    class="location mr-2"
                                    src="../../../public/img/location.png"
                                    height="15"
                                />
                                <img
                                    class="phone mr-2"
                                    src="../../../public/img/phone.png"
                                    height="15"
                                />
                                <i class="whatsapp fab fa-whatsapp"></i>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">
                                    {{ doctor.first_name }}
                                    {{ doctor.last_name }}
                                </h5>
                                <p class="card-text">
                                    {{ doctor.description }}
                                </p>
                                <p class="card-text">
                                    <router-link
                                        :to="`/visit_doctor/${doctor.id}/${doctor.first_name}`"
                                    >
                                        <button class="button">
                                            <span>Visit </span>
                                        </button>
                                    </router-link>
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
            <!-- col 3  -->
            <div class="col-lg-4 col-md-4 col-sm-5 col-xs-5 sidenav" id="menu">
                <div class="backdrop"></div>
                <div class="sidebar open" id="all">
                    <div>
                        <input
                            class="search mt-2 mb-2"
                            type="text"
                            name="search"
                            v-model="search"
                            placeholder="Search Doctor Name"
                        />
                    </div>
                    <span class="text-center bgcolor">{{
                        $t('Bydepartment')
                    }}</span>
                    <div>
                        <div class="bgcolor">hospital</div>
                        <div class="form-check checklist">
                            <ul>
                                <li v-for="items in Hospitals" :key="items.id">
                                    <label for="flexCheckChecked">{{
                                        items.name
                                    }}</label>
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
                                </li>
                            </ul>
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
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'doctors',
    data() {
        return {
            search: '',
        };
    },
    props: ['id', 'first_name', 'last_name', 'description', 'image'],
    methods: {
        btnbar: function () {
            document.getElementById('btn').classList.toggle('click');
            document.getElementById('menu').classList.toggle('show');
        },
    },
    computed: {
        ...mapState(['Doctors', 'Hospitals']),
        filterSearch() {
            return this.Doctors.filter((doctor) => {
                return doctor.first_name.match(this.search);
            });
        },
    },
    mounted() {
        this.$store.dispatch('loadDoctors');
        this.$store.dispatch('loadHospitals');
    },
};
</script>

<style scoped>
/* The side navigation menu */
.sidebar {
    margin: auto;
    padding: 0;
    width: 80%;
    height: 100%;
    border-radius: 7px;
    border: 1px solid #f5f5f0;
}
.bgcolor {
    background-color: #e0e0d1;
    border-radius: 3px;
    border: 1px solid #e0e0d1;
    margin: 10px 0;
    width: 100%;
}
.doctor {
    background-color: #ffffff;
    margin-bottom: 10px;
    border-radius: 0;
    box-shadow: 10px 10px 10px #adad85;
}
.doctor:hover {
    border: 1px solid #4b4141;
    border-radius: 7px;
    box-shadow: 3px 3px 3px 3px #7a7a52;
}
.sidenav {
    margin-bottom: 10px;
    border-radius: 0;
    box-shadow: 10px 10px 10px #adad85;
}
.sidenav:hover {
    border: 1px solid #ffffff;
    border-radius: 7px;
    box-shadow: 3px 3px 3px 3px #7a7a52;
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
    display: flex;
    justify-content: space-between;
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
@media (min-width: 200px) and (max-width: 500px) {
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
.checklist {
    background-color: #f5f5f0;
    border: 1px solid #f5f5f0;
    border-radius: 7px;
    box-shadow: 1px 1px 1px 1px #f5f5f0;
}
.star {
    color: #ffd200;
    list-style: none;
}
.fa-star:hover {
    color: #ffd200;
    box-shadow: 0 0 40px #eebe22;
}
.star {
    display: grid;
    justify-content: center;
}
.star div {
    display: flex;
    justify-content: center;
}
</style>
