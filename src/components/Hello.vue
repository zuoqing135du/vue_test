<template>
  <div class="hello" >
    <el-row :gutter="20">
      <el-col :span="10" :offset="10"><div class="grid-content bg-purple">
        <div style="margin: 20px;padding-top: 20px;" >

        <el-form :label-position="labelPosition"  label-width="80px" :model="formLabelAlign">
          <el-form-item  label="用户名">
            <el-input v-model="nickname"  placeholder="请输入nickname" value="admin"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="pswd"   placeholder="请输入pswd" value="123456"></el-input>
          </el-form-item>
          <el-button class="row_style" type="primary" @click="login">登录</el-button>
          <el-button class="row_style" type="primary" @click="getPwdAgain">忘记密码</el-button>
        </el-form>

        </div>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Hello.vue',
        msg2: 'rsdtgfhgjdsfaesrdtytr',
        nickname: '',
        pswd: '',
        labelPosition: 'top',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    },
    mounthed: function () {
    },
    methods: {
      login: function () {
        if (this.nickname === '' || this.pswd === ' ') {
          this.$message('请输入用户名和密码')
          return
        }
        this.$http.get('/api/login/pcLogin', {params: {nickname: this.nickname, pswd: this.pswd}}, {
        }).then(function (res) {
          if (res.data.code === 1) {
            this.$message('登录' + res.data.msg)
            this.$router.push({path: 'Hello2'})
          } else {
            this.$message(res.data.msg)
          }
        }, function (error) {
          console.log(error)
        })
      },
      getPwdAgain: function () {
      }
    }
  }
</script>

<style>

  .bg-purple {
    margin-bottom: 40%;
    background: #f5f5f5;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row_style {
    margin-bottom: 10%;
  }

</style>
