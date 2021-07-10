<template>
    <div class="home">
        <div class="all-section">
            <h3>{{ $t('AllCategories') }}</h3>
        </div>
        <div class="row">
            <div  class="card_mark col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6"  
                v-for="catog in Categories"
                :key="catog.id">
             <img :src="catog.image"  v-if="catog.image"  />
                <img v-else src="../../../public/img/buty.jpg" />
                <div> {{catog.name}} </div>
            </div>
            
        </div>
        <!-- __________________________________________________________________ -->
        <div class="contain">
            <h2 style="margin-top: 3vh">Some Market</h2>
        <div  class="row">
            <div class="card_mark col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6"   v-for="bran in Brands.slice(0, 4)"
                    :key="bran.id">
             <img :src="bran.image"  v-if="bran.image"  />
                <img v-else src="../../../public/img/elc3.png" />
            </div>
        </div>
    


        </div> 
    </div>
</template>
<style lang="scss" scoped>

* {
    transition: 0.5s;
}
.home {
    background-color: #edefef;
}
.all-section {
    text-align: center;
    color: #6c6c77;
}
.h-100 {
    height: 100vh !important;
}
.align-middle {
    position: relative;
    top: 50%;
}
.column {
    margin-top: 3rem;
    padding-left: 3rem;
    &:hover {
        padding-left: 0;
        .card .txt {
            margin-left: 1rem;
            h1 {
                color: rgb(8, 8, 8);
                opacity: 1;
            }
        }
        a {
            color: rgba(8, 8, 8, 1);
            &:after {
                width: 10%;
            }
        }
    }
}
.card {
    min-height: 240px;
    margin: 0;
    padding: 1.7rem 1.2rem;
    border: none;
    border-radius: 0;
    color: rgba(0, 0, 0, 1);
    letter-spacing: 0.05rem;
    font-family: 'Oswald', sans-serif;
    box-shadow: 0 0 21px rgba(0, 0, 0, 0.27);
    .txt {
        margin-left: 0;
        margin-top: 12rem;
        z-index: 1;
        h1 {
            font-size: 18px;
            font-weight: 300;
            text-transform: uppercase;
        }
        p {
            font-size: 0.7rem;
            font-family: 'Open Sans', sans-serif;
            letter-spacing: 0rem;
            margin-top: 33px;
            opacity: 0;
            color: rgba(255, 255, 255, 1);
        }
    }
    @media (max-width: 575.98px) {
        .txt {
            margin-top: 11rem;
        }
        .txt h1 {
            font-size: 16px;
        }
    }
    @media (max-width: 520.98px) {
        .txt {
            margin-top: 9rem;
        }
        .txt h1 {
            font-size: 16px;
        }
    }
    @media (max-width: 465.98px) {
        .txt {
            margin-top: 8rem;
        }
        .txt h1 {
            font-size: 16px;
        }
    }
    @media (max-width: 430.98px) {
        .txt {
            margin-top: 7rem;
        }
        .txt h1 {
            font-size: 16px;
        }
    }
    @media (max-width: 380.98px) {
        .txt {
            margin-top: 5rem;
        }
        .txt h1 {
            font-size: 16px;
        }
    }
    @media (max-width: 340.98px) {
        .txt {
            margin-top: 4rem;
        }
        .txt h1 {
            font-size: 12px;
        }
    }
    @media (max-width: 300.98px) {
        .txt {
            margin-top: 3rem;
        }
        .txt h1 {
            font-size: 12px;
        }
    }
    a {
        z-index: 3;
        font-size: 0.7rem;
        color: rgba(0, 0, 0, 1);
        margin-left: 1rem;
        position: relative;
        bottom: -0.5rem;
        text-transform: uppercase;
        &:after {
            content: '';
            display: inline-block;
            height: 0.5em;
            width: 0;
            margin-right: -100%;
            margin-left: 10px;
            border-top: 1px solid rgba(255, 255, 255, 1);
            transition: 0.5s;
        }
    }
    .ico-card {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 92%;
        overflow: hidden;
    }
    i {
        position: relative;
        right: -50%;
        top: 60%;
        font-size: 12rem;
        line-height: 0;
        opacity: 0.2;
        color: rgba(255, 255, 255, 1);
        z-index: 0;
    }
}
/* _____________________ market after slider _____________________________ */
.contain {
    margin-top: 40px;
    width: 100%;
}
.card_mark{
    margin: 20px 0;
    cursor: pointer;
}
.card_mark img:hover {
    translate: -20px;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
   
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
 
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}
</style>
<script>
import { mapState } from 'vuex';
export default {
    name: 'home',
    props: ['image'],
    data() {
        return {};
    },

    computed: {
        ...mapState(['Categories','Brands']),
    }
};
</script>
