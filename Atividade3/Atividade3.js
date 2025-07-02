//Crie uma função que receba um número e retorne uma Promise;
//Caso o número seja par, retorne como resolve a mensagem ‘Número par’;
//Caso o número seja ímpar, retorne como reject a mensagem ‘Número ímpar’;
//Realize o tratamento da função para mostrar ambos as possibilidade no console, e após seu retorno, exiba o número que foi passado para a função utilizando o finally:

function parOuImpar(num) {    
 return new Promise((resolve, reject) => {
        num % 2 == 0 ? ('Número par') : reject('Numero Impar');
    });
}
    function teste () {
      const num = 8;

      parOuImpar(num)
        .then(valor => console.log(valor))
        .catch(err => console.log(err))
        .finally(() => console.log('numero: ', num));

    }
 teste();