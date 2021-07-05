<template>
    <div>
        <section class="home">
            <div class="container text-white pb-5">
                <div class="row">
                    <div class="col-lg-4 col-md-8 col-sm-12 col-12">
                        <h1>
                            Dr.
                            <span style="rgb(248,70,129)"
                                >{{ doctorID.first_name }}
                                {{ doctorID.last_name }}</span
                            >
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="about">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-6">
                        <img
                            src="../../../../public/img/doctor.png"
                            class="img-fluid"
                            style="border-radius: 40px"
                        />
                    </div>
                    <div class="col-lg-6 text-center">
                        <h1
                            class="py-5 text-center"
                            style="color: palevioletred"
                        >
                            About Us
                        </h1>
                        <p class="text-center pl-5">
                            {{ doctorID.description }}
                        </p>
                        <div class="mt-2">
                            <img
                                class="location mr-2"
                                src="../../../../public/img/location.png"
                                height="15"
                            />
                            <img
                                class="phone mr-2"
                                src="../../../../public/img/phone.png"
                                height="15"
                            />
                            <i class="whatsapp fab fa-whatsapp"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="menu mt-4">
            <h1 class="heading"><span>Specialty</span></h1>
            <div class="box-container">
                <div
                    class="box"
                    v-for="item in doctorID.specialty"
                    :key="item.id"
                >
                    <img src="../../../../public/img/doctor.png" alt="" />
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </section>
        <section class="meals mt-4">
            <h1 class="heading"><span>Medicaldevice</span></h1>
            <div class="box-container">
                <div
                    class="box"
                    v-for="item in doctorID.medical_device"
                    :key="item.id"
                >
                    <img src="../../../../public/img/doctor.png" alt="" />
                    <h3>{{ item.name }}</h3>
                    <p>
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </section>
        <section class="meals mt-4">
            <h1 class="heading"><span>Hospital</span></h1>
            <div class="box-container">
                <div class="box">
                    <img src="../../../../public/img/doctor.png" alt="" />
                    <h3>Almazraa</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident quos soluta nemo ab, facilis ipsam quaerat
                        accusamus recusandae ut, dolore saepe culpa itaque sunt
                        id. Sed provident impedit voluptatibus tenetur?
                    </p>
                </div>
                <div class="box">
                    <img src="../../../../public/img/doctor.png" alt="" />
                    <h3>Almazraa</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident quos soluta nemo ab, facilis ipsam quaerat
                        accusamus recusandae ut, dolore saepe culpa itaque sunt
                        id. Sed provident impedit voluptatibus tenetur?
                    </p>
                </div>
                <div class="box">
                    <img src="../../../../public/img/doctor.png" alt="" />
                    <h3>Almazraa</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident quos soluta nemo ab, facilis ipsam quaerat
                        accusamus recusandae ut, dolore saepe culpa itaque sunt
                        id. Sed provident impedit voluptatibus tenetur?
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// import { mapState } from 'vuex';
// import data from '../../../jeson/data1';
import axios from 'axios';
export default {
    name: 'visitDoctor',
    props: ['id'],
    data() {
        return {
            rating: 0,
            doctorID: {},
            // doctor: data.doctor,
        };
    },
    computed: {
        // ...mapState(['doctor']),
    },
    mounted() {
        // this.$store.dispatch('loadDoctor', this.id);
    },
    async created() {
        await axios
            .get(`/api/doctor/getById/${this.$route.params.id}`)
            .then((res) => {
                console.warn('doctorID :', res.data);
                this.doctorID = res.data;
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    },
};
</script>

<style scoped>
* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border: none;
    text-transform: capitalize;
    transition: all 0.2s linear;
}
*::selection {
    background: var(--yellow);
    color: #fff;
}
.home {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),
        url(../../../../public/img/undrawdoctors.png) no-repeat;
    background-size: contain;
    background-position-x: right;
    width: 100%;
    padding: 180px 0;
}
/* section {
    min-height: 100vh;
    padding: 1rem 10%;
    padding-top: 8.5rem;
} */
.heading {
    text-align: center;
    font-size: 4rem;
    padding: 0 0.5rem;
    color: #333;
}
.heading span {
    color: var(--yellow);
}

@media (max-width: 991px) {
    .html {
        font-size: 55%;
    }
    .home::before,
    .home::after {
        display: none;
    }
}
@media (max-width: 768px) {
    .home .content {
        text-align: center;
    }
    .home .content h3 {
        font-size: 4.5rem;
    }
}
.menu .box-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.menu .box-container .box {
    height: 15rem;
    width: 20rem;
    margin: 2rem;
    cursor: pointer;
    overflow: hidden;
    position: relative;
}
.menu .box-container .box img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.menu .box-container .box h3 {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(204, 162, 24);
    text-align: center;
    font-size: 3rem;
    opacity: 0;
}
.menu .box-container .box:hover h3 {
    top: 50%;
    opacity: 1;
    transition-delay: 0.2s;
}
.menu .box-container .box::before {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, rgba(197, 157, 23, 0.753));
    transition: 0.2s linear;
}
.menu .box-container .box:hover:before {
    top: 0;
}
.meals .box-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.meals .box-container .box {
    background: #fff;
    width: 25rem;
    padding: 2rem;
    margin: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0.3rem 0.5rem rgba(184, 126, 20, 0.767);
    text-align: center;
}
.meals .box-container .box img {
    height: 20rem;
    width: 100%;
    object-fit: cover;
}
.meals .box-container .box h3 {
    color: #333;
    font-size: 3rem;
    font-weight: normal;
}
.meals .box-container .box p {
    color: #333;
    font-size: 1.5rem;
    font-weight: normal;
}
.meals .box-container .box .price {
    color: #666;
    font-size: 2.5rem;
}
.meals .box-container .box:hover {
    transform: scale(1.02);
    box-shadow: 0 1rem 1rem rgba(184, 126, 20, 0.767);
}
</style>
