
		function preencheSpan(){
			var input = document.getElementById("texto");
			var conteudo = input.value;
			var span = document.getElementById("textoDigitado");
			span.innerHTML = conteudo;
		}

		var input = document.getElementById("texto");
		input.addEventListener("keyup", preencheSpan, false);

