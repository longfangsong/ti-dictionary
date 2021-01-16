<template>
  <div class="do-you-know">
    <h1>Do you know what is</h1>
    <div class="current animate__animated" @click="$emit('updated', currentLooking)"
         :class="currentClass">{{ currentLooking }}
    </div>
    <div class="next animate__animated" :class="nextClass">{{ nextLooking }}</div>
    <h3>Click it to find out!</h3>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import {store} from "../model/store";
import "animate.css"

export default defineComponent({
  name: "DoYouKnow",
  setup: () => {
    const currentLooking = ref(store.items[Math.floor(Math.random() * store.items.length)].name);
    const nextLooking = ref(store.items[Math.floor(Math.random() * store.items.length)].name);
    const currentClass = ref("");
    const nextClass = ref("");
    return {currentLooking, nextLooking, currentClass, nextClass}
  },
  mounted() {
    setInterval((() => {
      this.currentClass = "animate__flipOutX";
      this.nextClass = "animate__flipInX";
      setTimeout(() => {
        this.currentClass = "";
        this.nextClass = "";
        this.currentLooking = this.nextLooking;
        this.nextLooking = store.items[Math.floor(Math.random() * store.items.length)].name;
      }, 1000);
    }), 3000);
  }
})
</script>

<style scoped>
.do-you-know {
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1, h3 {
  background-image: linear-gradient(120deg, rgb(21, 87, 153), rgb(21, 153, 87));
  font-weight: bolder;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  margin-bottom: 8px;
}

h1 {
  font-size: 48px;
}

h3 {
  font-size: 20px;
}

.current, .next {
  cursor: pointer;
  padding: 1px 3px;
  font-family: Inconsolata, monospace, sans-serif;
  font-size: 15pt;
  white-space: pre-wrap;
  border: 1px solid #e3edf3;
  background: #f7f7f9;
  color: #d14;
  border-radius: 2px;
  margin-bottom: 8px;
}

.next {
  display: none;
}

.current.animate__flipOutX {
  display: none;
}

.next.animate__flipInX {
  display: block;
}
</style>