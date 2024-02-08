<template>
  <div class="main">
    <h1>My Projects</h1>
    <br>
    <h2>Skyblock.Tools</h2>
    <p><strong>GitHub Organisation:</strong> <a target="_blank" href="https://github.com/skyblock-tools">Skyblock.Tools</a></p>
    <p>At Skyblock.Tools we aimed to provide useful tools to enhance your Hypixel Skyblock experience. Here you can find any projects that I have worked on as a part of this team.</p>
    <p>Sadly, Skyblock.Tools is discontinued, and everything below is shown as it was beforehand.</p>
    <div class="sub-section">
      <h3>Skyhouse</h3>
      <p><strong>Mod:</strong> <a target="_blank" href="https://github.com/skyblock-tools/skyhouse-mod">Source Code</a></p>
      <p>Included:</p>
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
      <SlideShow :images="getImages('skyhouse')"></SlideShow>
    </div>
    <br>
    <h2>SpiderHeck Mods</h2>
    <p>Mods for the game <a target="_blank" href="https://store.steampowered.com/app/1329500/SpiderHeck/">SpiderHeck</a> on Steam.</p>
    <div class="sub-section">
      <h3>OneShot</h3>
      <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/OneShot">Source Code</a></p>
      <p>This mod causes every weapon to only have one ammo, disintegrating once used.</p>
      <br>
      <h3>InfiniteAmmo</h3>
      <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/InfiniteAmmo">Source Code</a></p>
      <p>The opposite of OneShot, this mod gives every reusable weapon infinite ammo. This of course does not include grenades and the like.</p>
      <br>
      <h3>MultiplayerTiers</h3>
      <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/MultiplayerTiers">Source Code</a></p>
      <p>This mod removes the 1 player limitation on the Tiers of Heck game mode for local multiplayer. The original intent was to expand this to include online multiplayer, however in the time since this was created, a better mod was released that increases the player limit not only in Tiers of Heck, but in the lobby and other game modes as well, so this mod is discontinued in favour of that.</p>
    </div>
    <br>
    <h2>Nullzee's Cave Discord Bot</h2>
    <p><strong>GitHub Organisation:</strong> <a target="_blank" href="https://github.com/nullzee-cave">Nullzee's Cave GitHub</a></p>
    <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/nullzee-cave/nullzee-bot">Source Code</a></p>
    <p><strong>The Discord:</strong> <a target="_blank" href="https://discord.gg/BwKTFDSSaG">discord.gg/nullzee</a></p>
    <p>The discord bot found in Nullzee's Cave. This is a rather complex discord bot that has been in near constant development for {{ yearsSinceNullzeeBotCreation }} years now. I starting helping out with it in December 2020, and I am now the lead developer behind it.</p>
    <p>A website/dashboard for the server and bot are also in the works. More as something fun for me to make and to prove to myself that I can do it rather than to actually be useful.</p>
    <p>An image showcase will be added here at some point in the future to show some of the various aspects of the bot without having to join the discord server.</p>
    <br>
    <h2>This Website</h2>
    <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/Septikai-Website">Source Code</a></p>
    <p>You're looking at it. I don't update it very regularly and web dev definitely isn't my specialty but here it is anyway.</p>
    <br>
    <br>
    <br>
    <small>Note: this page only includes public projects, it's usually safe to assume that I have at least 2 or 3 additional private projects in progress at any given point in time.</small>
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
  },
  computed: {
    yearsSinceNullzeeBotCreation() {
      let now = new Date(new Date(Date.now()).toDateString());
      let dateDif = now - new Date("2020-10-11");
      dateDif /= (1000 * 60 * 60 * 24 * 365.25);
      return Math.floor((dateDif - Math.floor(dateDif)) * (1000 * 60 * 60 * 24 * 365)) > 0 ? `over ${Math.floor(dateDif)}` : Math.floor(dateDif);
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

.centre {
  text-align: center;
}
</style>