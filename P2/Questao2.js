var estado = true;

function mudaEstado(){
	var lampada = document.getElementById("lampada");
	var btn = document.getElementById("btn");
	if(estado == true){
		lampada.src = "lampada_off.gif";
		btn.innerHTML = "Liga";
		estado = false;
	}
	else{
		lampada.src = "lampada_on.gif";
		btn.innerHTML = "Desliga";
		estado = true;
	}
}

function carregaFuncoes(){
	var btn = document.getElementById("btn");
	btn.addEventListener("click", mudaEstado, false);
}

var html = document.getElementsByTagName("html")[0];
html.addEventListener("load", carregaFuncoes(), false);