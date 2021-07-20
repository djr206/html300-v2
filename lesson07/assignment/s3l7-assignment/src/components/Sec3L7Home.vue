<template>
  <div class="home-page">

    <!-- <h1>{{ msg }}</h1> -->
    <div class="container-sm p-5 my-2">
        <div class="row">
            <div class="col-sm-9 bg-warning">
                <h1 id="content" class="display-3">{{ msg }}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora aliquid asperiores cum impedit illum atque aut odit inventore necessitatibus debitis neque corporis totam aspernatur minus similique sunt qui quam maiores ipsum, architecto possimus. Hic quos impedit omnis iste ex earum labore consequatur, recusandae quae optio itaque blanditiis cupiditate nisi soluta tempora veritatis corporis assumenda facilis. Mollitia perspiciatis fugit debitis sed similique temporibus, iste voluptatem placeat aspernatur magnam vel impedit modi inventore suscipit eveniet. Praesentium reprehenderit distinctio unde vero eligendi deserunt corrupti repellat non perferendis, tempore velit, esse aut voluptas illum quos eveniet. Impedit, itaque magnam quisquam optio, quis dolore iure totam deleniti tenetur voluptates neque, eveniet omnis ad! Veritatis id suscipit sunt quas dolorem impedit recusandae dolores adipisci? Earum, dolor harum? Voluptates debitis, pariatur sequi exercitationem quibusdam omnis voluptate odit fugit labore? Voluptatem quam in nulla ducimus, saepe rerum esse nisi aliquam voluptatibus doloremque veniam consectetur exercitationem vel earum illo quia laboriosam totam nesciunt repellat voluptatum omnis, voluptas optio, vero laudantium? Minima illo quam vel voluptatum maxime atque non tenetur expedita officiis asperiores amet fugit deserunt possimus dicta ab sint unde, a sit accusamus quibusdam exercitationem temporibus saepe rem. Quo rerum soluta molestias dolorem optio eaque nihil, similique veniam.</p>
            </div>
            <!-- <br> -->
            <div class="col-sm-3 bg-info">
                <h2 class="display-5 mt-5">Sidebar Content</h2>
                <blockquote class="blockquote">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aspernatur dolorem minus facere tenetur deleniti quo repellat molestiae nihil consequuntur aliquid enim sit laudantium, nulla possimus laborum odit expedita inventore autem veritatis in. Ipsam ducimus voluptas corrupti incidunt dolorem velit!</p>
                <footer class="blockquote-footer">quoted content source</footer>
                </blockquote>
            </div>
        </div>  
    </div>
  </div>
</template>

<script>

export default {
  name: 'Sec3L7Home',
  props: {
    msg: String
  }
}
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