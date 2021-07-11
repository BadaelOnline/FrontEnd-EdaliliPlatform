<template>
    <!-- <div class="home">
        <div class="all-section">
            <h3>{{ $t('AllCategories') }}</h3>
        </div>
        <div class="row">
            <div  class="card_mark col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6"  
                v-for="catog in Categories"
                :key="catog.id">
             <img :src="catog.image"  v-if="catog.image"  />
                <img v-else src="../../../public/img/buty.jpg" />
                <div> {{catog.name}} </div>
            </div>
            
        </div>
        <div class="contain">
            <h2 style="margin-top: 3vh">Some Market</h2>
        <div  class="row">
            <div class="card_mark col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6"   v-for="bran in Brands.slice(0, 4)"
                    :key="bran.id">
             <img :src="bran.image"  v-if="bran.image"  />
                <img v-else src="../../../public/img/elc3.png" />
            </div>
        </div>
        </div> 
    </div> -->
    <div>
        <!-- Slideshow container -->
        <div class="slideshow-container">
            <!-- Full-width images with number and caption text -->
            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="../../../public/img/buty.jpg" style="width: 100%" />
                <div class="text">Caption Text</div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="../../../public/img/buty.jpg" style="width: 100%" />
                <div class="text">Caption Two</div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="../../../public/img/buty.jpg" style="width: 100%" />
                <div class="text">Caption Three</div>
            </div>

            <!-- Next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br />

        <!-- The dots/circles -->
        <div style="text-align: center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
        <div class="home">
            <div class="team-area">
                <div class="single-team">
                    <img src="../../../public/img/buty.jpg" />
                    <div class="team-text">
                        <h2>بقالة</h2>
                        <a>See More</a>
                    </div>
                </div>
                <div class="single-team">
                    <img src="../../../public/img/buty.jpg" />
                    <div class="team-text">
                        <h2>إكسسوارات</h2>
                        <a>See More</a>
                    </div>
                </div>
                <div class="single-team">
                    <img src="../../../public/img/buty.jpg" />
                    <div class="team-text">
                        <h2>فواكه</h2>
                        <a>See More</a>
                    </div>
                </div>
                <div class="single-team">
                    <img src="../../../public/img/buty.jpg" />
                    <div class="team-text">
                        <h2>خضار</h2>
                        <a>See More</a>
                    </div>
                </div>
                <div class="single-team">
                    <img src="../../../public/img/buty.jpg" />
                    <div class="team-text">
                        <h2>خضار</h2>
                        <a>See More</a>
                    </div>
                </div>
                <div class="single-team">
                    <img src="../../../public/img/buty.jpg" />
                    <div class="team-text">
                        <h2>أزياء</h2>
                        <a>See More</a>
                    </div>
                </div>
                <div class="single-team">
                    <img src="../../../public/img/buty.jpg" />
                    <div class="team-text">
                        <h2>أدوات منزلية</h2>
                        <a>See More</a>
                    </div>
                </div>
                <div class="single-team">
                    <img src="../../../public/img/buty.jpg" />
                    <div class="team-text">
                        <h2>إكسسوارات</h2>
                        <a>See More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'home',
    props: ['image'],
    data() {
        return {};
    },

    computed: {
        ...mapState(['Categories', 'Brands']),
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
/* slide */
/* Slideshow container */
.slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
}

/* Hide the images by default */
.mySlides {
    display: none;
}

/* Next & previous buttons */
.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

/* Position the "next button" to the right */
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

/* The dots/bullets/indicators */
.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active,
.dot:hover {
    background-color: #717171;
}

/* Fading animation */
.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}

@-webkit-keyframes fade {
    from {
        opacity: 0.4;
    }
    to {
        opacity: 1;
    }
}

@keyframes fade {
    from {
        opacity: 0.4;
    }
    to {
        opacity: 1;
    }
}
.home {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    width: 100%;
    padding: 24px;
}
.team-area {
    display: flex;
    flex-flow: wrap;
    width: 95%;
    justify-content: space-around;
}
.single-team {
    width: 260px;
    height: 300px;
    padding: 24px;
    margin-top: 24px;
    position: relative;
    display: flex;
    align-items: flex-end;
    transition: 0.6s ease-out;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
}
.single-team:hover {
    transform: translateY(15px);
}
.single-team:hover::before {
    opacity: 1;
}
.single-team:hover .team-text {
    opacity: 1;
    transform: translateY(0);
}
.single-team::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #000, transparent);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
}
.single-team img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
}
.single-team .team-text {
    position: relative;
    z-index: 3;
    color: #fff;
    opacity: 0;
    transform: translateY(60px);
    transition: 0.5s;
}
.team-text h2 {
    margin: 0;
    letter-spacing: 3px;
}
.team-text a {
    text-decoration: none;
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;
}
</style>

//
<style lang="scss" scoped>
// * {
//     transition: 0.5s;
// }
// .home {
//     background-color: #edefef;
// }
// .all-section {
//     text-align: center;
//     color: #6c6c77;
// }
// .h-100 {
//     height: 100vh !important;
// }
// .align-middle {
//     position: relative;
//     top: 50%;
// }
// .column {
//     margin-top: 3rem;
//     padding-left: 3rem;
//     &:hover {
//         padding-left: 0;
//         .card .txt {
//             margin-left: 1rem;
//             h1 {
//                 color: rgb(8, 8, 8);
//                 opacity: 1;
//             }
//         }
//         a {
//             color: rgba(8, 8, 8, 1);
//             &:after {
//                 width: 10%;
//             }
//         }
//     }
// }
// .card {
//     min-height: 240px;
//     margin: 0;
//     padding: 1.7rem 1.2rem;
//     border: none;
//     border-radius: 0;
//     color: rgba(0, 0, 0, 1);
//     letter-spacing: 0.05rem;
//     font-family: 'Oswald', sans-serif;
//     box-shadow: 0 0 21px rgba(0, 0, 0, 0.27);
//     .txt {
//         margin-left: 0;
//         margin-top: 12rem;
//         z-index: 1;
//         h1 {
//             font-size: 18px;
//             font-weight: 300;
//             text-transform: uppercase;
//         }
//         p {
//             font-size: 0.7rem;
//             font-family: 'Open Sans', sans-serif;
//             letter-spacing: 0rem;
//             margin-top: 33px;
//             opacity: 0;
//             color: rgba(255, 255, 255, 1);
//         }
//     }
//     @media (max-width: 575.98px) {
//         .txt {
//             margin-top: 11rem;
//         }
//         .txt h1 {
//             font-size: 16px;
//         }
//     }
//     @media (max-width: 520.98px) {
//         .txt {
//             margin-top: 9rem;
//         }
//         .txt h1 {
//             font-size: 16px;
//         }
//     }
//     @media (max-width: 465.98px) {
//         .txt {
//             margin-top: 8rem;
//         }
//         .txt h1 {
//             font-size: 16px;
//         }
//     }
//     @media (max-width: 430.98px) {
//         .txt {
//             margin-top: 7rem;
//         }
//         .txt h1 {
//             font-size: 16px;
//         }
//     }
//     @media (max-width: 380.98px) {
//         .txt {
//             margin-top: 5rem;
//         }
//         .txt h1 {
//             font-size: 16px;
//         }
//     }
//     @media (max-width: 340.98px) {
//         .txt {
//             margin-top: 4rem;
//         }
//         .txt h1 {
//             font-size: 12px;
//         }
//     }
//     @media (max-width: 300.98px) {
//         .txt {
//             margin-top: 3rem;
//         }
//         .txt h1 {
//             font-size: 12px;
//         }
//     }
//     a {
//         z-index: 3;
//         font-size: 0.7rem;
//         color: rgba(0, 0, 0, 1);
//         margin-left: 1rem;
//         position: relative;
//         bottom: -0.5rem;
//         text-transform: uppercase;
//         &:after {
//             content: '';
//             display: inline-block;
//             height: 0.5em;
//             width: 0;
//             margin-right: -100%;
//             margin-left: 10px;
//             border-top: 1px solid rgba(255, 255, 255, 1);
//             transition: 0.5s;
//         }
//     }
//     .ico-card {
//         position: absolute;
//         top: 0;
//         left: 0;
//         bottom: 0;
//         right: 0;
//         width: 100%;
//         height: 92%;
//         overflow: hidden;
//     }
//     i {
//         position: relative;
//         right: -50%;
//         top: 60%;
//         font-size: 12rem;
//         line-height: 0;
//         opacity: 0.2;
//         color: rgba(255, 255, 255, 1);
//         z-index: 0;
//     }
// }
/* _____________________ market after slider _____________________________ */
// .contain {
//     margin-top: 40px;
//     width: 100%;
// }
// .card_mark{
//     margin: 20px 0;
//     cursor: pointer;
// }
// .card_mark img:hover {
//     translate: -20px;
// }
</style>
