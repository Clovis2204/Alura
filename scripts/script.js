const name = document.getElementById("name");
const nameContainer = document.getElementById("name__container");
const nameExibicao = document.getElementById("name__exibicao");

function saveName() {
    localStorage.setItem('name', name.value);
}

function insert_name() {
    var getName = localStorage.getItem('name') || {}
    if(nameContainer !== null) {
        nameContainer.innerHTML += `<h2>${getName}</h2>`;        
    } 
    if(nameExibicao !== null) {
        nameExibicao.innerHTML += `<h1>${getName}</h1>`;        
    }
}
insert_name();


var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var musica = document.querySelectorAll(".musica");

    if (this.value.length > 0) {
        for (var i = 0; i < musica.length; i++) {
            var musica = musica[i];
            var tdNome = musica.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                musica.classList.add("invisivel");
            } else {
                musica.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < musica.length; i++) {
            var musica = musica[i];
            musica.classList.remove("invisivel");
        }
    }
});



var botaoAdicionar = document.querySelector("#adicionar-musicas");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var musica = obtemMusicaDoFormulario(form);

    var erros = validaMusica(musica);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaMusicaTabela(musica);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemMusicaDoFormulario(form) {

    var musica = {
        nome: form.nome.value,
        artista: form.artista.value,
    
    }

    return musica;
}

function montaTr(musica) {
    var musicaTr = document.createElement("tr");
    musicaTr.classList.add("musica");

    musicaTr.appendChild(montaTd(musica.nome, "info-nome"));
    musicaTr.appendChild(montaTd(musica.artista, "info-artista"));

    return musicaTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaMusica(musica) {

    var erros = [];

    if (musica.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }
    if (musica.artista.length == 0) {
        erros.push("O artista não pode ser em branco");
    }
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaMusicaTabela(musica) {
    var musicaTr = montaTr(musica);
    var tabela = document.querySelector("#tabela-musicas");
    tabela.appendChild(musicaTr);
}
