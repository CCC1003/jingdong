
<template>
  <div class="jd-category-tab" @mousewheel.prevent>
    <div style="overflow: auto; height: 607px;" class="jd-cate">
      <scroll class="content" ref="scroll" :probe-type="3" pull-up-load="true">
        <ul>
          <li class="cur" 
          :class="{active: index === currentIndex}"
           v-for="(item,index) in catetab" 
           @click="itemClick(index)">
            <a href="javascript:;">{{item}}</a>
          </li>
        </ul>
      </scroll>
    </div>
  </div>
</template>
  
<script>
import Scroll from '@/components/common/scroll/Scroll.vue';
export default {
  name: 'CateList',
  components: {
    Scroll
  },
  props: {
    catetab: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex=index;
      this.$emit('tabClick',index)
    }
  }
}
</script>
  
<style scoped>
.content {
  height: 607px;
}
.jd-cate::-webkit-scrollbar{
  display: none;
}
.jd-category-tab {
  float: left;
  min-width: 76px;
  width: 76px;
  height: auto;
  /* overflow-y: auto; */
  min-height: 100%;
  width: 86px;
  background: #f8f8f8;
}

.jd-category-tab ul {
  width: 85px;
}

.jd-category-tab li {
  height: 46px;
  line-height: 46px;
  background: #f8f8f8;
  text-align: center;
  position: relative;
}

.jd-category-tab a {
  display: block;
  width: 100%;
  height: 46px;
  line-height: 46px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.jd-category-tab .active {
  background: #fff;
}
.active a {
  color: #e93b3d;
}
</style>