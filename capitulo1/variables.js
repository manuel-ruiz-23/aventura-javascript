document.getElementById("siguiente").disabled = true

function continuar(nombre) {

    if(!nombre){
        console.log("qp morro no mandaste tu nombre")
    }else{
        console.log(
            `Exelente ${nombre} lo estas haciendo `+
            `muy bien, continuemos`)
        document.getElementById("siguiente").disabled = false
    }
}