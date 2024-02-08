<template>
  <div v-if="isPersonal" class="main">
    <h1>Welcome!</h1>
    <br>
    <p>Welcome to my website!</p>
    <p>I'm Natalia Spence, and here you can find some information about various projects I've worked on along with ways to get in contact with me.</p>
  </div>
  <div v-else class="main">
    <h1>Welcome!</h1>
    <br>
    <p>Welcome to my website!</p>
    <p>I made this because I got bored</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["isPersonal"]
};
</script>

<style scoped>

</style>