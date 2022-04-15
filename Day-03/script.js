var area_escolhida = parseInt(prompt("Você quer seguir para que área de desenvolvimento?\n1 - Front-End [Digite 1]\n2 - Back-End [Digite 2]"))

if (area_escolhida == 1) {
	area_escolhida = "Front-End"
	var tech_escolhida = parseInt(prompt("Dentre as tecnologias abaixo, qual gostaria de aprender?\n1 - React [Digite 1]\n2 - Vue[Digite 2]"))
} else if (area_escolhida == 2) {
	area_escolhida = "Back-End"
	var tech_escolhida = parseInt(prompt("Dentre as tecnologias abaixo, qual gostaria de aprender?\n1 - C# [Digite 1]\n2 - Java [Digite 2]"))
}

var destino_escolhido = parseInt(prompt(`Você pretende se especializar na área ${area_escolhida} ou seguir rumo ao FullStack?\n1 - Se especializar em ${area_escolhida} [Digite 1]\n2 - Se tornar FullStack [Digite 2]`))

var lista_techs = []
lista_techs[0] = prompt("Em qual tecnologia você gostaria de se especializar?")

var decisao

do {
	
	decisao = confirm("Tem mais alguma outra tecnologia que você gostaria de aprender?")
	
	if (decisao == true) {
		lista_techs.push(prompt("Em qual outra tecnologia você gostaria de se especializar?"))
	}
	
} while (decisao == true);

console.log(lista_techs)