<template>
    <div class="header">
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
        <div class="background">
            <div class="search">
                <i class="fa fa-search shopping"></i
                ><input
                    class="input"
                    type="search"
                    :placeholder="$t('Search')"
                />
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
            sortType1: '1',
            sortType2: '1',
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
        registerForm() {
            document.getElementById('myForm').style.zIndex = 8;
            document.getElementById('myForm2').style.zIndex = 9;
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
                    if (localStorage.getItem('token') !== null) {
                        document
                            .getElementById('content_loader')
                            .classList.add('hidden');
                    }
                }, 3000);
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
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
.header {
    height: auto;
    background-color: #bfc3c6;
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
    width: 50%;
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
</style>
