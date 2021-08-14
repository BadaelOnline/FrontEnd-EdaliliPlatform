<template>
    <div class="jumbotron" v-if="$route.name == 'home'">
        <div class="customer-select cu5">
            <h5>choose server</h5>
            <select v-model="server" @change="handleserver($event)">
                <option value="edalily">edalily</option>
                <option value="admin">admin</option>
            </select>
        </div>
        <div class="search col-lg-12">
            <i class="fa fa-search shopping"></i
            ><input class="input" type="search" :placeholder="$t('Search')" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'banarHeader',
    // props: ['title', 'description', 'id', 'price'],
    data() {
        const lang = localStorage.getItem('lang') || 'en';
        const server = localStorage.getItem('server') || 'admin';
        return {
            lang: lang,
            server: server,
        };
    },
    methods: {
        handleChange(event) {
            localStorage.setItem('lang', event.target.value);
            window.location.reload();
        },
        handleserver(event) {
            localStorage.setItem('server', event.target.value);
            window.location.reload();
        },
       
      
    },
};
</script>

<style scoped>

.cu5 {
    position: fixed;
    z-index: 10;
    right: 5%;
}

/* Start landing */
.jumbotron {
    display: grid;
    align-content: space-between;
    padding-top: 50px;
    padding-bottom: 10px;
    text-align: center;
    position: relative;
    height: 650px;
    margin-bottom: 5px;
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
.jumbotron .search i {
    background-color: #bfc0c2;
    padding: 10px 10px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    width: 35px;
    height: 34px;
    color: #507781;
    cursor: pointer;
}

.jumbotron .featuers {
    width: 80%;
    display: inline-flex;
    justify-content: space-between;
    margin: auto;
    background-color: #bfc0c2;
    padding: 10px 20px;
    color: #635f5f;
    font-size: 15px;
}

.jumbotron .featuers div {
    display: inline-flex;
    cursor: pointer;
    position: relative;
}
.jumbotron .featuers div:hover {
    color: aliceblue;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .jumbotron {
        height: 300px;
        width: 100%;
    }
    .jumbotron .featuers {
        width: 250px;
        position: absolute;
        font-size: 11px;
        border-radius: 20px;
        overflow: hidden;
        display: none;
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
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .jumbotron {
        height: 330px;
        width: 100%;
    }
    .jumbotron .featuers {
        width: 250px;
        position: absolute;
        font-size: 11px;
        border-radius: 20px;
        overflow: hidden;
        display: none;
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
    .jumbotron .featuers i {
        font-size: 17px;
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
</style>
