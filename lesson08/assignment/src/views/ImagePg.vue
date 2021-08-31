<template>
<!-- this is the parent component to ImagesContent and ImageContent that
      comprise the image section of the image page, also using 
      toggleBorder.js mixin
       -->
  <div class="image-pg">
    <S3L7Header />
    <ImagesContent :images="images" />
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
  data() {
    return {
      images: [
                {
            picture: require("../../public/img/headshot1.jpg"),
            alt: 'dog1', 
            name: 'dog1',
            id: 1,
        },
        { 
          picture: require("../../public/img/headshot2.jpg"),
          alt: 'dog2', 
          name: 'dog2',
          id: 2,
        },
        { 
          picture: require("../../public/img/headshot3.jpg"),
          alt: 'dog3', 
          name: 'dog3',
          id: 3,
        },
        { 
          picture: require("../../public/img/headshot4.jpg"),
          alt: 'dog4', 
          name: 'dog4',
          id: 4
        },
      ],
    }
  },
  isShowing: false
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap'); */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

#app1 {
  width: 400px;
  height: 100vh;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


/* .container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
} */

/* .btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.btnstyle {
	border: red 2px solid;
  } */

</style>
