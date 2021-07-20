// ContactInfo
<template>
  <div class="container">
    <div class="row">
      Email: {{ emailAddress }}
      Twitter: {{ twitterHandle }}
      Instagram: {{ instagram }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'ContactInfo',
    props: ['emailAddress', 'twitterHandle', 'instagram'],
};
</script>
