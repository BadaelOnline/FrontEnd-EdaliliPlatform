<template>
        <div class="content-body">
            <div class="container">
                 <!-- first box -->
                <div class="first-card">
                    <div class="folowers">
                        <ul>
                            <li><Icon icon="subway:netwark" /> <span>0 متابعين</span></li>
                            <li><Icon icon="carbon:phone-filled" /> <span>+963 16 322 555</span></li>
                            <li><Icon icon="bx:mobile" /> <span>+963 992 123 456</span></li>
                            <li><Icon icon="eva:car-outline" /> <span>شحن وتوصيل متوفر ضمن المدينة و باقي المحافظات</span></li>
                            <li class="open-time"><Icon icon="bx:time-five" /> <span>10 AM - 10 PM مفتوح</span></li>
                        </ul>
                    </div>
                    <div class="location">
                        <div class="loc-name">
                          <Icon icon="bytesize:location" />
                            <span>ريف دمشق - جرمانا - ساحة الرئيس - بجانب بنك بيمو</span>
                        </div>
                    <!--Google map-->
                    <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 100%">
                    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                        style="width: 100%;height: 100%;" allowfullscreen></iframe>
                    </div>
                        <!--Google Maps-->
                    </div>
                </div>
                <!-- seconde box -->
                  <div class="seconde-card">
                      <div class="rating-user">
                          <h5>مراجعات المستخدمين للمتجر</h5>
                          <div class="rating">
                                <Icon icon="emojione:star" />
                                <Icon icon="emojione:star" />
                                <Icon icon="emojione:star" />
                                <Icon icon="emojione:star" />
                                <Icon icon="emojione:star" /> 
                                <span> 5 من 5</span>
                          </div>
                          <div class="rate">
                            <div>
                                  <span>5 نجوم</span>
                                  <span>
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                    <span>(20)</span>
                                  </span>
                            </div>
                            <div>
                                  <span>4 نجوم</span>
                                  <span>
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />

                                    <span>(0)</span>
                                  </span>
                            </div>
                            <div>
                                  <span>3 نجوم</span>
                                  <span>
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />

                                    <span>(0)</span>
                                  </span>
                            </div>
                            <div>
                                  <span>نجمتان</span>
                                  <span>
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                    <span>(0)</span>
                                  </span>
                            </div>
                            <div>
                                  <span>نجمة واحدة</span>
                                  <span>
                                   <Icon icon="carbon:star-filled" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                   <Icon icon="carbon:star-filled" class="un-checked" />
                                    <span>(0)</span>
                                  </span>
                            </div>
                          </div>
                          <div class="share">
                              <h5>شارك تجربتك مع الآخرين</h5>
                              <button>قم بتقييم المتجر</button>
                          </div>
                      </div>
                      <div class="reviews">
                          <div class="item-review" v-for="item in 5" :key="item">
                              <div class="data-user">
                                    <div class="imag"></div>
                                    <div class="user-name">
                                        <div>username</div>
                                        <div>
                                            <Icon icon="carbon:star-filled" />
                                            <Icon icon="carbon:star-filled" />
                                            <Icon icon="carbon:star-filled" />
                                            <Icon icon="carbon:star-filled" />
                                            <Icon icon="carbon:star-filled" />
                                        </div>
                                        <div class="date">13/3/2021</div>
                                    </div>
                                    <div class="proccess-pay">
                                        <button></button>
                                        <span>عملية بيع مؤكدة</span>
                                    </div>
                              </div>
                              <div class="comments">
                                  مراجعة المستخدم و تعليقاته على المنتج
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
</template>

<script>


import { Icon } from '@iconify/vue';
// import $ from 'jquery';
export default {
    name: 'aboutstore',
    data() {
        return {
        };
    },
    components: {
    Icon,  
    },
    methods:{
        },     
};
</script>

<style lang="scss" scoped>
$ButtonColor: #247ba0;
.content-body{
    display: flex;
    flex-direction: column;
    background-color: #e8e8e8;
    .first-card{
    padding: 20px;
    background-color: #fff;
    height: auto;
    border-radius: 10px;
    margin: 20px 0;
    display: flex;
    /* Small devices (landscape phones, 576px and up) */
    @media  (max-width: 767.98px) {
        flex-direction: column;
    }
    .folowers{
    width: 50%;
    text-align: start;
    /* Small devices (landscape phones, 576px and up) */
    @media  (max-width: 767.98px) {
      width: 100%;
    }
    ul{
        padding: 0;
        margin: 0;
        list-style: none;
     
    li{
        margin-bottom: 20px;
        svg{
            color: #808080;
            font-size: 20px;
        }
    .open-time{
        color: $ButtonColor;
        font-weight: 500;
    }
    &:nth-child(1){
        span{
        color: #808080;   
        }
    }
    }
    }
    }
    .location{
    width: 50%;
    overflow: hidden;
    /* Small devices (landscape phones, 576px and up) */
    @media  (max-width: 767.98px) {
      width: 100%;
    }
    .loc-name{
        margin-bottom: 20px;
        text-align: start;
        svg{
            margin-inline-end: 5px;
            color: #808080;
            font-size: 18px;
        }
    }
    }
    }
    .seconde-card{
    svg{
        color: #ffce31;
    }  
    svg.un-checked{
        color: #E8E8E8;
    }
    padding: 20px;
    background-color: #fff;
    height: auto;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    .rating-user{
        // width: 30%;
        margin-inline-end: 50px;
        h5{
            text-align: start;
            font-weight: bold;
        }
    .rating{
            text-align: start;
            svg{
                font-size: 20px;
                margin-inline-end: 3px;
            }
            span{
                font-weight: bold;
            }
        }
        .rate{
            text-align: start;
            padding-bottom: 20px;
            border-bottom: 1px solid #808080;
            div{
                margin: 5px 0;
                display: flex;
                justify-content: space-between;
                svg{
                font-size: 20px;
                margin-inline-end: 3px; 
                }
                span{
                    font-weight: 500;
                }
            }
        }
        .share{
            h5{
            margin-top: 20px;
            font-weight: bold; 
            }
            button{
            padding: 5px 20px;
            width: 259px;
            height: 34px;
            background: linear-gradient(180deg, #FFFFFF 22.92%, #E8E8E8 100%);
            border: 1px solid #808080;
            border-radius: 3px;
            margin: 10px 0px;
            transition: .3s;
            cursor: pointer;
            &:hover{
                box-shadow: 0px 0px 5px #a6a5a5;
            }
            }
        }
    }
    .reviews{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px 0px;
    width: 53%;
    height: auto;
    /* Medium devices (tablets, 768px and up) */
    @media  (max-width: 991.98px) {
        flex: 1;
    }
    .item-review{
        padding: 20px 0;
        border-bottom: 2px solid #8080807a;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: self-start;
        &:last-child{
            border: none;
        }
    .data-user{
        display: flex;
        justify-content: space-between;
        .imag{
            width:50px;
            height: 50px;
            border-radius: 50%;
            background-color: #ddd;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .user-name{
            text-align: start;
            margin: 0 10px;
            .date{
                color: #808080;
            }
        }
        .proccess-pay{
            display: flex;
            align-items: self-start;
            button{
                width: 11px;
                height: 11px;
                background-color: $ButtonColor;
                border-radius: 50%;
                border: none;
                margin: 5px;
            }
            span{
                font-weight: 500;
                color: $ButtonColor;
                font-size: 14px;
                line-height: 21px;
            }
        }
    }
    .comments{
        margin-top: 20px;
    }
    }
    }
    }
}
</style>
