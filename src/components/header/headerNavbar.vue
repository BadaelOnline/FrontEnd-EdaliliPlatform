<template>
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
</template>

<script>
export default {
    name: 'headerNavbar',
};
</script>

<style scoped>
.navbar {
    background: #b8b9bb;
}
.navbar button {
    border: none;
    border: solid #fff;
    background-color: #fff;
    color: #000;
    cursor: pointer;
    font-size: 15px;
}
.navbar button:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    border: solid #6798a6;
    background-color: #6798a6;
}
@media (max-width: 767px) {
    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .navbar button {
        margin: 10px;
    }
}
</style>
