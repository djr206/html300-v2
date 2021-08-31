<template>
  <div class="about-content">
    <!-- <div class="containier" id="app1">
      <Header title="Task Tracker"/>
      <Tasks @delete-task="deleteTask" :tasks="tasks" />
    </div> -->
  </div>
<!-- super valuable tutorial 
https://www.youtube.com/watch?v=qZXt1Aom3Cs -->
</template>

<script>
// import { toggle } from '@/components/mixins/toggleBorder.js'
// import Header from "@/components/Header.vue"
// import Tasks from "@/components/Tasks.vue"

// export default {
//   name: 'About',
//   components: {
//     Header,
//     Tasks,
//   },
//   data() {
//     return {
//       tasks: [],
//       firstName: 'John',
//       lastName: 'Doe',
//       email: 'john@gmail.com',
//       gender: 'male',
//       picture: 'https://randomuser.me/api/portraits/men/10.jpg',
//     }
//   },
//   created() {
//     this.tasks = [
//       {
//         id: 1,
//         text: 'Docs Appt',
//         day: '3/1 at 2',
//         reminder: true,
//       },
//       {
//         id: 2,
//         text: 'Dental Appt',
//         day: '3/11 at 12',
//         reminder: true,
//       },
//       {
//         id: 3,
//         text: 'Food Shop',
//         day: '3/21 at 2',
//         reminder: false,
//       },
//     ]
//   }, 
//     methods: {
//     async getUser() {
//       const res = await fetch('https://randomuser.me/api')
//       const { results } = await res.json()

//       this.firstName = results[0].name.first
//       this.lastName = results[0].name.last
//       this.email = results[0].email
//       this.gender = results[0].gender
//       this.picture = results[0].picture.large
//     },
//     deleteTask(id) {
//       if (confirm('Just Checking...')) {
//         this.tasks = this.tasks.filter((task) => task.id !== id)
//       }
//     },
//   },
// }
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

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


.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
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
} */

/* .dog-iterate {
  margin-left: 6em;
  margin-right: 6em;
}

button {
  margin-bottom: 10px;
  cursor: pointer;
}
.btnstyle {
	border: red 2px solid;
  } */

/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: Arial, Helvetica, sans-serif;
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

h1,
h3 {
  margin-bottom: 1rem;
  font-weight: normal;
}

img {
  border-radius: 50%;
  border: 5px #333 solid;
  margin-bottom: 1rem;
}

.male {
  border-color: steelblue;
  background-color: steelblue;
}

.female {
  border-color: pink;
  background-color: pink;
  color: #333;
}

button {
  cursor: pointer;
  display: inline-block;
  background: #333;
  color: white;
  font-size: 18px;
  border: 0;
  padding: 1rem 1.5rem;
}

button:focus {
  outline: none;
}

button:hover {
  transform: scale(0.98);
} */

</style>

