<template>
  <div id="pre-check" class="all-center">
    <input-check></input-check>
    <ul>
      <li>
        <a>
          <i class="fa fa-twitter fa-2x"></i>
        </a>
      </li>
      <li>
        <a>
          <i class="fa fa-google-plus fa-2x"></i>
        </a>
      </li>
      <li>
        <a>
          <i class="fa fa-facebook fa-2x"></i>
        </a>
      </li>
      <li>
          <span>
            联 系<br/>我 们
          </span>
      </li>
    </ul>
  </div>
</template>

<script>
import PreInputCheck from '../components/pre/input-check'

export default {
  name: 'pre-check',
  components: {
    'input-check': PreInputCheck
  }
}
</script>

<style lang="scss">
  #pre-check {
    width: 100%;
    height: 100%;
    background-image: url('../../static/images/pre-check-bg.png');
    background-size: 100% 100%;
  }
  #pre-input-check {
    width: 320px;
    height: 220px;
  }
  ul {
    position: absolute;
    left: 0%;
    top: 0%;
    display: flex;
    flex-direction: row;
    li {
      display: inline-block;
      margin: 0 10px;
      text-align: center;
      a {
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: white;
        i {
          margin-top: 9px;
        }
      }
      span {
        font-weight: bold;
        color: white;
        font-size: 18px;
      }
    }
  }
</style>
