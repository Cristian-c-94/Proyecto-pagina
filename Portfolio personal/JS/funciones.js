function obtenerProyectosCompletados() {
    return proyectos.filter(proyecto => proyecto.estado === "Completado");
}

function generarListaProyectos() {
    let html = '';
    let proyectito = obtenerProyectosCompletados();
    proyectito.forEach(function (proyecto) {

        html += `
            <div>
                <p> ${proyecto.nombre}</p>
                <p> Tecnologia: ${proyecto.tecnologias} </p>
                <p> Estado: ${proyecto.estado} </p>
            </div>        
            `
    });

    return html;
}


function obtenerTecnologias() {
    const tecnologiasAprendidas = [];

    proyectos.forEach(proyecto => {
        tecnologiasAprendidas.push(proyecto.tecnologias);
    });

    return tecnologiasAprendidas;
}

function generarListaTecnologias() {
    let html = '';
    let tecnologiasAprendidas = obtenerTecnologias();
    tecnologiasAprendidas.forEach(function (tecnologias) {

        html += `
            <div>
                <p> ${tecnologias} </p>
            </div>        
            `
    });

    return html;
}


function generarAbout() {
    let html = '';

    html += `
            <div>
                <p> Nombre: ${perfil.nombre}</p>
                <p> Mail: ${perfil.mail} </p>
                <p> Profesion: ${perfil.profesion} </p>
                <p> Ciudad: ${perfil.ciudad} </p>
            </div>
            `
    html += `<u><h2> Tecnologías aprendidas: </h2></u>`

    habilidades.forEach((habilidad, index) => {
         html += `
            <div>
                <p> ${index + 1}. ${habilidad}</p>
            </div>
            `
    });

    html += `<u><h2>Educación: </h2></u>`

    educacion.forEach((educacion, index) => {
         html += `
            <div>
                <p> ${index + 1}. ${educacion.curso} - ${educacion.institucion} (${educacion.año}) </p>
            </div>
            `
    });
    return html;
};
