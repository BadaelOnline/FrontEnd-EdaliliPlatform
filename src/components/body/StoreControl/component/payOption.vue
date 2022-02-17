<template>
    <div class="parent">
      <h5>إعدادات طرق الدفع</h5>
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
         </div>
      <div class="rw2">
             <div><span>الاسم</span></div>
             <div><span>طريقة الدفع 1</span></div>
             <div><span>طريقة الدفع 2</span></div>
             <div><span>طريقة الدفع 3</span></div>

      </div>  
      <hr>
       <div class="rw2" 
        style="margin-bottom: 10px;
        border-bottom: 1px solid #aaa;
        padding-bottom: 10px;">
            <div>خيار 1</div>
            <div><input type="checkbox"></div>
            <div><input type="checkbox"></div>
            <div><input type="checkbox"></div>
      </div>
        <div class="rw2" 
        style="margin-bottom: 10px;
        border-bottom: 1px solid #aaa;
        padding-bottom: 10px;">
            <div>خيار 1</div>
            <div><input type="checkbox"></div>
            <div><input type="checkbox"></div>
            <div><input type="checkbox"></div>
      </div>
        <div class="rw2">
            <div>خيار 1</div>
            <div><input type="checkbox"></div>
            <div><input type="checkbox"></div>
            <div><input type="checkbox"></div>
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

    }
    .rw2{
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    div{
    width: calc(1000px / 4);
    input{
        width: 20px;
        height: 20px;
        accent-color: #247BA0;
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
    name: 'shipping',
    props: [],


    methods: {
       
    },
    computed: {
         
    },
   
};
</script>
