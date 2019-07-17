<template>
  <div class="top-navigator all-center">
    <router-link
      class="navi-item"
      v-for="e of naviList"
      v-bind:key="e.id"
      v-bind:to="e.path"
      >{{ e.title }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'top-navigator',
  props: ['naviList']
}
</script>

<style lang="scss">
  @keyframes gra-to-pink {
    100% {
      color: #FF6666;
    }
  }
  .top-navigator {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 5;
    .navi-item {
      text-decoration: none;
      color: white;
      font-weight: bold;
      font-size: 18px;
      margin: 20px 40px;
      &:hover {
        animation-name: gra-to-pink;
        animation-duration: 0.5s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
      }
    }
    .router-link-exact-active {
      color: #FF6666;
    }
  }
</style>
