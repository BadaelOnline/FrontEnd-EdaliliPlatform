<template>
    <!-- Start About-Us -->
    <div class="about-us">
        <div class="logo">
             <img
                    @click="goto"
                    height="40"
                    src="../../../public/img/Group.png"
                />
        </div>
        <div class="contain-top">
            <div class="Know-Us">
                <h3>{{ $t('GetKnowUs') }}</h3>
                <ul>
                    <li>
                        <a href="#">{{ $t('AboutUs') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('CareersPress') }}</a>
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
            <div class="Connect">
                <h3>{{ $t('Connectwith') }}</h3>
                <ul>
                    <li>
                        <a href="#"><i class="fab fa-facebook-square" aria-hidden="true"></i>{{ $t('Facebook') }}</a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-twitter-square" aria-hidden="true"></i>{{ $t('Twitter') }}</a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i>{{ $t('Instagram') }}</a>
                    </li>
                </ul>
            </div>
            <div class="Join-Us">
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
            <div class="Let-Help">
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
        </div>
        <div class="contain-bottom">
            <div class="ico">
                <div class="work-uss">
                    <i class="fas fa-credit-card"></i>
                    <h4> <span class="sp1">E</span>-<span class="sp2">D</span>ALELY Points</h4>           
                </div>
                    <div class="work-us">
                 <i class="fab fa-apple"></i>
                    <h4>App Store</h4>
                  
                </div>
                <div class="work-uss">
                  <i class="fab fa-google-play"></i>
                    <h4><span>Get On </span>Google Play</h4>        
                   
                </div>
            </div>
            <div class=" visiter">       
                <div>
                    <h5>الزیارات</h5>
                    <span>0</span>
                    <span>0</span>
                    <span>1</span>
                    <span>5</span>
                    <span>4</span>
                    <span>8</span>
                </div>
                 <div>
                    <h5>المتصلین</h5>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                    <span>2</span>
                    <span>3</span>
                    <span>5</span>
                </div>
               
            </div>
        </div>
    </div>
    
</template>
<style scoped>
.about-us {
    height: auto;
    background-color: #1c2c34;
}
.logo{
    display: flex;
    justify-content: flex-start;
}
.logo img{
    margin: 20px;
    cursor: pointer;
}
/* _____________________ contain-top  __________________ */
.contain-top{
    display: flex;
    justify-content: space-around;
}

.contain-top h3 {
    color: #fff;
    margin: 0 0 20px 0;
    font-size: 24px;
    position: relative;
   text-align: left;
}
 
.contain-top ul {
    list-style: none; 
    padding: 0;
    text-align: left;
}
.contain-top ul li {
    font-size: 18px;
    line-height: 1.8;
}
.contain-top ul li a {
     color: rgb(184, 184, 184);
     text-decoration: none;
     transition: all .5s;
}
.contain-top ul li a i{
    margin-right: 10px;
}
 .contain-top ul li a:hover {
    font-size: 19px;
    color: var(--rhead);
}
/* Small devices (landscape phones, 576px and up) */
@media (max-width: 767.98px) {
.logo{
    display: flex;
    justify-content: center;
}
 .contain-top .logo{
    justify-content: center;
}
.contain-top{
  flex-flow: wrap;    
}
.Know-Us,.Connect, .Join-Us, .Let-Help{
 width: 45%;
}
.contain-top h3 {
   text-align: center;
}
.contain-top ul {
    text-align: center;
}
}
/* _____________________ contain-bottom  __________________ */
 .contain-bottom{
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    padding-bottom: 30px;
}
 .contain-bottom i{
    color: var(--rhead);
    font-size: 25px;
}
.contain-bottom .ico{
    width: 77%;
    display: flex;
    justify-content: space-around;
}
.contain-bottom .ico .work-uss{
    border: 1px solid var(--rhead);
    padding: 5px 5px;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 2px 5px 8px #97393d;
    transition: all .5s;
    font-size: 24px;
}
.contain-bottom .ico .work-uss h4{
  
    font-size: 22px;
}
.contain-bottom .ico .work-us h4{
  
    font-size: 22px;
}
.contain-bottom .ico .work-us{
    border: 1px solid var(--rhead);
    padding: 5px 33px;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 2px 5px 8px #97393d;
    transition: all .5s;
    font-size: 24px;
}
.contain-bottom .ico .work-uss:hover{
    box-shadow:
      0 0 7px #b9494d,
      0 0 10px #b9494d,
      0 0 21px #b9494d;
}
.contain-bottom .ico .work-us:hover{
    box-shadow:
      0 0 7px #b9494d,
      0 0 10px #b9494d,
      0 0 21px #b9494d;
}
.sp1{
    color: #247ba0;
    font-weight: bold;
}
.sp2{
    color: #dd222a;
    font-weight: bold;
}
.ico h4{
    color: #f0705d;
     transition: all .5s;
}
.contain-bottom .ico .work-uss:hover h4{
   color: var(--rhead);  
}
.contain-bottom .ico .work-us:hover h4{
   color: var(--rhead);  
}
.contain-bottom .visiter{
    width: 30%;
    display: flex;
    justify-content: space-around;
}
.contain-bottom .visiter h5{
    color: #fff;
}
.contain-bottom .visiter span{
    color: var(--rhead);
    padding: 5px;
    margin: 0 2px;
    border-radius: 3px;
    font-weight: bold;
}
/* Medium devices (tablets, 768px and up) */
@media  (max-width: 991.98px) {
.ico h4{
    font-size: 20px;
}
.contain-bottom {
    width: 100%;
    display: flex;
    padding-bottom: 30px;
    flex-direction: column;
}
.contain-bottom .ico {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-bottom: 25px;
}
.contain-bottom .visiter {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .ico h4{
    font-size: 16px;
}
 .contain-bottom .ico{
    width: 60%;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
} 
 .contain-bottom .ico div{

    margin: 20px 0;
} 
}
/* End About-Us */
</style>  
<script>

export default {
    name: 'navbarHeader',
    data() {
        return {
         
        };
    }, 
   
    methods: {
     goto: function () {
            this.$router.push(`/`);
        },
    },
};
</script>