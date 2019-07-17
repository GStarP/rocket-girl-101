<template>
  <div id="home-info">
    <home-info-banner></home-info-banner>
    <img src="../../../static/images/logo.png"/>
  </div>
</template>

<script>
import Banner from './info/banner-5'

export default {
  name: 'home-info',
  components: {
    'home-info-banner': Banner
  }
}
</script>

<style lang="scss">
  #home-info {
    width: 100%;
    height: 100%;
    background-image: url('../../../static/images/home-info-bg.jpg');
    background-size: cover;
    > img {
      $logoW: 250px;
      $logoH: 160px;
      position: absolute;
      bottom: 16px;
      left: 50%;
      margin-left: - ($logoW / 2);
      width: $logoW;
      height: $logoH;
    }
  }
</style>
