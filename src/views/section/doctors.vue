<template>
    <div class="container">
        <div class="row">
            <!-- col 1 -->
            <span class="slide" id="btn">
                <a>
                    <i class="fa fa-bars" @click="btnbar()"></i>
                </a>
            </span>
            <div class="col-lg-6 col-md-8 col-sm-12 col-xs-12 stors">
                <div
                    v-for="doctor in Doctors"
                    :key="doctor.id"
                    class="card mb-3"
                    style="max-width: 540px"
                >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img
                                src="../../../public/img/aa.jpg"
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
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 sidenav" id="menu">
                <div class="backdrop"></div>
                <div class="sidebar">
                    <div>
                        <input type="text" placeholder="Search Doctor Name" />
                    </div>
                    <div>
                        <div>Medical Device</div>
                        <div>
                            <div class="form-check">
                                <ul>
                                    <li
                                        v-for="items in MedicalDevice"
                                        :key="items.id"
                                    >
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
                                            >{{ items.name }}</label
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>hospital</div>
                        <div class="form-check">
                            <ul>
                                <li v-for="items in Hospitals" :key="items.id">
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
                                        items.name
                                    }}</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>specialty</div>
                        <div class="form-check">
                            <ul>
                                <li v-for="items in Specialty" :key="items.id">
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
                                        items.name
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
import { mapState } from 'vuex';
// import data from '../../jeson/data1';
export default {
    name: 'doctors',
    data() {
        return {
            // doctor: data.doctor,
            // medicaldevice: data.medicaldevice,
            // hospital: data.hospital,
            // specialty: data.specialty,
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
        ...mapState(['Doctors', 'MedicalDevice', 'Hospitals', 'Specialty']),
    },
    mounted() {
        this.$store.dispatch('loadDoctors');
        this.$store.dispatch('loadMedicalDevice');
        this.$store.dispatch('loadHospitals');
        this.$store.dispatch('loadSpecialty');
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
    /* position: fixed; */
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
/* @media (max-width: 1199px) {
    .slide {
        display: none;
    }
    .backdrop {
        display: none;
    }
} */
@media (min-width: 1200px) {
    .slide {
        display: none;
    }
    .backdrop {
        display: none;
    }
}
@media (max-width: 1199px) {
    .bannerimage {
        display: none;
    }
    input[type='checkbox'] {
        right: 20px;
    }
    label {
        left: 0px;
    }
    .slide {
        display: none;
    }
}
@media (max-width: 768px) {
    .bannerimage {
        display: none;
    }
    .slide {
        display: none;
    }
    /* .sidenav {
        overflow-y: auto;
        white-space: nowrap;
    }
    .sidebar {
        position: absolute;
        width: 200px;
        right: -15px;
        height: 50%;
        transition: right 0.4s ease;
    }
    .slide {
        position: absolute;
        top: 0;
        margin-left: 50%;
        height: 45px;
        width: 45px;
        cursor: pointer;
        transition: right 0.4s ease-in-out;
    }
    .slide.click {
        right: 100px;
    }
    .slide .fa-bars {
        color: #000000;
    }
    .slide.click .fa-bars:before {
        content: '\f00d';
    }
    .stors {
        width: 100%;
    } */
}
@media (max-width: 500px) {
    .bannerimage {
        display: none;
    }
    .sidenav {
        display: none;
    }
    .slide {
        display: none;
    }
    /* .sidenav {
        overflow-y: auto;
        white-space: nowrap;
    }
    .sidebar {
        position: absolute;
        width: 200px;
        right: -15px;
        height: 50%;
        transition: right 0.4s ease;
    }
    .slide {
        position: absolute;
        top: 0;
        margin-left: 50%;
        height: 45px;
        width: 45px;
        cursor: pointer;
        transition: right 0.4s ease-in-out;
    }
    .slide.click {
        right: 100px;
    }
    .slide .fa-bars {
        color: #000000;
    }
    .slide.click .fa-bars:before {
        content: '\f00d';
    } */
}
</style>
