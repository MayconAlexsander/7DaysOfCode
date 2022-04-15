var produtos = []
var nome_produto
var categoria

function submitBloco1() {

    var submit_bloco1 = document.querySelector('input[name="submit-bloco1"]:checked').value
    var caso_nao = document.getElementById("caso-nao")
    
    if (submit_bloco1 == "nao") {

        caso_nao.innerText = "See you later👋"

        var bloco_2 = document.getElementById("bloco-2")
        var bloco_3 = document.getElementById("bloco-3")
        var btn_gerar_lista = document.getElementById("btn-gerar_lista")

        bloco_2.classList.add("hidden")
        bloco_3.classList.add("hidden")
        btn_gerar_lista.classList.add("hidden")

    } else if (submit_bloco1 == "sim") {
        caso_nao.innerText = ""
        removeHiddenBloco2()
    }

}

function submitBloco2() {

    var submit_bloco2 = document.getElementById("nome_produto").value
    nome_produto = submit_bloco2
    var revisao_bloco2 = document.querySelector("#bloco-2 .revisao")

    if (nome_produto !== "") {
        revisao_bloco2.innerHTML = `Produto: <span style="font-weight: 400;">${nome_produto}</span>`
        removeHiddenBloco3()
    }

    document.getElementById("nome_produto").value = ""

}

function submitBloco3() {

    var categorias = document.getElementById("categorias")
    var submit_bloco3 = categorias.options[categorias.selectedIndex].value
    categoria = submit_bloco3
    var revisao_bloco3 = document.querySelector("#bloco-3 .revisao")

    if (categoria !== "") {
        revisao_bloco3.innerHTML = `Categoria: <span style="font-weight: 400;">${categoria}</span>`
        removeHiddenBtnGerarLista()
    }

    categorias.selectedIndex = 0
    
}

function submitBtnGerarLista() {

    produtos.push({"produto": nome_produto, "categoria": categoria})

    listarCompras()

    var element = document.getElementById("bloco-1")
    
    element.innerHTML = `
    <div class="bloco" id="bloco-1">
        <div class="bloco-header">
            <label>Você deseja <span style="color: #ff7675;">REMOVER</span> um produto da sua lista de compras?</label>
        </div>
        
        <div class="bloco-body">
            <input type="radio" name="submit-bloco1" id="radio-sim" value="sim">Sim</input>
            <input type="radio" name="submit-bloco1" id="radio-nao" value="nao">Não</input>
            <button type="submit" onclick="removerProduto()">Próximo ⬇</button>
        </div>

        <div id="caso-nao"></div>
    </div>
    `

}

function listarCompras() {

    var lista_compras = document.getElementById("lista-compras")
    var compras = document.getElementById("compras")

    compras.innerHTML = ""

    for (var i = 0; i < produtos.length; i++) {

            compras.innerHTML += `
            <tr>
                <td>🔹 ${produtos[i].produto}</td>
                <td>🔸 ${produtos[i].categoria}</td>
            </tr>
            `
            
    }

}

function removerProduto() {

    var submit_bloco1 = document.querySelector('input[name="submit-bloco1"]:checked').value
    var caso_nao = document.getElementById("caso-nao")
    var caso_remover = document.getElementById("caso-remover")

    if (submit_bloco1 == "nao") {
        
        caso_nao.innerText = "See you later👋"
        caso_remover.innerHTML = ""
        removerBlocos()

    } else if (submit_bloco1 == "sim") {

        caso_nao.innerText = ""
        removerBlocos()
        caso_remover.innerHTML = `
        <div class="bloco-header">
            <label>Qual produto você deseja remover? </label>
        </div>

        <div class="bloco-body">
            <input type="text" id="input-remover" placeholder="Ex.: Desinfetante">
            <button type="submit" id="btn-remover">Remover ✖</button>
        </div>

        <div class="revisao"></div>
        `
        
        var btn_remover = document.getElementById("btn-remover")

        btn_remover.addEventListener("click", 
            function() {

                var revisao_remover = document.querySelector("#caso-remover .revisao")
                var input_remover = document.getElementById("input-remover").value
                document.getElementById("input-remover").value = ""

                for(var i = 0; i <= produtos.length; i++) {

                    if (produtos == "") {
                        revisao_remover.innerHTML = "A lista está vazia."
                    } else if (produtos[i].produto.toLowerCase() == input_remover.toLowerCase()) {
                        produtos.splice(i, 1)
                        
                        listarCompras()
                        
                        revisao_remover.innerHTML = `Produto "${input_remover}" removido com sucesso!`
                    } else {
                        revisao_remover.innerHTML = `O produto "${input_remover}" não está na lista.`
                    }

                }

            }
        )

    }

    function removerBlocos() {
        var bloco_2 = document.getElementById("bloco-2")
        var bloco_3 = document.getElementById("bloco-3")
        var btn_gerar_lista = document.getElementById("btn-gerar_lista")

        bloco_2.classList.add("hidden")
        bloco_3.classList.add("hidden")
        btn_gerar_lista.classList.add("hidden")
    }

}



// ===== Remove a classe .hidden ==========
function removeHiddenBloco2() {
    var element = document.querySelector("#bloco-2")
    element.classList.remove("hidden")
}

function removeHiddenBloco3() {
    var element = document.querySelector("#bloco-3")
    element.classList.remove("hidden")
}

function removeHiddenBtnGerarLista() {
    var element = document.querySelector("#btn-gerar_lista")
    element.classList.remove("hidden")
}