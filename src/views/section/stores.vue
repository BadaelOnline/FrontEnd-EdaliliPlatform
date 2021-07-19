<template>
    <div>
        <div class="row">
            <div class="content">
                <div class="column1">Some Text in row 3 double column 1</div>
            </div>
            <div class="column2">
                <div class="container">
                    <input type="checkbox" id="check" />
                    <label for="check" class="open"
                        ><i class="fa fa-bars"></i
                    ></label>
                    <div class="sidebar-wrapper">
                        <div class="sidebar">
                            <label for="check" class="close"
                                ><i class="fa fa-times"></i
                            ></label>
                            <nav>
                                <ul class="menu">
                                    <li>
                                        <label for="check">بقالة</label
                                        ><input type="checkbox" id="check" />
                                    </li>
                                    <li>
                                        <label for="check">بقالة</label
                                        ><input type="checkbox" id="check" />
                                    </li>
                                    <li>
                                        <label for="check">بقالة</label>
                                        <input type="checkbox" id="check" />
                                    </li>
                                    <li>
                                        <label for="check">بقالة</label>
                                        <input type="checkbox" id="check" />
                                    </li>
                                    <li>
                                        <label for="check">بقالة</label
                                        ><input type="checkbox" id="check" />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { defineAsyncComponent } from 'vue';
export default {
    name: 'stores',
    components: {
        // BodyStore: defineAsyncComponent(() =>
        //     import(`@/components/body/BodyStore.vue`)
        // ),
        // Cartmini: defineAsyncComponent(() =>
        //     import(`@/components/cart/Cartmini.vue`)
        // ),
    },
};
</script>

<style scoped>
.row {
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 95%;
}
.column2 {
    display: flex;
    margin-left: 24px;
    flex-direction: column;
    height: auto;
    flex-basis: 100%;
    flex: 1;
}
.column1 {
    background-color: blue;
    height: 100px;
}
.content {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 2;
}
</style>
