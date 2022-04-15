function mostrarMensagem() {
    
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    var linguagem = document.getElementById("linguagem").value

    var mensagem = document.getElementById("mensagem")

    if (nome !== "" && idade !== "" && linguagem !== "") {
        mensagem.innerHTML = `
        <hr>
        <p>Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</p>
        <hr>
        `
    }

}

function mostrarPergunta() {

    var linguagem = document.getElementById("linguagem").value
    
    var pergunta = document.getElementById("pergunta")

    if (linguagem != "") {
        pergunta.innerHTML = `
        <p>Você gosta de estudar ${linguagem}?</p>
        <input type="radio" name="resposta" value="sim">
        <label for="respota">Sim</label>
        <input type="radio" name="resposta" value="nao">
        <label for="respota">Não</label>
        <br>
        <button type="submit" onClick="mostraResposta()">Enviar</button>
        `
    }

}

function mostraResposta() {

    var resp_btn_radio = document.querySelector('input[name="resposta"]:checked').value

    var resposta = document.getElementById("resposta")
    
    if (resp_btn_radio == "sim") {
        resposta.innerHTML = `
        <hr>
        <p>Muito bom! Continue estudando e você terá muito sucesso.</p>
        `
    } else if (resp_btn_radio == "nao") {
        resposta.innerHTML = `
        <hr>
        <p>Ahh que pena... Já tentou aprender outras linguagens?</p>
        `
    }

}