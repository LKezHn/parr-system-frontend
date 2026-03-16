export function mapSeason(apiSeason) {

  const map = {
    advent: "adviento",
    christmas: "navidad",
    lent: "cuaresma",
    easter: "pascua",
    ordinary: "ordinario"
  }

  return map[apiSeason] || "ordinario"

}