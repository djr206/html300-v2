<template>
  <div id="app">
    <!-- hide the top menu from view w v-show = false -->
    <div id="nav" v-show='false'>
      <!-- to="/" default upon site load -->
      <router-link to="/">Sec3L7 Home</router-link> |
      <router-link to="/image-page">Images</router-link> |
      <router-link to="/accordion-page">Accordion</router-link> |
      <router-link to="/grid-page">Grid</router-link> |
      <router-link to="/accordion-page2">Accordion2</router-link>
    </div> 
    <router-view/>
  </div>

</template>

<script>
// export default {
//   prop: 
//   data () {
//     pageID = '';
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
