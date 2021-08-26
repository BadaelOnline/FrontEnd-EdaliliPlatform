<template>
  <div class="cu5">
            <h5>choose server</h5>
            <select v-model="server" @change="handleserver($event)">
                <option value="edalily">edalily</option>
                <option value="admin">admin</option>
            </select>
        </div>
    <div class="bottom_header" v-if="$route.name == 'home'"> 
             <div class="child1">
       </div>
       <div class="child2">
    <div
            id="deno"
            class="carousel slide"
            data-ride="carousel"
        >
            <div class="col-sm-12" style="padding: 0">
                <div class="carousel-inner">
                    <div class="carousel-item active" 
                    v-for="brand in brands.slice(brands.length - 5,brands.length - 4)" :key="brand.id">
                    <img :src="brand.image">
                 
                    </div>
                    <div class="carousel-item" v-for="brand in brands.slice(brands.length - 4,brands.length)" :key="brand.id">
                        <img :src="brand.image">
                      
                    </div>   
                </div>
                <!-- Left and right controls -->
                <a class="carousel-control-prev" href="#deno" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#deno" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
       </div>
       <div class="child3">
           <div v-for="brand in brands.slice(brands.length - 7,brands.length - 5)" :key="brand.id"><img :src="brand.image"></div>

       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'banarHeader',
    data() {
        const server = localStorage.getItem('server') || 'admin';
        return {
            server: server,
        };
    },
    methods: {
        handleserver(event) {
            localStorage.setItem('server', event.target.value);
            window.location.reload();
        },
       
    },
    computed: {
        ...mapState([
            'brands',
        ]),
    },
    mounted() {
        this.$store.dispatch('loadBrands');

    },
};
</script>

<style scoped>
.cu5{
    position: fixed;
    right:  5%;
    z-index: 80;
}
/* Start landing */
.bottom_header {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height:400px;
}
.bottom_header .child1{
    width: 10%;
}
.bottom_header .child2{
    padding-top: 20px;
    width: 53%;
    display: grid;
    align-content: start;
}  
.carousel-item{
    position: relative;
} 
.carousel-item img{
    width: 100%;
    height: 340px;
}

.bottom_header .child3{
    padding-top: 20px;
    width: 20%;
    display: grid;
   align-content: start;
}
.bottom_header .child3 div {
  height: 150px;
  margin-bottom: 40px;
}

.bottom_header .child3 div img{
    width: 100%;
    height: 100%;  
}
/* Medium devices (tablets, 768px and up) */
@media  (max-width: 991.98px) {
.bottom_header {
    display: flex;
   flex-flow: wrap;
   height: auto;
    
}
.bottom_header .child1{
    display: none;
}
.bottom_header .child2{
   width: 90%;
   padding-top: 20px;
}
.bottom_header .child3{
    display: none;
}

}
</style>
