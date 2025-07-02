const varPromise = new Promise ((resolve, reject) => {
    resolve("Sucesso");
    reject("Erro");
});
/*
function funcaoExPromise(){
  varPromise.then((valor) => {
    console.log("Valor: ", valor);
  })
  .catch((erro) => {
    console.log("Erro: ", erro);
  })

  .finally(() => {
    console.log("Fim");
  });

}

funcaoExPromise();  */

async function funcaoExAsyncAwait(){
    const msg = await varPromise;
    console.log(msg);
}

funcaoExAsyncAwait();
