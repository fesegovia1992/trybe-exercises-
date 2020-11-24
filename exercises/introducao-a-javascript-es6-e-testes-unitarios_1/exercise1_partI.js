//Ex 1 parte I
const testingScope = (escopo) => { 
    if (escopo === true) { 
      let ifScope = `Não devo ser utilizada fora do meu escopo (if).`;
      ifScope = `${ifScope} Ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
  }

  testingScope(true);

  //Ex 1 parte II

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  const ordemCrescente = () => []
    oddsAndEvens.sort(function(a, b) {
        return a - b;
    });
  
  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

  //Ex 2 parte I
  const fatorial = n => {
    if (n > 1) {
        return n * fatorial(n - 1)
    }
    return n
}
  console.log(fatorial(4));