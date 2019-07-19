<template>
  <div class="page-btn all-center">
    <div>{{ pageIndex }}</div>
  </div>
</template>

<script>
export default {
  props: ['pageIndex']
}
</script>

<style lang="scss">
  .page-btn {
    border: 1.5px solid #000;
    border-radius: 6px;
    &:hover {
      cursor: pointer;
      background-color: #000;
      >div {
        color: white;
      }
    }
  }
</style>
