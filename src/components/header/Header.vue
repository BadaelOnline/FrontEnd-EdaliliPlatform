<template>
    <div class="header">
        <div
            v-if="!authenticated"
            class="content_loader hidden"
            id="content_loader"
        >
            <div id="loader" class="loader"></div>
        </div>

        <div
            v-if="authenticated"
            class="alert animate__animated animate__swing"
            id="alert"
        >
            <i
                class="fa fa-check-square"
                style="font-size: 22px; margin: 10px"
            ></i>
            <span>Success Login</span>
        </div>
        <headerLogo class="navlogo" />
        <navbarHeader class="navbar" />
        <banarHeader />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import jeson from '@/jeson/MOCK_DATA.json';
import banarHeader from '@/components/header/banarHeader.vue';
import headerLogo from '@/components/header/headerLogo.vue';
import navbarHeader from '@/components/header/navbarHeader.vue';
export default {
    name: 'Header',
    components: {
        headerLogo,
        banarHeader,
        navbarHeader,
    },
    props: ['title', 'description', 'id', 'price'],
    data() {
        const lang = localStorage.getItem('lang') || 'en';
        const token = localStorage.getItem('token');
        const server = localStorage.getItem('server') || 'admin';
        return {
            lang: lang,
            server: server,
            token: token,
            form: {
                name: '',
                email: '',
                password: '',
                error: '',
            },
            reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
            statusEmail: null,
            statusPass: null,
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
        showPass() {
            var x = document.getElementById('myInput');
            if (x.type === 'password') {
                x.type = 'text';
            } else {
                x.type = 'password';
            }
        },
        showPass2() {
            var x = document.getElementById('myInput2');
            if (x.type === 'password') {
                x.type = 'text';
            } else {
                x.type = 'password';
            }
        },
        openForm() {
            document.getElementById('myForm').style.display = 'block';
            document.getElementById('myForm2').style.display = 'block';
            document.getElementById('myForm2').classList.add('animate__swing');
            document.getElementById('myForm').classList.add('animate__swing');
        },
        closewarn() {
            document.getElementById('warn').style.display = 'none';
        },
        registerForm() {
            document.getElementById('myForm').style.zIndex = 8;
            document.getElementById('myForm2').style.zIndex = 9;
        },
        loginrForm() {
            document.getElementById('myForm').style.zIndex = 9;
            document.getElementById('myForm2').style.zIndex = 8;
        },
        closeForm() {
            document
                .getElementById('myForm2')
                .classList.add('animate__fadeOut');
            document.getElementById('myForm').classList.add('animate__fadeOut');
            setTimeout(function () {
                document
                    .getElementById('myForm2')
                    .classList.remove('animate__fadeOut');
                document
                    .getElementById('myForm')
                    .classList.remove('animate__fadeOut');
                document.getElementById('myForm').style.display = 'none';
                document.getElementById('myForm2').style.display = 'none';
            }, 1000);
        },
        gotocart() {
            this.$router.push(`/Cart`);
        },
        goto: function () {
            this.$router.push(`/`);
        },
        showfut() {
            document.getElementById('fut').classList.toggle('show');
        },

        handleChange(event) {
            localStorage.setItem('lang', event.target.value);
            window.location.reload();
        },
        handleEmail() {
            if (this.form.email == null || this.form.email == '') {
                this.statusEmail = false;
                this.form.error = 'Please Enter Email';

                this.$refs.email.style.border = '1px solid red';
                this.$refs.email2.style.border = '1px solid red';
            } else if (!this.reg.test(this.form.email)) {
                this.statusEmail = false;
                this.form.error = 'Please Enter Correct Email';
                this.$refs.email.style.border = '1px solid red';
                this.$refs.email2.style.border = '1px solid red';
            } else if (this.reg.test(this.form.email)) {
                this.statusEmail = true;
                this.$refs.email.style.border = '1px solid green';
                this.$refs.email2.style.border = '1px solid green';
            }
        },
        handlePass() {
            if (this.form.password.length < 8) {
                this.statusPass = false;
                this.$refs.pass.style.border = '1px solid red';
                this.$refs.pass2.style.border = '1px solid red';
            } else {
                this.statusPass = true;
                this.$refs.pass.style.border = '1px solid green';
                this.$refs.pass2.style.border = '1px solid green';
            }
        },
        handleserver(event) {
            localStorage.setItem('server', event.target.value);
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
                    if (localStorage.getItem('token') == null) {
                        document
                            .getElementById('content_loader')
                            .classList.add('hidden');
                    }
                }, 1000);
                this.$router.replace({
                    name: 'home',
                });
            });
        },
        ...mapActions({
            signIn: 'signIn',
            register: 'register',
        }),
        submit() {
            if (this.statusEmail == true && this.statusPass == true) {
                this.signIn(this.form);

                document
                    .getElementById('content_loader')
                    .classList.remove('hidden');
                setTimeout(function () {
                    document.getElementById('alert').style.display = 'none';
                }, 5000);
            }
        },
        submit1() {
            if (this.statusEmail == true && this.statusPass == true) {
                this.register(this.form);
                document
                    .getElementById('content_loader')
                    .classList.remove('hidden');

                setTimeout(function () {
                    document
                        .getElementById('content_loader')
                        .classList.add('hidden');
                }, 3000);
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            }
        },
    },
};
</script>

<style scoped>
* {
    font-size: 15px;
}
.alert {
    justify-content: center;
    font-size: 18px;
    left: 35%;
    position: fixed;
    top: 41%;
    z-index: 77;
    width: 400px;
    height: 68px;
    background-color: #a7d9a7;
    color: #017701;
    border-radius: 7px;
}
.cu5 {
    position: fixed;
    z-index: 10;
}
.warnig_pass {
    color: red;
    display: none;
}
/* ____________________________________ form sign popup  _______________________________ */
/* The popup form - hidden by default */
.form-popup {
    display: none;
    position: fixed;
    bottom: 0;
    right: 15px;
    border: 3px solid #959393;
    z-index: 9;
    font-size: 18px;
}
.form-popup h1 {
    font-size: 40px;
    color: var(--red);
}
.form-popup h1 span {
    font-size: 40px;
    color: var(--blue);
}
.form-popup span {
    font-size: 18px;
}
/* Add styles to the form container */
.form-container {
    width: 450px;
    padding: 10px;
    background-color: #a6a1a1;
    height: 516px;
}
/* Full-width input fields */
.form-container input[type='text'],
.form-container input[type='password'] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
}
/* When the inputs get focus, do something */
.form-container input[type='text']:focus,
.form-container input[type='password']:focus {
    background-color: #ddd;
    outline: none;
}
/* Set a style for the submit/login button */
.form-container .btn {
    background-color: var(--blue);
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-bottom: 10px;
    opacity: 0.8;
}
/* Add a red background color to the cancel button */
.form-container .cancel {
    position: absolute;
    left: -2px;
    top: -2px;
    background-color: var(--red);
    color: #fff;
    padding: 5px 10px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
}
/* Add some hover effects to buttons */
.form-container .btn:hover {
    opacity: 1;
}
/* ____________________________________ form register popup  _______________________________ */
/* The popup form - hidden by default */
.form-popup2 {
    display: none;
    position: fixed;
    bottom: -6px;
    right: 15px;
    border: 3px solid #959393;
    z-index: 8;
    font-size: 18px;
}
.form-popup2 h1 {
    font-size: 40px;
    color: var(--red);
}
.form-popup2 h1 span {
    font-size: 40px;
    color: var(--blue);
}
.form-popup2 span {
    font-size: 18px;
}
/* Add styles to the form container */
.form-container2 {
    width: 450px;
    padding: 10px;
    background-color: #a6a1a1;
    height: 521px;
}
/* Full-width input fields */
.form-container2 input[type='text'],
.form-container2 input[type='password'] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
}
/* When the inputs get focus, do something */
.form-container2 input[type='text']:focus,
.form-container2 input[type='password']:focus {
    background-color: #ddd;
    outline: none;
}
/* Set a style for the submit/login button */
.form-container2 .btn {
    background-color: var(--blue);
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-bottom: 10px;
    opacity: 0.8;
}
/* Add a red background color to the cancel button */
.form-container2 .cancel {
    position: absolute;
    left: -2px;
    top: -2px;
    background-color: var(--red);
    color: #fff;
    padding: 5px 10px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
}
.form-container2 .ret {
    position: absolute;
    right: -2px;
    top: -2px;
    background-color: var(--blue);
    color: #fff;
    padding: 5px 10px;
    border-bottom-left-radius: 20px;
    cursor: pointer;
}
/* Add some hover effects to buttons */
.form-container2 .btn:hover {
    opacity: 1;
}
/* ____________________________________ loading  _______________________________ */
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
    position: fixed;
    right: 600px;
    top: 270px;
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
/* header */
.header {
    background-color: #c0c4c7;
    height: auto;
    margin: 0;
    padding: 0;
}
.navlogo {
    background-color: #1c2c34;
}
.navbar {
    background-color: #243035;
    /* opacity: 70; */
}
.background {
    display: grid;
    align-content: space-between;
    padding-top: 50px;
    padding-bottom: 10px;
    text-align: center;
    position: relative;
    height: 800px;
    width: 100%;
    background-image: url('../../../public/img/Screenshot_2020-10-17 E-DALELY Design.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.background .search {
    display: flex;
    justify-content: center;
    padding-top: 50px;
}
.background .input {
    border: none;
    width: 400px;
    height: 34px;
}
.background .search i {
    padding: 10px 10px;
    width: 35px;
    height: 34px;
    cursor: pointer;
}
.parent_featuers {
    border: solid #c3c4c8;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin: auto;
    height: auto;
    width: 60%;
    background-color: #c3c4c8;
    color: #525052f6;
}
.child_1,
.child_2,
.child_3,
.child_4,
.child_5 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 10px auto;
    cursor: pointer;
}
.parent_featuers div:hover {
    color: #6798a6;
}
.child_2 .cart-count {
    font-size: 13px;
    color: #ba8b00;
    background: #ffffff;
    height: 19px;
    border-radius: 50%;
    width: 17px;
    justify-content: center;
    align-items: center;
}
.background .search .shopping {
    color: #6798a6;
}
@media (max-width: 767px) {
    .parent_featuers {
        gap: 15px;
        width: 80%;
    }
}
</style>
