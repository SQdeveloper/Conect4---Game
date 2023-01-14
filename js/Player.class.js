export class Player {
    turno  = false;
    winner = false;
    matrizPosition = [];

    constructor(turno, winner, matrizPosition){
        this.turno  = turno;
        this.winner = winner;
        this.matrizPosition = matrizPosition;
    }
    
    changeArrayPosition(i,j) {
        this.matrizPosition[i][j] = true;
    }
    changerTurno(turn) {
        this.turno = turn;
    }
}