<template>
  <div class="video-item">
    <a :href="info.url">
      <img :src="info.img"/>
      <div class="video-item-txt-wrapper">
        <div class="video-item-name">{{ info.name }}</div>
        <div class="video-item-len">时长：{{ info.len }}</div>
        <div class="video-item-date">上传日期：{{ info.date }}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'video-item',
  props: ['info']
}
</script>

<style lang="scss">
  .video-item {
    a {
      display: flex;
      flex-direction: row;
      @keyframes videoItemSelected {
        100% {
          transform: translate3d(-3px,-3px,0);
        }
      }
      &:hover {
        animation-name: videoItemSelected;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
      }
      img {
        width: 168px;
        height: 100px;
        border-radius: 6px;
      }
      .video-item-txt-wrapper {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .video-item-name {
          font-weight: bold;
          font-size: 17px;
        }
        .video-item-len {
          font-size: 15px
        }
        .video-item-date {
          font-size: 15px
        }
      }
    }
  }
</style>
