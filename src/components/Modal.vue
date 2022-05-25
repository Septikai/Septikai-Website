<template>
  <div v-if="image !== ''">
    <div class="modal" ref="modal">
      <img :src="image" :alt="alt" ref="img">
      <p class="caption">{{ alt }}</p>
      <span class="close" @click="close()">&times;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    imageProp: String,
    altProp: String
  },
  data() {
    return {
      image: String
    }
  },
  computed: {
    alt() {
      return this.altProp;
    }
  },
  watch: {
    imageProp: {
      immediate: true,
      handler(newVal, oldVal) {
        this.image = newVal;

      }
    }
  },
  methods: {
    close() {
      this.$emit("close-modal");
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  padding-top: 85px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-content: center;
  flex-direction: column;
}

img {
  margin: auto;
  position: relative;
  text-align: center;
  display: block;
  max-width: 80%;
  max-height: 80%;
  object-fit: scale-down;
}
.caption {
  margin: auto;
  display: block;
  align-self: center;
  max-width: 80%;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 5%;
}

.close {
  position: absolute;
  top: 10%;
  right: 2%;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover, .close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
</style>