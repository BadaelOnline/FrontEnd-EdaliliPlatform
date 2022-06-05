<template>
        <div class="content">
            <div class="logo"><img src="@/../public/img/EDALELYLogo.png" alt=""></div>
            <h5 class="count-products"> 
                <span class="spn1"> عربة التسوق </span>
                &gt;
                <span class="spn1"> عنوان الشحن </span>
                &gt; 
                <span class="spn2">الشحن</span> 
                &gt; 
                الدفع
                &gt; 
                تأكيد الطلب
          </h5>
          <h1 class="title">الشحن</h1>
          <div class="item-content">
              <div class="items">
                  <div class="item" v-for="(item,index) in 2" :key="index">
                      <div class="store-title">المتجر: Direct</div>
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
                     
                        <div class="btn-group">
                            <button @click="showdrop(index)"
                            :class="[show==index ? 'show':'']" 
                            class="btn  btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" :aria-expanded="[show==index ? 'true':'false']">
                             <div><span>In-House Delivery</span> <span>12,000 ل.س</span></div>
                             <span>30 minutes</span>
                            </button>
                            <ul class="dropdown-menu" :class="[show==index ? 'show':'']">
                                <li><a href="" class="dropdown-item btns">
                                    <div><span>In-House Delivery</span> <span>12,000 ل.س</span></div>
                                    <span>30 minutes</span></a>
                                </li>
                                <li><a href="" class="dropdown-item btns">
                                    <div><span>In-House Delivery</span> <span>12,000 ل.س</span></div>
                                    <span>30 minutes</span></a>
                                </li>
                                
                            </ul>
                        </div>
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
                  <button class="complete" @click="$router.push('/paying')">المتابعة</button>
              </div>
          </div>
        </div>
</template>

<script>
// import $ from 'jquery';
export default {
    name: 'Shipping',
    data() {
    const lang = localStorage.getItem('lang') || 'ar';
        return {
        lang:lang,
        show:-1
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
.btn  {
    display: flex;
    flex-wrap: wrap;  
    background: #E8E8E8;
    border: 1px solid #808080;
    border-radius: 5px;
    &::after{
        position: absolute;
        left: 0;
        top: 50%;
        color: #808080;
    }
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
.dropdown-menu{
    width: 100%;
    border: 1px solid #808080;
    padding: 0;
    .btns{
         display: flex;
    flex-wrap: wrap;  
    background: #fff;
    border: none;
    transition: .3s;
    &:hover{
        background: #e9ecef;
    }
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
            .item{
                display: flex;
                flex-direction: column;
                padding: 20px;
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
