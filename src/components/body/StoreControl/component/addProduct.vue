<template>
    <div class="parent">
        <h5 @click="componentSidebar = 'showProduct'" style="cursor: pointer;">
          <i  class="fa fa-arrow-right"></i>
          الرجوع الى قائمة المنتجات
        </h5>
      <div class="card">
       <div class="side-category">
           <div class="search">
                <input type="text" placeholder="قسم/فئة/فئة فرعية ">
                <i class="fa fa-search"></i>
           </div>
           <div class="drop" v-for="(item,index) in 3" :key="index" >
                    <div class="list first-list" @click="opendrop1(index+1)"> 
                     <span :class="[drop1 == index+1? 'color-act': '']">قسم {{index+1}}</span>
                     <i :class="[drop1 == index+1? 'color-act': '']" v-if="drop1 == index+1" class="fa fa-angle-down"></i>
                     <i :class="[drop1 == index+1? 'color-act': '']" v-else class="fa fa-angle-left"></i>
                     </div>
                     <div class="drop" v-if="drop1 == index+1" style="margin-inline-start: 10px;margin-block-start: 10px;">
                    <div class="list seconde-list" @click="opendrop2(index)"> 
                     <span :class="[drop2 == index? 'color-act': '']">الفئة 1</span>
                     <i :class="[drop2 == index? 'color-act': '']" v-if="drop2 == index" class="fa fa-angle-down"></i>
                     <i :class="[drop2 == index? 'color-act': '']" v-else class="fa fa-angle-left"></i>
                     </div>
                     <div 
                     :class="[drop2 == index? 'active': '']" class="drop-item animate__animated animate__fadeInRight animate__faster">الفئة الفرعية 1</div>
                     <div 
                     :class="[drop2 == index? 'active': '']" class="drop-item animate__animated animate__fadeInRight animate__fast">الفئة الفرعية 2</div>
                </div>
                </div>
       </div>
       <div class="products-card">
          <div class="d-flex">
               <div class="search">
                <input type="text" placeholder="أدخل اسم المنتج">
                <i class="fa fa-search"></i>
           </div>
            <button class="butinfo" @click="addProductToStore">إضافة {{product_count}}</button>
          </div>
       <div class="products">
           <div class="item" v-for="(item,index) in products" :key="index">
               <div v-if="item.is_appear == 'Appear'" :style="[item.is_appear == 'Appear' ? {'width': '158px','margin': '0 0 20px auto'} : {}]" >
                <input type="checkbox"  :value="item" @change="checked" :name="`n${index+1}`" v-model="details" >
                <div class="imag"></div>
                <div class="name"> {{item.name}} </div>
                <div class="dics">{{item.short_des}}</div>
               </div>
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
    display: flex;
    flex-direction: row;
     @media (max-width: 568.98px) {
    flex-direction: column;
    }
    .side-category{
        width: 230px;
        padding: 10px 20px;
        border-left: 2px solid #c7c7c7;
        @media (max-width: 568.98px) {
         width: 100%;
         border: none ;
         border-bottom:2px solid #c7c7c7;
        }
        .search{
            position: relative;
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            input{
            background: #F2F2F2;
            border-radius: 5px;
            border: none;
            height: 39px;
            width: 100%;
            outline: none;
            padding: 0 10px;
            }
            i{
                position: absolute;
                left: 10px;
                color: #808080;
            }
        }
             .drop{
                 .first-list{
                     &:hover{
                span{
                color: #000;
                }
                i {
                color: #000;
                }
                 }
                }
                .seconde-list{
                     &:hover{
                span{
                color: #000;
                }
                i {
                color: #000;
                }
                 }
                }
                
                 .color-act{
                  color: #247BA0 !important;
                 
                 }
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        flex-wrap: wrap;
         padding: 10px 0;
        div{
            display: flex;
            align-items: center;
            width: 100%;
              img{
            width: 26px;
        }
        span{
            color: #808080;
            margin-inline-start: 10px;
        }
        i {
            color: #808080;
            margin-inline-start: auto;
        }
        
           }
      .drop-item{
        color: #808080;
        width: 75%;
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
            color: #000;
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
    .products-card{
        padding: 10px 20px;
        flex: 1;
          .search{
            position: relative;
            display: flex;
            align-items: center;
            width: 70%;
            input{
            background: #F2F2F2;
            border-radius: 5px;
            border: none;
            height: 39px;
            width: 100%;
            outline: none;
            padding: 0 10px;
            margin-inline-end: 10px;
            }
            i{
                position: absolute;
                left: 20px;
                color: #808080;
            }
        }
       .products{
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        .item{
            // width: 158px;
            position: relative;
            text-align: start;
            // margin: 0 0 20px auto;
             
            input{
                position: absolute;
                top: 10px;
                left: 10px;
                width: 20px;
                height: 20px;
            }
            .imag{
                width: 158px;
                height: 158px;
                background-color: #808080;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .name{
                color: #252525;
                margin-top: 10px;
                font-size: 14px;
            }
            .dics{
            color: #494949; 
            font-size: 14px;
            }
        }
       }
    }
    hr{
    background-color: #247BA0;
    height: 1px;
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
    background-color:#247BA0;
    transition: .3s;
    font-size: 14px;
    height: 39px;
    &:hover{
    background-color:#165e7c; 
    }
    
}

</style>
<script>
import $ from 'jquery';
import axios from 'axios';
export default {
    name: 'addProduct',
    data() {
        return {
             details: [],
        product_count:0,
        drop1: 1000,
        drop2: 1000,
        products: [],
        };
    },
    props: [],
    methods: {
        addProductToStore() { 
            this.$store.dispatch('addProductToStore', this.details);
            this.componentSidebar = "AssignProducts";
        },
        opendrop1(ind){
            if(this.drop1 == ind){
                this.drop1 = 1000;
            }
            else{
                this.drop1 = ind;
            }
        },
        opendrop2(ind){
            if(this.drop2 == ind){
                this.drop2 = 1000;
            }
            else{
                this.drop2 = ind;
            }
        },
         async  fetch() {
            var self = this;
            // let lang = window.localStorage.getItem('lang');
            // sections
            await axios
                .get(`api/products/get-product-by-category/1`)
                .then((res) => {
                    self.products = res.data.Products.product;
                    console.log('products: ', res.data.Products.product);                         
                })
                .catch(function (error) {
                    console.warn('Error products ', error.toJSON());
                }); 
        },
        checked(){
              this.product_count = $('input:checkbox:checked').length;
              console.log(this.details);        
              }
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
    // var numberOfChecked = $('input:checkbox:checked').length;
    // var totalCheckboxes = $('input:checkbox').length;
    // var numberNotChecked = totalCheckboxes - numberOfChecked;
       
    }
   
};
</script>
