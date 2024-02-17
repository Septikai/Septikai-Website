<template>
  <div v-if="isPersonal" class="main">
    <h1>My Socials</h1>
    <br/>
    <p><strong>Mastodon:</strong> <a rel="me" href="https://mastodon.tals.dev/@septikai">@septikai@tals.dev</a></p>
    <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai">Septikai</a></p>
    <p><strong>Discord:</strong> septikai</p>
    <p><strong>Email:</strong> <a target="_blank" href="mailto:nataliaspencedev@gmail.com">nataliaspencedev@gmail.com</a></p>
  </div>
  <div v-else class="main">
    <h1>My Socials</h1>
    <br/>
    <p><strong>Discord:</strong> septikai</p>
    <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai">Septikai</a></p>
    <p><strong>YouTube:</strong> <a target="_blank" href="https://www.youtube.com/channel/UCu9a3FffEJU7DKkIlYwx2zA">Septikai</a></p>
    <p><strong>Steam:</strong> <a target="_blank" href="https://steamcommunity.com/id/septikai/">Septikai</a></p>
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
