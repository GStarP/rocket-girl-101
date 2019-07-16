<template>
  <div id="home-info">
    <home-info-banner></home-info-banner>
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
  }
</style>
