<template>
  <div class="header">
    <p class="font-L">MyApp</p>
    <p class="font-M-thin">UserName</p>
  </div>
</template>

<script>
    export default {
        name: "menu-bar"
    }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>