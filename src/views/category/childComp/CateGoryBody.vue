<template>
  <div class="category-viewport">
    <cate-list :catetab="catetab" @tabClick="tabClick" ref="tabControl"></cate-list>
    <cate-goods :goods="showGoods"
    ></cate-goods>

  </div>
</template>

<script>
import CateGoods from '@/components/content/category/CateGoods.vue';
import CateList from '@/components/content/category/CateList.vue';

export default {
  name: 'CateGoryBody',
  components: {
    CateGoods,
    CateList
  },
  data() {
    return {
      catetab: ['热门推荐', '手机数码', '京东超市', '家用电器',
        '电脑办公', '玩具乐器', '家居厨具', '家具家装', '男装', '女装',
        '女鞋', '美妆护肤', '医药健保', '酒水饮料', '运动户外', '汽车生活', '礼品鲜花'],
        currentNum:'0',
        goods:{
          '0':{list:[
            {
              img:require('../../../assets/img/category/0/1.jpg'),
              title:'空调'
            },
            {
              img:require('../../../assets/img/category/0/2.jpg'),
              title:'冰箱'
            },
            {
              img:require('../../../assets/img/category/0/3.png'),
              title:'电脑'
            },
            {
              img:require('../../../assets/img/category/0/4.png'),
              title:'手机'
            },
            {
              img:require('../../../assets/img/category/0/5.jpg'),
              title:'全面屏手机'
            },
            {
              img:require('../../../assets/img/category/0/6.jpg'),
              title:'保健品'
            },
            {
              img:require('../../../assets/img/category/0/7.jpg'),
              title:'游戏手机'
            },
            {
              img:require('../../../assets/img/category/0/8.jpg'),
              title:'口罩'
            },
            {
              img:require('../../../assets/img/category/0/9.jpg'),
              title:'驱蚊用品'
            },
            {
              img:require('../../../assets/img/category/0/10.jpg'),
              title:'电磁炉'
            },
            {
              img:require('../../../assets/img/category/0/11.jpg'),
              title:'电热水壶'
            },
            {
              img:require('../../../assets/img/category/0/12.jpg'),
              title:'数据线'
            },
            {
              img:require('../../../assets/img/category/0/13.jpg'),
              title:'图书'
            },
            {
              img:require('../../../assets/img/category/0/14.jpg'),
              title:'美妆护肤'
            },
            {
              img:require('../../../assets/img/category/0/15.jpg'),
              title:'除菌液'
            },
            {
              img:require('../../../assets/img/category/0/16.jpg'),
              title:'休闲零食'
            },
            {
              img:require('../../../assets/img/category/0/17.jpg'),
              title:'充电包'
            },
            {
              img:require('../../../assets/img/category/0/18.jpg'),
              title:'体温计'
            },
            {
              img:require('../../../assets/img/category/0/19.jpg'),
              title:'投影机'
            },
            {
              img:require('../../../assets/img/category/0/20.jpg'),
              title:'游戏机'
            },
          ]},
          '1':{list:[
            {
              img:require('../../../assets/img/category/0/1.jpg')
            }
          ]},
          '2':{list:[
            {
              img:require('../../../assets/img/category/0/2.jpg')
            }
          ]},
          '3':{list:[
            {
              img:require('../../../assets/img/category/0/3.png')
            }
          ]},
          '4':{list:[
            {
              img:require('../../../assets/img/category/0/4.png')
            }
          ]},
          '5':{list:[
            {
              img:require('../../../assets/img/category/0/5.jpg')
            }
          ]},
          '6':{list:[
            {
              img:require('../../../assets/img/category/0/6.jpg')
            }
          ]},
          '7':{list:[
            {
              img:require('../../../assets/img/category/0/7.jpg')
            }
          ]},
          '8':{list:[
            {
              img:require('../../../assets/img/category/0/8.jpg')
            }
          ]},
          '9':{list:[
            {
              img:require('../../../assets/img/category/0/9.jpg')
            }
          ]},
          '10':{list:[
            {
              img:require('../../../assets/img/category/0/10.jpg')
            }
          ]},
          '11':{list:[
            {
              img:require('../../../assets/img/category/0/11.jpg')
            }
          ]},
          '12':{list:[
            {
              img:require('../../../assets/img/category/0/12.jpg')
            }
          ]},
          '13':{list:[
            {
              img:require('../../../assets/img/category/0/13.jpg')
            }
          ]},
          '14':{list:[
            {
              img:require('../../../assets/img/category/0/14.jpg')
            }
          ]},
          '15':{list:[
            {
              img:require('../../../assets/img/category/0/15.jpg')
            }
          ]},
          '16':{list:[
            {
              img:require('../../../assets/img/category/0/16.jpg')
            }
          ]}
        }
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentNum].list
    }
  },
  methods :{
    tabClick(index) {
      console.log(this.catetab.length);
      for(let i=0;i<this.catetab.length;i++){
        if(index===i){
          this.currentNum=index
          break
        }
      }
      this.$refs.tabControl.currentIndex = index;
    }
  }
}
</script>

<style scoped>
.category-viewport {
  height: auto;
  min-height: 100%;
  margin-top: 45px;
}
</style>