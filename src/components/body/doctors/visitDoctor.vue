<template>
    <div>
        <section class="home">
            <div class="container text-white pb-5">
                <div class="row">
                    <div class="col-lg-4 col-md-8 col-sm-12 col-12">
                        <h1>
                            Dr.
                            <span style="rgb(248,70,129)">NASHAAT ALARBED</span>
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
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Sunt voluptates nihil accusamus, quis nemo,
                            consequatur vero architecto deleniti velit atque
                            neque cum pariatur eos minus! Repellat laboriosam
                            eius eum mollitia.
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
    </div>
</template>

<script>
// import { mapState } from 'vuex';
// import data from '../../../jeson/data1';
export default {
    name: 'visitDoctor',
    props: ['id'],
    data() {
        return {
            rating: 0,
            // doctor: data.doctor,
        };
    },
    computed: {
        // ...mapState(['doctor']),
    },
    mounted() {
        // this.$store.dispatch('loadDoctor', this.id);
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
    background-size: 100% 100%;
    width: 100%;
    padding: 180px 0;
}
</style>
