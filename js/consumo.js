function consumo() {
    // cria referência com os elemenos da página atraves do ID
    var inKmPercorrido = document.getElementById("inKmPercorrido");
    var inLitroAbastecido = document.getElementById("inLitroAbastecido");
    var outKmPorLitro = document.getElementById("outKmPorLitro");
    var outAviso = document.getElementById("outAviso");

    // obtém e converte para números os caracteres dos campos
    var km = Number(inKmPercorrido.value);
    var lt = Number(inLitroAbastecido.value);

    // condição caso os campos sejam preenchidos com letras ou caso fiquem vazios
    if (inKmPercorrido.value == "" || isNaN(inKmPercorrido.value)) {
        outAviso.textContent = "Os dados estão incorretos!";
        outAviso.style.color = "red";
        outKmPorLitro.style.borderRadius = "0";
        outKmPorLitro.style.fontSize = "0";
        inKmPercorrido.style.borderColor = "red";
        return;

    } else if (inLitroAbastecido.value == "" || isNaN(inLitroAbastecido.value)) {
        outAviso.textContent = "Os dados estão incorretos!";
        outAviso.style.color = "red";
        outKmPorLitro.style.borderRadius = "0";
        outKmPorLitro.style.fontSize = "0";
        inLitroAbastecido.style.borderColor = "red";
    } else {
        var consumoPorLitro = km / lt; // pega os valores das variavel e faz o calculo, dividindo os km rodados pelos litros abastecidos, obtendo o consumo por litro

        outAviso.textContent = "Os dados foram inseridos com sucesso!";
        outAviso.style.color = "rgb(0, 255, 0)";

        inKmPercorrido.style.borderColor = "rgb(0, 255, 0)";
        inLitroAbastecido.style.borderColor = "rgb(0, 255, 0)";

        outKmPorLitro.textContent = "Seu veículo faz " + consumoPorLitro.toFixed(2) + " quilomêtros com 1 litro de combustível abastecido.";
        outKmPorLitro.style.backgroundColor = "rgb(0, 255, 0)";
        outKmPorLitro.style.color = "#000";
        outKmPorLitro.style.borderRadius = "30px";
        outKmPorLitro.style.fontSize = "1.20rem";
        outKmPorLitro.style.padding = "5px 0";
    }

}

var btnConverter = document.getElementById("btnConverter"); // cria uma referência com o botão calcular consumo
btnConverter.addEventListener("click", consumo); // registra um evendo associado e esse botão, para então carregar a função consumo