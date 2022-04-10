<template>
    <div class="parent">
      <h5>حساب المتجر</h5>
      <div class="card">
          <h6>معلومات المتجر :</h6>
          <form class="form1">
            <div>
                <label>نشاط المتجر</label>
                <input type="text" placeholder="نشاط المتجر">
            </div>
            <div>
                <label>سمة المتجر</label>
                <button>سمة المتجر</button>
            </div>
            <div>
                <label>اسم المتجر</label>
                <input type="text" placeholder="اسم المتجر">
            </div>
            <div>
                <label>اسم المستخدم</label>
                <input type="text" placeholder="اسم المستخدم">
            </div>
            <div>
                <label>الايميل الألكتروني</label>
                <input type="email" placeholder="الايميل الألكتروني">
            </div>
            <div>
                <label>العملة</label>
                <select>
                    <option selected>العملة المحددة</option>
                </select>
            </div>
            <div class="width33">
                <label> المحافظة</label>
                <select>
                    <option selected>أختر المحافظة</option>
                </select>
            </div>
            <div class="width33">
                <label> المدينة</label>
                <select>
                    <option selected>أختر المدينة</option>
                </select>
            </div>
            <div class="width33">
                <label> الحي</label>
                <select>
                    <option selected>أختر الحي</option>
                </select>
            </div>
          </form>
          <h6> الأرقام ومواقع التواصل الاجتماعي :</h6>
           <form class="form2">
            <div class="width33">
                <label> رقم الهاتف الأرضي</label>
                <div>
                    <i class="fa fa-minus-circle" aria-hidden="true"></i>
                    <input type="number" placeholder="0933080648">
                    <select>
                        <option value="00963" selected>+963</option>
                    </select>
                </div>
                <span>إضافة رقم جديد</span>
            </div>
            <div class="width33">
                <label> رقم الموبايل</label>
                <div>
                    <i class="fa fa-minus-circle" aria-hidden="true"></i>
                    <input type="number" placeholder="0933080648">
                    <select>
                        <option value="00963" selected>+963</option>
                    </select>
                </div>
                <span>إضافة رقم جديد</span>
            </div>
            <div class="width33">
                <label> رقم الواتساب</label>
                <div>
                    <i class="fa fa-minus-circle" aria-hidden="true"></i>
                    <input type="number" placeholder="0933080648">
                    <select>
                        <option value="00963" selected>+963</option>
                    </select>
                </div>
                <span>إضافة رقم جديد</span>
            </div>
            <div class="width50">
                <label>فيسبوك</label>
                <div>
                    <input type="text" placeholder="قم بنسخ الرابط هنا">
                    <i class="far fa-clipboard"></i>
                </div>
            </div>
            <div class="width50">
                <label>فيسبوك</label>
                <div>
                    <input type="text" placeholder="قم بنسخ الرابط هنا">
                    <i class="far fa-clipboard"></i>
                </div>
            </div>
           </form>
           <h6>وثائق المتجر :</h6>
           <form class="form3">
               <div class="register">
                   <div></div>
                   <span>سجل تجاري</span>
                   <span class="update">تعديل</span>
               </div>
               <div class="register">
                   <div></div>
                   <span>ترخيص غرفة التجارة</span>
                   <span class="update">تعديل</span>
               </div>
               <div class="register">
                   <div></div>
                   <span>فاتورة كهرباء/مياه/هاتف</span>
                   <span class="update">تعديل</span>
               </div>
           </form>
        <div class="save">
            <button>حفظ التغييرات</button>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
.parent{
    padding: 30px;
    flex: 1;
    @media (max-width: 767.98px) {
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
    h6{
    text-align: start;
    font-weight: bold;
    margin-top: 30px;
    }
    .form1{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
        div{
        width: 345px;
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-bottom: 10px;
        label{
            color: #808080;
        }
        input{
        width: 100%;
        padding: 2px 10px;
        background-color: #eee;
        border: 1px solid #ddd;
        border-radius: 5px;
        }
        button{
        width: 100%;
        padding: 2px 10px;
        background-color: #eee;
        border: 1px solid #ddd;
        border-radius: 5px;   
        }
        select{
        width: 100%;
        padding: 2px 10px;
        background-color: #eee;
        border: 1px solid #ddd;
        border-radius: 5px;           
        }
        }
        .width33{
        width:calc(1000px / 3);
        padding: 0 80px;
        @media  (max-width: 767.98px) {
        width: 51%;
        padding: 0 10px;
        }
        }
    }
    .form2{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 30px;
    .width33{
    width:calc(800px  / 3);
    margin-bottom: 25px;
    text-align: center;
    label{
        color: #808080;
    }
    div{
    i{
    color: #ed1c24;
    margin-inline-end: 10px;
    margin-inline-start: auto;

    }
    input{
    appearance: textfield;
    border: 1px solid #b9b7b7;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 50%;
    }
    select{
    border: 1px solid #b9b7b7;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    }
    }
    span{
    color: #247BA0;
    cursor: pointer;
    transition: .3s;
    &:hover{
    color: #0E5C7D;
    font-weight: bold;    
    }
    }
    }
    .width50{
        width: 345px;
        text-align: start;
        label{
            color: #808080; 
        }
        div{
        padding: 2px 5px;
        border: 2px solid #ddd;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center; 
        input{
        flex: 1;
        border: none;
        outline: none;
        }  
        i{
        color: #808080; 
        }
        }
    }
    }
    .form3{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 10px 0 25px;
    .register{
        margin-bottom: 25px;
    div{
    width: 230px;
    height: 345px;
    background-color: #C4C4C4;
    border-radius: 3px;
    }
    .update{
    color: #247BA0;
    cursor: pointer;
    transition: .3s;
    margin-inline-start: 10px;
    &:hover{
    color: #0E5C7D;
    font-weight: bold;    
    }
    }
    }
    }
    .save{
    display: flex;
    justify-content: end;
    padding: 0 55px;
    @media  (max-width: 767.98px) {
    justify-content: center;
    }
    button{
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #247BA0;
    transition: .3s;
    &:hover{
    background-color: #0E5C7D; 
    }

    }
    }
    }
}
</style>
<script>
// import $ from 'jquery';
export default {
    name: 'storeacount',
    props: [],


    methods: {
       
    },
    computed: {
         
    },
   
};
</script>
