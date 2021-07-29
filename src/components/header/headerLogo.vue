<template>
    <div class="upper-bar">
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
    </div>
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
import jeson from '@/jeson/MOCK_DATA.json';
export default {
    name: 'headerLogo',
    data() {
        const lang = localStorage.getItem('lang') || 'en';
        const server = localStorage.getItem('server') || 'admin';
        return {
            lang: lang,
            server: server,
            sortType: '1',
            cities: jeson[0].cities,
            governorates: jeson[0].governorates,
            streets: jeson[0].streets,
        };
    },
    methods: {
        goto: function () {
            this.$router.push(`/`);
        },
        handleChange(event) {
            localStorage.setItem('lang', event.target.value);
            window.location.reload();
        },
    },
};
</script>

<style scoped>
.upper-bar .imag img {
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
/* .navbar1 {
    padding: 10px 0;
    height: 20%;
    background: #c0c4c7;
    display: flex;
    gap: 20%;
    margin: auto;
    color: #000;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.logo {
    display: flex;
    gap: 30%;
}
.location {
    display: flex;
    gap: 30%;
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
    background-color: #e3e4e6;
    width: 100px;
    border: solid #e3e4e6;
    height: 35px;
    color: #000;
    cursor: pointer;
}
@media (max-width: 767px) {
    .logo {
        justify-content: center;
        align-items: center;
        display: flex;
        gap: 30%;
    }
    .location {
        justify-content: center;
        align-items: center;
        display: flex;
        gap: 8%;
    }
    .navbar1 {
        display: table;
        width: 100%;
        gap: 5%;
        text-align: center;
    }
    .navbar1 div {
        margin-top: 10px;
    }
/* /* }  */
</style>
