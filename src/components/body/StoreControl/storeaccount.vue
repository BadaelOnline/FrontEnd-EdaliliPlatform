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
                 <router-link to="/store"> <button class="setting-form">صفحة المتجر</button></router-link>
                <i class="fas fa-sign-out-alt"></i>
            </div>
        </div> 
        <div class="content">
             <div id="cover" class="cover" @click="closeside()"></div>
            <div class="smsidebar" id="iconSide" @click="openside()">
                <i  class="fa fa-angle-left"></i>
            </div>
            <div class="sidebar" id="sidebar">
                <div class="search">
                    <input type="text">
                    <i class="fas fa-search"></i>
                </div>
                <div class="list">
                     <img src="../../../../public/img/Icons/1Dashboard/DashboardOutline.svg" alt="">
                     <span>لوحة التحكم</span>
                </div>
                <div @click="componentSidebar = 'acount'" 
                :class="{ active:componentSidebar === 'acount'}" class="list">
                     <img src="../../../../public/img/Icons/2StoreAccount/StoreAccountFull.svg" alt="">
                     <span> حساب المتجر</span>
                </div>
                <div @click="componentSidebar = 'order'"
                :class="{ active:componentSidebar === 'order'}" class="list" >
                     <img src="../../../../public/img/Icons/3Orders/OrdersOutline.svg" alt="">
                     <span>  الطلبات</span>
                </div>
                <div @click="componentSidebar = 'sale'"
                :class="{ active:componentSidebar === 'sale'}" class="list">
                     <img src="../../../../public/img/Icons/4Sales/SalesOutline.svg" alt="">
                     <span>  المبيعات</span>
                </div>
                <div @click="componentSidebar = 'products'"
                :class="{ active:componentSidebar === 'products'}" class="list">
                     <img src="../../../../public/img/Icons/5Products/ProductsOutline.svg" alt="">
                     <span>  المنتجات</span>
                </div>
                <div class="drop">
                    <div class="list" @click="opendrop1()"> 
                    <img src="../../../../public/img/Icons/6Shipping/ShippingFull.svg" alt="">
                     <span> الشحن والتوصيل</span>
                     <i v-if="drop1" class="fa fa-angle-down"></i>
                     <i v-else class="fa fa-angle-left"></i>
                     </div>
                     <div @click="componentSidebar = 'ship'"
                     :class="[drop1 ? 'active': '',componentSidebar === 'ship' ? 'act': '']"  class="drop-item animate__animated animate__fadeInRight animate__faster">طرق التوصيل</div>
                     <div @click="componentSidebar = 'shipOption'" 
                     :class="[drop1 ? 'active': '',componentSidebar === 'shipOption' ? 'act': '']"  class="drop-item animate__animated animate__fadeInRight animate__fast">إعدادات طرق التوصيل</div>
                </div>
                <div class="drop">
                    <div class="list" @click="opendrop2()"> 
                    <img src="../../../../public/img/Icons/7Payment/PaymentOutline.svg" alt="">
                     <span>الدفع</span>
                     <i v-if="drop2" class="fa fa-angle-down"></i>
                     <i v-else class="fa fa-angle-left"></i>
                     </div>
                     <div @click="componentSidebar = 'pay'"
                     :class="[drop2 ? 'active': '',componentSidebar === 'pay' ? 'act': '']" class="drop-item animate__animated animate__fadeInRight animate__faster">طرق الدفع</div>
                     <div @click="componentSidebar = 'payOption'"
                     :class="[drop2 ? 'active': '',componentSidebar === 'payOption' ? 'act': '']" class="drop-item animate__animated animate__fadeInRight animate__fast">إعدادات طرق الدفع</div>
                </div>
                <div class="drop">
                    <div class="list" @click="opendrop3()"> 
                    <img src="../../../../public/img/Icons/8Employees/EmployeesFull.svg" alt="">
                     <span>إدارة الموظفين</span>
                     <i v-if="drop3" class="fa fa-angle-down"></i>
                     <i v-else class="fa fa-angle-left"></i>
                     </div>
                     <div  @click="componentSidebar = 'customer'"
                     :class="[drop3 ? 'active': '',componentSidebar === 'customer' ? 'act': '']" class="drop-item animate__animated animate__fadeInRight animate__faster">الموظفين</div>
                     <div @click="componentSidebar = 'permission'"
                      :class="[drop3 ? 'active': '',componentSidebar === 'permission' ? 'act': '']" class="drop-item animate__animated animate__fadeInRight animate__fast">الصلاحيات</div>
                </div>
                <div @click="componentSidebar = 'categori'" 
                :class="{ active:componentSidebar === 'categori'}" class="list"> 
                     <img src="../../../../public/img/Icons/1Dashboard/DashboardOutline.svg" alt="">
                     <span>التصنيفات</span>
                </div>
                <div class="list">
                     <img src="../../../../public/img/Icons/Customers/CustomersOutline.svg" alt="">
                     <span>الزبائن</span>
                </div>
                <div class="list">
                     <img src="../../../../public/img/Icons/Statistics/SuppliersOutline.svg" alt="">
                     <span>الموردين</span>
                </div>
                <div class="list">
                     <img src="../../../../public/img/Icons/Purchases/PurchasesOutline.svg" alt="">
                     <span>المشتريات</span>
                </div>
                <div class="drop">
                    <div class="list" @click="opendrop3()"> 
                    <img src="../../../../public/img/Icons/AD/ADOutline.svg" alt="">
                     <span>إضافة إعلان</span>
                     <i v-if="drop3" class="fa fa-angle-down"></i>
                     <i v-else class="fa fa-angle-left"></i>
                     </div>
                     <div :class="[drop3 ? 'active': '']" class="drop-item animate__animated animate__fadeInRight animate__faster">الموظفين</div>
                     <div :class="[drop3 ? 'active': '']" class="drop-item animate__animated animate__fadeInRight animate__fast">الصلاحيات</div>
                </div>
                <div class="list">
                     <img src="../../../../public/img/Icons/MaterialMovement/MaterialMovementOutline.svg" alt="">
                     <span>حركة مادة</span>
                </div>
                <div class="list">
                     <img src="../../../../public/img/Icons/Statistics/StatisticsOutline.svg" alt="">
                     <span>إحصائيات</span>
                </div>
            </div>
            <component :is="componentSidebar" />
        </div>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap');
</style> 
<script>
import $ from 'jquery';
import { defineAsyncComponent } from 'vue';
export default {
    name: 'storeaccount',
    data() {
        return {
        drop1: false,
        drop2: false,
        drop3: false,
        dropside: false,
        componentSidebar:'acount',
        };
    },
    props: [''],
    components: {
    acount: defineAsyncComponent(() =>import(`@/components/body/StoreControl/component/acount.vue`)),
    order: defineAsyncComponent(() =>import(`@/components/body/StoreControl/component/order.vue`)),
    sale: defineAsyncComponent(() =>import(`@/components/body/StoreControl/component/sale.vue`)),
    products: defineAsyncComponent(() =>import(`@/components/body/StoreControl/component/products.vue`)),
    ship: defineAsyncComponent(() =>import(`@/components/body/StoreControl/component/ship.vue`)),
    shipOption: defineAsyncComponent(() =>import(`@/components/body/StoreControl/component/shipOption.vue`)),
    pay: defineAsyncComponent(() =>import(`@/components/body/StoreControl/component/pay.vue`)),
    payOption: defineAsyncComponent(() =>import(`@/components/body/StoreControl/component/payOption.vue`)),
    customer: defineAsyncComponent(() =>import(`@/components/body/StoreControl/component/customer.vue`)),
    permission: defineAsyncComponent(() =>import(`@/components/body/StoreControl/component/permission.vue`)),
    categori: defineAsyncComponent(() =>import(`@/components/body/StoreControl/component/categori.vue`)),

    },
  
    methods:{
        opendrop1(){
            this.drop1 = !this.drop1;
        },
        opendrop2(){
            this.drop2 = !this.drop2;
        },
        opendrop3(){
            this.drop3 = !this.drop3;
        },
        openside(){
        $("#iconSide").css("display","none");
        $("#sidebar").css("right","0");
        $("#cover").css("display","block");
        },
        closeside(){
        $("#iconSide").css("display","flex");
        $("#sidebar").css("right","-220px");
        $("#cover").css("display","none");
        },
        },
      
   
};
</script>

<style lang="scss" scoped>
.parent{
    font-family: 'Tajawal', sans-serif;
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
.content{
    .cover{
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 49;
    top:  0;
    display: none;
    }
    .smsidebar{
    background: #1C2C34;
    color: #fff;
    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 991.98px)  {
         display: none !important;
    }
    @media  (max-width: 991.98px) {
    width: 40px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-inline-end: 5px;
    position: fixed;
    z-index: 100;
    top: 35%;
    right: -15px;
    padding: 20px 8px;
    border-radius: 10px;
    font-size: 23px;
    cursor: pointer;
    }
    }
    background-color: #ddd;
    display: flex;
    position: relative;
    .sidebar{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;
    width: 220px;
    overflow-y: scroll;
    scrollbar-width: none;
    background: #1C2C34;
    @media  (max-width: 991.98px) {
    position: absolute;
    z-index: 50;
    top: 0;
    right: -220px;
    transition: .5s;
    }
    .search{
        display: flex;
        align-items: center;
        background-color: #2A3D46;
        border-radius:5px;
        height: 30px;
        input{
        background-color: transparent;
        border: none;
        width: 85%;
        }
        i{
            color: #fff;
            margin-inline-end: 5px;
        }
    }
    .list{
        width: 100%;
        display: flex;
        margin-top: 15px;
        align-items: center;
        position: relative;
        padding: 5px 10px 5px 5px;
        cursor: pointer;
        img{
            width: 26px;
        }
        span{
            color: #fff;
            margin-inline-start: 10px;
        }
        i {
            color: #fff;
            margin-inline-start: auto;
        }
        &::after{
            content: '';
            position: absolute;
            right: 0;
            height: 100%;
            width: 5px;
            border-radius: 5px;
            background-color: #ffffff14;
            transition: .3s;
        }
        &:hover{
            &::after{
            width: 100%;
        } 
      
        }
        &.active{
        &::after{
            width: 100%;
        } 
        }
    }
      
       .drop{
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        flex-wrap: wrap;
        div{
            display: flex;
            align-items: center;
            width: 100%;
              img{
            width: 26px;
        }
        span{
            color: #fff;
            margin-inline-start: 10px;
        }
        i {
            color: #fff;
            margin-inline-start: auto;
        }
        
           }
      .drop-item{
        color: #fff;
        width: 75%;
        margin-inline-start: auto;
        font-size: 13px;
        padding: 5px 8px;
        position: relative;
        display: none;
        margin-bottom: 5px;
        cursor: pointer;
            &::after{
            content: '';
            position: absolute;
            right: 0;
            height: 100%;
            width: 0;
            border-radius: 5px;
            background-color: #ffffff14;
            transition: .3s;
        }
        &:hover{
            &::after{
            width: 100%;
        } 
        }
        &.active{
        display: block;
        }
        &.act{
              &::after{
            width: 100%;
        }    
        }
      }
    }
    }
}
</style>