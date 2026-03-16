export function mapSeason(apiSeason) {

  const map = {
    Advent: "adviento",
    Christmas: "navidad",
    Lent: "cuaresma",
    Easter: "pascua",
    Ordinary: "ordinario"
  }

  return map[apiSeason] || "ordinario"

}