<template>
    <div>
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
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
                <i class="fa fa-bars"></i>
            </label>
            <img
                @click="goto"
                height="30"
                src="../../../public/img/EDALELYLogo.png"
            />
            <ul class="child_1">
                <li class="customer-select cu1">
                    <selects v-model="lang" @change="handleChange($event)">
                        <option value="en">English</option>
                        <option value="ar">العربية</option>
                    </selects>
                    <!-- <span class="lang">{{ $t('lang') }}</span> -->
                </li>
                <li class="customer-select cu2">
                    <select>
                        <option value="1" disabled>
                            {{ $t('Governorate') }}
                        </option>
                        <option v-for="gover in governorates" :key="gover.id">
                            {{ gover.name }}
                        </option>
                    </select>
                </li>
                <li class="customer-select cu2">
                    <select>
                        <option value="1" disabled>
                            {{ $t('City') }}
                        </option>
                        <option v-for="city in cities" :key="city.id">
                            {{ city.name }}
                        </option>
                    </select>
                </li>
                <li class="customer-select cu2">
                    <select>
                        <option value="1" disabled>
                            {{ $t('street') }}
                        </option>
                        <option v-for="street in streets" :key="street.id">
                            {{ street.name }}
                        </option>
                    </select>
                </li>
                <li class="hov">
                    <span class="lang2 mr-2"> {{ $t('SearchScope') }} </span>
                    <i class="fa fa-map-marker"></i>
                </li>
                <li class="hov" @click="gotocart()">
                    <span class="cart-count">{{ cartItemCount }}</span>
                    <span class="mr-2">
                        {{ $t('Shoppingcart') }}
                    </span>
                    <i class="fa fa-shopping-cart shopping"></i>
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
            </ul>
        </nav>
    </div>
    <!--  -->
    <!-- <div class="upper-bar">
        <div class="row">
            <div @click="goto" class="col-md-2 col-sm-12 col-xs-12 imag">
                <img height="30" src="../../../public/img/EDALELYLogo.png" />
            </div>

            <div class="parent_select">
                <div class="child_1">
                    <div class="customer-select cu1">
                        <select v-model="lang" @change="handleChange($event)">
                            <option value="en">English</option>
                            <option value="ar">العربية</option>
                        </select>
                    </div>
                    <div class="ap_lang">
                        <span class="lang">{{ $t('lang') }}</span>
                    </div>
                </div>
                <div class="child_2">
                    <div class="ap_scoop">
                        <i class="fa fa-map-marker"></i>
                        <span class="lang2"> {{ $t('SearchScope') }} </span>
                    </div>
                    <div class="child_3">
                        <div class="customer-select cu2">
                            <select>
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

                        <div class="customer-select cu2">
                            <select>
                                <option value="1" disabled>
                                    {{ $t('City') }}
                                </option>
                                <option v-for="city in cities" :key="city.id">
                                    {{ city.name }}
                                </option>
                            </select>
                        </div>
                        <div class="customer-select cu2">
                            <select>
                                <option value="1" disabled>
                                    {{ $t('street') }}
                                </option>
                                <option
                                    v-for="street in streets"
                                    :key="street.id"
                                >
                                    {{ street.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <!-- //////////////////////////// -->
    <!-- End Upper Bar -->
    <!-- <div class="navbar1">
        <div class="logo">
            <div @click="goto" class="imag">
                <img height="30" src="../../../public/img/EDALELYLogo.png" />
            </div>
            <div class="lang">
                <div class="">
                    <select v-model="lang" @change="handleChange($event)">
                        <option value="en">English</option>
                        <option value="ar">العربية</option>
                    </select>
                </div>
                <div class="textlang">
                    <span class="">{{ $t('lang') }}</span>
                </div>
            </div>
        </div>
        <div class="location">
            <div class="selectlocation">
                <div class="">
                    <select>
                        <option value="1" disabled>
                            {{ $t('Governorate') }}
                        </option>
                        <option v-for="gover in governorates" :key="gover.id">
                            {{ gover.name }}
                        </option>
                    </select>
                </div>

                <div class="">
                    <select>
                        <option value="1" disabled>
                            {{ $t('City') }}
                        </option>
                        <option v-for="city in cities" :key="city.id">
                            {{ city.name }}
                        </option>
                    </select>
                </div>
                <div class="">
                    <select>
                        <option value="1" disabled>
                            {{ $t('street') }}
                        </option>
                        <option v-for="street in streets" :key="street.id">
                            {{ street.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="searchscop">
                <i class="fa fa-map-marker fa-1x"></i>
                <span class=""> {{ $t('SearchScope') }} </span>
            </div>
        </div>
    </div> -->
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
    bottom: 0;
    right: 15px;
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
    bottom: -6px;
    right: 15px;
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
    background: #c0c4c7;
    height: auto;
    width: 100%;
    padding: 0;
}
nav img {
    margin-left: 20px;
    margin-top: 20px;
    float: left;
    cursor: pointer;
}
nav ul {
    float: right;
    margin-right: 20px;
}
nav ul .customer-select {
    border: none;
    /* display: inline-flex;
    background-color: rgb(135, 128, 128);
    width: 80px;
    border-radius: 3px;
    position: relative;
    height: 34px;
    cursor: pointer;
} */
/* nav ul .customer-select select {
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    background-color: transparent;
    color: #fff;
    margin-left: auto;
    margin-right: auto;
    z-index: 2;
    /* font-size: 15px; */
    position: relative;
    line-height: 2.15;
    justify-content: center;
    align-items: center;
}
nav ul .cu1:before {
    font-family: 'Font Awesome 5 Free';
    content: '\f0d7';
    display: inline-block;
    vertical-align: middle;
    font-weight: 900;
    z-index: 1;
    font-size: 20px;
    position: absolute;
    left: 5px;
}
nav ul .cu2::after {
    font-family: 'Font Awesome 5 Free';
    content: '\f0d7';
    display: inline-block;
    vertical-align: middle;
    font-weight: 900;
    z-index: 1;
    font-size: 20px;
    position: absolute;
    left: 2px;
} */
nav ul li {
    display: inline-block;
    line-height: 80px;
    margin: 0 10px;
}
nav ul .hov {
    cursor: pointer;
}
nav ul .hov:hover {
    color: #fff;
}
nav ul li .cart-count {
    font-size: 13px;
    color: #ba8b00;
    margin-left: 8%;
    background: #ffffff;
    height: 19px;
    border-radius: 50%;
    width: 17px;
    position: absolute;
    margin-top: -7px;
}
.checkbtn {
    font-size: 30px;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;
}
#check {
    display: none;
}
@media (max-width: 858px) {
    .checkbtn {
        display: block;
        margin: 10px 0;
        line-height: 20px;
    }
    ul {
        position: fixed;
        width: 100%;
        height: 80vh;
        background: #c0c4c7;
        top: 50px;
        left: -100%;
        text-align: center;
        z-index: 10;
        transition: all 0.5s;
    }
    nav ul li {
        display: block;
        margin: 20px 0;
        line-height: 20px;
    }
    #check:checked ~ ul {
        left: 0;
    }
}
/*
    nav ul li{
        display:block;
        margin:20px 0;
        line-height:80px;
    }
    #check:checked ~ ul{
        left:0;
    }
}
*/

/* .upper-bar .imag img {
    cursor: pointer;
    margin-top: 2vh;
}
.upper-bar .parent_select {
    margin-top: 2vh;
}
.upper-bar {
    background-color: #c0c4c7;
    color: #635f5f;
    padding: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.upper-bar .lang,
.upper-bar .lang2 {
    font-size: 17px;
    margin: 0 5px;
}
.upper-bar .parent_select {
    width: 80%;
    display: inline-flex;
    justify-content: space-around;
}
.upper-bar .parent_select .child_1 {
    display: inline-flex;
    width: 20%;
    justify-content: space-between;
    height: 50px;
}
.upper-bar .parent_select .child_1 .ap_lang {
    margin-top: 5px;
}

.upper-bar .parent_select .child_2 {
    display: inline-flex;
    direction: rtl;
    width: 55%;
    justify-content: space-around;
    height: 50px;
}
.upper-bar .parent_select .child_2 .ap_scoop {
    margin-top: 5px;
}
.upper-bar .parent_select .child_3 {
    width: 60%;
    display: inline-flex;
    justify-content: space-between;
}
.upper-bar .customer-select {
    display: inline-flex;
    border: none;
    background-color: #e3e4e6;
    width: 120px;
    position: relative;
    height: 34px;
    cursor: pointer;
    margin: 0 10px;
}
.upper-bar .customer-select select {
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    background-color: transparent;
    color: #635f5f;
    margin-left: auto;
    margin-right: auto;
    z-index: 2;
    font-size: 12px;
    position: relative;
    line-height: 2.15;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.upper-bar .cu1:before {
    font-family: 'Font Awesome 5 Free';
    content: '\f0d7';
    display: inline-block;
    vertical-align: middle;
    font-weight: 900;
    z-index: 1;
    font-size: 20px;
    position: absolute;
    left: 5px;
    color: #635f5f;
}
.upper-bar .cu2::after {
    font-family: 'Font Awesome 5 Free';
    content: '\f0d7';
    display: inline-block;
    vertical-align: middle;
    font-weight: 900;
    z-index: 1;
    font-size: 20px;
    position: absolute;
    left: 5px;
    color: #635f5f;
}

.upper-bar .fa-map-marker {
    margin-left: 1vh;
    font-size: 16px;
}
@media (max-width: 575.98px) {
    .upper-bar {
        height: 320px;
    }
    .upper-bar .imag img {
        margin-top: -15px;
        margin-bottom: 10px;
    }
    .upper-bar .imag img {
        margin-top: -15px;
        margin-bottom: 10px;
    }
    .upper-bar .parent_select {
        width: 100%;
        display: grid;
    }
    .upper-bar .parent_select .child_1,
    .upper-bar .parent_select .child_2 {
        width: 100%;
        display: block;
        margin: 10px 0;
    }
    .upper-bar .parent_select .child_3 {
        width: 100%;
        display: block;
    }
    .upper-bar .parent_select .child_3 .cu2 {
        display: block;
        margin: 5px 14px 0 0;
    }
}
@media (min-width: 576px) and (max-width: 767.98px) {
    .upper-bar {
        height: 320px;
    }
    .upper-bar .imag img {
        margin-top: -15px;
        margin-bottom: 10px;
    }
    .upper-bar .imag img {
        margin-top: -15px;
        margin-bottom: 10px;
    }
    .upper-bar .parent_select {
        width: 100%;
        display: grid;
    }
    .upper-bar .parent_select .child_1,
    .upper-bar .parent_select .child_2 {
        width: 100%;
        display: block;
        margin: 10px 0;
    }
    .upper-bar .parent_select .child_3 {
        width: 100%;
        display: block;
    }
    .upper-bar .parent_select .child_3 .cu2 {
        display: block;
        margin: 5px 14px 0 0;
    }
}
@media (min-width: 768px) and (max-width: 991.98px) {
    .upper-bar .row {
        justify-content: center;
    }
    .upper-bar .parent_select {
        width: 100%;
    }
    .upper-bar .imag {
        margin-bottom: 20px;
    }
    .upper-bar .lang,
    .upper-bar .lang2 {
        font-size: 15px;
        font-weight: bold;
    }
    .upper-bar .parent_select .child_1 {
        width: 24%;
    }
    .upper-bar .customer-select select {
        font-size: 16px;
    }
    .upper-bar .customer-select::after {
        left: 5px;
    }
    .upper-bar .parent_select .child_2 {
        width: 70%;
    }
    .upper-bar .parent_select .child_3 {
        width: 75%;
    }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    .upper-bar .parent_select .child_1 {
        width: 24%;
    }
    .upper-bar .parent_select .child_2 {
        width: 75%;
    }
} */
</style>
