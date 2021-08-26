<template>
  <div class="home-page">
    <S3L7Header />
    <Sec3L7Home msg="Main Content"/>
    <S3L7Footer />
  </div>
</template>

<script>
import S3L7Header from "@/assets/header/S3L7Header.vue";
import S3L7Footer from "@/assets/footer/S3L7Footer.vue";
import Sec3L7Home from '@/components/Sec3L7Home.vue'

export default {
  name: "Home",
  props: {
    msg: String,
  },
    components: {
        S3L7Header,
        S3L7Footer,
        Sec3L7Home,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
/*
<style scoped>
 h3 {
  margin: 40px 0 0;
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
</style>
*/
-->
