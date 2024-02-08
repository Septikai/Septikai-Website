<template>
  <div class="main">
    <h1>About Me</h1>
    <br>
    <p>I exist</p>
    <br>
    <p></p>
    <p>I'm currently studying Computer Science at Aberystwyth University.</p>
    <p>I know Python, C# and Java, I'm vaguely familiar with Arduino C, JavaScript, TypeScript, and certain aspects of web dev such as CSS and Vue.js, and I'm currently learning Rust.</p>
    <p>I've worked with discord.py a lot, but other than that I haven't gone too in depth into any particular frameworks or libraries.</p>
    <br>
    <p>They/She</p>
    <br>
    <p v-if="isPersonal"><strong>Contact Me:</strong> <a target="_blank" href="mailto:nataliaspencedev@gmail.com">nataliaspencedev@gmail.com</a></p>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["isPersonal"]
};
</script>

<style scoped>
.main {
  padding: 0 0 0 2%;
  text-align: left;
}

h1 {
  text-align: center;
}
</style>
