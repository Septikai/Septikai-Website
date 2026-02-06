<template>
  <div class="main">
    <h1>Welcome!</h1>
    <br/>
    <p>Welcome to my website!</p>
    <div v-if="domain === 'tals.dev'">
      <p>I'm Natalia Spence, and here you can find some information <router-link to="about">about me</router-link>, various <router-link to="projects">projects</router-link> I've worked on, and ways to get in <router-link to="socials">contact</router-link> with me.</p>
    </div>
    <div v-else>
      <p>I made this because I got bored.</p>
      <p>Here you can find some information <router-link to="about">about me</router-link>, various <router-link to="projects">projects</router-link> I've worked on, and ways to get in <router-link to="socials">contact</router-link> with me.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["domain"]
};
</script>

<style scoped>

</style>