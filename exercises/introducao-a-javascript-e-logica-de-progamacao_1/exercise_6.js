let peca = "kIng";


if (peca.toLocaleLowerCase() == "pawn") {
    console.log("pawn -> straight and diagonals");
}
else if (peca.toLocaleLowerCase() =="bishop") {
    console.log("bishop -> diagonals");
}
else if (peca.toLocaleLowerCase() == "knight") {
    console.log("knight -> L");
}
else if (peca.toLocaleLowerCase() == "rook") {
    console.log("rook -> straight");
}
else if (peca.toLocaleLowerCase() == "queen") {
    console.log(" queen -> straight");
}
else if (peca.toLocaleLowerCase() == "king"){
    console.log("king -> straight")
}
else {
    console.log("Doens't exist this piece.");
}    
