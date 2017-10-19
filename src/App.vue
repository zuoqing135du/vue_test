<template>
  <div id="app">


    <div class="column is-3" style="float: left;width: 20%" >
      <div class="menu is-dark">
        <menus label="系统设置">
          <menu-item  v-for="item in apps" icon="users" >{{item.appName}}</menu-item>
          <div class="divider"></div>
          <menu-item icon="sign-out">退出登录</menu-item>
        </menus>
      </div>
    </div>

    <router-view  style="float: left;width: 80%"></router-view>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        links: [
          {
            text: '界面1',
            route: '/Hello'
          },
          {
            text: '界面2',
            route: '/Hello2'
          },
          {
            text: '界面3',
            route: '/Hello3'
          }
        ],
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
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  }
</script>

<style>
 /* #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }*/

/*  ul li {
    display: inline-block;
    margin-right: 10px;
  }
  ul li a{
    display: inherit;
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
  ul li a:hover{
    cursor: pointer;
    color: #fff;
    background-color: #138bec;
    border: 1px solid #138bec;
  }*/

</style>
