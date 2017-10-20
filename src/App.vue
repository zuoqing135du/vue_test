<template>
  <div id="app">

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
    },
    methods: {
      reverseMessage: function () {
        this.$http.get('/api/4/version/android/2.3.0', {}, {
          headers: {

          },
          emulateJSON: true
        }).then(function (res) {
          this.musics = res.data.msg
          alert(res.data.msg)
        }, function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<style>

</style>
