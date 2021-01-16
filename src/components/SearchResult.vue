<template>
  <div>
    <Item v-for="result in items" :key="hash(result)" :item="result"></Item>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Item from "./Item.vue";
import * as Hash from "object-hash";

export default defineComponent({
  name: "SearchResult",
  props: ['items'],
  setup: ({items}: { items: Array<Item> }) => {
  },
  methods: {
    hash: Hash.MD5
  },
  components: {
    Item
  },
})
</script>

<style>
</style>
