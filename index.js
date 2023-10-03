function criarCamposDeNotas() {
  const quantidadeNotas = parseInt(document.getElementById("quantidadeNotas").value);
  const camposDeNotasDiv = document.getElementById("camposDeNotas");

  // Limpa os campos de notas anteriores (se houver)
  camposDeNotasDiv.innerHTML = "";

  for (let i = 1; i <= quantidadeNotas; i++) {
      const notaInput = document.createElement("input");
      notaInput.type = "number";
      notaInput.placeholder = "Nota " + i;
      notaInput.id = "nota" + i;
      camposDeNotasDiv.appendChild(notaInput);
  }

}

function medialuno() {
  const quantidadeNotas = Number(document.getElementById("quantidadeNotas").value);
  let soma = 0;

  for (let i = 1; i <= quantidadeNotas; i++) {
      const nota = Number(document.getElementById("nota" + i).value);

      if (!isNaN(nota)) {
          soma += nota;
      } else {
          alert("Por favor, insira notas válidas.");
          return; // Sai da função se uma nota inválida for inserida
      }
  }

  const media = soma / quantidadeNotas;

  // Armazene a média na sessionStorage
  sessionStorage.setItem('media', media);

  // Redirecione para a página "resultado.html"
  window.location.href = 'resultado.html';
}

 
 // Chame a função medialuno quando necessário, por exemplo, quando um botão for clicado
 // Certifique-se de que o HTML tenha elementos com IDs 'nota', 'nota2', 'resultado' e 'mensagem'.
 




 