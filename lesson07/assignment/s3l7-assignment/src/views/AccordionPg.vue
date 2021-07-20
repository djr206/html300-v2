<template>
  <div class="accordion-page">
    <S3L7Header/>
    <!-- <h1>why won't this work?</h1> -->
    <AccordionContent/>
    
    <S3L7Footer/>
  </div>
  
</template>


<script>
// import data from source and assign 
import S3L7Header from '@/assets/header/S3L7Header.vue'
import S3L7Footer from '@/assets/footer/S3L7Footer.vue'
import AccordionContent from '@/components/AccordionContent.vue'

// export registered data to template
export default {
  name: 'Accordion',
  components: {
      AccordionContent,
      S3L7Header,
      S3L7Footer
  }
}
</script>


