<template>
    <div class="subscriber">
        <div class="name-market">{{ title }}</div>
        <img src="" />
        <!-- <div class="postion-market">{{ location }}</div> -->
        <button type="button" class="btn-visit">{{ $t('visit') }}</button>
    </div>
</template>
<style scoped>
.subscriber{
display: flex;
flex-direction: column;
height: 100%;
justify-content: space-around;
}
.name-market{
    font-weight: bold;
}
.btn-visit{
width: 30%;
margin: auto;
margin: 0 auto;
background-color: #06c606;
border: none;
color: #fff;
font-weight: bold;
height: 10%;
box-shadow: 2px 5px #7ed046;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
letter-spacing: 0.1em;
}
.btn-visit:hover{
    width: 31%;
    height: 11%;
    
}
</style>
<script>
export default {
    name: 'Subscriber',
    props: ['title', 'location'],
};
</script>
