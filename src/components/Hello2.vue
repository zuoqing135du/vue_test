<template>
  <div class="hello">
    <div class="column is-3" style="float: left;width: 20%;" >
      <div class="menu is-dark">
        <menus label="系统设置">
          <menu-item  v-for="item in menu1" icon="users" >{{item.menuName}}</menu-item>
          <div class="divider"></div>
          <menu-item icon="sign-out" >退出登录</menu-item>
          <el-button @click="menu11" >fsdfs</el-button>
        </menus>
      </div>
    </div>

    <router-view  style="float: left;width: 80%"></router-view>
  </div>
</template>

<script>import ElButton from '../../node_modules/element-ui/packages/button/src/button'
export default {
  components: {ElButton},
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Hello2.vue',
      someData: {},
      apps: [{appName: '系统管理', appUrl: 'systemManage'},
        {appName: '客户管理', appUrl: 'customer'},
        {appName: '家装贷款', appUrl: 'systemOption'},
        {appName: '车贷管理', appUrl: 'systemOption'},
        {appName: '评估管理', appUrl: 'systemOption'},
        {appName: '法务管理', appUrl: 'systemOption'},
        {appName: '统计报表', appUrl: 'systemOption'},
        {appName: '评估管理', appUrl: 'systemOption'},
        {appName: '法务管理', appUrl: 'systemOption'},
        {appName: '统计报表', appUrl: 'systemOption'},
        {appName: '考核管理', appUrl: 'systemOption'}],
      menu1: {}
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    this.$http.get('/api/system/getMenuList', {}, {
    }).then(function (res) {
      if (res.data.code === 1) {
        console.log(res.data.data)
        this.menu1 = res.data.data
      } else {
        console.log(res.data.msg)
      }
    }, function (error) {
      console.log(error)
    })
  },
  mounthed: function () {
    console.log('开始执行mounthed')
    this.$http.get('/api/system/getMenuList', {}, {
    }).then(function (res) {
      if (res.data.code === 1) {
        console.log(res.data.data)
      } else {
        console.log(res.data.msg)
      }
    }, function (error) {
      console.log(error)
    })
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
          this.$router.push({path: 'Hello2'})
          this.$message(res.data.msg)
        } else {
          this.$message(res.data.msg)
        }
      }, function (error) {
        console.log(error)
      })
    },
    menu11: function () {
      this.$http.get('/api/system/getMenuList', {}, {
      }).then(function (res) {
        if (res.data.code === 1) {
          console.log(res.data.data)
          this.menu1 = res.data.data
        } else {
          console.log(res.data.msg)
        }
      }, function (error) {
        console.log(error)
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

html, body, #editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, #editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}

</style>
