<template>

 <div
            v-if="!authenticated"
            class="content_loader hidden"
            id="content_loader"
        >
            <div id="loader" class="loader"></div>
        </div>
       <div id="backcover" class="backcover" @click="closeForm()"></div>
          <div id="cover_dep" class="backcover2" @click="close_dep()"></div>
        
          <!-- _________________________ Register ______________________ -->
        <div class="forms-parent">
        <div class="form-popup " id="myForm">
            <form ref="sig" :class="errors ? 'errors' : ''"
            action="/action_page.php" class="form-container">
            <span class="cancel" @click="closeForm()"
                    ><i class="fa fa-window-close"></i
                ></span>
                <div class="head">
                <h3>مرحبا بك في</h3>
                <h1>E-<span>DALELY</span></h1>
                </div>
              <h3 style="text-align: center;">تسجيل الدخول</h3>
               <div>
                    <label ><b>البريد الألكتروني:</b></label>
                    <input
                    type="email"
                    v-model="formSign.email"
                    required
                    @click="invalidateSign()"
                />
               </div>
               <div>
               
                <label ><b>كلمة المرور:</b></label>

                <input
                    type="password"
                    id="myInput"
                    v-model="formSign.password"
                    required
                    minlength="8"
                    @click="invalidateSign()"
                />
                <i v-if="show" @click="showPass()" class="fa fa-eye" aria-hidden="true" style="color:#808080;cursor: pointer;"></i>
                <i v-else @click="showPass()" class="fa fa-eye-slash" style="color:#808080;cursor: pointer;" aria-hidden="true"></i>
               </div>
                <div @click="forgetForm()" class="create" style="font-size: 14px;text-align: center;">هل نسيت كلمة المرور؟</div>
                <span @click="submit()" class="btn">تسجيل الدخول</span>
                <div style="font-size: 14px;">
                 <span>ليس لديك حساب؟</span>
                <span  @click="registerForm()" class="create">إنشاء حساب جديد</span>
                </div> 
            </form>
        </div>
   <!-- _________________________ Register ______________________ -->
        <div class="form-popup2 " id="myForm2">
            <form ref="reg" :class="errors ? 'errors' : ''"
                action="/action_page.php"
                class="form-container2 form_register"
            >
              
                <span class="cancel" @click="closeForm()"
                    ><i class="fa fa-window-close"></i
                ></span>
                <div class="head">
                <h3>مرحبا بك في</h3>
                <h1>E-<span>DALELY</span></h1>
                </div>
                  <h3 style="text-align: center;">إنشاء حساب جديد</h3>
                <div class="name">
               <div>
                <label ><b>اسم الأول:</b></label>
                <input
                    type="text"
                    v-model="formRegister.first_name"
                    required
                    minlength="3"
                    @click="invalidateReg()"
                />
               </div>
                <div>
                <label><b>اسم العائلة: </b></label>
                <input
                    type="text"
                    v-model="formRegister.last_name"
                    required
                    minlength="3"
                    @click="invalidateReg()"
                />
                 </div>
                </div>
              <div>
                    <label><b>البريد الألكتروني:</b></label>
                    <input
                    type="email"
                    v-model="formRegister.email"
                    required
                    @click="invalidateReg()"
                />
              </div>
                <div>
                    <label ><b>كلمة المرور:</b></label>
                     <input
                    type="password"
                    id="myInput2"
                    v-model="formRegister.password"
                    required
                    minlength="8"
                    @click="invalidateReg()"
                />
                <span style="opacity: 0.6;font-size: 14px;font-weight: bold;">
                    يجب أن تحتوي كلمة السر على الأقل 8 أحرف.
                    </span>
               </div>
                <div>
                <label><b>تأكبد كلمة المرور:</b></label>
                <input
                :style="[ SurePassword != formRegister.password ? {'border' :'1px solid #ed1c24'} : {}]"
                    type="password"
                    id="myInput3"
                    v-model="SurePassword"
                    required
                    minlength="8"
                    @click="invalidateReg()"
                />
                <i v-if="show2" @click="showPass2()" class="fa fa-eye" aria-hidden="true" style="color:#808080;cursor: pointer;"></i>
                <i v-else @click="showPass2()" class="fa fa-eye-slash" style="color:#808080;cursor: pointer;" aria-hidden="true"></i>
                </div>
               
                <span @click="submit1()" class="btn">إنشاء حساب جديد</span>
                 <div style="font-size: 14px;text-align: center;">
                 <span> لديك حساب بالفعل؟</span>
                <span  @click="loginrForm()" class="create">تسجيل الدخول</span>
                </div> 
            </form>
        </div> 
        <!-- forget password -->
             <div class="form-popup3 " id="myForm3">
            <form ref="pass" :class="errors ? 'errors' : ''"
            action="/action_page.php" class="form-container3">
            <span class="cancel" @click="closeForm()"
                    ><i class="fa fa-window-close"></i
                ></span>
              <h3 style="text-align: center;">هل نسيت كلمة المرور؟</h3>
              <p style="font-weight: bold;;text-align: center;">أدخل البريد الألكتروني الخاص بك وسوف نرسل لك رابطا لإعادة تعيين كلمة المرور الخاص بك</p>
               <div>
                    <label ><b>البريد الألكتروني:</b></label>
                    <input
                    type="email"
                    v-model="formSign.email"
                    required
                    @click="invalidatepass()"
                />
               </div>
              
                <span @click="successForm()" class="btn">التالي</span>
                <div style="font-size: 14px;">
               
                <span style="text-align: center;" @click="loginrForm()" class="create">العودة إلى تسجيل الدخول</span>
                </div> 
            </form>
        </div>
           <!-- succes send password -->
             <div class="form-popup4 " id="myForm4">
            <form ref="name" :class="errors ? 'errors' : ''"
            action="/action_page.php" class="form-container3">
            <span class="cancel" @click="closeForm()"
                    ><i class="fa fa-window-close"></i
                ></span>
             <div class="head">
               
                <h1  style="text-align: center;"><span>تم إرسال بريد إلكتروني لإعادة تعيين كلمة المرور</span></h1>
                </div>
              <p style="font-weight: bold;;text-align: center;">
                  لإعادة تعيين كلمة المرور تم إرسال بريد إلكتروني يحتوي على رابط 
                  الرجاء التحقق من بريدك الوارد
                    </p>
                <span @click="loginrForm()" class="btn">العودة إلى تسجيل الدخول</span>
            </form>
        </div>
       </div>
        
        <!-- <div class="links hov">
            <router-link to="/instrc" exact class="links">
                <div class="menu-icon">
                    <img src="../../../public/img/factory.png" height="30" />
                </div>
                <div class="linkText">{{ $t('Factories') }}</div>
            </router-link>
        </div>
        <div class="links hov">
            <router-link to="/company" class="links">
                <div class="menu-icon">
                    <img src="../../../public/img/building.png" height="30" />
                </div>
                <div class="linkText">{{ $t('Companies') }}</div>
            </router-link>
        </div>
        <div class="links hov">
            <router-link to="/professional" class="links">
                <div class="menu-icon">
                    <img src="../../../public/img/surface1.png" height="30" />
                </div>
                <div class="linkText">{{ $t('ProfessionalsTechnicians') }}</div>
            </router-link>
        </div>
        <div class="links hov">
            <router-link to="/medic" class="links">
                <div class="menu-icon">
                    <img src="../../../public/img/medicine.png" height="30" />
                </div>
                <div class="linkText">
                    {{ $t('PharmaciesMedicines') }}
                </div></router-link
            >
                    <div class="links hov">
            <router-link to="/doctors" class="links">
                <div class="linkText">{{ $t('Doctors') }}</div>
                 <div class="menu-icon">
                    <img
                        src="../../../public/img/stethoscope.png"
                        height="30"
                    />
                </div>
                </router-link>
               
        </div>
        <div class="links hov">
            <router-link to="/resturants" class="links">
                <div class="linkText">{{ $t('RestaurantsCafes') }}</div>
                <div class="menu-icon">
                    <img src="../../../public/img/terrace.png" height="30" />
                </div>
                </router-link
            >
        </div>
        <div class="links hov">
            <router-link to="/festival" class="links">
                <div class="linkText">{{ $t('FestivalPerformances') }}</div>
                <div class="menu-icon">
                    <img
                        src="../../../public/img/sign_shopping.png"
                        height="30"
                    />
                </div>
                </router-link
            >
        </div>
        <div class="links hov">
            <router-link to="/stores" class="links">
                <div class="linkText">{{ $t('Stores') }}</div>
                <div class="menu-icon">
                    <img
                        src="../../../public/img/Store_review_2_.png"
                        height="30"
                    />
                </div>
                </router-link>
        </div>
        <div class="links hov">
            <router-link to="/products" class="links">
                <div class="linkText">{{ $t('Products') }}</div>
                <div class="menu-icon">
                    <img src="../../../public/img/sections.png" height="30" />
                </div>
                </router-link>
        </div>
        <div class="links hov">
            <router-link to="/" class="links">
                <div class="linkText">{{ $t('Allsections') }}</div>
                <div class="menu-icon">
                    <img src="../../../public/img/sections.png" height="30" />
                </div>
                </router-link>
        </div>
        </div> -->
        <div class="contain_navba">
         <div class="navba">
        <div class="child1">
                <img
                    @click="goto"
                    height="40"
                    src="../../../public/img/Group.png"
                />
                     <div class="sign">
            <template v-if="authenticated" class="user">
                <span @click.prevent="signOut" href="#" class="link">{{$t('LogOut')}}</span>
            </template>
            <template v-else class="user" >
                <div @click="openForm()">
               <i class="fa fa-user-circle" style="margin: 0 5px;"> </i> <span  >{{$t('signin')}}</span>
                </div>
            </template>        
        </div>
        </div>
        <div class="child2"> 
      <form >
                
		<div id="sw_woo_search_1" class="search input-group" data-height_image="50" data-width_image="50" data-show_image="1" data-show_price="1" data-character="3" data-limit="5" data-search_type="0">
						<div class="cat-wrapper">
				<label class="label-search">
					<select name="category_product" class="s1_option category-selection">
						<option value="">All Section</option>
				        <option value="uncategorized">Home</option>
                        <option value="bathroom">Products</option>
						<option value="beauty">Stores</option>
						<option value="bedroom">Fistival</option>
						<option value="decor">Resturant</option>
						<option value="electronics">Doctor</option>
					</select>
				</label>
			</div>
			<div class="content-search">
				<input class="autosearch-input" type="text" value="" size="50" autocomplete="off" placeholder="Search Item..." name="s">
                <button><i class="fa fa-search" aria-hidden="true"></i></button>	
			</div>
				
					</div>
            </form>
        </div>
    <div class="child3">       
        <div  class="address">
        <img src="../../../public/img/sytia-flag.png" alt="">  
          <span>سوريا</span>
        <div>
        <span>السويداء/حي النهضة</span>
        </div>  

        </div>                        
       <div class="lovly">
           <i class="fa fa-heart" aria-hidden="true"></i>
           <span>المفضلة</span>
           </div>
            <div class="cart" @click="gotocart()">
                <i class="fa fa-shopping-cart"></i>
                <div class="cartItemCount">{{ cartItemCount }}</div>
            </div>
        
       </div>
    </div>
    <div class="bottom_navba">
        <div class="child1">
            <div class="all-act" @click="toggle_vs()">
                <i class="fa fa-bars" aria-hidden="true"></i>
            <span>جميع الأنشطة</span>
            </div>
                <div class="Departments_small" id="Dep">
            <div>
                     <div class="link-Dep hov">
                    <router-link to="/" class="links">
                     <div class="menu-icon">
                        <img src="../../../public/img/sections.png" />
                    </div>
                    <div class="linkText">Home</div>
                   
                    </router-link>
                </div>
                <hr>
                 <div class="link-Dep  hov">
                    <router-link to="/products" class="links">
                     <div class="menu-icon"> <img src="../../../public/img/sections.png" alt=""> </div>
                    <div class="linkText">Products</div>
                   
                    </router-link>
                </div>
                <hr>
                 <div class="link-Dep  hov"> 
                    <router-link to="/stores" class="links">
                        <div class="menu-icon"> <img src="../../../public/img/Store_review_2_.png" alt=""> </div>
                    <div class="linkText">Stores</div>
                    
                    </router-link>
                </div>
                <hr>
                 <div class="link-Dep  hov">
                    <router-link to="/festival" class="links">
                        <div class="menu-icon"> <img src="../../../public/img/sign_shopping.png" alt=""> </div>
                    <div class="linkText">Fistival</div>
                   
                    </router-link>
                </div>
                <hr>
                 <div class="link-Dep  hov">
                    <router-link to="/resturants" class="links">
                       <div class="menu-icon">  <img src="../../../public/img/terrace.png" alt=""> </div>
                    <div class="linkText">Resturant</div>
                    
                    </router-link>
                </div>
                <hr>
                 <div class="link-Dep  hov">
                    <router-link to="/doctors" class="links">
                        <div class="menu-icon"> <img src="../../../public/img/stethoscope.png" alt=""> </div>
                    <div class="linkText">Doctot</div>
                    
                    </router-link>
                </div>
            </div>
            </div>
        </div>
        <div class="child2">
    <div class="links">
            <router-link to="/" class="links"  >
                <div class="linkText">
                    <select>
                    <option selected disabled>جميع الأنشطة</option>
                    </select>
                    </div>
            </router-link>
        </div>
         <div class="links">
            <router-link to="/products" class="links" >
                <div class="linkText">{{ $t('Products') }}</div>
            </router-link>
        </div>
        <div class="links">
            <router-link to="/stores" class="links" >
                <div class="linkText">{{ $t('Stores') }}</div>
            </router-link>
        </div>
         <div class="links fest">
            <router-link to="/festival" class="links"  >
                <div class="linkText">{{ $t('FestivalPerformances') }}</div>
            </router-link>
        </div>
        <div class="links">	
    
            <router-link to="/" class="links" >
                <div class="linkText" >مطاعم ومقاهي</div>
            </router-link>
        </div>
        <div class="links">
            <router-link to="/" class="links" >
                <div class="linkText" >أطباء</div>
            </router-link>       
        </div>
           <div class="links">
            <router-link to="/" class="links" >
                <div class="linkText" >صيدليات وأدوية</div>
            </router-link>
               
        </div>
        <div class="links">
            <router-link to="/activities" class="links" >
                <div class="linkText" >موارد بشرية</div>
            </router-link>
        </div>  
        <div class="links">
            <router-link to="/activities" class="links" >
                <div class="linkText" >قاموس الأعمال</div>
            </router-link>
        </div> 
        <div class="links fers">
            <router-link to="/activities" class="links" >
                <div class="linkText" >فرص العمل</div>
            </router-link>
        </div>          
        <div class="links">
            <router-link to="/activities" class="links" >
                <div class="linkText" >فعاليات</div>
            </router-link>
        </div> 
        </div>
        
        <div class="child3">
            <div class="add-activity" @click="addActivity">
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                <button>
                    أضف نشاطك
                </button>
            </div>
        </div>
       
          
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import { defineAsyncComponent } from 'vue';
export default {
    name: 'navbarHeader',
    data() {
        const token = localStorage.getItem('token');
        const server = localStorage.getItem('server') || 'admin';
        return {
            show: false,
            show2: false,
            server: server,
            token: token,
            errors: false,
            SurePassword:"",
            formSign: {
                "email": "",
                "password": ""
            },
             formRegister:{
                "first_name": "",
                "last_name": "",
                "username": "",
                "is_active": 1,
                "email": "",
                "password": ""
},
            reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
            statusEmail: null,
            statusPass: null,
            details: {
                id: this.id,
                title: this.title,
                description: this.description,
                price: this.price,
            },
            
            
        };
    }, 
 
    computed: {
        cartItemCount() {
            return this.$store.state.cartItemCount;
        },
        ...mapGetters({
            authenticated: 'authenticated',
            user: 'user',
        }),
    },
    methods: {
        
    invalidateSign() {
    if( !this.$refs.sig.checkValidity() ){
       this.errors = true;
     }
     else{
       this.errors = false;
     }
    },
    invalidateReg() {
    if( !this.$refs.reg.checkValidity() ){
       this.errors = true;
     }
     else if(this.SurePassword != this.formRegister.password){
        this.errors = false;
     }
     else{
         
       this.errors = false;
     }
    },
    invalidatepass() {
    if( !this.$refs.pass.checkValidity() ){
       this.errors = true;
     }
     else{
       this.errors = false;
     }
    },
        addActivity(){
            if(this.authenticated){
                 this.$router.push(`/activities`);
            }
        },
         toggle_vs(){
          document.getElementById('Dep').classList.toggle("Dep_vs");
           document.getElementById('cover_dep').classList.add("vs2");
      },
      close_dep(){
           document.getElementById('Dep').classList.remove("Dep_vs");
           document.getElementById('cover_dep').classList.remove("vs2");
      },
           goto: function () {
            this.$router.push(`/`);
        },
      
         showPass() {
            var x = document.getElementById('myInput');
            if (x.type === 'password') {
                x.type = 'text';
                this.show = true;
            } else {
                x.type = 'password';
                this.show = false;
            }
        },
        showPass2() {
            var x = document.getElementById('myInput2');
            var y = document.getElementById('myInput3');
            if (x.type === 'password' || y.type === 'password') {
                x.type = 'text';
                y.type = 'text';
                this.show2 = true;
            } else {
                x.type = 'password';
                y.type = 'password';
                this.show2 = false;
            }
        },
        openForm() {
        document.getElementById('backcover').style.display = 'block';
        document.getElementById('myForm').style.display = "block";
            
        },
        loginrForm(){
        document.getElementById('myForm').style.display = "block";
        document.getElementById('myForm2').style.display = "none";
        document.getElementById('myForm3').style.display = "none";
        document.getElementById('myForm4').style.display = "none";
        },
        registerForm() {
         document.getElementById('myForm').style.display = "none";
         document.getElementById('myForm2').style.display = "block";
         document.getElementById('myForm3').style.display = "none";
         document.getElementById('myForm4').style.display = "none";
        },
        forgetForm() {
         document.getElementById('myForm').style.display = "none";
         document.getElementById('myForm2').style.display = "none";
         document.getElementById('myForm3').style.display = "block";
         document.getElementById('myForm4').style.display = "none";
        },
        successForm() {
         document.getElementById('myForm').style.display = "none";
         document.getElementById('myForm2').style.display = "none";
         document.getElementById('myForm3').style.display = "none";
         document.getElementById('myForm4').style.display = "block";
        },
        closeForm() {
            document.getElementById('backcover').style.display = 'none';
            document.getElementById('myForm').style.display = "none";
            document.getElementById('myForm2').style.display = "none";
            document.getElementById('myForm3').style.display = "none";
            document.getElementById('myForm4').style.display = "none";
        },
        ...mapActions({
            signIn: 'signIn',
            register: 'register',
        }),
      submit() {
          var self = this;
          self.invalidateSign();
          if(self.errors == true){
             self.$notify({
            // (optional)
            // Name of the notification holder
            group: 'foo',
            // (optional)
            // Title (will be wrapped in div.notification-title)
            title: 'Sorry!!',
            // Content (will be wrapped in div.notification-content)
            text: "invalid input",
            // (optional)
            // Class that will be assigned to the notification
            type: 'error', // error , warn , success , info
            // (optional, override)
            // Time (in ms) to keep the notification on screen
            duration: 3000,
            // (optional, override)
            // Time (in ms) to show / hide notifications
            speed: 1000
        });
          }
          else{
                self.signIn(self.formSign);
                document
                    .getElementById('content_loader')
                    .classList.remove('hidden');
                setTimeout(function () {
                  document
                    .getElementById('content_loader')
                    .classList.add('hidden');
                }, 2500);
                setTimeout(function () {
                  if(localStorage.getItem('token') != null){
            self.$notify({
            // (optional)
            // Name of the notification holder
            group: 'foo',
            // (optional)
            // Title (will be wrapped in div.notification-title)
            title: 'Success',
            // Content (will be wrapped in div.notification-content)
            text: "Thank you for Sign in",
            // (optional)
            // Class that will be assigned to the notification
            type: 'success', // error , warn , success , info
            // (optional, override)
            // Time (in ms) to keep the notification on screen
            duration: 3000,
            // (optional, override)
            // Time (in ms) to show / hide notifications
            speed: 1000
        });
         document.getElementById('backcover').style.display = 'none';
         document.getElementById('myForm').style.display = "none";

                  }
        else{
            self.$notify({
            // (optional)
            // Name of the notification holder
            group: 'foo',
            // (optional)
            // Title (will be wrapped in div.notification-title)
            title: 'Sorry!!',
            // Content (will be wrapped in div.notification-content)
            text: "something is wrong please try sign again",
            // (optional)
            // Class that will be assigned to the notification
            type: 'error', // error , warn , success , info
            // (optional, override)
            // Time (in ms) to keep the notification on screen
            duration: 3000,
            // (optional, override)
            // Time (in ms) to show / hide notifications
            speed: 1000
        });
                  }
                }, 3000);
            //    setTimeout(function () {
            //         window.location.reload();
            //     }, 4500);
          }
              
            
        },
          submit1() {
              var self = this;
              self.invalidateReg();
              if(self.errors == false){
                self.$notify({
                // (optional)
                // Name of the notification holder
                group: 'foo',
                // (optional)
                // Title (will be wrapped in div.notification-title)
                title: 'Sorry!!',
                // Content (will be wrapped in div.notification-content)
                text: "invalid input",
                // (optional)
                // Class that will be assigned to the notification
                type: 'error', // error , warn , success , info
                // (optional, override)
                // Time (in ms) to keep the notification on screen
                duration: 3000,
                // (optional, override)
                // Time (in ms) to show / hide notifications
                speed: 1000
            });
              }
              else{
                self.register(self.formRegister);
                document.getElementById('content_loader').classList.remove('hidden');

                setTimeout(function () {
                    document
                        .getElementById('content_loader')
                        .classList.add('hidden');
                }, 2500);

            setTimeout(function () {
                if(localStorage.getItem('token') != null){
                    self.$notify({
                    // (optional)
                    // Name of the notification holder
                    group: 'foo',
                    // (optional)
                    // Title (will be wrapped in div.notification-title)
                    title: 'Success',
                    // Content (will be wrapped in div.notification-content)
                    text: "Thank you for register",
                    // (optional)
                    // Class that will be assigned to the notification
                    type: 'success', // error , warn , success , info
                    // (optional, override)
                    // Time (in ms) to keep the notification on screen
                    duration: 3000,
                    // (optional, override)
                    // Time (in ms) to show / hide notifications
                    speed: 1000
                });
                document.getElementById('backcover').style.display = 'none';
                document.getElementById('myForm2').style.display = "none";

                  }
        else{
            self.$notify({
            // (optional)
            // Name of the notification holder
            group: 'foo',
            // (optional)
            // Title (will be wrapped in div.notification-title)
            title: 'Sorry!!',
            // Content (will be wrapped in div.notification-content)
            text: "something is wrong please try register again",
            // (optional)
            // Class that will be assigned to the notification
            type: 'error', // error , warn , success , info
            // (optional, override)
            // Time (in ms) to keep the notification on screen
            duration: 3000,
            // (optional, override)
            // Time (in ms) to show / hide notifications
            speed: 1000
        });
                  }
                }, 3000);
                // setTimeout(function () {
                //     window.location.reload();
                // }, 4500);
              }
                
            
        },
        gotocart() {
            this.$router.push(`/Cart`);
        },
      
        showfut() {
            document.getElementById('fut').classList.toggle('show');
        },
        handleserver(event) {
            localStorage.setItem('server', event.target.value);
            window.location.reload();
        },
        ...mapActions({
            signOutActions: 'signOut',
        }),
        // auth logout
        signOut() {
            this.signOutActions().then(() => {
                document
                    .getElementById('content_loader')
                    .classList.remove('hidden');

                setTimeout(function () {
                    if (localStorage.getItem('token') == null) {
                        document
                            .getElementById('content_loader')
                            .classList.add('hidden');
                    }
                }, 1000);
                this.$router.replace({
                    name: 'home',
                });
            });
        },
        ...mapActions({
            signIn: 'signIn',
            register: 'register',
        }),
    },
};
</script>
<style lang="scss" scoped>
 form.errors {
  :invalid {
    border-color: #ed1c24 !important;
  }
 }
</style>
<style scoped>
.active_sec{
    text-decoration-line: underline;
    color: var(--rhead);
}
.soon{
    display: flex;
    color: #fff;
    padding: 5px 0 10px 15px;
    opacity: 0.2;
}
.backcover2{
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 85;
    top:  0;
    display: none;
    
}

.vs2 {
    display: block;
}
.fa-refresh::before{
    content: '\f021';   
}
.backcover{
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top:  0;
    display: none;
    
}
.contain_navba{
    display: grid;
    align-content: space-around;
    background-color: #1c2c34;
}
.navba {
    display: flex;
    padding: 10px 0px;
}
.navba .child1{
    display: flex;
}
.navba .child1 img{
    padding:0 15px;
    display: flex;
    width: 123px;
    height: 35px;
    cursor: pointer;
}
.navba .child1 .sign{
    color: #fff;
    cursor: pointer;
    display: grid;
    align-content: center;
}
.navba .child2{
    width: 50%;
    margin: 0 10px;
}
.navba .child3 .contact{
   color: #fff; 
}
.navba .child1 .sign:hover{
    color: var(--rhead);
}

.navba .child3{
    width: 20%;
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    flex: 1;
}
.navba .child3 .address {
    text-align: start;
    display: flex;
    flex-wrap: wrap;
    width: 110px;
}
.navba .child3 .address img{
    margin-inline-end: 5px;
}
.navba .child3 .address div{
    display: flex;
}
.navba .child3 .address span{
    font-size: 12px;
}
.navba .child3 .lovly{
    display: flex;
    align-items: center;
}
.navba .child3 .lovly span{
    font-size: 12px;
    margin: 0 5px;
}
.navba .child3 .cart{
   text-align: center;
    border-radius: 50%;
    width: 38px;
    line-height: 38px;
    height: 38px;
    position: relative;
    font-size: 16px;
    background-color: var(--rhead);
   margin: auto 0;
    }
.navba .child3 .cart:hover{
  color: #fff;
    }
.navba .child3 .cartItemCount{
    position: absolute;
    top: -8px;
    right: -12px;
    color: #000;
    background-color: #fff;
    padding: 0px 6px;
    border-radius: 50%;
    font-size: 15px;
    height: 20px;
    display: grid;
    align-content: space-evenly;
}
.navba .child3 div{
    color: #fff;
    cursor: pointer;
}
.navba .child3 div:hover{
  color: var(--rhead);
}
.bottom_navba{
    display: flex;
    justify-content: space-between;
}
.bottom_navba .child1{
    display: none;

}
.bottom_navba .child2{
    display: flex;
    justify-content: space-around;
    width: 82%;
    align-items: center;
}
.bottom_navba .child1 {
   background-color: var(--rhead);
   color: #fff;
}
/* Medium devices (tablets, 768px and up) */
@media (max-width: 991.98px) {
   .bottom_navba .child1{
    display: flex;
    align-items: center;
   
}
.bottom_navba .child1 .all-act{
     width: 120px;
    justify-content: space-around;
    cursor: pointer;
}
.bottom_navba .child1 .Departments_small{
    position: fixed;
    background-color: #1c2c34;
    z-index: 99;
    top: 0;
    width: 250px;
    height: 100%;
    padding-top: 20px;
    right: -250px;
    transition: .5s;
}
.Dep_vs{
 right: 0 !important;
}
.bottom_navba .child1 .link-Dep .links{
    display: flex;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    transition: .3s;
}
.bottom_navba .child1 .link-Dep .links:hover{
    color: var(--rhead);
}
.bottom_navba .child1 .link-Dep .links img{
    width: 20px;
    margin: 0 5px;
}
.bottom_navba .child2,.navba .child2,.navba .child3 .lovly,.navba .child3 .address{
   display: none;
} 
.navba .child3{
    justify-content: flex-end;
}
.navba .child3 .cart{
    margin-inline-end: 10px;
}
}
/* .bottom_navba .child2 .links{
    margin: 0 5px;
} */
.bottom_navba .child2 .links a{
   text-decoration: none;
}
.bottom_navba .child2 .linkText{
    color: #fff;
}
.bottom_navba .child2 .fest{
   background-color: #FAFF00;
   padding: 0 2px;
   border-radius: 3px;
}
.bottom_navba .child2 .fest .linkText{
    color: var(--rhead);
}
.bottom_navba .child2 .fers{
   background-color: #247BA0;
   padding: 0 2px;
   border-radius: 3px;
}
.bottom_navba .child2 .linkText select {
    border: none;
    background-color: transparent;
    color: #fff;
}
.bottom_navba .child2 .linkText{
 transition: .3s;
}
.bottom_navba .child2 .linkText:hover{
    color: var(--rhead);
}
.bottom_navba .child3  {
    display: grid;
}
.bottom_navba .child3 .add-activity {
    display: flex;
    color: #fff;
    background-color:var(--rhead);
    width: 190px;
    height: 45px;
    justify-content: center;
    align-items: center;
}
.bottom_navba .child3 .add-activity i{
    font-size: 25px;
    margin: 0 5px;
    color: #fff;
}
.bottom_navba .child3 .add-activity button{
    background-color: transparent;
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
}
#sw_woo_search_1 .cat-wrapper {
    background-color: #f5f5f5;
    position: absolute;
    height: 40px;
    top: 0;
    right: auto;
    border-radius:0  4px 4px 0;
    overflow: hidden;
    color: #666;
    border-right: 1px solid #ebebeb;
}
#sw_woo_search_1 .content-search{
    width: 100%;
    display: flex;
}
#sw_woo_search_1 .content-search button{
    border: none;
    color: #fff;
    background-color: var(--rhead);
    padding: 0px 25px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}
#sw_woo_search_1 .content-search button i{
  font-size: 20px;
}
#sw_woo_search_1 .content-search button:hover{
    background-color: #c12711;
}
#sw_woo_search_1 .cat-wrapper::before {
    content: '\f107';
    font-family: 'Font Awesome 5 Free';
    vertical-align: middle;
    font-weight: 900;
    color: #666;
    font-size: 22px;
    position: absolute;
    top: 5px;
    pointer-events: none;
    margin-inline-start: 100px;
}
#sw_woo_search_1.cat-wrapper .label-search {
    display: block;
    font-size: 12px;
    margin-bottom: 0;
    color: #666;
}
#sw_woo_search_1 .cat-wrapper select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    border-radius: 0 !important;
    padding: 0 10px 0;
    height: 40px;
    width: 135px;
    color: #353333;
    background: #b0b1b3;
    cursor: pointer;
    opacity: .7;
}


#sw_woo_search_1 .autosearch-input {
    width: 100%;
    height: 40px;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -o-border-radius: 0;
    -ms-border-radius: 0;
    border-radius: 0;
    border: none;
    line-height: 40px;
    margin-bottom: 0;
    padding-inline-start: 150px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
#sw_woo_search_1 .autosearch-input:focus {
    outline: none;
}
/* Small devices (landscape phones, 576px and up) */
@media (max-width: 767.98px) {
#sw_woo_search_1 .cat-wrapper select {
    display: none;
}
#sw_woo_search_1 .autosearch-input {
 padding-inline-start: 10px;
}
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {

#sw_woo_search_1 .cat-wrapper select {
    width: 100px;
    padding: 0;
}

}
.content_loader {
    position: absolute;
    width: 100%;
    height: 1000%;
    background-color: #645d5d;
    z-index: 1000;
    opacity: 0.5;
}
.hidden {
    display: none;
}
.loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid var(--bl);
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    position: fixed;
    right: 600px;
    top: 270px;
}
/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 330.98px) {
.navba .child3{
    font-size: 9px;   
}
}
</style>
<style scoped>
.forms-parent{
  display: flex;
    justify-content: center;  
}
/* _________________________ sign in style ___________________________________ */

/* The popup form - hidden by default */
.form-popup {
    display: none;
    position: fixed;
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    z-index: 100;
    text-align: start;
}
.form-popup .head{
   display: flex;
    justify-content: center;
    align-items: center;
}
.form-popup .create{
    cursor: pointer;
    color:#247BA0;
    transition: .3s;
}
.create:hover{
    font-weight: bold;
    text-decoration: underline;
}
.form-popup  h3{
    font-weight: bold;
    font-size: 28px;
}
.form-popup h1 {
    font-size: 28px;
    color: var(--rhead);
    margin: 0;
    font-weight: bold;

}
.form-popup h1 span {
    font-size: 28px;
    color: var(--bl);
    font-weight: bold;

}
/* Add styles to the form container */
.form-container {
     width: 385px;
    height: 453px;
    padding: 10px;
    background-color: #FFFFFF;
    display: grid;
    align-content: space-around;
}

.form-popup label,.form-popup2 label,.form-popup3 label,.form-popup4 label{
    color: #808080;
}
/* Full-width input fields */
.form-popup  input[type='text'],
.form-popup  input[type='email'],
.form-popup  input[type='password'] {
    width: 100%;
    height: 30px;
    margin: 5px 0 12px 0;
    background: #FFFFFF;
    text-align: end;
    border-radius: 5px;
    outline: none;
    border: 1px solid #808080;
}

.form-popup2  input[type='text'],
.form-popup2  input[type='email'],
.form-popup2  input[type='password'] {
    width: 100%;
    height: 30px;
    margin: 5px 0 12px 0;
    background: #FFFFFF;
    text-align: end;
    border-radius: 5px;
    outline: none;
    border: 1px solid #808080;
}
.form-popup3  input[type='text'],
.form-popup3  input[type='email'],
.form-popup3  input[type='password'] {
    width: 100%;
    height: 30px;
    margin: 5px 0 12px 0;
    background: #FFFFFF;
    text-align: end;
    border-radius: 5px;
    outline: none;
    border: 1px solid #808080;
}
/* Set a style for the submit/login button */
.form-popup .btn,.form-popup2 .btn,.form-popup3 .btn,.form-popup4 .btn {
    background-color: var(--bl);
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid #808080;
}

/* Add a red background color to the cancel button */
.form-popup .cancel,.form-popup2 .cancel,.form-popup3 .cancel,.form-popup4 .cancel {
    position: absolute;
    left: -3px;
    top: -3px;
    color: #808080;
    padding: 5px 10px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
}

/* ______________________________ register style _________________________________ */
/* The popup form - hidden by default */
.form-popup2 {
    display: none;
    position: fixed;
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    z-index: 100;
    text-align: start;
}
.form-popup2 .name{
display: flex;
justify-content: space-between;
}
.form-popup2 .name div{
    width: 45%;
}
.form-popup2 .head{
   display: flex;
    justify-content: center;
    align-items: center;
}
.form-popup2 .create{
    cursor: pointer;
    color:#247BA0;
    transition: .3s;
}
.create:hover{
    font-weight: bold;
    text-decoration: underline;
}
.form-popup2  h3{
    font-weight: bold;
    font-size: 28px;
}
.form-popup2 h1 {
    font-size: 28px;
    color: var(--rhead);
    margin: 0;
    font-weight: bold;

}
.form-popup2 h1 span {
    font-size: 28px;
    color: var(--bl);
    font-weight: bold;

}
/* Add styles to the form container */
.form-container2 {
    width: 385px;
    height: 545px;
    padding: 10px;
    background-color: #FFFFFF;
    display: grid;
    align-content: space-around;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
.form-popup {
  width: 90%;  
}
.form-popup2 {
width: 90%;
}
.form-container {
    width: 100%;
}
.form-container2 {
    width: 100%;
}
}
/* _________________________ gorget password ___________________________________ */
/* The popup form - hidden by default */
.form-popup3 {
    display: none;
    position: fixed;
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    z-index: 100;
    text-align: start;
}
.form-popup3 .head{
   display: flex;
    justify-content: center;
    align-items: center;
}
.form-popup3 .create{
    cursor: pointer;
    color:#247BA0;
    transition: .3s;
}
.form-popup3  h3{
    font-weight: bold;
    font-size: 28px;
}
.form-popup3 h1 {
    font-size: 28px;
    color: var(--rhead);
    margin: 0;
    font-weight: bold;

}
.form-popup3 h1 span {
    font-size: 28px;
    color: var(--bl);
    font-weight: bold;

}
/* Add styles to the form container */
.form-container3 {
     width: 385px;
    height: 350px;
    padding: 10px;
    background-color: #FFFFFF;
    display: grid;
    align-content: space-around;
}
/* _________________________ success send password ___________________________________ */
/* The popup form - hidden by default */
.form-popup4 {
    display: none;
    position: fixed;
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    z-index: 100;
    text-align: start;
}
.form-popup4 .head{
   display: flex;
    justify-content: center;
    align-items: center;
}
.form-popup4 .create{
    cursor: pointer;
    color:#247BA0;
    transition: .3s;
}
.form-popup4  h3{
    font-weight: bold;
    font-size: 28px;
}
.form-popup4 h1 {
    font-size: 28px;
    color: var(--rhead);
    margin: 0;
    font-weight: bold;

}
.form-popup4 h1 span {
    font-size: 28px;
    color: var(--bl);
    font-weight: bold;

}
/* Add styles to the form container */
.form-container4 {
     width: 385px;
    height: 300px;
    padding: 10px;
    background-color: #FFFFFF;
    display: grid;
    align-content: space-around;
}
</style>



