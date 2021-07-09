<template>
    <!-- Start About-Us -->
    <div class="about-us">
        <div class="row">
            <div class="col-sm-3">
                <h3>{{ $t('GetKnowUs') }}</h3>
                <ul>
                    <li>
                        <a href="#">{{ $t('AboutUs') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('CareersPress') }}></a>
                    </li>
                    <li>
                        <a href="#">{{ $t('Releases') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('E-DALELYCares') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('GiftaSmile') }}</a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h3>{{ $t('Connectwith') }}</h3>
                <ul>
                    <li>
                        <a href="#">{{ $t('Facebook') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('Twitter') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('Instagram') }}</a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h3>{{ $t('JoinUs') }}</h3>
                <ul>
                    <li>
                        <a href="#">{{ $t('SellonE-Dalely') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('SellunderE-Dalely') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('Accelerator') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('BecomeanAffiliate') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('FulfilmentbyE-Dalely') }}</a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h3>{{ $t('LetUsHelp') }}</h3>
                <ul>
                    <li>
                        <a href="#">{{ $t('YourAccount') }} </a>
                    </li>
                    <li>
                        <a href="#">{{ $t('E-DalelyAppDownload') }} </a>
                    </li>
                    <li>
                        <a href="#">{{ $t('E-DalelyAssistantDownload') }} </a>
                    </li>
                    <li>
                        <a href="#">{{ $t('HelpCenter') }}</a>
                    </li>
                </ul>
            </div>
            <hr />
            <div class="imag">
                <img src="../../../public/img/logo-3.png" />
            </div>
        </div>
        <div class="content_buttom">
            <div class="text-icon">
                <div class="work-uss">
                    <div>E-DALELY Points</div>
                    <img src="../../../public/img/icon-card.png" />
                </div>
            </div>
            <div class=" text-ico">
                <div class="work-us">
                    <div><span>Get It On</span>Google Play</div>
                    <img src="../../../public/img/icon-google-play.png" />
                </div>
            </div>
            <div class="text-ico">
                <div class="work-us" style="padding-top: 3px">
                    <div>App Store</div>
                    <img src="../../../public/img/icon-appel.png" />
                </div>
            </div>
            <div class=" visiter text-center">
                <ul>
                    المتصلین<br />
                    <li>0</li>
                    <li>0</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1</li>
                    <li>5</li>
                </ul>
            </div>
            <div class="visiter text-cnter">
                <ul>
                    الزیارات
                    <br />
                    <li>0</li>
                    <li>0</li>
                    <li>1</li>
                    <li>4</li>
                    <li>7</li>
                    <li>9</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* Start About-Us */
.about-us {
    height: 420px;
    background-color: #656668;
}
.about-us h3 {
    color: #aca59b;
    margin: 50px 0 50px 0;
}
.about-us ul {
    list-style: none;
    font-size: 20px;
}
.about-us ul li {
    margin-bottom: -5px;
}
.about-us ul li a {
    color: #b1afaf;
}
.about-us hr {
    width: 890px;
    height: 1px;
    background-color: #424243;
    margin: 40px auto 20px auto;
    opacity: 0.7;
}
.content_buttom{
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
}
.about-us .text-icon{
    padding-top: 10px;
    width: 170px;
}
.about-us .work-uss {
    background-color: black;
    color: #fff;
    border-radius: 10px;
    height: 40px;
    position: relative;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding-right: 10px;
    padding-top: 5px;
    }
    .about-us .work-uss img {
    position: absolute;
    top: 5px;
    left: 7px;
}
.about-us .text-ico{
    padding-top: 10px;
    width: 140px;
}
.about-us .work-us {
    background-color: black;
    color: #fff;
    border-radius: 10px;
    height: 40px;
    position: relative;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding-right: 10px;
    }
    .about-us .work-us img {
    position: absolute;
    top: 5px;
    left: 20px;
}
 .about-us .text-ico div{
    position: relative;
}  
.about-us .imag img {
    position: absolute;
    left: 50px;
}
.about-us .visiter ul {
    list-style: none;
    margin: 0;
    font-size: 18px;
}
.about-us .visiter li {
    background-color: #fff;
    width: 15px;
    height: 29px;
    display: inline-block;
    margin: 0.5vh;
}


.about-us .work-us div span {
    font-size: 9px;
    display: block;
}


.about-us .dlely-card img {
    position: absolute;
    left: 18px;
    top: 5px;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
 .about-us {
        height: auto;
    }
    .about-us h3 {
        font-size: 15px;
    }
    .content_buttom{
    width: 100%;
    display: grid;
    justify-content: space-around;
}
.about-us .imag  {
    position: relative;

}
.about-us .imag img {
    position: absolute;
    top: 70px;
    left: -500px;
}
.about-us .work-us {
  margin-left: 16px;
    }
    .about-us ul {
        padding: 0;
        font-size: 15px;
    }
    .about-us hr {
        width: 450px;
    }
    .about-us .visiter ul {
        font-size: 19px;
        margin-top: 20px;
    }
    .about-us .visiter ul li {
        width: 20px;
        height: 28px;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .about-us {
        height: auto;
    }
    .about-us h3 {
        font-size: 15px;
    }
    .content_buttom{
    width: 100%;
    display: grid;
    justify-content: space-around;
}
.about-us .work-us {
  margin-left: 16px;
    }
    .about-us ul {
        padding: 0;
        font-size: 15px;
    }
    .about-us hr {
        width: 450px;
    }
    .about-us .visiter ul {
        font-size: 19px;
        margin-top: 20px;
    }
    .about-us .visiter ul li {
        width: 20px;
        height: 28px;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .about-us h3 {
        font-size: 22px;
    }
    .about-us ul {
        padding: 0;
        font-size: 17px;
    }
    .about-us hr {
        width: 650px;
    }
    .about-us .visiter ul {
        font-size: 14px;
    }
    .about-us .visiter ul li {
        width: 13px;
        height: 22px;
    }
.about-us .text-ico{
    padding-top: 10px;
    width: 140px;
}
.about-us .work-us {
    background-color: black;
    color: #fff;
    border-radius: 10px;
    height: 40px;
    position: relative;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding-right: 10px;
    }
    .about-us .work-us img {
    position: absolute;
    top: 5px;
    left: 20px;
}
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .about-us {
        height: 425px;
    }
    .about-us hr {
        width: 800px;
    }
    .about-us .visiter ul {
        font-size: 15px;
    }
    .about-us .visiter ul li {
        width: 17px;
        height: 24px;
    }
}

/* End About-Us */
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class AppFooter extends Vue {}
</script>
