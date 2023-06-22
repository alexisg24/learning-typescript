//Arrays
const languages: (string | number)[] = []
languages.push('JavaScript')
languages.push(2)

//Arrays & Tuples

/*
[
    ['X', 'O', 'X']     // <- string[]
    ['O', 'X', 'O'],    // <- string[]
    ['X', 'O', ' ']     // <- string[]
]
*/

type CellValue = 'X' | 'O' | '' | ' ' // <- Unique options for array value
//Tuple <- Array with fixed length!!
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', ' ', 'X']
]

//Tuples example in React
type State = [string, (newName:string) => void]
const [hero, setHero]: State = useState('Thor')

type RGB = [number, number, number]
const rgb:RGB = [255, 255, 0] // <- 0 - 255