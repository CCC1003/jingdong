  <template>
    <tab-bar>
      <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
      </tab-bar-item>
      <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.png" alt="">
      </tab-bar-item>
      <tab-bar-item path="/user">
      <img slot="item-icon" src="~assets/img/tabbar/user.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/user_active.png" alt="">      
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar.vue';
  import TabBarItem from '@/components/common/tabbar/TabBarItem.vue';
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
}
</script>

<style>
</style>