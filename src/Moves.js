const files = ["A", "B", "C", "D", "E", "F", "G", "H"]
const ranks = [8, 7, 6, 5, 4, 3, 2, 1].reverse() // [1,2,3,4,5,6,7,8]
const MOVE = {
    LEFT: "left",
    RIGHT: "right",
    UP: "up",
    DOWN: "down"
}
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
let move = (coord:String, direction:String) => {
    let fileAsString = getFileAsString(coord)
    let fileIndex = getFileIndex(fileAsString)
    let rankAsNumber = getRankAsNumber(coord)
    let rankIndex = getRankIndex(rankAsNumber)
    let newCoordString = "";

    switch(direction) {
        case MOVE.UP:
            newCoordString = getCoord(fileAsString, ranks[rankIndex + 1])
            break;
        case MOVE.DOWN:
            newCoordString = getCoord(fileAsString, ranks[rankIndex - 1])
            break;
        case MOVE.LEFT:
            newCoordString = getCoord(files[fileIndex - 1], rankAsNumber)
            break;
        case MOVE.RIGHT:
            newCoordString = getCoord(files[fileIndex + 1], rankAsNumber)
            break;
        default:
            newCoordString = coord
    }

    return newCoordString
}

console.log( move("C3", MOVE.RIGHT) )   // D3
console.log( move("C3", MOVE.LEFT) )   // B3
console.log( move("C3", MOVE.UP) )      // C4
console.log( move("C3", MOVE.DOWN) )    // C2

window.move = move
