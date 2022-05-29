<template>
    <div class="parent">
        <div class="container">
            <div class="step-count larg">
                <div
                    :class="[
                        countStep > 0 ? 'active' : '',
                        countStep == 0 ? 'stepNow' : '',
                    ]"
                >
                    1 <span>اختيار نشاط</span>
                </div>
                <div
                    :class="[
                        countStep > 1 ? 'active' : '',
                        countStep == 1 ? 'stepNow' : '',
                    ]"
                >
                    2 <span>معلومات المتجر</span>
                </div>
                <div
                    :class="[
                        countStep > 2 ? 'active' : '',
                        countStep == 2 ? 'stepNow' : '',
                    ]"
                >
                    3 <span>تحميل الوثائق</span>
                </div>
                <div
                    :class="[
                        countStep > 3 ? 'active' : '',
                        countStep == 3 ? 'stepNow' : '',
                    ]"
                >
                    4 <span>باقات المنتجات</span>
                </div>
                <div
                    :class="[
                        countStep > 4 ? 'active' : '',
                        countStep == 4 ? 'stepNow' : '',
                    ]"
                >
                    5 <span>الدفع</span>
                </div>
                <div
                    :class="[
                        countStep > 5 ? 'active' : '',
                        countStep == 5 ? 'stepNow' : '',
                    ]"
                >
                    6 <span>التأكيد</span>
                </div>
            </div>
            <div class="step-count small">
                <div
                    v-show="countStep == 0 || countStep == 1 || countStep == 2"
                    :class="[
                        countStep > 0 ? 'active' : '',
                        countStep == 0 ? 'stepNow' : '',
                    ]"
                >
                    1 <span>اختيار نشاط</span>
                </div>
                <div
                    v-show="countStep == 1 || countStep == 2 || countStep == 3"
                    :class="[
                        countStep > 1 ? 'active' : '',
                        countStep == 1 ? 'stepNow' : '',
                    ]"
                >
                    2 <span>معلومات المتجر</span>
                </div>
                <div
                    v-show="countStep == 2 || countStep == 3 || countStep == 4"
                    :class="[
                        countStep > 2 ? 'active' : '',
                        countStep == 2 ? 'stepNow' : '',
                    ]"
                >
                    3 <span>تحميل الوثائق</span>
                </div>
                <div
                    v-show="countStep == 3 || countStep == 4 || countStep == 5"
                    :class="[
                        countStep > 3 ? 'active' : '',
                        countStep == 3 ? 'stepNow' : '',
                    ]"
                >
                    4 <span>باقات المنتجات</span>
                </div>
                <div
                    v-show="countStep == 4 || countStep == 5"
                    :class="[
                        countStep > 4 ? 'active' : '',
                        countStep == 4 ? 'stepNow' : '',
                    ]"
                >
                    5 <span>الدفع</span>
                </div>
                <div
                    v-show="countStep == 5 || countStep == 6"
                    :class="[
                        countStep > 5 ? 'active' : '',
                        countStep == 5 ? 'stepNow' : '',
                    ]"
                >
                    6 <span>التأكيد</span>
                </div>
            </div>

            <!-- ***************** step 1 ***************** -->
            <div class="step-template1" v-if="countStep == 0">
                <div class="temp">
                    <h2>أختيارالنشاط</h2>
                    <h5>
                        قم بأختيار النشاط المناسب لك للأنتقال للمرحلة التالية:
                    </h5>
                    <div class="kind-pay" id="activity">
                        <div v-for="(item, index) in activities" :key="index"
                            @click="setid_Activity(index,item)" 
                            :class="[id_Activity == index ? 'active' : '']"
                        >
                            {{ item }}
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div class="select-activity-type" id="activity_type">
                       <div v-for="item in activityId" :key="item" 
                       :class="[ form.activity_type_id == item.id ? 'active' : '']" @click="Activity_type(item.name,item.id)">
                           <input type="radio" :value="item.id" v-model="form.activity_type_id" 
                           :checked="data_display.activity_type == item.name">
                          <Icon icon="ic:outline-store-mall-directory" />
                          <label >{{ item.name }}</label>
                       </div>
                    </div>
                    <div class="button" v-if="countStep == 0">
                        <button class="active">إلغاء</button>
                        <button
                            :class="
                                form.activity_type_id != '' ? 'actives' : ''
                            "
                            @click="countStep1()"
                        >
                            التالي &gt;
                        </button>
                    </div>
                </div>
            </div>
            <!-- ***************** step 2 ***************** -->
            <div
                class="step-template2 animate__animated animate__fadeIn"
                v-if="countStep == 1"
            >
             <div id="bacover" class="bacover" @click="closeForm()"></div>
            <div class="kind animate__animated animate__fadeIn" id="store_kind">
                <div class="header">
                    <Icon icon="ei:close" @click="closeForm()"/>
                    <h4>اختيار السمة</h4>
                </div>
            <div class="contain">
                <div class="item" v-for="item in Trait" :key="item">
                    <input
                        required
                        type="radio"
                        name="store"
                        @input="setSectionName(item.name);closeForm()"
                        :value="item.id"
                        v-model="form.section_id"
                    />
                    
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
                <div class="temp">
                    <h2>معلومات المتجر</h2>
                    <h5>قم بإدخال معلومات المتجر للأنتقال للمرحلة التالية:</h5>
                    <form>
                        <div class="enter-data">
                            <div>
                                <label class="required" for=""
                                    >اسم المتجر</label
                                >
                                <input
                                    ref="store_name"
                                    id="store_name"
                                    required
                                    type="text"
                                    placeholder="25 حرف حد أقصى"
                                    :minlength="3"
                                    :maxlength="25"
                                    @input="invalidateForm"
                                    v-model="form.store[0].name"
                                />
                                <Icon icon="bx:error" />
                            </div>
                            <div class="sec-store" >
                                <label class="required" for=""
                                    >سمة المتجر</label
                                >
                                <button id="but" @click="openForm">
                                    <span v-if="section_name == ''"
                                        >اختر سمة المتجر الخاص بك</span
                                    >
                                    <span v-else>{{ section_name }}</span>
                                </button>
                            
                            </div>
                        </div>
                        <div class="enter-data">
                            <div>
                                <label class="required" for=""
                                    >شعار المتجر</label
                                >
                                <input
                                    ref="logo"
                                    id="logo"
                                    required
                                    type="file"
                                    accept="image/png, image/jpg, image/jpeg"
                                    @input="invalidateForm"
                                    @change="handlelogo"
                                />
                                  <Icon icon="bx:error" />
                            </div>
                            <div>
                                <label class="required" for=""
                                    >نوع العملة</label
                                >
                                <select
                                    required
                                    id="currency"
                                    class="select"
                                    v-model="form.currency_id"
                                    @change="setcurrency"
                                >
                                    <option disabled selected>
                                        اختر العملة
                                    </option>
                                    <option
                                        :value="item.id"
                                        v-for="item in currencies"
                                        :key="item"
                                    >
                                        {{ item.currency }}
                                    </option>
                                </select>
                                <Icon icon="bx:error" style="left: 17px;" />
                            </div>
                        </div>
                        <div class="enter-data">
                            <div>
                                <label class="required" for=""
                                    >البريد الألكتروني</label
                                >
                                <input
                                    id="email"
                                    required
                                    type="email"
                                    placeholder="أدخل بريدك الألكتروني"
                                    @input="invalidateForm"
                                    v-model="form.social_media.email"
                                />
                                <Icon icon="bx:error" />
                            </div>
                            <div>
                                <label class="required" for="">رقم الأرضي</label>
                                <div class="numb" id="phone">
                                    <input
                                        ref="phones"
                                        required
                                        type="text"
                                        :minlength="8"
                                        :maxlength="10"
                                        @keypress="acceptNumber($event)"
                                        @input="invalidateForm"
                                        v-model="
                                            form.social_media.phone_number
                                        "
                                    /> 
                                      <Icon icon="bx:error" style="top: 5px;left: 70px;" />
                                    <select v-model="req_phone">
                                        <option :value="`+963`">+963</option>
                                        <option :value="`+961`">+961</option>
                                        <option :value="`+964`">+964</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="enter-data">
                            <div>
                                <label class="required" for=""
                                    >رقم الموبايل</label
                                >
                                <div class="numb" id="mobile">
                                    <input
                                        ref="mobiles"
                                        required
                                        type="text"
                                        :minlength="10"
                                        :maxlength="10"
                                        @keypress="acceptNumber($event)"
                                        @input="invalidateForm"
                                        v-model="form.social_media.mobile"
                                    />
                                      <Icon icon="bx:error" style="top: 5px;left: 70px;" />
                                    <select v-model="req_mobile" >                                    
                                        <option :value="`+963`">+963</option>
                                        <option :value="`+961`">+961</option>
                                        <option :value="`+964`">+964</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label class="required" for="">واتساب</label>
                                <div class="numb" id="whatsapp">
                                    <input
                                        ref="whatsapps"
                                        required
                                        type="text"
                                        :minlength="10"
                                        :maxlength="10"
                                        @keypress="acceptNumber($event)"
                                        @input="invalidateForm"
                                        v-model="
                                            form.social_media.whatsapp_number
                                        "
                                    /> 
                                      <Icon icon="bx:error" style="top: 5px;left: 70px;" />
                                    <select v-model="req_whatsapp">
                                        <option :value="`+963`">+963</option>
                                        <option :value="`+961`">+961</option>
                                        <option :value="`+964`">+964</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="button" v-if="countStep == 1">
                        <button class="active" @click="countStep -= 1">
                            &lt; رجوع
                        </button>
                        <button
                            class="actives"
                            @click="
                                invalidateForm();
                                countStep2();
                            "
                        >
                            التالي &gt;
                        </button>
                    </div>
                </div>
            </div>
            <!-- ***************** step 3 ***************** -->
            <div
                class="step-template3 animate__animated animate__fadeIn"
                v-if="countStep == 2"
            >
                <div class="temp">
                    <h2>تحميل الوثائق</h2>
                    <h5>
                        قم بتحميل الوثائق المطلوبة للأنتقال للمرحلة التالية:
                    </h5>
                    <form :class="error2 ? 'errors' : ''" ref="attach">
                        <div v-for="item in attachment" :key="item" :style="[attachment.length ==1? 'width:100%':'']">
                            <label class="required" for="">{{
                                item.name
                            }}</label>
                            <input
                                required
                                type="file"
                                accept="image/pdf, image/jpg, image/jpeg" 
                                @input="invalidateAttachForm"
                                @change="handlefile($event, item.id,item.name)"
                            />
                        </div>
                    </form>
                 
                    <div class="button" v-if="countStep == 2">
                        <button class="active" @click="countStep -= 1">
                            &lt; رجوع
                        </button>
                        <button
                            class="actives"
                            :class="error2 == false ? 'actives' : ''"
                            @click="countStep3()"
                        >
                            التالي &gt;
                        </button>
                    </div>
                </div>
            </div>
            <!-- ***************** step 4 ***************** -->
            <div
                class="step-template4 animate__animated animate__fadeIn"
                v-if="countStep == 3"
            >
                <div class="title"></div>

                <div class="temp">
                    <h2>باقة المنتجات</h2>
                    <div class="head">
                        <div class="filter">
                            <button
                                @click="toggle(3)"
                                :class="[threemonth ? 'active' : '']"
                            >
                                3 أشهر
                            </button>
                            <button
                                @click="toggle(6)"
                                :class="[sixmonth ? 'active' : '']"
                            >
                                6 أشهر
                            </button>
                            <button
                                @click="toggle(1)"
                                :class="[oneyear ? 'active' : '']"
                            >
                                سنويا
                            </button>
                        </div>
                        <h5>
                            قم بأختيار الباقة المناسبة لك للأنتقال للمرحلة
                            التالية:
                        </h5>
                    </div>

                    <div class="card-contain">
                        <div
                            class="card"
                            :class="[chosen == index ? 'active' : '']"
                            v-for="(item, index) in filteredPlans"
                            :key="index"
                            @click="setplan(item.id, index,item.name,item.num_of_month)"
                        >
                            <h1>{{ item.name }}</h1>
                            <h3>
                                <strong
                                    :style="[
                                        item.discount != '0'
                                            ? 'text-decoration-line: line-through;'
                                            : '',
                                    ]"
                                >
                                    {{ item.price }} ل.س
                                </strong>
                                <span v-if="item.discount == '0'">
                                <span v-if="oneyear">/سنويا</span>
                                <span v-if="threemonth">/كل 3 أشهر</span>
                                <span v-if="sixmonth">/كل 6 أشهر</span>
                                </span>
                                  
                            </h3>
                            <h3 v-if="item.discount != '0'">
                                <strong >
                                    {{Math.round((item.price * (100-item.discount)) / 100)  }} ل.س
                                </strong> 
                                <span v-if="oneyear">/سنويا</span>
                                <span v-if="threemonth">/كل 3 أشهر</span>
                                <span v-if="sixmonth">/كل 6 أشهر</span>
                            </h3>
                            
                            <button v-if="chosen != index">أختر الباقة</button>
                            <button v-else class="chosen">
                                تم أختيار الباقة
                                <i
                                    class="fa fa-check-circle"
                                    aria-hidden="true"
                                ></i>
                            </button>
                            <ul>
                                <li>الميزة 1</li>
                                <li>الميزة 2</li>
                                <li>الميزة 3</li>
                            </ul>
                        </div>
                    </div>
                    <div class="button" v-if="countStep == 3">
                        <button class="active" @click="countStep -= 1">
                            &lt; رجوع
                        </button>
                        <button
                            class="actives"
                            :class="form.plan_id != '' ? 'actives' : ''"
                            @click="countStep4()"
                        >
                            التالي &gt;
                        </button>
                    </div>
                </div>
            </div>
            <!-- ***************** step 5 ***************** 
            
            -->
            <div
                class="step-template5 animate__animated animate__fadeIn"
                v-if="countStep == 4"
            >
                <div class="temp">
                    <h2>الدفع</h2>
                    <h5>
                        قم بأختيار طريقة الدفع المناسبة لك وأدخل المعلومات
                        المطلوبة للأنتقال للمرحلة:
                    </h5>
                    <div class="kind-pay">
                        <div
                            @click="payment = 'card'"
                            :class="[payment == 'card' ? 'active' : '']"
                        >
                            بطاقة ائتمانية
                        </div>
                        <div
                            @click="payment = 'paypal'"
                            :class="[payment == 'paypal' ? 'active' : '']"
                        >
                            بايبال
                        </div>
                        <div
                            @click="payment = 'bank'"
                            :class="[payment == 'bank' ? 'active' : '']"
                        >
                            بنك
                        </div>
                    </div>
                    <div class="code-contain">
                           <div class="ico">
                            <label class="required" for="">معلومات البطاقة:</label> 
                            <img src="../../../public/img/Icons/Visa_logo.png" alt="">
                            <img src="../../../public/img/Icons/AmericanExpress_logo.png" alt="">
                            <img src="../../../public/img/Icons/mastercard_logo.jpg" alt="">
                           </div>
                        <input
                            required
                            type="text"
                            @keypress="acceptNumber($event)"
                            placeholder="0000 0000 0000 0000"
                        />
                        <div class="insert">
                            <input type="text" placeholder="YY/MM" />
                            <input type="text" placeholder="CVC" />
                        </div>
                        <label class="required" for=""
                            >الاسم على البطاقة:</label
                        >
                        <input type="text" placeholder="الاسم" />
                        <div class="butt">
                            <button class="actives">دفع 100.000 ل.س</button>
                        </div>
                    </div>
                    <div class="button" v-if="countStep == 4">
                        <button class="active" @click="countStep -= 1">
                            &lt; رجوع
                        </button>
                        <button class="actives" @click="countStep5()">
                            التالي &gt;
                        </button>
                    </div>
                </div>
            </div>
            <!-- ***************** step 6 ***************** -->
            <div class="confirmation" v-if="countStep == 5">
                <div class="temp">
                    <h2>التاكيد</h2>
                    <h5>
                        <strong style="color: #247ba0">مبروك!</strong> لقد قمت
                        بالوصول للمرحلة الأخيرة من إضافة النشاط قم بتأكيد
                        بياناتك:
                    </h5>
                    <div class="form-da">
                        <div>
                            <strong>النشاط:</strong>
                            <span v-if="id_Activity == 1"> {{activities["1"]}} </span>
                            <span v-else> {{data_display.activity_name}} </span>
                        </div>
                        <div>
                            <strong>رقم الموبايل:</strong>
                            <span> {{ form.social_media.mobile }} </span>
                        </div>
                        <div>
                            <strong>نوع النشاط:</strong>
                            <span> {{data_display.activity_type}} </span>
                        </div>
                        <div>
                            <strong>رقم الواتساب:</strong>
                            <span>
                                {{ form.social_media.whatsapp_number }}
                            </span>
                        </div>
                        <div>
                            <strong>اسم المتجر:</strong>
                            <span> {{ form.store[0].name }} </span>
                        </div>
                        <div>
                            <strong>السجل التجاري:</strong>
                            <span> {{attachmentsName}} </span>
                        </div>
                        <div>
                            <strong>سمة المتجر:</strong>
                            <span> {{data_display.currency}} </span>
                        </div>
                        <div>
                            <strong>ترخيص غرفة التجارة:</strong>
                            <span> </span>
                        </div>
                        <div>
                            <strong>شعار المتجر:</strong>
                            <span> {{data_display.logo}} </span>
                        </div>
                        <div>
                            <strong>الفواتير:</strong>
                            <span> </span>
                        </div>
                        <div>
                            <strong>عملة المتجر:</strong>
                            <span> {{data_display.currency}} </span>
                        </div>
                        <div>
                            <strong>الباقة:</strong>
                            <span> {{data_display.plan_name}}/{{data_display.plan_month}} شهر </span>
                        </div>
                        <div>
                            <strong>البريد الألكتروني:</strong>
                            <span> {{ form.social_media.email }} </span>
                        </div>
                        <div>
                            <strong>الدفع:</strong>
                            <span> </span>
                        </div>
                        <div>
                            <strong>رقم الأرضي:</strong>
                            <span> {{ form.social_media.phone_number }} </span>
                        </div>
                    </div>

                    <div class="button">
                        <button class="actives" style="width: 166px">
                            <Icon icon="fluent:print-20-regular" style="font-size: 24px; color: #fff" />
                            طباعة البيانات
                        </button>
                        <button class="active" @click="countStep -= 1">
                            &lt; رجوع
                        </button>
                        <button class="actives" @click="countStep6()">
                            تأكيد البيانات
                        </button>
                    </div>
                </div>
            </div>
            <!-- ***************** step 7 ***************** -->
            <div class="st-f">
                <div class="step-final" v-if="countStep == 6">
                    <h4>مبروك!</h4>
                     <img src="../../../public/img/Icons/Store_registered.svg" alt="">
                    <span>تم تسجيل المتجر بنجاح!</span>
                    <span
                        >سيتم التواصل معك من قبل أحد مندوبينا خلال 48 ساعة</span
                    >
                    <router-link to="/storeaccount/1">
                        <button>الذهاب إلى صفحة المتجر</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';
import $  from "jquery";
import { Icon } from '@iconify/vue';
export default {
    components: {
		Icon,
	},
    data() {
        return {
            reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
            threemonth: false,
            sixmonth: false,
            oneyear: true,
            req_mobile:"+963",
            req_phone:"+963",
            req_whatsapp:"+963",
            step2Status:false,
            chosen: -1,
            user: [],
            plans: [],
            store_kind: '',
            store_kinds: '',
            section_name: '',
            attachmentsName: '',
            payment: 'card',
            show: false,
            error2: null,
            countStep:0,
            id_Activity: '1',
            data_display:{
                activity_name:'',
                activity_type:'',
                currency:'',
                plan_name:'',
                plan_month:'',
                logo:''
            },
            form: {
                social_media: {
                    phone_number: '',
                    whatsapp_number: '',
                    email: '',
                    mobile: '',
                },
                store: [
                    {
                        name: '',
                        local: 'en',
                    },
                ],
                currency_id: 'اختر العملة',
                location_id: '1',
                activity_type_id: '',
                owner_id: '1',
                section_id: '',
                is_active: '1',
                is_approved: '0',
                plan_id: '',
                logo: {},
                attachments: [],
            },
        };
    },

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
        // step 1 methods

        setid_Activity(index,name) {
            this.id_Activity = index;
            this.data_display.activity_name = name;
            $('#activity div').css("border-bottom", "3px solid  #808080");
            this.$store.dispatch('loadactivityId', this.id_Activity);
            this.$store.dispatch('loadattachmentId', this.id_Activity);
            this.$store.dispatch('loadPlansId', this.id_Activity);
        },
        Activity_type(name,id) {
            $('#activity_type div').css("border", "2px solid  #808080");
            this.data_display.activity_type = name;
             this.form.activity_type_id = id;
            this.countStep += 1;
        },
        countStep1() {
            // Step One
            if (this.countStep == 0) {
                if (this.activityId.length == 0) {
                    $('#activity div').css("border-bottom", "2px solid  red");
                } else if (this.form.activity_type_id == '') {
                    $('#activity_type div').css("border", "2px solid  red");
                } else {
                    this.countStep += 1;
                }
            }
        },
        // step 2 methods
        setcurrency() {
            if (this.form.currency_id != '') {
               $('#currency ').css("border", "2px solid  #247ba0");
               $('#currency + svg').css("display", "none");
               for(var i = 0; i<this.currencies.length;i++){
                   if(this.currencies[i].id == this.form.currency_id){
                            this.data_display.currency = this.currencies[i].currency;
                            console.log(this.data_display.currency);
                   }
               }
            }
        },
       
        handlelogo(event) {
            this.form.logo = event.target.files[0];
            this.data_display.logo = event.target.files[0].name;
        },
        async fetch() {
            var self = this;
            self.$store.dispatch('loadactivityId', this.id_Activity);
            self.$store.dispatch('loadattachmentId', this.id_Activity);
            self.$store.dispatch('loadPlansId', this.id_Activity);
            let token = window.localStorage.getItem('token');
            if (token != null) {
                // user
                await axios
                    .post(`/api/get_user`, { token })
                    .then((res) => {
                        self.user = res.data;
                        console.log('user: ', res.data);
                    })
                    .catch(function (error) {
                        console.warn('Error user ', error.toJSON());
                    });
            }
        },
        setSectionName(name) {
            this.section_name = name;
             document.getElementById('but').style.border =
                        'none';
        },
         invalidateForm() {
            if (!this.$refs.store_name.checkValidity()) {
                $('#store_name ').css("border", "2px solid  red");
                $('#store_name + svg').css("display", "block");
                
            } else if (this.$refs.store_name.checkValidity()) {
                $('#store_name ').css("border", "2px solid  #247ba0");
                $('#store_name + svg').css("display", "none");
            }
            if (!this.$refs.logo.checkValidity()) {
                this.$refs.logo.style.border = '2px solid  red';
                $('#logo ').css("border", "2px solid  red");
                $('#logo + svg').css("display", "block");
                
            } else if (this.$refs.logo.checkValidity()) {
                $('#logo ').css("border", "2px solid  #247ba0");
                $('#logo + svg').css("display", "none");
            }
            if (this.form.currency_id == 'اختر العملة') {
                $('#currency ').css("border", "2px solid  red");
                $('#currency + svg').css("display", "block");
                
            } else if (this.form.currency_id != 'اختر العملة') {
                $('#currency ').css("border", "2px solid  #247ba0");
                $('#currency + svg').css("display", "none");
            }
            if (!this.reg.test(this.form.social_media.email)) {
                $('#email ').css("border", "2px solid  red");
                $('#email + svg').css("display", "block");
                
            } else if (this.reg.test(this.form.social_media.email)) {
                $('#email ').css("border", "2px solid  #247ba0");
                $('#email + svg').css("display", "none");
            }
            // if (!this.$refs.phones.checkValidity()|| this.form.social_media.phone_number == this.req_phone || 
            // this.form.social_media.phone_number.match(this.req_phone) == null) {
            //     $('#phone ').css("border", "2px solid  red");
            //     $('#phone svg').css("display", "block");
               
            // } else if (this.$refs.phones.checkValidity() && this.form.social_media.phone_number != this.req_phone &&   this.form.social_media.phone_number.match(this.req_phone) != null) {
            //     $('#phone ').css("border", "2px solid  #247ba0");
            //     $('#phone svg').css("display", "none"); 
            // }
            // if (!this.$refs.mobiles.checkValidity()|| this.form.social_media.mobile == this.req_mobile || 
            // this.form.social_media.mobile.match(this.req_mobile) == null) {
            //     $('#mobile ').css("border", "2px solid  red");
            //     $('#mobile svg').css("display", "block");
                
            // } else if (this.$refs.mobiles.checkValidity() && this.form.social_media.mobile != this.req_mobile &&   this.form.social_media.mobile.match(this.req_mobile) != null) {
            //     $('#mobile ').css("border", "2px solid  #247ba0");
            //     $('#mobile svg').css("display", "none"); 
            // }
            // if (!this.$refs.whatsapps.checkValidity()|| this.form.social_media.whatsapp_number == this.req_mobile||
            // this.form.social_media.whatsapp_number.match(this.req_whatsapp) == null) {
            //     $('#whatsapp ').css("border", "2px solid  red");
            //     $('#whatsapp svg').css("display", "block");
               
            // } else if (this.$refs.whatsapps.checkValidity() && this.form.social_media.whatsapp_number != this.req_mobile && this.form.social_media.whatsapp_number.match(this.req_whatsapp) != null ) {
            //     $('#whatsapp ').css("border", "2px solid  #247ba0");
            //     $('#whatsapp svg').css("display", "none"); 
            // } 
            if (!this.$refs.phones.checkValidity()) {
                $('#phone ').css("border", "2px solid  red");
                $('#phone svg').css("display", "block");
               
            } else if (this.$refs.phones.checkValidity() ) {
                $('#phone ').css("border", "2px solid  #247ba0");
                $('#phone svg').css("display", "none"); 
            }
            if (!this.$refs.mobiles.checkValidity()) {
                $('#mobile ').css("border", "2px solid  red");
                $('#mobile svg').css("display", "block");
                
            } else if (this.$refs.mobiles.checkValidity() ) {
                $('#mobile ').css("border", "2px solid  #247ba0");
                $('#mobile svg').css("display", "none"); 
            }
            if (!this.$refs.whatsapps.checkValidity()) {
                $('#whatsapp ').css("border", "2px solid  red");
                $('#whatsapp svg').css("display", "block");
               
            } else if (this.$refs.whatsapps.checkValidity()) {
                $('#whatsapp ').css("border", "2px solid  #247ba0");
                $('#whatsapp svg').css("display", "none"); 
            }  
           if (this.form.section_id == '') {
                    document.getElementById('but').style.border =
                        '2px solid red';
                } 
        },
        countStep2() {
            // Step Two
            if (this.countStep == 1) {
                if (
                this.$refs.store_name.checkValidity() &&
                this.$refs.logo.checkValidity() &&
                this.form.currency_id != 'اختر العملة' &&
                this.$refs.phones.checkValidity() &&
                // this.form.social_media.phone_number != this.req_phone &&   
                // this.form.social_media.phone_number.match(this.req_phone) != null && 
                this.$refs.mobiles.checkValidity() && 
                // this.form.social_media.mobile != this.req_mobile &&   
                // this.form.social_media.mobile.match(this.req_mobile) != null &&
                this.$refs.whatsapps.checkValidity() 
                // this.form.social_media.whatsapp_number != this.req_mobile &&
                // this.form.social_media.whatsapp_number.match(this.req_whatsapp) != null 
                ) {
                this.form.social_media.phone_number = this.req_phone+this.form.social_media.phone_number;
                this.form.social_media.mobile = this.req_mobile+this.form.social_media.mobile;
                this.form.social_media.whatsapp_number = this.req_phone+this.form.social_media.whatsapp_number;
                console.log(this.form.social_media.phone_number);
                console.log(this.form.social_media.mobile);
                console.log(this.form.social_media.whatsapp_number);
                 this.countStep += 1;
                }  
                else{
                    this.checkValidity()
                }
            }
        },
        // step 3 methods
        handlefile(event, id,nam) {
            this.form.attachments.push({
                path: event.target.files[0],
                attachments_type_id: id,
            });
            this.attachmentsName = nam;
            console.log(this.form.attachments);
        },
        // step 4 methods
        setplan(id, ind,planName,num_month) {
            this.form.plan_id = id;
            this.chosen = ind;
            this.data_display.plan_name = planName;
            this.data_display.plan_month = num_month;
        },
        // step 5 methods
        toggle(i) {
            if (i == 3) {
                this.threemonth = true;
                this.sixmonth = false;
                this.oneyear = false;
            } else if (i == 6) {
                this.threemonth = false;
                this.sixmonth = true;
                this.oneyear = false;
            } else if (i == 1) {
                this.threemonth = false;
                this.sixmonth = false;
                this.oneyear = true;
            }
        },   
        invalidateAttachForm() {
            if (!this.$refs.attach.checkValidity()) {
                this.error2 = true;
            } else {
                this.error2 = false;
            }
        },

        countStep3() {
            // Step three
            if (this.countStep == 2) {
              if(this.error2 == null){
                this.invalidateAttachForm()
              }
               else if (this.error2 == false) {
                    this.countStep += 1;
                } 
            }
        },
        countStep4() {
            // Step three
            if (this.countStep == 3) {
                if (this.form.plan_id != '') {
                    this.countStep += 1;
                }
            }
        },
        countStep5() {
            if (this.countStep == 4) {
                this.countStep += 1;
            }
        },
        countStep6() {
            // Step three
            if (this.countStep == 5) {
                var self = this;
                var formData = new FormData();
                formData.append(
                    'social_media[phone_number]',
                    self.form.social_media.phone_number
                );
                formData.append(
                    'social_media[whatsapp_number]',
                    self.form.social_media.whatsapp_number
                );
                formData.append(
                    'social_media[mobile]',
                    self.form.social_media.mobile
                );
                formData.append(
                    'social_media[email]',
                    self.form.social_media.email
                );
                formData.append('store[0][name]', self.form.store[0].name);
                formData.append('store[0][local]', self.form.store[0].local);
                formData.append('currency_id', self.form.currency_id);
                formData.append('activity_type_id', self.form.activity_type_id);
                formData.append('section_id', self.form.section_id);
                formData.append('location_id', self.form.location_id);
                formData.append('owner_id', self.form.owner_id);
                formData.append('plan_id', self.form.plan_id);
                formData.append('is_active', self.form.is_active);
                formData.append('is_approved', self.form.is_approved);
                formData.append('logo', self.form.logo);

                for (var i; i < self.form.attachments.length; i++) {
                    formData.append(
                        `attachments[${i}][path]`,
                        self.form.attachments[0].path
                    );
                    formData.append(
                        `attachments[${i}][attachments_type_id]`,
                        self.form.attachments[0].attachments_type_id
                    );
                }      
                axios
                    .post(`api/stores/create`, formData, {
                        contentType: false,
                        processData: false,
                    })
                    .then((res) => {
                        console.log('stores_register : ', res.data);
                        $('#spiner ').css("display", "flex");
                        if (res.data.status == true) {
                            $('#spiner ').css("display", "none");
                            this.countStep += 1;
                        }
                    })
                    .catch(function (error) {
                        $('#spiner ').css("display", "none");
                        alert(error.toJSON());
                        console.warn('Error stores_register ', error.toJSON());
                    });
            }
        },
        openForm(e) {
            e.preventDefault();
            document.getElementById('store_kind').style.display = 'flex ';
            document.getElementById('bacover').style.display = 'block ';
        },
        closeForm() {
            document.getElementById('store_kind').style.display = 'none ';
            document.getElementById('bacover').style.display = 'none ';
            if (this.form.section_id != '') {
                document.getElementById('but').style.border = '1px solid #ccc';
            }
        },
    },
    computed: {
        ...mapState([
            'activities',
            'activityId',
            'Trait',
            'currencies',
            'attachment',
            'plansId',
            'payments',
        ]), //,'plans'
        // ______________ plans filter ________________
        filteredPlans() {
            if (this.oneyear == true) {
                return this.plansId.filter((el) => {
                    return el.num_of_month == '12';
                });
            } else if (this.sixmonth == true) {
                return this.plansId.filter((el) => {
                    return el.num_of_month == '6';
                });
            } else if (this.threemonth == true) {
                return this.plansId.filter((el) => {
                    return el.num_of_month == '3';
                });
            } else {
                return this.plansId;
            }
        },
    },
    mounted() {
        this.$store.dispatch('loadactivities');
        // this.$store.dispatch('loadPlans');
        this.$store.dispatch('loadTraitStore');
        this.$store.dispatch('loadcurrencies');
        this.$store.dispatch('loapayments');
        this.fetch();
    },
};
</script>
<style lang="scss" scoped>
$ButtonColor: #247ba0;
$HoverColor: #1D7094;
label.required::after {
    content: '*';
    color: red;
}
.icofont-eye-blocked,
.icofont-eye-alt {
    cursor: pointer;
}
.parent {
    background-color: #e8e8e8;
}
.container {
    direction: rtl;
    .step-count :nth-child(1){
        margin-inline-start: 60px;
        @media (max-width: 767.98px) {
                margin: 0;
            }
    }
    .step-count {
        display: flex;
        justify-content: center;
        padding: 15px 10px 45px 0;
        @media (max-width: 767.98px) {
            justify-content: space-around;
        }
        div {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0px 0 0 70px;
            border: 2px dashed #777;
            border-radius: 50%;
            font-size: 30px;
            position: relative;
            color: #777;
            font-weight: bold;
            transition: 0.5s;
            @media (max-width: 767.98px) {
                margin: 0;
            }
            
            &.stepNow {
                border: 2px solid $ButtonColor;
                color: $ButtonColor;
                span {
                    color: #000;
                    font-weight: bold;
                }
            }
            &:not(:last-child)::after {
                content: '';
                position: absolute;
                width: 70px;
                height: 2px;
                background-color: #808080;
                top: 22px;
                left: -37px;
                transform: translateX(-50%);
                border-top: 2px dashed #e8e8e8;
                @media (max-width: 767.98px) {
                    width: 0;
                }
            }
            span {
                position: absolute;
                color: #808080;
                font-size: 14px;
                font-weight: 200;
                width: 115px;
                bottom: -25px;
                left: 50%;
                transform: translateX(-50%);
            }
            &.active {
                background-color: $ButtonColor;
                border: 2px solid $ButtonColor;
                color: #fff;
                &:not(:last-child)::after {
                    border-top: 2px solid $ButtonColor;
                }
                span {
                    color: $ButtonColor;
                    font-weight: bold;
                }
            }
            /* Medium devices (tablets, 768px and up) */
            @media (min-width: 768px) and (max-width: 991.98px) {
            margin: 0px 0 0 50px;
            &:not(:last-child)::after {
                width: 50px;
                left: -27px;
            }
            }
        }
    }
    .step-template1 {
        display: flex;
        justify-content: center;
        padding-bottom: 50px;
        .temp {
            display: flex;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            background-color: #ffffff;
            width: 816px;
            height: auto;
            min-height: 516px;
            h2 {
                font-size: 24px;
                line-height: 36px;
                color: #000000;
                margin-bottom: 10px;
            }
            h5 {
                font-weight: 500;
                font-size: 16px;
                color: #000000;
                line-height: 24px;
                margin-bottom: 30px;
            }
            .button{
                margin-top: auto;
            }
            .kind-pay {
                display: flex;
                div {
                    width: calc(100% / 3);
                    border-bottom: 3px solid #8080807d;
                    color: #808080;
                    padding-bottom: 7px;
                    cursor: pointer;
                    transition: 0.3s;
                    &:hover {
                        color: #000;
                    }
                    &.active {
                        color: $ButtonColor;
                        font-weight: bold;
                        border-bottom: 3px solid $ButtonColor !important;
                        &:hover {
                            color: $ButtonColor;
                        }
                    }
                }
            }
            .select-activity-type{
                display: flex;
                justify-content: center;
                div{
                    width: 100px;
                    height: 100px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border: 2px solid #808080;
                    border-radius: 5px;
                    margin: 10px;
                    margin-top: 20px;
                    cursor: pointer;
                    transition: .3s;
                    input{
                        margin-inline-end: auto;
                        margin-inline-start: 10px;
                        width: 16px;
                        height: 16px;
                    }
                    svg{
                        font-size: 40px;
                        color: #808080;
                    }
                    label{
                       color: #808080; 
                    }
                    &.active{
                        border: 2px solid $ButtonColor !important;
                    svg{
                        color: $ButtonColor;
                    }
                    label{
                       color: $ButtonColor; 
                    }
                    }
                    &:hover{
                         border: 2px solid #000;
                    }
                   
                }
            }
        }
    }
    .step-template2 {
        display: flex;
        justify-content: center;
        padding-bottom: 50px;
        position: relative;
        z-index: 101;
        .kind {
        position: absolute;
        z-index: 102;
        padding: 20px;
        background-color: #fff;
        width: 68%;
        height: 516px;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
        border-radius: 10px;
        display: none;
        .header{
            svg{
                font-size: 40px;
                position: absolute;
                right: 15px;
                top: 15px;
                color: #808080;
                cursor: pointer;
            }
            h4{
                margin-bottom: 30px;
            }
        }
        .contain {
        flex: 1;
        display: flex;
        width: 100%;
        height: auto;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow-y: scroll;
        padding: 20px;
        background: #E8E8E8;
        border: 1px solid #808080;
        scrollbar-width: none;
        .item {
            background-color: #fff;
            width: 30%;
            height: 54px;
            margin-bottom: 20px;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 1px 3px 10px #ccc;
            display: flex;
            align-items: center;
            /* Small devices (landscape phones, 576px and up) */
            @media  (max-width: 767.98px) {
                width: 95%;
            }
            /* Medium devices (tablets, 768px and up) */
            @media (min-width: 768px) and (max-width: 991.98px) {
                width: 45%;
            }
            input {
                width: 30px;
                cursor: pointer;
            }
            span {
                font-size: 16px;
                font-weight: bold;
                margin-top: -6px;
            }
        }
    }
}
        .temp {
            padding: 20px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            background-color: #ffffff;
            width: 750px;
            height: auto;
            min-height: 526px;
            h2 {
                font-size: 24px;
                line-height: 36px;
                color: #000000;
                margin-bottom: 10px;
            }
            h5 {
                font-weight: 500;
                font-size: 16px;
                color: #000000;
                line-height: 24px;
                margin-bottom: 20px;
            }
            form {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .enter-data {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 5px;
                    flex-wrap: wrap;
                    div {
                        width: calc(50% - 10px);
                        text-align: start;
                        display: flex;
                        flex-direction: column;
                        position: relative;
                        /* Small devices (landscape phones, 576px and up) */
                        @media  (max-width: 767.98px) {
                            width: 100%;
                        }
                        svg{
                            position: absolute;
                            top: 40px;
                            left: 12px;
                            font-size: 23px;
                            color: red;
                            display: none;
                        }
                    }
                    input {
                        width: 100%;
                        background: #ffffff;
                        border-radius: 5px;
                        border: 2px solid #aaa7a7;
                        height: 44px;
                        outline: none;
                        padding: 5px 10px;
                        // &:invalid + svg{
                        //     display: block;
                        // }
                        // &:valid {
                        //     border: 2px solid $ButtonColor;
                        // }
                        // &:valid + svg{
                        //     display: none;
                        // }
                    }
                    input[type='number'] {
                        appearance: textfield;
                    }
                    label {
                        text-align: start;
                        font-weight: 592;
                        font-size: 16px;
                        line-height: 24px;
                        color: #7d7d7d;
                    }
                    select {
                        width: 100%;
                        background: #ffffff;
                        border-radius: 5px;
                        border: 2px solid #aaa7a7;
                        height: 44px;
                    }
                    .sec-store{
                        button{
                            height: 44px;
                            background-color: $ButtonColor;
                            border-radius: 5px;
                            color: #fff;
                            padding: 10px 20px;
                            border: none;
                            transition: .3s; 
                        &:hover{
                            background-color: $HoverColor;
                        }   
                        }
                    }
                    .numb {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        background: #ffffff;
                        border-radius: 5px;
                        border: 2px solid #aaa7a7;
                        height: 44px;
                        justify-content: space-between;
                        input {
                            border: none;
                            background: #ffffff;
                            height: 100%;
                           
                        }
                        select {
                            width: 25%;
                            border: none;
                            background: #ffffff;
                            height: 100%;
                            text-align: center;
                            /* Extra small devices (portrait phones, less than 576px) */
                            @media (max-width: 575.98px) {
                                width: 30%;
                            }
                        }
                    }
                }
            }
        }
    }
    .step-template3 {
        display: flex;
        justify-content: center;
        padding-bottom: 50px;
        .temp {
            padding: 20px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            background-color: #ffffff;
            width: auto;
            max-width: 750px;
            height: auto;
            min-height: 526px;
            display: flex;
            flex-direction: column;
            .button{
            margin-top: auto;
            }
            h2 {
                font-size: 24px;
                line-height: 36px;
                color: #000000;
                margin-bottom: 10px;
            }
            h5 {
                font-weight: 500;
                font-size: 16px;
                color: #000000;
                line-height: 24px;
                margin-bottom: 20px;
            }
            form {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                div {
                    width: calc(50% - 10px);
                    text-align: start;
                    display: flex;
                    flex-direction: column;
                    /* Small devices (landscape phones, 576px and up) */
                        @media  (max-width: 767.98px) {
                            width: 100%;
                        }
                }
                input {
                    width: 100%;
                    background: #ffffff;
                    border-radius: 5px;
                    border: 2px solid #aaa7a7;
                    height: 40px;
                    outline: none;
                    padding: 5px 10px;
                    &:valid {
                        border: 2px solid $ButtonColor;
                    }
                }
                label {
                    text-align: start;
                    font-weight: 592;
                    font-size: 16px;
                    line-height: 24px;
                    color: #7d7d7d;
                }
                &.errors {
                input:invalid {
                    border-color: red;
                }
                input:valid {
                    border: 2px solid $ButtonColor;
                }
                }
            }
        }
    }
    .step-template4 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 50px;
        .head {
            display: flex;
            align-items: center;
            margin-bottom: 40px;
            /* Medium devices (tablets, 768px and up) */
            @media (max-width: 992px) {
                flex-direction: column-reverse;
            }
            .filter {
                height: 47px;
                background-color: #e8e8e8;
                border-radius: 50px;
                padding: 5px;
                button {
                    border: none;
                    padding: 10px;
                    margin: 0 1px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: 0.2s;
                    color: #808080;
                    border-radius: 50px;
                    margin: 0 5px;
                    &:hover {
                        background-color: #fff;
                        color: #000;
                    }
                    &.active {
                        background-color: $ButtonColor;
                        color: #fff;
                    }
                }
            }
        }
        .temp {
            padding: 20px;
            width: 100%;
            height: auto;
            min-height: 473px;
            background: #ffffff;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            h2 {
                font-size: 24px;
                line-height: 36px;
                color: #000000;
                margin-bottom: 20px;
            }
            h5 {
                font-weight: 500;
                font-size: 16px;
                color: #000000;
                line-height: 24px;
                margin-inline-start: 120px;
                /* Large devices (desktops, 992px and up) */
                @media (min-width: 992px) and (max-width: 1199.98px) {
                    margin-inline-start: 35px;
                }
                /* Medium devices (tablets, 768px and up) */
                @media (max-width: 992px) {
                    margin-inline-start: 0;
                }
            }
            .card-contain {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                width: 100%;
                @media (max-width: 568px) {
                    justify-content: center;
                }
                .card {
                    padding: 10px 20px;
                    background-color: #fff;
                    width: 205px;
                    height: 255px;
                    border-radius: 10px;
                    border: 2px solid #808080;
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    transition: 0.5s;
                    margin: 0 auto;
                    margin-bottom: 20px;
                    cursor: pointer;
                    &:hover {
                        button {
                            &:hover {
                                background-color: $ButtonColor;
                            }
                        }
                    }
                    h1 {
                        color: #000000;
                        font-size: 16px;

                        font-weight: bold;
                        padding: 0 5px;
                    }
                    h3 {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 20px;
                        text-align: start;
                        width: 100%;
                        color: #2e81a4;
                        span {
                            color: #000000;
                        }
                    }
                    ul {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        margin-top: auto;
                        li {
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 24px;
                            color: #000000;
                        }
                    }
                    button {
                        width: 100%;
                        height: 34px;
                        border: none;
                        border-radius: 5px;
                        font-size: 16px;
                        font-weight: 500;
                        color: #fff;
                        background-color: $ButtonColor;
                        letter-spacing: 1px;
                        cursor: pointer;
                        transition: 0.5s;
                        position: relative;
                        &::after {
                            content: '';
                            position: absolute;
                            bottom: -10px;
                            background-color: #bbb;
                            width: 100%;
                            height: 2px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                    }
                    .chosen {
                        width: 100%;
                        height: 34px;
                        border: none;
                        font-size: 16px;
                        font-weight: 500;
                        color: #fff;
                        letter-spacing: 1px;
                        cursor: pointer;
                        background-color: $ButtonColor;
                        transition: 0.5s;
                        border-radius: 5px;
                    }
                    &.active {
                        width: 220px;
                        background-color: $ButtonColor;
                        border: 2px solid $ButtonColor;
                        transform: translateY(-20px);
                        /* Small devices (landscape phones, 576px and up) */
                        @media (max-width: 767.98px) {
                            transform: translateY(0);
                        }
                        h1 {
                            color: #fff;
                        }
                        h3 {
                            color: #fff;
                            span{
                            color: #fff;
                            }
                        }
                        button {
                            background-color: #fff;
                            color: $ButtonColor;
                            &:hover {
                                background-color: #fff;
                            }
                        }
                        ul {
                            li {
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
    .step-template5 {
        display: flex;
        justify-content: center;
        padding-bottom: 50px;
        .temp {
            padding: 20px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            background-color: #ffffff;
            width: 496px;
            height: 556px;
            h2 {
                font-size: 24px;
                line-height: 36px;
                color: #000000;
                margin-bottom: 10px;
            }
            h5 {
                font-weight: 500;
                font-size: 16px;
                color: #000000;
                line-height: 24px;
                margin-bottom: 20px;
            }
            input {
                width: 100%;
                background: #ffffff;
                border-radius: 5px;
                border: 2px solid #aaa7a7;
                height: 40px;
                outline: none;
                padding: 5px 10px;
                margin-bottom: 10px;
            }
            label {
                text-align: start;
                font-weight: 592;
                font-size: 16px;
                line-height: 24px;
                color: #7d7d7d;
            }
            .kind-pay {
                display: flex;
                div {
                    width: calc(100% / 3);
                    border-bottom: 3px solid #80808082;
                    color: #808080;
                    padding-bottom: 7px;
                    cursor: pointer;
                    transition: 0.3s;
                    &:hover {
                        color: #000;
                    }
                    &.active {
                        color: $ButtonColor;
                        font-weight: bold;
                        border-bottom: 3px solid $ButtonColor;
                        &:hover {
                            color: $ButtonColor;
                        }
                    }
                }
            }
            .code-contain {
                display: flex;
                flex-direction: column;
                padding: 20px 75px;
                .ico{
                    display: flex;
                    img{
                        width: 40px;
                        height: 25px;
                    }
                }
                .insert {
                    display: flex;
                    justify-content: space-between;
                    input {
                        width: calc(50% - 5px);
                    }
                }
            }
            .butt {
                button {
                    background-color: transparent;
                    border: 1px solid #b0afaf;
                    width: 100%;
                    height: 44px;
                    border-radius: 5px;
                    color: #b0afaf;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    cursor: pointer;
                    transition: 0.5s;
                    &.actives {
                        border: 1px solid $ButtonColor;
                        background-color: $ButtonColor;
                        color: #fff;
                        &:hover {
                            background-color: #186586;
                        }
                    }
                }
            }
            .button {
                padding: 0 75px;
                button {
                    margin: 0;
                }
            }
            .button :nth-child(2) {
                 margin-inline-start: 20px;
            }
        }
    }

    .confirmation {
        display: flex;
        justify-content: center;
        padding-bottom: 50px;
        .temp {
            background-color: #fff;
            width: 738px;
            height: auto;
            padding: 20px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            h2 {
                font-size: 24px;
                line-height: 36px;
                color: #000000;
            }
            h5 {
                font-weight: 500;
                font-size: 16px;
                color: #000000;
                line-height: 24px;
            }
            .form-da {
                margin: 20px 0;
                padding: 20px;
                width: 100%;
                height: auto;
                background: #e8e8e8;
                border: 2px solid #808080;
                border-radius: 5px;
                color: #000000;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                div {
                    width: calc(50% - 20px);
                    text-align: start;
                    margin-bottom: 20px;
                    /* Small devices (landscape phones, 576px and up) */
                    @media (max-width: 767.98px) {
                        width: 100%;
                        margin-bottom: 5px;
                    }
                }
            }
            .button :nth-child(3) {
                margin-inline-start: 20px ;
                width: 110px;
            }
        }
    }
    }
    .st-f {
        padding-bottom: 50px;
        .step-final {
            min-height: 328px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #fff;
            width: 409px;
            margin: 0 auto;
            height: auto;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            padding: 20px;
            h4 {
                color: $ButtonColor;
                font-weight: bold;
            }
            img{
                margin: 20px 0;
            }
            span {
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
            }
            button {
                border: none;
                color: #fff;
                padding: 10px 20px;
                background-color: $ButtonColor;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                margin-top: 20px;
            }
        }
    }


.bacover {
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    display: none;
}

.small {
    display: none !important;
}
/* Small devices (landscape phones, 576px and up) */
@media (max-width: 767.98px) {
    .small {
        display: flex !important;
    }
    .larg {
        display: none !important;
    }
}
    .button {
        padding: 20px 0;
        display: flex;
        justify-content: center;  
        & :nth-child(2){
            margin-inline-start: 20px;
           }
        button {
            background-color: transparent;
            border: 1px solid #b0afaf;
            width: 97px;
            height: 44px;
            border-radius: 5px;
            color: #b0afaf;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            cursor: pointer;
            transition: 0.5s;

            &.active {
                border: 1.5px solid $ButtonColor;
                color: $ButtonColor;
                &:hover {
                    background-color: $ButtonColor;
                    color: #fff;
                }
            }
            &.actives {
                border: 1px solid $ButtonColor;
                background-color: $ButtonColor;
                color: #fff;
                &:hover {
                 background-color: $HoverColor;
                }
            }
        }
    }
</style>