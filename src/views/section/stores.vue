<template>
    <div class="parent">
       
<main v-if="filterSearch.length > 0">
        <div class="board board2">
            <div class="form__group field">
                <input
                    type="input"
                    class="form__field"
                    name="search"
                    id="name"
                    v-model="search"
                    required
                />
                <label for="name" class="form__label">Search Store</label>
            </div>
        </div>
	<ul id="cards">
		<li class="cards"                     
        v-for="store in filterSearch.slice(0,4)"
        :key="store.id"
        :store="store">
			<div class="card__content">
				<div>
					<h2>{{ store.title }}</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div>                    
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span></div>
					<router-link class="btn btn--accent"
                            :to="`/visitstore/${store.id}/${store.title}`"
                        >{{ $t('visit') }}</router-link>
				</div>
				<figure>
					<img src="../../../public/img/market-logo.png" alt="Image description">
				</figure>
			</div>
		</li>
	

	</ul>
</main>
   <div class="unavaible_product" v-else>
        <img src="../../../public/img/unavalible.jpg">
       <h2>Ops... Stores not available.</h2> 
      </div>
 <div class="filter">        
     <div class="board">
            <div class="form__group field">
                <input
                    type="input"
                    class="form__field"
                    name="search"
                    id="name"
                    v-model="search"
                    required
                />
                <label for="name" class="form__label">Search Store</label>
            </div>
        </div>
        <hr style="width: 90%;">
        <h2>الفئات</h2>
                        <ul class="nav-list">
                    <li
                        class="nav-item"
                        v-for="section in Sections"
                        :key="section.id"
                    >
                        <a
                            ><label>{{ section.name }}</label
                            ><input type="checkbox" 
                        /></a>
                    </li>
                </ul>
    <hr style="width: 90%;">
                 <h2>التقييمات</h2>
                      <label class="rating">    
                          <div>            
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star checke"></span>
                    </div>    
                   <input type="radio" id="rating5" name="radios">
                    </label>
                    <label class="rating">    
                          <div>            
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star "></span>
                    </div>    
                      <input type="radio" id="rating4" name="radios">
                    </label>
                                          <label class="rating" >    
                          <div>            
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star "></span>
                    <span class="fa fa-star "></span>
                    </div>    
                       <input type="radio" id="rating3" name="radios">
                    </label>
                                          <label class="rating" >    
                          <div>            
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    </div>    
                      <input type="radio" id="rating2" name="radios"> 
                    </label>
                                          <label class="rating" >    
                          <div>            
                    <span class="fa fa-star checke"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    </div>    
                     <input type="radio" id="rating1" name="radios">
                    </label>

        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';
// import { defineAsyncComponent } from 'vue';
export default {
    name: 'professional',
    components: {
        // BodyStore: defineAsyncComponent(() =>
        //     import(`@/components/body/BodyStore.vue`)
        // ),
        // Cartmini: defineAsyncComponent(() =>
        //     import(`@/components/cart/Cartmini.vue`)
        // ),
    },
    data() {
        return {
            Sections: [],
            viewProductsInStore: [],
            rating: 0,
            SelectedSection: [],
            search: '',
          
        };
    },
    computed: {
        ...mapState(['categories', 'Stores']),

        filterSearch() {
            return this.Stores.filter((store) => {
                var regex = new RegExp( this.search, 'i' );
                return store.title.match(regex); 
            });
        },
    },
    mounted() {
        this.$store.dispatch('loadStores');
    },
    methods: {
        fetch() {
            var self = this;
            let lang = window.localStorage.getItem('lang');
            axios
                .get(`/api/sections/getAll?lang=${lang}`)
                .then((res) => {
                    self.Sections = res.data.Section;
                    console.warn('Data SUCCESS: ', res.data.Section);
                })
                .catch(function (error) {
                    console.warn('------ Error ------: ', error);
                });
        },
        gotoview: function () {
            this.$router.push(`visitStore`);
        },
        menuIcon: function () {
            document.querySelector('.sidebar').classList.toggle('change');
        },
    },
    created() {
        this.fetch();
    },
};
</script>
<style scoped>

.parent{
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #f4f3f3;
}
.filter{
    width: 25%;
    background-color: #dfdfdf;
}

main {
	width: 60vw;
	margin: 20px auto;
}
#cards {
	list-style: none;
	display: grid;
	grid-template-columns: 1fr;
	
}
.card__content {
	box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
	background: rgb(255, 255, 255);
	color: rgb(10, 5, 7);
	border-radius: 1em;
	overflow: hidden;
    margin-bottom: 20px;
	display: grid;
	grid-template-areas: "text img";
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	align-items: stretch;
}

.card__content > div {
	grid-area: text;
	width: 80%;
	place-self: center;
	text-align: left;
	display: grid;
	gap: 1em;
	place-items: start;
    padding-bottom: 10px;
}

.card__content > figure {
	grid-area: img;
	overflow: hidden;
    margin: 0;
}

.card__content > figure > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}


.card__content h2 {
	font-weight: 300;
	font-size: 2.5vw;
    background: -webkit-linear-gradient(var(--r), var(--bl));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

.card__content p {
	font-family: sans-serif;
	font-weight: 300;
	line-height: 1.42;
    font-size: 1.5vw;
    opacity: 0.7;
}
.fa-star {
    color: #cac9c9;
    font-size: 2vw;
}

.checked {
    color: #dcd741;
}
.card__content .btn {
background: linear-gradient(to right, var(--r),var(--bl));
color: rgb(255 255 255);
text-decoration: none;
display: inline-block;
border-radius: 0.25em;
padding: 5px 20px;
font-size: 2vw;
border: none;
}
.filter ul {
    list-style: none;
    text-align: right;
}
.filter ul li {
    display: block;
    opacity: .8;
}
.filter ul li a {
    padding: 10px auto;
    text-decoration: none;
    display: block;
    font-size: 18px;
    letter-spacing: 1px;
    position: relative;
    transition: 0.3s;
    overflow: hidden;
    text-transform: capitalize;
}
.filter ul li a input {
    width: 70px;
    font-size: 18px;
    text-align: center;
    padding-right: 0;
    cursor: pointer;
}
.filter ul li a:hover,
a:active {
    color: #bf4848;
}
.rating{
    margin: 15px 0;
    display: flex;
    justify-content: space-around;
     cursor: pointer;
}
.rating .checke{
   color: #5f6368;
}
.rating:hover .checke{
   color: #dcd741;
}
.board2{
    display: none;
}
.filter .fa-star{
   font-size: 1vw;
}
@media (max-width: 991.98px) {
.board2{
    display: block;
    color: #eee;
}
.board2 .form__label {
  color: rgb(70, 69, 69);
}
.board2 .form__field {

    border-bottom: 2px solid rgb(70, 69, 69);;
    }
.filter{
    display: none;
}

}
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
<style lang="scss" scoped>
.board {
    font-size: 2.2rem;
    letter-spacing: 0.15em;
    line-height: 1.5;
    width: 100%;
    height: auto;
    padding: 20px;
    overflow: hidden;
    color: #fff;

    &:focus {
        outline: none;
    }
}
$primary: #de3016;
$secondary: #00bad4;
$white: #fff;
$gray: #ffffff;
.form__group {
    position: relative;
    padding: 15px 0 0;
    margin: auto;
    margin-top: 10px;
    width:75%;
}

.form__field {
    font-family: inherit;
    width: 80%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1.3rem;
    color: $white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ .form__label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }
}

.form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1.7rem;
    color: $gray;
}

.form__field:focus {
    ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1.5rem;
        color: $primary;
        font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary, $secondary);
    border-image-slice: 1;
}
/* reset input */
.form__field {
    &:required,
    &:invalid {
        box-shadow: none;
    }
}
</style>
