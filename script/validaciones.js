// capturo los inputs del form
window.addEventListener("load", ()=> {
    const form = document.querySelector(".contact__form");
    const name = document.getElementById("name__form");
    const email = document.getElementById("email__form");
    const subject = document.getElementById("subject__form");
    const textarea = document.getElementById("textarea");
    const btnSend = document.querySelector(".btn__send");

    //Esto previene que se recargue la pagina al hacer click en el boton enviar
    form.addEventListener("submit", (r) => {
        r.preventDefault();
        validateInputs();
    });

    const validateInputs = ()=> {
        //capturar los valores ingresados por el usuario
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const subjectValue = subject.value.trim();
        const textareaValue = textarea.value.trim();

        //Comprueba que el usuario ingrese algo en los inputs
        if (nameValue === "") {
            validateFail(name, "Campo Vacío")
        } else {
            validateOk(name);
        };

        if (emailValue === "") {
            validateFail(email, "Campo Vacio");
        } else if (!validateEmail(emailValue)) {
            validateFail(email, "El email no es valido");
        } else {
            validateOk(email);
        };

        if (subjectValue === "") {
            validateFail(subject, "Campo Vacío")
        } else {
            validateOk(subject);
        };

        if (textareaValue === "") {
            validateFail(textarea, "Campo Vacio, por favor escriba su mensaje");
        } else {
            validateOk(textarea);
        };
    };

    //Funciones para mostrar un mensaje en caso de que el usuario no ingrese nada o lo ingrese mal. Y si lo ingresa bien que no muestre ningún mensaje
        const validateFail = (input, message) => {
            const form__container = input.parentElement;
            const notice = form__container.querySelector("p");
            notice.innerText = message;

            form__container.className = "form__container fail";
        };

        const validateOk = (input) => {
            const form__container = input.parentElement;
            form__container.className = "form__container ok";
        };

        // Expresión regular para validar el email ingresado por el usuario. Verificando que siga el temple de un email standar (sacado de stackOverflow)
        const validateEmail = (email) => {
            return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
        };
});