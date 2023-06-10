  <template>
<div id="home">
  <home-navbar></home-navbar>
  <home-swiper :banners="banners"></home-swiper>
  <feature-view></feature-view>
  <home-nav-mall :malls="malls"></home-nav-mall>
  <home-sec-kill></home-sec-kill>
  <goods-list :goodsleft="goodsleft" :goodsright="goodsright"></goods-list>
</div>
</template>

<script>

import HomeNavbar from './childComps/HomeNavbar.vue';
import HomeSwiper from './childComps/HomeSwiper.vue';
import FeatureView from './childComps/FeatureView.vue';
import HomeNavMall from './childComps/HomeNavMall.vue';
import HomeSecKill from './childComps/HomeSecKill.vue';
import GoodsList from '@/components/content/goods/GoodsList.vue';

export default {
name: 'Home',
components: {
  HomeNavbar,
  HomeSwiper,
  FeatureView,
  HomeNavMall,
  HomeSecKill,
  GoodsList
},
data(){
  return{
    banners:[
      {
        image:require('../../assets/img/home/swiper/1.jpg')
      },
      {
        image:require('../../assets/img/home/swiper/2.jpg')
      },
      {
        image:require('../../assets/img/home/swiper/3.jpg')
      },
      {
        image:require('../../assets/img/home/swiper/4.jpg')
      },
      {
        image:require('../../assets/img/home/swiper/5.jpg')
      },
      {
        image:require('../../assets/img/home/swiper/6.jpg')
      },
      {
        image:require('../../assets/img/home/swiper/7.jpg')
      },
      {
        image:require('../../assets/img/home/swiper/8.jpg')
      },
    ],
    malls:[
      {
        image:require('../../assets/img/home/navmall/1.png'),
        title:'京东超市'
      },
      {
        image:require('../../assets/img/home/navmall/2.png'),
        title:'数码电器'
      },
      {
        image:require('../../assets/img/home/navmall/3.png'),
        title:'京东新百货'
      },
      {
        image:require('../../assets/img/home/navmall/4.png'),
        title:'京东生鲜'
      },
      {
        image:require('../../assets/img/home/navmall/5.png'),
        title:'京东到家'
      },
      {
        image:require('../../assets/img/home/navmall/6.png'),
        title:'充值缴费'
      },
      {
        image:require('../../assets/img/home/navmall/7.png'),
        title:'附近好店'
      },
      {
        image:require('../../assets/img/home/navmall/8.png'),
        title:'领券'
      },
      {
        image:require('../../assets/img/home/navmall/9.png'),
        title:'领金贴'
      },
      {
        image:require('../../assets/img/home/navmall/10.png'),
        title:'PLUS会员'
      },
    ],
    goodsleft:[
      {
        img:require('../../assets/img/home/goods/1.dpg.webp'),
        name:'新飞燃气灶家用灶具嵌入式煤气炉灶台台式猛火煤气灶双眼灶 【升级高雅方盘】5.2kw猛火+双供气孔（天然气）',
        price:'369',
        tag:'2万+条评论'
      },
      {
        img:require('../../assets/img/home/goods/2.dpg.webp'),
        name:'飞利浦（PHILIPS） 55英寸4K超清全面屏 液晶电视 智能网络电视机 55PUF7007/T3 锐智增强 2022款',
        price:'1689',
        tag:'5000+条评论'
      },
      {
        img:require('../../assets/img/home/goods/3.dpg.webp'),
        name:'筝熙乐 葫芦丝c调降b调乐器初学者专业演奏民族乐器七孔紫竹 三音降B调【金丝楠竹双白铜】',
        price:'119',
        tag:'200+条评论'
      },
      {
        img:require('../../assets/img/home/goods/4.dpg.webp'),
        name:'礼质檀香线香观音财神供香微烟香佛礼香烛寺庙室内居家香炉 佛保平安',
        price:'69',
        tag:'8条评论'
      },
      {
        img:require('../../assets/img/home/goods/5.dpg.webp'),
        name:'史密斯60升电热水器 专利免更换镁棒 短款小尺寸 金圭内胆8年包换 速热节能 高清大屏E60VC0-B 一级能效节能',
        price:'2598',
        tag:'20万+条评论'
      },
      {
        img:require('../../assets/img/home/goods/6.dpg.webp'),
        name:'【开学季礼物必备】benken本肯男士手表男学生潮流时尚高中生运动型夜光防水石英表青少年新款礼物男表 黑壳-银刻度-黑网带',
        price:'428',
        tag:'1000+条评论'
      },
    ],
    goodsright:[
    {
        img:require('../../assets/img/home/goods/r1.dpg.webp'),
        name:'依伊纯男鞋春秋季高帮小白潮鞋2022新款潮流夏季透气休闲运动增高篮球板鞋 米色 41',
        price:'97',
        tag:'100+条评论'
      },
      {
        img:require('../../assets/img/home/goods/r2.dpg.webp'),
        name:'‼️迪士尼(Disney)中小学生1-3-6-9年级书包儿童男女孩米奇减负双肩韩版 11749小号藏青色',
        price:'119',
        tag:'100+条评论'
      },
      {
        img:require('../../assets/img/home/goods/r3.dpg.webp'),
        name:'CGVS莫代尔睡衣女夏季薄款宽松大码背心坎袖上衣居家吊带短裤套装夏天 粉色 M(建议80-100斤)',
        price:'116',
        tag:'2条评论'
      },
      {
        img:require('../../assets/img/home/goods/r4.dpg.webp'),
        name:'罗技（Logitech）MK275 键鼠套装 无线键鼠套装 办公键鼠套装 全尺寸 商务键鼠套装 带无线2.4G接收器 黑蓝色',
        price:'109',
        tag:'200条评论'
      },
      {
        img:require('../../assets/img/home/goods/r5.dpg.webp'),
        name:'小米路由器4A千兆版 双核CPU 双千兆 1200M双频无线速率 5G 家用智能路由器 四天线穿墙 双频合一 光纤适用',
        price:'129',
        tag:'2000+条评论'
      },
      {
        img:require('../../assets/img/home/goods/r6.dpg.webp'),
        name:'TCL 照明吸顶灯led卧室灯具客厅灯饰书房阳台餐厅灯薄款现代简约 皓月24瓦单色白光320*60mm适合10-15平',
        price:'49',
        tag:'2条评论'
      },
      {
        img:require('../../assets/img/home/goods/r7.dpg.webp'),
        name:'三只松鼠每日坚果炭烧腰果 坚果炒货零食特产 90g/袋',
        price:'26',
        tag:'500万+条评论'
      },
    ]
  }
}

}
</script>

<style scoped>
  #home {
    background-color: #f6f6f6;
  }
</style>