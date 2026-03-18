import { cacheLiturgicalData, getCachedLiturgicalData } from "@/utils/liturgicalCache"
import api from "./api"

export async function fetchLiturgicalDay() {

    const cache = getCachedLiturgicalData()

    if(cache){
        return cache.data
    }
    
    const { data } = await api.get("/external/liturgical_time")
    cacheLiturgicalData(data)
    return data

}