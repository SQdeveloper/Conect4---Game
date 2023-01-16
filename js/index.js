import { Player } from "./Player.class.js";

//Creamos variables de tipo Player
const matriz1        = []; fillMatriz(matriz1);//Rellenamos la matriz
const matriz2        = []; fillMatriz(matriz2);//Rellenamos la matriz
const Player1       = new Player(true , false, matriz1);
const Player2       = new Player(false, false, matriz2);
const circles       = document.querySelectorAll(".hero__circle");
const row1          = Array.from(circles).slice(0,7);
const row2          = Array.from(circles).slice(7,14);
const row3          = Array.from(circles).slice(14,21);
const row4          = Array.from(circles).slice(21,28);
const row5          = Array.from(circles).slice(28,35);
const row6          = Array.from(circles).slice(35,42);   
const matrizCircle  = [row1, row2, row3, row4, row5, row6];
let color, count=0;

//funcion para rellenar  la matriz de la clase Player
function fillMatriz(matriz) {
    for(var i=0; i<6; i++) {
        matriz[i] = new Array(7);
    }
}

//Ciclo for para que cada uno de los circulos tengan eventos y funcionalidad al hacerles click
for(let i=0; i<6; i++){
    for (let j=0; j<7; j++){
        matrizCircle[i][j].addEventListener("click", ()=>{
            turno(i,j);
            matrizCircle[i][j].style.backgroundColor = color;
            winner(i,j);
        });
    }
}

//Verificamos de quién es turno y en base a ello cambiamos de color
function turno(i,j) {
    if ( Player1.turno == true ) {
        color = "red"
        Player1.changerTurno(false);
        Player2.changerTurno(true)
        Player1.changeArrayPosition(i,j);//guardamos true
    }
    else if ( Player2.turno == true ) {
        color = "blue";
        Player2.changerTurno(false);
        Player1.changerTurno(true);
        Player2.changeArrayPosition(i,j);//guardamos true
    }
}

//Verifica de derecha a izquierda
function rightLeft(i,ordenada) {
    for(let j=ordenada; j<7; j++){
        if(Player1.matrizPosition[i][j] != true) {
            break;
        }
        count++;
    }
}

//Verifica de izquierda a derecha
function leftRight(i, ordenada) {
    if(count == 4) { return }
    count = 0;
    for(let j=ordenada; j>=0; j--){
        if(Player1.matrizPosition[i][j] != true) {
            break;
        }
        count++;
    }
}

function restartColor() {
    const newCircles = document.querySelectorAll(".hero__circle");
    newCircles.forEach(cir => {
        cir.style.backgroundColor = "lightgreen";
    })
}

function winner(i, ordenada) {
    //Ciclo para saber si cumple los 4 true para que gane
    rightLeft(i, ordenada);
    leftRight(i, ordenada);
    //Verificamos si ya completo los 4 true;
    if(count == 4) {
        console.log("ganaste")
        setTimeout(()=>{restartColor()}, 1000);
        Player1.matrizPosition
    }
    count = 0;
}