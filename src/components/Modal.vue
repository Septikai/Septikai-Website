<template>
  <div v-if="image !== ''">
    <div class="modal" ref="modal" @click="close()">
      <span class="close" @click="close()">&times;</span>
      <img :src="image" :alt="alt" ref="img" @click.stop="">
      <p class="caption" @click.stop="">{{ alt }}</p>
      <a class="prev" @click.stop="$emit('manual-prev-event')" href="#">&#10094;</a>
      <a class="next" @click.stop="$emit('manual-next-event')" href="#">&#10095;</a>
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
      handler(newVal) {
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
  margin: 3% auto 2% auto;
  display: flex;
  max-width: 80%;
  max-height: 70%;
  object-fit: scale-down;
  position: relative;
}

.caption {
  display: block;
  align-self: center;
  max-width: 80%;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  margin: 0 auto auto auto;
}

.close {
  position: absolute;
  margin: 1% auto auto auto;
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

.prev, .next {
  position: absolute;
  top: 40%;
  display: block;
  cursor: pointer;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 4px 4px 0;
  user-select: none;
  text-decoration: none;
}

.next {
  right: 0;
  border-radius: 4px 0 0 4px;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>