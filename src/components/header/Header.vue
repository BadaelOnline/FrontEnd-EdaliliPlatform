<template>
    <div class="header">
        <!-- NavSelect -->
        <div class="navbar1">
            <div class="imag">
                <img height="30" src="../../../public/img/EDALELYLogo.png" />
            </div>
            <div class="lang">
                <div class="">
                    <select>
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
                    <select>
                        <option value="1" disabled>
                            {{ $t('Governorate') }}
                        </option>
                        <option>damas</option>
                        <option>damas</option>
                        <option>damas</option>
                    </select>
                </div>

                <div class="">
                    <select>
                        <option value="1" disabled>
                            {{ $t('City') }}
                        </option>
                        <option>halab</option>
                        <option>halab</option>
                        <option>halab</option>
                    </select>
                </div>
                <div class="">
                    <select>
                        <option value="1" disabled>
                            {{ $t('street') }}
                        </option>
                        <option>swaidaa</option>
                        <option>swaidaa</option>
                        <option>swaidaa</option>
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
                <div>
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
    </div>
</template>

<script>
export default {
    name: 'Header',
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
</style>
