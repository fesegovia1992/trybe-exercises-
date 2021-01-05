function encode(code) {

    let palavra = code.split("");

    for (let index = 0; index < palavra.length; index +=1) {
        if (palavra[index] == "a") {
            palavra[index] = 1;
        }
        else if (palavra[index] == "e"){
                palavra[index] = 2;    
        }
        else if (palavra[index] == "i"){
                palavra[index] = 3;
        }
        else if (palavra[index] == "o"){
                palavra[index] = 4;
        }
        else if (palavra[index] == "u"){
              (palavra[index]) = 5;
        }

    }
    let list = palavra.join("");
    return list; 
};
console.log(encode("hi there!")); 


function decode(code) {
  let palavra = code.split("");

    for (let index = 0; index < palavra.length; index +=1) {
        if (palavra[index] == "1") {
            palavra[index] = "a";
        }
        else if (palavra[index] == "2"){
                palavra[index] = "e";    
        }
        else if (palavra[index] == "3"){
                palavra[index] = "i";
        }
        else if (palavra[index] == "4"){
                palavra[index] = "o";
        }
        else if (palavra[index] == "5"){
              (palavra[index]) = "u";
        }

    }
    let list = palavra.join("");
    return list; 
};

const functions = { encode, decode };
module.exports = functions;