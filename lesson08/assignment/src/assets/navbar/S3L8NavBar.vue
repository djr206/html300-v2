<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <!-- <i class="fa fa-bullseye fa-5x" width="20" height="20" style="color:red" alt=""></i> -->
        <!-- <i class="fa fa-bullseye fa-5x" v-bind:style="styleObject" alt=""></i> -->
        <i
          :class="iconObject.pageIcons[1]"
          v-bind:style="styleObject"
          alt=""
        ></i>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/"
              >Landing Page<span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/image-page">Images</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/accordion-page"
              >Accordion</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/grid-page">Grid</router-link>
          </li>
          <li class="nav-item">
            <!-- add .native to access the root element but still not working for me -->
            <!-- <router-link class="nav-link" to="/accordion-page2" @click.native="changePageNameOnClick(pageName.index)">Accordion2</router-link> -->
            <router-link class="nav-link" to="/accordion-page2"
              >Accordion2</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

</template>
