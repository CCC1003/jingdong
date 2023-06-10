<template>
  <div class="floor-container">
    <ul class="seckill-new-list">
      <li class="seckill-new-item" v-for="item in skgoods">
        <div class="seckill-item-img">
          <a href="javascript:;" class="seckill-new-link">
            <img :src="item.image" alt="">
          </a>
        </div>
        <div class="seckill-item-price"> 
          <span class="seckill-new-price">
            <em>￥</em>
          <span class="j_init_price">{{item.price}}</span>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FloorContainer',
  props:{
    skgoods:{
      type:Array,
      default() {
      return []
    }
    }
  }
}
</script>

<style>
.floor-container {
  overflow-x: scroll;
  overflow-y: hidden;
  width: calc(100% - 0.8rem);
  margin: 0 auto;
  font-size: 0;
  overflow: auto;
  padding: 0 1px;
}
.floor-container::-webkit-scrollbar{
	display: none;
}
.seckill-new-list {
  position: relative;
  background-color: #fff;
  width: 609.333px;
  overflow-y: hidden;
}
.seckill-new-item {
  margin-top: 0.62rem;
  margin-bottom: 0.62rem;
    float: left;
}
.seckill-item-img, .seckill-item-price {
    width: 100%;
    padding: 0 0.062rem;
}
.seckill-item-price {
    margin: 0 auto;
    text-align: center;
}
.seckill-new-link {
    display: block;
    position: relative;
    width: 56px;
}
.floor-container img {
    width: 100%;
    height: auto;
    overflow: hidden;
    min-height: 1px;
    min-width: 1px;
}
.seckill-item-price {
    margin: 0 auto;
    text-align: center;
    width: 100%;
    padding: 0 0.05rem;
}
.seckill-new-price {
    margin-top: 0.5rem;
    display: block;
    color: #f2270c;
    font-size: .65rem;
    line-height: .6rem;
    height: 0.6rem;
    text-align: center;
}
.seckill-new-price em {
    font-size: 11px;
    padding-right: 2px;
    font-style:normal;
}
</style>