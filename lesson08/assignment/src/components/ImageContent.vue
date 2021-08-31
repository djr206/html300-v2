<template>
<!-- bind class and apply mixin to button -->
  <div>
    <button :class="{ 'btnstyle': isShowing }"
      @click="isShowing = !isShowing">
        <img class="img-fluid p-3 my-3"  
        width="225px" height="150px" :src="image.picture" :alt="image.alt" />
    </button>
    <h3>{{ image.name }}</h3>
  </div>
</template>

<script>
import { toggle } from "@/components/mixins/toggleBorder.js"

export default {
  name: "ImageContent",
  mixins: [toggle],
  props: {
    image: Object,
  },
};
</script>


<style scoped>
.btnstyle {
	border: red 2px solid;
  }
</style>

