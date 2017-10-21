<template>
  <div class="hello">

    <div class="column is-3" style="float: left;width: 20%" >
      <div class="menu is-dark">
        <menus label="系统设置">
          <menu-item  v-for="item in apps" icon="users" >{{item.appName}}</menu-item>
          <div class="divider"></div>
          <menu-item icon="sign-out" v-on:click="reverseMessage">退出登录</menu-item>
          <button v-on:click="reverseMessage">Greet</button>
        </menus>
      </div>
    </div>

  </div>
</template>

<script>
export default {
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
        {appName: '考核管理', appUrl: 'systemOption'}]
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
