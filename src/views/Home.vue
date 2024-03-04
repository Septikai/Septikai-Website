<template>
  <div class="main">
    <h1>Welcome!</h1>
    <br/>
    <p>Welcome to my website!</p>
    <div v-if="isPersonal">
      <p>I'm Natalia Spence, and here you can find some information about me, various projects I've worked on, and ways to get in contact with me.</p>
    </div>
    <div v-else>
      <p>I made this because I got bored.</p>
      <p>Here you can find some information about me, various projects I've worked on, and ways to get in contact with me.</p>
    </div>
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