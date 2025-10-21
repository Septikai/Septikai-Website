<template>
<div class="main">
  <p>404 - Not Found</p>
  <p>Not all those who wander are lost, but you probably are.</p>
  <p>Blahaj and Smolhaj say hi</p>
  <div class="image-container">
  <img class="border-transparent focus:border-transparent focus:ring-0" alt="Blahaj and Smolhaj Photo" src="../assets/photos/Blahaj_Smolhaj.jpg">
  </div>
</div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
.image-container {
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 3%;
}

img {
  height: auto;
  width: 50%;
  display: flex;
  transition: 0.3s;
}

@media (max-width: 1000px) {
  img {
    margin-bottom: 5%;
    padding-bottom: 0;
    left: 50%;
  }
}
</style>