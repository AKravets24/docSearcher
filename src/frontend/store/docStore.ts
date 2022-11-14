import { defineStore } from 'pinia';
import {DocResponse_Type, searchDocs} from "@/frontend/dal/RestClient";

export const useDocStore = defineStore('docStore', {
  state: () => ({
    doc:            null as (DocResponse_Type | null),
    docs:           [] as DocResponse_Type[],
    isLoading:      false as boolean,
    isError:        false as boolean,
  }),

  actions: {

    doSearch (value: string) {
      this.isLoading = true;
      this.isError = false;
      searchDocs( value )
          .then((res: DocResponse_Type[])=> { this.docs = res })
          .catch(()=> {this.isError = true})
          .finally(() => {this.isLoading = false })
    },

    setSelectedDoc (elem: DocResponse_Type) {
      this.doc = elem;
    },

  },

})