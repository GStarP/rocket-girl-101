<template>
  <div id="home-videos">
    <div class="video-origin-list">
      <div class="origin-bilibili all-center" @click="getBiliBiliVideos">
        <img src="../../../static/images/bilibili-logo.png"/>
      </div>
      <div class="origin-txsp all-center" @click="getTXSPVideos">
        <img src="../../../static/images/txsp-logo.png"/>
      </div>
      <div class="origin-youku all-center">
        <img src="../../../static/images/youku-logo.png"/>
      </div>
    </div>
    <div class="video-item-list">
      <div class="video-item-refresh" @click="refresh"><i class="fa fa-refresh fa-1x"></i>&nbsp;点击刷新</div>
      <video-item
        v-for="video of currentPageVideos"
        :key="video.id"
        :info="video"
      ></video-item>
      <div class="page-btn-list">
        <!-- Q:自定义组件不能用@click绑定点击事件!!! -->
        <div
          v-for="i in pages"
          :key="i"
          @click="swiftPage(i)">
          <page-btn :key="i" :pageIndex="i"></page-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BilibiliVideos from '../../mock/videos-bilibili-db'
import TXSPVideos from '../../mock/videos-txsp-db'
import VideoItem from '../home/videos/video-item'
import PageBtn from '../home/videos/page-btn'

export default {
  name: 'home-videos',
  components: {
    'video-item': VideoItem,
    'page-btn': PageBtn
  },
  data () {
    return {
      pageNum: 0,
      pageSize: 6,
      videoList: [],
      currentPageVideos: [],
      selectedPageBtnStyle: 'background-color: #000; color: #FFF; pointer-events:none;'
    }
  },
  methods: {
    swiftPage (pn) {
      if (pn !== this.pageNum) {
        this.pageNum = pn
        this.currentPageVideos = this.videoList.slice(this.pageSize * (this.pageNum - 1), this.pageSize * this.pageNum)
        // 返回页面顶部
        scrollTo(0, 0)
      }
    },
    refresh () {
      this.pageNum = 0
      this.videoList = this.randomList(this.videoList)
      this.swiftPage(1)
    },
    getBiliBiliVideos () {
      // 对不起,实在不会搞爬虫QAQ
      this.pageNum = 0
      this.videoList = this.randomList(BilibiliVideos.videos)
      this.swiftPage(1)
    },
    getTXSPVideos () {
      this.pageNum = 0
      this.videoList = this.randomList(TXSPVideos.videos)
      this.swiftPage(1)
    },
    /**
     * @description 返回传入数组的随机重排(模拟实现刷新功能)
     * @param Array
     * @return Array
     */
    randomList (li) {
      let res = li
      let rd = Math.floor(Math.random() * res.length)
      let arr1 = res.slice(0, rd)
      let arr2 = res.slice(rd)
      res = []
      while (arr2.length !== 0) {
        res.push(this.getRandomElement(arr2))
        if (arr1.length !== 0) {
          res.push(this.getRandomElement(arr1))
        }
      }
      while (arr1.length !== 0) {
        res.push(this.getRandomElement(arr1))
      }
      return res
    },
    /**
     * @description 抽取输入数组中的一个随机元素(改变原数组)
     * @param Array
     * @return [Array的元素类型]
     */
    getRandomElement (li) {
      if (li.length === 0) {
        return null
      }
      let r = Math.floor(Math.random() * li.length)
      return li.splice(r, 1)[0]
    }
  },
  computed: {
    pages () {
      return Math.floor(this.videoList.length / this.pageSize) + 1
    }
  },
  created () {
    this.getBiliBiliVideos()
  },
  mounted () {
    let pageBtns = document.querySelectorAll('.page-btn')
    pageBtns[this.pageNum - 1].setAttribute('style', this.selectedPageBtnStyle)
  },
  updated () {
    let pageBtns = document.querySelectorAll('.page-btn')
    for (let i = 0; i < pageBtns.length; i++) {
      if (i === (this.pageNum - 1)) {
        pageBtns[i].setAttribute('style', this.selectedPageBtnStyle)
      } else {
        pageBtns[i].removeAttribute('style')
      }
    }
  }
}
</script>

<style lang="scss">
  #home-videos {
    width: 100%;
    background-image: url('../../../static/images/home-videos-bg.jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    .video-origin-list {
      $originNum: 3;
      $originBtnW: 80px;
      $originBtnH: $originBtnW;
      $originMarginHorizental: 10px;
      $originMarginVertical: 10px;
      $marginBetweenOrigin: 30px;
      width: $originNum * $originBtnW + ($originNum - 1) * $marginBetweenOrigin + 2 * $originMarginHorizental;
      height: $originBtnH + $originMarginVertical * 2;
      margin-top: 100px;
      margin-bottom: 36px;
      display: flex;
      flex-direction: row;
      background-color: #000;
      opacity: 0.8;
      border-radius: 10px;
      >div {
        @keyframes toSelectedState {
          100% {
            background-color: #272727;
            opacity: 0.7;
          }
        }
        width: $originBtnW;
        height: $originBtnH;
        margin-top: $originMarginVertical;
        margin-left: $marginBetweenOrigin;
        border-radius: 8px;
        &:hover {
          cursor: pointer;
          animation-name: toSelectedState;
          animation-duration: 0.6s;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        >img {
          width: 60px;
          height: 60px;
        }
      }
      .origin-bilibili {
        margin-left: $originMarginHorizental;
      }
      .origin-txsp {
        >img {
          margin-left: 2px;
        }
      }
      .origin-youku {
        >img {
          width: 60px;
          height: 54px;
        }
      }
    }
    .video-item-list {
      $videoListW: 60%;
      $videoItemMarginHorizental: 30px;
      $videoItemMarginVertical: 30px;
      $videoItemRefreshH: 20px;
      $videoItemH: 100px; // 与video-item中一致
      $pageBtnW: 30px;
      $pageBtnH: $pageBtnW;
      width: $videoListW;
      height: (2 + 6 + 1/2) * $videoItemMarginVertical + 6 * $videoItemH + $pageBtnH + $videoItemRefreshH;
      background-color: #EAEBEF;
      border-radius: 10px;
      margin-bottom: $videoItemMarginVertical;
      .video-item-refresh {
        margin-top: $videoItemMarginVertical / 2;
        margin-bottom: - $videoItemMarginVertical / 2;
        height: $videoItemRefreshH;
        text-align: center;
        font-weight: bold;
        color: grey;
        &:hover {
          cursor: pointer;
        }
      }
      .video-item {
        margin-left: $videoItemMarginHorizental;
        margin-right: $videoItemMarginHorizental;
        margin-top: $videoItemMarginVertical;
      }
      .page-btn-list {
        $marginBetweenPageBtn: 15px;
        margin: $videoItemMarginVertical $videoItemMarginHorizental $videoItemMarginVertical $videoItemMarginHorizental;
        display: flex;
        flex-direction: row;
        .page-btn {
          width: $pageBtnW;
          height: $pageBtnH;
          margin-left: $marginBetweenPageBtn;
        }
      }
    }
  }
</style>
