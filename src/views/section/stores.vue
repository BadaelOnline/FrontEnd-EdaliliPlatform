<template>
    <div class="parent">
        <main v-if="filteredItems.length > 0" style="padding: 0">
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
            <ul id="cards" style="padding: 0">
                <li
                    class="cards"
                    v-for="store in filteredItems"
                    :key="store.id"
                    :store="store"
                >
                    <div class="card__content">
                        <div>
                            <h2>{{ store.id }}</h2>
                            <h2>{{ store.title }}</h2>
                            <p>{{ store.space }}</p>

                            <div>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <router-link
                                class="btn btn--accent"
                                :to="`/visitstore/${store.id}/${store.title}`"
                                >{{ $t('visit') }}</router-link
                            >
                        </div>
                        <figure>
                            <div
                                v-if="store.is_active == 'Active'"
                                class="open"
                            >
                                <img
                                    src="../../../public/img/open.svg"
                                    alt=""
                                />
                            </div>
                            <div v-else class="cloed">
                                <img
                                    src="../../../public/img/closed.svg"
                                    alt=""
                                />
                            </div>
                            <img
                                src="../../../public/img/market-logo.png"
                                alt="Image description"
                            />
                        </figure>
                    </div>
                </li>
            </ul>
        </main>
        <div class="unavaible_product" v-else>
            <img src="../../../public/img/unavalible.jpg" />
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
            <hr style="width: 90%" />
            <h2>الفئات</h2>
            <nav
                class="menu"
                v-for="section in Section"
                :key="section.id"
                :category="section.category"
            >
                <ol>
                    <input
                        type="checkbox"
                        v-model="SelectedSection"
                        v-bind:value="section.name"
                    />
                    <li class="menu-item">
                        <span style="margin: 0 10px">{{ section.name }}</span>
                        <!-- <ol class="sub-menu">
                        <li class="menu-item" v-for="categor in section.category"  :key="categor">{{categor.name}}</li>
                            
                        </ol> -->
                    </li>
                </ol>
            </nav>
            <hr style="width: 90%" />
            <h2>التقييمات</h2>
            <div>
                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                    </div>
                </label>

                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </label>

                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </label>

                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </label>
                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">
                        <span class="fa fa-star checke"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </label>
            </div>
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

            rating: 0,
            SelectedSection: [],
            search: '',
        };
    },
    computed: {
        ...mapState(['categories', 'Stores', 'Stories', 'Section']),

        filteredItems() {
            // filter stores by search without checbox
            if (this.SelectedSection.length == 0)
                for (var i = 0; i < 1; i++) {
                    return this.Stories.filter((el) => {
                        var regex = new RegExp(this.search, 'i');
                        return el.title.match(regex);
                    });
                }
            // filter stores by search and checbox
            return this.Stories.filter((el) => {
                for (var s = 0; s < el.sections.length; s++) {
                    if (this.SelectedSection.includes(el.sections[s].name))
                        if (this.search.length == 0) {
                            return el;
                        } else {
                            var regex = new RegExp(this.search, 'i');
                            return el.title.match(regex);
                        }
                }
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
                    console.warn('Section: ', res.data.Section);
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
.menu:hover {
    background-color: #e53d4a;
}
.parent {
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #f4f3f3;
}
.filter {
    width: 25%;
    border-left: 1px solid #ddd;
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
    grid-template-areas: 'text img';
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
    position: relative;
}
.card__content > figure .open,
.card__content > figure .cloed {
    position: absolute;
}
.card__content > figure .open img,
.card__content > figure .cloed img {
    width: 10vw;
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
    background: linear-gradient(to right, var(--r), var(--bl));
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
    opacity: 0.8;
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
.board2 {
    display: none;
}
.filter .fa-star {
    font-size: 1vw;
}
/* Medium devices (tablets, 768px and up) */
@media (max-width: 991.98px) {
    main {
        width: 80vw;
    }
    .card__content h2 {
        font-size: 4vw;
    }

    .card__content p {
        font-size: 3vw;
    }
    .fa-star {
        color: #cac9c9;
        font-size: 4vw;
    }
    .card__content .btn {
        font-size: 3vw;
    }
    .board2 {
        display: block;
        color: #eee;
    }
    .board2 .form__label {
        color: rgb(70, 69, 69);
    }
    .board2 .form__field {
        border-bottom: 2px solid rgb(70, 69, 69);
    }
    .filter {
        display: none;
    }
}
.unavaible_product {
    background-color: #ecf0f1;
    height: auto;
    width: 100%;
}
.unavaible_product img {
    margin-bottom: 25px;
}
.unavaible_product h2 {
    font-size: 3em;
    color: gray;
}
.rad-label {
    display: flex;
    justify-content: space-around;
    border-radius: 100px;
    padding: 14px 16px;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.3s;
}

.rad-label:hover,
.rad-label:focus-within {
    background: hsla(0, 0%, 80%, 0.14);
}
.rad-label:hover .checke {
    color: #40afd7;
}
.rad-label:focus-within .checke {
    color: #40afd7;
}
.rad-input {
    position: absolute;
    opacity: 0;
}
.rad-design {
    width: 22px;
    height: 22px;
    border-radius: 100px;

    background: linear-gradient(
        to right bottom,
        hsl(154, 97%, 62%),
        hsl(225, 97%, 62%)
    );
    position: relative;
}

.rad-design::before {
    content: '';

    display: inline-block;
    width: inherit;
    height: inherit;
    border-radius: inherit;

    background: hsl(0, 0%, 90%);
    transform: scale(1.1);
    transition: 0.3s;
}

.rad-input:checked + .rad-design::before {
    transform: scale(0);
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
$white: #494c4f;
$gray: #494c4f;
.form__group {
    position: relative;
    padding: 15px 0 0;
    margin: auto;
    margin-top: 10px;
    width: 75%;
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
<style lang="sass" scoped>
$black: #2A363B
$red: #00bcd078
$red-dark: #C06C84
$orange: #00bad5
$yellow: #f53843
$white: #FFF

@mixin mobile
  @media screen and (max-width: 600px)
    @content

.menu
  background: $red
  height: 4rem


  ol
    list-style-type: none
    margin: 0 auto
    padding: 0

  > ol
    max-width: 1000px
    padding: 0 2rem
    display: flex

    > .menu-item
      flex: 1
      padding: 0.75rem 0

      &:after
        content: ''
        position: absolute
        width: 4px
        height: 4px
        border-radius: 50%
        bottom: 5px
        left: calc(50% - 2px)
        background: $yellow
        will-change: transform
        transform: scale(0)
        transition: transform 0.2s ease

      &:hover:after
        transform: scale(1)

  &-item
    position: relative
    line-height: 2.5rem
    text-align: center
    color: $white
    cursor: pointer
    border-bottom: 1px solid #eee
    a
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      display: block
      color: $white

    @at-root .sub-menu &
      padding: 0.75rem 0
      background: #f53843
      opacity: 0
      transform-origin: bottom
      animation: enter 0.2s ease forwards

      @for $n from 1 through 3
        &:nth-child(#{$n})
          animation-duration: 0.2s + 0.1s * ($n - 1)
          animation-delay: 0.1s * ($n - 1)

      &:hover
        background: $orange

      a
        padding: 0 0.75rem

      @include mobile
        background: $red-dark

  @include mobile
    position: relative

    &:after
      content: ''
      position: absolute
      top: calc(50% - 2px)
      right: 1rem
      width: 30px
      height: 4px
      background: $white
      box-shadow: 0 10px $white, 0 -10px $white

    > ol
      display: none
      background: $red
      flex-direction: column
      justify-content: center
      height: 100vh
      animation: fade 0.2s ease-out

      > .menu-item
        flex: 0
        opacity: 0
        animation: enter 0.3s ease-out forwards

        @for $n from 1 through 5
          &:nth-child(#{$n})
            animation-delay: 0.1s * ($n - 1)

        & + .menu-item
          margin-top: 0.75rem

        &:after
          left: auto
          right: 1rem
          bottom: calc(50% - 2px)

        &:hover
          z-index: 1

    &:hover
      > ol
        display: flex

      &:after
        box-shadow: none

.sub-menu
  position: absolute
  width: 100%
  top: 100%
  left: 0
  display: none
  z-index: 1

  @at-root .menu-item:hover > &
    display: block

  @include mobile
    width: 100vw
    left: -2rem
    top: 50%
    transform: translateY(-50%)

html, body
  font-size: 16px
  font-family: 'Fira Mono', monospace
  margin: 0
  background: $black

*
  box-sizing: border-box

  &:before, &:after
    box-sizing: inherit

a
  text-decoration: none

@keyframes enter
  from
    opacity: 0
    transform: scaleY(0.98) translateY(10px)
  to
    opacity: 1
    transform: none

@keyframes fade
  from
    opacity: 0
  to
    opacity: 1
</style>
scoped>
