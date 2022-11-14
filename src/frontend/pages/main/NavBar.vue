<template>
  <div class="navbar-wrapper">
    <p class="font-M top-margin">Поиск документа</p>
    <my-input type="text" placeholder="Введите ID документа" @input="preSearch"/>
    <div v-if="isLoading" class="loader top-margin">
      <img :src="loader" alt="Err">
      <p class="font-M" >Информация загружается...</p>
    </div>

    <div v-if="isError" class="top-margin">
      <p class="font-M errorText">Произошла ошибка, попробуйте еще раз</p>
    </div>

    <p class="font-M top-margin" >Результаты</p>
    <p class="font-S-thin font-col-silent not-found" v-if="!docs.length">Ничего не найдено</p>
    <div class="result-wrapper">
      <div :key="doc.id" v-for="doc in docs" class="flexed result" @click="selectItem(doc)">
        <div class="cover">
          <img :src="doc.image || coverSmall" alt="Err!">
        </div>
        <div class="short-info">
          <p class="font-S">{{ doc.name }}</p>
          <p class="font-S-thin"> 12MB </p>
        </div>
      </div>
    </div>



  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, Ref } from "vue";
  import { useDocStore } from '@/frontend/store/docStore';
  import { storeToRefs } from 'pinia';
  import  coverSmall  from '@/frontend/media/images/defaultCover.png';
  import  loader  from '@/frontend/media/loaders/loader.gif'
  import {DocResponse_Type} from "@/frontend/dal/RestClient";


  export default defineComponent({
    name: "NavBar",

    setup() {

      const store = useDocStore();

      const {isLoading, isError, docs} = storeToRefs(store);
      const {doSearch, setSelectedDoc}  = store;

      const _timeoutID: Ref<null | number> = ref(null);


      const setDebounce = async ({ value, delay }: {value: string, delay: number} ) => {
        clearTimeout(_timeoutID.value as number);
        _timeoutID.value = await setTimeout(() => {
          doSearch( value )
        }, delay);
      };


      const delay = 700;
      const preSearch = ({ target }: Event) => {
        const { value } = target as HTMLInputElement;
        setDebounce({value, delay})
      };

      const selectItem = (item: DocResponse_Type) =>  {
        if (item) {
          setSelectedDoc(item)
        }
      };

      return { isLoading, isError, loader, docs, coverSmall, preSearch, selectItem }
    },

  })
</script>

<style scoped>
  .navbar-wrapper {
    width: 280px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 20px;
  }

  .top-margin {
    margin-top: 30px;
    margin-bottom: 15px;
  }

  .not-found {
    margin-top: 15px;
  }

  .result-wrapper {
    min-width: 240px;
    cursor: pointer;
  }

  .result {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 10px 0;
  }

  .loader {
    display: flex;
    align-items: center;
  }

  .loader img{
    height: 30px;
    width:  30px;
    margin: 0 5px;
  }

  .cover img {
    height: 70px;
    width: 70px;
  }

  .short-info {
    padding: 15px;
  }

  .short-info  :first-child {
    margin-bottom: 10px;
  }

</style>