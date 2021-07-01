<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <input type="text" v-on:input = "changeTitle">
    <br>
    <input type="text" v-model="name">
    <p>{{name}}</p>
    <a v-bind:href="link" target="_blank">google</a>
    <br>
    <button v-on:click = "increase">ClickIt</button>
      <p>{{counter}}</p><br>

    
    <p v-if="show">SeeIt</p>
    <button v-on:click="show = !show">need content</button>


      <div class="demo" 
      v-on:click="attachRed = !attachRed"
      v-bind:class="{red:attachRed}">
      </div>

      <ul v-for="item in items">
        <li>{{item}}</li>
      </ul>

      <ul v-for="person in persons">
        <li>{{person.name}}
          {{person.age}} {{person.color}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your woo woo Vue.js App',
      link: 'https://www.google.com/',
      counter: 0,
      name: 'Aaron',
      attachRed: false,
      show: true,
      items: ['this', 'that', 'the other'],
      persons: [
        {name: 'Aaron', age: 40, color: 'red'},
        {name: 'Max', age: 33, color: 'blue'}
      ],
    }
  },
methods: {
  changeTitle: function(event) {
    this.msg = event.target.value;
  },
  increase: function() {
    this.counter++;
  }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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

.demo {
  height: 100px;
  width: 100px;
  margin: auto;
  background-color: green;
}

.red {
  background-color: red;
}
</style>
