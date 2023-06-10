<template>
  <div class="love-floor">
    <div class="m_webcomponent_recommend">
      <div class="feeds">
        <div class="feeds_col_left">
          <goods-list-item-left v-for="item in goodsleft">
            <a href="javascript:;" slot="goods_left" class="goods">
              <div class="goods_img">
                <img :src="item.img" alt="">
                <div class="goods-tags"></div>
              </div>
              <div class="goods_info">
                <div class="goods_name">
                  {{item.name}}
                </div>
                <div class="goods_row">
                  <div class="goods_price">
                    ￥
                    <em class="goods_price-int">{{item.price}}</em>
                    .00
                  </div>
                </div>
                <div class="goods_row_bottom">
                  <div class="goods-tags__item ">
                    <div class="goods-tags__item--text">
                      {{item.tag}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="black_point"></div>
              <div class="feed_back">看相似</div>
            </a>
          </goods-list-item-left>
        </div>
        <div class="feeds_col_right">
          <goods-list-item-right v-for="item in goodsright">
            <a href="javascript:;" slot="goods_right" class="goods">
              <div class="goods_img">
                <img :src="item.img" alt="">
                <div class="goods-tags"></div>
              </div>
              <div class="goods_info">
                <div class="goods_name">
                  {{item.name}}
                </div>
                <div class="goods_row">
                  <div class="goods_price">
                    ￥
                    <em class="goods_price-int">{{item.price}}</em>
                    .00
                  </div>
                </div>
                <div class="goods_row_bottom">
                  <div class="goods-tags__item ">
                    <div class="goods-tags__item--text">
                      {{item.tag}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="black_point"></div>
              <div class="feed_back">看相似</div>
            </a>
          </goods-list-item-right>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GoodsListItemLeft from './GoodsListItemLeft.vue';
  import GoodsListItemRight from './GoodsListItemRight.vue';
export default {
  name: 'GoodsList',
  props:{
    goodsleft:{
      type:Array,
      default() {
      return []
    }
    },
    goodsright:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components :{
    GoodsListItemLeft,
    GoodsListItemRight
  }
}
</script>

<style scoped>
.love-floor {
  background-color: #f7f7f7;
  overflow: hidden;
  width: 100%;
}

.m_webcomponent_recommend {
  background-color: #f7f7f7;
}

.feeds {
  display: flex;
  flex-wrap: wrap;
  padding: 0.31rem;
}
.goods {
    display: block;
    width: 100%;
    background: #ffffff;
    border-radius: 0.45rem;
    overflow: hidden;
    position: relative;
}
.feeds_col_left,
.feeds_col_right {
  width: 50%;
  box-sizing: border-box;
}
.goods_img {
  background: #fff url('~assets/img/home/goods/bac.png');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 10.6rem;
    width: 10.6rem;
    height: 10.6rem;
    margin-bottom: 0.31rem;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
}
.goods_img img {
  display: block;
    height: 100%;
    margin: 0 auto;
}
.goods-tags {
  position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
.goods_info {
  padding: 0 0.618rem 0.618rem;
}
.m_webcomponent_recommend .goods_name {
    text-align: left;
    line-height: 1.1rem;
    height: 2.1rem;
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    word-break: break-all;
    -webkit-box-orient: vertical;
}
.goods_row {
    display: flex;
    height: 2rem;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
}
.m_webcomponent_recommend .goods_price {
    display: inline-block;
    font-size: 0.9rem;
    line-height: 2.5rem;
    color: #ff4142;
}
.m_webcomponent_recommend .goods_price-int {
    font-size: 1.4rem;
    font-style:normal;
}
.goods_row_bottom {
  width: calc(100% - 3rem);
    height: 1.2rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
}
.m_webcomponent_recommend .goods-tags__item {
    margin-right: 0.031rem;
    max-width: 100%;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.6rem;
}
.m_webcomponent_recommend .goods .feed_back {
    position: absolute;
    right: 0.6rem;
    bottom: 0.6rem;
    background: #f2f2f2;
    color: #262626;
    font-size: 0.55rem;
    width: 3.1rem;
    height: 1.2rem;
    border-radius: 0.5rem;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    }

</style>