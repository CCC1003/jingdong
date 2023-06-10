<template>
  <div class="title-wrap">
    <a href="javascript:;" class="seckill-left-link">
      <div class="seckill-tit-img">京东秒杀</div>
      <div class="seckill-timer-wrap">
        <div class="seckill-nth">
          {{time}}
        </div>
        <div class="seckill_timer">
          <div class="seckill-time j_sk_h">{{hour}}</div>
          <span class="seckill-time-separator">:</span>
          <div class="seckill-time j_sk_m">{{minute}}</div>
          <span class="seckill-time-separator">:</span>
          <div class="seckill-time j_sk_s">{{second}}</div>
        </div>
      </div>
    </a>
    <a href="javascript:;" class="seckill-more-link">
      爆款轮番秒
      <i class="seckill-more-icon"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'FloorTitle',
  data(){
    return {
      date:new Date(),
      hours:this.time-new Date().getHours()-1,
      minutes:60-new Date().getMinutes()-1,
      seconds:60-new Date().getSeconds(),
 
    }
  },
  mounted() {
    this.add();
  },
  props:{
    time:Number
  },
  methods:{
    num(n) {
      return n < 10 ? '0' + n : ''+n
    },
    add() {
      let time = window.setInterval(()=>{
        if(this.hours !== 0&&this.minutes === 0&&this.seconds === 0){
          this.hours-=1;
          this.minutes=59;
          this.seconds=59;
        }else if(this.hours === 0&&this.minutes !== 0&&this.seconds===0){
          this.minutes-=1;
          this.seconds=59;
        }else if(this.hours === 0&& this.minutes ===0 &&this.seconds===0){
          this.seconds = 0
          window.clearInterval(time)
        }else if(this.hours!== 0&&this.minutes!==0&&this.seconds===0){
          this.minutes-=1;
          this.seconds=59;
        }else {
          this.seconds-=1;
        }
      },1000)
    }
  },
  watch:{

    second:{
      handler(newVal) {
        this.num(newVal)
      }
    },
    minute:{
      handler(newVal) {
        this.num(newVal)
      }
    },
    hour: {
      handler(newVal){
        this.num(newVal)
      }
    }
  },
  computed :{
    second() {
      return this.num(this.seconds)
    },
    minute() {
      return this.num(this.minutes)
    },
    hour() {
      return this.num(this.hours)
    }
  }
}
</script>

<style scoped>
.title-wrap {
  background: url(~assets/img/home/seckill/bac.png) no-repeat;
  background-size: contain;
  height: 2.1rem;
  line-height: 2.1rem;
  vertical-align: middle;
}

.seckill-left-link {
  display: inline-block;
  float: left;
}

.seckill-tit-img {
  float: left;
  display: inline-block;
  height: 1.66rem;
  margin-top: 0.5rem;
  margin-right: 0.31rem;
  margin-left: 0.6rem;
  font-family: PingFangSC-Semibold;
  font-size: 0.9rem;
  color: #333;
  letter-spacing: 0;
  line-height: 0.9rem;
}

.seckill-timer-wrap {
  display: inline-block;
  border-radius: 0.4rem;
  height: 1.1rem;
  line-height: 1.1rem;
  font-size: 0;
  float: left;
  margin-top: 0.5rem;
  vertical-align: middle;
}

.seckill-nth {
  height: 100%;
  border-radius: 0.4rem;
  font-size: .85rem;
  color: #ff2727;
  letter-spacing: 0;
  padding-right: 0.31rem;
  padding-left: 0.31rem;
  float: left;
  position: relative;
  left: -1px;
  margin-right: 0.25rem;
  line-height: 1.2;
}

.seckill-nth::after {
  height: 1.08rem;
  width: 1.27rem;
  content: "";
  display: inline-block;
  vertical-align: middle;
  background-image: url(~assets/img/home/seckill/bac2.png);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
}

.seckill_timer {
  margin-right: 0.2rem;
  height: 100%;
  float: right;
}

.seckill-time {
  width: 0.92rem;
  color: #fff;
  background-image: linear-gradient(-140deg, #ff6152, #fa2c19);
  background-color: #fa2c19;
  border-radius: 0.2rem;
  text-align: center;
  font-weight: 400;
  float: left;
  display: inline-block;
  height: 100%;
  line-height: 1.4;
  font-size: .6rem;
  font-family: PingFangSC-Regular;
  letter-spacing: 0;
}
.seckill-time-separator {
    float: left;
    display: inline-block;
    height: 100%;
    line-height: 1.4;
    font-size: .6rem;
    text-align: center;
    font-family: PingFangSC-Regular;
    color: #f2270c;
    letter-spacing: 0;
    font-weight: 700;
}
.seckill-more-link {
    display: inline-block;
    color: #f23030;
    float: right;
    font-size: .6rem;
    text-align: right;
    position: relative;
    padding-right: 1.4rem;
}
.seckill-more-icon {
    display: inline-block;
    width: 0.68rem;
    height: 0.68rem;
    background: url(~assets/img/home/seckill/title_more.png) no-repeat;
    background-size: cover;
    position: absolute;
    right: 0.491rem;
    top: 0.61rem;
}
</style>