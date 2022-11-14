<template>
  <button type="button" class="btn"
    :class="{'btn-err': danger }"
  >
    <slot></slot>
  </button>
</template>


<script lang="ts">
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "MyButton",

    props: {
      danger: {
        type: Boolean, required: false
      }
    },

    emits: {}

  })
</script>

<style scoped lang="scss">

  .btn {
    margin: 5px;
    padding: 5px 20px;
    border-radius: 10px;
    cursor: pointer;
    background: white;
    color: #0D6EFD;
    border: 1px solid #0D6EFD;
  }

  .btn-err {
    color: #DC3545;
    border: 1px solid #DC3545;
  }

</style>
