<template>
  <div class="feature-card">
    <a :href="naviUrl">
      <slot name="icon"></slot>
      <span>
        <b>
          <slot name="title"></slot>
        </b>
      </span>
      <div>
        <slot name="content"></slot>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'feature-card',
  props: ['naviUrl']
}
</script>

<style lang="scss">
@keyframes gra-to-4AB3FE {
  100% {
    background-color: #4ab3fe;
  }
}
.feature-card {
  width: 24.5%;
  background-color: #eaebef;

  &:hover {
    animation-name: gra-to-4AB3FE;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    cursor: pointer;
    a {
      > div {
        color: white;
      }
    }
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    i {
      margin-bottom: 10px;
    }
    span {
      margin-bottom: 20px;
    }
    > div {
      width: 70%;
      height: 30%;
      color: #7a7a7a;
      font-weight: bold;
      text-align: center;
    }
  }
}
</style>
