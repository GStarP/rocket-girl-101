<template>
  <div id="home-index">
    <!-- 替换成Banner -->
    <img src="../../../static/images/rocket-girl-1.jpg"/>
    <div class="feature-wrapper">
      <feature-card :naviUrl="naviList[0]">
        <template v-slot:icon>
          <i class="fa fa-rocket fa-4x"></i>
        </template>
        <template v-slot:title>
          火箭少女101
        </template>
        <template v-slot:content>
          这个名字代表着这十一个女孩拥有无与伦比的爆发力和能量，能够让自己的梦想飞向太空
        </template>
      </feature-card>
      <feature-card :naviUrl="naviList[1]">
        <template v-slot:icon>
          <i class="fa fa-music fa-4x"></i>
        </template>
        <template v-slot:title>
          唱跳俱佳
        </template>
        <template v-slot:content>
          这里有实力Vocal，也有灵魂Dancer，更有霸气Rapper......总而言之，入股不亏！
        </template>
      </feature-card>
      <feature-card :naviUrl="naviList[2]">
        <template v-slot:icon>
          <i class="fa fa-smile-o fa-4x"></i>
        </template>
        <template v-slot:title>
          沙雕少女
        </template>
        <template v-slot:content>
          年纪轻轻的小妹妹们经常会有很多诡异行为and神奇脑回路，是想笑死我好继承我的祖传代码吗
        </template>
      </feature-card>
      <feature-card :naviUrl="naviList[3]">
        <template v-slot:icon>
          <i class="fa fa-tree fa-4x"></i>
        </template>
        <template v-slot:title>
          战狼女团
        </template>
        <template v-slot:content>
          少女们在大团综中过沙漠攀雪山，那坚强的意志和横冲直撞的气势根本不是一个女团吧！战狼男团冲鸭！
        </template>
      </feature-card>
    </div>
  </div>
</template>

<script>
import FeatureCard from '../home/index/feature-card'

export default {
  name: 'home-index',
  components: {
    'feature-card': FeatureCard
  },
  data () {
    return {
      naviList: [
        'https://v.qq.com/detail/7/78773.html',
        'https://v.qq.com/detail/f/f8w364b0glycwz3.html',
        'https://v.qq.com/detail/8/81883.html',
        'https://v.qq.com/detail/8/82163.html'
      ]
    }
  }
}
</script>

<style lang="scss">
  #home-index {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
    }
  }
  .feature-wrapper {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-bottom: 8px;
  }
</style>
