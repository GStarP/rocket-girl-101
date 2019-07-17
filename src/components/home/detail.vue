<template>
  <div id="info-detail">
    <iframe v-if="egg" id="qjtx" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=27571867&auto=1&height=66"></iframe>
    <div class="detail-btn detail-to-left all-center" @click="toLeft" v-if="hasLeftBtn">
      <img src="../../../static/images/arrow-left.png"/>
    </div>
    <div class="detail-btn detail-to-right all-center" @click="toRight" v-if="hasRightBtn">
      <img src="../../../static/images/arrow-right.png"/>
    </div>
    <div class="info-detail-card">
      <div class="detail-back all-center" @click="back">Back</div>
      <img :src="detail.img"/>
      <div class="wrapper-beside-img">
        <div class="detail-art-name">{{ detail.artName }}</div>
        <div class="detail-name">姓名：{{ detail.name }}</div>
        <div class="detail-birth">生日：{{ detail.birth }}</div>
        <div class="detail-birth-place">出生地：{{ detail.birthPlace }}</div>
        <div class="detail-slogan">应援口号：{{ detail.slogan }}</div>
        <div class="detail-fans">粉丝名：{{ detail.fans }}</div>
        <div class="detail-nick-name">昵称：{{ nickName }}</div>
        <div class="detail-best">名场面：{{ detail.best }}&nbsp;<i class="fa fa-play-circle fa-1x" @click="toBest"></i></div>
      </div>
      <div class="detail-description all-center">{{ description }}</div>
    </div>
  </div>
</template>

<script>
import detailDB from '../../mock/detail-db'

export default {
  name: 'info-detail',
  data () {
    return {
      detail: {}
    }
  },
  computed: {
    nickName () {
      let res = ''
      for (let n of this.detail.nickName) {
        res = res + '，' + n
      }
      return res.slice(1)
    },
    description () {
      let d = this.detail.description || ''
      return d === '' ? '暂无简介' : d
    },
    hasLeftBtn () {
      return this.detail.id > 1
    },
    hasRightBtn () {
      return this.detail.id !== 0 && this.detail.id !== 11
    },
    egg () {
      return this.detail.id === 0
    }
  },
  methods: {
    getDetail (index) {
      let details = detailDB.details
      this.detail = details[index]
    },
    toBest () {
      window.location.href = this.detail.bestUrl
    },
    toLeft () {
      this.$router.push({ path: '/home/detail/' + (this.detail.id - 1) })
    },
    toRight () {
      this.$router.push({ path: '/home/detail/' + (this.detail.id + 1) })
    },
    back () {
      this.$router.push({ path: '/home/info' })
    }
  },
  created () {
    this.getDetail(this.$route.params.id)
  },
  mounted () {
    let bg = document.querySelector('#info-detail')
    bg.setAttribute('style', 'background-color: ' + this.detail.color)
    let artName = document.querySelector('.detail-art-name')
    artName.setAttribute('style', 'color: ' + this.detail.color)
    let back = document.querySelector('.detail-back')
    back.setAttribute('style', 'background-color: ' + this.detail.color)
  },
  // 解决同页面不同参数路由更新但界面不刷新的问题
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  }
}
</script>

<style lang="scss">
  $detailCardW: 850px;
  $marginToCard: 20px;
  $marginToTop: 100px;
  $detailImgW: 408px;
  $detailImgH: 612px;
  $detailImgPercent: 1.5;
  $detailTxtCommon: 30px;
  #info-detail {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .info-detail-card {
      margin-top: $marginToTop;
      margin-bottom: $marginToCard;
      background-color: #EAEBEF;
      border-radius: 10px;
      box-shadow: 2px 2px 2px #4d4d4d;
      width: $detailCardW;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .detail-back {
        width: 60px;
        height: 30px;
        position: absolute;
        right: 50%;
        top: $marginToTop + 10px;
        margin-right: -($detailCardW / 2) + 12px;
        font-size: 18px;
        border-radius: 10px;
        color: white;
        &:hover {
          cursor: pointer;
        }
      }
      >img {
        width: $detailImgW / $detailImgPercent;
        height: $detailImgH / $detailImgPercent;
        margin: $marginToCard 0 $marginToCard $marginToCard;
      }
      .wrapper-beside-img {
        width: $detailCardW - $detailImgW / $detailImgPercent - $marginToCard * 3;
        height: $detailImgH / $detailImgPercent;
        margin: $marginToCard $marginToCard $marginToCard $marginToCard;
        display: flex;
        flex-direction: column;
        >div {
          margin-left: 20px;
          font-size: 20px;
          height: $detailTxtCommon;
          line-height: $detailTxtCommon;
          margin-bottom: 15px;
        }
        .detail-art-name {
          $detailTxtArtName: 40px;
          font-weight: bold;
          height: $detailTxtArtName;
          line-height: $detailTxtArtName;
          font-size: 32px;
          margin-bottom: 30px;
          margin-top: 10px;
        }
        .detail-best {
          i {
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
      .detail-description {
        width: $detailCardW - $marginToCard * 2;
        height: 300px;
        margin: 0 $marginToCard $marginToCard $marginToCard;
        //TODO:简介暂时全为空
        color: #646464;
        font-weight: bold;
        font-size: 20px;
      }
    }
    $detailBtnW: 100px;
    $detailBtnH: $detailBtnW;
    $detailBtnImgPercent: 1.5;
    $detailBtnImgBias: 10px;
    .detail-btn {
      position: fixed;
      width: $detailBtnW;
      height: $detailBtnH;
      top: 50%;
      margin-top: - ($detailBtnH / 2);
      border-radius: 50%;
      background-color: #000000;
      opacity: 0.8;
      &:hover {
        cursor: pointer;
      }
      >img {
        width: $detailBtnW / $detailBtnImgPercent;
        height: $detailBtnH / $detailBtnImgPercent;
      }
    }
    .detail-to-left {
      left: 5px;
      >img {
        margin-left: -$detailBtnImgBias;
      }
    }
    .detail-to-right {
      right: 5px;
      >img {
        margin-right: -$detailBtnImgBias;
      }
    }
  }
  #qjtx {
    position: fixed;
    bottom: 50px;
  }
</style>
