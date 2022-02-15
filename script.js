const visor = document.querySelector(".resultado");

function calcular(tipo, valor) {
  if (tipo === "acao") {
    if (valor === "c") {
      // limpa o visor da calculadora
      visor.value = "";
    } else if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "."
    ) {
      // botões de operações matemáticas
      visor.value += valor;
    } else if (valor === "=") {
      visor.value = eval(visor.value);
    }
  } else if (tipo === "valor") {
    visor.value += valor;
  }
}
