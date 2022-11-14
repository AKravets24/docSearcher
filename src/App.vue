<template>
  <div class="app-wrapper">
    <main-page/>
  </div>
</template>

<script lang="ts">
  import MainPage from '@/frontend/pages/main/Main.vue'
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'App',
    components: { MainPage }
  });
</script>

<style lang="scss">

  .app-wrapper {
    padding: 0 50px;
    margin: 0;
  }

  #app {
    font-family: Montserrat, sans-serif;
    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*color: #2c3e50;*/


  }
</style>
