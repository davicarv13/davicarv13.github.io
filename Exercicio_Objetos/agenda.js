class Pessoa{
	constructor(nome, sobrenome, cpf, dataNascimento){
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.cpf = cpf;
		this.dataNascimento = dataNascimento;
	}
}

class Endereco{
	constructor(tipo, logradouro, numero, cep, complemento){
		this.tipo = tipo;
		this.logradouro = logradouro;
		this.numero = numero;
		this.cep = cep;
		this.complemento = complemento;
	}
}

class Numero{
	constructor(tipo, ddd, numero){
		this.tipo = tipo;
		this.ddd = ddd;
		this.numero = numero;
	}
	
	mudaNumero(numero){
		this.numero = numero;
	}
}

class Contato{
	constructor(){
		this.Pessoa;
		this.arrEndereco = [];
		this.arrNumero = [];
	}
	
	adicionaPessoa(pessoa){
		this.pessoa = pessoa;
	}
	
	adicionaEndereco(endereco){
		this.arrEndereco.push(endereco);
	}
	
	 adicionaNumero(numero){
		this.arrNumero.push(numero);
	}
}

class Agenda{
	constructor(){
		this.arrContato = [];
	}
	
	instanciarContato(contato){
		this.arrContato.push(contato);
	}
}

var agenda = new Agenda();
var agenda = new Agenda();
var pessoa = new Pessoa("..", "..", "..", "..");
var endereco = new Endereco("..", "..", "..", "..", "...");
var numero = new Numero("..", 111, 111);
var contato = new Contato();

contato.adicionaPessoa(pessoa);
contato.adicionaEndereco(endereco);
contato.adicionaNumero(numero);

agenda.instanciarContato(contato);