  <template>
  <nav-mall>
    <nav-mall-item v-for="item in malls" >
      <img :src="item.image" alt="" class="item-img" slot="item-image">
      <span class="item-title" slot="item-title">{{item.title}}</span>
    </nav-mall-item>
  </nav-mall>
</template>

<script>
import NavMall from '@/components/content/navmall/NavMall.vue';
import NavMallItem from '@/components/content/navmall/NavMallItem.vue';
export default {
  name: 'HomeNavMall',
  props:{
    malls:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    NavMall,
    NavMallItem
  }
}
</script>

<style scoped>
.item-img {
  width: 2.42rem;
  margin-top: 0.5rem;
}

.item-title {
  display: block;
  margin-top: 0.3rem;
  font-size: .6rem;
  color: #666;
}

</style>