<template>
  <div class="hello" >
    <!--<h3>{{ msg }}</h3>-->
    <!--<h3>{{ msg2 }}</h3>-->
    <el-input v-model="input" placeholder="请输入用户名"></el-input>
    <el-input v-model="input" placeholder="请输入密码"></el-input>
    <el-button type="primary">登录</el-button>
    <el-button type="primary">忘记密码</el-button>


  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Hello.vue',
        msg2: 'rsdtgfhgjdsfaesrdtytr'
      }
    },
    mounthed: function () {
    },
    methods: {
      cartView: function () {
      }
    }
  }
</script>

<style scoped>

</style>
