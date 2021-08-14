<template>
<h1>
    instrc
</h1>
 <!-- <article id="filters">
    <section id="price">
        <p id="fHeader">Price</p>
        <input type="checkbox" name="price" value="p1" id="p1" />aaaa
        <br/>
        <input type="checkbox" name="price" value="p2" id="p2" />bbbbbb
        <br/>
        <input type="checkbox" name="price" value="p3" id="p3" />ccccccc
        <br/>
        <input type="checkbox" name="price" value="p4" id="p4" />dddddd
        <br/>
        <input type="checkbox" name="price" value="p5" id="p5" />eeeeee
        <br/>
        <input type="checkbox" name="price" value="p6" id="p6" />fffff
        <br/>
        <input type="checkbox" name="price" value="p7" id="p7" />ggggg
        <br/>
    </section>
    <section id="category">
        <p id="fHeader">Category</p>
        <input type="checkbox" name="category" value="instruments" id="instruments" />Instruments
        <br/>
        <input type="checkbox" name="category" value="sheetmusic" id="sheet-music" />Sheet Music
        <br/>
        <input type="checkbox" name="category" value="accessories" id="accessories" />Accessories
        <br/>
    </section>
</article>
<article id="products">
    <ul id="productList">
        <li data-price="p5" data-category="instruments">aaaa</li>
        <li data-price="p7" data-category="instruments">bbbbb</li>
        <li data-price="p6" data-category="instruments">ccccc</li>
        <li data-price="p3" data-category="instruments">dddeeeffff</li>
    </ul>
</article> -->
</template>

<script>
// import $ from 'jquery';
export default {
    name: 'instrc',
    /*mounted(){
        $(document).ready(function () {

    $('#filters :checkbox').click(function () {
        if ($('input:checkbox:checked').length) {
            $('li').hide();
            $('input:checkbox:checked').each(function () {
                $('li[data-' + $(this).prop('name') + '*="' + $(this).val() + '"]').show();
            });
        } else {
            $("li").show();
        }
    });
    
});
    }*/ 
};
</script>