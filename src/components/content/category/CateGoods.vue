<template>
  <div @mousewheel.prevent class="jd-category-content">
    <div class="jd-category-content-wrapper">
      <div id="branchList">
        <div class="jd-category-div">
          <scroll class="content" ref="scroll" :probe-type="3" pull-up-load="true">
          <ul class="jd-category-style-1">
            <li v-for="item in goods">
              <a href="javascript:;">
                <img :src="item.img" alt="">
                <span>{{item.title}}</span>
              </a>
            </li>
          </ul>
        </scroll>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
    import Scroll from '@/components/common/scroll/Scroll.vue';
  export default {
  name: 'CateGoods',
  components:{
    Scroll
  },
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  }
  }
  </script>
  
  <style scoped>
    .content {
  height: 607px;
}
    .jd-category-content {
    height: auto;
    min-height: 100%;
    width: 100%;
    font-size: 12px;
    color: #252525;
    background-color: #fff;
}
.jd-category-content .jd-category-content-wrapper {
    margin-left: 86px;
    overflow: hidden;
    height: 607px;
}
.jd-category-content #branchList {
    overflow: hidden;
    padding-bottom: 10px;
}
.jd-category-content .jd-category-div {
    display: block;
    margin: 19px 7px 0;
}
.jd-category-content .jd-category-style-1 {
    border: 0;
    font-size: 0;
    padding: 7px 10px 0;
    overflow: hidden;
    margin-top: 9px;
    background-color: #fff;
}
.jd-category-style-1 li {
    width: 32.8%;
    float: left;
    text-align: center;
}
.jd-category-style-1 a {
    text-decoration: none;
    color: #252525;
}
 .jd-category-style-1 img {
    width: 70px;
    height: 70px;
    border: 0;
} 
.jd-category-style-1 span {
    color: #333;
    height: 35px;
    margin-top: 2px;
    -webkit-box-pack: start;
    font-size: 12px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    -webkit-box-align: center;
    z-index: 2;
    position: relative;
}
  </style>