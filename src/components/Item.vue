<template>
  <div class="item">
    <h2>{{ item.name }}</h2>
    <div class="aliases">
      <span v-for="alias in item.alias" :key="alias">{{ alias }}</span>
    </div>
    <span class="category" :style="{ background:background }">{{ item.category }}</span>
    <p> {{ item.introduction }} </p>
    <a v-for="link in item.links" :href="link[1]" :key="link[1]">{{ link[0] }}</a>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Item} from "../model/item";

export default defineComponent({
  name: 'Item',
  props: ['item'],
  setup: (props) => {
    const item: Item = props.item;
    let background = "#e0e0e0";
    if (item.category === "概念" || item.category === "Concept") {
      background = "#5cbbf6";
    } else if (item.category === "配置项" || item.category === "Config Item") {
      background = "#6200ea";
    } else if (item.category === "特性" || item.category === "Feature") {
      background = "#e91e63";
    }
    return {background}
  }
})
</script>

<style scoped>
.item {
  border-bottom: solid 1px #a2a2a2;
}
.category {
  border-radius: 10px;
  font-size: 12px;
  height: 20px;
  background: #e0e0e0;
  color: white;

  align-items: center;
  cursor: default;
  display: inline-flex;
  max-width: 100%;
  padding: 0 8px;
  vertical-align: middle;
  white-space: nowrap;
}

h2 {
  font-family: Roboto, sans-serif;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: .0125em;
  line-height: 2rem;
  word-break: break-all;
}

.aliases > span {
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: .0071428571em;
}

p {
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: .0071428571em;
  color: rgba(0, 0, 0, .6);
}

a {
  align-items: center;
  background-color: rgb(24, 103, 192);
  border-style: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 500;
  height: 28px;
  justify-content: center;
  letter-spacing: 1px;
  line-height: 21px;
  margin: 4px;
  min-width: 48px;
  outline: rgb(255, 255, 255) none 0;
  overflow: visible;
  padding: 0 13px;
  position: relative;
  text-decoration: rgb(255, 255, 255);
  text-decoration-line: none;
  text-decoration-style: solid;
  user-select: none;
  vertical-align: middle;
}
</style>