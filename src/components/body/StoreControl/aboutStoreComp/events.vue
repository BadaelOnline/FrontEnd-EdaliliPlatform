<template>
    <div class="content-body">
        <div class="container">
            <div class="add-chance" >
              <div class="top" @click="showEventState = true">
                <div class="imag"></div>
                <div class="share-text">
                    <textarea :class="[showEventState == true? 'active':'']" type="text" placeholder="شارك فعالياتك مع الآخرين"></textarea>
                </div>
              </div> 
              <div v-if="!showEventState" @click="showEventState = true" class="text-center"><Icon icon="uiw:picture" /> <span>صورة/فيديو</span></div>
              <div class="show" v-if="showEventState">
                  <div class="add-video" v-if="showAddPic" :class="[showAddPic == true? 'active':'']">
                       <UploadImages @changed="handleImages" :max="3" />
                      <Icon icon="ep:close" class="close" @click="showAddPic = false" />
                  </div>
                  <button class="create"><Icon icon="bxs:edit" /> إنشاء </button>
                  <div class="create-pict" @click="showAddPic = true"><Icon icon="uiw:picture" /> <span>صورة/فيديو</span></div>
                  <span class="hide" @click="showEventState = false">غ</span>
              </div>
            </div>
            <div class="last-chance-item" 
             v-for="(item,index) in 3" :key="index">
              <div class="fi">
                    <div class="head">
                    <div class="store-info" @click="settshow = -1">
                        <div class="imag"></div>
                        <div class="name">
                            <h5>اسم المتجر</h5>
                            <span>اليوم 4:58م</span>
                        </div>
                    </div>
                    <div class="sett">
                        <Icon icon="entypo:dots-three-horizontal" @click="settshow = index" />
                        <div class="settshow" v-if="settshow == index">
                            <div><Icon icon="bytesize:edit" /><span>تعديل المنشور</span></div>
                            <div><Icon icon="fluent:delete-24-regular" /> <span>حذف المنشور</span></div>
                            <div><Icon icon="carbon:notification-off" /> <span>إيقاف تشغيل الإشعارات لهذا المنشور</span></div>
                            <div><Icon icon="bi:pin-angle" /><span>تثبيت المنشور في أعلى الصفحة</span></div>
                        </div>
                    </div>
                </div>
                <div class="chance-info" @click="settshow = -1">
                    <div class="info">
                      <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع 
                      </p>
                      
                        <div class="num-like">
                            <span>1 إعجاب</span>
                            <span>1 تعليق </span>
                            <span>1 مشاركة </span>
                        </div>
                        <div class="share-event">
                            <div @click="like = index" :class="[like ==index ? 'active':'']">
                                <Icon icon="ant-design:like-filled" v-if="like == index " />
                                <Icon icon="uiw:like-o" v-else />
                                 <span >إعجاب </span>
                                 </div>
                            <div @click="comment = index"><Icon icon="jam:message" /> <span>تعليق </span></div>
                            <div><Icon icon="cil:share" /> <span>مشاركة </span></div>
                        </div>
                    </div>
                    <div class="imag">
                        <img src="@/../public/img/5001.png" alt="">
                        </div>
                </div>
              </div>
                <div class="comment-post" v-if="comment == index">
                   <div class="fields" @click="settshow2 = -1">
                        <div class="imag"></div>
                        <input type="text" placeholder="أضف تعليق...">
                   </div>
                   <div class="other-comm">
                        <div class="info">
                             <div @click="settshow2 = -1" class="imag"></div>
                            <div @click="settshow2 = -1" class="name">user1233</div>
                            <p @click="settshow2 = -1">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
                            <div class="date" @click="settshow2 = -1">
                                <span>دقيقنين</span>
                                <span class="replay" @click="replay_comment = index">رد</span>
                            </div>
                            <div class="fields" v-if="replay_comment == index" @click="settshow2 = -1">
                                <div class="imag"></div>
                                <input type="text">
                            </div>
                            <div class="sett">
                                 <Icon icon="entypo:dots-three-horizontal" @click="settshow2 = index" />
                                 <div class="settshow" v-if="settshow2 == index"  >
                                    <div><span>حذف التعليق</span></div>
                                    <div> <span>حظر الالمستخدم</span></div>
                                    <div><span>الإبلاغ عن التعليق</span></div>
                                 </div>
                            </div>
                        </div>
                   </div>
                   <h5>عرض جميع التعليفات</h5>
                </div>
          
            </div>
        </div>
    </div>
</template>

<script>

import { Icon } from '@iconify/vue';
// import $ from 'jquery';
import UploadImages from "vue-upload-drop-images";
export default {
    name: 'events',
    data() {
        return {
        settshow:-1,
        settshow2:-1,
        showEventState:false,
        showAddPic:true,
        imgShare:[],
        file:[],
        like:-1,
        comment:-1,
        replay_comment:-1,
        share:false,

        };
    },
    components: {
    Icon,  
    UploadImages
    },
 
    methods:{
        handleImages(e) {
            this.file = e;
        },
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
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 20px auto;
    margin-bottom: 0;
    padding: 10px;
    text-align: start;
    padding-bottom: 0;
    width: 80%;
    /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 767.98px) {
        width: 100%;
    }
   .top {
       display: flex;
        .imag{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #ddd;
        margin-inline-end: 10px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .share-text{
        flex: 1;
        textarea{
           width: 100%;
            background-color: #E8E8E8;
            border: none;
            border-radius: 5px;
            resize: none;
            padding: 10px;
            height: 40px;
            transition: .5s;
            outline: none;
            &.active{
                height: 100px;
            }
        }
    }
    

   }
   .text-center{
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #808080;
    margin-top: 10px;
    padding: 10px;
    transition: .3s;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #f0f0f0;
    }
   }
.show{
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    .add-video{
        width: calc(100% - 50px);
        border: none;
        padding: 0;
        margin: 0;
        height: 0;
        border-radius: 5px;
        text-align: center;
        color: #808080;
        margin-inline-start: auto;
        position: relative;
        transition: .5s;
        #fl{
            width: 0;
        }
        .close{
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 25px;
            cursor: pointer;
        }
        &.active{
        border: 2px dashed #E8E8E8;
        padding: 30px;
        margin: 10px 0;
        height: auto;
        }
        .container{
            border: none;
            background-color: transparent;
            padding: 0;
        }
    }
        button{
        background: $ButtonColor;
        border-radius: 5px;
        color: #fff;
        border: none;
        padding: 5px;
        transition: .3s;
        &:hover{
            background: $HoverColor;
        }
        }
        .create{
            font-size: 14px;
            font-weight: bold;
            svg{
                font-size: 24px;
            }
        }
        .create-pict{
            color: $ButtonColor;
            margin-inline-start: 10px;
            transition: .3s;
            border-radius: 5px;
            padding: 5px;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
        &:hover{
            background: $HoverColor;
            color: #fff;
        }
        svg{
            margin-inline-end: 5px;
        }
        }
        .hide{
        padding: 5px;
        margin-inline-start: auto;
        cursor: pointer;
        transition: .3s;
        border-radius: 5px;
        &:hover{
           background-color: #f0f0f0;
        }
        }
    }
}
.last-chance-item{
.fi{ 
 width: 80%;
    /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 767.98px) {
        width: 100%;
    }
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
height: auto;
background: #FFFFFF;
border-radius: 10px;
padding: 10px;
display: flex;
flex-direction: column;
overflow: hidden;
position: relative;
margin: 0 auto;
margin-top: 10px;
transition: .5s;
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
   position: relative;
   svg{
       padding: 5px;
       transition: .5s;
       border-radius: 50%;
       font-size: 27px;
       &:hover{
            background-color: #f0f0f0;
           cursor: pointer;
       }
   }
   .settshow{
              color: #000;
            position: absolute;
            z-index: 5;
            top: 106%;
            left: 0;
            padding: 10px;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px #808080;
            border-radius: 10px;
            width: 300px;
            height: auto;
            display: grid;
            text-align: start;
            div{
            transition: .3s;
            cursor: pointer;
            padding:  5px;
            font-size: 13px;
            &:hover{
                background: #f0eded;
                border-radius: 5px;
                
            }
            }
            &::after{
                content: '';
                border-style: solid;
                border-width: 10px;
                border-color: transparent transparent #FFFFFF transparent;
                position: absolute;
                top: -20px;
                left: 10px;
            }
   }
}
}
.chance-info{
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    padding-bottom: 0;
      /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 767.98px) {
        flex-direction: column-reverse;
    }
    .info{
        text-align: start;
        font-family: 'Tajawal';
        font-style: normal;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
        width: 50%;
          /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 767.98px) {
        width: 100%;
    }
        font-weight: 500;
        .num-like{
        color: #808080;
        margin-top: 40px;
        padding-bottom: 5px;
        border-bottom: 1px solid #888484;
        span{
            margin-inline-end: 5px;
        }
        }
        .share-event{
        color: #808080;
        display: flex;
        div{
        margin: 10px;  
        padding: 5px; 
        transition: .5s;
        border-radius: 5px;
        cursor: pointer;
        &:hover{
          background-color: #f0f0f0;   
        }
        &.active{
            color: $ButtonColor;
        }
        }
        }
    }
    .imag{
       width: 40%;
            /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 767.98px) {
        width: 100%;
    }
        height: 230px;
        img{
            width: 90%;
            height: 100%;
        }
    }
}
}
.comment-post{
    display: flex;
    flex-direction: column;
    align-items: self-start;
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 767.98px) {
        width: 100%;
    }
    .fields{
        display: flex;
        width: 50%;
        align-items: center;
        margin-bottom: 10px;
        .imag{
        width: 45px;
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
        input{
            width: 100%;
            background-color: #E8E8E8;
            border: none;
            border-radius: 5px;
            resize: none;
            padding: 10px;
            height: 35px;
            transition: 0.5s;
            outline: none;
        }
    }
    .other-comm{
        .info{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        position: relative;
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
            font-weight: bold;
        }
        p{
            margin-inline-start: 50px;
            text-align: start;
            font-size: 14px;
            margin-bottom: 0;
        }
        .date{
            margin-inline-start: 50px;
            color: #808080;
            font-size: 14px;
            flex: 1;
            text-align: start;
            span{
                margin-inline-end: 10px;
            }
            .replay{
             transition: .5s;
             &:hover{
                 text-decoration: underline;
                 font-size: 15px;
             }
            }
        }
        .sett{
            position: absolute;
            top: 10px;
            left: 10px;
            svg{
            transition: .5s;
            border-radius: 50%;
            font-size: 25px;
            padding: 5px;
            &:hover{
            background-color: #f0f0f0;
            cursor: pointer;
      
        }

            }
            .settshow{
              color: #000;
            position: absolute;
            z-index: 5;
            top: 106%;
            left: 0;
            padding: 10px;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px #808080;
            border-radius: 10px;
            width: 160px;
            height: auto;
            display: grid;
            text-align: start;
            div{
            transition: .3s;
            cursor: pointer;
            padding:  5px;
            font-size: 13px;
            &:hover{
                background: #f0eded;
                border-radius: 5px;
                
            }
            }
            &::after{
                content: '';
                border-style: solid;
                border-width: 10px;
                border-color: transparent transparent #FFFFFF transparent;
                position: absolute;
                top: -20px;
                left: 10px;
            }
   }
        }
        .fields{
        display: flex;
        width: 100%;
        align-items: center;
        margin-inline-start: 50px;
        margin-top: 10px;
        .imag{
        width: 45px;
        height: 40px;
        border-radius: 50%;
        background-color: #ddd;
        margin-inline-end: 10px;
        img{
            width: 40%;
            height: 100%;
            border-radius: 50%;
        }
        }
        input{
            width: 45%;
            background-color: #E8E8E8;
            border: none;
            border-radius: 5px;
            resize: none;
            padding: 10px;
            height: 35px;
            transition: 0.5s;
            outline: none;
        }
    }
        }
    }
    h5{
        font-size: 16px;
        color: #808080;
        font-weight: bold;
        margin-top: 20px;
    }
}
}

}
</style>
