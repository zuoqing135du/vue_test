<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/Hello">Go to Hello1</router-link>
    <p>这里是第二个界面</p>



    <label class="label">Name</label>
    <p class="control">
      <input class="input" type="text" placeholder="Text input">
    </p>
    <label class="label">Username</label>
    <p class="control has-icon has-icon-right">
      <input class="input is-success" type="text" placeholder="Text input" value="bulma">
      <i class="fa fa-check"></i>
      <span class="help is-success">This username is available</span>
    </p>
    <label class="label">Email</label>
    <p class="control has-icon has-icon-right">
      <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
      <i class="fa fa-warning"></i>
      <span class="help is-danger">This email is invalid</span>
    </p>
    <label class="label">Subject</label>
    <p class="control">
  <span class="select">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </span>
    </p>
    <label class="label">Message</label>
    <p class="control">
      <textarea class="textarea" placeholder="Textarea"></textarea>
    </p>
    <p class="control">
      <label class="checkbox">
        <input type="checkbox">
        Remember me
      </label>
    </p>
    <p class="control">
      <label class="radio">
        <input type="radio" name="question">
        Yes
      </label>
      <label class="radio">
        <input type="radio" name="question">
        No
      </label>
    </p>
    <p class="control">
      <button class="button is-primary">Submit</button>
      <button class="button is-link">Cancel</button>
    </p>


  </div>



</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Hello2.vue'
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
