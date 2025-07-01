const btnconsole = document.getElementById("console");
const btnRecarregar = document.getElementById("recarregar");
const btnVoltar = document.getElementById("voltar");
const btnAvancar = document.getElementById("avancar");
const btnLocalStorage = document.getElementById("localstorage");
const btnSessionStorage = document.getElementById("sessionstorage");
const btnRecuperarLocalStorage = document.getElementById("recuperarLocalStorage");
const btnRecuperarSessionStorage = document.getElementById("recuperarSessionStorage");
const btnConfirmar = document.getElementById("confirmar");
const btnDelay = document.getElementById("delay");
const btnIntervalo = document.getElementById("intervalo");
const btnPararIntervalo = document.getElementById("pararIntervalo");
let idIntervalo;
/* Console */
btnconsole.addEventListener("click", () => {
    console.log("Mensagem de log");
    console.info("Mensagem de log");
    console.error("Mensagem de log");
    console.warn("Mensagem de log");
});
 
/* Navegação */
btnRecarregar.onclick = () => {
    navigation.reload();
};

btnVoltar.onclick = () => {
    history.back();
};

btnAvancar.onclick = () => {
    history.forward();
};

/*Storage */
btnSessionStorage.onclick = () => {
    const obj = {nome: "Joaquim", idade: 30};
    console.log('obj', obj);
    console.log('stringify', JSON.stringify(obj));
    sessionStorage.setItem("nome", "Joaquim", JSON.stringify(obj));
    sessionStorage.setItem("set_obj",obj);
    sessionStorage.setItem("idade", 30);

};

btnLocalStorage.onclick = () => {
    const lista = ["Joaquim", "Maria", "Pedro"];
    console.log('lista', lista);
    console.log('JSON.stringify', JSON.stringify(lista));
    localStorage.setItem("set_lista", lista);
    localStorage.setItem("set_stringfy", JSON.stringify(lista));

};

btnRecuperarLocalStorage.onclick = () => {
    console.log(localStorage.getItem("set_lista"));
    console.log(JSON.parse(localStorage.getItem( "set_stringfy")));
};

btnRecuperarSessionStorage.onclick = () => {
    console.log(sessionStorage.getItem("set_obj"));
    console.log(JSON.parse(sessionStorage.getItem("setstringfy")));
};

/*Confirmar*/
btnConfirmar.onclick = () => {
    if (window.confirm("Confirma?")) {
        console.log("Confirma");
    }else {
        console.warn("Nao confirma");
    }
};

/*SetTimeout*/
btnDelay.onclick = () => {
    setTimeout(() => {
      console.log("Delay");
    }, 3000);
      console.log("Continua");
};

/*SetInterval*/
btnIntervalo.onclick = () => {
    let i = 0;
    idIntervalo = setInterval(() => {
        console.log('i', i);
        i++;
    }, 500);
};

btnPararIntervalo.onclick = () => {
    clearInterval(idIntervalo);
};