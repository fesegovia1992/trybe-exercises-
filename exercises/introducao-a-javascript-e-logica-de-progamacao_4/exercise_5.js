let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
};


let info2 = {
    personagem: "Tio Patinhas",
    origem: " e Christmas on Bear Mountain, Dell's Four Comics #178",
    nota: " e O último MacPatinhas",
    recorrente: "Sim"
};

for (let key in info) {

    console.log(info[key] + ' ' + info2[key]);
    if (info.recorrente[key] == info2.recorrente[key]) {
        info['recorrente'] = 'Ambos recorrentes';
    }
    else {
        console.log('Não recorrentes');
    }
}

