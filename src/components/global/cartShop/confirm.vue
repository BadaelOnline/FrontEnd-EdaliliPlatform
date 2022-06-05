<template>
        <div class="content">
             <div class="logo"><img src="@/../public/img/EDALELYLogo.png" alt=""></div>
             <div class="confirm-masege" v-if="confirm">
                <span>تم إرسال طلبك بنجاح</span>
                <div>
                    انقر هنا لـ
                    تعديل
                    أو
                    إلغاء
                    طلبك
                </div>
            </div>
            <div v-else>
                <h5 class="count-products"> 
                <span class="spn1"> عربة التسوق </span>
                &gt;
                <span class="spn1"> عنوان الشحن </span>
                &gt; 
                <span class="spn2">الشحن</span> 
                &gt; 
                <span class="spn1">الدفع</span> 
                &gt; 
                <span class="spn2">تأكيد الطلب</span> 
                </h5>
                <h2 class="title">تأكيد الطلب</h2>
            </div>
            
          
          <div class="item-content">
              <div class="items">
                        <div class="tit">
                            <h3>عنوان الشحن</h3>
                            <router-link to="/addressshipping">تغيير</router-link>
                        </div>
                        <div class="adrees">
                            <div>
                                <span><h4>Anas Nassr</h4></span>
                                <span><h5>المحافظة، المدينة:</h5> <h4>السويداء، السويداء</h4></span>
                            </div>
                            <div>
                                <span><h4>abcd@gmail.com</h4></span>
                                <span><h5>الحي:</h5> <h4>طريق قنوات</h4></span>
                            </div>
                            <div>
                                <span><h4>+963 933 456 789</h4></span>
                                <span><h5>البناء، الطابق، رقم الشقة:</h5> <h4>برج العميد، الطابق 6، شقة 28</h4></span>
                            </div>
                            <div>
                                <span><h4>سوريا</h4></span>
                                <span><h5>أقرب علامة مميزة:</h5> <h4>مقابل فلافل العربي</h4></span>
                            </div>
                        </div>
                  <div class="item" v-for="(item,index) in 2" :key="index">
                        
                        <div class="store-title">
                            <h3 v-if="confirm">الطلب {{index+1}}: #123448</h3>
                            <span>المتجر: Direct</span>
                        </div>
                      <div class="product">
                          <div class="imag"><img src="@/../public/img/xiomi.png" alt=""></div>
                          <div class="prod-info">
                            <h4>هاتف ريدمي نوت 10s ثنائي الشريحة بذاكرة رام 6 جيجابايت و ذاكرة داخلية 128 جيجابايت و يدعم تقنية  LTE 4G أزرق محيطي - إصدار عالمي</h4>
                            <div class="custome"> 
                                <span>اللون: أزرق محيطي</span>
                                <span>الذاكرة الدخلية:128 GB</span>
                            </div>
                            <div class="quantity">
                                <span>الكمية:</span>
                                <span>1</span>
                            </div>
                            <div class="prod-price">
                              <h2>س.ل 1,000,000</h2>
                            </div>
                          </div>
                      </div>
                        <div class="tit">
                            <h3>الشحن</h3>
                            <router-link to="/addressshipping">تغيير</router-link>
                        </div>
                    <div class="ite-delv">
                        <div><span>In-House Delivery</span> <span>12,000 ل.س</span></div>
                        <span>30 minutes</span>
                    </div>
                    <div class="tit">
                            <h3>الدفع:</h3>
                            <router-link to="/paying">تغيير</router-link>
                    </div>
                    <h5>الدفع عند التوصيل</h5>
                    </div>
              </div>
              <div class="cart-info">
                  <h3>تفاصيل عربة التسوق:</h3>
                  <div class="d-flex justify-content-between">
                      <span>3 منتجات:</span>
                      <span>3,000,000 ل.س</span>
                  </div>
                  <div class="d-flex justify-content-between">
                      <span>الشحن:</span>
                      <span>24,000 ل.س</span>
                  </div>
                  <div class="d-flex justify-content-between">
                      <h3>المجموع:</h3>
                      <h3>3,000,000 ل.س</h3>
                  </div>
                  
                  <button class="complete" @click="$router.push('/')" v-if="confirm">الذهاب إلى الصفحة الرئيسية</button>
                  <button class="complete" @click="confirm = true" v-else>المتابعة</button>
              </div>
          </div>
        </div>
</template>

<script>
// import $ from 'jquery';
export default {
    name: 'confirm',
    data() {
    const lang = localStorage.getItem('lang') || 'ar';
        return {
        lang:lang,
        show:-1,
        confirm:false
        };
    },
    components: {

    },
    methods:{
         showdrop(index){
             if(this.show == index){
                this.show = -1;
             }
             else{
                  this.show = index;
             }
        }
        },   
        mounted(){
            // for(var i=0; i <2;i++){
            //    $(`#btn${i}`).on("click", function() {
            //        $('.fixed-icon').toggleClass('rfixedicon');
            //     });
            // }
        }  
};
</script>

<style lang="scss" scoped>
h5{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}
.content{
    text-align: start;
    padding: 20px;
    .logo{
    width: 120px;
    margin-bottom: 20px;
    img{
        width: 100%;
    }
    }
    .confirm-masege{
        display: flex;
        justify-content: center;
        position: relative;
        margin: 40px 0;
        span{
            position: absolute;
            display: flex;
            align-items: center;
            padding: 10px;
            height: 56px;
            top: -27px;
            background: #12DE00;
            border-radius: 10px;
            color: #fff;
            font-weight: 700;
            font-size: 24px;
            line-height: 36px;
        }
        div{
            padding: 50px 40px 20px;
            border: 2px solid #12DE00;
            border-radius: 10px;
        }
    }
    .count-products{
    font-weight: 500;
    line-height: 21px;
    color: #808080;
    font-size: 14px;
    .spn1{
    color: #247BA0;
    }
    .spn2{
    color: #000000;
    }
    }
    .title{
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;    
    }
  
    .item-content{
    display: flex;
    @media (max-width:920px) {
        flex-direction: column;
    }
        .items{
            width: 60%;
            @media (max-width:920px) {
            width: 100%;
            }
            .tit{
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                h3{
                font-weight: 700;
                font-size: 18px;
                line-height: 27px; 
                margin: 0;
                }
                a{
                margin-inline-start: 10px;   
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
                }
            }
            .adrees{
                display: flex;
                flex-direction: column;
                
                div{
                    display: flex;
                    @media (max-width:620px) {
                        flex-direction: column;
                    }
                    h4{
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 24px;
                    }
                    h5{
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    }
                    span{
                        display: flex;
                        &:first-child{
                        width: 30%;
                        @media (max-width:620px) {
                        width: 100%;
                    }
                    }
                    }
                    
                }
            }
            .item{
                display: flex;
                flex-direction: column;
                padding: 20px 0 0 20px;
                @media (max-width:650px) {
                padding: 0;
                }
            .store-title{
            width: 100%;
            padding: 10px;
            background: #F2F2F2;
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
            margin-bottom: 20px;
            h3{
                color: #247BA0;
                font-weight: 700;
                font-size: 18px;
                line-height: 27px;
            }
            }
            .product{
            display: flex;
            @media (max-width:650px) {
            display: flex;
            flex-direction: column;
            }
           
            .imag{
                height: 154px;
                margin: 0 20px;
                @media (max-width:650px) {
                display: flex;
                justify-content: center;
                margin-bottom: 10px;
                }
                img{
                height: 100%;
                }
            }
            .prod-info{
            display: flex;
            flex-direction: column;
            flex: 1;
            h4{
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            }
            .custome{
                display: flex;
                margin-bottom: 10px;
                @media (max-width:650px) {
                flex-direction: column;
                }
                span{
                    margin-bottom: 10px;
                    &:last-child{
                        margin-inline-start: 10px;
                        @media (max-width:650px) {
                        margin-inline-start: 0;
                        }
                    }
                }
            }
            .quantity{
                display: flex;
            }
            .prod-price{
                h2{
                font-weight: 700;
                font-size: 20px;
                line-height: 30px;
                }
            }
            }
            
            }
           .ite-delv  {
    display: flex;
    flex-wrap: wrap;  
    span{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #808080;
    }
    div{
        width: 96%;
        display: flex;
        justify-content: space-between;
        text-align: start;
        padding: 10px 0;
        span{
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
        }
    }
}
            }
        }
        .cart-info{
            padding: 20px;
            width: 40%;
            border-right: 2px solid #ccc;
            @media (max-width:920px) {
            width: 50%;
            }
            @media (max-width:650px) {
            width: 100%;
            padding: 10px 0;
            border-right: none;
            border-top: 2px solid #ccc;
            }
            h3{
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
            }
            div{
                padding: 10px 0;
                &:last-of-type{
                    border-top: 2px solid #ccc;
                }
            }
            .complete{
                width: 100%;
                height: 40px;
                background: #247BA0;
                border-radius: 5px;
                color: #fff;
                border: none;
            }
        }
    }
}
</style>
