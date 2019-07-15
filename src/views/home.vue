<template>
  <div id="home">
    <navigator v-bind:naviList="naviList"></navigator>
    <router-view />
  </div>
</template>

<script>
import Navigator from '../components/home/navigator'

export default {
  name: 'home',
  components: {
    navigator: Navigator
  },
  data () {
    return {
      naviList: [
        {
          id: 0,
          title: '快速入坑',
          path: '/home/'
        },
        {
          id: 1,
          title: '成员信息',
          path: '/home/info'
        },
        {
          id: 2,
          title: '视频快播',
          path: '/home/videos'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  #home {
    width: 100%;
    height: 100%;
  }
  .top-navigator {
    background-color: black;
    opacity: 0.8;
  }
</style>
