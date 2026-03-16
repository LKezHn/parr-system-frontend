
export function getCachedLiturgicalData() {

  const cached = localStorage.getItem("liturgicalData")

  if (!cached) return null

  const parsed = JSON.parse(cached)

  const today = new Date().toDateString()

  if (parsed.date === today) {
    return parsed
  }

  return null

}

export function cacheLiturgicalData(data) {

  const payload = {
    date: new Date().toDateString(), data
  }

  localStorage.setItem(
    "liturgicalData",
    JSON.stringify(payload)
  )

}