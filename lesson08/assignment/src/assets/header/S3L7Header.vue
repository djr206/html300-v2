<template>
  <header class="container">
    <!-- next line works if manually loading index position -->
    <!-- <h1 class="jumbotron text-center">Sec3L7 Assignment: Refactor {{ jumboObject.pageNames[5] }} page</h1> -->
    <!-- next line renders a header for each item in pageNames array, trying to use code from accordion-page2 instead -->
    <!-- <h1 class="jumbotron text-center" v-for="pageName in jumboObject.pageNames" :key="pageName.index">Sec3L7 Assignment: Refactor {{ pageName }} page</h1> -->
    <h1
      class="jumbotron text-center"
      v-for="(item, index) in dynamicList"
      :key="index"
      :user="item"
    >
      Sec3L8 Assignment: {{ item.pageName }} page
    </h1>
      <!-- <S3L8NavBar /> -->
  </header>
</template>

<script>
// import S3L8NavBar from "@/assets/navbar/S3L8NavBar.vue";

export default {
  name: "pageID",
  // components: S3L8NavBar,
  data() {
    return {
      styleObject: {
        color: "red",
        witdh: "20",
        height: "20",
      },
      // display different icon each page @click, come back to this after sorting pageNames ???
      iconObject: {
        pageIcons: ["fa fa-bullseye fa-5x", "fa fa-film fa-5x"],
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
    };
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
    prepareDynamicList() {
      let list = [
        { pageName: "Landing", id: 6 },
        { pageName: "Images", id: 8 },
        // { pageName: "Accordion", id: 2 },
        { pageName: "Grid", id: 4 },
        { pageName: "Accordion2", id: 0 },
      ];
      list.forEach((element) => {
        this.dynamicList.push({ ...element, visible: false });
      });
    },
  },
  async created() {
    this.prepareDynamicList();
  },

  // }
};
</script>
