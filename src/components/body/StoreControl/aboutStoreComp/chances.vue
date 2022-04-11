<template>
    <div class="content-body">
        <div class="container">
            <div class="add-chance">
                <span>إضافة فرصة عمل جديدة</span>
                <span class="show" @click="formChanceState =!formChanceState" v-if="!formChanceState">إظهار</span>
                <span class="show" @click="formChanceState =!formChanceState" v-else>إخفاء</span>
                <div class="chance-form" :class="[formChanceState?'active':'']" >
                    <div class="card-feilds">
                        <div>
                            <label for="">نوع الوظيفية:</label>
                            <select>
                                <option disabled selected>أختر نوع الوظيفة</option>
                                <option value="">متجر</option>
                                <option value="">مطاعم</option>
                                <option value="">أطباء</option>
                                <option value="">موارد بشرية</option>
                            </select>
                        </div>
                        <div>
                            <label for="">المسمى الوظيفي:</label>
                            <input type="text" placeholder="أدخل المسمى الوظيفي">
                        </div>
                        <div>
                            <label for="">نوع التوظيف:</label>
                            <select>
                                <option disabled selected>أختر نوع الوظيفة</option>
                                <option value="">متجر</option>
                                <option value="">مطاعم</option>
                                <option value="">أطباء</option>
                                <option value="">موارد بشرية</option>
                            </select>
                        </div>
                        <div>
                            <label for="">المسمى الوظيفي:</label>
                            <input type="text" placeholder="أدخل العدد">
                        </div>
                    </div>
                    <div class="card-feilds">
                        <div>
                            <label for="">المستوى التعليمي المطلوب:</label>
                            <select>
                                <option disabled selected>اختر المستوى التعليمي</option>
                                <option value="">متجر</option>
                                <option value="">مطاعم</option>
                                <option value="">أطباء</option>
                                <option value="">موارد بشرية</option>
                            </select>
                        </div>
                        <div>
                            <label for="">المستوى المهني  المطلوب:</label>
                            <select>
                                <option disabled selected>اختر المستوى المهني </option>
                                <option value="">متجر</option>
                                <option value="">مطاعم</option>
                                <option value="">أطباء</option>
                                <option value="">موارد بشرية</option>
                            </select>
                        </div>
                        <div>
                            <label for=""> الخبرة المطلوبة:</label>
                            <select>
                                <option disabled selected>اختر الخبرة</option>
                                <option value="">متجر</option>
                                <option value="">مطاعم</option>
                                <option value="">أطباء</option>
                                <option value="">موارد بشرية</option>
                            </select>
                        </div>
                        <div>
                            <label for="">تحميل صورة:</label>
                            <input type="file" placeholder="أدخل العدد">
                        </div>
                    </div>
                    <div class="card-feilds">
                        <div>
                            <label for="">الراتب:</label>
                            <div class="salary">
                                <span>من</span>
                                <input type="text" >
                                <span>إلى</span>
                                <input type="text" >
                            </div>
                            <div class="kind-salary">
                            <label for="">أو</label>
                            <span>يحدد بعد المقابلة</span>
                            </div>
                        </div>
                        <div>
                            <label for="">التواصل:</label>
                            <div class="kind-salary">
                            <span>إضافة رقم هاتف</span>
                            </div>
                            <div class="kind-salary">
                            <span>إضافة بريد إلكتروني</span>
                            </div>
                        </div>
                        <div>
                            <label for="">الوصف:</label>
                            <textarea cols="30" rows="6"></textarea>
                        </div>
                    </div>
                    <div class="post-form"><button>إضافة</button></div>
                </div>
            </div>
            <div class="title">فرص العمل المضافة مسبقا</div>
            <div class="last-chance-item" :id="`ch${index}`"  :class="[showChanceState == index ? 'active-chance' : '']"
             v-for="(item,index) in 3" :key="index">
                <div class="head">
                    <div class="store-info">
                        <div class="imag"></div>
                        <div class="name">
                            <h5>اسم المتجر</h5>
                            <span>اليوم 4:58م</span>
                        </div>
                    </div>
                    <div class="sett">
                        <div>
                            <span><Icon icon="bytesize:edit" /> </span>
                            <span>تعديل </span>
                        </div>
                        <div>
                            <span><Icon icon="fluent:delete-28-regular" /> </span>
                            <span>حذف </span>
                        </div>
                    </div>
                </div>
                <div class="chance-info" :id="`chh${index}`">
                    <div class="info">
                        <h5>المسمى الوظيفي</h5>
                        <h5>نوع التوظيف</h5>
                        <h5>العدد المطلوب</h5>
                        <h5>الراتب </h5>
                        <p>
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع
                          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،لقد تم توليد
                        </p>
                     
                    </div>
                    <div class="imag">
                        <img src="@/../public/img/5001.png" alt="">
                        </div>
                </div>
                <div class="fotter">
                    <span class="show" @click="showChance(index)">عرض أكثر</span>
                    <span class="hide" @click="hideChance(index)">عرض أقل</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import { Icon } from '@iconify/vue';
import $ from 'jquery';
export default {
    name: 'chances',
    data() {
        return {
        showChanceState:null,
        formChanceState:false,
        };
    },
    components: {
    Icon,  
    },
    methods:{
        showChance(ind){
            $('.last-chance-item').animate({height:222});
            this.showChanceState = ind;
            $(`#ch${ind}`).click(function() {
               const numheight =  $(this).children(`#chh${ind}`).outerHeight();
               $(this).animate({height: numheight+60});
            });
        },
        hideChance(ind){
             this.showChanceState = null;
             $(`#ch${ind}`).click(function() {
               $(this).animate({height: 222});
            });
        }
        },     
};
</script>

<style lang="scss" scoped>
$ButtonColor: #247ba0;
$HoverColor: #1D7094;
.content-body{
display: flex;
flex-direction: column;
background-color: #e8e8e8;
.add-chance {
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 20px 0;
    margin-bottom: 0;
    padding: 20px;
    text-align: start;
    span{
        font-family: 'Tajawal';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }
    .show{
        font-family: 'Tajawal';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #808080;
        margin-inline-start: 5px;
        cursor: pointer;
        transition: .3s;
        &:hover{
            color: $ButtonColor;
            text-decoration: underline;
        }
    }
    .chance-form{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        height: 0;
        overflow: hidden;
        padding: 0;
        transition: .5s;
        &.active{
            height: 450px;
            overflow: visible;
            padding: 20px 0;
            @media (max-width: 767.98px) {
                height: auto;
            }
        }
        .card-feilds{
            display: flex;
            flex-direction: column;
            width: calc((100% / 3) - 40px);
            /* Extra small devices (portrait phones, less than 576px) */
            @media (max-width: 767.98px) {
                width: 100%;
            }
            div{
            display: flex;
            flex-direction: column; 
            margin-bottom: 10px;
            label{
            color: #808080;
            margin-bottom: 5px;
            }
            input{
                background: #FFFFFF;
                border: 1px solid #808080;
                border-radius: 5px;
                height: 44px;
                padding: 10px;
                outline: none;
            }
            select{
                background: #FFFFFF;
                border: 1px solid #808080;
                border-radius: 5px;
                height: 44px;
                padding: 10px;
            }
            textarea{
            resize: none;
            background: #E8E8E8;
            border: 1px solid #808080;
            outline: none;
            padding: 10px;
            }
            }
            .salary{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 0;
            width: 100%;
            span{
                color: #808080;
            }
            input{
                margin: 0 10px;
                width: 100%;
            }
            }
            .kind-salary{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0;
            label{
                margin-bottom: 0;
                margin-inline-end: 10px;
            }
            span{
                font-weight: 500;
                font-size: 14px;
                color: #808080;
                transition: .5s;
                &:hover{
                    color: $ButtonColor;
                    cursor: pointer;
                }
            }
            }
        }
        .post-form{
        width: 100%;
        display: flex;
        justify-content: end;
        margin-top: 20px;
        button{
            padding: 10px 20px;
            background: $ButtonColor;
            border-radius: 5px;
            border: none;
            color: #fff;
            cursor: pointer;
            transition: .5s;
            &:hover{
                background-color: $HoverColor;
            }
        }
        }
    }
}
.title{
font-family: 'Tajawal';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
text-align: start;
color: #000000;
margin: 20px 0 10px;
}
.last-chance-item{
width: 100%;
height: 222px;
background: #FFFFFF;
border-radius: 10px;
padding: 10px;
display: flex;
flex-direction: column;
overflow: hidden;
position: relative;
margin-bottom: 10px;
transition: .5s;
&.active-chance{
    .fotter{
        bottom: 5px;
        .show{
            display: none !important;
        }
        .hide{
            display: block !important;
        }
    }
}
.head{
    display: flex;
.store-info{
    flex: 1;
    text-align: start;
    display: flex;
    .imag{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ddd;
        margin-inline-end: 10px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .name{
        h5{
        font-family: 'Tajawal';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        margin: 0;
        }
        span{
        font-family: 'Tajawal';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #808080;
        }
    }
}
.sett{
    display: flex;
    color: #808080;
    span{
        margin: 0 2px;
    }
    div{
        transition: .3s;
        cursor: pointer;
        &:hover{
            color: #000;
        }
    }
}
}
.chance-info{
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    
    .info{
        text-align: start;
        font-family: 'Tajawal';
        font-style: normal;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
        width: 58%;
        h5{
        font-weight: 700;
         font-size: 14px;
        }
        p{
        font-weight: 500;
         font-size: 14px;
        }
    }
    .imag{
        flex: 1;
        img{
            width: 90%;
            height: 100%;
        }
    }
}
.fotter{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px -15px 20px #fff;
    padding: 2px 0;
    span{
    font-family: 'Tajawal';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: $ButtonColor;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
    }
     .hide{
         display: none;
     }
}
}
}
</style>
