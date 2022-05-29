<template>
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
                     <img src="../../../../../public/img/Icons/1Dashboard/DashboardOutline.svg" alt="">
                     <span>لوحة التحكم</span>
                </div>
                <div @click="componentSidebar = 'acount';$router.go(-1)" 
                :class="{ active:componentSidebar === 'acount'}" class="list">
                     <img src="../../../../../public/img/Icons/2StoreAccount/StoreAccountFull.svg" alt="">
                     <span> حساب المتجر</span>
                </div>
                <div @click="componentSidebar = 'order';$router.go(-1)" 
                :class="{ active:componentSidebar === 'order'}" class="list" >
                     <img src="../../../../../public/img/Icons/3Orders/OrdersOutline.svg" alt="">
                     <span>  الطلبات</span>
                </div>
                <div @click="componentSidebar = 'sale';$router.go(-1)"
                :class="{ active:componentSidebar === 'sale'}" class="list">
                     <img src="../../../../../public/img/Icons/4Sales/SalesOutline.svg" alt="">
                     <span>  المبيعات</span>
                </div>
                <div @click="componentSidebar = 'showProduct';$router.go(-1)"
                :class="{ active:componentSidebar === 'products'}" class="list">
                     <img src="../../../../../public/img/Icons/5Products/ProductsOutline.svg" alt="">
                     <span>  المنتجات</span>
                </div>
                <div class="drop">
                    <div class="list" @click="opendrop1()"> 
                    <img src="../../../../../public/img/Icons/6Shipping/ShippingFull.svg" alt="">
                     <span> الشحن والتوصيل</span>
                     <i v-if="drop1" class="fa fa-angle-down"></i>
                     <i v-else class="fa fa-angle-left"></i>
                     </div>
                     <div @click="componentSidebar = 'ship';$router.go(-1)"
                     :class="[drop1 ? 'active': '',componentSidebar === 'ship' ? 'act': '']"  class="drop-item animate__animated animate__fadeInRight animate__faster">طرق التوصيل</div>
                     <div @click="componentSidebar = 'shipOption';$router.go(-1)" 
                     :class="[drop1 ? 'active': '',componentSidebar === 'shipOption' ? 'act': '']"  class="drop-item animate__animated animate__fadeInRight animate__fast">إعدادات طرق التوصيل</div>
                </div>
                <div class="drop">
                    <div class="list" @click="opendrop2()"> 
                    <img src="../../../../../public/img/Icons/7Payment/PaymentOutline.svg" alt="">
                     <span>الدفع</span>
                     <i v-if="drop2" class="fa fa-angle-down"></i>
                     <i v-else class="fa fa-angle-left"></i>
                     </div>
                     <div @click="componentSidebar = 'pay';$router.go(-1)"
                     :class="[drop2 ? 'active': '',componentSidebar === 'pay' ? 'act': '']" class="drop-item animate__animated animate__fadeInRight animate__faster">طرق الدفع</div>
                     <div @click="componentSidebar = 'payOption';$router.go(-1)"
                     :class="[drop2 ? 'active': '',componentSidebar === 'payOption' ? 'act': '']" class="drop-item animate__animated animate__fadeInRight animate__fast">إعدادات طرق الدفع</div>
                </div>
                <div class="drop">
                    <div class="list" @click="opendrop3()"> 
                    <img src="../../../../../public/img/Icons/8Employees/EmployeesFull.svg" alt="">
                     <span>إدارة الموظفين</span>
                     <i v-if="drop3" class="fa fa-angle-down"></i>
                     <i v-else class="fa fa-angle-left"></i>
                     </div>
                     <div  @click="componentSidebar = 'customer';$router.go(-1)"
                     :class="[drop3 ? 'active': '',componentSidebar === 'customer' ? 'act': '']" class="drop-item animate__animated animate__fadeInRight animate__faster">الموظفين</div>
                     <div @click="componentSidebar = 'permission';$router.go(-1)"
                      :class="[drop3 ? 'active': '',componentSidebar === 'permission' ? 'act': '']" class="drop-item animate__animated animate__fadeInRight animate__fast">الصلاحيات</div>
                </div>
                <div @click="componentSidebar = 'categori';$router.go(-1)" 
                :class="{ active:componentSidebar === 'categori'}" class="list"> 
                     <img src="../../../../../public/img/Icons/1Dashboard/DashboardOutline.svg" alt="">
                     <span>التصنيفات</span>
                </div>
                <div class="list">
                     <img src="../../../../../public/img/Icons/Customers/CustomersOutline.svg" alt="">
                     <span>الزبائن</span>
                </div>
                <div class="list">
                     <img src="../../../../../public/img/Icons/Statistics/SuppliersOutline.svg" alt="">
                     <span>الموردين</span>
                </div>
                <div class="list">
                     <img src="../../../../../public/img/Icons/Purchases/PurchasesOutline.svg" alt="">
                     <span>المشتريات</span>
                </div>
                <div class="drop">
                    <div class="list" @click="opendrop3()"> 
                    <img src="../../../../../public/img/Icons/AD/ADOutline.svg" alt="">
                     <span>إضافة إعلان</span>
                     <i v-if="drop3" class="fa fa-angle-down"></i>
                     <i v-else class="fa fa-angle-left"></i>
                     </div>
                     <div :class="[drop3 ? 'active': '']" class="drop-item animate__animated animate__fadeInRight animate__faster">الموظفين</div>
                     <div :class="[drop3 ? 'active': '']" class="drop-item animate__animated animate__fadeInRight animate__fast">الصلاحيات</div>
                </div>
                <div class="list">
                     <img src="../../../../../public/img/Icons/MaterialMovement/MaterialMovementOutline.svg" alt="">
                     <span>حركة مادة</span>
                </div>
                <div class="list">
                     <img src="../../../../../public/img/Icons/Statistics/StatisticsOutline.svg" alt="">
                     <span>إحصائيات</span>
                </div>
            </div>
             <div class="parent">
     <h5 @click="$router.go(-1)" style="cursor: pointer;">
          <i  class="fa fa-arrow-right"></i>
          الرجوع الى قائمة المنتجات
        </h5>
      <div class="card">
           <h5>تعديل المنتج</h5>
         <div class="rw">
        <div class="row1">
            <div class="paje">
                <h6>اسم المنتج</h6>
            </div>
        </div>
        <div class="other">
            <button class="but1">حفظ التغييرات</button>
            <button class="butdelet">حذف منتج</button>
        </div>
         </div>
         <div class="section-edit">
             <span @click="sectionEdit=1" :class="[sectionEdit == 1?'active':'']">عام</span>
             <span @click="sectionEdit=2" :class="[sectionEdit == 2?'active':'']">custome field</span>
             <span @click="sectionEdit=3" :class="[sectionEdit == 3?'active':'']">الصور</span>
         </div>
            <form class="form-enter1" v-if="sectionEdit == 1">
                <div>
                    <label for="">الفئة: </label>
                    <input type="text">
                </div>
                <div>
                    <label for="">السعر: </label>
                    <input type="text">
                </div>
                <div>
                    <label for="">الخصم: </label>
                    <input type="text">
                </div>
                <div>
                    <label for="">الكمية: </label>
                    <input type="text">
                </div>
                <div>
                    <label for="">ملاحظات: </label>
                    <input type="text">
                </div>
            </form>
            <form class="form-enter2" v-if="sectionEdit == 2">
                <div class="rw2" >
                    <div> <input type="checkbox" disabled></div>
             <div><span>الصورة</span></div>
             <div><span>الاسم</span></div>
             <div class="wid30"><span>السعر</span></div>
             <div class="wid30"><span>الكمية</span></div>
             <div class="wid30"><span>ملاحظات</span></div>
      </div>  
      <hr>
    
       <div  class="rw2 rw2-item" v-for="(item,index) in productsDet" :key="index">
           <div> <input type="checkbox"></div>
            <div class="imag"><img src="" alt=""></div>
            <div >{{ProductName}}</div>
            <div class="wid30">
                <!-- <input type="text" @keypress="acceptNumber($event)" v-model="store_product[index].products.price">   -->
                <input type="text" :value="item.price">  
            </div>
            <div class="wid30" value="1">
                <input type="text">
            </div>
            <div class="wid30">
               <textarea name="" id="" cols="23" rows="4"></textarea>
            </div>
      </div>
     
            </form>
             <form class="form-enter2" v-if="sectionEdit == 3">
                <div class="rw2" >
                    <div> <input type="checkbox" disabled></div>
             <div><span>الصورة</span></div>
             <div><span>الاسم</span></div>
             <div class="wid30"><span>الترتيب</span></div>
             <div class="wid30"><span>الصورة الأساسية</span></div>
             <div class="wid30"><span>الصورة الصغيرة</span></div>
             <div></div>
      </div>  
      <hr>
       <div class="rw2 rw2-item" v-for="(item,index) in 2" :key="index">
            <div> <input type="checkbox"></div>
            <div class="imag"><img src="" alt=""></div>
            <div>{{ProductName}}</div>
            <div class="wid30">
                <!-- <input type="text" @keypress="acceptNumber($event)" v-model="store_product[index].products.price">   -->
                <input type="text" >  
            </div>
            <div class="wid30">
                <input class="rad" :name="`s${index}`" type="radio">
            </div>
            <div class="wid30">
                 <input class="rad" :name="`s${index}`" type="radio">
            </div>
            <div class="">
                <button class="grayBut">حذف الصورة</button>
                <button class="grayBut">تعديل الصورة</button>
            </div>
      </div>
            </form>
            
      </div>
      <div class="small-card">
            <h5>تعديل المنتج</h5>
        <div class="action">
            <div class="order-num">
               <h6>اسم المنتج</h6>
            </div>
            <div class="other">
            <button class="but1">حفظ التغييرات</button>
            <button class="butdelet">حذف منتج</button>
            </div>
        </div>
        <div class="section-edit">
             <span @click="sectionEdit=1" :class="[sectionEdit == 1?'active':'']">عام</span>
             <span @click="sectionEdit=2" :class="[sectionEdit == 2?'active':'']">custome field</span>
             <span @click="sectionEdit=3" :class="[sectionEdit == 3?'active':'']">الصور</span>
         </div>
        <!-- order 1 -->
        <form class="form-enter1" v-if="sectionEdit == 1">
                <div>
                    <label for="">الفئة: </label>
                    <input type="text">
                </div>
                <div>
                    <label for="">السعر: </label>
                    <input type="text">
                </div>
                <div>
                    <label for="">الخصم: </label>
                    <input type="text">
                </div>
                <div>
                    <label for="">الكمية: </label>
                    <input type="text">
                </div>
                <div>
                    <label for="">ملاحظات: </label>
                    <input type="text">
                </div>
            </form>
        <div class="orders" v-if="sectionEdit == 2">
            <div class="top">
            <div class="user">
               <div class="imag"><img src="" alt=""></div>

            </div>
  
            </div>
            <div class="content">
                <div>
                    <span>الاسم </span>
                    <span style="font-weight:bold;color:#247ba0">name</span>
                </div>
                <div>
                    <span>السعر</span>
                    <input type="text">
                </div>
                <div>
                    <span>الكمية</span>
                    <input type="text">
                   
                </div>
                <div>
                <button class="butdelet">حذف</button>
                </div>
            </div> 
            <hr>
        </div>
        <div class="orders" v-if="sectionEdit == 3">
            <div class="top">
            <div class="user">
               <div class="imag"><img src="" alt=""></div>

            </div>
  
            </div>
            <div class="content">
                <div>
                    <span>الاسم </span>
                    <span style="font-weight:bold;color:#247ba0;justify-content: center;">name</span>
                </div>
                <div>
                    <span>الترتيب</span>
                    <input type="text">
                </div>
                <div>
                    <span>الصورة الأساسية</span>
                    <input :name="`s`" style="width: 50%;" class="rad" type="radio">
                </div>
                <div>
                    <span>الصورة الأساسية</span>
                    <input :name="`s`" style="width: 50%;" class="rad" type="radio">
                </div>
                <div>
                <!-- <button class="grayBut">حذف الصورة</button>
                <button class="grayBut">تعديل الصورة</button> -->
                <button class="but1">تعديل الصورة</button>
                <button class="butdelet">حذف الصورة</button>
                </div>
            </div> 
            <hr>
        </div>
      </div>
    </div>
        </div>
   
</template>
<style lang="scss" scoped>
h5{
    font-weight: bold;
}
.rad{
    height: 20px;
}
.rw2-item{
    margin-bottom: 10px;
    border-bottom: 1px solid #aaa;
    padding-bottom: 10px;
    align-items: center;
    .imag{
    width: 100px;
    height: 100px;
    background-color: #ddd;
    img{
        width: 100%;
        height: 100%;
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
.parent{
    padding: 30px;
    width: calc(100% - 220px);
    @media (max-width: 991.98px) {
    width: 100%;
    padding: 15px;
    }
    h5{
    text-align: start;
    }
    .card{
    width: 99%;
    border-radius: 10px;
    box-shadow: 1px 2px 5px #666464;
    padding:0 20px 20px;
    @media (max-width: 767.98px) {
    display: none;
    }
    h5{
    margin-top: 20px;
    font-size: 18px;
    margin-bottom: 0;
    }
    .rw{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding-bottom: 15px;
        .row1{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 20%;
        @media (max-width:568px) {
        width: 100%;
        margin-bottom: 10px;
    }
    .paje{
        display: flex;
        margin-top: 20px;
        align-items: center;
    h6{
    text-align: start;
    } 
    }
    }
   .other{
   width: 300px;
    display: flex;
    justify-content: end;
    flex-wrap: wrap;
    width: 80%;
    @media (max-width:568px) {
        width: 100%;
        justify-content: center;
    }
 
   }
    }
    .section-edit{
        display: flex;
        padding: 10px 0 10px;
        border-bottom: 3px solid #80808087;
        span{
            color: #808080;
            width: 180px;
            text-align: center;
            transition: .3s;
            cursor: pointer;
            &.active{
            color: #247BA0;
            position: relative;
            &::after{
                content: '';
                position: absolute;
                background-color: #247BA0;
                bottom: -13px;
                left: 0;
                width: 100%;
                height: 3px;
                transition: .3s;
            }
            
        }
        }
        
    }
    .form-enter1{
        display: flex;
        flex-wrap: wrap;
        padding: 20px 50px;
        @media (max-width:768px) {
            padding: 20px;
            }
        div{
            width: 48%;
            display: flex;
            flex-direction: column;
            text-align: start;
            margin: 5px;
            @media (max-width:768px) {
            width: 100%;
            }
            label{
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #808080;    
            }
            input{
                width: 80%;
                @media (max-width:768px) {
                width: 100%;
                }
                height: 44px;
                padding: 0 10px;
                border-radius: 5px;
                background: transparent;
                color: #000000;
                outline: none;
                border: 2px solid #b3b1b1;
            }
        }
    }
    .form-enter2{
    padding: 20px 0;
         .rw2{
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    .wid30{
        width: 25%;
        input{
            width: 80%;
            padding: 5px;
            height: 44px;
            outline: none;
            border: 2px solid #b3b1b1;
        }
        textarea{
            resize: none;
            outline: none;
            border: 2px solid #b3b1b1;
            border-radius: 5px;
            padding: 5px ;
        }
        .rad{
        height: 20px;
        }

    }
    div{
    width: 120px;
    span{
    font-size: 14px;
    }
    input{
    width: 70%;
    border: 1px solid #9d9d9d;
    border-radius: 5px;
    outline: none;
    }
    select{
    width: 70%;
    }
    .from{
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    }
    }
       .action{
        display: grid;
        align-content: space-around;
        button{
            width: 100%;
            height: 30px;
            border-radius: 5px;
            font-size: 14px;
        }
        .but1{
        background-color: #247BA0;
        border: none;
         color: #fff;
        }
        .but2{
        background-color: transparent;
        border: 1px solid #666464;
        color: #222121;
        }
    }
    }
    hr{
    background-color: #247BA0;
    height: 1px;
    }
    }
    }
    
    .small-card{
        display: none;
    @media (max-width: 767.98px) {
    display: block;
    width: 99%;
    border-radius: 10px;
    box-shadow: 1px 2px 5px #666464;
    padding:10px;
    background-color: #fff;
    .section-edit{
        display: flex;
        padding: 25px 0 10px;
        border-bottom: 3px solid #80808087;
        span{
            color: #808080;
            width: 180px;
            text-align: center;
            transition: .3s;
            cursor: pointer;
            &.active{
            color: #247BA0;
            position: relative;
            &::after{
                content: '';
                position: absolute;
                background-color: #247BA0;
                bottom: -13px;
                left: 0;
                width: 100%;
                height: 3px;
                transition: .3s;
            }
            
        }
        }
        
    }
      .form-enter1{
        display: flex;
        flex-wrap: wrap;
        padding: 20px 50px;
        @media (max-width:768px) {
            padding: 20px;
            }
        div{
            width: 48%;
            display: flex;
            flex-direction: column;
            text-align: start;
            margin: 5px;
            @media (max-width:768px) {
            width: 100%;
            }
            label{
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #808080;    
            }
            input{
                width: 80%;
                @media (max-width:768px) {
                width: 100%;
                }
                height: 44px;
                padding: 0 10px;
                border-radius: 5px;
                background: transparent;
                color: #000000;
                outline: none;
                border: 2px solid #b3b1b1;
            }
        }
    }
    .action{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .order-num{
    width: 170px;
    display: flex;
    justify-content: space-between;
    div{
    select{
    background-color: transparent;
    border: 1px solid #ddd;
    border-radius: 5px;   
    }
    }
    }
    .other{
        width: 100%;
    img{
    margin: 0 5px;
    cursor: pointer;
    transition: .3s;
    &:hover{
    scale: 1.1;
    }
    }
    }
    }
    .orders{
    display: flex;
    flex-direction: column;
    .top{
    margin: 20px;
    .user{
    display: flex;
    justify-content: center;
    .imag{
        width: 100px;
        height: 100px;
        background-color: #ddd;
        border-radius: 50%;
        img{
            border-radius: 50%;
            width: 100%;
            height: 100%;
        }
    }
    }
    
    }    
    .content{
    flex-direction: column;
    div{
    display: flex;
    justify-content: space-around;
    padding: 5px;
    background-color: #eee;
    border-radius: 5px;
    margin-top: 5px;  
    span{
        width: 50%;
        text-align: start;
        padding: 0 10px;
        display: flex;
        align-items: center;
    }  
    input{
            padding: 5px;
            outline: none;
            border-radius: 5px;
            border: 2px solid #b3b1b1;
        }
    }
    }
     hr{
    background-color: #247BA0;
    height: 1px;
    width: 100%;
    }
    }
   
    }    
    }
}
.but1{
    color: #fff;
    padding: 12px 15px;
    border: none;
    border-radius: 5px;
    background-color: #247BA0;
    transition: .3s;
    font-size: 16px;
    margin-inline-end: 10px;
    &:hover{
    background-color: #0E5C7D; 
    }
}
.butdelet{
    color: #fff;
    padding: 12px 15px;
    border: none;
    border-radius: 5px;
    background-color: #DE222A;
    transition: .3s;
    font-size: 16px;
    &:hover{
    background-color: #a50f17; 
    }
}
.butsucc{
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #42BF16;
    transition: .3s;
    font-size: 14px;
    &:hover{
    background-color: #389417; 
    }
}
.butinfo{
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #0196D6;
    transition: .3s;
    font-size: 14px;
    &:hover{
    background-color: #0373a3; 
    }
}
.grayBut{
    color: #808080;
    padding: 10px 5px;
    border: none;
    border-radius: 5px;
    background-color:  #E8E8E8;
    transition: .3s;
    font-size: 16px;
    margin-bottom: 10px;
    &:hover{
    background-color:  #bdbdbd; 
    } 
}
</style>
<script>
import $ from 'jquery';
import axios from 'axios';
export default {
    name: 'editProduct',
    data() {
        return {
        drop1: false,
        drop2: false,
        drop3: false,
        dropside: false,
        products: [],
        productsDet:[],
        ProductName:"",
        sectionEdit:3,
       
        store_product: [
            {
            "products": [
                {
                "id": 1,
                "price": 1000,
                "quantity": 10
                },
                {
                "id": 2,
                "price": 2000,
                "quantity": 20,
                "Custom_Field_Value": [
                    {
                    "custom_field_value_id": 11
                    },
                    {
                    "custom_field_value_id": 12
                    },
                    {
                    "custom_field_value_id": 14
                    }
                ]
                },
                {
                "id": 3,
                "price": 20020,
                "quantity": 220,
                "Custom_Field_Value": [
                    {
                    "custom_field_value_id": 1
                    },
                    {
                    "custom_field_value_id": 1
                    },
                    {
                    "custom_field_value_id": 1
                    }
                ]
                }
            ]
            }
        ]
        };
    },
    props: [],
    methods: {
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
        // /api/stores/update/{store_id}/{product_id}
        async  update() {
            var self = this;
            // let lang = window.localStorage.getItem('lang');
            // sections
            await axios
                .put(`/api/stores/update/${self.$route.params.id_store}/${self.$route.params.id_product}`)
                .then((res) => {
                    console.log('Success products update: ', res.data);
                    self.$router.go(-1);                         
                })
                .catch(function (error) {
                    console.warn('Error products update', error.toJSON());
                }); 
        },
         async  fetch() {
            var self = this;
            // let lang = window.localStorage.getItem('lang');
            // sections
            await axios
                .get(`api/stores/product-category-details/${self.$route.params.id_product}`)
                .then((res) => {
                    self.products = res.data.Product;
                    self.productsDet = res.data.Product.store_product[0].store_product_details;
                    self.ProductName = res.data.Product.product_translation[0].name;
                })
                .catch(function (error) {
                    console.warn('Error products details', error.toJSON());
                }); 
        },
    },
    computed:{
        componentSidebar: {
      get() {
        return this.$store.state.componentSidebar;
      },
      set(componentSidebar) {
        this.$store.commit("SET_Component", componentSidebar);
      },
    },
  },
    mounted(){
        this.fetch();
      
    }
   
};
</script>
