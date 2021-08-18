<template>
     <div class="small" @click="gotoprodetails(id)">
	 <article class="recipe">
		<div class="pizza-box">
		   <img :src="`${image}`" v-if="image" class="new" />
            <img v-else src="../../../public/img/products1.jpg" class="new" />
		</div>
		<div class="recipe-content">
			<p class="recipe-tags">
				<span class="recipe-tag">Gluten Free</span>
				<span class="recipe-tag">Main dish</span>
			</p>

			<h1 class="recipe-title"><a href="#"> {{ name}}</a></h1>

			<p class="recipe-metadata">
				<span class="recipe-rating">★★★★<span>☆</span></span>
				<span class="recipe-votes">(12 votes)</span>
			</p>

			<p class="recipe-desc">{{short_des}}.</p>

			<button class="recipe-save" type="button">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000"><path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" fill="currentColor"/></svg>
				Like
			</button>

		</div>
	</article>
</div>
</template>
<style lang="scss" scoped>
.recipe,
.pizza-box {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}

.pizza-box {
	flex: 3 1 30ch;
	height: 180px;
	overflow: hidden;

	img {
		max-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		object-fit: cover;
		object-position: 50% 50%;
	}
}

.recipe {
	border: 2px solid #F2F2F2;
	border-radius: 8px;
	overflow: hidden;
	
	&-content {
	padding: 0;
	flex: 4 1 40ch;
    display: grid;
    align-content: space-between;
    height: 257px;
	}
	
	&-tags {
		margin: 0 -8px;
	}

	&-tag {
		display: inline-block;
		margin: 8px;
		font-size: .875em;
		text-transform: uppercase;
		font-weight: 600;
		letter-spacing: .02em;
		color: var(--primary);
	}
	
	&-title {
		margin: 0;
		font-size: clamp(1.4em, 2.1vw);
		font-family: "Roboto Slab", Helvetica, Arial, sans-serif;
		
		a {
			text-decoration: none;
			color: inherit;
		}
	}
	
	&-metadata {
		margin: 0;
	}
	
	&-rating {
		font-size: 1.2em;
		letter-spacing: 0.05em;
		color: var(--primary);
		
		span {
			color: var(--grey);
		}
	}
	
	&-votes {
		font-size: .825em;
		font-style: italic;
		color: var(--lightgrey);
	}
	
	&-save {
		display: flex;
		align-items: center;
		padding: 6px 14px 6px 12px;
		border-radius: 4px;
		border: 2px solid currentColor;
		color: var(--primary);
		background: none;
		cursor: pointer;
		font-weight: bold;
		width: 100px;
		svg {
			margin-right: 6px;
		}
	}
    &-save:hover{
        background-color: #5ba2ee;
    }
}



/* Body Layout */
.small {
	width: 225px;
	padding: 0;
	cursor: pointer;
   
}
</style>


<script>
// import $ from 'jquery';
export default {
    name: 'product',
    props: ['id', 'name', 'image', 'short_des', 'long_des', 'store'],


    methods: {
        gotoprodetails: function (i) {
            this.$router.push(`/products/${i}`);
        },
    },
    computed: {
        avalibleStore() {
            return this.$store.getters.avalibleStore;
        },   
    },
   
};
</script>
