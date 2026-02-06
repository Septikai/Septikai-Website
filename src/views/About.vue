<template>
  <div class="main">
    <h1>About Me</h1>
    <br/>
    <p>I exist</p>
    <br/>
    <p></p>
    <p>I'm currently studying Computer Science at Aberystwyth University.</p>
    <p>I know Python, C# and Java, I'm somewhat familiar with Kotlin, Arduino C, JavaScript, TypeScript, and certain aspects of web dev such as CSS and Vue.js. I'm learning GDScript for use in my major project, and I'm currently trying to find motivation to learn Rust.</p>
    <p>I've worked with discord.py a lot, have done multiple reasonably large JavaFX projects, and have experience in modding both Minecraft and smaller Unity games, but other than that I haven't gone too in depth into any particular frameworks or libraries.</p>
    <p>I dont tend to have that much presence on social media, but I can always be contacted through the methods below.</p>
    <br/>
    <p>They/She</p>
    <div v-if="domain !== 'septikai.me'">
      <br/>
      <p><strong>Contact Me:</strong></p>
      <p>Mastodon - <a rel="me" href="https://md.tals.dev/@septikai">@septikai@tals.dev</a></p>
      <p>Email - <a target="_blank" href="mailto:nataliaspencedev@gmail.com">nataliaspencedev@gmail.com</a></p>
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
.main {
  padding: 0 0 0 2%;
  text-align: left;
}

h1 {
  text-align: center;
}
</style>
