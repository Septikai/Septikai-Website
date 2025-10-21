<template>
  <div class="main">
    <h1>My Projects</h1>
    <br/>
    <h2>Skyblock.Tools</h2>
    <p><strong>GitHub Organisation:</strong> <a target="_blank" href="https://github.com/skyblock-tools">Skyblock.Tools</a></p>
    <p>At Skyblock.Tools we aimed to provide useful tools to enhance your Hypixel Skyblock experience. Here you can find any projects that I have worked on as a part of this team.</p>
    <p>Sadly, Skyblock.Tools is discontinued, and everything below is shown as it was beforehand.</p>
    <p>While I considered reviving it for a while, the demand for its main feature has since dropped thanks to changes to Hypixel Skyblock, and its other features have since been taken on by other popular mods such as <a target="_blank" href="https://github.com/hannibal002/SkyHanni">SkyHanni</a>.</p>
    <div class="sub-section">
      <h3>Skyhouse</h3>
      <p><strong>Mod:</strong> <a target="_blank" href="https://github.com/skyblock-tools/skyhouse-mod">Source Code</a></p>
      <p>Included:</p>
      <ul>
        <li>A website with
          <ul>
            <li>An AH flipper - a tool to allow you to find items being sold far below their actual value for you to then resell for a higher price</li>
          </ul>
        </li>
        <li>A mod with
          <ul>
            <li>An AH Flipper</li>
            <li>A Creation GUI that calculates the value of your items</li>
            <li>A Bits to Coins overlay that shows you the most profitable items in the community shop</li>
          </ul>
        </li>
      </ul>
      <SlideShow :auto-cycle="true" :images="skyhouseImages"></SlideShow>
    </div>
    <br/>
    <h2>Revolution Idle Wiki Bot</h2>
    <p><strong>Discord Bot:</strong> <a target="_blank" href="https://discord.com/discovery/applications/1401019987996708934">Discovery Page</a></p>
    <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/revidle-wikibot">Source Code</a></p>
    <p>A discord bot to help people playing <a target="_blank" href="https://store.steampowered.com/app/2763740/Revolution_Idle/">Revolution Idle</a>.</p>
    <p>It allows you to easily search the <a target="_blank" href="https://revolutionidle.wiki.gg/">Revolution Idle Wiki</a>, while also containing a number of community maintained tags for quick information and tutorials on commonly asked topics.</p>
    <p>The bot can be installed to both Discord servers and your own Discord account for you to access it everywhere.</p>
    <p>Below is a selection of images to demonstrate some of its features:</p>
    <!-- TODO: SlideShow here -->
    <br/>
    <!-- TODO: add JavaFX Guide after adding disclaimer about draughts being inspired by the chess tutorial -->
    <br/>
    <h2>AberCompSoc ASCII GameJam 2023-11</h2>
    <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/compsoc-ascii-gamejam">Source Code</a></p>
    <p>In November 2023, the computing society at Aberystwyth University hosted an ASCII themed GameJam. Two friends and myself teamed up to create a text adventure game where you would work your way through multiple linked fairy tales, in which your actions in each one would impact the others. We split the workload into thirds - one person writing the story, one person writing the code to let the game load and progress the story, and me writing the code for the UI elements and combat. We did not quite finish all aspects of the game, but we still achieved 2nd place out of 6 groups.</p>
    <p>I decided to go overboard for the UI elements, and wrote code to display menus that you interact with using arrow keys to move to your chosen option (which is displayed in capitals) and enter to select it. These menus would also resize to fit your screen correctly.</p>
    <p>Below is a collection of images of the game running in my WSL terminal on a Windows PC.</p>
    <SlideShow :images="compSocASCIIGameJamImages"></SlideShow>
    <br/>
    <h2>A Level CS Project</h2>
    <p>For my A Level in Computer Science, I had to design and develop a project. For this, I chose to write a game in C# using Windows Forms. Not the best choice of software given that it's limited to Windows, but it worked.</p>
    <div class="sub-section">
      <h3>The Project</h3>
      <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/cs-project">Source Code</a></p>
      <p>The idea for the game was a dungeon crawler with card-based combat that takes place on a grid. You would be able to choose between handmade dungeons and randomly generated ones, and you would have a map that you reveal more of as you explore the dungeon.</p>
      <p>I decided to go with simple block graphics for the dungeon itself. I wanted the map to always be available, so it can be accessed by holding "C", and prevents movement whilst open. It updates to include new rooms as you discover them, and marks both your current floor, position on the floor and any known staircases.</p>
      <p>Movement is designed to work as fluidly as possible. When you enter a new room through one of the doors, it simply repositions your player to the other side of the screen, enables/disables the relevant doors, and updates your position on the floor, allowing you to continue your movement seamlessly. Staircases work the same, by simply repositioning you to the other side of the staircase, switching the doors and updating your position in the dungeon.</p>
      <p>There are two gamemodes that you pick from when starting the game - story and endless. Story mode uses the handmade dungeons, whilst endless randomly generates floors in batches of 5 for as long as you play, generating a new batch asynchronously when you get near the end of the current batch. The random floors are generated using a specialised modification of the wave function collapse algorithm. As they are generated in batches of 5, it is possible to have multiple sections of a single floor that are not connected, with multiple staircases on one of the adjacent floors both connected to different unconnected sections of the previous floor.</p>
      <p>Combat is turn based and works by dealing you a hand of cards for that fight, which each have cooldowns on their usage. On your turn, you simply pick a card, select whether you want to move or attack/heal, and choose which space you want to move to, heal or attack.</p>
      <SlideShow :auto-cycle="true" :images="aLevelProjectImages"></SlideShow>
      <br/>
      <h3>Dungeon Designer</h3>
      <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/cs-project-dungeon-designer">Source Code</a></p>
      <p>Designing dungeons by hand was fun, right up until I had to actually write the code for them. As it turns out, that ended up being a very large return statement for each floor of the dungeon, which specifies the content of every possible location a room could be in, and if there is a room in that location, then that includes door positions and staircases. Which is a lot of really repetitive code that I just did not want to write. So, I came up with a solution to that - I avoided writing the dungeon code by writing a separate program to do it for me!</p>
      <p>The Dungeon Designer is a simple but extremely helpful program for creating new dungeons for the project. It is quite literally just a grid with some buttons to the side. Several of those buttons display each possible room variant, along with a staircase. You then just click the room you want, and click where on the grid you want it, then use right click to rotate it. Stairs had to be placed in existing rooms and right clicking flips the direction - whether they go up or down from this floor.</p>
      <p>Once the dungeon is fully designed, you have two options - copy and export. Copy just copies the code for that floor to your clipboard, which was really convenient to just paste into the A Level Project code. Export was added after my A Level to allow for a floor to be saved as a text file for later use or easy sharing.</p>
      <SlideShow :auto-cycle="true" :images="aLevelProjectDungeonDesignerImages"></SlideShow>
    </div>
    <br/>
    <h2>SpiderHeck Mods</h2>
    <p>Mods for the game <a target="_blank" href="https://store.steampowered.com/app/1329500/SpiderHeck/">SpiderHeck</a> on Steam, using the ModWeaver modloader. Pending a port to the Silk modloader.</p>
    <div class="sub-section">
      <h3>OneShot</h3>
      <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/OneShot">Source Code</a></p>
      <p>This mod causes every weapon to only have one ammo, disintegrating once used.</p>
      <br/>
      <h3>InfiniteAmmo</h3>
      <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/InfiniteAmmo">Source Code</a></p>
      <p>The opposite of OneShot, this mod gives every reusable weapon infinite ammo. This of course does not include grenades and the like.</p>
      <br/>
      <h3>MultiplayerTiers</h3>
      <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/MultiplayerTiers">Source Code</a></p>
      <p>This mod removes the 1 player limitation on the Tiers of Heck game mode for local multiplayer. The original intent was to expand this to include online multiplayer, however in the time since this was created, a better mod was released that increases the player limit not only in Tiers of Heck, but in the lobby and other game modes as well, so this mod is discontinued in favour of that.</p>
    </div>
    <br/>
    <h2>Obsidian Google Calendar Sync</h2>
    <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/obsidian-google-calendar-sync">Source Code</a></p>
    <p>Obsidian Google Calendar Sync is a very work-in-progress plugin for <a target="_blank" href="https://obsidian.md">Obsidian</a> that I am developing with the aim to sync <a target="_blank" href="https://github.com/davish/obsidian-full-calendar/">Full Calendar</a> events to Google Calendar. Currently it is capable of adding events from Full Calendar to Google Calendar and modifying them later, but not removing them, and not preventing them from displaying twice if the Google Calendar that they are being synced to is also being added to Full Calendar using an ICS link. It's also currently not nearly as easy to connect to Google Calendar as I would like, but that's why it's work-in-progress and not finished.</p>
    <br/>
    <h2>Nullzee's Cave Discord Bot</h2>
    <p><strong>GitHub Organisation:</strong> <a target="_blank" href="https://github.com/nullzee-cave">Nullzee's Cave GitHub</a></p>
    <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/nullzee-cave/nullzee-bot">Source Code</a></p>
    <p><strong>The Discord:</strong> <a target="_blank" href="https://discord.gg/BwKTFDSSaG">discord.gg/nullzee</a></p>
    <p>The discord bot found in Nullzee's Cave. This is a rather complex discord bot that has been in near constant development for {{ yearsSinceNullzeeBotCreation }} years now. I starting helping out with it in December 2020, and I am now the lead developer behind it.</p>
    <p>An image showcase will be added here at some point in the future to show some of the various aspects of the bot without having to join the discord server.</p>
    <br/>
    <h2>This Website</h2>
    <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/Septikai/Septikai-Website">Source Code</a></p>
    <p>You're looking at it. I don't update it very regularly and web dev definitely isn't my speciality but here it is anyway.</p>
    <br/>
    <br/>
    <br/>
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
  props: {
    domain: String
  },
  computed: {
    yearsSinceNullzeeBotCreation() {
      let now = new Date(new Date(Date.now()).toDateString());
      let dateDif = now - new Date("2020-10-11");
      dateDif /= (1000 * 60 * 60 * 24 * 365.25);
      return Math.floor((dateDif - Math.floor(dateDif)) * (1000 * 60 * 60 * 24 * 365)) > 0 ? `over ${Math.floor(dateDif)}` : Math.floor(dateDif);
    },
    skyhouseImages() {
      return {
        "name": "skyhouse",
        "0": {
          "img": new URL("../assets/slideshows/skyhouse/credits.png", import.meta.url),
          "alt": "Skyhouse"
        },
        "1": {
          "img": new URL("../assets/slideshows/skyhouse/config-ah-overlays.png", import.meta.url),
          "alt": "Skyhouse Config GUI"
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
          "alt": "Skyhouse Auction Creation GUI"
        },
        "5": {
          "img": new URL("../assets/slideshows/skyhouse/bits-overlay.png", import.meta.url),
          "alt": "Skyhouse Bits To Coins Overlay"
        }
      };
    },
    compSocASCIIGameJamImages() {
      return {
        "name": "compsoc-gamejam-2023-11",
        "0": {
          "img": new URL("../assets/slideshows/compsoc-gamejam-2023-11/title-screen.png", import.meta.url),
          "alt": "Title Screen"
        },
        "1": {
          "img": new URL("../assets/slideshows/compsoc-gamejam-2023-11/story.png", import.meta.url),
          "alt": "Story Example"
        },
        "2": {
          "img": new URL("../assets/slideshows/compsoc-gamejam-2023-11/story-transition.png", import.meta.url),
          "alt": "Transitioning Between Stories"
        },
        "3": {
          "img": new URL("../assets/slideshows/compsoc-gamejam-2023-11/combat.png", import.meta.url),
          "alt": "Combat"
        },
        "4": {
          "img": new URL("../assets/slideshows/compsoc-gamejam-2023-11/stats-inventory.png", import.meta.url),
          "alt": "Player Stats And Inventory"
        },
      };
    },
    aLevelProjectImages() {
      return {
        "name": "a-level-project",
        "0": {
          "img": new URL("../assets/slideshows/a-level-project/dungeon-example.png", import.meta.url),
          "alt": "The Dungeon"
        },
        "1": {
          "img": new URL("../assets/slideshows/a-level-project/story-map.png", import.meta.url),
          "alt": "Map Of A Handmade Floor"
        },
        "2": {
          "img": new URL("../assets/slideshows/a-level-project/dungeon-stairs.png", import.meta.url),
          "alt": "A Staircase"
        },
        "3": {
          "img": new URL("../assets/slideshows/a-level-project/mode-select.png", import.meta.url),
          "alt": "Gamemode Selection"
        },
        "4": {
          "img": new URL("../assets/slideshows/a-level-project/random-map.png", import.meta.url),
          "alt": "Map Of A Randomly Generated Floor"
        },
        "5": {
          "img": new URL("../assets/slideshows/a-level-project/combat-move.png", import.meta.url),
          "alt": "Combat Movement Action"
        },
        "6": {
          "img": new URL("../assets/slideshows/a-level-project/combat-attack.png", import.meta.url),
          "alt": "Combat Attack Action"
        },
        "7": {
          "img": new URL("../assets/slideshows/a-level-project/combat-heal.png", import.meta.url),
          "alt": "Combat Heal Action"
        },
      };
    },
    aLevelProjectDungeonDesignerImages() {
      return {
        "name": "a-level-project-dungeon-designer",
        "0": {
          "img": new URL("../assets/slideshows/a-level-project/dungeon-designer/designer-blank.png", import.meta.url),
          "alt": "The Dungeon Designer"
        },
        "1": {
          "img": new URL("../assets/slideshows/a-level-project/dungeon-designer/designer-floor.png", import.meta.url),
          "alt": "A Floor Designed In The Dungeon Designer"
        },
      };
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