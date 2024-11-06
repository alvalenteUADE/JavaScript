function calcularDiasVividos(fechaNacimiento) {
    let hoy = new Date();
    let nacimiento = new Date(fechaNacimiento);
    let diferenciaTiempo = hoy - nacimiento;
    let diasVividos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
    return diasVividos;
}

function mostrarBienvenida() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let ciudad = document.getElementById("ciudad").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;

 
    let diasVividos = calcularDiasVividos(fechaNacimiento);

    
    document.getElementById("mensaje").innerHTML = "¡Bienvenido " + nombre + " " + apellido + " de " + ciudad + "!<br>";
    document.getElementById("mensaje").innerHTML += "Viviste " + diasVividos + " dias.";
}