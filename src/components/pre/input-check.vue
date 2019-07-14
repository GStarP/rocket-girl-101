<template>
  <div id="pre-input-check" class="all-center">
    <span>{{ question.content }}</span>
    <input v-model="inp" class="hxw-input">
    <button @click="checkAnswer" class="hxw-btn">{{ btnTxt }}</button>
  </div>
</template>

<script>
import questionDB from '../../mock/question-db'

export default {
  name: 'pre-input-check',
  data () {
    return {
      btnTxt: '确 认',
      question: {
        content: '',
        answer: ''
      },
      inp: ''
    }
  },
  methods: {
    /**
     * 从模拟数据库中随机抽取一个问题
     */
    getQuestions () {
      let questions = questionDB.questions
      let rd = Math.floor(Math.random() * questions.length)
      this.question = questions[rd]
    },
    /**
     * 检验回答并做相应跳转
     */
    checkAnswer () {
      if (this.inp === this.question.answer) {
        this.$router.push({ path: '/home' })
      } else {
        alert('回答错误!')
      }
    }
  },
  created () {
    this.getQuestions()
  }
}
</script>

<style lang="scss">
  #pre-input-check {
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    opacity: 0.95;
    span {
      width: 60%;
      margin-bottom: 20px;
      text-align: center;
      font-size: 18px;
      color: #2c2c2c;
      font-weight: bold;
    }
    @import "../../../static/style/hxw-input.scss";
    input {
      width: 64%;
    }
    @import "../../../static/style/hxw-btn.scss";
    button {
      margin-top: 24px;
      background-color: cornflowerblue;
    }
  }
</style>
