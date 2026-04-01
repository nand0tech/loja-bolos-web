export function iniciarAvaliacoes() {
  let nota = 0;

  const estrelas = document.querySelectorAll(".estrelas-form span");
  const botao = document.getElementById("enviar");
  const lista = document.getElementById("lista-avaliacoes");

  estrelas.forEach((estrela, index) => {
    estrela.addEventListener("click", () => {
      nota = index + 1;

      estrelas.forEach((e) => e.classList.remove("ativa"));

      for (let i = 0; i < nota; i++) {
        estrelas[i].classList.add("ativa");
      }
    });
  });

  let totalAvaliacoes = 0;

  botao.addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();
    const comentario = document.getElementById("comentario").value.trim();

    if (nome === "" || comentario === "" || nota === 0) {
      alert("Preencha primeiro!");
      return;
    }

    const nova = document.createElement("div");
    nova.classList.add("depoimentos");

    nova.innerHTML = `
      <strong>${nome}</strong> - ⭐ ${nota} estrelas <br><br>
      ${comentario}
    `;

    lista.prepend(nova);
   
    totalAvaliacoes++;

  
    document.getElementById("contador").textContent = totalAvaliacoes;
    document.getElementById("nome").value = "";
    document.getElementById("comentario").value = "";

   
    nota = 0;
    estrelas.forEach((e) => e.classList.remove("ativa"));
  });
}
