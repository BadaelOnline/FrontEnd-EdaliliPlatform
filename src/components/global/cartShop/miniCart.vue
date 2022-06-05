<template>
        <div class="content-body">
            <div id="shoppingCover" class="shoppingCover" @click="close_shopping()"></div>
             <div class="shopping-cart" id="cart"  :style="[lang == 'ar' ? ' right: -350px;':' left: -350px;']">
                 <div class="fi">تمت الإضافة إلى عربة التسوق </div>
                <div class="d-flex">
                    <div class="imag"><img src="@/../public/img/pic1.png" alt=""></div>
                    <div class="info">
                        <span class="disc">شاومي ريدمي نوت 11 ثنائي الشريحة امولد دوت ديسبلاي غرافيت رمادي 6 جيجا رام 128 جيجا الجيل الرابع ال تي اي مع ريدمي باد 3 لايت اسود</span>
                    </div>
                </div>
                <div class="info-name">
                        <span class="store-name"> المتجر: Direct </span>
                        <div class="disc">
                            <span> الكمية: 1 </span>
                            <br>
                            <span> السعر: 1،000،000.00 ل.س </span>
                        </div>
                    </div>
                 
                  <div class=" info-cart">
                      <h4>تفاصيل عربة التسوق:</h4>
                      <span>(1) منتجات</span>
                      <div class="d-flex justify-content-between">
                          <span>إجمالي العربة:</span>
                          <span>1,000,000 ل.س</span>
                      </div>
                  </div>
                  <div class="d-flex flex-column m-auto">
                      <button class="goCart" @click="$router.push('/cart')">الذهاب إلى عربة التسوق</button>
                      <button class="continue" @click="close_shopping()">متابعة التسوق</button>
                  </div>
             </div>
        </div>
</template>

<script>
export default {
    name: 'miniCart',
    data() {
    const lang = localStorage.getItem('lang') || 'ar';
        return {
        lang:lang,
         
        };
    },
    components: {

    },
    methods:{
     close_shopping(){
        if(this.lang == 'ar'){
            document.getElementById('shoppingCover').classList.remove("vs-cover");
            document.getElementById('cart').classList.remove("vs-cart-ar");
            }
            else{
            document.getElementById('shoppingCover').classList.remove("vs-cover");
            document.getElementById('cart').classList.remove("vs-cart-en");
            }
      },
         
        },     
};
</script>

<style lang="scss" scoped>
.shoppingCover{
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 85;
    top:  0;
    display: none;
}
.vs-cover {
    display: block;
}
.shopping-cart{
    position: fixed;
    background-color: #fff;
    z-index: 98;
    top: 0;
    width: 350px;
    height: 100%;
    transition: .5s;
    color: #000;
    border: 2px solid #42BF16;
    overflow-y: scroll;
    scrollbar-width: none;
}
.shopping-cart.vs-cart-ar{
    right: 0 !important;
}
.shopping-cart.vs-cart-en{
    left: 0 !important;
}
.shopping-cart{
    display: flex;
    flex-direction: column;
    text-align: start;
   .fi{
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #42BF16;
    margin: 10px 20px;
    }
    .imag{
        width: 120px;
        height: 120px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .info{
        display: flex;
        flex-direction: column;
        text-align: start;
        padding: 10px;
        flex: 1;
        .disc{
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #000000;
        margin-bottom: 10px;
        }
      
    }
    .info-name{
        padding: 10px;
        .store-name{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #247BA0;
        margin-bottom: 10px;
        }
    }
    .info-cart{
        padding:10px ;
        border-top: 2px solid #8080807c;
        border-bottom: 2px solid #8080807c;
        margin-bottom: 10px;
        h4{
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        }
        span{
        margin:10px  0;
        }
    }
    .goCart{
    padding: 10px;
    width: auto;
    min-width: 178px;
    height: 40px;
    background: linear-gradient(180deg, #00A3E8 0%, #247BA0 100%);
    border-radius: 5px;
    color: #fff;
    margin-bottom: 10px;
    border: none;
    }
    .continue {  
    background: linear-gradient(180deg, #FFFFFF 22.92%, #E8E8E8 100%);
    padding: 10px;
    width: auto;
    min-width: 178px;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid #808080;
    }
}
</style>
