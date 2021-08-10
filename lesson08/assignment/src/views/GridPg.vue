<template>
  <div class="grid-page">
    <S3L7Header />

    <GridContent />

    <S3L7Footer />
  </div>
</template>

<script>
import S3L7Header from "@/assets/header/S3L7Header.vue";
import S3L7Footer from "@/assets/footer/S3L7Footer.vue";
// import ImagesContent from '@/components/ImagesContent.vue'
import GridContent from "@/components/GridContent.vue";

export default {
  name: "Grid",
  components: {
    GridContent,
    S3L7Header,
    S3L7Footer,
  },
};
</script>
