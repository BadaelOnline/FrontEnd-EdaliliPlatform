<template>
        <div class="content">
          <h1 class="title">{{ $t('ShoppingCart') }}</h1>
          <h5 class="count-products">3 {{ $t('Products') }}</h5>
          <div class="item-content">
              <div class="items">
                  <div class="item" v-for="(item,index) in 2" :key="index">
                      <div class="store-title">المتجر: Direct</div>
                      <div class="product">
                          <i class="fas fa-times"></i>
                          <div class="imag"><img src="@/../public/img/xiomi.png" alt=""></div>
                          <div class="prod-info">
                            <h4>هاتف ريدمي نوت 10s ثنائي الشريحة بذاكرة رام 6 جيجابايت و ذاكرة داخلية 128 جيجابايت و يدعم تقنية  LTE 4G أزرق محيطي - إصدار عالمي</h4>
                            <div class="custome"> 
                                <span>اللون: أزرق محيطي</span>
                                <span>الذاكرة الدخلية:128 GB</span>
                            </div>
                            <div class="quantity">
                                <span>الكمية:</span>
                                <h4>متبقي 2 فقط في المخزون</h4>
                            </div>
                            <div class="prod-price">
                              <h2>س.ل 1,000,000</h2>
                            </div>
                            <div class="action">
                                <select>
                                    <option selected value="1">1</option>
                                    <option  value="2">2</option>
                                    <option  value="3">3</option>
                                </select>
                                <button class="liked" @click="toggle(index)">
                                <span v-if="done"
                                :class="[likedArray[index].item.status == true? 'heart-active':'']" 
                                class="heart"
                                ></span>
                                </button>
                            </div>
                            
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
                  <button class="complete" @click="$router.push('/addressshipping')">إتمام عملية الشراء</button>
              </div>
          </div>
        </div>
</template>

<script>
export default {
    name: 'Cart',
    data() {
    const lang = localStorage.getItem('lang') || 'ar';
        return {
        lang:lang,
        done:false,
        likedArray: [],
        };
    },
    components: {

    },
    methods:{
        toggle (ind) {
            if(this.likedArray[ind].item.status == false){
                this.likedArray[ind].item.status = true;
            }
            else{
              this.likedArray[ind].item.status = false;
            }
            //   console.log(this.likedArray[ind].item.status);
        },
        },   
        mounted(){
       for(var i = 0;i < 2; i++){
            this.likedArray.push(
                { 
                item: {
                    "index": i,
                    "status": false,
                    }, 
                }
            );
            if(i == 1){
                this.done = true;
            }
         }
        }  
};
</script>

<style lang="scss" scoped>
.content{
    text-align: start;
    padding: 20px;
    .title{
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;    
    }
    .count-products{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    }
    .item-content{
    display: flex;
    @media (max-width:920px) {
        flex-direction: column;
    }
        .items{
            width: 70%;
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
             i{
                display: flex;
                height: 30px;
                margin-bottom: auto;
                margin-top: auto;
                color: #808080;
                font-size: 20px;
                transition: .3s;
                padding: 5px;
                @media (max-width:650px) {
                width: 30px;
                margin: 0 auto 10px;
                }
                &:hover{
                background-color: #dddbdb;
                border-radius: 3px;
                }
                }
            .imag{
                height: 200px;
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
                h4{
                margin-inline-start: 10px;
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                color: #DE222A;
                @media (max-width:650px) {
                margin-inline-start: 0;
                }
                }
            }
            .prod-price{
                h2{
                font-weight: 700;
                font-size: 20px;
                line-height: 30px;
                }
            }
            .action{
                display: flex;
                select{
                background: #FFFFFF;
                border: 1px solid #808080;
                box-sizing: border-box;
                border-radius: 5px;
                width: 50px;
                height: 42px;
                text-align: center;
                margin-bottom: 10px;
                margin-inline-end: 10px;
                /* Extra small devices (portrait phones, less than 576px) */
                @media (max-width: 575.98px) {
                     margin-inline-end: 5px;
                }
                }
                .liked{
                position: relative;
                background-color: transparent;
                border: 1px solid #b0b0b0;
                border-radius: 5px;
                width: 45px;
                height: 42px;
                .heart {
                    width: 100px;
                    height: 100px;
                    background: url('../../../../public/img/heart.png') no-repeat;
                    background-position: left;
                    background-size: 2900%;
                    position: absolute;
                    top: 26px;
                    left: 2px;
                    transform: translate(-30%, -55%);
                    &.heart.heart-active {
                        background-position: right;
                        animation: animate 0.8s steps(28) 1;
                    }
                    @keyframes animate {
                        0% {
                            background-position: left;
                        }
                        100% {
                            background-position: right;
                        }
                    }
                }
                }
            }
            }
            
            }
            }
        }
        .cart-info{
            padding: 20px;
            width: 30%;
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
                background: linear-gradient(180deg, #FF4B52 0%, #ED1C24 100%, #ED1C24 100%);
                border-radius: 5px;
                color: #fff;
                border: none;
            }
        }
    }
}
</style>
