<template>
  <div class="banner-5">
    <div class="banner-5-btn left all-center" @click="leftNext">
      <img src="../../../../static/images/arrow-left.png"/>
    </div>
    <!-- TODO:使用v-for会造成img的src不正确 -->
    <div class="banner-img-list">
      <div :class="classList[0]" :navi="imgList[0].navi" @click="bannerImgClicked($event)">
        <img src="../../../../static/images/info-card-mmq.jpg"/>
      </div>
      <div :class="classList[1]" :navi="imgList[1].navi" @click="bannerImgClicked($event)">
        <img src="../../../../static/images/info-card-wxy.jpg"/>
      </div>
      <div :class="classList[2]" :navi="imgList[2].navi" @click="bannerImgClicked($event)">
        <img src="../../../../static/images/info-card-ycy.jpg"/>
      </div>
      <div :class="classList[3]" :navi="imgList[3].navi" @click="bannerImgClicked($event)">
        <img src="../../../../static/images/info-card-daj.jpg"/>
      </div>
      <div :class="classList[4]" :navi="imgList[4].navi" @click="bannerImgClicked($event)">
        <img src="../../../../static/images/info-card-yamy.jpg"/>
      </div>
      <div :class="classList[5]" :navi="imgList[5].navi" @click="bannerImgClicked($event)">
        <img src="../../../../static/images/info-card-lmy.jpg"/>
      </div>
      <div :class="classList[6]" :navi="imgList[6].navi" @click="bannerImgClicked($event)">
        <img src="../../../../static/images/info-card-zzn.jpg"/>
      </div>
      <div :class="classList[7]" :navi="imgList[7].navi" @click="bannerImgClicked($event)">
        <img src="../../../../static/images/info-card-yyq.jpg"/>
      </div>
      <div :class="classList[8]" :navi="imgList[8].navi" @click="bannerImgClicked($event)">
        <img src="../../../../static/images/info-card-lzt.jpg"/>
      </div>
      <div :class="classList[9]" :navi="imgList[9].navi" @click="bannerImgClicked($event)">
        <img src="../../../../static/images/info-card-fj.jpg"/>
      </div>
      <div :class="classList[10]" :navi="imgList[10].navi" @click="bannerImgClicked($event)">
        <img src="../../../../static/images/info-card-xmj.jpg"/>
      </div>
    </div>
    <div class="banner-5-btn right all-center" @click="rightNext">
      <img src="../../../../static/images/arrow-right.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner-5',
  data () {
    return {
      imgList: [
        {
          url: '../../../../static/images/info-card-mmq.jpg',
          navi: '/home/detail/1'
        },
        {
          url: '../../../../static/images/info-card-wxy.jpg',
          navi: '/home/detail/2'
        },
        {
          url: '../../../../static/images/info-card-ycy.jpg',
          navi: '/home/detail/3'
        },
        {
          url: '../../../../static/images/info-card-daj.jpg',
          navi: '/home/detail/4'
        },
        {
          url: '../../../../static/images/info-card-yamy.jpg',
          navi: '/home/detail/5'
        },
        {
          url: '../../../../static/images/info-card-lmy.jpg',
          navi: '/home/detail/6'
        },
        {
          url: '../../../../static/images/info-card-zzn.jpg',
          navi: '/home/detail/7'
        },
        {
          url: '../../../../static/images/info-card-yyq.jpg',
          navi: '/home/detail/8'
        },
        {
          url: '../../../../static/images/info-card-lzt.jpg',
          navi: '/home/detail/9'
        },
        {
          url: '../../../../static/images/info-card-fj.jpg',
          navi: '/home/detail/10'
        },
        {
          url: '../../../../static/images/info-card-xmj.jpg',
          navi: '/home/detail/11'
        }
      ],
      classList: [
        { 'banner-5-1': true },
        { 'banner-5-2': true },
        { 'banner-5-3': true },
        { 'banner-5-4': true },
        { 'banner-5-5': true },
        { 'banner-hide': true },
        { 'banner-hide': true },
        { 'banner-hide': true },
        { 'banner-hide': true },
        { 'banner-hide': true },
        { 'banner-hide': true }
      ]
    }
  },
  methods: {
    leftNext () {
      let tmp = this.classList.pop()
      this.classList.unshift(tmp)
    },
    rightNext () {
      let tmp = this.classList.shift()
      this.classList.push(tmp)
    },
    centerize1 () {
      for (let i = 0; i < 2; i++) {
        this.rightNext()
      }
    },
    centerize2 () {
      this.rightNext()
    },
    centerize4 () {
      this.leftNext()
    },
    centerize5 () {
      for (let i = 0; i < 2; i++) {
        this.leftNext()
      }
    },
    bannerImgClicked (event) {
      let e = event.currentTarget
      switch (e.getAttribute('class')) {
        case 'banner-5-1':
          this.centerize1()
          break
        case 'banner-5-2':
          this.centerize2()
          break
        case 'banner-5-3':
          this.$router.push({ path: e.getAttribute('navi') })
          break
        case 'banner-5-4':
          this.centerize4()
          break
        case 'banner-5-5':
          this.centerize5()
          break
      }
    }
  }
}
</script>

<style lang="scss">
$imgW: 420px;
$imgH: 420px;
.banner-5 {
  width: 100%;
  height: $imgH;
  $vertical-bias: 20px;
  .banner-img-list {
    width: 3 * $imgW;
    height: $imgH;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -($imgH / 2 + $vertical-bias);
    margin-left: -(3 * $imgW / 2);
    >div {
      width: $imgW;
      height: $imgH;
      position: absolute;
      left: 50%;
      margin-left: -($imgW / 2);
      transition: all 0.3s ease-out;
      &:hover {
        cursor: pointer;
      }
      >img {
        width: $imgW;
        height: $imgH;
      }
    }
    .banner-5-1 {
      transform: translate3d(-0.9 * $imgW, 0, 0) scale(0.6);
      opacity: 0.8;
      z-index: 1;
    }
    .banner-5-2 {
      transform: translate3d(-0.5 * $imgW, 0, 0) scale(0.8);
      opacity: 0.9;
      z-index: 2;
    }
    .banner-5-3 {
      z-index: 3;
    }
    .banner-5-4 {
      transform: translate3d(0.5 * $imgW, 0, 0) scale(0.8);
      opacity: 0.9;
      z-index: 2;
    }
    .banner-5-5 {
      transform: translate3d(0.9 * $imgW, 0, 0) scale(0.6);
      opacity: 0.8;
      z-index: 1;
    }
    .banner-hide {
      transform: translate3d(0, 0, 0) scale(0.6);
      z-index: 1;
    }
  }
  $btnW: 60px;
  $btnH: 100px;
  .banner-5-btn {
    position: absolute;
    top: 50%;
    margin-top: - ($btnH / 2 + $vertical-bias);
    width: $btnW;
    height: $btnH;
    background-color: black;
    opacity: 0.6;
    &:hover {
      cursor: pointer;
    }
    >img {
      width: $btnW * 0.8;
      height: $btnH * 0.5;
    }
  }
  .left {
    left: 0;
    >img {
      margin-left: - ($btnW * 0.1);
    }
  }
  .right {
    right: 0;
    >img {
      margin-right: - ($btnW * 0.1);
    }
  }
}
</style>
