var produtos = []
var nome_produto
var categoria

function submitBloco1() {

    var submit_bloco1 = document.querySelector('input[name="submit-bloco1"]:checked').value
    var caso_nao = document.getElementById("caso-nao")
    
    if (submit_bloco1 == "nao") {
        caso_nao.innerText = "See you later👋"
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