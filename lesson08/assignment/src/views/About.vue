<template>
  <div class="about">
    <h1>This is an about page</h1>
  <!-- <div> -->
            <!-- <button :class="{ 'btnstyle': isShowing }"
        @click="isShowing = !isShowing">
          <img class="img-fluid p-3 my-3" :src="image.src" 
          width="225px" height="150px" />
        </button> -->

        <!-- <p v-show="isShowing" class="btnstyle">Mode box display</p>
        <div @click="toggleShow">Click Show hide</div>
    </div>  -->
    <div id="modal">
    <h3>Let's trigger this here modal!</h3>
    <button @click="toggleShow">
      <span v-if="isShowing" class="btnstyle">Hide child</span>
      <span v-else>Show child</span>
    </button>
    <!-- <app-child v-if="isShowing" class="modal">
      <button @click="toggleShow">Close</button>
    </app-child> -->
  </div>
     </div>
</template>

<script>
import { toggle } from '@/components/mixins/toggleBorder.js'

export default {
  // name: 'modal',
  data() {
    return {

    }
  },
  mixins: [toggle],
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


