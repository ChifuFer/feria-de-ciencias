function enviar(){
    let nombre = document.getElementById('nombre').value;
	  let opinion = document.getElementById('opinion').value;
	  let puntuacion = document.getElementById('puntuacion').value;
    /* document.getElementById('nombre1').innerHTML = nombre;
    document.getElementById('nombre1').style.color = "wite"
    document.getElementById('opinion2').innerHTML = opinion;
    document.getElementById('opinion2').style.color = "wite"
    document.getElementById('puntuacion3').innerHTML = puntuacion;
    document.getElementById('puntuacion3').style.color = "wite"
    document.getElementById('puntuacion3').style.border = "20px" */  
    let nodo = document.createElement("div")
    nodo.innerHTML = `<p>nombre: ${nombre}</p>
                    <p>opinion: ${opinion}</p>
                    <p>puntuacion: ${puntuacion}</p>`

    let padre = document.getElementById ("boxdato")
    padre.appendChild(nodo)
}