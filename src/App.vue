<template>
  <div>
    <nav>
      <PageHeader :isPersonal="isPersonal"/>
    </nav>
    <div class="offset-navbar">
      <router-view :isPersonal="isPersonal"/>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";

export default {
  name: "App",
  components: {
    PageHeader
  },
  computed: {
    isPersonal() {
      return window.location.hostname === "tals.dev";
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

html {
  height: 100%;
  overflow: auto;
}

body {
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  background-repeat: repeat-y;
  background-attachment: fixed;
  background-color: #303030;
  margin: 0;
}

.main {
  overflow: auto;
  background-color: #464646;
  width: 60%;
  margin: 6% auto 25px auto;
  box-shadow: 0 0 10px #606060;
  padding: 16px 16px 0.5% 16px;
  border-radius: 5px;
  --link-color: #00BFFFFF;
}

.offset-navbar {
  margin-top: 5%;
}

.sub-section {
  margin-top: 10px;
  padding-top: 6px;
  padding-left: 16px;
  padding-bottom: 10px;
  border-left: 5px solid #393939;
  height: auto;
}

@media (max-width: 1000px) {
  .main {
    width: 80%;
    margin-top: 20%;
  }

  .sub-section {
    border-left: 3px solid #393939;
  }

  .offset-navbar {
    margin-top: 22%;
  }
}

h1 {
  margin-top: 0.5%;
}

a {
  color: #00BFFFFF;
}

a:link, a:visited {
  text-decoration: none;
}
</style>
