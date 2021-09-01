<template>
    <div>
      
    </div>
</template>

<script>
// import { mapState } from 'vuex';
// import data from '../../../jeson/data1';
// import axios from 'axios';
export default {
    name: 'visitDoctor',
    props: ['id'],
    data() {
        return {
      
            // doctor: data.doctor,
        };
    },
    computed: {
        // ...mapState(['doctor']),
    },
    mounted() {
        // this.$store.dispatch('loadDoctor', this.id);
    },

};
</script>

<style scoped>

</style>
