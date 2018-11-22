function pinta(x,y,color){
    let colores = [
        "#FF0000",  //rojo
        "#FFFF00",  //amarillo
        "#00FF00",  //verde alien
        "#0000FF",  //azul
        "#000000",  //negro
        "#FFFFFF"   //blanco
    ] 

    if(!colores.includes(color)){
        return "Color invalido"
    }
    console.log(color)
    let sqr = document.getElementById(`[${x},${y}]`)
    sqr.style.backgroundColor = color
}


