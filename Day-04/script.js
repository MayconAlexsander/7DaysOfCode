var num_secreto = parseInt(Math.random() * 11)
var num_jogador
var tentativas = 3
var result = document.getElementById("result")
var tentativas_tela = document.getElementById("tentativas")

console.log(num_secreto)

function verificarChute() {
    num_jogador = document.getElementById("num_jogador").value
    document.getElementById("num_jogador").value = ""

    if (tentativas > 0) {

        if (!isNaN(num_jogador) && num_jogador >= 0 && num_jogador <= 10 && num_jogador != "") {
            
            if (num_jogador == num_secreto && tentativas >= 0) {
                tentativas = 0
                result.innerHTML = `Você <span id="acertou">ACERTOU!</span> O número secreto era ${num_secreto}!`
            } else {
                tentativas--
                result.innerHTML = `Você <span id="errou">ERROU!</span> Tente novamente`
            }
            
        } else {
            alert("Número/caractere inválido!")
        }

        tentativas_tela.innerHTML = `Você tem <strong>${tentativas}</strong> tentativa(s)`

    } else {
        alert("Fim de jogo.\nRecarregue a página para jogar novamente")
    }

}