<template>
    <div class="parent">
      <h5>الطلبات</h5>
      <div class="card">
         <div class="rw">
              <div class="row1">
  <div class="paje">
        <h6>الصفحة:</h6>
          <!-- pagination -->
            <nav>
  <ul class="pagination" style="justify-content: center;">
    <li class="page-item" >
      <span class="page-link" style="border:none"> <i  class="fa fa-angle-right"></i></span>
    </li>
    
    <li class="page-item" 
    v-for="(pag,index) in 1" :key="index">
        <span class="page-link" v-if="pag === index+1" style="margin: 0 5px;border-radius: 5px;"> {{pag}}</span>
    </li>

    <li class="page-item">
      <span class="page-link" style="border:none"> <i  class="fa fa-angle-left "></i></span>
    </li>
  </ul>
</nav>
<div>من 5</div>
        </div>
        <div class="numpage">
        <h6 style="margin:0">عرض:</h6>
        <select >
            <option selected>10 طلبات</option>
        </select>
        <span class="find">تم إيجاد 50 نتيجة للطلبات</span>
        </div> 
          </div>
        <div class="other">
            <span>خيارات أخرى:</span>
            <div>
            <img src="../../../../../public/img/Icons/Export.svg" alt="">
            <img src="../../../../../public/img/Icons/Print.svg" alt="">
            </div>
        </div>
         </div>
      <div class="rw2">
             <div><span>رقم الطلب</span></div>
             <div><span>المجموع</span></div>
             <div><span>الزبون</span></div>
             <div><span>التاريخ/الوقت</span></div>
             <div><span>حالة الطلب</span></div>
             <div style="text-align: start;"><span>Action</span></div>
      </div>  
      <hr>
        <div class="rw2">
            <div><input type="text"></div>
            <div><input type="text"></div>
            <div><input type="text"></div>
            <div>
                <div class="from">
                    <img src="../../../../../public/img/Icons/calendaricon.svg" alt="">
                    <input type="text" placeholder="من">
                </div>
                <div class="from">
                    <img src="../../../../../public/img/Icons/calendaricon.svg" alt="">
                    <input type="text" placeholder="إلى">
                </div>
            </div>
            <div>
            <select>
                <option selected>اختر...</option>
            </select>
            </div>
            <div class="action">
                   <button class="but1">بحث</button>
                   <button class="but2">إعادة تعيين</button>
              </div>
      </div>
      <hr>
       <div class="rw2" 
        style="margin-bottom: 10px;
        border-bottom: 1px solid #aaa;
        padding-bottom: 10px;">
            <div>za553322</div>
            <div>
                <span style="color:#247ba0">800.000</span>
                <span>ل.س</span>
            </div>
            <div><span>User223355</span></div>
            <div><span>التاريخ/الوقت</span></div>
            <div class="d-flex"><button class="butdelet">ملغي</button></div>
            <div><button class="but1">معلومات الطلب</button></div>
      </div>
            <div class="rw2" 
        style="margin-bottom: 10px;
        border-bottom: 1px solid #aaa;
        padding-bottom: 10px;">
            <div>za553322</div>
            <div>
                <span style="color:#247ba0">800.000</span>
                <span>ل.س</span>
            </div>
            <div><span>User223355</span></div>
            <div><span>التاريخ/الوقت</span></div>
            <div class="d-flex"><button class="butsucc">تم التسليم</button></div>
            <div><button class="but1">معلومات الطلب</button></div>
      </div>
             <div class="rw2">
            <div>za553322</div>
            <div>
                <span style="color:#247ba0">800.000</span>
                <span>ل.س</span>
            </div>
            <div><span>User223355</span></div>
            <div><span>التاريخ/الوقت</span></div>
            <div class="d-flex"><button class="butinfo">جار المعالجة</button></div>
            <div><button class="but1">معلومات الطلب</button></div>
      </div>

      </div>
      <div class="small-card">
        <div class="action">
            <div class="order-num">
            <div>
                <span>الطلبات:</span>
                <span>50</span>
            </div>

            <div>
                <span>عرض:</span>
                <select>
                    <option selected>10</option>
                </select>
            </div>
            </div>
            <div class="other">
            <img src="../../../../../public/img/Icons/Export.svg" alt="">
            <img src="../../../../../public/img/Icons/Print.svg" alt="">
            </div>
        </div>
        <!-- order 1 -->
        <div class="orders">
             <hr>
            <div class="top">
            <div class="user">
                <div style="display: flex;align-items: center;color:#247ba0">
                <i class="fa fa-user-circle" aria-hidden="true" style="margin-inline-end: 5px;"></i>
                <span>اسم الزبون</span>
                </div>
                <div style="opacity:.5;font-size: 12px;">
                  <span>1/1/2021</span>
                  <i class="fa fa-arrow-left" aria-hidden="true" style="margin: 0 8px;
font-size: 12px;"></i>
                  <span>10/2/2022</span>
                </div>
            </div>
            <div class="status">
                <select name="" id="">
                    <option selected>ملغي</option>
                    <option>تم التسليم</option>
                    <option>جار المعالجة</option>
                </select></div>
            </div>
            <div class="content">
                <div>
                    <span>رقم الطلب</span>
                    <span style="font-weight:bold;color:#247ba0">za553322</span>
                </div>
                <div>
                    <span>المجموع</span>
                    <span style="font-weight:bold;color:#247ba0">800.000</span>
                </div>
                <div>
                    <span>حالة الطلب</span>
                    <span style="font-weight:bold;color:#de222a">ملغي</span>
                </div>
                <div>
                   <button class="but1">معلومات الطلب</button>
                </div>
            </div>
        </div>
               <!-- order 2 -->
        <div class="orders">
             <hr>
            <div class="top">
            <div class="user">
                <div style="display: flex;align-items: center;color:#247ba0">
                <i class="fa fa-user-circle" aria-hidden="true" style="margin-inline-end: 5px;"></i>
                <span>اسم الزبون</span>
                </div>
                <div style="opacity:.5;font-size: 12px;">
                  <span>1/1/2021</span>
                  <i class="fa fa-arrow-left" aria-hidden="true" style="margin: 0 8px;
font-size: 12px;"></i>
                  <span>10/2/2022</span>
                </div>
            </div>
            <div class="status">
                <select name="" id="">
                    <option>ملغي</option>
                    <option selected>تم التسليم</option>
                    <option>جار المعالجة</option>
                </select></div>
            </div>
            <div class="content">
                <div>
                    <span>رقم الطلب</span>
                    <span style="font-weight:bold;color:#247ba0">za553322</span>
                </div>
                <div>
                    <span>المجموع</span>
                    <span style="font-weight:bold;color:#247ba0">800.000</span>
                </div>
                <div>
                    <span>حالة الطلب</span>
                    <span style="font-weight:bold;color:#42bf16">تم التسليم</span>
                </div>
                <div>
                   <button class="but1">معلومات الطلب</button>
                </div>
            </div>
        </div>
                   <!-- order 3 -->
        <div class="orders">
             <hr>
            <div class="top">
            <div class="user">
                <div style="display: flex;align-items: center;color:#247ba0">
                <i class="fa fa-user-circle" aria-hidden="true" style="margin-inline-end: 5px;"></i>
                <span>اسم الزبون</span>
                </div>
                <div style="opacity:.5;font-size: 12px;">
                  <span>1/1/2021</span>
                  <i class="fa fa-arrow-left" aria-hidden="true" style="margin: 0 8px;
font-size: 12px;"></i>
                  <span>10/2/2022</span>
                </div>
            </div>
            <div class="status">
                <select name="" id="">
                    <option>ملغي</option>
                    <option>تم التسليم</option>
                    <option selected>جار المعالجة</option>
                </select></div>
            </div>
            <div class="content">
                <div>
                    <span>رقم الطلب</span>
                    <span style="font-weight:bold;color:#247ba0">za553322</span>
                </div>
                <div>
                    <span>المجموع</span>
                    <span style="font-weight:bold;color:#247ba0">800.000</span>
                </div>
                <div>
                    <span>حالة الطلب</span>
                    <span style="font-weight:bold;color:#0196d6">جار المعالجة</span>
                </div>
                <div>
                   <button class="but1">معلومات الطلب</button>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
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
    .rw{
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        padding-bottom: 15px;
        .row1{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 80%;
    .paje{
        display: flex;
        margin-top: 20px;
        align-items: center;
    h6{
    text-align: start;
    font-weight: bold;
    }
    .pagination{
        padding: 0;
        margin: 0;
    }
    }
    .numpage{
        margin-top: 20px;
        padding-inline-start: 5px;
        border-right: 2px solid #aaa;
        margin-inline-start: 5px;
        display: flex;
        align-items: center;
        select{
            background-color: transparent;
            font-size: 13px;
            border: 1px solid #666464;
            margin: 0 5px;
        }
        .find{
        color: #808080; 
        }
    }
    }
   .other{
    width: 20%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    div{
        flex: 1;
        display: flex;
        justify-content: space-around;
        img{
        cursor: pointer;
        transition: .3s;
        padding: 5px;
        &:hover{
        padding:0;
        }
        }
    }
    @media (max-width: 575.98px) {
    margin-top: -45px;
    width: 25%;
    div{
        margin-top: 5px;
    }
}
   }
    }
    .rw2{
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    div{
    width: calc(1000px / 6);
    input{
    width: 70%;
    border: 1px solid #9d9d9d;
    border-radius: 5px;
    outline: none;
    }
    select{
    width: 80%;
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
            width: 90px;
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
    .small-card{
        display: none;
    @media (max-width: 767.98px) {
    display: block;
    width: 99%;
    border-radius: 10px;
    box-shadow: 1px 2px 5px #666464;
    padding:10px;
    background-color: #fff;
    .action{
    width: 100%;
    display: flex;
    justify-content: space-between;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #aaa;
    }    
    .content{
    div{
    display: flex;
    justify-content: space-around;
    padding: 5px;
    background-color: #eee;
    border-radius: 5px;
    margin-top: 5px;    
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
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #247BA0;
    transition: .3s;
    font-size: 14px;
    &:hover{
    background-color: #0E5C7D; 
    }
}
.butdelet{
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #DE222A;
    transition: .3s;
    font-size: 14px;
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
</style>
<script>
// import $ from 'jquery';
export default {
    name: 'order',
    props: [],


    methods: {
       
    },
    computed: {
         
    },
   
};
</script>
