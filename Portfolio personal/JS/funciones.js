function obtenerTecnologias() {
    const tecnologiasAprendidas = [];

    proyectos.forEach(proyecto => {
            tecnologiasAprendidas.push(proyecto.tecnologias);
    });

    return tecnologiasAprendidas;
} 
 


function obtenerProyectosCompletados() {
    return proyectos.filter(proyecto => proyecto.estado === "Completado");
}


function generarListaProyectos(){
    let html = '';
    let proyectito = obtenerProyectosCompletados();
    proyectito.forEach(function(proyecto){

        html += `
            <div>
                <p> ${ proyecto.nombre }</p>
                <p> Tecnologia: ${proyecto.tecnologias} </p>
                <p> Estado: ${proyecto.estado} </p>
            </div>        
            `
        });

    return html;
}

function generarListaTecnologias(){
    let html = '';
    let tecnologiasAprendidas = obtenerTecnologias();
    tecnologiasAprendidas.forEach(function(tecnologias){

        html += `
            <div>
                <p> ${tecnologias} </p>
            </div>        
            `
        });
        
    return html;
}