<template>
    <div class="first_header">
     
       
            <div class="first_nav">
                <div class="child1">  
                    <span>Welcome to E-Dalily <span class="static_word">/ get all products you need</span></span>
                </div>
                <div class="child2">
                    <div><i class="fab fa-facebook-square" aria-hidden="true"></i></div> 
                    <div><i  class="fab fa-google" aria-hidden="true"></i></div> 
                    <div> <i class="fab fa-twitter-square" aria-hidden="true"></i></div> 
                    <div> <i class="fab fa-instagram" aria-hidden="true"></i></div> 
                </div>
                <div class="child3">
                    <div><i class="fas fa-map-marker" aria-hidden="true"></i> </div>
                     <span>|</span> 
                     <div  @click="handleChange()">
                         <span v-if="lang == 'en'">English</span>
                         <span v-else>العربية</span>
                       <i class="fas fa-globe" style="margin: 0 5px;"></i>
                     </div>
                     <span>|</span> 
                     <div class="currency ">USD 
                         <div class="child_currency animate__animated  animate__fadeInUp">
                             <div>USD</div>
                             <div>SYP</div>
                         </div>
                     </div>
                </div>
            </div>
             
           
       
    </div>
</template>

<script>
export default {
    name: 'headerLogo',
    data() {   
        return {
            lang: localStorage.getItem('lang')  ||'en',
            
        };
    },
    computed: {
      
    },
    methods: {  
      handleChange() {
                 if( this.lang == "en"){
                     this.lang == "ar"
             localStorage.setItem('lang', "ar");
                  window.location.reload();
                 }
                 if(this.lang == "ar"){
                     this.lang == "en"
                 localStorage.setItem('lang', "en");
                  window.location.reload();
                 }
          },
    
    },
};
</script>

<style scoped>

/* navbar */
.first_header{
    background-color: #1c2c34; 
    height: 35px;
    font-size: 16px;
    border-bottom: 1px solid #575e62;
}
.first_header .first_nav{
    display: flex;
    justify-content: space-between;
    padding-top: 4px;
}
.first_header .first_nav .child1{
    width:35%;
    color: #fff;
}
.first_header .first_nav .child1 div{
    transition: all .5s;
}
.first_header .first_nav .child1 div:hover,.first_header .first_nav .child3 div:hover{
    color: var(--r);
}
.first_header .first_nav .child2{
 width: 33%;
}
.first_header .first_nav .child3{
    width:20%;
   color: #fff;
    display: flex;
    justify-content: center;
}
.first_header .first_nav .child3 div{
    cursor: pointer;
}
.first_header .first_nav .child3 span{
    margin: 0 5px;
}
.first_header .first_nav .child1 div,.first_header .first_nav .child2 div{
    color: #fff;
    cursor: pointer;
}
.first_header .first_nav .child1{
    display: flex;
    justify-content: space-around;
}
.first_header .first_nav .child2{
    display: flex;
    justify-content: center;
}
.first_header .first_nav .child2 i{
    margin: 0 5px;
    transition: all .5s;
    padding: 5px;
}
.first_header .first_nav .child2 i:hover{
    color: var(--r);
    border: 1px solid var(--r);
   
}
.first_header .first_nav .child3 .currency{
    position: relative;
}
.first_header .first_nav .child3 .currency::after {
    font-family: 'Font Awesome 5 Free';
    content: '\f0d7';
    display: inline-block;
    vertical-align: middle;
    font-weight: 900;
    z-index: 2;
    font-size: 16px;
    position: absolute;
    right: -4px;
    top: 0px;
    color: #fff;
    width: 0;
    height: 0;
}
.first_header .first_nav .child3 .currency:hover .child_currency{
 display: grid; 
}
.first_header .first_nav .child3 .currency:hover::after{
  color: var(--r);
}
.first_header .first_nav .child3 .currency .child_currency{
    display: none; 
    position: absolute;
    background-color: #1c2c34;
    color: #fff;
    z-index: 85;
    right: 0;
    padding: 20px;
    
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
.first_header{
    font-size: 14px;
}
.first_header .first_nav .child3{
    width:33%;
}

}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .first_header .first_nav .child3{
    width:30%;
}
}
/* Medium devices (tablets, 768px and up) */
@media  (max-width: 991.98px) {
    .static_word{
    display: none;
}
}


</style>
