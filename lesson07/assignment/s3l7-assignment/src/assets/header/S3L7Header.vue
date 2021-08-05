<template>
    <header class="container">
        <!-- next line works if manually loading index position -->
        <!-- <h1 class="jumbotron text-center">Sec3L7 Assignment: Refactor {{ jumboObject.pageNames[5] }} page</h1> -->
        <!-- next line renders a header for each item in pageNames array, trying to use code from accordion-page2 instead -->
        <!-- <h1 class="jumbotron text-center" v-for="pageName in jumboObject.pageNames" :key="pageName.index">Sec3L7 Assignment: Refactor {{ pageName }} page</h1> -->
        <h1 class="jumbotron text-center" v-for="(item, index) in dynamicList" :key="index" :user="item">
            Sec3L7 Assignment: Refactor {{ item.pageName }} page</h1>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <!-- <i class="fa fa-bullseye fa-5x" width="20" height="20" style="color:red" alt=""></i> -->
                <!-- <i class="fa fa-bullseye fa-5x" v-bind:style="styleObject" alt=""></i> -->
            <i :class="iconObject.pageIcons[1]" v-bind:style="styleObject" alt=""></i>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse"   aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" >
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Landing Page<span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/image-page">Images</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/accordion-page">Accordion</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/grid-page">Grid</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- add .native to access the root element but still not working for me -->
                        <!-- <router-link class="nav-link" to="/accordion-page2" @click.native="changePageNameOnClick(pageName.index)">Accordion2</router-link> -->
                             <router-link class="nav-link" to="/accordion-page2">Accordion2</router-link>

                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>


<script>
export default {
  name: 'pageID',
  data() {
      return {
        styleObject: {
            color: 'red',
            witdh: '20',
            height: '20',
        },
        // display different icon each page @click, come back to this after sorting pageNames ???
        iconObject: {
            pageIcons: ['fa fa-bullseye fa-5x',
                        'fa fa-film fa-5x',
            ]
        },
        // need to get one array item to display depending on which page
        jumboObject: {
            // pageNames: ['website',
            //             'Landing',
            //             'Images',
            //             'Accordion',
            //             'Grid',
            //             'Accordion2'
            // ],
            // pageNames: [
            //     {id: 'website'},
            //     {id: 'Landing'},
            //     {id: 'Images'},
            //     {id: 'Accordion'},
            //     {id: 'Grid'},
            //     {id: 'Accordion2'},
            // ]
        },
        dynamicList: [],
      }
    },
    methods: {
        // changePageNameOnClick(index) {
            // this.jumboObject.pageName = this.jumboObject.pageName[5]
        //     this.jumboObject.pageName = this.jumboObject.pageNames.filter(p => p.pageName !== 'website');
        // }
            // this.jumboObject.pageName = this.jumboObject.pageNames[index]
        // },


        // prepare a list for toggling, defa to !visible
        // trying to modify accordion-page2 code as solution here
        // getting headers to render same as pageNames array above
    prepareDynamicList(){
      let list = [
        {pageName: "Landing", id: 6},
        {pageName: "Images", id: 8},
        {pageName: "Accordion", id: 2},
        {pageName: "Grid", id: 4},
        {pageName: "Accordion2", id: 0},
      ];
      list.forEach(element => {
       this.dynamicList.push({...element, visible: false});
      });
    }
  },
  async created(){
    this.prepareDynamicList();
  },


    // }
  }
 </script>
