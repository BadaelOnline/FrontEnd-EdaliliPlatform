<template>
    <div>
        <!-- section  -->
        <div class="home">
            <h2 class="heading">Our <span>Section</span></h2>
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
        <!-- category -->
        <div class="categories">
            <h2 class="heading">Our <span>Categories</span></h2>
            <div class="wrapper">
                <div class="categories-container">
                    <div class="category">
                        <img src="../../../public/img/kitchen.jpg" alt="" />
                        <div class="category-body">
                            <h2>بقالة</h2>
                        </div>
                    </div>
                    <div class="category">
                        <img src="../../../public/img/kitchen.jpg" alt="" />
                        <div class="category-body">
                            <h2>بقالة</h2>
                        </div>
                    </div>
                    <div class="category">
                        <img src="../../../public/img/kitchen.jpg" alt="" />
                        <div class="category-body">
                            <h2>بقالة</h2>
                        </div>
                    </div>
                    <div class="category">
                        <img src="../../../public/img/kitchen.jpg" alt="" />
                        <div class="category-body">
                            <h2>بقالة</h2>
                        </div>
                    </div>
                    <div class="category">
                        <img src="../../../public/img/kitchen.jpg" alt="" />
                        <div class="category-body">
                            <h2>بقالة</h2>
                        </div>
                    </div>
                    <div class="category">
                        <img src="../../../public/img/kitchen.jpg" alt="" />
                        <div class="category-body">
                            <h2>بقالة</h2>
                        </div>
                    </div>
                    <div class="category">
                        <img src="../../../public/img/kitchen.jpg" alt="" />
                        <div class="category-body">
                            <h2>بقالة</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Brands -->
        <div class="brands">
            <h2 class="heading">Our <span>Brands</span></h2>
            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img src="../../../public/img/IMG_1.png" alt="" />
                    </div>
                    <div class="slide">
                        <img src="../../../public/img/IMG_2.png" alt="" />
                    </div>
                    <div class="slide">
                        <img src="../../../public/img/IMG_3.png" alt="" />
                    </div>
                    <div class="slide">
                        <img src="../../../public/img/IMG_4.png" alt="" />
                    </div>
                    <div class="slide">
                        <img src="../../../public/img/IMG_5.png" alt="" />
                    </div>
                    <div class="slide">
                        <img src="../../../public/img/images.jpg" alt="" />
                    </div>
                    <div class="slide">
                        <img src="../../../public/img/images1.jpg" alt="" />
                    </div>
                    <div class="slide">
                        <img src="../../../public/img/images2.jpg" alt="" />
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
/* slider */
.heading {
    text-align: center;
    font-size: 2rem;
    padding: 0 0.5rem;
    color: #333;
}
.heading span {
    color: #ff80b3;
}
/* section */
.home {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    width: 100%;
    /* padding: 24px; */
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
/* categories */
.categories {
    margin: 24px;
    padding: 24px;
    width: 100%;
}
.categories .wrapper {
    width: 90%;
    margin: auto;
    padding-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    flex-direction: column;
}
.categories .wrapper .categories-container {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.categories .wrapper .categories-container .category {
    width: 150px;
    height: 150px;
    position: relative;
    overflow: hidden;
    border-radius: 100%;
    transition: 0.5s ease-out;
}
.categories .wrapper .categories-container .category::before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #83818157;
    position: absolute;
    z-index: 1;
}
.categories .wrapper .categories-container .category img {
    border-radius: 50%;
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: relative;
}
.categories .wrapper .categories-container .category:hover {
    cursor: pointer;
}
.categories .wrapper .categories-container .category:hover img {
    transform: scale(1.2);
    transition: 0.5s ease-in;
}
.categories .wrapper .categories-container .category .category-body {
    position: absolute;
    text-align: center;
    color: #fff;
    height: 100%;
    width: 100%;
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12rem;
}
/* Brands */
.brands {
    margin: 24px;
    padding: 24px;
    min-height: 100%;
    display: grid;
    place-items: center;
}
.slider {
    height: 250px;
    margin: auto;
    position: relative;
    width: 90%;
    display: grid;
    place-items: center;
    overflow: hidden;
}
.slide-track {
    display: flex;
    width: (250px * 18);
    animation: scroll 40s linear infinite;
}
.slide-track:hover {
    animation-play-state: paused;
}
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-250px * 9));
    }
}
.slide {
    height: 200px;
    width: 250px;
    display: flex;
    align-items: center;
    padding: 15px;
    perspective: 100px;
}
.slide img {
    width: 100%;
    transition: transform 1s;
}
.slide img:hover {
    transform: translateZ(20px);
}
.slide::before,
.slider::after {
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
    );
    content: '';
    height: 100%;
    position: absolute;
    width: 15%;
    z-index: 2;
}
.slider::before {
    left: 0;
    top: 0;
}
.slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}
</style>
