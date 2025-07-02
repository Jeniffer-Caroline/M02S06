//Crie uma função que retorna uma Promise e seu resolve será a mensagem ‘Concluído após 3 segundos’;
//Este resolve deverá ser chamado após 3s através do método setTimeout;
//Realize o tratamento do seu retorno utilizando async e await;
var varPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Concluido");
    }, 3000);
});
async function funcaoExPromise(){
    const msg = await varPromise;
    console.log(msg);
}
funcaoExPromise();

