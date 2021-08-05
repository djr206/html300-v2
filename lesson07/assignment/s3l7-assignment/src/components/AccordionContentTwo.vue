<template>
  <div class="accordion-page2 list-item-container">
    <div class="list-item-head p-8">
      {{user.name}}
      <!-- change to oppisite of current state when clicked -->
      <span class="toggle float-right" @click="user.visible = !user.visible" 
            v-text="toggletText[user.visible * 1]">
      </span>
    </div>
    <!-- insert array items into slot and make visible -->
    <div class="list-item-body p-8" v-show="user.visible"> 
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props:["user"],
  data(){
    return { toggletText: ['show', 'hide'] }
  }
}
</script>
<style scoped>
.list-item-container{
  width: 60%;
  margin: 0 auto;
  background-color: gray;
  margin-bottom: 10px;
}
.p-8{
  padding: 8px;
}
.list-item-head{
  background-color: #35495E;
  color: #fff;
}
.float-right{
  float: right;
}
.toggle{
  cursor: pointer;
}
</style>