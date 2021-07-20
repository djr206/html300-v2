<template>
    <header class="container">
        <h1 class="jumbotron text-center">Sec3L6 Assignment: Bootstrap website Landing page</h1>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <i class="fa fa-bullseye fa-5x" width="20" height="20" style="color:red" alt=""></i>
            <!-- <i class= {{ iconType }} width="20" height="20" style="color:red" alt=""></i> -->
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Landing Page<span class="sr-only">(current)</span></router-link>
                        <!-- <a class="nav-link" href="#">Landing Page <span class="sr-only">(current)</span></a> -->
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/image-page">Images</router-link>
                        <!-- <a class="nav-link" href="images-page.html">Images Page</a> -->
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/accordion-page">Accordion</router-link>
                        <!-- <a class="nav-link" href="accordion-page.html">Accordion Page</a> -->
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/grid-page">Grid</router-link>
                        <!-- <a class="nav-link" href="grid-page.html">Grid Page</a> -->
                    </li>
<!-- remove after testing -->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/accordion-page2">Accordion2</router-link>
                    </li>
<!-- remove after testing -->
                </ul>
            </div>
        </nav>
    </header>
</template>


<script>
// use data or props in this case???
export default {
  name: 'PageID',
  data() {
      return {
          iconType: "fa fa-bullseye fa-5x",
      }
  }

  }

</script>
