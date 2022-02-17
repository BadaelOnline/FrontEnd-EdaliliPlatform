<template>
    <div class="parent">
        <div class="top">
            <div class="name">
                <div class="imag"><img src="" alt=""></div>
                <h2>اهلا بك Admin</h2>
            </div>
            <div class="setting">
               <i class="fas fa-search"></i>
               <i class="far fa-bell"></i>
                <i class="far fa-comment"></i>
                <button class="packge">ترقية الباقة</button>
                 <router-link to="/storeControl"> <button class="setting-form">فتح لوحة التحكم</button></router-link>
                <i class="fas fa-sign-out-alt"></i>
            </div>
        </div>
        <div
            id="carouselExampleInterval"
            class="carousel slide carouselSlide"
            data-ride="carousel"
            style="justify-content: center"
        >
        <div class="upload">
            <i class="fa fa-camera" aria-hidden="true"></i>
        </div>
            <div class="carousel-inner text-center">
                <div class="carousel-item active" data-interval="2000">
                    <img style="height: 38vw;"
                        src=""
                        class="d-block w-100"
                        alt=""
                    />
                </div>
                <div class="carousel-item">
                    <img style="height: 38vw;"
                        src=""
                        class="d-block w-100"
                        alt=""
                    />
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#carouselExampleInterval"
                role="button"
                data-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carouselExampleInterval"
                role="button"
                data-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="bottom">
            <div class="store-name">
                 <div class="imag"><img src="" alt=""></div>
                 <div class="detal">
                     <span class="name">اسم المتجر</span>
                     <div style="color:#808080;font-size: 14px;"> 
                         <span>سمة المتجر</span>
                         <span class="range">0.0 <i class="fa fa-star"></i></span>
                         <span>(0)</span>
                     </div>
                 </div>
                 </div>
            <div class="category">
                <ul id="category">
                    <li @click="addactive" >المنتجات</li>
                    <li @click="addactive">العروضات</li>
                    <li @click="addactive">الفعاليات</li>
                    <li @click="addactive">فرص العمل</li>
                    <li @click="addactive" class="active">حول المتجر</li>
                </ul>
            </div>
            <div class="setting">
                <button class="but1">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    متابعة
                </button >
                <button class="but2"><span>...</span></button>
            </div>
        </div>
        <div class="content">
            <div class="shair-element">

            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    name: 'aboutstore',
    data() {
        return {
            storeID: {},
            Products: [],
            ShowDetails: false,
            details:{
                id: null,
                name: "",
                long_des: "",
                price:null
            }
        };
    },
    props: [''],
    components: {
      
      
    },
  
    methods:{
    addactive(){
        $('#category li').on('click', function() {
        $("#category li").removeClass('active');
        $(this).addClass('active');
    });
        }
        },
      
   
};
</script>

<style scoped>
.upload{
   position: absolute;
    width: 40px;
    height: 40px;
    background-color: #fbfbfb;
    left: 25px;
    z-index: 99;
    bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
}
.upload i {
    font-size: 19px;
    color: #777;
}
.carousel-inner {
    width: 100%;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
    width: 40px;
    height: 50px;
}
.carousel-inner {
    background-color: #FAFF00;;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
}
</style>
<style lang="scss" scoped>
.parent{
    
    .top{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    .name{
    display: flex;
    align-items: center;
    @media (max-width: 767.98px) {
    flex-direction: column;
    }
    .imag{
    width: 55px;
    height: 55px;
    background-color: #ccc;
    border-radius: 50%;
    
    }
    h2{
        font-size: 24px;
        margin-inline-start: 10px;
    }
    }
    .setting{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
 
    i{
        color: #808080;
        font-size: 25px;
        padding: 10px;
        transition: .3s;
        &:hover{
        background-color: #eee;
        border-radius: 5px;
        cursor: pointer;
        }
    }
    .packge{
        border-width: 4px;
        border-style: solid;
        background: linear-gradient(#fff,#fff) padding-box, linear-gradient(to right, #6161ff, #fd5252) border-box;
        border: 2px solid transparent;
        padding: 5px 10px;
        border-radius: 50px;
        color: #DE222A;
        transition: .3s;
        margin: 0 5px;
        &:hover{
           color: #fff;
           background: linear-gradient(#6161ff, #fd5252) padding-box, linear-gradient(to right, #6161ff, #fd5252) border-box;
        }
    }
    .setting-form{
        padding: 10px 15px;
        color: #fff;
        background-color: #247BA0;
        border: none;
        border-radius: 5px;
        transition: .3s;
        margin: 0 5px;
        &:hover{
        background-color:  #2EA9DD;
        }
    }
    }
    }
}
.bottom{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    overflow: hidden;
    .store-name{
        display: flex;
    align-items: center;
    .imag{
    width: 55px;
    height: 55px;
    background-color: #ccc;
    border-radius: 50%;
    margin-inline-end: 10px;
    }
    .detal{
    .range{
    background-color: #FFB800;
    color: #fff;
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 12px;
    margin: 0 5px;
    }
    }
    }
    .category{
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-around;
        ul{
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: space-around;
        width: 80%;
        li{
        color: #000;
        font-weight: 500;
        position: relative;
        cursor: pointer;
        &::after{
        content: "";
        position: absolute;
        width: 0;
        // width: 150%;
        height: 6px;
        background-color: #247BA0;
        bottom: -27px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
        transition: .3s;
        }     
        &:hover{
            &::after{
            width: 150%;
            }
        }
        }
         .active{
        &::after{
        width: 150%;
        }
        }
        }
    }
    .setting{
    display: flex;
    align-items: center;  
    .but1{
        background-color: #247BA0;
        border: none;
        border-radius: 5px;
        padding: 8px 20px;
        color: #fff;
    }   
    .but2{
        padding: 5px 10px 10px;
        color: #247BA0;
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #247BA0;
        margin-inline-start: 10px;

        span{
            padding-bottom: 5px;
            font-weight: bold;
        }
    }  
    }
}
</style>