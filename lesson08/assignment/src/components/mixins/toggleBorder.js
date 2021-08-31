// should rename this file to toggle since it can be applied to more 
// than a border
export const toggle = {
    data() {
      return {
        isShowing: false
      }
    },
    methods: {
      toggleShow() {
        this.isShowing = !this.isShowing;
      }
    }
  }