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

  //Ex 2 parte II
  function findLongestWord(str) {
    var longest = str.split(' ').reduce((longestWord, currentWord) =>{
      return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, "");
    return longest;
  }
  console.log(findLongestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

  //Ex 2 parte III
  const btn = document.getElementById('btn-clique');
  let click = document.getElementById('cliques');
  let count = 0;

  btn.addEventListener('click', () => click.innerHTML = count += 1)

  