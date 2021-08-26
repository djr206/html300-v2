<template>
  <div class="image-pg">
    <S3L7Header />
    <ImagesContent />
    <S3L7Footer />
  </div>
</template>

<script>
import S3L7Header from "@/assets/header/S3L7Header.vue";
import S3L7Footer from "@/assets/footer/S3L7Footer.vue";
import ImagesContent from "@/components/ImagesContent.vue";

export default {
  name: "Images",
  components: {
    ImagesContent,
    S3L7Header,
    S3L7Footer,
  },
};
</script>
