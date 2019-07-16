<template>
  <div class="info-detail">
    {{ this.detail.id }}
  </div>
</template>

<script>
export default {
  name: 'info-detail',
  data () {
    return {
      detail: {
        id: this.$route.params.id
      }
    }
  }
}
</script>
