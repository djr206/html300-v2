<template>
  <div class="home">
<!-- insert components into page -->
    <S3L7Header/>
    <Sec3L7Home msg="Main Content"/>
    <S3L7Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
// testing new imports
import S3L7Header from '@/assets/header/S3L7Header.vue'
import S3L7Footer from '@/assets/footer/S3L7Footer.vue'
import Sec3L7Home from '@/components/Sec3L7Home.vue'

export default {
  name: 'Home',
  components: {
        Sec3L7Home,
        S3L7Header,
        S3L7Footer
  }
}
</script>
