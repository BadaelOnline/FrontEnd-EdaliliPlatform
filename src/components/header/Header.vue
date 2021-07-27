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
        <!-- NavSelect -->
        <div class="navbar1">
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
            <div class="selectlocation">
                <div class="">
                    <select v-model="sortType">
                        <option value="1" disabled>
                            {{ $t('Governorate') }}
                        </option>
                        <option v-for="gover in governorates" :key="gover.id">
                            {{ gover.name }}
                        </option>
                    </select>
                </div>

                <div class="">
                    <select v-model="sortType1">
                        <option value="1" disabled>
                            {{ $t('City') }}
                        </option>
                        <option v-for="city in cities" :key="city.id">
                            {{ city.name }}
                        </option>
                    </select>
                </div>
                <div class="">
                    <select v-model="sortType2">
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
        <!-- background -->
        <div class="customer-select cu5">
            <h5>choose server</h5>
            <select v-model="server" @change="handleserver($event)">
                <option value="edalily">edalily</option>
                <option value="admin">admin</option>
            </select>
        </div>
        <div class="background">
            <div class="search">
                <i class="fa fa-search shopping"></i
                ><input
                    class="input"
                    type="search"
                    :placeholder="$t('Search')"
                />
            </div>
            <div
                class="form-popup animate__animated animate__swing"
                id="myForm"
            >
                <form action="/action_page.php" class="form-container">
                    <h1>Login</h1>
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
            <div
                class="form-popup2 animate__animated animate__swing"
                id="myForm2"
            >
                <form
                    action="/action_page.php"
                    class="form-container2 form_register"
                >
                    <h1>Register</h1>
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
                    <input type="checkbox" @change="showPass2()" /> Show
                    Password
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
            <div class="parent_featuers">
                <div class="child_1">
                    <router-link to="/addStore" class="link">{{
                        $t('AddPlatform', { locale: lang })
                    }}</router-link>
                </div>
                <div class="cole">|</div>
                <div class="child_2" @click="gotocart()">
                    <span class="cart-count">{{ cartItemCount }}</span>
                    <div>
                        {{ $t('Shoppingcart') }}
                    </div>
                    <i class="fa fa-shopping-cart shopping"></i>
                </div>
                <div class="cole">|</div>
                <div class="child_3 map">
                    {{ $t('Selectlocation') }}
                    <i class="fa fa-map-marker shopping"></i>
                </div>
                <div class="cole">|</div>
                <div class="child_4">
                    <template v-if="authenticated" class="user">
                        <a @click.prevent="signOut" href="#" class="link"
                            >SignOut</a
                        >
                    </template>
                    <template
                        v-else
                        class="user"
                        style="margin-left: -20px; margin-right: 10px"
                    >
                        <div @click="openForm()">{{ $t('signin') }}</div>
                    </template>
                    <i class="fa fa-user-circle shopping"> </i>
                </div>
                <div v-if="authenticated" class="cole">|</div>
                <div v-if="authenticated" class="child_5">
                    <div>
                        {{ $t('Profile') }}
                    </div>
                    <i class="fa fa-user-circle shopping"> </i>
                </div>
            </div>
        </div>
        <!-- navbarEdalili -->
        <div class="navbar">
            <div>
                <router-link to="/instrc" exact>
                    <button type="button" class="btn btn-light">
                        <a>{{ $t('Factories') }}</a>
                    </button></router-link
                >
            </div>
            <div>
                <router-link to="/company">
                    <button type="button" class="btn btn-light">
                        <a>{{ $t('Companies') }}</a>
                    </button></router-link
                >
            </div>
            <div>
                <router-link to="/professional">
                    <button type="button" class="btn btn-light">
                        <a>{{ $t('ProfessionalsTechnicians') }}</a>
                    </button></router-link
                >
            </div>
            <div>
                <router-link to="/medic">
                    <button type="button" class="btn btn-light medic">
                        <a>{{ $t('PharmaciesMedicines') }}</a>
                    </button></router-link
                >
            </div>
            <div>
                <router-link to="/doctors">
                    <button type="button" class="btn btn-light">
                        <a>{{ $t('Doctors') }}</a>
                    </button></router-link
                >
            </div>
            <div>
                <router-link to="/resturants">
                    <button type="button" class="btn btn-light">
                        <a>{{ $t('RestaurantsCafes') }}</a>
                    </button></router-link
                >
            </div>
            <div class="img" lang="en">
                <router-link to="/festival">
                    <button type="button" class="btn btn-light sell">
                        <a>{{ $t('FestivalPerformances') }}</a>
                    </button></router-link
                >
            </div>
            <div>
                <router-link to="/stores">
                    <button type="button" class="btn btn-light">
                        <a>{{ $t('Stores') }}</a>
                    </button></router-link
                >
            </div>
            <div>
                <router-link to="/products">
                    <button type="button" class="btn btn-light products">
                        <a>{{ $t('Products') }}</a>
                    </button></router-link
                >
            </div>
            <div>
                <router-link to="/">
                    <button type="button" class="btn btn-light">
                        <a>{{ $t('Allsections') }}</a>
                    </button></router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import jeson from '@/jeson/MOCK_DATA.json';
export default {
    name: 'Header',
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
            document.getElementById('myForm').style.display = 'none';
            document.getElementById('myForm2').style.display = 'none';
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
    background-color: #04aa6d;
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
    background-color: #d52626;
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
    background-color: #04aa6d;
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
    background-color: #d52626;
    color: #fff;
    padding: 5px 10px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
}
.form-container2 .ret {
    position: absolute;
    right: -2px;
    top: -2px;
    background-color: #3aa8e7;
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
    height: auto;
    /* background-color: #bfc3c6; */
}
.navbar1 {
    padding: 10px 0;
    height: 20%;
    background-color: #bfc3c6;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
}
.lang {
    display: flex;
    gap: 24px;
}
.textlang {
    margin-top: 6px;
}
.selectlocation {
    display: flex;
    gap: 24px;
}
.searchscop {
    display: flex;
    gap: 5px;
}
.searchscop i {
    margin-top: 5px;
}
select {
    border: none;
    background-color: #eff2f5;
    opacity: 80;
    width: 100px;
    border: solid #bdb9b9;
    height: 35px;
}
.background {
    display: grid;
    align-content: space-between;
    padding-top: 50px;
    padding-bottom: 10px;
    text-align: center;
    position: relative;
    height: 590px;
    margin-bottom: 10px;
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
    /* background-color: #87948b; */
    padding: 10px 10px;
    /* border-bottom-left-radius: 4px; */
    /* border-top-left-radius: 4px; */
    width: 35px;
    height: 34px;
    /* color: aliceblue; */
    cursor: pointer;
}
.parent_featuers {
    border: solid #c3c4c8;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin: auto;
    height: 40px;
    width: 80%;
    background-color: #c3c4c8;
}
.child_1,
.child_2,
.child_3,
.child_4 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
.navbar {
    background: #b3b4b6;
}
</style>
