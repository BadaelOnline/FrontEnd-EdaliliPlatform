<template>
    <div class="parent">
      <h5>المنتجات</h5>
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
            <div>
            <span>خيارات أخرى:</span>
            <img src="../../../../../public/img/Icons/Export.svg" alt="">
            <img src="../../../../../public/img/Icons/Print.svg" alt="">
            </div>
              <button class="but1" @click="componentSidebar = 'addProduct'">إضافة منتج</button>
        </div>
         </div>
      <div class="rw2" >
             <div><span>id المنتج</span></div>
             <div><span>اسم المنتج</span></div>
             <div><span>الفئة</span></div>
             <div><span>السعر</span></div>
             <div><span>العدد</span></div>
             <div><span>تاريخ الإضافة</span></div>
             <div><span>Action</span></div>
      </div>  
      <hr>
        <div class="rw2">
            <div><input type="text"></div>
            <div><input type="text"></div>
            <div>    
                <select>
                <option selected>اختر...</option>
            </select></div>
            <div>
                <div class="from">
                    <input type="text" placeholder="من">
                </div>
                <div class="from">
                    <input type="text" placeholder="إلى">
                </div>
            </div>
            <div>
            <div class="from">
                    <input type="text" placeholder="من">
                </div>
                <div class="from">
                    <input type="text" placeholder="إلى">
                </div>
            </div>
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
            <div class="action">
                   <button class="but1">بحث</button>
                   <button class="but2">إعادة تعيين</button>
              </div>
      </div>
      <hr>
       <div class="rw2 rw2-item" v-for="item in products" :key="item">
            <div>{{item.id}}</div>
            <div><span>{{item.product_translation[0].name}}</span></div>
            <div><span>الفىة/الفىة الفرعية</span></div>
            <div>
               <span v-if="item.store_product[0]"><span v-if="item.store_product[0].store_product_details[0]"  style="color:#247ba0"> {{item.store_product[0].store_product_details[0].price}} </span></span> 
                <!-- <span >20 </span> -->
                <span>ل.س</span>
            </div>
           
            <div>
                 <span v-if="item.store_product[0]"><span v-if="item.store_product[0].store_product_details[0]"  style="color:#247ba0"> {{item.store_product[0].store_product_details[0].quantity}} </span></span> 
                <!-- <span>20</span> -->
                </div>
            <div>تاريخ الإضافة</div>
            <div class="d-flex justify-content-between">
                <button class="but1" @click="goto(item.id)">تعديل</button>
                <button class="butdelet" @click="deletProduct(item.id)">حذف</button>
            </div>
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
             <button class="but1">إضافة منتج</button>
            </div>
        </div>
        <!-- order 1 -->
        <div class="orders"  v-for="item in products" :key="item">
             <hr>
            <div class="top">
            <div class="user">
                <div style="display: flex;align-items: center;color:#247ba0">
                <i class="fa fa-cubes" aria-hidden="true" style="margin-inline-end: 5px;"></i>
                <span>اسم المنتج</span>
                </div>
                <div style="opacity:.5;font-size: 12px;">
                  <span>1/1/2021</span>
                  <i class="fa fa-arrow-left" aria-hidden="true" style="margin: 0 8px;
font-size: 12px;"></i>
                  <span>10/2/2022</span>
                </div>
            </div>
  
            </div>
            <div class="content">
                <div>
                    <span>{{item.id}} </span>
                    <span style="font-weight:bold;color:#247ba0">{{item.product_translation[0].name}}</span>
                </div>
                <div>
                    <span>الفئة</span>
                    <span style="font-weight:bold;color:#247ba0">الفئة/الفئة الفرعية</span>
                </div>
                <div>
                    <span>العدد</span>
                    <!-- <span style="font-weight:bold;color:#247ba0">20</span> -->
                    <span v-if="item.store_product[0]"><span v-if="item.store_product[0].store_product_details[0]"  style="font-weight:bold;color:#247ba0"> {{item.store_product[0].store_product_details[0].quantity}} </span></span> 
                </div>
                <div>
                    <span>المجموع</span>
                    <!-- <span style="font-weight:bold;color:#247ba0">800.000</span> -->
                     <span v-if="item.store_product[0]"><span v-if="item.store_product[0].store_product_details[0]"  style="font-weight:bold;color:#247ba0"> {{item.store_product[0].store_product_details[0].price}} </span></span> 
                </div>
                <div>
                <button class="but1" @click="goto(item.id)">تعديل</button>
                <button class="butdelet" @click="deletProduct(item.id)">حذف</button>
                </div>
            </div>
        </div>
        
      </div>
    </div>
</template>
<style lang="scss" scoped>
h5{
    font-weight: bold;
}
.rw2-item{
    margin-bottom: 10px;
    border-bottom: 1px solid #aaa;
    padding-bottom: 10px;
    align-items: center;
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
   width: 300px;
    display: flex;
    justify-content: space-between;
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
    span{
        width: 50%;
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
import axios from 'axios';
export default {
    name: 'showProduct',
    data() {
        return {
        products: [],
        };
    },
    props: [],
    methods: {
        goto(id){
        this.$router.push(`/storeditproduct/${this.$route.params.id}/${id}`);
        },
        async deletProduct(id) {
            // let lang = window.localStorage.getItem('lang'); حذف
            // sections
            await axios
                .put(`/api/stores/delete/${id}`)
                .then((res) => {
                    console.log('Success Delete products: ', res.data);                         
                })
                .catch(function (error) {
                    console.warn('Error Delete products ', error.toJSON());
                }); 
        },
         async fetch() {
            var self = this;
            // let lang = window.localStorage.getItem('lang'); 
            // sections
            await axios
                .get(`/api/stores/view-product-in-store/${this.$route.params.id}`)
                .then((res) => {
                    self.products = res.data['Product in Store'];
                    this.fetch();
                    // console.log('products: ', res.data['Product in Store']);                         
                })
                .catch(function (error) {
                    console.warn('Error products ', error.toJSON());
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
