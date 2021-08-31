<template>
  <div class="about-content">
    <h3>Let's trigger this here modal!</h3>
    <button @click="toggleShow">
      <span v-if="isShowing" class="btnstyle">Hide child</span>
      <span v-else>Show child</span>
    </button>
  <div class="vue-tut">
    <img v-bind:src="picture" 
      :alt="'${firstName} ${lastName}'"
      :class="gender" 
     />
    <h1>{{ firstName}} {{ lastName }}</h1>
    <h3>Email: {{ email }}</h3>
    <button :class="gender" @click="getUser()">Get Random User</button>
  </div>
  </div>
</template>

<script>
// import { toggle } from '@/components/mixins/toggleBorder.js'

export default {
  name: 'AboutContent',
  // props: {
  //   msg: {
  //     type: String,
  //     default: 'This is an about page'
  //   },
  //   firstName: {
  //     type: String,
  //     default: 'John'
  //   }
  // },
  data() {
    return {

    }
  },
  // mixins: [toggle],
}
</script>

<style scoped>
.dog-iterate {
  margin-left: 6em;
  margin-right: 6em;
}

/* .image-page img {  
  border: red 2px solid;
} */

button {
  margin-bottom: 10px;
  cursor: pointer;
}
.btnstyle {
	border: red 2px solid;
  }

</style>


