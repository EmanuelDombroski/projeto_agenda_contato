document.getElementById('phone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); 
    value = value.replace(/(\d{5})(\d{4})$/, "$1-$2"); 
    e.target.value = value; 
});

const form = document.getElementById('form-contato');
const inputname = [];
const inputphone = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (verificaNome() && !verificaDuplicado()) {
        adicionaLinha();
        atualizaTabela();
    } else {
        alert('Verifique se colocou nome e sobrenome ou se já inseriu dados cadastrados!');
    }
});

function verificaNome() {
    const name = document.getElementById('name').value.trim();
    const nameParts = name.split(' ');

    return nameParts.length >= 2;
}

function verificaDuplicado() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    const nameDuplicado = inputname.includes(name);
    const phoneDuplicado = inputphone.includes(phone);

    return nameDuplicado || phoneDuplicado;
}


function adicionaLinha() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    inputname.push(name);
    inputphone.push(phone);

    

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = '';

    for (let i = 0; i < inputname.length; i++) {
    let linha = `<tr>`;
    linha += `<td>${inputname[i]}</td>`
    linha += `<td>${inputphone[i]}</td>`
    linha += `</tr>`

    corpoTabela.innerHTML += linha;
    }
}