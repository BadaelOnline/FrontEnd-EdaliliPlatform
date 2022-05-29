<template>
    <div class="parent">
        <h5 @click="componentSidebar = 'addProduct'" style="cursor: pointer;">
          <i  class="fa fa-arrow-right"></i>
          الرجوع إلى إضافة منتج
        </h5>
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
              <button class="but-add" @click="AssignProducts()">إضافة المنتجات</button>
        </div>
         </div>
    <div class="rw2" >
             <div><span>الصورة</span></div>
             <div><span>الاسم</span></div>
             <div class="wid30"><span>السعر</span></div>
             <div class="wid30"><span>الكمية</span></div>
      </div>  
      <hr>
       <div class="rw2 rw2-item" v-for="(item,index) in stateProductsArray" :key="index">
            <div class="imag"><img src="" alt=""></div>
            <div>{{item.name}}</div>
            <div class="wid30">
                <input type="text" @keypress="acceptNumber($event)" v-model="store_product[index].products.price">  
                <!--  -->
            </div>
            <div class="wid30">
                <input type="text" @keypress="acceptNumber($event)" v-model="store_product[index].products.quantity">
                <!--  -->
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
              <button class="but-add" @click="AssignProducts()">إضافة المنتجات</button>
            </div>
        </div>
        <!-- order 1 -->
        <div class="orders"  v-for="(item,index) in stateProductsArray" :key="index">
             <hr>
            <div class="top">
            <div class="user">
                <div style="display: flex;align-items: center;color:#247ba0">
                <i class="fa fa-cubes" aria-hidden="true" style="margin-inline-end: 5px;"></i>
                <span>{{item.name}}</span>
                </div>
            </div>
            </div>
            <div class="content">
                <div>
                    <span> <div class="imag"><img src="" alt=""></div></span>
                </div>
                <div>
                    <span>السعر</span>
                    <input type="text" @keypress="acceptNumber($event)" v-model="store_product[index].products.price">  
                </div>
                <div>
                    <span>الكمية</span>
                    <input type="text" @keypress="acceptNumber($event)" v-model="store_product[index].products.quantity">
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
    justify-content: end;
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
    .wid30{
        width: 25%;
        input{
            width: 100%;
            padding: 5px;
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
        display: flex;
        justify-content: center;
        align-items: center;
        
        .imag{
            width: 100px;
            height: 100px;
            background-color: #fff;
        }
    }  
    input{
        padding: 5px 10px;
        border: 1px solid #9d9d9d;
        border-radius: 5px;
        outline: none;
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
.but-add{
    color: #fff;
    padding: 10px 20px;
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
import { mapState } from 'vuex';
export default {
    name: 'AssignProducts',
    data() {
        return {
        stateProductsArray:[],
        totalProps: '',
        store_product: [
           
        ]
        };
    },
    props: [],
    methods: {
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
        async AssignProducts() {
            var self = this;
            axios.post(`/api/stores/assign/${self.$route.params.id}`, self.store_product)
            .then(function(res) {
            console.log("Sucess Assign Products",res.data);
            self.componentSidebar = 'showProduct';
            })
            .catch(function(error) {
            if (error.response) {
                console.log("Error Assign Products",error.response);
            }
            });
    },
    },
        computed:{
        ...mapState(['ProductToStoreItems']),
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
      this.stateProductsArray = this.$store.state.ProductToStoreItems['0'];
      this.totalProps = this.$store.state.ProductToStoreItems.reduce((a, obj) => a + Object.keys(obj).length, 0);
        for(var i = 0;i < this.totalProps; i++){
                this.store_product.push({ products: {
                "id": this.stateProductsArray[i].id,
                "price": 1,
                "quantity": 1
                }, });
           
                
         }
        //   console.log('store_product:',this.store_product);
    
    }
   
};
</script>
