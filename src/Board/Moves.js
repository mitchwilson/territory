const files = ["A", "B", "C", "D", "E", "F", "G", "H"]
const ranks = [8, 7, 6, 5, 4, 3, 2, 1].reverse() // [1,2,3,4,5,6,7,8]

export const GO = {
    LEFT: "left",
    RIGHT: "right",
    UP: "up",
    DOWN: "down"
}

export const KING_MOVES = [
  [GO.RIGHT],
  [GO.RIGHT, GO.DOWN],
  [GO.DOWN],
  [GO.DOWN, GO.LEFT],
  [GO.LEFT],
  [GO.RIGHT],
  [GO.UP, GO.LEFT],
  [GO.UP],
  [GO.UP, GO.RIGHT],
]

export const BLACK_PAWN_MOVES = [
  [GO.DOWN, GO.LEFT],
  [GO.DOWN, GO.RIGHT]
]

export const WHITE_PAWN_MOVES = [
  [GO.UP, GO.LEFT],
  [GO.UP, GO.RIGHT]
]

let getCoord = (file, rank) => {
    return file + rank
}
let getFileAsString = (coord:String) => {
    return String(coord[0])
}
let getFileIndex = (file) => {
    return files.indexOf(file)
}
let getRankAsNumber = (coord) => {
    return Number(coord[1]) // Rank must be a number
}
let getRankIndex = (rank) => {
    return ranks.indexOf(rank)
}
export let getCoordForMove = (coord:String, path:Array) => {

    return path.reduce( (acc, curr, idx, arr) => {
      let direction = curr
      let fileAsString = getFileAsString(acc)
      let fileIndex = getFileIndex(fileAsString)
      let rankAsNumber = getRankAsNumber(acc)
      let rankIndex = getRankIndex(rankAsNumber)
      let newCoordString = "";

      switch(direction) {
          case GO.UP:
              newCoordString = getCoord(fileAsString, ranks[rankIndex + 1])
              break;
          case GO.DOWN:
              newCoordString = getCoord(fileAsString, ranks[rankIndex - 1])
              break;
          case GO.LEFT:
              newCoordString = getCoord(files[fileIndex - 1], rankAsNumber)
              break;
          case GO.RIGHT:
              newCoordString = getCoord(files[fileIndex + 1], rankAsNumber)
              break;
          default:
              newCoordString = acc
      }
      return newCoordString
    }, coord)

}
