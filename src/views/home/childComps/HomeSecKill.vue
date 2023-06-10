<template>
  <div class="floor-the-container">
    <div class="floor-container">
      <div class="sec_kill_floor">
        <floor-title :time="time"></floor-title>
        <floor-container :skgoods="skgoods"></floor-container>
      </div>
    </div>
  </div>

</template>

<script>
import FloorTitle from '@/components/content/seckill/FloorTitle.vue';
import FloorContainer from '@/components/content/seckill/FloorContainer.vue';
export default {
  name: 'HomeSecKill',
  components: {
    FloorTitle,
    FloorContainer
  },
  data() {
    return {
      time:new Date().getHours()+1,
      skgoods: [
        {
          image: require('../../../assets/img/home/seckill/10001.jpg'),
          price: 53.9
        },
        {
          image: require('../../../assets/img/home/seckill/10002.jpg'),
          price: 5699
        },
        {
          image: require('../../../assets/img/home/seckill/10003.jpg'),
          price: 79
        },
        {
          image: require('../../../assets/img/home/seckill/10004.jpg'),
          price: 139
        },
        {
          image: require('../../../assets/img/home/seckill/10005.jpg'),
          price: 449
        },
        {
          image: require('../../../assets/img/home/seckill/10006.jpg'),
          price: 188
        },
        {
          image: require('../../../assets/img/home/seckill/10007.jpg'),
          price: 29.9
        },
        {
          image: require('../../../assets/img/home/seckill/10008.jpg'),
          price: 1699
        },
        {
          image: require('../../../assets/img/home/seckill/10009.jpg'),
          price: 1080
        }

      ]
    }
  }
}
</script>

<style scoped>
.floor-the-container {
  position: relative;
  margin: 0.617rem;
}
.floor-container:last-child {
    border-bottom: none;
}
.floor-container {
    width: 100%;
}
.sec_kill_floor {
    box-shadow: 0 1px 1px #f2f2f2;
    background: #fff;
    border-radius: 0.6rem;
    overflow: hidden;
}
</style>