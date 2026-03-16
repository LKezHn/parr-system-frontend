import { defineStore } from 'pinia'

export const useUIStore = defineStore("ui", {

    state: () => ({
        liturgicalSeason: "ordinario"
    }),

    getters: {

        themeColor(state){
            const colors = {
                ordinario: "#2E7D32",
                cuaresma: "#6A1B9A",
                adviento: "#8E24AA",
                pascua: "#C8A95B",
                navidad: "#C8A95B"
            }

            return colors[state.liturgicalSeason]
        },

    },

    actions : {

        setSeason(season) {
            this.liturgicalSeason = season
        }

    }

})