document.getElementById("siguiente").disabled = true
console.log("Hola amigo, Cual es tu nombre?")

function nombre(nombre) {
    console.log(
        `mucho gusto ${nombre} ayudame con mi mision `+
        'presiona siguiente para continuar'
        )
    document.getElementById("siguiente").disabled = false;
}