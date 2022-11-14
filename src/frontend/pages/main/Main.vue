<template>
  <menu-bar/>
  <div class="flexed content-wrapper">
    <nav-bar/>
    <search-result/>
  </div>

</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import MenuBar from '@/frontend/pages/menu-bar/MenuBar.vue'
  import NavBar from '@/frontend/pages/main/NavBar.vue'
  import SearchResult from '@/frontend/pages/main/SearchResult.vue'

    export default defineComponent({
        name: "MainPage",
        components: { MenuBar, NavBar, SearchResult }
    })
</script>

<style lang="scss" scoped>

  .content-wrapper {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    /*min-height: 575px;*/
    min-height: calc(100vh - 60px);

  }

</style>