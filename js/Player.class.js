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
    EmptyFunction() {
        for(var i=0; i<6; i++) {
            this.matrizPosition[i] = new Array(7);
        }
    }
    changerTurno(turn) {
        this.turno = turn;
    }
}