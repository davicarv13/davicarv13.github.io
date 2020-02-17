var teste1 = true, teste2 = true, teste3 = true;

function escondeParagrafo1(){
	var paragrafo1 = document.getElementById("conteudo_1");
	var link1 = document.getElementById("enlace_1");
	if(teste1 == true){
		paragrafo1.style.display = "none";
		link1.innerHTML = "Mostrar Conteudo";
		teste1 = false;
	}
	else{
		paragrafo1.style.display = "block";
		link1.innerHTML = "Ocultar Conteudo";
		teste1 = true;
	}

}

function escondeParagrafo2(){
	var paragrafo2 = document.getElementById("conteudo_2");
	var link2 = document.getElementById("enlace_2");
	if(teste2 == true){
		paragrafo2.style.display = "none";
		link2.innerHTML = "Mostrar Conteudo";
		teste2 = false;
	}
	else{
		paragrafo2.style.display = "block";
		link2.innerHTML = "Ocultar Conteudo";
		teste2 = true;
	}
}

function escondeParagrafo3(){
	var paragrafo3 = document.getElementById("conteudo_3");
	var link3 = document.getElementById("enlace_3");
	if(teste3 == true){
		paragrafo3.style.display = "none";
		link3.innerHTML = "Mostrar Conteudo";
		teste3 = false;
	}
	else{
		paragrafo3.style.display = "block";
		link3.innerHTML = "Ocultar Conteudo";
		teste3 = true;
	}
}

function carregaFuncoes(){
	var enlace_1 = document.getElementById("enlace_1");
	enlace_1.addEventListener("click", escondeParagrafo1, false);	

	var enlace_2 = document.getElementById("enlace_2");
	enlace_2.addEventListener("click", escondeParagrafo2, false);	

	var enlace_3 = document.getElementById("enlace_3");
	enlace_3.addEventListener("click", escondeParagrafo3, false);	
}

var html = document.getElementsByTagName("html")[0];
html.addEventListener("load", carregaFuncoes(), false);