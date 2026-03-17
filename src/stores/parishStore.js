import { defineStore } from "pinia"
import api from "@/services/api"

export const useParishStore = defineStore("parish", {

  state: () => ({
    parish: null,
    loading: false
  }),

  getters: {

    parishName: (state) => "Parroquia " + state.parish?.name || "",
    parishSlug: (state) => state.parish?.slug || ""

  },

  actions: {

    async fetchParish() {

      try {
        this.loading = true
        const { data } = await api.get("/context/parish")
        this.parish = data

      } catch (error) {

        console.error("Error obteniendo parroquia")

      } finally {
        this.loading = false
      }

    }

  }

})