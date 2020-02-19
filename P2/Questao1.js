class Cliente{
	constructor(nome, telefone){
		this.nome = nome;
		this.telefone = telefone;
	}
}

class Quarto{
	constructor(tipo){
		this.tipo = tipo;
	}
}

class Reserva{
	constructor(dataChegada, dataSaida, quarto, numeroCriancas){
		this.dataChegada = dataChegada;
		this.dataSaida = dataSaida;
		this.quarto = quarto;
		this.numeroCriancas = numeroCriancas;
	}

	calculaValor(){

		var anos = this.dataSaida.getFullYear() - this.dataChegada.getFullYear();
		var meses = this.dataSaida.getMonth() - this.dataChegada.getMonth();

		var dias = (anos * 365) + (meses * 30) + (this.dataSaida.getDate() - this.dataChegada.getDate());

		var valor;

		if(this.quarto.tipo == "Single"){
			valor = 139;
		}
		else if(this.quarto.tipo == "Double"){
			valor = 220;
		}
		else{
			valor = 340;
		}

		return "Valor total: R$"+(valor * dias + this.numeroCriancas * 30)+",00";
	}
}

function insereCliente(){
	var nome = document.getElementById("nome").innerHTML;
	var telefone = document.getElementById("telefone").innerHTML;
	var cliente = new Cliente(nome, telefone);
	return cliente;
}

function insereQuarto(){
	var select = document.querySelector('select');
	var option = select.children[select.selectedIndex];
	var tipo = option.textContent;
	var quarto = new Quarto(tipo);
	return quarto;
}

function insereReserva(quarto){
	var dataChegada = new Date(document.getElementById("dataChegada").value);
	var dataSaida = new Date(document.getElementById("dataSaida").value);
	var numeroCriancas = document.getElementById("numeroCriancas").value;
	var reserva = new Reserva(dataChegada, dataSaida, quarto, numeroCriancas);
	return reserva;
}

function enviaForm(){
	var cliente = insereCliente();
	var quarto = insereQuarto();
	var reserva = insereReserva(quarto);
	alert(reserva.calculaValor());
}

function atualizaNumeroCriancas(){
	alert("asd");
	var select = document.querySelector('select');
	var option = select.children[select.selectedIndex];
	var tipo = option.textContent;
	var numeroCriancas = document.getElementById("numeroCriancas");

	if(tipo == "Single"){
		numeroCriancas.max = "3";
	}
	else if(tipo == "Double"){
		numeroCriancas.max = "2";
	}
	else{
		numeroCriancas.max = "1";
	}
}

function carregaFuncoes(){

	var select = document.querySelector('select');
	select.addEventListener("change", atualizaNumeroCriancas, false);
	
	var enviar = document.getElementById("btnEnviar");
	enviar.addEventListener("click", enviaForm, false);
}

var html = document.getElementsByTagName("html")[0];
html.addEventListener("load", carregaFuncoes(), false);