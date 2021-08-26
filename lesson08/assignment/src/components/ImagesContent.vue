<template>
  <div class="image-page">
    <div class="row text-center dog-iterate">
      <!-- loops thru images array in script tag below -->
      <div class="col-sm" v-for="image in images" :key="image.src">
        <!-- apply state mods  -->
        <!-- set class and initialize w/out bootstrap classes -->
        <button :class="{ 'btnstyle': isShowing }"
        @click="isShowing = !isShowing">
          <img class="img-fluid p-3 my-3" :src="image.src" 
          width="225px" height="150px" />
        </button>
<hr>        
<!-- using bootstrap class btn -->
        <button @click="isShowing = !isShowing" class="btn">
          <img class="img-fluid p-3 my-3 btnstyle" :src="image.src" 
          width="225px" height="150px" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { toggle } from "@/components/mixins/toggleBorder.js"

export default {
  name: "ImagesContent",
  mixins: [toggle],
  props: {
    imageURL: {String, required: true},
    alt: {String, required: true},
    title: String,
  },
  data() {
    return {
      images: [
        // { src: require("../../public/img/${filename}") }
        { src: require("../../public/img/headshot1.jpg") },
        { src: require("../../public/img/headshot2.jpg") },
        { src: require("../../public/img/headshot3.jpg") },
        { src: require("../../public/img/headshot4.jpg") },
      ],
      isShowing: false,
    };
  },
};
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


    <!-- save for ref for time being /////// -->
    <!-- <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in theDogs" :key="index">
        <img :src="data.image" class="img-fluid" width="225px" height="150px">
         <h3>{{data.dogName}}</h3>
      </div>
    </div> -->
    <!-- ////////////////////// -->

    <!-- next line goes w original code -->
    <!-- <div class="container mt-3 text-center">
      <h2>Carousel Slider</h2>
      <div
        id="myCarousel"
        class="carousel slide"
        data-interval="2500"
        data-ride="carousel"
      >
        <ul class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ul>

        <div class="carousel-inner p-5"> -->
          <!-- replace commented code  -->
          <!-- <div class="carousel-item active">
                        <img src="../../public/img/headshot1.jpg" alt="dog1" width="251" height="244">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Dog One</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </div>

                      <div class="carousel-item">
                        <img src="../../public/img/headshot2.jpg" alt="dog2" width="251" height="244">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Dog Two</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </div>

                      <div class="carousel-item">
                        <img src="../../public/img/headshot3.jpg" alt="dog3" width="251" height="244">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Dog Three</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </div> -->
          <!-- ////////////////////// -->
          <!-- <div class="row">
            <div
              class="col-md-4 col-lg4"
              v-for="(data, index) in theDogs"
              :key="index"
            >
              <img
                :src="data.image"
                class="img-fluid"
                width="225px"
                height="150px"
              />
              <h3>{{ data.dogName }}</h3>
              <p>{{ data.dogInfo }}</p>
            </div>
          </div> -->
          <!-- ////////////////////// -->
        <!-- </div> -->
        <!-- closes div class="carousel-inner p-5" -->

        <!-- <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div> -->

    <!-- Saving data for refactor of carousel slider

          // theDogs: [
      //   {
      //     dogName: "dog1",
      //     image: require("../../public/img/headshot1.jpg"),
      //     dogInfo: "Lorem ipsum dolor sit amet, consectetur",
      //   },
      //   {
      //     dogName: "dog2",
      //     image: require("../../public/img/headshot2.jpg"),
      //     dogInfo: "Lorem2 ipsum dolor sit amet, consectetur",
      //   },
      //   {
      //     dogName: "dog3",
      //     image: [require("../../public/img/headshot3.jpg")],
      //     dogInfo: "Lorem3 ipsum dolor sit amet, consectetur",
      //   },
      //   {
      //     dogName: "dog4",
      //     image: [require("../../public/img/headshot4.jpg")],
      //     dogInfo: "Lorem4 ipsum dolor sit amet, consectetur",
      //   },
      // ],
      //  insterting new code for imageSlider
      // imageSlides: [
      //   'http://public/img/headshot1.jpg',
      //   'http://public/img/headshot2.jpg'
      // { src: require('../../public/img/headshot1.jpg')},
      // { src: require('../../public/img/headshot2.jpg')},
      // { src: require('../../public/img/headshot3.jpg')},
      // { src: require('../../public/img/headshot4.jpg')},
      // ],
      // currentImg: 0
      // end of imageSlider code
-->
