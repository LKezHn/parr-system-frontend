import { cacheLiturgicalData, getCachedLiturgicalData } from "@/utils/liturgicalCache"
import axios from "axios"

const CAL_API = "http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today"

export async function fetchLiturgicalDay() {

    const cache = getCachedLiturgicalData()

    if(cache){
        return cache.data
    }
    
    const { data } = await axios.get(CAL_API)
    cacheLiturgicalData(data)
    return data

}