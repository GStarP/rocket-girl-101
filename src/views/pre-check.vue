<template>
  <div id="pre-check" class="all-center" @click="stopAudio">
    <audio id="audio-zhuang" src="http://ws.stream.qqmusic.qq.com/C400100nbAtc2bGATe.m4a?guid=7281392775&vkey=836F6266B442C29115BB41C5B089FE6D48E67B8C6177A8DDB2D6555F68D38682F20C292D7BBC4211F32568E5512EC0D7E8CDDE1E646D5300&uin=5751&fromtag=66" autoplay="autoplay" hidden="true"></audio>
    <input-check></input-check>
    <div id="whosyourdaddy" @click="toHome">>>>Continue</div>
    <ul>
      <li>
        <a @click="contactSteam">
          <i class="fa fa-steam fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/GStarP">
          <i class="fa fa-github fa-2x"></i>
        </a>
      </li>
      <li>
        <a @click="contactQQ">
          <i class="fa fa-qq fa-2x"></i>
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
  },
  methods: {
    toHome () {
      this.$router.push({ path: '/home' })
    },
    contactSteam () {
      alert('怎么？想加我Steam一起打游戏嘛！')
    },
    contactQQ () {
      alert('我才不告诉你我的QQ号')
    },
    stopAudio () {
      let a = document.querySelector('#audio-zhuang')
      a.pause()
    }
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
  #whosyourdaddy {
    position: absolute;
    top: 8px;
    right: 16px;
    color: white;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
  #pre-input-check {
    width: 320px;
    height: 220px;
  }
  ul {
    position: absolute;
    left: 0%;
    top: 0%;
    margin-left: -20px;
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
        &:hover {
          cursor: pointer;
        }
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
