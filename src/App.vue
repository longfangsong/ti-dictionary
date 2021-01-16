<template>
  <div id="container">
    <input id="search" type="text" v-model="search"
           placeholder="Type here for searching something about TiDB..."/>
    <SearchResult id="search-result" v-if="search !== ''" :items="searchResult"></SearchResult>
    <DoYouKnow id="do-you-know" v-else @updated="search = $event"></DoYouKnow>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
import SearchResult from "./components/SearchResult.vue";
import {store} from "./model/store";
import DoYouKnow from "./components/DoYouKnow.vue";

export default defineComponent({
  name: 'App',
  components: {
    DoYouKnow,
    SearchResult,
  },
  setup: () => {
    const search = ref("");
    const searchResult = computed(() => store.fuse.search(search.value).map(it => it.item));
    return {search, searchResult}
  },
})
</script>

<style>
#container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#search {
  width: calc(100% - 16px);
  max-width: 640px;
  color: #1f1f1f;
  max-height: 44px;
  flex: 1;
  font: inherit;
  font-size: 1.2em;
  outline: none;
  padding: 0 0 0 8px;
  border-radius: 4px;
  border: solid 2px #c4c7ce;
  margin-bottom: 4px;
}

#search:focus {
  border: solid 2px #4e6ef2;
}

#search-result, #do-you-know {
  height: calc(100vh - 44px - 16px - 8px);
  width: calc(100% - 16px);
  overflow: scroll;
}
</style>