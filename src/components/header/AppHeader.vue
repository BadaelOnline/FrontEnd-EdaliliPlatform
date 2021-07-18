<template>
    <div class="header">
        <div class="content_loader hidden" id="content_loader">
            <div id="loader" class="loader"></div>
        </div>

        <div class="upper-bar">
            <div class="row">
                <div @click="goto" class="col-md-2 col-sm-12 col-xs-12 imag">
                    <img src="../../../public/img/logo-4.png" />
                </div>

                <div class="parent_select">
                    <div class="child_1">
                        <div class="customer-select cu1">
                            <select
                                v-model="lang"
                                @change="handleChange($event)"
                            >
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
                                <select v-model="sortType">
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
                                <select v-model="sortType">
                                    <option value="1" disabled>
                                        {{ $t('City') }}
                                    </option>
                                    <option
                                        v-for="city in cities"
                                        :key="city.id"
                                    >
                                        {{ city.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="customer-select cu2">
                                <select v-model="sortType">
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
        </div>
        <!-- End Upper Bar -->
        <!-- Start landing -->
        <div class="jumbotron">
            <div class="bars" @click="showfut()">
                <i class="fa fa-bars"></i>
            </div>

            <div class="customer-select cu5">
                <h5>choose server</h5>
                <select v-model="server" @change="handleserver($event)">
                    <option value="edalily">edalily</option>
                    <option value="admin">admin</option>
                </select>
            </div>
            <div class="search col-lg-12">
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
                        placeholder="Enter Email"
                        v-model="form.email"
                        name="email"
                        required
                    />

                    <label for="psw"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        v-model="form.password"
                        name="psw"
                        required
                    />

                    <span @click="submit()" class="btn">Login</span>
                    <span @click="registerForm()" class="btn"
                        >Create Acount</span
                    >
                    <span class="btn cancel" @click="closeForm()">Close</span>
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
                        placeholder="Enter Email"
                        v-model="form.email"
                        name="email"
                        required
                    />

                    <label for="psw"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        v-model="form.password"
                        name="psw"
                        required
                    />

                    <span @click="submit1()" class="btn">Register</span>
                    <span class="btn cancel" @click="closeForm()">Close</span>
                </form>
            </div>

            <div class="parent_featuers">
                <div
                    class="featuers animate__animated animate__heartBeat"
                    id="fut"
                >
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

        <!-- End landing -->

        <!-- Start navbar-->
        <div class="naver">
            <div class="conten">
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
    </div>
</template>
<style scoped>
.cu5 {
    position: fixed;
    z-index: 10;
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
}

/* Add styles to the form container */
.form-container {
    max-width: 400px;
    padding: 10px;
    background-color: #a6a1a1;
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
    background-color: red;
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
}

/* Add styles to the form container */
.form-container2 {
    max-width: 400px;
    padding: 10px;
    background-color: #a6a1a1;
    height: 573px;
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
    background-color: red;
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
    top: 250px;
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

/* ____________________________________ loading _______________________________ */
.upper-bar .imag img {
    cursor: pointer;
}
.upper-bar .parent_select {
    margin-top: 2vh;
}
.upper-bar {
    background-color: #9b9a9a;
    color: #fff;
    padding: 20px;
    width: 100%;
}
.upper-bar .lang,
.upper-bar .lang2 {
    font-size: 17px;
    font-weight: bold;
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
    background-color: #878080;
    width: 110px;
    border-radius: 15px;
    position: relative;
    height: 34px;
}
.upper-bar .customer-select select {
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
    font-size: 15px;
    position: relative;
    line-height: 2.15;
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
}

.upper-bar .fa-map-marker {
    margin-left: 1vh;
    font-size: 16px;
}
/* Extra small devices (portrait phones, less than 576px) */
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
/* Small devices (landscape phones, 576px and up) */
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
/* Medium devices (tablets, 768px and up) */
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
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .upper-bar .parent_select .child_1 {
        width: 24%;
    }
    .upper-bar .parent_select .child_2 {
        width: 75%;
    }
}
/* End Upper Bar */
/* Start landing */
.jumbotron {
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
.jumbotron .search {
    display: flex;
    justify-content: center;
}
.jumbotron .input {
    border: none;
    width: 400px;
    padding: 4px 10px 5px 10px;
    height: 34px;
}
.jumbotron .search:after {
    background-color: #87948b;
    width: 34px;
    height: 34px;
    color: #fff;
    padding-top: 1px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    font-family: 'Font Awesome 5 Free';
    content: '\f0d7';
    display: inline-block;
    vertical-align: middle;
    font-weight: 900;
    z-index: 1;
    font-size: 20px;
}
.jumbotron .search i {
    background-color: #87948b;
    padding: 10px 10px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    width: 35px;
    height: 34px;
    color: aliceblue;
    cursor: pointer;
}
.parent_featuers {
    display: flex;
    width: 95%;
    justify-content: flex-end;
    height: 80px;
}

.jumbotron .featuers {
    width: 80%;
    display: inline-flex;
    justify-content: space-between;
    margin: auto;
    background-color: #bfc0c2;
    padding: 10px 20px;
    color: #635f5f;
}
.jumbotron .featuers .cole {
    font-size: 30px;
    margin-top: -15px;
    cursor: none;
}
.jumbotron .featuers .cole:hover {
    color: #635f5f;
}

.jumbotron .featuers span {
    font-weight: bold;
}
.jumbotron .featuers .cart-count {
    font-size: 13px;
    color: #ba8b00;
    margin-left: 88%;
    background: #ffffff;
    height: 19px;
    border-radius: 50%;
    width: 17px;
    position: absolute;
    margin-top: -11px;
}
.jumbotron .featuers div {
    display: inline-flex;
    cursor: pointer;
    position: relative;
}
.jumbotron .featuers div:hover {
    color: aliceblue;
}
.jumbotron .featuers i {
    color: #635f5f;
    font-size: 20px;
}
.jumbotron .featuers .shopping {
    margin: 0 10px;
}
.bars {
    display: none;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .jumbotron {
        height: 300px;
        width: 100%;
    }
    .bars {
        display: flex;
        justify-content: flex-start;
        cursor: pointer;
    }
    .parent_featuers {
        display: flex;
        width: 100%;
        height: 200px;
        justify-content: center;
    }
    .jumbotron .featuers {
        width: 250px;
        position: absolute;
        font-size: 11px;
        border-radius: 20px;
        overflow: hidden;
        display: none;
    }
    .jumbotron .show {
        margin-top: 60px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .jumbotron .search {
        width: 100%;
    }
    .jumbotron .search input {
        width: 50%;
        padding: 4px 10px;
        height: 35px;
    }
    .jumbotron .search i {
        height: 35px;
        width: 34px;
        padding: 10px 10px;
    }
    .jumbotron .search:after {
        width: 34px;
        height: 34px;
        top: 0;
    }
    .jumbotron .featuers .cole {
        display: none;
    }
    .jumbotron .featuers .child_1,
    .jumbotron .featuers .child_2,
    .jumbotron .featuers .child_3,
    .jumbotron .featuers .child_4,
    .jumbotron .featuers .child_5 {
        display: block;
        margin: 5px 0;
    }
    .jumbotron .featuers .child_1 div,
    .jumbotron .featuers .child_2 div,
    .jumbotron .featuers .child_3 div,
    .jumbotron .featuers .child_4 div,
    .jumbotron .featuers .child_5 div {
        display: inline-flex;
    }

    .jumbotron .featuers .shopping:after,
    .jumbotron .featuers .map:after,
    .jumbotron .featuers .user:after {
        display: none;
    }
    .jumbotron .featuers .cart-count {
        font-size: 13px;
        color: #ba8b00;
        margin-left: 44%;
        background: #ffffff;
        height: 19px;
        border-radius: 50%;
        width: 17px;
        position: absolute;
        margin-top: -9px;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .jumbotron {
        height: 330px;
        width: 100%;
    }
    .bars {
        display: flex;
        justify-content: flex-start;
        cursor: pointer;
    }
    .parent_featuers {
        display: flex;
        width: 100%;
        height: 200px;
        justify-content: center;
    }
    .jumbotron .featuers {
        width: 250px;
        position: absolute;
        font-size: 11px;
        border-radius: 20px;
        overflow: hidden;
        display: none;
    }
    .jumbotron .show {
        margin-top: 60px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .jumbotron .search {
        width: 100%;
    }
    .jumbotron .search input {
        width: 50%;
        padding: 4px 10px;
        height: 35px;
    }
    .jumbotron .search i {
        height: 35px;
        width: 34px;
        padding: 10px 10px;
    }
    .jumbotron .search:after {
        width: 34px;
        height: 34px;
        top: 0;
    }
    .jumbotron .featuers .cole {
        display: none;
    }
    .jumbotron .featuers .child_1,
    .jumbotron .featuers .child_2,
    .jumbotron .featuers .child_3,
    .jumbotron .featuers .child_4,
    .jumbotron .featuers .child_5 {
        display: block;
        margin: 5px 0;
    }
    .jumbotron .featuers .child_1 div,
    .jumbotron .featuers .child_2 div,
    .jumbotron .featuers .child_3 div,
    .jumbotron .featuers .child_4 div,
    .jumbotron .featuers .child_5 div {
        display: inline-flex;
    }
    .jumbotron .featuers i {
        font-size: 17px;
    }
    .jumbotron .featuers .shopping:after,
    .jumbotron .featuers .map:after,
    .jumbotron .featuers .user:after {
        display: none;
    }
    .jumbotron .featuers .cart-count {
        font-size: 13px;
        color: #ba8b00;
        margin-left: 44%;
        background: #ffffff;
        height: 19px;
        border-radius: 50%;
        width: 17px;
        position: absolute;
        margin-top: -9px;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .jumbotron .featuers {
        width: 90%;
        display: inline-flex;
        justify-content: space-between;
        margin: auto;
        background-color: #bfc0c2;
        padding: 10px 20px;
        color: #635f5f;
    }
}

/* End landing */
/* Start Naver*/
.naver {
    background-color: #a7a6a6;
    padding: 5px 0 5px 0;
    margin: 10px 0 10px 0;
}
.naver .conten {
    display: inline-flex;
    width: 100%;
    justify-content: space-around;
}
.naver .conten div {
    margin: 0 5px;
    display: inline-block;
}
.naver .btn-light {
    min-width: 70px;
    height: 29px;
    border-radius: 15px;
    color: #635f5f;
    padding: 0 5px;
}
.btn:hover {
    transform: scale3d(1.1, 1.1, 1.1);
}
.naver .products {
    border-radius: 50px;
    height: 28px;
    font-size: 15px;
    padding: 1px;
    background-color: #cc0808;
    color: #fff;
    width: 100px;
    border-color: #cc0808;
}
.naver .img {
    position: relative;
}
.naver .img::before {
    content: url(../../../public/img/icon-button.png);
    position: absolute;
    top: -1px;
    /*right: 450x;*/
}
.naver .sell {
    background-color: #f6ef19;
    border-color: #f6ef19;
    margin-left: 30px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 29px;
}
/* Extra small devices (portrait phones, less than 576px)   */
@media (max-width: 575.98px) {
    .naver .conten {
        display: inline;
    }
    .naver .btn-light {
        width: 80px;
        height: 29px;
        margin-bottom: 10px;
        font-size: 12px;
    }
    .naver .sell {
        height: 29px;
    }
    .naver .img::before {
        top: 38px;
    }
    .naver .products {
        width: 60px;
    }
    .naver .img::before {
        content: url(../../../public/img/icon-button.png);
        position: absolute;
        top: -1px;
        /*right: 450x;*/
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .naver .conten {
        display: inline;
    }
    .naver .btn-light {
        width: 80px;
        height: 29px;
        margin-bottom: 10px;
        font-size: 12px;
    }
    .naver .sell {
        height: 29px;
    }
    .naver .img::before {
        top: 38px;
    }
    .naver .products {
        width: 60px;
    }
    .naver .img::before {
        content: url(../../../public/img/icon-button.png);
        position: absolute;
        top: -1px;
        /*right: 450x;*/
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .naver .conten {
        display: inline;
    }
    .naver .btn-light {
        width: 80px;
        height: 29px;
        margin-bottom: 10px;
        font-size: 12px;
    }
    .naver .sell {
        height: 29px;
    }
    .naver .img::before {
        top: 38px;
    }
    .naver .products {
        width: 60px;
    }
    .naver .img::before {
        content: url(../../../public/img/icon-button.png);
        position: absolute;
        top: -1px;
        /*right: 450x;*/
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .naver .btn-light {
        min-width: 35px;
        height: 25px;
        margin-bottom: 10px;
        font-size: 12px;
    }
    .naver .sell {
        height: 29px;
    }
    .naver .img::before {
        top: -1px;
    }
}
.link {
    color: #635f5f;
    text-decoration: none;
}
.link:hover {
    text-decoration: none;
    color: aliceblue;
}
/* End Naver*/
/* End header */
</style>
<!--<script src="../../js/proj.js"></script>-->

<script>
import { mapGetters, mapActions } from 'vuex';
import jeson from '@/jeson/MOCK_DATA.json';
export default {
    name: 'AppHeader',
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
            },
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
                    document
                        .getElementById('content_loader')
                        .classList.add('hidden');
                }, 3000);
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
            this.signIn(this.form);
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
            //  .then(() => {
            //             this.$router.replace({
            //                 name: 'home',
            //             });
            //         })
            //         .catch(() => {
            //             console.log('failed');
            //         });
        },
        submit1() {
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
        },
    },
};
</script>
