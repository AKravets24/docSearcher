<template>
  <input
          class="input" type="text"
          :placeholder="placeholder"
  >
</template>

<script lang="ts">
  import {defineComponent} from "vue";

  export default defineComponent({

    name: "MyInput",

    props: {
      placeholder: {
        type: String,
        required: false,
      },
    }
  })
</script>


<style scoped lang="scss">
  .input {
    width: 90%;
    height: 49px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding-left: 25px;
    outline: none;
    border: none;
    border-radius: 3px;
  }

</style>
