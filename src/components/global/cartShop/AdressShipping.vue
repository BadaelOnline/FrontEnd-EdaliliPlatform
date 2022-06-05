<template>
        <div class="content">
          <div class="title"><img src="@/../public/img/EDALELYLogo.png" alt=""></div>
          <h5 class="count-products"> 
                <span class="spn1"> عربة التسوق </span>
                &gt;
                <span class="spn2"> عنوان الشحن </span>
                &gt; 
                الشحن
                &gt; 
                الدفع
                &gt; 
                تأكيد الطلب
          </h5>
          <div class="item-content">
              <div class="ship-info" >
                  <h2 v-if="showAddAderss">إضافة عنوان شحن جديد</h2>
                  <h2 v-else>عناوين الشحن</h2>
                  <form action="" v-if="showAddAderss">
                      <div class="fled">
                          <label class="required">الاسم الأول و الأخير:</label>
                          <input type="text" required>
                      </div>
                      <div class="fled">
                          <label class="required">رقم الموبايل:</label>
                          <div class="chose-country">
                              <input type="text" @keypress="acceptNumber($event)" required>
                              <select name="" id="" required>
                                  <option value="">+963</option>
                              </select>
                          </div>
                      </div>
                      <div class="fled">
                            <label class="required">الدولة:</label>
                            <select name="" id="" required>
                                <option value="">سوريا</option>
                            </select>
                      </div>
                       <div class="fled">
                            <label class="required">المحافظة، المدينة:</label>
                            <select name="" id="" required>
                                <option value="">سوريا</option>
                            </select>
                      </div>
                      <div class="fled">
                          <label class="required">اسم الشارع:</label>
                          <input type="text" required>
                      </div>
                      <div class="fled">
                          <label class="required">اسم المبنى، رقم الطابق، رقم الشقة:</label>
                          <input type="text" required>
                      </div>
                      <div class="fled">
                          <label class="required">أقرب علامة مميزة:</label>
                          <input type="text" required>
                      </div>
                      <div class="type_adress">
                          <label style="width:100%">نوع العنوان: (اختياري)</label>
                          <div style="margin-inline-end: 100px;">
                            <input type="radio" name="type_adress">
                            <label>المنزل</label>
                          </div>
                          <div>
                            <input type="radio" name="type_adress">
                            <label>العمل</label>
                          </div>
                          <div style="width:100%">
                            <input type="checkbox">
                            <label>استخدام كعنوان رئيسي</label>
                          </div>
                      </div>
                  </form>
                  <div class="info" v-else>
                     <div>
                      <h3>الاسم والكنية</h3>
                      <span>سوريا</span>
                      <span>السويداء, السويداء</span>
                      <span>طريق قنوات</span>
                      <span>برج العميد، الطابق 6، شقة 28</span>
                      <span>+963 933 456 789</span>
                      <button class="ship-but" @click="$router.push('/shipping')">اشحن إلى هذا العنوان</button>
                        <div class="d-flex justify-content-between flex-row" style="width:100%">
                            <button class="update">تعديل</button>
                            <button class="delete">حذف</button>
                        </div>
                     </div>
                     <div>
                      <h3>إضافة عنوان شحن جديد</h3>
                      <span>يمكنك إضافة عنوان شحن جديد في حال كنت تريد توصيل طلبك إلى عنوان مختلف عن العنوان السابق، و سيتم حفظه مع عناوينك السابقة كي تستطيع استخدامه مرةً أخرى في المستقبل.</span>
                     <button class="add-adress" @click="showAddAderss=true">إضافة عنوان جديد</button>
                     </div>
                  </div>
                  
              </div>
              <div class="cart-info">
                  <div class="items">
                  <div class="item" v-for="(item,index) in 2" :key="index">
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
                  </div>
              </div>
                  <div style="padding:20px">
                      <h3>تفاصيل عربة التسوق:</h3>
                  <div class="d-flex justify-content-between">
                      <span>3 منتجات:</span>
                      <span>3,000,000 ل.س</span>
                  </div>
                  <div class="d-flex justify-content-between pt-2 pb-2">
                      <span>الشحن:</span>
                      <span>سيتم التحديد عند الشراء</span>
                  </div>
                  <div class="d-flex justify-content-between total">
                      <h3>المجموع:</h3>
                      <h3>3,000,000 ل.س</h3>
                  </div>
                  <button class="ship-save" v-if="showAddAderss" @click="$router.push('/shipping')">حفظ العنوان و المتابعة</button>
                  </div>
                
              </div>
          </div>
        </div>
</template>

<script>
export default {
    name: 'AdressShipping',
    data() {
    const lang = localStorage.getItem('lang') || 'ar';
        return {
        lang:lang,
        showAddAderss:false
        };
    },
    components: {

    },
    methods:{
        acceptNumber(evt) {
            evt = evt ? evt : window.event;
            var charCode = evt.which ? evt.which : evt.keyCode;
            if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) &&
                charCode !== 46
            ) {
                evt.preventDefault();
            } else {
                return true;
            }
        },
        },   
        mounted(){
  
        }  
};
</script>

<style lang="scss" scoped>
label.required::after {
    content: '*';
    color: red;
}
form{
text-align: start;

    .fled{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        .chose-country{
        padding: 10px;
        width: 100%;
        height: 44px;
        border: 1px solid #808080;
        border-radius: 5px;
        display: flex;
        input{
        border: none;
        background-color: #fff;
        padding: 0;
        height: auto;
        }
        select{
        border: none;
        background-color: #fff;
        padding: 0;
        width: 70px;
        height: auto;
        }
        }
        label{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #808080;
        }
        input{
        padding: 10px;
        width: 100%;
        height: 44px;
        border: 1px solid #808080;
        border-radius: 5px;
        outline: none;
        }
        select{
        padding: 10px;
        width: 100%;
        height: 44px;
        border: 1px solid #808080;
        border-radius: 5px;
        background-color: #fff;
        }
    }
    .type_adress{
        display: flex;
        flex-wrap: wrap;
        label{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #808080;   
        }
        input{
            margin-inline-end: 10px;
        }
    }
}
.ship-save{
    background: #247BA0;
    border-radius: 5px;
    color: #fff;
    border: none;
    width: 100%;
    height: 40px;
    margin: 10px 0;
    transition: .3s;
        &:hover{
        background-color: #1e698a; 
        }
}
.content{
    text-align: start;
    padding: 20px;
    .title{
    width: 120px;
    margin-bottom: 20px;
    
    img{
        width: 100%;
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
    .item-content{
    display: flex;
    margin-top: 20px;
    @media (max-width:920px) {
        flex-direction: column;
    }
       .ship-info{
           width: 50%;
           padding-inline-end: 20px;
           @media (max-width:920px) {
            width: 100%;
             padding-bottom: 10px;
            }
           h2{
            width: 100%;
            font-weight: 700;
            font-size: 20px;
            line-height: 30px;
           }
           .info{
               display: flex;
              justify-content: space-between;
              @media (max-width:556px) {
                flex-wrap: wrap;
                   }
              div{
                  display: flex;
                  flex-direction: column;
                  width: 45%;
                   @media (max-width:556px) {
                        width: 100%;
                        margin-bottom: 10px;
                   }
                  h3{
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 27px;
                  }
                  span{
                      margin-bottom: 5px;
                  }
                  .ship-but{
                    background: #247BA0;
                    border-radius: 5px;
                    color: #fff;
                    border: none;
                    height: 40px;
                    margin: 10px 0;
                    transition: .3s;
                      &:hover{
                        background-color: #1e698a; 
                      }
                  }
                  .update{
                    background: linear-gradient(180deg, #FFFFFF 22.92%, #E8E8E8 100%);
                    border: 1px solid #808080;
                    border-radius: 3px;
                    height: 40px;
                    width: 120px;
                    transition: .3s;
                      &:hover{
                        box-shadow: 0px 0px 3px #8c8c8c;
                      }
                  }
                  .delete{
                    background: #DE222A;
                    border-radius: 5px;
                    border: none;
                    color: #fff;
                    height: 40px;
                    width: 120px;
                    transition: .3s;
                      &:hover{
                        background-color: #c51d25; 
                      }
                  }
                  .add-adress{
                      color: #247BA0;
                      background-color: #fff;
                      border: 1.5px solid #247BA0;
                      border-radius: 3px;
                      height: 40px;
                      margin-top: 10px;
                      transition: .3s;
                      &:hover{
                        background-color: #247BA0; 
                        color: #fff;
                      }
                  }
              }
           }
       }
        .cart-info{
            width: 50%;
            border-right: 2px solid #ccc;
            @media (max-width:920px) {
            width: 100%;
            border-top: 2px solid #ccc;
            border-right: none;
            padding-top: 10px;
            }
            @media (max-width:650px) {
            width: 100%;
            padding: 10px 0;
            border-right: none;
            border-top: 2px solid #ccc;
            }
        .items{
            @media (max-width:920px) {
            width: 100%;
            }
            .item{
                display: flex;
                flex-direction: column;
                padding: 20px;
                @media (max-width:650px) {
                padding: 0;
                }
           
            .product{
            display: flex;
            @media (max-width:650px) {
            display: flex;
            flex-direction: column;
            }
            .imag{
                height: 145px;
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
            }
        }
            h3{
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
            }
        .total{
            border-top: 2px solid #ccc;
            padding: 10px 0;
        }
           
        }
    }
}
</style>
