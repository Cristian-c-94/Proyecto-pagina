const listaProyectos = document.querySelector("#lista-proyectos");

const tecnologiasAprendidas = document.querySelector("#lista-tecnologias");

listaProyectos.innerHTML = generarListaProyectos();

tecnologiasAprendidas.innerHTML = generarListaTecnologias();