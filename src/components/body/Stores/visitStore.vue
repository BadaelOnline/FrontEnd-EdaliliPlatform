<template>
    <div class="visit">
        <!-- banar -->
        <div
            id="carouselExampleInterval"
            class="carousel slide carouselSlide"
            data-ride="carousel"
            style="justify-content: center"
        >
            <div class="carousel-inner text-center">
                <div class="carousel-item active" data-interval="2000">
                    <img
                        src="../../../../public/img/banner-2.jpg"
                        class="d-block w-100 h-50"
                        alt="..."
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="../../../../public/img/banner-1.jpg"
                        class="d-block w-100 h-50"
                        alt="..."
                    />
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#carouselExampleInterval"
                role="button"
                data-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carouselExampleInterval"
                role="button"
                data-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <!-- profile store -->
        <div class="card">
            <div class="profile-sidebar">
                <img
                    src="../../../../public/img/market-logo.png"
                    height="150"
                />
                <ul class="social">
                    <li>
                        <a
                            ><i
                                class="fa fa-map-marker fa-2x"
                                aria-label="map"
                            ></i
                        ></a>
                    </li>
                    <li>
                        <a
                            ><i
                                class="fab fa-whatsapp fa-2x"
                                aria-label="whatsapp"
                            ></i
                        ></a>
                    </li>
                    <li>
                        <a
                            ><i class="fa fa-phone fa-2x" aria-label="phone"></i
                        ></a>
                    </li>
                </ul>
                <div>السويداء - شمال سينما سرايا مقابل السويداء مول</div>
            </div>
            <div class="profile-main">
                <div class="profile-name">سنتر الريم</div>
                <div class="profile-body">
                    <div class="phone">
                        <div>
                            095454655454
                            <i class="fa fa-phone" aria-label="phone"></i>
                        </div>
                        <div>
                            016452354
                            <i class="fa fa-phone" aria-label="phone"></i>
                        </div>
                    </div>
                    <div class="week">
                        <div>أوقات الدوام</div>
                        <div>كل أيام الاسبوع</div>
                        <div>8<span>صباحا</span>10<span>ليلا</span></div>
                    </div>
                    <div class="delivery">
                        <div>الخدمات</div>
                        <div>خدمة توصيل</div>
                        <div>
                            <img
                                src="../../../../public/img/Group.png"
                                height="20"
                            />E-Dalely point
                        </div>
                    </div>
                </div>
                <div class="profile-footer">
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
                            <label for="name" class="form__label"
                                >Search Store</label
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- navbar store -->
        <div class="navbar">
            <div class="btn">
                <button type="button" class="btn btn-light medic">
                    سياسة المتجر
                </button>
            </div>
            <div class="btn">
                <button type="button" class="btn btn-light">فرص عمل</button>
            </div>
            <div class="btn">
                <button type="button" class="btn btn-light">عربة التسوق</button>
            </div>
            <div class="btn">
                <button type="button" class="btn btn-light">
                    عروضات المتجر
                </button>
            </div>
            <div class="btn">
                <button type="button" class="btn btn-light">
                    <i class="fa fa-angle-down mr-2" aria-hidden="true"></i>
                    جميع الأقسام
                </button>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <ul class="mega-links">
                                <li>stile seal</li>
                                <li>stile seal 4</li>
                                <li>stile seal 5</li>
                                <li>stile seal 6</li>
                                <li>stile seal 8</li>
                            </ul>
                        </div>
                        <div class="row">
                            <ul class="mega-links">
                                <li>stile seal</li>
                                <li>stile seal 4</li>
                                <li>stile seal 5</li>
                                <li>stile seal 6</li>
                                <li>stile seal 8</li>
                            </ul>
                        </div>
                        <div class="row">
                            <ul class="mega-links">
                                <li>stile seal</li>
                                <li>stile seal 4</li>
                                <li>stile seal 5</li>
                                <li>stile seal 6</li>
                                <li>stile seal 8</li>
                            </ul>
                        </div>
                        <div class="row">
                            <ul class="mega-links">
                                <li>stile seal</li>
                                <li>stile seal 4</li>
                                <li>stile seal 5</li>
                                <li>stile seal 6</li>
                                <li>stile seal 8</li>
                            </ul>
                        </div>
                        <div class="row">
                            <ul class="mega-links">
                                <li>stile seal</li>
                                <li>stile seal 4</li>
                                <li>stile seal 5</li>
                                <li>stile seal 6</li>
                                <li>stile seal 8</li>
                            </ul>
                        </div>
                        <div class="row">
                            <ul class="mega-links">
                                <li>stile seal</li>
                                <li>stile seal 4</li>
                                <li>stile seal 5</li>
                                <li>stile seal 6</li>
                                <li>stile seal 8</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- section -->
        <div class="sec">
            <div class="section">
                <header>غذائيات</header>
                <div class="card1">
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="section">
                <header>غذائيات</header>
                <div class="card1">
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="section">
                <header>غذائيات</header>
                <div class="card1">
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body-section">
                        <div class="box">
                            <img
                                src="../../../../public/img/kitchen.jpg"
                                alt=""
                            />
                            <div class="box-content">
                                <div class="content">
                                    <!-- <ul class="social">
                                 <li><a href=""></a></li>
                             </ul> -->
                                    <h3 class="title">سمانة</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'visitStore',
};
</script>

<style scoped>
/* ///start slide/// */
.carouselSlide {
    margin: 10px auto;
}
.carousel-inner {
    width: 100%;
}
.carousel-control-next,
.carousel-control-prev {
    height: 50px;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
    border: 1px solid #c7c7c7;
    border-radius: 50%;
    width: 54px;
    height: 95px;
    background-color: #caabab;
    top: 250px;
    position: absolute;
}
.carousel-inner {
    background-color: #ffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
}
.socail-menu img {
    transition: 0.6s;
    cursor: pointer;
    border-radius: 250px;
    width: 25px;
    height: 30px;
}
/* end slide */
/* start profile store */
.card {
    margin: 20px auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    width: 95%;
    display: flex;
    flex: 1;
    flex-direction: row;
    background: linear-gradient(0.25turn, #bbd2c5, #536976);
    color: #fff;
    text-align: center;
    padding: 2em;
}
.profile-sidebar {
    flex: 1;
    order: 1;
    flex-direction: column;
    margin: auto;
}
.profile-sidebar img {
    border-radius: 50%;
    border: 4px solid white;
}
.social {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 125px;
    margin: 10px auto;
}
.social a {
    color: #0c505c;
    opacity: 0.6;
    font-size: 1.125rem;
    cursor: pointer;
}
.social a:hover,
.social a:focus {
    opacity: 1;
}
.profile-main {
    flex: 1;
    order: 2;
    flex-direction: column;
    margin: auto;
}
.profile-main .profile-name {
    font-size: 2rem;
    line-height: 1.1;
    letter-spacing: 1px;
    text-align: right;
}
.profile-main .profile-name:hover {
    letter-spacing: 5px;
}
.profile-body {
    margin: 20px auto;
    display: flex;
    flex: 1;
    flex-direction: row;
}
.profile-body .phone {
    flex: 1;
    order: 3;
    flex-direction: column;
    text-align: right;
}
.profile-body .phone div {
    line-height: 2.5;
}
.profile-body .week {
    flex: 1;
    order: 2;
    flex-direction: column;
}
.profile-body .week div {
    line-height: 2.5;
}
.profile-body .delivery {
    flex: 1;
    order: 1;
    flex-direction: column;
}
.profile-body .delivery div {
    line-height: 2.5;
}
.profile-footer {
    margin: 10px auto;
}
/* end profile store*/
/* start navbar */
.navbar {
    margin: 20px 20px;
    /* margin-bottom: 30%; */
}
.navbar button {
    border: none;
    border: solid #315a6e;
    background-color: #315a6e;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
}
.navbar .btn:hover .mega-box {
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    z-index: 1000;
}
.mega-box {
    position: absolute;
    background: #536976;
    width: 100%;
    left: 0;
    margin: 10px auto;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}
.mega-box .content {
    background: #536976;
    padding: 25px 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.mega-box .content .row {
    width: calc(25% - 30px);
    line-height: 45px;
}
.mega-box .content .row .mega-links {
    list-style: none;
}
.mega-box .content .row .mega-links {
    border-left: 1px solid rgba(255, 255, 255, 0.09);
}
.mega-box .content .row .mega-links li {
    padding: 0 20px;
    color: #ded9d9;
    font-size: 17px;
    display: block;
    cursor: pointer;
    transition: 0.5s ease-out;
}
.mega-box .content .row .mega-links li:hover {
    background: #bbd2c5;
}
/* end navbar store */
/* start section */
.section {
    margin: 20px;
    border: solid #fff;
}
.section header {
    border: solid #fff;
    background: linear-gradient(0.25turn, #bbd2c5, #536976);
    text-align: right;
    padding: 10px;
    font-size: 20px;
    letter-spacing: 5px;
}
.section .card1 {
    display: flex;
    gap: 20px;
    margin: 10px 20px;
    justify-content: center;
    align-items: center;
}
.section .card1 .body-section .box {
    width: 250px;
    background: #fff;
    box-shadow: 0 0 5px #bababa;
    overflow: hidden;
    position: relative;
    margin: 10px auto;
    cursor: pointer;
}
.section .card1 .body-section .box img {
    width: 100%;
    height: auto;
    display: block;
}
.section .card1 .body-section .box .box-content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.section .card1 .body-section .box .box-content::before,
.section .card1 .body-section .box .box-content::after {
    content: '';
    width: 95%;
    height: 47%;
    background: #536976;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    transition: all 0.5s;
    opacity: 0;
}
.section .card1 .body-section .box .box-content::before {
    top: -20%;
}
.section .card1 .body-section .box .box-content::after {
    bottom: -20%;
}
.section .card1 .body-section .box:hover .box-content::before {
    top: 3%;
    opacity: 0.8;
}
.section .card1 .body-section .box:hover .box-content::after {
    bottom: 3%;
    opacity: 0.8;
}
.section .card1 .body-section .box .box-content .content {
    width: 100%;
    height: 45px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    transform: rotate(90deg);
    opacity: 0;
    transition: all 0.5s;
}
.section .card1 .body-section .box:hover .box-content .content {
    opacity: 1;
    transform: rotate(0deg);
}
.section .card1 .body-section .box:hover .box-content .content .title {
    color: #fff;
    font-size: 22px;
    letter-spacing: 5px;
    text-transform: capitalize;
}
/*  */
</style>

<style lang="scss" scoped>
.board {
    // margin-top: 20px;
    // margin-bottom: 20px;
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
/* ______________________________________________________________________________ */
$primary: #2c3e50;
$secondary: #000000ad;
$white: #fff;
$gray: #ffffff;
.form__group {
    position: relative;
    padding: 15px 0 0;
    margin: auto;
    margin-top: 10px;
    width: 50%;
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
