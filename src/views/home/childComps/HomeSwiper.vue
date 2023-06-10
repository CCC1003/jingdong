  <template>
  <swiper class="swiper-s">
    <swiper-item v-for="item in banners" class="swiper-item">
      <a href="javascript:;" class="slide-a">
      <img :src="item.image" alt=""></a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper,SwiperItem } from '@/components/common/swiper';
export default {
name: 'HomeSwiper',
props:{
  banners:{
    type:Array,
    default() {
      return []
    }
  }
},
components:{
  Swiper,
  SwiperItem
},

}
</script>

<style>
.swiper-s {
    position: relative;
    top: 43px;
    height: 134px;
  }
.slide-a {
    display: block;
    overflow: hidden;
    width: calc(100% - 1.25rem);
    height: 134px;
    margin: 0 auto;
    /* top: 2.25rem; */
    position: relative;
    border-radius: 0.35rem;
}
.swiper-item {
  height: 100%;
  position: relative;
}
</style>