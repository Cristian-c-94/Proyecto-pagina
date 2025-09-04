const listaProyectos = document.querySelector("#lista-proyectos");

const tecnologiasAprendidas = document.querySelector("#lista-tecnologias");

const infoPersonal = document.querySelector("#informacion-personal");

if (listaProyectos) {
    listaProyectos.innerHTML = generarListaProyectos();
}

if (tecnologiasAprendidas){
    tecnologiasAprendidas.innerHTML = generarListaTecnologias();
}

if(infoPersonal){
    infoPersonal.innerHTML = generarAbout();
}
