import axios from "axios"

const CAL_API = "http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today"

export async function fetchLiturgicalDay() {

  const { data } = await axios.get(CAL_API)

  return data

}