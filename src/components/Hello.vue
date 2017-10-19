<template>
  <div class="hello" >
    <!--<h3>{{ msg }}</h3>-->
    <!--<h3>{{ msg2 }}</h3>-->


    <span>第一个界面Hello.vue</span>

    <div class="columns">
      <div class="column">
        <tabs type="toggle" :is-full-width="true">
          <tab-item label="Pictures" icon="image">Pictures Tab</tab-item>
          <tab-item label="Music" icon="music">Music Tab</tab-item>
          <tab-item label="Videos" icon="film">Video Tab</tab-item>
          <tab-item label="Documents" icon="file-text-o">Document Tab2</tab-item>
        </tabs>
      </div>
    </div>
<!--
    <collapse accordion>
      <collapse-item title="Collapsible Group Item #1">Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor sit amet,
        consectetur adipiscing elit</collapse-item>
      <collapse-item title="Collapsible Group Item #2" actived>Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor sit amet,
        consectetur adipiscing elit</collapse-item>
      <collapse-item title="Collapsible Group Item #3">Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor sit amet,
        consectetur adipiscing elit</collapse-item>
    </collapse>


    <tooltip content="Basic Tooltip!">
      <button class="button">Basic Tooltip</button>
    </tooltip>

    <tooltip content="Tooltip Trigger!" trigger="click">
      <button class="button is-primary">Click Trigger</button>
    </tooltip>

    <tooltip content="Tooltip Always!" :always="true">
      <button class="button is-primary">Tooltip Always</button>
    </tooltip>

    <tooltip content="Tooltip Disabled!" :disabled="true">
      <button class="button is-primary">Tooltip Disabled</button>
    </tooltip>
    <br><br>
    <p class="control">
      <tooltip content="Focus Tooltip！" trigger="focus">
        <input class="input" type="text" placeholder="Focus Tooltip！">
      </tooltip>
    </p>

    <button class="button" @click="basicNotify">点击我</button>
    <button class="button is-primary" @click="primaryNotify">点击我</button>
    <button class="button is-info" @click="infoNotify">点击我</button>
    <button class="button is-success" @click="successNotify">点击我</button>
    <button class="button is-warning" @click="warningNotify">点击我</button>
    <button class="button is-danger" @click="dangerNotify">点击我</button>
    <button class="button is-info" @click="loadingNotify">Loading</button>


    <timeline>
      <timeline-item date="2 minutes ago" icon="twitter" type="primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante soe aiea ose dos soois.
      </timeline-item>
      <timeline-item type="primary" date="Sat, 5 Mar">
        <p>adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p><a href="">news center</a></p>
        <p><img src="https://pek3a.qingstor.com/warehouse1/c1.jpg" /></p>
      </timeline-item>
      <timeline-item date="Sun, 11 Feb" icon="wechat" type="success">
        Call to customer Jacob and discuss the detail.
      </timeline-item>
    </timeline>-->
   <!-- <tag type="primary">Tag Primary</tag>
    <tag type="info">Tag Info</tag>
    <tag type="success">Tag Success</tag>
    <tag type="danger">Tag Danger</tag>
    <tag type="warning">Tag Warning</tag>
    <tag type="primary" color="#f50" :closable="true">Tag Color</tag>-->
    <!--<router-link to="/Hello2">Go to Hello2</router-link>-->
   <!-- <p>这里是第一个界面</p>
    <ul id="example-1">
      <li v-for="item in items">
        {{ item.message }}1111111
      </li>
    </ul>-->
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  h1, h2 {
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

  code {
    color: #f66;
  }*/

</style>
