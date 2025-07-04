//Altere o comportamento do botão cadastrar para incluir os dados salvos em uma lista na localStorage;

let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const perfil = document.querySelector("#perfil");
const bntCadastrar = document.querySelector("#cadastrar");
const btnLimpar = document.querySelector("#limpar");
const tablebody = document.querySelector("#tabela-body");

bntCadastrar.onclick = () => {
    const usuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        perfil: perfil.value
    };

    listaUsuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    btnLimpar.onclick();
    tablebody.innerHTML = "";
    listarUsuarios();

    nome.focus();
};

btnLimpar.onclick = () => {
    nome.value = "";
    email.value = "";
    senha.value = "";
    perfil.value = "";
    nome.focus();
};

listarUsuarios();

function listarUsuarios() {
    for (let i = 0; i < listaUsuarios.length; i++) {
        const usuario = listaUsuarios[i];
        tablebody.innerHTML += `
        <tr>
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.perfil}</td>
        </tr>
        `;
    }
}

