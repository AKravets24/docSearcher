<template>

  <div class="result-wrapper">
    <div v-if="doc" class="flexed result">
      <div class="cover-preview">
        <img :src="doc.image || defaultCover" alt="Err">
      </div>
      <div class="doc-description">
        <p class="font-M"> Документ {{ doc.id || '(некорректный id!)' }} </p>
        <div class="toolbar-wrapper">
          <my-button @click="click1" class="font-S-thin"> Скачать</my-button>
          <my-button @click="click2" class="font-S-thin" danger>Удалить</my-button>
        </div>
        <p class="font-M description">Описание:</p>
        <p class="font-S-thin font-col-silent"> {{ doc.description }} </p>
      </div>
    </div>

    <div v-else class="no-result">
        <p class="font-S-thin font-col-silent">Выберите документ чтобы посмотреть его содержимое</p>
    </div>

  </div>




</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import {storeToRefs} from "pinia";
    import {useDocStore} from "@/frontend/store/docStore";
    import  defaultCover  from '@/frontend/media/images/defaultCover.png'

    export default defineComponent({
        name: "Search-result",

        setup() {
            const store = useDocStore();

            const {doc} = storeToRefs(store);

            const click1 = () => { console.log(1) };
            const click2 = () => { console.log(2) };

            return { doc, defaultCover, click1, click2 }
        }

    })
</script>

<style scoped>

  .cover-preview {
    padding: 0 30px;
  }

  .toolbar-wrapper {
    margin: 20px  auto 50px auto;
  }

  .description {
    margin-bottom: 15px;
  }

  .result-wrapper {
    padding: 30px;
    margin: 0 auto;
  }

  .no-result {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .btn {
    margin: 5px;
    padding: 5px 20px;
    border-radius: 10px;
    cursor: pointer;
    background: white;
    border: 1px solid grey;
  }

  .btn-ok {
    color: #0D6EFD;
    border: 1px solid #0D6EFD;
  }

  .btn-err {
    color: #DC3545;
    border: 1px solid #DC3545;
  }


</style>