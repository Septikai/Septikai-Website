<template>
  <div class="header">
    <router-link to="/">
      <img class="home-icon border-transparent focus:border-transparent focus:ring-0" alt="Septikai Pfp" src="../assets/square_icon.png">
    </router-link>
    <div class="header-v-for">
      <a class="header-buttons rounded-button border-transparent focus:border-transparent focus:ring-0"
         v-for="route in routes"
         :key="route.name"
         :style="
         route.name === $route.name
          ? 'background-color: rgb(66, 65, 81); margin-left: 5px'
          : 'margin-left: 5px'
         "
      >
        <router-link :to="route.path">{{ route.name }}</router-link>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader.vue",
  computed: {
    routes() {
      return this.$router.options.routes.filter((x) => x.includeInHeader);
    }
  }
};
</script>

<style scoped>
.header {
  font-family: 'Roboto', sans-serif;
  background-color: #212121;
  height: 7%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  box-shadow: 0 5px 10px #151515;
  z-index: 9;
  display: flex;
  padding: 10px;
}

.home-icon {
  height: 65px;
  width: auto;
}

router-link {
  display: flex;
  align-items: center;
  text-align: center;
  text-justify: auto;
}

.header-v-for {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
}

.header-buttons {
  height: 36px;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0 5px 0 5px;
}

.rounded-button {
  border-radius: 10px;
}
</style>