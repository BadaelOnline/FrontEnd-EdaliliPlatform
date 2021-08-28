<template>
 <div v-if="currentTime" class="count-left">
					<h2>Hurry up</h2>
					<p>Offers end in:</p>		
                    </div>
    <div class="count-right">
      	<span v-if="days" class="counter c-1">{{ days }}</span>
        <span v-if="hours" class="counter c-2">{{ hours || formatTime }} </span>
        <span v-if="currentTime" class="counter c-3">{{ minutes || formatTime }}</span>
        <span v-if="currentTime" class="counter c-4">{{ seconds || formatTime }}</span>
     
    <div class="vald" v-if="!currentTime">
     Sorry Time's Offres Up!
    </div>
   </div>
</template>
<style scoped>
.vald{
    font-weight: bold;
    font-size: 20px;
    opacity: .7;
}

.parent .right .offer-details .count-left{
    float: left;
    width: 29%;
}


.parent .right .offer-details .count-left h2{
    font-weight: bold;
}
.parent .right .offer-details .count-right{
    float: right;
    width: 71%;
    display: flex;
    justify-content: space-around;
}
.parent .right .offer-details .count-right .counter{
    position: relative;
    background-color:#ebebeb;
    border-radius: 50%;
    padding: 0px 10px;
    height: 40px;
    display: grid;
    align-content: center;
    font-weight: bold;
}
.parent .right .offer-details .count-right .counter::after{
    font-size: 10px;
    opacity: .7;
    font-size: 10px;
    opacity: .7;
    position: absolute;
    bottom: -20px;
}
.parent .right .offer-details .count-right .c-1::after{
    content: "DAYS";
    left: 3px;
}
.parent .right .offer-details .count-right .c-2::after{
    content: "HOURS";
    left: 0;
}
.parent .right .offer-details .count-right .c-3::after{
    content: "MINS";
    left: 3px;
}
.parent .right .offer-details .count-right .c-4::after{
    content: "SECS";
    left: 3px;
}
</style>
<script>
export default {
  props: {
    deadline: {
      type: String,
      required: true, 
    },
    speed: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      currentTime: Date.parse(this.deadline) - Date.parse(new Date())
    };
  },
  mounted() {
    setTimeout(this.countdown, 1000);
  },
  computed: {
    seconds() {
      return Math.floor((this.currentTime / 1000) % 60);
    },
    minutes() {
      return Math.floor((this.currentTime / 1000 / 60) % 60);
    },
    hours() {
      return Math.floor((this.currentTime / (1000 * 60 * 60)) % 24);
    },
    days() {
      return Math.floor(this.currentTime / (1000 * 60 * 60 * 24));
    }
  },
  filters: {
    formatTime(value) {
      if (value < 10) {
        return "0" + value;
      }
      return value;
    }
  },
  methods: {
    countdown() {
      this.currentTime = Date.parse(this.deadline) - Date.parse(new Date());
      if (this.currentTime > 0) {
        setTimeout(this.countdown, this.speed);
      } else {
        this.currentTime = null;
      }
    }
  }
}
</script>