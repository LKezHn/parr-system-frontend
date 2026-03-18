import { defineStore } from "pinia"
import api from "@/services/api"

export const useParishStore = defineStore("parish", {

  state: () => ({
    parish: null,
  }),

  getters: {

    parishName: (state) => "Parroquia " + state.parish?.name || "",
    parishSlug: (state) => state.parish?.slug || ""

  },

  actions: {

    async fetchParish() {

      try {

        const subdomain = window.location.hostname.split(".")[0]

        const { data } = await api.get("/context/parish", {
            headers: {
              "X-Subdomain": subdomain
            }
        })
        this.parish = data

      } catch (error) {

        console.error("Error obteniendo parroquia")

      }

    }

  }

})