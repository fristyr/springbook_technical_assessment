<template>
  <div class="content__time timeline">
    <div class="timeline__block value">
      <span class="value_first">{{theTime.days}}</span>
      <span class="value_second">Days</span>
    </div>
    <div class="timeline__block">
      <span class="value_first">{{theTime.hours}}</span>
      <span class="value_second">Hour</span>
    </div>
    <div class="timeline__block">
      <span class="value_first">{{theTime.minutes}}</span>
      <span class="value_second">Minutes</span>
    </div>
    <div class="timeline__block">
      <span class="value_first">{{theTime.seconds}}</span>
      <span class="value_second">Second</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deadline: "Jan 9, 2020 16:00:00",
      days: "HI",
      hours: "TH",
      minutes: "ER",
      seconds: "E!",
      expired: false
    };
  },

  computed: {
    theTime() {
      const ctx = this;
      // eslint-disable-next-line
      const x = setInterval(function() {
        const countDownDate = new Date(ctx.deadline).getTime(),
          now = new Date().getTime(),
          diff = countDownDate - now,
          tdays = Math.floor(diff / (1000 * 60 * 60 * 24)),
          thours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          tseconds = Math.floor((diff % (1000 * 60)) / 1000);
        ctx.days = tdays < 10 ? "0" + tdays : tdays;
        ctx.hours = thours < 10 ? "0" + thours : thours;
        ctx.minutes = tminutes < 10 ? "0" + tminutes : tminutes;
        ctx.seconds = tseconds < 10 ? "0" + tseconds : tseconds;
        if (diff < 0) {
          clearInterval(x);
          ctx.expired = true;
        }
      }, 1000);
      return {
        days: ctx.days,
        hours: ctx.hours,
        minutes: ctx.minutes,
        seconds: ctx.seconds
      };
    }
  }
};
</script>

<style  scoped>
.timeline {
  display: flex;
  justify-content: space-between;
  max-width: 550px;
  margin: 0 auto;
  margin-bottom: 2em;
}
.timeline__block {
  display: flex;
  flex-direction: column;
  text-align: center;
  text-align: center;
}
.value_first {
  font-weight: 200;
  font-size: 2em;
  color: #fff;
  text-transform: uppercase;
}
.value_second {
  font-weight: 500;
  font-size: 1em;
  color: #fff;
  text-transform: uppercase;
}
</style>