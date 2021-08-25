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
        <div class="form-popup animate__animated animate__fadeInRight" id="myForm">
            <form action="/action_page.php" class="form-container">
                <h1>Log<span>in</span></h1>
                <span class="cancel" @click="closeForm()"
                    ><i class="fa fa-window-close"></i
                ></span>

                <label for="email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    v-model="form.email"
                    name="email"
                    required
                    ref="email"
                    @keyup="handleEmail()"
                />
                <div style="color: red" v-if="statusEmail == false">
                    <i class="fa fa-window-close"></i>
                    {{ form.error }}
                </div>
                <div style="color: green" v-if="statusEmail == true">
                    <i class="fa fa-check-square"></i>
                    correct Email
                </div>

                <label for="psw"><b>Password</b></label>

                <input
                    type="password"
                    id="myInput"
                    placeholder="Enter Password"
                    v-model="form.password"
                    name="psw"
                    ref="pass"
                    required
                    @keyup="handlePass()"
                />
                <input type="checkbox" @change="showPass()" /> <span style="color:#fff">Show Password</span> 
                <div style="color: red" v-if="statusPass == false">
                    <i class="fas fa-exclamation-triangle"></i>
                    Password must be more 7 characters
                </div>
                <div style="color: green" v-if="statusPass == true">
                    <i class="fa fa-check-square"></i>
                    Correct Password
                </div>
                <span @click="submit()" class="btn">Login</span>
                <span @click="registerForm()" class="btn">Register</span>
            </form>
        </div>
        <div class="form-popup2 animate__animated animate__fadeInRight" id="myForm2">
            <form
                action="/action_page.php"
                class="form-container2 form_register"
            >
                <h1>Regis<span>ter</span></h1>
                <span class="cancel" @click="closeForm()"
                    ><i class="fa fa-window-close"></i
                ></span>
                <span class="ret" @click="loginrForm()"
                    ><i class="fa fa-arrow-left"></i
                ></span>
                <label for="Name"><b>Name</b></label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    v-model="form.name"
                    name="Name"
                    required
                />
                <label for="email"><b>Email</b></label>
                <input
                    type="text"
                    ref="email2"
                    placeholder="Enter Email"
                    v-model="form.email"
                    name="email"
                    required
                    @keyup="handleEmail()"
                />
                <div style="color: red" v-if="statusEmail == false">
                    <i class="fa fa-window-close"></i>
                    {{ form.error }}
                </div>
                <div style="color: green" v-if="statusEmail == true">
                    <i class="fa fa-check-square"></i>
                    correct Email
                </div>

                <label for="psw"><b>Password</b></label>
                <input
                    type="password"
                    ref="pass2"
                    id="myInput2"
                    placeholder="Enter Password"
                    v-model="form.password"
                    name="psw"
                    required
                    @keyup="handlePass()"
                />
                <input type="checkbox" @change="showPass2()" /><span style="color:#fff">Show Password</span> 
                <div style="color: red" v-if="statusPass == false">
                    <i class="fas fa-exclamation-triangle"></i>
                    Password must be more 7 characters
                </div>
                <div style="color: green" v-if="statusPass == true">
                    <i class="fa fa-check-square"></i>
                    Correct Password
                </div>
                <span @click="submit1()" class="btn">Register</span>
            </form>
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
        </div>
        <div class="child2"> 
              <div class="links">
            <router-link to="/" class="links">
                <div class="linkText">{{ $t('Home') }}</div>
            </router-link>
        </div>
         <div class="links">
            <router-link to="/products" class="links">
                <div class="linkText">{{ $t('Products') }}</div>
            </router-link>
        </div>
        <div class="links">
            <router-link to="/stores" class="links">
                <div class="linkText">{{ $t('Stores') }}</div>
            </router-link>
        </div>
         <div class="links hov">
            <router-link to="/festival" class="links">
                <div class="linkText">{{ $t('FestivalPerformances') }}</div>
            </router-link>
        </div>
        <div class="links">	
    
            <router-link to="/" class="links">
                <div class="linkText">BLOG</div>
            </router-link>
        </div>
        <div class="links">
            <router-link to="/" class="links">
                <div class="linkText">CONTACT</div>
            </router-link>       
        </div>
           <div class="links">
            <router-link to="/" class="links">
                <div class="linkText">ABOUT US</div>
            </router-link>
               
        </div>
       
      
      
      
        </div>
    <div class="child3">                               
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
        <span style="margin:0 25px;color:#fff">|</span>  
        <div class="contact">
            <i class="fa fa-phone-square" aria-hidden="true" style="margin-right:5px;"></i>
            <span>(+963) 931 824 473</span>
        </div>
       </div>
    </div>
    <div class="bottom_navba">
         <div class="Departments_small" id="Dep">
            <div class="content-search">
			<input  type="text" size="50" autocomplete="off" placeholder="Search Item..." name="s">	
			</div>
            <div>
                     <div class="links hov">
                    <router-link to="/" class="links">
                     <div class="menu-icon">
                        <img src="../../../public/img/sections.png" />
                    </div>
                    <div class="linkText">Home</div>
                   
                    </router-link>
                </div>
                <hr>
                 <div class="links hov">
                    <router-link to="/products" class="links">
                     <div class="menu-icon"> <img src="../../../public/img/sections.png" alt=""> </div>
                    <div class="linkText">Products</div>
                   
                    </router-link>
                </div>
                <hr>
                 <div class="links hov"> 
                    <router-link to="/stores" class="links">
                        <div class="menu-icon"> <img src="../../../public/img/Store_review_2_.png" alt=""> </div>
                    <div class="linkText">Stores</div>
                    
                    </router-link>
                </div>
                <hr>
                 <div class="links hov">
                    <router-link to="/festival" class="links">
                        <div class="menu-icon"> <img src="../../../public/img/sign_shopping.png" alt=""> </div>
                    <div class="linkText">Fistival</div>
                   
                    </router-link>
                </div>
                <hr>
                 <div class="links hov">
                    <router-link to="/resturants" class="links">
                       <div class="menu-icon">  <img src="../../../public/img/terrace.png" alt=""> </div>
                    <div class="linkText">Resturant</div>
                    
                    </router-link>
                </div>
                <hr>
                 <div class="links hov">
                    <router-link to="/doctors" class="links">
                        <div class="menu-icon"> <img src="../../../public/img/stethoscope.png" alt=""> </div>
                    <div class="linkText">Doctot</div>
                    
                    </router-link>
                </div>
            </div>
            </div>
        <div class="child1"> <!--chain.png -->    
            <div class="Departments" @click="toggle_vs()">
                <i class="fa fa-list" aria-hidden="true"></i>
               <span class=" ALL_DEPARTMENTS"> ALL DEPARTMENTS</span>
            </div>
            <div class="contain_Departments animate__animated  animate__slideInDown">
                <div class="links hov">
                    <router-link to="/" class="links">
                     <div class="menu-icon">
                        <img src="../../../public/img/sections.png" />
                    </div>
                    <div class="linkText">Home</div>
                   
                    </router-link>
                </div>
                 <div class="links hov">
                    <router-link to="/products" class="links">
                     <div class="menu-icon"> <img src="../../../public/img/sections.png" alt=""> </div>
                    <div class="linkText">Products</div>
                   
                    </router-link>
                </div>
                 <div class="links hov"> 
                    <router-link to="/stores" class="links">
                        <div class="menu-icon"> <img src="../../../public/img/Store_review_2_.png" alt=""> </div>
                    <div class="linkText">Stores</div>
                    
                    </router-link>
                </div>
                 <div class="links hov">
                    <router-link to="/festival" class="links">
                        <div class="menu-icon"> <img src="../../../public/img/sign_shopping.png" alt=""> </div>
                    <div class="linkText">Fistival</div>
                   
                    </router-link>
                </div>
                 <div class="links hov">
                    <router-link to="/resturants" class="links">
                       <div class="menu-icon">  <img src="../../../public/img/terrace.png" alt=""> </div>
                    <div class="linkText">Resturant</div>
                    
                    </router-link>
                </div>
                 <div class="links hov">
                    <router-link to="/doctors" class="links">
                        <div class="menu-icon"> <img src="../../../public/img/stethoscope.png" alt=""> </div>
                    <div class="linkText">Doctot</div>
                    
                    </router-link>
                </div>
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
				<div class="search-append"><div class="autocomplete-suggestions" style="position: absolute; display: none; max-height: 300px; z-index: 9999;"></div></div>
			</div>
				
					</div>
		
            </form>
        </div>
        <div class="child3">
            <div><i class="fa fa-refresh" aria-hidden="true"></i></div>
            <div><i class="fa fa-heart" aria-hidden="true"></i></div>
            <div class="cart" @click="gotocart()">
                <i class="fa fa-shopping-cart"></i>
                <div class="cartItemCount">{{ cartItemCount }}</div>
            </div>
               <div>My Cart</div>
        </div>
       
          
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'navbarHeader',
    data() {
       
        const token = localStorage.getItem('token');
        const server = localStorage.getItem('server') || 'admin';
        return {
         
            server: server,
            token: token,
            form: {
                name: '',
                email: '',
                password: '',
                error: '',
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
            } else {
                x.type = 'password';
            }
        },
        showPass2() {
            var x = document.getElementById('myInput2');
            if (x.type === 'password') {
                x.type = 'text';
            } else {
                x.type = 'password';
            }
        },
        openForm() {
            document.getElementById('myForm').style.display = 'block';
            document.getElementById('myForm2').style.display = 'block';
             document.getElementById('backcover').style.display = 'block';
            
            document.getElementById('myForm2').classList.add('animate__swing');
            document.getElementById('myForm').classList.add('animate__swing');
        },
        closewarn() {
            document.getElementById('warn').style.display = 'none';
        },
        registerForm() {
            document.getElementById('myForm').style.zIndex = 105;
            document.getElementById('myForm2').style.zIndex = 106;
        },
        loginrForm() {
            document.getElementById('myForm').style.zIndex = 106;
            document.getElementById('myForm2').style.zIndex = 105;
        },
        closeForm() {
              document.getElementById('backcover').style.display = 'none';
            document
                .getElementById('myForm2')
                .classList.add('animate__fadeOut');
            document.getElementById('myForm').classList.add('animate__fadeOut');
            setTimeout(function () {
                document
                    .getElementById('myForm2')
                    .classList.remove('animate__fadeOut');
                document
                    .getElementById('myForm')
                    .classList.remove('animate__fadeOut');
                document.getElementById('myForm').style.display = 'none';
                document.getElementById('myForm2').style.display = 'none';
            }, 1000);
        },
        gotocart() {
            this.$router.push(`/Cart`);
        },
      
        showfut() {
            document.getElementById('fut').classList.toggle('show');
        },

        handleEmail() {
            if (this.form.email == null || this.form.email == '') {
                this.statusEmail = false;
                this.form.error = 'Please Enter Email';

                this.$refs.email.style.border = '1px solid red';
                this.$refs.email2.style.border = '1px solid red';
            } else if (!this.reg.test(this.form.email)) {
                this.statusEmail = false;
                this.form.error = 'Please Enter Correct Email';
                this.$refs.email.style.border = '1px solid red';
                this.$refs.email2.style.border = '1px solid red';
            } else if (this.reg.test(this.form.email)) {
                this.statusEmail = true;
                this.$refs.email.style.border = '1px solid green';
                this.$refs.email2.style.border = '1px solid green';
            }
        },
        handlePass() {
            if (this.form.password.length < 8) {
                this.statusPass = false;
                this.$refs.pass.style.border = '1px solid red';
                this.$refs.pass2.style.border = '1px solid red';
            } else {
                this.statusPass = true;
                this.$refs.pass.style.border = '1px solid green';
                this.$refs.pass2.style.border = '1px solid green';
            }
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
        submit() {
            if (this.statusEmail == true && this.statusPass == true) {
                this.signIn(this.form);

                document
                    .getElementById('content_loader')
                    .classList.remove('hidden');
                setTimeout(function () {
                    document.getElementById('alert').style.display = 'none';
                }, 5000);
            }
        },
        submit1() {
            if (this.statusEmail == true && this.statusPass == true) {
                this.register(this.form);
                document
                    .getElementById('content_loader')
                    .classList.remove('hidden');

                setTimeout(function () {
                    document
                        .getElementById('content_loader')
                        .classList.add('hidden');
                }, 3000);
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            }
        },
    },
};
</script>

<style scoped>
.Departments_small{
    background-color: #1c2c34;
    display: none;
    flex-direction: column;
    position: fixed;
    top: 0px;
    height: 100%;
    width: 360px;
    z-index: 86;
    left: -360px;
    transition: all 0.5s;
}
.Departments_small .content-search{
    padding-top: 5px;
}
.Departments_small .content-search input{
    border: 1px solid #eee;
    padding: 10px;
}
.Departments_small .content-search input:focus{
    outline: none;
}
.Departments_small hr{
    border-top: 1px solid #fff;
}
.Departments_small .links{
    color: #fff;
    padding-top: 5px;
}
.Departments_small .links a{
    display: flex;
}
.Departments_small .links .linkText{
    font-size: 18px;
}
.Departments_small .links:hover{
    color: var(--rhead);
}
.Dep_vs{
 left: 0;
}
.backcover2{
    background-color: rgba(0, 0, 0, 0);
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
    background-color: rgba(0, 0, 0, 0);
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
    height: 150px;
}
.navba {
    display: flex;
    justify-content: space-around;
}
.navba .child1{
    width: 11%;
    display: flex;
}
.navba .child2{
    width: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navba .child2 .links{
    color: #fff;
}
.navba .child2 .links .linkText{
    padding: 0;
    font-size: 14px;
}
.navba .child2 .links:hover{
    color: var(--rhead);
}
.navba .child3{
    width: 37%;
    display: flex;
    justify-content: end;
    align-items: center;
}
.navba .child3 .sign{
    color: #fff;
    cursor: pointer;
}
.navba .child3 .contact{
   color: #fff; 
}
.navba .child3 .sign:hover{
    color: var(--rhead);
}
.bottom_navba{
    display: flex;
    justify-content: space-around;
}
.bottom_navba .child1{
  width: 15%;
  position: relative;
}
.bottom_navba .child2{
  width: 58%;
}
.bottom_navba .child3{
  width: 20%;
  display: flex;
justify-content: space-around;
font-size: 20px;
}
.bottom_navba .child3 div{
    display: grid;
    align-content: center;
}
.bottom_navba .child3 .cart{
   position: relative;
    background-color: var(--rhead);
    border-radius: 50%;
    padding: 0px 10px;
    height: 40px;
    margin-top: 13px;
    }
.bottom_navba .child3 .cart:hover{
  color: #fff;
    }
.bottom_navba .child3 .cartItemCount{
    position: absolute;
    top: -10px;
    right: -18px;
    color: #000;
    background-color: #fff;
    padding: 0px 9px;
    border-radius: 50%;
    font-size: 15px;
}
.bottom_navba .child3 div{
    color: #fff;
    cursor: pointer;
}
.bottom_navba .child3 div:hover{
  color: var(--rhead);
}
.bottom_navba .child1 .Departments{
    color: #fff;
    background-color: var(--rhead);
    padding: 10px 0;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    width: 100%;
}
.bottom_navba .child1 .Departments::after{
    content: "";
    width: 5px;
    height: 32px;
    position: absolute;
    bottom: -13px;
    left: 4px;
    z-index: 99;
    background: url(../../../public/img/chain.png) no-repeat center center; 
}
.bottom_navba .child1 .Departments::before{
    content: "";
    width: 5px;
    height: 32px;
    position: absolute;
    bottom: -13px;
    right: 4px;
    z-index: 99;
     background: url(../../../public/img/chain.png) no-repeat center center; 
}

.bottom_navba .child1 .contain_Departments{
    position: absolute;
    width: 100%;
    background-color: #27363e;
    height: auto;
    z-index: 2;
    top: 127%;  
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
.bottom_navba .child1 .contain_Departments{  
    top: 118%;  
}
}

.bottom_navba .child1 .contain_Departments a{
    color: #fff;
    display: flex;
    justify-content: start;
    padding: 5px 0 10px 15px;
    transition: all .5s;
}
.bottom_navba .child1 .contain_Departments a:hover{
    color: var(--rhead);
    padding-left: 25px;
}
.menu-icon{
    padding-left: 10px;
}
.menu-icon img{
    width: 18px;
}
.linkText{
    padding-left: 20px;
}
#sw_woo_search_1 .cat-wrapper {
    background-color: #f5f5f5;
    position: absolute;
    height: 40px;
    top: 0;
    left: 0;
    right: auto;
    border-radius: 4px 0 0 4px;
    overflow: hidden;
    color: #666;
    border-right: 1px solid #ebebeb;
}
#sw_woo_search_1 .content-search{
    width: 90%;
}
#sw_woo_search_1 .cat-wrapper::before {
    content: '\f107';
    font-family: 'Font Awesome 5 Free';
    vertical-align: middle;
    font-weight: 900;
    color: #666;
    font-size: 14px;
    position: absolute;
    top: 13px;
    right: 20px;
    pointer-events: none;
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
    color: #666;
    background: #f5f5f5;
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
    padding-left: 150px;
    border-radius: 4px;
}
#sw_woo_search_1 .autosearch-input:focus {
    outline: none;
}

/* Medium devices (tablets, 768px and up) */
@media  (max-width: 991.98px) {
.Departments_small{
    display: flex;
    }
.navba .child2{
        display: none;
    }
.navba .child3{
    width: 81%;
}
.bottom_navba .child1 .Departments{
    border-radius: 5px;
    cursor: pointer;
}
.ALL_DEPARTMENTS{
    display: none;
}
.bottom_navba .child1 .Departments::after{
    display: none;
}
.bottom_navba .child1 .Departments::before{
    display: none;
}
.bottom_navba .child1 .contain_Departments{
    display: none;
}
.bottom_navba .child1{
     width:5%;
}
.bottom_navba .child2{
    width:50%;
}
.bottom_navba .child3{
  width: 35%;

}

}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
.navba .child3 .contact:hover{
   color: var(--rhead);
   cursor: pointer;
}
#sw_woo_search_1 .cat-wrapper select {
    width: 100px;
    padding: 0;
}
.bottom_navba .child1{
     width: 30%;
}
.bottom_navba .child1 .Departments{
     width: 25%;
}
.bottom_navba .child2{
    display: none;
}
.bottom_navba .child3{
  width: 60%;

}
}
/* _____________________________________________ */
.alert {
    justify-content: center;
    font-size: 18px;
    left: 35%;
    position: fixed;
    top: 41%;
    z-index: 77;
    width: 400px;
    height: 68px;
    background-color: #a7d9a7;
    color: var(--bl);
    border-radius: 7px;
}

.warnig_pass {
    color: red;
    display: none;
}
/* ____________________________________ form sign popup  _______________________________ */
/* The popup form - hidden by default */
.form-popup {
    display: none;
    position: fixed;
    top: 16%;
    right: 0;
    border: 3px solid #1c2c34;
    z-index: 106;
    font-size: 18px;
}
.form-popup h1 {
    font-size: 40px;
    color: var(--rhead);
}
.form-popup h1 span {
    font-size: 40px;
    color: var(--bl);
}
.form-popup span {
    font-size: 18px;
}
/* Add styles to the form container */
.form-container {
    width: 450px;
    padding: 10px;
    background-color: #1c2c34;
    height: 521px;
}

.form-container label{
    color: #fff;
}
/* Full-width input fields */
.form-container input[type='text'],
.form-container input[type='password'] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
}

/* When the inputs get focus, do something */
.form-container input[type='text']:focus,
.form-container input[type='password']:focus {
    background-color: #ddd;
    outline: none;
    border: 1px solid var(--bl);
}

/* Set a style for the submit/login button */
.form-container .btn {
    background-color: var(--bl);
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-bottom: 10px;
    opacity: 0.8;
}

/* Add a red background color to the cancel button */
.form-container .cancel {
    position: absolute;
    left: -2px;
    top: -2px;
    background-color: var(--rhead);
    color: #fff;
    padding: 5px 10px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
}

/* Add some hover effects to buttons */
.form-container .btn:hover {
    opacity: 1;
}
/* ____________________________________ form register popup  _______________________________ */

/* The popup form - hidden by default */
.form-popup2 {
    display: none;
    position: fixed;
    top: 16%;
    right:0;
    border: 3px solid #1c2c34;
    z-index: 105;
    font-size: 18px;
}
.form-popup2 h1 {
    font-size: 40px;
    color: var(--rhead);
}
.form-popup2 h1 span {
    font-size: 40px;
    color: var(--bl);
}
.form-popup2 span {
    font-size: 18px;
}
/* Add styles to the form container */
.form-container2 {
    width: 450px;
    padding: 10px;
    background-color: #1c2c34;
    height: 521px;
}
.form-container2 label{
    color: #fff;
}
/* Full-width input fields */
.form-container2 input[type='text'],
.form-container2 input[type='password'] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
}

/* When the inputs get focus, do something */
.form-container2 input[type='text']:focus,
.form-container2 input[type='password']:focus {
    background-color: #ddd;
    outline: none;
    border: 1px solid var(--bl);
}

/* Set a style for the submit/login button */
.form-container2 .btn {
    background-color: var(--bl);
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-bottom: 10px;
    opacity: 0.8;
}

/* Add a red background color to the cancel button */
.form-container2 .cancel {
    position: absolute;
    left: -2px;
    top: -2px;
    background-color: var(--rhead);
    color: #fff;
    padding: 5px 10px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
}
.form-container2 .ret {
    position: absolute;
    right: -2px;
    top: -2px;
    background-color: var(--bl);
    color: #fff;
    padding: 5px 10px;
    border-bottom-left-radius: 20px;
    cursor: pointer;
}

/* Add some hover effects to buttons */
.form-container2 .btn:hover {
    opacity: 1;
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
/* ____________________________________ loading  _______________________________ */

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
</style>



