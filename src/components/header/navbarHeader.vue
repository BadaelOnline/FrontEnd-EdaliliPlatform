<template>
    <div class="navba">
        <span class="fa fa-angle-double-right logo"></span>
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
    methods: {
    },
};
</script>

<style scoped>

.navba {
    display: flex;
    justify-content: space-between;
    margin: 0;
    background-color: #1c2c34;
    position: relative;
   transition: all 0.5s;
  
  
}
.navba .logo {
        display: none;

}
/* Medium devices (tablets, 768px and up) */
@media  (max-width: 991.98px) {
.navba {
    justify-content: center;
   width: 5%;
    border-bottom-right-radius: 10px;
    height: 40px;
    flex-flow: wrap; 
}

.navba div{
    display: none;
}
.navba .logo {
    display: block;
    color: #fff;
    transform: rotate(90deg);
        position: absolute;
        top: 30%;
        left: 30%;
    width: 10px;
}
.navba:hover {
    width: 100%;
    height:auto;
}
.navba:hover .logo{
    top: 2%;
    left: 2%;
    transform: rotate(-90deg);
}

.navba:hover div{
    display: block;
}
}
.hov {
    width: 100px;
}
.linkText {
    color: #fff;
    font-size: 18px;
    margin-top: 10px;
}
/* @media (max-width: 1030px) {
    .navbar {
        position: fixed;
       height: 10px;
        width: 100%;
        z-index: 1000;
        right: 0px;
        top: 206px;
        bottom: 0;
        transition: width 200ms ease;
        display: flex;
        flex-flow: wrap;
    }
    .navbar:hover {
        height: 120px;
    }
  
    .hov .links {
        margin: auto;
        display: flex;
        gap: 10px;
        flex-direction: row-reverse;
    }
    .linkText {
        display: none;
    }
    .logo {
        display: block;
        width: 100%;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
        text-align: center;
        letter-spacing: 0.3ch;
        transform: rotate(0);
        transition: all 0.9s ease-in-out;
    }
    .navbar:hover .logo {
        transform: rotate(-180deg);
    }
} */
</style>
