<template>
    <div class="navbar">
        <div class="links hov">
            <router-link to="/instrc" exact class="links">
                <div class="menu-icon">
                    <img src="../../../public/img/factory.png" height="30" />
                </div>
                <div class="linkText">{{ $t('Factories') }}</div>
            </router-link>
        </div>
        <div class="links hov">
            <router-link to="/company" class="links">
                <div class="menu-icon">
                    <img src="../../../public/img/building.png" height="30" />
                </div>
                <div class="linkText">{{ $t('Companies') }}</div>
            </router-link>
        </div>
        <div class="links hov">
            <router-link to="/professional" class="links">
                <div class="menu-icon">
                    <img src="../../../public/img/surface1.png" height="30" />
                </div>
                <div class="linkText">{{ $t('ProfessionalsTechnicians') }}</div>
            </router-link>
        </div>
        <div class="links hov">
            <router-link to="/medic" class="links">
                <div class="menu-icon">
                    <img src="../../../public/img/medicine.png" height="30" />
                </div>
                <div class="linkText">
                    {{ $t('PharmaciesMedicines') }}
                </div></router-link
            >
        </div>
        <div class="links hov">
            <router-link to="/doctors" class="links"
                ><div class="menu-icon">
                    <img
                        src="../../../public/img/stethoscope.png"
                        height="30"
                    />
                </div>
                <div class="linkText">{{ $t('Doctors') }}</div></router-link
            >
        </div>
        <div class="links hov">
            <router-link to="/resturants" class="links"
                ><div class="menu-icon">
                    <img src="../../../public/img/terrace.png" height="30" />
                </div>
                <div class="linkText">
                    {{ $t('RestaurantsCafes') }}
                </div></router-link
            >
        </div>
        <div class="links hov">
            <router-link to="/festival" class="links"
                ><div class="menu-icon">
                    <img
                        src="../../../public/img/sign_shopping.png"
                        height="30"
                    />
                </div>
                <div class="linkText">
                    {{ $t('FestivalPerformances') }}
                </div></router-link
            >
        </div>
        <div class="links hov">
            <router-link to="/stores" class="links"
                ><div class="menu-icon">
                    <img
                        src="../../../public/img/Store_review_2_.png"
                        height="30"
                    />
                </div>
                <div class="linkText">{{ $t('Stores') }}</div></router-link
            >
        </div>
        <div class="links hov">
            <router-link to="/products" class="links"
                ><div class="menu-icon">
                    <img src="../../../public/img/sections.png" height="30" />
                </div>
                <div class="linkText">{{ $t('Products') }}</div></router-link
            >
        </div>
        <div class="links hov">
            <router-link to="/" class="links"
                ><div class="menu-icon">
                    <img src="../../../public/img/sections.png" height="30" />
                </div>
                <div class="linkText">{{ $t('Allsections') }}</div></router-link
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbarHeader',
};
</script>

<style scoped>
.links {
    display: block;
    margin: 5px auto;
    text-decoration: none;
    transition: all 0.8s ease;
}
.hov {
    width: 100px;
}
.hov:hover,
.hov:active {
    transform: scale3d(1.1, 1.1, 1.1);
    background-color: #536976;
}
.linkText {
    color: #fff;
    font-size: 18px;
    margin-top: 10px;
}
@media (max-width: 1020px) {
    .navbar {
        position: fixed;
        display: block;
        z-index: 1000;
        right: 0px;
        top: 0;
        bottom: 0;
        height: auto;
        margin: 10px auto;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .hov .links {
        margin: auto;
        display: flex;
        gap: 10px;
        margin: 10px;
        flex-direction: row-reverse;
    }
    .hov {
        margin: auto;
        text-align: right;
    }
    .linkText {
        font-size: 16px;
    }
}
</style>
