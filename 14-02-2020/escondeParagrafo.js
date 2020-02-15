function escondeParagrafo1(){
	var paragrafo1 = document.getElementById("conteudo_1");
	var link1 = document.getElementById("enlace_1");

	paragrafo1.style.display = "none";
	link1.innerHTML = "Mostrar Conteudo";
}

function escondeParagrafo2(){
	var paragrafo2 = document.getElementById("conteudo_2");
	var link2 = document.getElementById("enlace_2");

	paragrafo2.style.display = "none";
	link2.innerHTML = "Mostrar Conteudo";
}

function escondeParagrafo3(){
	var paragrafo3 = document.getElementById("conteudo_3");
	var link3 = document.getElementById("enlace_3");

	paragrafo3.style.display = "none";
	link3.innerHTML = "Mostrar Conteudo";
}

function stopDefAction(evt) {
    evt.preventDefault();
}

function carregaFuncoes(){
	var enlace_1 = document.getElementById("enlace_1");
	enlace_1.addEventListener("click", escondeParagrafo1, false);	
	enlace_1.addEventListener("click", stopDefAction, false);	

	var enlace_2 = document.getElementById("enlace_2");
	enlace_2.addEventListener("click", escondeParagrafo2, false);	

	var enlace_3 = document.getElementById("enlace_3");
	enlace_3.addEventListener("click", escondeParagrafo3, false);	
}

var html = document.getElementsByTagName("html")[0];
html.addEventListener("load", carregaFuncoes, false);

carregaFuncoes();