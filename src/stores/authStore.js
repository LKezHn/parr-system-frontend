import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'

export const useAuthStore = defineStore("auth",{

    state: () => ({
        token: null,
        user: null
    }),

    getters: {
        isAuthenticated: (state) => !!state.token,
        role: (state) => state.user?.role || null
    },

    actions: {
        
        setToken(token) {

            this.token = token
            localStorage.setItem("token", token)

            try{
                this.user = jwtDecode(token)
            }catch {
                this.logout()
            }

        },

        loadFromStorage(){

            const token = localStorage.getItem("token")
            if(!token) return

            try {
                const decoded = jwtDecode(token)

                if(decoded.exp * 1000 < Date.now()){
                    this.logout()
                    return
                }

                this.token = token
                this.user = decoded
            } catch {
                this.logout()
            }
        },

        logout() {
            this.token = null,
            this.user = null

            localStorage.removeItem("token")
        }

    }


})