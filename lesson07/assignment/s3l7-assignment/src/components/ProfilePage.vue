// ProfilePage
<template>
  <div class="profile-page">
    <div class="avatar">
      <img src="user.profilePicture" />
      {{ user.name }}
    </div>
     <!-- Add component in with props -->
    <contact-info
      :email-address="emailAddress"
      :twitter-handle="twitterHandle"
      :instagram="instagram"
    />
  </div>
</template>

<script>
import ContactInfo from './ContactInfo.vue'

export default {
  name: 'ProfilePage',
  components: {
    ContactInfo,
  },

  data() {
    return {
      // In a real app we would get this data from a server
      user: {
        name: 'John Smith',
        profilePicture: '../../public/img/headshot1.jpg',
        emailAddress: 'john@smith.com',
        twitterHandle: 'johnsmith',
        instagram: 'johnsmith345',
      },
    }
  }
};
</script>
