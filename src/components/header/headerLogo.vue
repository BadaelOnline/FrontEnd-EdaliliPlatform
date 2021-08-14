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
        <div class="form-popup animate__animated animate__swing" id="myForm">
            <form action="/action_page.php" class="form-container">
                <h1>Log<span>in</span></h1>
                <span class="cancel" @click="closeForm()"
                    ><i class="fa fa-window-close"></i
                ></span>

                <label for="email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    v-model="form.email"
                    name="email"
                    required
                    ref="email"
                    @keyup="handleEmail()"
                />
                <div style="color: red" v-if="statusEmail == false">
                    <i class="fa fa-window-close"></i>
                    {{ form.error }}
                </div>
                <div style="color: green" v-if="statusEmail == true">
                    <i class="fa fa-check-square"></i>
                    correct Email
                </div>

                <label for="psw"><b>Password</b></label>

                <input
                    type="password"
                    id="myInput"
                    placeholder="Enter Password"
                    v-model="form.password"
                    name="psw"
                    ref="pass"
                    required
                    @keyup="handlePass()"
                />
                <input type="checkbox" @change="showPass()" /> Show Password
                <div style="color: red" v-if="statusPass == false">
                    <i class="fas fa-exclamation-triangle"></i>
                    Password must be more 7 characters
                </div>
                <div style="color: green" v-if="statusPass == true">
                    <i class="fa fa-check-square"></i>
                    Correct Password
                </div>
                <span @click="submit()" class="btn">Login</span>
                <span @click="registerForm()" class="btn">Register</span>
            </form>
        </div>
        <div class="form-popup2 animate__animated animate__swing" id="myForm2">
            <form
                action="/action_page.php"
                class="form-container2 form_register"
            >
                <h1>Regis<span>ter</span></h1>
                <span class="cancel" @click="closeForm()"
                    ><i class="fa fa-window-close"></i
                ></span>
                <span class="ret" @click="loginrForm()"
                    ><i class="fa fa-arrow-left"></i
                ></span>
                <label for="Name"><b>Name</b></label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    v-model="form.name"
                    name="Name"
                    required
                />
                <label for="email"><b>Email</b></label>
                <input
                    type="text"
                    ref="email2"
                    placeholder="Enter Email"
                    v-model="form.email"
                    name="email"
                    required
                    @keyup="handleEmail()"
                />
                <div style="color: red" v-if="statusEmail == false">
                    <i class="fa fa-window-close"></i>
                    {{ form.error }}
                </div>
                <div style="color: green" v-if="statusEmail == true">
                    <i class="fa fa-check-square"></i>
                    correct Email
                </div>

                <label for="psw"><b>Password</b></label>
                <input
                    type="password"
                    ref="pass2"
                    id="myInput2"
                    placeholder="Enter Password"
                    v-model="form.password"
                    name="psw"
                    required
                    @keyup="handlePass()"
                />
                <input type="checkbox" @change="showPass2()" /> Show Password
                <div style="color: red" v-if="statusPass == false">
                    <i class="fas fa-exclamation-triangle"></i>
                    Password must be more 7 characters
                </div>
                <div style="color: green" v-if="statusPass == true">
                    <i class="fa fa-check-square"></i>
                    Correct Password
                </div>
                <span @click="submit1()" class="btn">Register</span>
            </form>
        </div>
        <nav>
            <div class="nav_bar">
                <ul class="child_1">
                    <li class="hov lang2">
                        <span class="lang2 mr-2">
                            {{ $t('SearchScope') }}
                        </span>
                        <i class="fa fa-map-marker"></i>
                    </li>

                    <li class="hov">
                        <template v-if="authenticated" class="user">
                            <span @click.prevent="signOut" href="#" class="link"
                                >SignOut</span
                            >
                        </template>
                        <template v-else class="user">
                            <span class="mr-2" @click="openForm()">{{
                                $t('signin')
                            }}</span>
                            <i class="fa fa-user-circle shopping"> </i>
                        </template>
                    </li>
                    <li class="hov" v-if="authenticated">
                        <span class="mr-3">
                            {{ $t('Profile') }}
                        </span>
                        <i class="fa fa-user-circle shopping"> </i>
                    </li>
                    <li class="hov" @click="gotocart()">
                        <span class="cart-count">{{ cartItemCount }}</span>
                        <span class="mr-2">
                            {{ $t('Shoppingcart') }}
                        </span>
                        <i class="fa fa-shopping-cart shopping"></i>
                    </li>
                </ul>
                <div class="containt_select">
                    <div>
                        <select
                            class="cu_1"
                            v-model="lang"
                            @change="handleChange($event)"
                        >
                            <option value="en">English</option>
                            <option value="ar">العربية</option>
                        </select>
                        <!-- <span class="lang">{{ $t('lang') }}</span> -->
                    </div>
                    <div>
                        <select class="cu_2">
                            <option value="1" disabled>
                                {{ $t('Governorate') }}
                            </option>
                            <option
                                v-for="gover in governorates"
                                :key="gover.id"
                            >
                                {{ gover.name }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <select class="cu_3">
                            <option value="1" disabled>
                                {{ $t('City') }}
                            </option>
                            <option v-for="city in cities" :key="city.id">
                                {{ city.name }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <select class="cu_4">
                            <option value="1" disabled>
                                {{ $t('street') }}
                            </option>
                            <option v-for="street in streets" :key="street.id">
                                {{ street.name }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="logo">
                <img
                    @click="goto"
                    height="40"
                    src="../../../public/img/Group.png"
                />
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import jeson from '@/jeson/MOCK_DATA.json';
export default {
    name: 'headerLogo',
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
    color: var(--bl);
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
    top: 10%;
    left: 15px;
    border: 3px solid #959393;
    z-index: 9;
    font-size: 18px;
}
.form-popup h1 {
    font-size: 40px;
    color: var(--r);
}
.form-popup h1 span {
    font-size: 40px;
    color: var(--bl);
}
.form-popup span {
    font-size: 18px;
}
/* Add styles to the form container */
.form-container {
    width: 450px;
    padding: 10px;
    background-color: #c6c4c4;
    height: 521px;
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
    border: 1px solid var(--bl);
}

/* Set a style for the submit/login button */
.form-container .btn {
    background-color: var(--bl);
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
    background-color: var(--r);
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
     top: 10%;
    left: 15px;
    border: 3px solid #959393;
    z-index: 8;
    font-size: 18px;
}
.form-popup2 h1 {
    font-size: 40px;
    color: var(--r);
}
.form-popup2 h1 span {
    font-size: 40px;
    color: var(--bl);
}
.form-popup2 span {
    font-size: 18px;
}
/* Add styles to the form container */
.form-container2 {
    width: 450px;
    padding: 10px;
    background-color: #c6c4c4;
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
    border: 1px solid var(--bl);
}

/* Set a style for the submit/login button */
.form-container2 .btn {
    background-color: var(--bl);
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
    background-color: var(--r);
    color: #fff;
    padding: 5px 10px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
}
.form-container2 .ret {
    position: absolute;
    right: -2px;
    top: -2px;
    background-color: var(--bl);
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
    border-top: 16px solid var(--bl);
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
/* navbar */
nav {
    height: auto;
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: space-between;
    margin: auto;
}
nav .logo {
    width: 12%;
    margin-right: 20px;
}
nav .nav_bar {
    width: 88%;
    display: flex;
    margin-left: 20px;
}
nav img {
    margin-left: 20px;
    margin-top: 20px;
    float: left;
    cursor: pointer;
}
nav .containt_select {
    width: 58%;
    display: flex;
    justify-content: space-around;
}
nav ul {
    width: 40%;
    padding: 0;
    display: flex;
    justify-content: space-between;
}
nav ul li {
    display: inline-block;
    line-height: 80px;
    margin: 0 10px;
}
nav ul .hov {
    cursor: pointer;
    color: #fff;
}
nav ul .hov:hover {
    color: yellow;
}
nav ul li .cart-count {
    font-size: 13px;
    color: #fff;
    margin-left: 100px;
    height: 19px;
    width: 17px;
    font-size: 15px;
    font-weight: 900;
    position: absolute;
    margin-top: -10px;
}

select {
    display: inline-flex;
    background-color: #fff;
    border-radius: 15px;
    position: relative;
    height: 34px;
    margin-top: 23px;
    width: 100px;
    display: flex;
    justify-content: center;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    color: #1c2c34;
    z-index: 2;
    font-size: 15px;
    position: relative;
    line-height: 2.15;
    cursor: pointer;
}
.containt_select div {
    position: relative;
}
.containt_select div::after {
    font-family: 'Font Awesome 5 Free';
    content: '\f0d7';
    display: inline-block;
    vertical-align: middle;
    font-weight: 900;
    z-index: 2;
    font-size: 20px;
    position: absolute;
    left: 5px;
    top: 23px;
    color: #000;
    width: 0;
    height: 0;
}
.cu_1 {
    padding: 0px 22px;
}
.cu_2 {
    padding: 0 32px;
}
.cu_3 {
    padding: 0px 36px;
}

.cu_4 {
    padding: 0px 32px;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    nav {
        flex-direction: column;
    }
    nav .logo {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    nav .nav_bar {
        width: 100%;
        flex-direction: column;
    }
    nav .containt_select {
        width: 100%;
    }
    nav ul {
        width: 100%;
        justify-content: space-around;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    nav {
        flex-direction: column;
    }
    nav .logo {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    nav .nav_bar {
        width: 100%;
        flex-direction: column;
    }
    nav .containt_select {
        width: 100%;
    }
    nav ul {
        width: 100%;
        justify-content: space-around;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    nav {
        flex-direction: column;
    }
    nav .logo {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    nav .nav_bar {
        width: 100%;
        flex-direction: column;
    }
    nav .containt_select {
        width: 100%;
    }
    nav ul {
        width: 100%;
        justify-content: space-around;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    nav img {
        margin-left: 2px;
    }
}
</style>
