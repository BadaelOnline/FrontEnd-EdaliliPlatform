<template>
        <div class="content">
            <div class="logo"><img src="@/../public/img/EDALELYLogo.png" alt=""></div>
            <h5 class="count-products"> 
                <span class="spn1"> عربة التسوق </span>
                &gt;
                <span class="spn1"> عنوان الشحن </span>
                &gt; 
                <span class="spn1">الشحن</span> 
                &gt; 
                <span class="spn2">الدفع</span> 
                &gt; 
                تأكيد الطلب
          </h5>
          <h1 class="title">الدفع</h1>
          <div class="item-content">
              <div class="items">
                  <div class="item" v-for="(item,index) in 2" :key="index">
                      <div class="store-title">المتجر: Direct</div>
                      <div class="product">
                         <div>
                             <input type="radio" :name="`pay${index}`">
                             <label for="">الدفع عند التوصيل</label>
                         </div>
                         <div>
                             <input type="radio" :name="`pay${index}`">
                             <label for="">Credit Card</label>
                         </div>
                         <div>
                             <input type="radio" :name="`pay${index}`">
                             <label for="">Bank</label>
                         </div>
                         <div>
                             <input type="radio" :name="`pay${index}`">
                             <label for="">Paypal</label>
                         </div>
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
                      <span>سيتم التحديد عند الشراء</span>
                  </div>
                  <div class="d-flex justify-content-between">
                      <h3>المجموع:</h3>
                      <h3>3,000,000 ل.س</h3>
                  </div>
                  <button class="complete" @click="$router.push('/confirm')">المتابعة</button>
              </div>
          </div>
        </div>
</template>

<script>
// import $ from 'jquery';
export default {
    name: 'paying',
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
            flex-direction: column;
            div{
                display: flex;
                input{
                    margin-inline-end: 10px;
                }
                label{
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                }
            }
            }
            select{
            width: 100%;
            height: 73px;
            background: #E8E8E8;
            border: 1px solid #808080;
            border-radius: 5px;
            padding: 10px;
            option{
                display: flex;
                flex-wrap: wrap;
                span{
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    color: #808080;
                }
                div{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
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
