<template>
  <div id="app" >

    <el-row>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light" @click="reverseMessage">去登录</div></el-col>
    </el-row>
    <!--<el-button :plain="true" @click="open">打开消息提示</el-button>-->

    <router-view  style="float: left;width: 80%"></router-view>

  </div>
</template>

<script>
  import ElButton from '../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {ElButton},
    name: 'app',
    data () {
      return {
      }
    },
    methods: {
      reverseMessage: function () {
        this.$http.get('/api/4/version/android/2.3.0', {}, {
        }).then(function (res) {
          this.$message(res.data.msg)
        }, function (error) {
          console.log(error)
        })
      },
      toLogin: function () {
        this.$router.push({path: 'Hello2'})
      }
    }
  }
</script>

<style>
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
