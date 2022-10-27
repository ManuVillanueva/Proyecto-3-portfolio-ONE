function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    };
    console.log(input.parentElement);

    //Condición para verificar si el validity del input es valido y de lo contrario mostrar el mensaje el de error del input 
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    };
};

// array que contiene los objetos de los inputs
const tipoDeErrores = [
        
];
