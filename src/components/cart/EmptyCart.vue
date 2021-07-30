<template>
       <div class="unavaible_product" >
        <img src="../../../public/img/unavalible.jpg">
       <h2>Ops... Products not available.</h2> 
      </div>
</template>
<style scoped>
.unavaible_product{
    background-color: #ecf0f1;
    height: auto;
    width: 100%;
}
.unavaible_product img{
   margin-bottom: 25px;
}
.unavaible_product h2{
   font-size: 3em;
    color: gray;
}  

</style>
<script>
export default {
    name: 'EmptyCart',
};
</script>
