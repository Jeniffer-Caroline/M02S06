//implemente uma função para que quando o botão salvar for clicado seja chamado o endpoint posts utilizando o metodo http POST e passando os dados do formulario nos campos correspondentes no corpo da chamada;
//Após o retorno da API exiba a mensagem  'Dados salvos com sucesso' utilizando window.alert:

const titulo = document.getElementById('titulo');
const corpo = document.getElementById('corpo');
const salvar = document.getElementById('salvar');

function salvarDados(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: titulo.value,

            body: corpo.value,
            
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {
console.log(json);
window.alert('Dados salvos com sucesso');
    });
}

salvar.onclick = salvarDados;


