<template>
  <div>
    <nav>
      <PageHeader/>
    </nav>
    <router-view :isPersonal="isPersonal"/>
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
  height: 100vh;
  overflow: auto;
}

body {
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  background-repeat: repeat-y;
  background-attachment: fixed;
  background-color: #303030;
  min-height: 100vh;
  margin: 0;
}

.main {
  overflow: auto;
  background-color: #464646;
  width: 60%;
  margin: 25px auto 25px auto;
  box-shadow: 0 0 10px #606060;
  padding: 16px;
  border-radius: 5px;
  height: 100%;
  --link-color: #00BFFFFF;
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
    padding: 16px;
  }

  .sub-section {
    border-left: 3px solid #393939;
  }
}

a {
  color: #00BFFFFF;
}

a:link, a:visited {
  text-decoration: none;
}
</style>
