class Jogo {
    constructor() {
        this.tabuleiro = [
            ["X", "_", "X"],
            ["O", "O", "O"],
            ["O", "O", "X"]
        ],
        // this.tabuleiro = [
        //     ["X", "X", "X"],
        //     ["O", "O", "X"],
        //     ["O", "O", "X"]
        // ],
            this.jogadorAtual = "X"
    }

    adicionarJogada(row, column) {
        if (this.tabuleiro[row][column] === "_") {
            this.tabuleiro[row][column] = this.jogadorAtual
            this.jogadorAtual = this.jogadorAtual === "X" ? "O" : "X"
            return this
        }
    }

    getPossiblePlays() {
        const possiblePlays = []
        for (let i = 0; i < this.tabuleiro.length; i++) {
            for (let j = 0; j < this.tabuleiro[i].length; j++) {
                if (this.tabuleiro[i][j] === "_") {
                    possiblePlays.push({ row: i, column: j })
                }
            }
        }
        return possiblePlays
    }
    checkWinner() {

        const tabuleiro = this.tabuleiro
        const rows = this.tabuleiro.map(t => t.join(''))
        const column = []
        const diagonals = ["", ""]
        for (let i = 0; i < tabuleiro.length; i++) {
            diagonals[0] += tabuleiro[i][i]
            diagonals[1] += tabuleiro[i][tabuleiro.length - 1 - i]
            column.push(this.tabuleiro.map(l => l[i]).join(''))
        }
        const row = rows
            .concat(column)
            .concat(diagonals)

        return  row.includes("XXX") ? "X" : row.includes("OOO") ? "O" : undefined
    }

    checkEndOfTheGame() {
        return this.tabuleiro.every(row => row.every(cell => cell !== "_")) || this.checkWinner() !== undefined
    }
}


const jogo = new Jogo()
// jogo.addPlayer(0, 0) // X
// jogo.addPlayer(0, 1) // O
// jogo.addPlayer(0, 2) // X
// jogo.addPlayer(1, 0) // O
// jogo.addPlayer(1, 1) // X
// jogo.addPlayer(1, 2) // O
// jogo.addPlayer(2, 0) // X
// console.log(jogo.getPossiblePlays())
console.log(jogo.checkWinner())
console.log(jogo.checkEndOfTheGame());


