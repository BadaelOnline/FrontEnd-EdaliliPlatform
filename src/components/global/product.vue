<template>
     
<div class="a-box" style="cursor: pointer;" >
  <div class="img-container"  @click="gotoprodetails(id)">
    <div class="img-inner">
      <div class="inner-skew">
                 <img
                :src="`${image}`"
                v-if="image"
                class="new"
              
            />
            <img
                v-else
                src="../../../public/img/3.jpg"
                class="new"
              
            />
      </div>
      
    </div>
  </div>
  <div class="text-container">
    <h3 class="name"  @click="gotoprodetails(id)">  {{ name }}</h3>
    <div class="short_des">
<span class="teaser">{{short_des.slice(0,20)}}</span>

<span ref="complete" class="complete"> {{short_des.slice(20,short_des.length)}}</span>

<span ref="more" class="more" @click="more()">more...</span>
<span ref="less" class="less" @click="less()">less..</span>

   
  </div>
                  <div class="stars"  @click="gotoprodetails(id)">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                </div>
                <div>
                    <div class="avilble"  @click="gotoprodetails(id)">
                        متوفر في {{ avalibleStore }} متاجر
                    </div>
                    </div>
</div>
    </div>
</template>
<style scoped>
.a-box {
  width:100%;
 margin: 10px 20px;
}
.img-container {
    height: 230px;
    width: 200px;
    overflow: hidden;
    display: inline-block;
}

.img-container img {
    transform: skew(0deg, -13deg);
    height: 200px;
  
}

.inner-skew {
    display: inline-block;
    border-radius: 10px;
    overflow: hidden;
    padding: 0px;
    transform: skew(0deg, 13deg);
    margin: 30px 0px 0px 0px;
    background: #c8c2c2;
    height: 250px;
    width: 200px;
}

.text-container {
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  padding: 120px 20px 20px 20px;
  background: #fff;
  margin: -120px 0px 0px 0px;
  line-height: 19px;
  font-size: 14px;
  display: grid;
  align-content: space-between;
  height: 350px;

}

.text-container h3 {
  margin: 20px 0px 10px 0px;
  color: var(--bl);
  font-size: 18px;
}
.short_des{
    opacity: .8;
}
.avilble {
    color: #19e653;
}
 .avilble div {
    margin-right: 10px;
}
.checked {
    color: #dcd741;
}
.complete{
    display:none;
}
.less{
  
    color:navy;
    font-size:13px;
    padding:3px;
    cursor:pointer;
    display: none;   
}
.more{
    
    color:navy;
    font-size:13px;
    padding:3px;
    cursor:pointer;
}
</style>


<script>
import $ from 'jquery';
export default {
    name: 'product',
    props: ['id', 'name', 'image', 'short_des', 'long_des', 'store'],


    methods: {
        gotoprodetails: function (i) {
            this.$router.push(`/products/${i}`);
        },
        more(){
             this.$refs.complete.style.display = "block";
               this.$refs.more.style.display = "none";
                this.$refs.less.style.display = "block";
        },
          less(){
             $('.complete').css("display", "none");
           $('.more').css("display", "block");
            $('.less').css("display", "none"); 
        },
    },
    computed: {
        avalibleStore() {
            return this.$store.getters.avalibleStore;
        },   
    },
   
};
</script>
