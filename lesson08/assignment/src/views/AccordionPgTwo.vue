<template>
  <!-- example code from https://medium.com/@olaysco/dynamic-list-toggling-in-vuejs-accordion-9020a5d91497 -->
  <div id="accordion-page2">
    <S3L7Header />
    <br>
    <AccordionContentTwo
      v-for="(item, index) in dynamicList"
      :key="index"
      :user="item"
    >
      This is {{ item.name }}, they're {{ item.age }} years old
      <br />
      <img
        class="img-fluid p-3 my-3"
        :src="item.src"
        alt=""
        width="225px"
        height="150px"
      />
      <br />
      <a href="#" target="_blank"
        >Learn more about {{ item.name }} here if desired.</a
      >
    </AccordionContentTwo>
    <br>
    <S3L7Footer />
  </div>
</template>

<script>
import S3L7Header from "@/assets/header/S3L7Header.vue";
import S3L7Footer from "@/assets/footer/S3L7Footer.vue";
import AccordionContentTwo from "@/components/AccordionContentTwo";

export default {
  name: "Accordion2",
  components: {
    AccordionContentTwo,
    S3L7Header,
    S3L7Footer,
  },

  data() {
    return {
      // register an empty array
      dynamicList: [],
    };
  },
  methods: {
    // prepare a list for toggling, defa to !visible
    // this data can come from outside
    prepareDynamicList() {
      let list = [
        {
          name: "yolo",
          age: 6,
          src: require("../../public/img/headshot1.jpg"),
        },
        {
          name: "fomo",
          age: 8,
          src: require("../../public/img/headshot2.jpg"),
        },
        {
          name: "fido",
          age: 5,
          src: require("../../public/img/headshot3.jpg"),
        },
      ];
      list.forEach((element) => {
        this.dynamicList.push({ ...element, visible: false });
      });
    },
  },
  async created() {
    this.prepareDynamicList();
  },
};
</script>

<style>
body {
  background-color: #dfde9f;
}
</style>
