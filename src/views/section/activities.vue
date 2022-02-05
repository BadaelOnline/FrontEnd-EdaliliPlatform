<template>
<div class="parent">
  <div class="conut">
   <span @click="countStep++">increase +</span>
   <span @click="countStep--">decrease -</span>
  <div>countStep <span class="co">{{countStep}}</span></div>
  
</div>
   <div id="bacover" class="bacover" @click="closeForm()"></div>
              <div class=" kind animate__animated animate__fadeIn" id="store_kind">
              <div class="contain">
                  <div class="item" v-for=" item in Trait" :key="item">
                  <input required type="radio" name="store" :value="item.id" v-model="form.section_id">
                    <span>{{item.name}}</span>
                </div>
    
              </div>
                  <div class="footer">
                  <div>
                    <!-- إن لم تقم بإيجاد سمة مناسة لمتجرك يمكنك <span>إضافة سمة جديدة</span> -->
                  </div>
                  <div>
                    <button @click="closeForm()">إلغاء</button>
                    <button @click="selectstoresection()" class="active">موافق</button>
                  </div>
                </div>
              </div>
<div class="container">
  <div class="step-count larg" v-if="countStep != 5">
    <div :class="[countStep > 0 ? 'active': '', countStep == 0 ? 'stepNow':'']">1 <span>اختيار نشاط</span></div>
    <div :class="[countStep > 1 ? 'active': '', countStep == 1 ? 'stepNow':'']">2 <span>معلومات المتجر</span></div>
    <div :class="[countStep > 2 ? 'active': '', countStep == 2 ? 'stepNow':'']">3 <span>تحميل الوثائق</span></div>
    <div :class="[countStep > 3 ? 'active': '', countStep == 3 ? 'stepNow':'']">4 <span>باقات المنتجات</span></div>
    <div :class="[countStep > 4 ? 'active': '', countStep == 4 ? 'stepNow':'']">5 <span>الدفع</span></div>
  </div>
    <div class="step-count small" v-if="countStep != 5">
    <div v-show="countStep==0 || countStep==1 || countStep==2" :class="[countStep > 0 ? 'active': '', countStep == 0 ? 'stepNow':'']">1 <span>اختيار نشاط</span></div>
    <div v-show="countStep==1 || countStep==2 || countStep==3" :class="[countStep > 1 ? 'active': '', countStep == 1 ? 'stepNow':'']">2 <span>معلومات المتجر</span></div>
    <div v-show="countStep==2 || countStep==3 || countStep==4" :class="[countStep > 2 ? 'active': '', countStep == 2 ? 'stepNow':'']">3 <span>تحميل الوثائق</span></div>
    <div v-show="countStep==3 || countStep==4 || countStep==5" :class="[countStep > 3 ? 'active': '', countStep == 3 ? 'stepNow':'']">4 <span>باقات المنتجات</span></div>
    <div v-show="countStep==4 || countStep==5" :class="[countStep > 4 ? 'active': '', countStep == 4 ? 'stepNow':'']">5 <span>الدفع</span></div>
  </div>
  <div class="step-template1" v-if="countStep==0">
    <h2>أختر نشاطك</h2>
    <div class="temp">
      <div class="colm1">
        <ul v-for="(item,index) in activities" :key="index">
          <li @click="setid_Activity(index)">{{item}}</li>
        </ul>
      </div>
      <div class="colm2">
        <span v-if="activity == '' ">الرجاء اختيار النشاط المناسب لك</span>
        <div class="store-kind" v-if="id_Activity != '' ">
          <div v-for="item in activityId" :key="item"
          @click="form.activity_type_id = item.id"
          :class="[item.id == id_Activity ? 'active': '']">
            <i class="icofont-building-alt"></i>
            <span>{{item.name}}</span>
            </div>
        </div>
      </div>
    </div>

  </div>
    <div class="step-template2 animate__animated animate__backInLeft" v-if="countStep==1">
    <h2>قم بأعداد متجرك</h2>
    <div class="temp">
      <form  ref="name" :class="errors ? 'errors' : ''">
        <div class="colm1">
        <div>
          <label for="">اسم المتجر</label>
          <input required type="text" placeholder="25 حرف حد أقصى" :minlength="3" :maxlength="25"
          @click="invalidateForm" v-model="form.store[0].name">
        </div>
        <div>
          <label for="">البريد الألكتروني</label>
          <input required type="email" @click="invalidateForm" v-model="form.social_media.email">
        </div>
        <div>
          <label for="">الرقم الأرضي</label>
          <input required type="number" @click="invalidateForm" v-model="form.social_media.phone_number">
        </div>
 
        <div>
          <label for="">رقم الموبايل</label>
          <div class="numb">  
            <input required type="number" v-model="form.social_media.mobile">
          <select >
            <option selected :value="`00963`">+963</option>
          </select>
          </div>
        </div>
            <div>
          <label for="">واتساب</label>
          <div class="numb">  
            <input required type="number" v-model="form.social_media.whatsapp_number">
             <select>
            <option :value="`00963`">+963</option>
          </select>
          </div>
        </div>
            <div>
          <label for="">سمة المتجر</label>
          <button @click="openForm">اختر سمة المتجر الخاص بك</button>
        </div>
        <div>
          <label for="">شعار المتجر</label>
          <input required type="file" @change="handlelogo">
        </div>  
         <div>
          <label for="">نوع العملة</label>
          <select class="select" v-model="formData[0].current">
            <option disabled selected>اختر العملة</option>
            <option  @click="setcurrency(item.id)"
            v-for="item in currencies" :key="item">
            {{item.currency}}
            </option>
          </select>
        </div>
      </div>
</form>
    </div>
  </div>
      <div class="step-template2 step-template3 animate__animated animate__backInLeft" v-if="countStep==2">
    <h2>قم  بتحميل الوثائق المطلوبة</h2>
    <div class="temp">
      <form  ref="name" :class="errors ? 'errors' : ''">
        <div class="contain">
          <div v-for="item in attachment" :key="item">
            <label for="">{{item.activity_id}}</label>
            <input required type="file" id="file1" @change="handlefile($event,item.attachments_type_id)">
          </div>
        </div>
      </form>
    </div>
  </div>
  <div class="step-template4 animate__animated animate__backInLeft" v-if="countStep==3">
   <div class="title">
     <h2>قم بأختيار الباقة المناسبة لك</h2>
   </div> 
     <div class="filter">
       <button @click="toggle(3)" :class="[ threemonth ? 'active':'']">3 أشهر</button>
       <button  @click="toggle(6)" :class="[ sixmonth ? 'active':'']">6 أشهر</button>
       <button  @click="toggle(1)" :class="[ oneyear ? 'active':'']">سنويا</button>
     </div>
    <div class="card-contain">

   <div class="card" v-for="item in filteredPlans" :key="item" @click="setplan(item.id,item.num_of_months)">
     <h1>{{item.name}}</h1>
     <h3><strong>{{item.price_per_month}}</strong> ل.س  
       <br>
       <span v-if="oneyear">سنويا</span>
       <span v-if="threemonth">كل 3 أشهر</span>
       <span v-if="sixmonth">كل 6 أشهر</span>
       </h3>
     <p>تتيح لك هذه الباقة بإضافة إلى ما يقارب 100 منتج إلى متجرك</p>
     <button @click="setCategoryPack('100 منتج') ">أختر الباقة</button>
   </div>
    </div>
  </div>
    <div class=" step-template5 animate__animated animate__backInLeft" v-if="countStep==4">
    <h2>قم بأختيار طريقة الدفع</h2>
    <div class="temp">
      <form  ref="name" :class="errors ? 'errors' : ''">
        <div class="contain">
          <div class="row1">
            <input type="radio"> 
            <label for="">الدفع عند التحقق من الطلب</label>
            <span>؟</span>
          </div>
          <h5>الدفع عن طريق Syriatel :</h5>
        <div class="insert-code">
          <input required type="number" placeholder="كود الجهة المرسلة" v-model="formData[0].syriatelfrom">
          <span>إلى</span>
          <input required type="number" placeholder="كود الجهة المستلمة" v-model="formData[0].syriatelto">
        </div>
          <h5>الدفع عن طريق MTN :</h5>
        <div class="insert-code">
         <input required type="number" placeholder="كود الجهة المرسلة" v-model="formData[0].mtnfrom">
          <span>إلى</span>
          <input required type="number" placeholder="كود الجهة المستلمة" v-model="formData[0].mtnto">
        </div>
          <h5>الدفع عن طريق السورية للمدفوعات الألكترونية</h5>
      <div class="insert-code">
         <input required type="number" placeholder="كود الجهة المرسلة" v-model="formData[0].syrianfrom">
          <span>إلى</span>
          <input required type="number" placeholder="كود الجهة المستلمة" v-model="formData[0].syrianto">
        </div>
      </div>
      <div class="code">
        <span> Syriatel - كود أستلام 
            000 000 000</span>
            <span> MTN - كود أستلام 
            000 000 000</span>
      </div>

</form>
    </div>
  </div>
        <div class="button" v-if="countStep == 0">
        <button class="active">إلغاء</button>
        <button :class="activity != '' ? 'actives' : ''" @click="countStep1()">متابعة</button>
      </div>
        <div class="button" v-if="countStep == 1">
        <button class="active" @click="countStep-=1">رجوع</button>
        <button class="actives" @click="invalidateForm();countStep2()">متابعة</button>
      </div>
        <div class="button" v-if="countStep == 2">
        <button class="active" @click="countStep-=1">رجوع</button>
        <button class="actives" @click="countStep3()">متابعة</button>
      </div>
      <div class="button" v-if="countStep == 3">
        <button class="active" @click="countStep-=1">رجوع</button>
        <button :class="formData[0].size_packge != '' && formData[0].category_packge != '' ? 'actives' : ''" @click="countStep4()">متابعة</button>
      </div>
            <div class="button" v-if="countStep == 4">
        <button class="active" @click="countStep-=1">رجوع</button>
        <button class="actives" @click="countStep5()">متابعة</button>
      </div>

       <div class="step-final" v-if="countStep == 5">
         <span>تم أكتمال الطلب سيتم التواصل معك خلال مدة أقصاها 24 ساعة ليتم التحقق من طلبك</span>
          <router-link to="/storeaccount"> 
          <button>الذهاب إلى صفحة المتجر</button>
          </router-link>
       </div>
</div>
</div>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {
      data() {
        return {  
          threemonth:false,
          sixmonth:false,
          oneyear:true,
          user:[],
            show:false,
            errors:false,
            stepsNumber:4,
            countStep:0,
            id_Activity:'',
            form:{
              "social_media": {
                  "phone_number": "",
                  "whatsapp_number": "",
                  "email": "",
                  "mobile": ""
              },
              "store": [
                  {
                      "name": "",
                      "local": "en"
                  }
              ],
              "currency_id": "",
              "location_id": "1",
              "activity_type_id": "",
              "owner_id": "1",
              "section_id": "",
              "is_active": "1",
              "is_approved": "0",
              "logo": {},
              "attachments": [
                 
              ],
              "subscriptions": [
              
              ],
        },

            formData:[ 
            {
               activity:"",
               ar_name:"",
               family_name:"",
               store_name:"",
               store_section:"",
               userName:"",
               email:"",
               phonenum:"",
               mobilenum:"",
               whatsappnum:"",
               logo:"",
               current:"اختر العملة",
               password:"",
               aprrpassword:"",
               file1:"",
               file2:"",
               file3:"",
               size_packge:"",
               category_packge:"",
               syriatelfrom :"",
               syriatelto :"",
               mtnfrom :"",
               mtnto :"",
               syrianfrom :"",
               syrianto :"",
               contry_number:"00963"
             }
            ]
        };
    },
 
  
  methods:{
    // step 1 methods

    setid_Activity(i){
      this.id_Activity =i;
      this.$store.dispatch('loadactivityId',this.id_Activity);
      this.$store.dispatch('loadattachmentId',this.id_Activity);
    },
    countStep1(){
    // Step One
      if(this.countStep == 0){
        if(this.form.activity_type_id != ''){
        this.countStep+=1
        }
      }   
    },
     // step 2 methods
    setcurrency(i){
      this.form.currency_id = i;
    },
     handlelogo(event) {
      this.form.logo = event.target.files[0];
      console.log(this.form.logo);
    },
    async fetch() {
            var self = this;
            let token = window.localStorage.getItem('token');
            if(token != null){
          // user
            await axios
                .post(`/api/get_user`,{token})
                .then((res) => {
                    self.user = res.data;
                    console.log('user: ', res.data);                         
                })
                .catch(function (error) {
                    console.warn('Error user ', error.toJSON());
                });
            }
        
        },
    countStep2(){
      // Step Two
      if(this.countStep == 1){
    
      if( !this.$refs.name.checkValidity() ){
        this.$refs.name.checkValidity()
      }
      else{
        this.countStep+=1
      }
      } 
},
    // step 3 methods
      handlefile(event,id) {
      this.form.attachments.push({'activity_id':this.id_Activity,'attachments_type_id':id,'path':event.target.files[0]});
      console.log(this.form.attachments);
    },
    // step 4 methods
    setplan(id,num_of_months){
      const d = new Date();
      const datenow = d.toLocaleDateString();
      const dateAfter = d.setMonth(d.getMonth() + num_of_months);
      this.form.subscriptions.push({'plan_id':id,'transaction_id':"1",'start_date':datenow,'end_date':dateAfter,'is_active':"1"});
    },
    // step 5 methods
    toggle(i){
      if(i == 3){
        this.threemonth = true;
        this.sixmonth = false;
        this.oneyear = false;
      this.formData[0].size_packge = "كل 3 أشهر";
      }
      else if(i == 6){
        this.threemonth = false;
        this.sixmonth = true;
        this.oneyear = false;
      this.formData[0].size_packge = "كل 6 أشهر";

      }
            else if(i == 1){
        this.threemonth = false;
        this.sixmonth = false;
        this.oneyear = true;
      this.formData[0].size_packge = " سنويا";

      }
    },

  showPass() {
      var x = document.getElementById('password');
      var y = document.getElementById('aprrpassword');
      if (x.type === 'password') {
          x.type = 'text';
          y.type = 'text';
          this.show = true;
      } else {
          x.type = 'password';
          y.type = 'password';
           this.show = false;
      }
        },
  invalidateForm() {
    if( !this.$refs.name.checkValidity() ){
       this.errors = true;
     }
     else{
       this.errors = false;
     }
    },


countStep3(){
  // Step three
  if(this.countStep == 2){
    if(this.formData[0].file1== "" || this.formData[0].file2== "" || this.formData[0].file3== ""){
   this.$notify({
    // (optional)
    // Name of the notification holder
    group: 'foo',
    // (optional)
    // Title (will be wrapped in div.notification-title)
    title: 'تحميل الوثائق',
    // Content (will be wrapped in div.notification-content)
    text: "عليك  بتحميل الوثائق المطلوبة",
    // (optional)
    // Class that will be assigned to the notification
    type: 'error', // error , warn , success , info
    // (optional, override)
    // Time (in ms) to keep the notification on screen
    duration: 5000,
    // (optional, override)
    // Time (in ms) to show / hide notifications
    speed: 1000
  });
    }
      else{
      this.countStep+=1
    }
         }
         
},
countStep4(){
  // Step three
  if(this.countStep == 3){
    if(this.formData[0].size_packge == "" || this.formData[0].category_packge == "" ){
   this.$notify({
    // (optional)
    // Name of the notification holder
    group: 'foo',
    // (optional)
    // Title (will be wrapped in div.notification-title)
    title: 'اختيار الباقة',
    // Content (will be wrapped in div.notification-content)
    text: "عليك  بأختيار الباقة المطلوبة وتحديد مدة الباقة",
    // (optional)
    // Class that will be assigned to the notification
    type: 'error', // error , warn , success , info
    // (optional, override)
    // Time (in ms) to keep the notification on screen
    duration: 5000,
    // (optional, override)
    // Time (in ms) to show / hide notifications
    speed: 1000
  });
    }
      else{
           this.$notify({
    // (optional)
    // Name of the notification holder
    group: 'foo',
    // (optional)
    // Title (will be wrapped in div.notification-title)
    title: this.formData[0].size_packge,
    // Content (will be wrapped in div.notification-content)
    text: this.formData[0].category_packge,
    // (optional)
    // Class that will be assigned to the notification
    type: 'success', // error , warn , success , info
    // (optional, override)
    // Time (in ms) to keep the notification on screen
    duration: 5000,
    // (optional, override)
    // Time (in ms) to show / hide notifications
    speed: 1000
  });
      this.countStep+=1
    }
         }
         
},
countStep5(){
  // Step three
  if(this.countStep == 4){

if((this.formData[0].syriatelfrom != '' && this.formData[0].syriatelto != '') || (this.formData[0].mtnfrom != '' && this.formData[0].mtnto != '') || (this.formData[0].syrianfrom != '' && this.formData[0].syrianto != '')){
 this.countStep+=1
}
else{
             this.$notify({
    // (optional)
    // Name of the notification holder
    group: 'foo',
    // (optional)
    // Title (will be wrapped in div.notification-title)
    title: 'طريقة الدفع',
    // Content (will be wrapped in div.notification-content)
    text: "يجب عليك تحديد طريقة الدفع",
    // (optional)
    // Class that will be assigned to the notification
    type: 'error', // error , warn , success , info
    // (optional, override)
    // Time (in ms) to keep the notification on screen
    duration: 5000,
    // (optional, override)
    // Time (in ms) to show / hide notifications
    speed: 1000
  });
}
  }
  
  },
  selectstoresection(){
    if(this.formData[0].store_section == ''){
   this.$notify({
    // (optional)
    // Name of the notification holder
    group: 'foo',
    // (optional)
    // Title (will be wrapped in div.notification-title)
    title: 'سمة المتجر',
    // Content (will be wrapped in div.notification-content)
    text: "عليك أختيار سمة للمتجر",
    // (optional)
    // Class that will be assigned to the notification
    type: 'error', // error , warn , success , info
    // (optional, override)
    // Time (in ms) to keep the notification on screen
    duration: 5000,
    // (optional, override)
    // Time (in ms) to show / hide notifications
    speed: 1000
  });
}
else{
   document.getElementById('store_kind').style.display = 'none';
    document.getElementById('bacover').style.display = 'none';
}
  },
        setCategoryPack(packge) {
          this.formData[0].category_packge = packge;
        } ,
        openForm() {
            document.getElementById('store_kind').style.display = 'flex ';
             document.getElementById('bacover').style.display = 'block ';
        } ,
        closeForm() {
            document.getElementById('store_kind').style.display = 'none ';
             document.getElementById('bacover').style.display = 'none ';
        }    ,
        
  },
    computed: {
      ...mapState([ 'activities','plans','activityId','Trait','currencies','attachment']),
          // ______________ plans filter ________________
    filteredPlans() {
          if (this.plans != "") {
            if (this.oneyear) {
            return this.plans.filter((el) => {
              return el.num_of_months == "12";
            });
          } else if (this.sixmonth) {
            return this.plans.filter((el) => {
              return el.sixmonth  == "6";
            });
          } else if (this.threemonth) {
            return this.plans.filter((el) => {
              return el.threemonth  == "3";
            });
          }
          }
         
    },

    },
   mounted() {
      this.$store.dispatch('loadactivities');
      this.$store.dispatch('loadPlans');
      this.$store.dispatch('loadTraitStore');
      this.$store.dispatch('loadcurrencies');
      this.fetch();
    },
}
</script>
<style lang="scss" scoped>
.conut{
  position: fixed;
  left: 0;
  top: 165px;
  width: 130px;
  display: grid;
  border: 2px solid #ddd;
  span{
  width: 100%;
  font-weight: bold;
  background-color: #ddd;
  cursor: pointer;
  transition: .3s;
  &:hover{
    background-color: #247ba0;
    color: #fff;
  }
  }
  .co{
    background-color: transparent;
    color: red;
    cursor: auto;
  }
}
.icofont-eye-blocked,.icofont-eye-alt{
  cursor: pointer;
}
.parent{
  background-color: #f7f7f7;
}
.container{
  direction: rtl;
  .step-count{
    display: flex;
    justify-content: flex-start;
    padding:10px 0 50px 0;
    @media (max-width:767.98px) {
    justify-content: space-around;
    }
    div{
      padding: 5px 20px;
      margin: 0 0 0 100px;
      border: 2px dashed #777;
      border-radius: 50%;
      font-size: 30px;
      position: relative;
      color: #777;
      font-weight: bold;
      transition: .5s;
      @media  (max-width: 767.98px) {
        margin: 0 ;
      }
      &.stepNow{
      border: 2px solid #247BA0;
      color: #247BA0;
      span{
        color: #000;
        font-weight: bold;
      }
      
      }
      &:not(:last-child)::after{
      content: "";
      position: absolute;
      width: 70px;
      height: 2px;
      background-color: #808080;
      top: 26px;
      left: -85px;
      border-top: 2px dashed aliceblue;
      @media  (max-width: 767.98px) {
        width: 0;
      }
      }
      span{
        position: absolute;
        color: #808080;
        font-size: 15px;
        font-weight: 200;
        width: 115px;
        bottom: -35px;
        left: 50%;
        transform: translateX(-50%);
      }
      &.active{
      background-color: #247BA0;
      border: 2px solid #247BA0;
      color: #fff;
      &:not(:last-child)::after{
      border-top: 2px solid #247BA0;
      }
      span{
        color:#247BA0;
        font-weight: bold;
      }
    }
     
    }
    
    
  }
  .step-template1{
    h2{
      text-align: start;
      font-size: 24px;
    }
    .temp{
      display: flex;
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 1px 2px 12px #b5b5b5;
      min-height: 220px;
      .colm1{
        border: 1px solid #acacac;
        border-top-right-radius: 10px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 10px;
        ul{
          padding: 0;
          margin: 0;
          list-style: none;
          li{
            padding: 10px 10px 10px 20px;
            text-align: start;
            color: #777;
            font-size: 22px;
            transition: .5s;
            border-bottom:1px solid #777;
           &:hover{
             background-color: #247BA0;
             color: #fff;
             cursor: pointer;
           }
               @media (max-width:568px) {
                 padding: 10px 10px 10px 10px;
                 font-size: 20px;
               }
          }
        }
      }
      .colm2{
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        font-size: 30px;
        color: #777;
        border: 1px solid #acacac;
        border-top-left-radius: 10px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 10px;
        .store-kind{
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin-top: 25px;
        flex-wrap: wrap;
        div{
          background-color: #fff;
          box-shadow: 1px 3px 10px #ccc;
          padding: 10px 25px;
          border-radius: 7px;
          font-size: 22px;
          transition: .5s;
          cursor: pointer;
          margin: 10px 0;
          min-width: 200px;
          i{
            margin-inline-start: 10px;
          }
          &:hover{
            color: #247BA0;
          }
          &.active{
            color: #247BA0;
          }
        }
         @media (max-width:568px) {
           flex-direction: column;
           div{
             margin-bottom: 20px;
           }
         }
        }
      }
    }
  }
  .step-template2{
    h2{
      text-align: start;
      font-size: 24px;
    }
    .temp{
      form{
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 1px 2px 12px #b5b5b5;
      background-color: #fff9f9ed;
      padding: 15px;
      display: flex;
      flex-wrap: wrap;
      div{
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        width:100%;
        div{
          width: 50%;
          display: flex;
          flex-direction: column;
          label{
            font-size: 18px;
            color: #5e5d5d;
          }
          input{
            width: 70%;
            height: 28px;
            border-radius: 5px;
            border: 1px solid #b9b7b7;
            padding: 10px;
            &:focus{
            outline: none;
            }
         
          }
          button{
            width: 70%;
            height: 28px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 3px;
            color: #444;
            box-shadow: 1px 3px 5px #ccc;
          }
          input[type=number] {
             appearance: textfield;
          }
          input[type=file] {
            padding: 0;
          }
           select{
              border: 1px solid #ccc;
              color: #626161;
              background-color: #fff;
              border-radius: 3px;
            }
          .numb{
            display: flex;
            flex-direction:row;
             width: 70%;
             flex-wrap: nowrap;
            input{
              border-top-left-radius: 0px;
              border-top-right-radius: 5px;
              border-bottom-right-radius: 5px;
              border-bottom-left-radius: 0px;
              width: 100%;
            }
              select{
              height: 28px;
              border-end-end-radius: 5px;
              border-start-end-radius: 5px;
              }
         
          }
        }
        @media (max-width:767.98px) {
           flex-direction: column;
           align-items: center;
           div{
            width: 100%;
            margin-bottom: 15px;
           }
           }
      }
      // .colm3{
      //   justify-content: flex-end;
      //   div{
      //     &:first-child{
      //       margin-bottom: 50px;
      //     }
      //     .select{
      //       background-color: #fff;
      //       border: 1px solid #bfbebe;
      //       padding: 5px 10px;
      //       border-radius: 5px;
      //       color: #444343;
      //     }
      //   }
      // }
    }
    form.errors {
  :invalid {
    border-color: red;
  }
}
  }
  }
  .step-template3{
    .temp{
      form{
        min-height: 340px;
      .contain{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        flex-direction: row;
        div{
          width: 50%;
            @media (max-width:568px) {
               width: 100%;
            }
          input{
            background-color: #fff;
          }
        }
            }
        }
    }
  }
  .step-template4{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .title{
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      h2{
        margin: 0;
        font-size: 24px;
      }
     
    }
     .filter{
        background-color: #808080;
        margin: 0 auto 50px;
        border-radius: 50px;
        padding: 10px;
        button{
          background-color: #808080;
          border: none;
          padding: 8px 25px;
          margin: 0 1px;
          cursor: pointer;
          font-weight: bold;
          transition: .2s;
          color: #fff;
          border-radius: 50px;
          margin: 0 5px;
          &:hover{
            background-color: #fff;
            color: #121313;
          }
          &.active{
            background-color: #fff;
            color: #247BA0;
          }
        }
      }
    .card-contain{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      @media (max-width:568px) {
        justify-content: center;
        }
      .card{
        background-color: #fff;
        width: 210px;
        height: 345px;
        border-radius: 5px;
        box-shadow: 1px 3px 10px #ddd;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        transition: .5s;
        margin-bottom: 20px;
        &:hover{
          border-width: 4px;
          border-style: solid;
          background: linear-gradient(#fff,#fff) padding-box, linear-gradient(to right, #6161ff, #fd5252) border-box;
          border: 3px solid transparent;
          border-radius: 10px;
          transform: translateY(-20px);
          button{
          color: #fff;
          background-color: #DE222A;
          border-radius: 5px;
        }
        }
        h1{
          color: #000000;
          font-size: 16px;
          position: relative;
          font-weight: bold;
          padding: 0 5px;
          &::after{
            content: '';
            position: absolute;
            bottom: -20px;
            background-color: #bbb;
            width: 100%;
            height: 2px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        h3{
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
          position: relative;
          width: 150px;
          color: #2e81a4;
          span{
            color: #000000;
          }
        &::after{
            content: '';
            position: absolute;
            bottom: -20px;
            background-color: #bbb;
            width: 100%;
            height: 2px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        p{
          font-size: 14px;
          width: 155px;
          position: relative;
            &::after{
            content: '';
            position: absolute;
            bottom: -20px;
            background-color: #bbb;
            width: 100%;
            height: 2px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        button{
          width: 155px;
          height: 35px;
          border: none;
          font-size: 18px;
          font-weight: bold;
          color: #DE222A;
          letter-spacing: 1px;
          cursor: pointer;
          background-color: transparent;
          transition: .5s;
        }
      }
    }
  }
  .step-template5{
    h2{
      text-align: start;
      font-size: 24px;
    }
    form{
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 1px 2px 12px #b5b5b5;
      padding: 15px;
      display: flex;
      justify-content: space-between;
         @media (max-width:991.98px) {
         flex-flow: column-reverse;
        }
   
      .contain{
        .row1{
          display: flex;
          margin-bottom: 25px;
          input{
            margin: 0 10px;
            width: 18px;
          }
          label{
            margin: 0;
            font-size: 20px;
            display: flex;
            align-items: center;
          }
          span{
           border: 2px solid #777;
            margin: 0 10px;
            border-radius: 50%;
            font-size: 20px;
            padding: 0 7px;
            height: 30px;
            color: #777;
          }
           @media (max-width:767.98px) {
           justify-content: center;
        }
        }
        h5{
          display: flex;
          font-size: 16px;
       @media (max-width:568px) {
         justify-content: center;
        }
        }
        .insert-code{
          margin-bottom: 25px;
          input{
            appearance: textfield;
            border-radius: 5px;
            border: 1px solid #a8a7a7;
            height: 28px;
            text-align: center;
          }
          span{
            margin: 0 20px;
          }
      @media (max-width:767.98px) {
        display: flex;
        flex-direction: column;
        }

        }
      }
      .code{
        display: flex;
        flex-direction: column;
        margin-inline-end: 50px;
        align-items: self-start;

        span{
              font-size: 20px;
              margin-bottom: 10px;
        }
      @media (max-width:767.98px) {
           margin-inline-end: 0px;
           margin-bottom: 20px;
           align-items: center;
        }
      }
    }
  }
      .button{
      padding: 25px 0;
      display: flex;
      justify-content: flex-end;
      button{
        margin-inline-start: 20px;
        background-color: transparent;
        border: 1px solid #B0AFAF;
        padding: 5px 30px;
        border-radius: 5px;
        color: #B0AFAF;
        font-size: 20px;
        cursor: pointer;
        transition: .5s;
        &:hover{
          background-color: #247BA0;
          color: #fff;
        }
        &.active{
           border: 1px solid #247BA0;
            color: #247BA0;
            &:hover{
         
          color: #fff;
        }
        }
        &.actives{
          border: 1px solid #247BA0;
          background-color: #247BA0;
          color: #fff;
        }
      }
    }
    .step-final{
      min-height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span{
        font-size: 20px;
        margin-bottom: 25px;
      }
      button{
        border: none;
        color: #fff;
        padding: 8px 15px;
        background-color: #247BA0;
        border-radius: 5px;
        cursor: pointer;
        font-size: 20px;

      }
    }
}

.bacover{
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top:  0;
    display: none;
}
.kind{
    position: absolute;
    z-index: 101;
    background-color: #f2f2f2;
    width: 85%;
    height: 60%;
    top: 58%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 20px;
    display: none;
    .contain{
      flex: 1;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      overflow-y: scroll;
      padding: 20px 0;
      scrollbar-width: none;
      .item{
        background-color: #fff;
        width: 21%;
        height: 70px;
        margin-bottom: 20px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 1px 3px 10px #ccc;
        display: flex;
        align-items: center;
        input{
          width: 25px;
          height: 23px;
          cursor: pointer;
        }
        span{
          font-size: 19px;
          margin-inline-start: 15px;
          font-weight: bold;
          margin-top: -6px;
        }
      }
    }
    .footer{
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      border: 2px solid #aeaeae;
      padding: 15px;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
      span{
        color: #3f85f2;
      }
      button{
        color: #3f85f2;
        border: none;
        background-color: transparent;
        padding: 8px 25px;
        border-radius: 3px;
        &.active{
          background-color: #3f85f2;
          color: #fff;
        }
      }
    }
}
.small{
  display: none !important;
}
/* Small devices (landscape phones, 576px and up) */
@media (max-width: 767.98px) {
  .small{
  display: flex !important;
}
.larg{
  display: none !important;
}
}
</style>