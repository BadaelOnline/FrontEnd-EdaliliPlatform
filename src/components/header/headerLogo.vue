<template>
    <div class="navbar1">
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
    </div>
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
.navbar1 {
    padding: 10px 0;
    height: 20%;
    background: #b8b9bb;
    display: flex;
    gap: 30%;
    margin: auto;
    color: #000;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.logo {
    display: flex;
    gap: 40%;
}
.location {
    display: flex;
    gap: 40%;
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
    background-color: #d6d7d8;
    width: 100px;
    border: solid #d6d7d8;
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
        /* width: 100%; */
        gap: 5%;
        text-align: center;
    }
    .navbar1 div {
        margin-top: 10px;
    }
    /* .navbar1 {
        display: table;
        width: 100%;
        text-align: center;
    }
    .navbar1 .logo,
    .searchscop,
    .selectlocation,
    .lang {
        display: table;
        width: 100%;
        text-align: center;
    }
    .textlang {
        display: none;
    }
    .selectlocation {
        display: table;
        width: 100%;
    }
    .searchscop,
    .selectlocation,
    .lang {
        margin: 24px 0;
        text-align: center;
    } */
}
</style>
