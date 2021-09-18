<template>
            <div class="brand" @click="gobrandproducts(id)">  
                    <div class="imag">
                        <img :src="`${image}`" v-if="image" />
                        <img v-else src="../../../public/img/elc1.png"  />   
                    </div>    
                    <h4>
                        {{name}}
                    </h4>

                 </div>
</template>
<style lang="scss" scoped>
.brand{
    margin-left: 10px;
}
.imag{
    width: 125px;
    height: 110px;
}
.imag img{
   width: 100%;
    height: 100%;
    border-radius: 50%;
}
h4{
    color: var(--rhead);
    margin-top: 10px;
}
</style>


<script>
// import $ from 'jquery';
export default {
    name: 'brand',
    props: ['id','name','image'],


    methods: {
    gobrandproducts: function (i) {
            this.$router.push(`/brand_product/${i}`);
        },
    },
    computed: {
       
    },
   
};
</script>
