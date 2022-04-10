<template>
    <div id="myHeader" class="header">
        <div
            v-if="!authenticated"
            class="content_loader hidden"
            id="content_loader"
        >
            <div id="loader" class="loader"></div>
        </div>
        <top_header />
        <center_header />
        <bottom_header />
    </div>
</template>

<script>
// import $ from 'jquery';
import jeson from '@/jeson/MOCK_DATA.json';
import top_header from '@/components/header/top_header.vue';
import center_header from '@/components/header/center_header';
import bottom_header from '@/components/header/bottom_header.vue';
export default {
    name: 'Header',
    components: {
        top_header,
         center_header,
        bottom_header,
       
    },
    props: ['title', 'description', 'id', 'price'],
    data() {
        const lang = localStorage.getItem('lang') || 'ar';
        const token = localStorage.getItem('token');
        const server = localStorage.getItem('server') || 'admin';
        return {
            lang: lang,
            server: server,
            token: token,
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

    },
    methods: {
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
       
   
     
       
    },
    mounted(){
     


    }
};
</script>

<style scoped>
* {
    font-size: 15px;
}
.warnig_pass {
    color: red;
    display: none;
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
    margin: 0;
    padding: 0;

}

.background {
    display: grid;
    align-content: space-between;
    padding-top: 50px;
    padding-bottom: 10px;
    text-align: center;
    position: relative;
    height: 800px;
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
    padding: 10px 10px;
    width: 35px;
    height: 34px;
    cursor: pointer;
}
.parent_featuers {
    border: solid #c3c4c8;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin: auto;
    height: auto;
    width: 60%;
    background-color: #c3c4c8;
    color: #525052f6;
}
.child_1,
.child_2,
.child_3,
.child_4,
.child_5 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 10px auto;
    cursor: pointer;
}
.parent_featuers div:hover {
    color: #6798a6;
}
.child_2 .cart-count {
    font-size: 13px;
    color: #ba8b00;
    background: #ffffff;
    height: 19px;
    border-radius: 50%;
    width: 17px;
    justify-content: center;
    align-items: center;
}
.background .search .shopping {
    color: #6798a6;
}
@media (max-width: 767px) {
    .parent_featuers {
        gap: 15px;
        width: 80%;
    }
}
</style>
