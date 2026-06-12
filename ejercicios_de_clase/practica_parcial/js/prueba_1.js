var contraseña;
contraseña = document.getElementById("contraseña_input");
var checkbox;
checkbox = document.getElementById("mostrar_contraseña");

checkbox.onclick = function() {
    if (checkbox.checked) {
        contraseña.type = "text";
    } else {
        contraseña.type = "password";
    }
};
