function casa (x) {
    var txNombre;
    txNombre = document.getElementById("inputText");
    alert(txNombre);
    txNombre.value = "hola mundo" + " " + x;
};

function ver_contraseña() {
    var txtContraseña
    txtContraseña = document.getElementById("passwordINput");
    txtContraseña.type = "text";
}
function ocultar_contraseña() {
    var txtContraseña
    txtContraseña = document.getElementById("passwordINput");
    txtContraseña.type = "password";
}