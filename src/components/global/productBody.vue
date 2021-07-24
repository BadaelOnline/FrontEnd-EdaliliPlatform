<template>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="" class="image">
                    <img
                        class="pic-1"
                        src="../../../public/img/pro1.png"
                        alt=""
                    />
                    <img
                        class="pic-2"
                        src="../../../public/img/pro1-1.png"
                        alt=""
                    />
                </a>
                <ul class="social">
                    <li><i class="fa fa-search"></i></li>
                    <li><i class="fa fa-heart"></i></li>
                    <li><i class="fa fa-shopping-cart"></i></li>
                    <li><i class="fa fa-link"></i></li>
                </ul>
            </div>
            <div class="product-content">
                <h3 class="title">{{ name }}</h3>
                <p>
                    {{ short_des }}
                </p>
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                </ul>
                <!-- <div class="avilble">
                    <div>متوفر في {{ avalibleStore }} متاجر</div>
                    <span class="fa fa-check-circle"></span>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productBody',
    props: ['id', 'name', 'image', 'short_des', 'long_des', 'store'],
};
</script>

<style scoped>
.products .container {
    align-items: center;
    justify-content: center;
    margin: auto;
}
.products .container .product-grid {
    margin: 24px;
    margin-top: 24px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 #fff;
    transition: 0.6s ease-out;
}
.products .container .product-grid:hover {
    box-shadow: 14px 11px 0 #4a6f81;
}
.products .container .product-grid .product-image {
    position: relative;
    overflow: hidden;
    transition: 0.5s all;
}
.products .container .product-grid .product-image .image {
    display: block;
}
.products .container .product-grid .product-image img {
    width: 100%;
    height: 50%;
}
.products .container .product-grid .product-image .pic-2 {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    transition: 0.5s all;
}
.products .container .product-grid .product-image .pic-1 {
    opacity: 1;
    transition: 0.5s all;
}
.products .container .product-grid:hover .product-image .pic-1 {
    opacity: 0;
}
.products .container .product-grid:hover .product-image .pic-2 {
    opacity: 1;
}
.products .container .product-grid .product-image .social {
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    bottom: 10px;
    right: 0;
}
.products .container .product-grid .product-image .social li {
    margin: 0 0 5px;
    transform: translateX(100px);
    transition: 0.5s all;
}
.products .container .product-grid:hover .product-image .social li {
    transform: translateX(0);
}
.products .container .product-grid .product-image .social li i {
    color: #666;
    background-color: #fff;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    width: 40px;
    display: block;
    transition: 0.5s all;
}
.products .container .product-grid .product-image .social li i:hover {
    color: #fff;
    background-color: #4a6f81;
}
.products .container .product-grid .product-content {
    padding: 5px 10px;
    display: block;
    /* display: grid; */
    /* justify-content: space-between; */
    min-height: 150px;
}
.products .container .product-grid .product-content .title {
    font-size: 15px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin: 0 0 7px;
}
.products .container .product-grid .product-content .title:hover {
    color: #315a6e;
}
.products .container .product-grid .product-content p {
    font-size: 15px;
    margin: 0 0 7px;
}
.products .container .product-grid .product-content .rating li {
    color: #ffd200;
    font-size: 14px;
    display: inline-block;
}
.products .container .product-grid .product-content .rating {
    justify-content: center;
    align-items: center;
    padding: 0 10px;
}
.avilble {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.avilble div {
    font-size: 14px;
}
.avilble span {
    color: #19e653;
}
</style>
