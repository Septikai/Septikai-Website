<template>
  <div class="image-box">
    <p class="image-number">{{ currentIndex + 1 }} / {{ Object.keys(this.images).length }}</p>
    <transition-group name="fade" tag="div" class="image-container">
      <img :src="currentImg()" :alt="getImageCaption"/>
    </transition-group>
    <p class="image-box-caption">{{ getImageCaption() }}</p>
    <a class="prev" @click.prevent="manualPrev" href="#">&#10094;</a>
    <a class="next" @click.prevent="manualNext" href="#">&#10095;</a>
  </div>
</template>

<script>
export default {
  name: "SlideShow",
  props: {
    images: Array
  },
  data() {
    return {
      timer: null,
      currentIndex: 0
    }
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 3000);
    },
    next() {
      if (this.currentIndex >= Object.keys(this.images).length - 1) {
        this.currentIndex = 0;
      } else this.currentIndex += 1;
    },
    prev() {
      if (this.currentIndex <= 0) {
        this.currentIndex = Object.keys(this.images).length - 1;
      } else this.currentIndex -= 1;
    },
    manualNext() {
      this.next();
      clearInterval(this.timer);
      this.timer = setInterval(this.next, 3000);
    },
    manualPrev() {
      this.prev();
      clearInterval(this.timer);
      this.timer = setInterval(this.next, 3000);
    },
    currentImg() {
      return this.images[this.currentIndex]["img"];
    },
    getImageCaption() {
      return this.images[this.currentIndex]["alt"];
    }
  }
}
</script>

<style scoped>
.image-box {
  background-color: #404040;
  margin-top: 16px;
  border-radius: 16px;
  height: min-content;
  padding: 16px 0 16px 0;
  align-content: center;
  display: flex;
  justify-content: center;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

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
  width: 80%;
  display: flex;
  cursor: pointer;
  transition: 0.3s;
}

img:hover {
  opacity: 0.7;
}

.prev, .next {
  cursor: pointer;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
  justify-self: flex-start;
}

.image-number {
  position: absolute;
  display: flex;
  justify-self: flex-start;
  margin: 5px 5px 5px 25px;
  left: 0;
}

.image-box-caption {
  position: absolute;
  bottom: 0;
  margin-left: 10%;
  margin-right: 10%;
}

@media (max-width: 1000px) {
  img {
    margin-bottom: 5%;
    padding-bottom: 0;
    left: 50%;
  }

  .image-box-caption {
    margin-bottom: 3%;
  }
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 4px 4px 0;
  user-select: none;
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