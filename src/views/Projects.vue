<template>
  <div class="main">
    <h1>My Projects</h1>
    <br>
    <h2>Skyblock.Tools</h2>
    <p><strong>GitHub Organisation:</strong> <a target="_blank" href="https://github.com/skyblock-tools">Skyblock.Tools</a></p>
    <p>At Skyblock.Tools we aim to provide useful tools to enhance your Hypixel Skyblock experience. Here you can find any projects that I have worked on as a part of this team.</p>
    <div class="sub-section">
      <h3>Skyhouse</h3>
      <p><strong>Website:</strong> <a target="_blank" href="https://skyblock.tools">Skyblock.Tools</a></p>
      <p><strong>Mod:</strong> <a target="_blank" href="https://github.com/skyblock-tools/skyhouse-mod">Source Code</a> | <a target="_blank" href="https://github.com/skyblock-tools/skyhouse-mod/releases">Download Page</a></p>
      <p>Currently includes:</p>
      <ul>
        <li>A website with
          <ul>
            <li>An AH flipper</li>
          </ul>
        </li>
        <li>A mod with
          <ul>
            <li>An AH Flipper</li>
            <li>A Creation Gui that values your items</li>
            <li>A Bits to Coins overlay that shows you the most profitable items in the community shop</li>
          </ul>
        </li>
      </ul>
      <p>and many more features planned and in development for both.</p>
      <SlideShow :images="getImages('skyhouse')"></SlideShow>
    </div>
    <br>
    <h2>This Website</h2>
    <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/Septikai-Website">Source Code</a></p>
    <p>You're looking at it.</p>
  </div>
</template>

<script>
import SlideShow from "@/components/SlideShow.vue";

export default {
  name: "Home",
  components: {
    SlideShow
  },
  methods: {
    getImages(slideshowId) {
      switch (slideshowId) {
        case ("skyhouse"):
          return {
            "0": {
              "img": new URL("../assets/slideshows/skyhouse/credits.png", import.meta.url),
              "alt": "Skyhouse"
            },
            "1": {
              "img": new URL("../assets/slideshows/skyhouse/config-ah-overlays.png", import.meta.url),
              "alt": "Skyhouse Config Gui"
            },
            "2": {
              "img": new URL("../assets/slideshows/skyhouse/selection-gui.png", import.meta.url),
              "alt": "Skyhouse Auction House Flipper"
            },
            "3": {
              "img": new URL("../assets/slideshows/skyhouse/flip-list.png", import.meta.url),
              "alt": "Skyhouse Auction House Flipper"
            },
            "4": {
              "img": new URL("../assets/slideshows/skyhouse/creation-gui.png", import.meta.url),
              "alt": "Skyhouse Auction Creation Gui"
            },
            "5": {
              "img": new URL("../assets/slideshows/skyhouse/bits-overlay.png", import.meta.url),
              "alt": "Skyhouse Bits To Coins Overlay"
            }
          }
      }
    }
  }
};
</script>

<style scoped>
.main {
  text-align: left;
}

h1 {
  text-align: center;
}
</style>